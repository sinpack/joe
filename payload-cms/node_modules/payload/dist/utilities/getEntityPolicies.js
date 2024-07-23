"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getEntityPolicies", {
    enumerable: true,
    get: function() {
        return getEntityPolicies;
    }
});
const _types = require("../fields/config/types");
async function getEntityPolicies(args) {
    const { id, entity, operations, req, type } = args;
    const isLoggedIn = !!req.user;
    // ---- ---- ---- ---- ---- ---- ---- ---- ----
    // `policies` and `promises` get mutated in
    // the functions below, and return in the end
    // ---- ---- ---- ---- ---- ---- ---- ---- ----
    const policies = {
        fields: {}
    };
    let docBeingAccessed;
    async function getEntityDoc({ where } = {}) {
        if (entity.slug) {
            if (type === 'global') {
                return req.payload.findGlobal({
                    overrideAccess: true,
                    req,
                    slug: entity.slug
                });
            }
            if (type === 'collection' && id) {
                if (typeof where === 'object') {
                    const paginatedRes = await req.payload.find({
                        collection: entity.slug,
                        depth: 0,
                        limit: 1,
                        overrideAccess: true,
                        pagination: false,
                        req,
                        where: {
                            ...where,
                            and: [
                                ...where.and || [],
                                {
                                    id: {
                                        equals: id
                                    }
                                }
                            ]
                        }
                    });
                    return paginatedRes?.docs?.[0] || undefined;
                }
                return req.payload.findByID({
                    id,
                    collection: entity.slug,
                    depth: 0,
                    overrideAccess: true,
                    req
                });
            }
        }
        return undefined;
    }
    const createAccessPromise = async ({ access, accessLevel, disableWhere = false, operation, policiesObj })=>{
        const mutablePolicies = policiesObj;
        if (accessLevel === 'field' && docBeingAccessed === undefined) {
            // assign docBeingAccessed first as the promise to avoid multiple calls to getEntityDoc
            docBeingAccessed = getEntityDoc().then((doc)=>{
                docBeingAccessed = doc;
            });
        }
        // awaiting the promise to ensure docBeingAccessed is assigned before it is used
        await docBeingAccessed;
        const data = req?.body;
        const accessResult = await access({
            id,
            data,
            doc: docBeingAccessed,
            req
        });
        if (typeof accessResult === 'object' && !disableWhere) {
            mutablePolicies[operation] = {
                permission: id || type === 'global' ? !!await getEntityDoc({
                    where: accessResult
                }) : true,
                where: accessResult
            };
        } else if (mutablePolicies[operation]?.permission !== false) {
            mutablePolicies[operation] = {
                permission: !!accessResult
            };
        }
    };
    const executeFieldPolicies = async ({ entityPermission, fields, operation, policiesObj })=>{
        const mutablePolicies = policiesObj.fields;
        await Promise.all(fields.map(async (field)=>{
            if (field.name) {
                if (!mutablePolicies[field.name]) mutablePolicies[field.name] = {};
                if (field.access && typeof field.access[operation] === 'function') {
                    await createAccessPromise({
                        access: field.access[operation],
                        accessLevel: 'field',
                        disableWhere: true,
                        operation,
                        policiesObj: mutablePolicies[field.name]
                    });
                } else {
                    mutablePolicies[field.name][operation] = {
                        permission: policiesObj[operation]?.permission
                    };
                }
                if (field.fields) {
                    if (!mutablePolicies[field.name].fields) mutablePolicies[field.name].fields = {};
                    await executeFieldPolicies({
                        entityPermission,
                        fields: field.fields,
                        operation,
                        policiesObj: mutablePolicies[field.name]
                    });
                }
                if (field?.blocks) {
                    if (!mutablePolicies[field.name]?.blocks) mutablePolicies[field.name].blocks = {};
                    await Promise.all(field.blocks.map(async (block)=>{
                        if (!mutablePolicies[field.name].blocks?.[block.slug]) {
                            mutablePolicies[field.name].blocks[block.slug] = {
                                fields: {},
                                [operation]: {
                                    permission: entityPermission
                                }
                            };
                        } else if (!mutablePolicies[field.name].blocks[block.slug][operation]) {
                            mutablePolicies[field.name].blocks[block.slug][operation] = {
                                permission: entityPermission
                            };
                        }
                        await executeFieldPolicies({
                            entityPermission,
                            fields: block.fields,
                            operation,
                            policiesObj: mutablePolicies[field.name].blocks[block.slug]
                        });
                    }));
                }
            } else if (field.fields) {
                await executeFieldPolicies({
                    entityPermission,
                    fields: field.fields,
                    operation,
                    policiesObj
                });
            } else if (field.type === 'tabs') {
                await Promise.all(field.tabs.map(async (tab)=>{
                    if ((0, _types.tabHasName)(tab)) {
                        if (!mutablePolicies[tab.name]) {
                            mutablePolicies[tab.name] = {
                                fields: {},
                                [operation]: {
                                    permission: entityPermission
                                }
                            };
                        } else if (!mutablePolicies[tab.name][operation]) {
                            mutablePolicies[tab.name][operation] = {
                                permission: entityPermission
                            };
                        }
                        await executeFieldPolicies({
                            entityPermission,
                            fields: tab.fields,
                            operation,
                            policiesObj: mutablePolicies[tab.name]
                        });
                    } else {
                        await executeFieldPolicies({
                            entityPermission,
                            fields: tab.fields,
                            operation,
                            policiesObj
                        });
                    }
                }));
            }
        }));
    };
    await operations.reduce(async (priorOperation, operation)=>{
        await priorOperation;
        let entityAccessPromise;
        if (typeof entity.access[operation] === 'function') {
            entityAccessPromise = createAccessPromise({
                access: entity.access[operation],
                accessLevel: 'entity',
                operation,
                policiesObj: policies
            });
        } else {
            policies[operation] = {
                permission: isLoggedIn
            };
        }
        await entityAccessPromise;
        await executeFieldPolicies({
            entityPermission: policies[operation].permission,
            fields: entity.fields,
            operation,
            policiesObj: policies
        });
    }, Promise.resolve());
    return policies;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZ2V0RW50aXR5UG9saWNpZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBDb2xsZWN0aW9uUGVybWlzc2lvbiwgR2xvYmFsUGVybWlzc2lvbiB9IGZyb20gJy4uL2F1dGgvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcsIFR5cGVXaXRoSUQgfSBmcm9tICcuLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IEFjY2VzcyB9IGZyb20gJy4uL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBGaWVsZEFjY2VzcyB9IGZyb20gJy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4uL2dsb2JhbHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBBbGxPcGVyYXRpb25zLCBEb2N1bWVudCwgV2hlcmUgfSBmcm9tICcuLi90eXBlcydcblxuaW1wb3J0IHsgdGFiSGFzTmFtZSB9IGZyb20gJy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5cbnR5cGUgQXJncyA9IHtcbiAgZW50aXR5OiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIHwgU2FuaXRpemVkR2xvYmFsQ29uZmlnXG4gIGlkPzogc3RyaW5nXG4gIG9wZXJhdGlvbnM6IEFsbE9wZXJhdGlvbnNbXVxuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIHR5cGU6ICdjb2xsZWN0aW9uJyB8ICdnbG9iYWwnXG59XG5cbnR5cGUgUmV0dXJuVHlwZTxUIGV4dGVuZHMgQXJncz4gPSBUWyd0eXBlJ10gZXh0ZW5kcyAnZ2xvYmFsJ1xuICA/IEdsb2JhbFBlcm1pc3Npb25cbiAgOiBDb2xsZWN0aW9uUGVybWlzc2lvblxuXG50eXBlIENyZWF0ZUFjY2Vzc1Byb21pc2UgPSAoYXJnczoge1xuICBhY2Nlc3M6IEFjY2VzcyB8IEZpZWxkQWNjZXNzXG4gIGFjY2Vzc0xldmVsOiAnZW50aXR5JyB8ICdmaWVsZCdcbiAgZGlzYWJsZVdoZXJlPzogYm9vbGVhblxuICBvcGVyYXRpb246IEFsbE9wZXJhdGlvbnNcbiAgcG9saWNpZXNPYmo6IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnlcbiAgfVxufSkgPT4gUHJvbWlzZTx2b2lkPlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW50aXR5UG9saWNpZXM8VCBleHRlbmRzIEFyZ3M+KGFyZ3M6IFQpOiBQcm9taXNlPFJldHVyblR5cGU8VD4+IHtcbiAgY29uc3QgeyBpZCwgZW50aXR5LCBvcGVyYXRpb25zLCByZXEsIHR5cGUgfSA9IGFyZ3NcbiAgY29uc3QgaXNMb2dnZWRJbiA9ICEhcmVxLnVzZXJcbiAgLy8gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS1cbiAgLy8gYHBvbGljaWVzYCBhbmQgYHByb21pc2VzYCBnZXQgbXV0YXRlZCBpblxuICAvLyB0aGUgZnVuY3Rpb25zIGJlbG93LCBhbmQgcmV0dXJuIGluIHRoZSBlbmRcbiAgLy8gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS1cbiAgY29uc3QgcG9saWNpZXMgPSB7XG4gICAgZmllbGRzOiB7fSxcbiAgfSBhcyBSZXR1cm5UeXBlPFQ+XG5cbiAgbGV0IGRvY0JlaW5nQWNjZXNzZWRcblxuICBhc3luYyBmdW5jdGlvbiBnZXRFbnRpdHlEb2MoeyB3aGVyZSB9OiB7IHdoZXJlPzogV2hlcmUgfSA9IHt9KTogUHJvbWlzZTxUeXBlV2l0aElEICYgRG9jdW1lbnQ+IHtcbiAgICBpZiAoZW50aXR5LnNsdWcpIHtcbiAgICAgIGlmICh0eXBlID09PSAnZ2xvYmFsJykge1xuICAgICAgICByZXR1cm4gcmVxLnBheWxvYWQuZmluZEdsb2JhbCh7XG4gICAgICAgICAgb3ZlcnJpZGVBY2Nlc3M6IHRydWUsXG4gICAgICAgICAgcmVxLFxuICAgICAgICAgIHNsdWc6IGVudGl0eS5zbHVnLFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZSA9PT0gJ2NvbGxlY3Rpb24nICYmIGlkKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2hlcmUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY29uc3QgcGFnaW5hdGVkUmVzID0gYXdhaXQgcmVxLnBheWxvYWQuZmluZCh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uOiBlbnRpdHkuc2x1ZyxcbiAgICAgICAgICAgIGRlcHRoOiAwLFxuICAgICAgICAgICAgbGltaXQ6IDEsXG4gICAgICAgICAgICBvdmVycmlkZUFjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgLi4ud2hlcmUsXG4gICAgICAgICAgICAgIGFuZDogW1xuICAgICAgICAgICAgICAgIC4uLih3aGVyZS5hbmQgfHwgW10pLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlkOiB7XG4gICAgICAgICAgICAgICAgICAgIGVxdWFsczogaWQsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICByZXR1cm4gcGFnaW5hdGVkUmVzPy5kb2NzPy5bMF0gfHwgdW5kZWZpbmVkXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVxLnBheWxvYWQuZmluZEJ5SUQoe1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIGNvbGxlY3Rpb246IGVudGl0eS5zbHVnLFxuICAgICAgICAgIGRlcHRoOiAwLFxuICAgICAgICAgIG92ZXJyaWRlQWNjZXNzOiB0cnVlLFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBjb25zdCBjcmVhdGVBY2Nlc3NQcm9taXNlOiBDcmVhdGVBY2Nlc3NQcm9taXNlID0gYXN5bmMgKHtcbiAgICBhY2Nlc3MsXG4gICAgYWNjZXNzTGV2ZWwsXG4gICAgZGlzYWJsZVdoZXJlID0gZmFsc2UsXG4gICAgb3BlcmF0aW9uLFxuICAgIHBvbGljaWVzT2JqLFxuICB9KSA9PiB7XG4gICAgY29uc3QgbXV0YWJsZVBvbGljaWVzID0gcG9saWNpZXNPYmpcblxuICAgIGlmIChhY2Nlc3NMZXZlbCA9PT0gJ2ZpZWxkJyAmJiBkb2NCZWluZ0FjY2Vzc2VkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGFzc2lnbiBkb2NCZWluZ0FjY2Vzc2VkIGZpcnN0IGFzIHRoZSBwcm9taXNlIHRvIGF2b2lkIG11bHRpcGxlIGNhbGxzIHRvIGdldEVudGl0eURvY1xuICAgICAgZG9jQmVpbmdBY2Nlc3NlZCA9IGdldEVudGl0eURvYygpLnRoZW4oKGRvYykgPT4ge1xuICAgICAgICBkb2NCZWluZ0FjY2Vzc2VkID0gZG9jXG4gICAgICB9KVxuICAgIH1cbiAgICAvLyBhd2FpdGluZyB0aGUgcHJvbWlzZSB0byBlbnN1cmUgZG9jQmVpbmdBY2Nlc3NlZCBpcyBhc3NpZ25lZCBiZWZvcmUgaXQgaXMgdXNlZFxuICAgIGF3YWl0IGRvY0JlaW5nQWNjZXNzZWRcblxuICAgIGNvbnN0IGRhdGEgPSByZXE/LmJvZHlcblxuICAgIGNvbnN0IGFjY2Vzc1Jlc3VsdCA9IGF3YWl0IGFjY2Vzcyh7IGlkLCBkYXRhLCBkb2M6IGRvY0JlaW5nQWNjZXNzZWQsIHJlcSB9KVxuXG4gICAgaWYgKHR5cGVvZiBhY2Nlc3NSZXN1bHQgPT09ICdvYmplY3QnICYmICFkaXNhYmxlV2hlcmUpIHtcbiAgICAgIG11dGFibGVQb2xpY2llc1tvcGVyYXRpb25dID0ge1xuICAgICAgICBwZXJtaXNzaW9uOlxuICAgICAgICAgIGlkIHx8IHR5cGUgPT09ICdnbG9iYWwnID8gISEoYXdhaXQgZ2V0RW50aXR5RG9jKHsgd2hlcmU6IGFjY2Vzc1Jlc3VsdCB9KSkgOiB0cnVlLFxuICAgICAgICB3aGVyZTogYWNjZXNzUmVzdWx0LFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobXV0YWJsZVBvbGljaWVzW29wZXJhdGlvbl0/LnBlcm1pc3Npb24gIT09IGZhbHNlKSB7XG4gICAgICBtdXRhYmxlUG9saWNpZXNbb3BlcmF0aW9uXSA9IHtcbiAgICAgICAgcGVybWlzc2lvbjogISFhY2Nlc3NSZXN1bHQsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZXhlY3V0ZUZpZWxkUG9saWNpZXMgPSBhc3luYyAoeyBlbnRpdHlQZXJtaXNzaW9uLCBmaWVsZHMsIG9wZXJhdGlvbiwgcG9saWNpZXNPYmogfSkgPT4ge1xuICAgIGNvbnN0IG11dGFibGVQb2xpY2llcyA9IHBvbGljaWVzT2JqLmZpZWxkc1xuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBmaWVsZHMubWFwKGFzeW5jIChmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoZmllbGQubmFtZSkge1xuICAgICAgICAgIGlmICghbXV0YWJsZVBvbGljaWVzW2ZpZWxkLm5hbWVdKSBtdXRhYmxlUG9saWNpZXNbZmllbGQubmFtZV0gPSB7fVxuXG4gICAgICAgICAgaWYgKGZpZWxkLmFjY2VzcyAmJiB0eXBlb2YgZmllbGQuYWNjZXNzW29wZXJhdGlvbl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGF3YWl0IGNyZWF0ZUFjY2Vzc1Byb21pc2Uoe1xuICAgICAgICAgICAgICBhY2Nlc3M6IGZpZWxkLmFjY2Vzc1tvcGVyYXRpb25dLFxuICAgICAgICAgICAgICBhY2Nlc3NMZXZlbDogJ2ZpZWxkJyxcbiAgICAgICAgICAgICAgZGlzYWJsZVdoZXJlOiB0cnVlLFxuICAgICAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgICAgIHBvbGljaWVzT2JqOiBtdXRhYmxlUG9saWNpZXNbZmllbGQubmFtZV0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtdXRhYmxlUG9saWNpZXNbZmllbGQubmFtZV1bb3BlcmF0aW9uXSA9IHtcbiAgICAgICAgICAgICAgcGVybWlzc2lvbjogcG9saWNpZXNPYmpbb3BlcmF0aW9uXT8ucGVybWlzc2lvbixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZmllbGQuZmllbGRzKSB7XG4gICAgICAgICAgICBpZiAoIW11dGFibGVQb2xpY2llc1tmaWVsZC5uYW1lXS5maWVsZHMpIG11dGFibGVQb2xpY2llc1tmaWVsZC5uYW1lXS5maWVsZHMgPSB7fVxuXG4gICAgICAgICAgICBhd2FpdCBleGVjdXRlRmllbGRQb2xpY2llcyh7XG4gICAgICAgICAgICAgIGVudGl0eVBlcm1pc3Npb24sXG4gICAgICAgICAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgICAgIHBvbGljaWVzT2JqOiBtdXRhYmxlUG9saWNpZXNbZmllbGQubmFtZV0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChmaWVsZD8uYmxvY2tzKSB7XG4gICAgICAgICAgICBpZiAoIW11dGFibGVQb2xpY2llc1tmaWVsZC5uYW1lXT8uYmxvY2tzKSBtdXRhYmxlUG9saWNpZXNbZmllbGQubmFtZV0uYmxvY2tzID0ge31cblxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgIGZpZWxkLmJsb2Nrcy5tYXAoYXN5bmMgKGJsb2NrKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFtdXRhYmxlUG9saWNpZXNbZmllbGQubmFtZV0uYmxvY2tzPy5bYmxvY2suc2x1Z10pIHtcbiAgICAgICAgICAgICAgICAgIG11dGFibGVQb2xpY2llc1tmaWVsZC5uYW1lXS5ibG9ja3NbYmxvY2suc2x1Z10gPSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczoge30sXG4gICAgICAgICAgICAgICAgICAgIFtvcGVyYXRpb25dOiB7IHBlcm1pc3Npb246IGVudGl0eVBlcm1pc3Npb24gfSxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFtdXRhYmxlUG9saWNpZXNbZmllbGQubmFtZV0uYmxvY2tzW2Jsb2NrLnNsdWddW29wZXJhdGlvbl0pIHtcbiAgICAgICAgICAgICAgICAgIG11dGFibGVQb2xpY2llc1tmaWVsZC5uYW1lXS5ibG9ja3NbYmxvY2suc2x1Z11bb3BlcmF0aW9uXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbjogZW50aXR5UGVybWlzc2lvbixcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBleGVjdXRlRmllbGRQb2xpY2llcyh7XG4gICAgICAgICAgICAgICAgICBlbnRpdHlQZXJtaXNzaW9uLFxuICAgICAgICAgICAgICAgICAgZmllbGRzOiBibG9jay5maWVsZHMsXG4gICAgICAgICAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgICAgICAgICBwb2xpY2llc09iajogbXV0YWJsZVBvbGljaWVzW2ZpZWxkLm5hbWVdLmJsb2Nrc1tibG9jay5zbHVnXSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQuZmllbGRzKSB7XG4gICAgICAgICAgYXdhaXQgZXhlY3V0ZUZpZWxkUG9saWNpZXMoe1xuICAgICAgICAgICAgZW50aXR5UGVybWlzc2lvbixcbiAgICAgICAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICAgICAgcG9saWNpZXNPYmosXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAndGFicycpIHtcbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGZpZWxkLnRhYnMubWFwKGFzeW5jICh0YWIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRhYkhhc05hbWUodGFiKSkge1xuICAgICAgICAgICAgICAgIGlmICghbXV0YWJsZVBvbGljaWVzW3RhYi5uYW1lXSkge1xuICAgICAgICAgICAgICAgICAgbXV0YWJsZVBvbGljaWVzW3RhYi5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgW29wZXJhdGlvbl06IHsgcGVybWlzc2lvbjogZW50aXR5UGVybWlzc2lvbiB9LFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIW11dGFibGVQb2xpY2llc1t0YWIubmFtZV1bb3BlcmF0aW9uXSkge1xuICAgICAgICAgICAgICAgICAgbXV0YWJsZVBvbGljaWVzW3RhYi5uYW1lXVtvcGVyYXRpb25dID0geyBwZXJtaXNzaW9uOiBlbnRpdHlQZXJtaXNzaW9uIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXdhaXQgZXhlY3V0ZUZpZWxkUG9saWNpZXMoe1xuICAgICAgICAgICAgICAgICAgZW50aXR5UGVybWlzc2lvbixcbiAgICAgICAgICAgICAgICAgIGZpZWxkczogdGFiLmZpZWxkcyxcbiAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgICAgICAgICAgIHBvbGljaWVzT2JqOiBtdXRhYmxlUG9saWNpZXNbdGFiLm5hbWVdLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZXhlY3V0ZUZpZWxkUG9saWNpZXMoe1xuICAgICAgICAgICAgICAgICAgZW50aXR5UGVybWlzc2lvbixcbiAgICAgICAgICAgICAgICAgIGZpZWxkczogdGFiLmZpZWxkcyxcbiAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgICAgICAgICAgIHBvbGljaWVzT2JqLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKVxuICB9XG5cbiAgYXdhaXQgb3BlcmF0aW9ucy5yZWR1Y2UoYXN5bmMgKHByaW9yT3BlcmF0aW9uLCBvcGVyYXRpb24pID0+IHtcbiAgICBhd2FpdCBwcmlvck9wZXJhdGlvblxuXG4gICAgbGV0IGVudGl0eUFjY2Vzc1Byb21pc2U6IFByb21pc2U8dm9pZD5cblxuICAgIGlmICh0eXBlb2YgZW50aXR5LmFjY2Vzc1tvcGVyYXRpb25dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlbnRpdHlBY2Nlc3NQcm9taXNlID0gY3JlYXRlQWNjZXNzUHJvbWlzZSh7XG4gICAgICAgIGFjY2VzczogZW50aXR5LmFjY2Vzc1tvcGVyYXRpb25dLFxuICAgICAgICBhY2Nlc3NMZXZlbDogJ2VudGl0eScsXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgcG9saWNpZXNPYmo6IHBvbGljaWVzLFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcG9saWNpZXNbb3BlcmF0aW9uXSA9IHtcbiAgICAgICAgcGVybWlzc2lvbjogaXNMb2dnZWRJbixcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhd2FpdCBlbnRpdHlBY2Nlc3NQcm9taXNlXG5cbiAgICBhd2FpdCBleGVjdXRlRmllbGRQb2xpY2llcyh7XG4gICAgICBlbnRpdHlQZXJtaXNzaW9uOiBwb2xpY2llc1tvcGVyYXRpb25dLnBlcm1pc3Npb24sXG4gICAgICBmaWVsZHM6IGVudGl0eS5maWVsZHMsXG4gICAgICBvcGVyYXRpb24sXG4gICAgICBwb2xpY2llc09iajogcG9saWNpZXMsXG4gICAgfSlcbiAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpXG5cbiAgcmV0dXJuIHBvbGljaWVzXG59XG4iXSwibmFtZXMiOlsiZ2V0RW50aXR5UG9saWNpZXMiLCJhcmdzIiwiaWQiLCJlbnRpdHkiLCJvcGVyYXRpb25zIiwicmVxIiwidHlwZSIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwicG9saWNpZXMiLCJmaWVsZHMiLCJkb2NCZWluZ0FjY2Vzc2VkIiwiZ2V0RW50aXR5RG9jIiwid2hlcmUiLCJzbHVnIiwicGF5bG9hZCIsImZpbmRHbG9iYWwiLCJvdmVycmlkZUFjY2VzcyIsInBhZ2luYXRlZFJlcyIsImZpbmQiLCJjb2xsZWN0aW9uIiwiZGVwdGgiLCJsaW1pdCIsInBhZ2luYXRpb24iLCJhbmQiLCJlcXVhbHMiLCJkb2NzIiwidW5kZWZpbmVkIiwiZmluZEJ5SUQiLCJjcmVhdGVBY2Nlc3NQcm9taXNlIiwiYWNjZXNzIiwiYWNjZXNzTGV2ZWwiLCJkaXNhYmxlV2hlcmUiLCJvcGVyYXRpb24iLCJwb2xpY2llc09iaiIsIm11dGFibGVQb2xpY2llcyIsInRoZW4iLCJkb2MiLCJkYXRhIiwiYm9keSIsImFjY2Vzc1Jlc3VsdCIsInBlcm1pc3Npb24iLCJleGVjdXRlRmllbGRQb2xpY2llcyIsImVudGl0eVBlcm1pc3Npb24iLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiZmllbGQiLCJuYW1lIiwiYmxvY2tzIiwiYmxvY2siLCJ0YWJzIiwidGFiIiwidGFiSGFzTmFtZSIsInJlZHVjZSIsInByaW9yT3BlcmF0aW9uIiwiZW50aXR5QWNjZXNzUHJvbWlzZSIsInJlc29sdmUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBZ0NzQkE7OztlQUFBQTs7O3VCQXhCSztBQXdCcEIsZUFBZUEsa0JBQWtDQyxJQUFPO0lBQzdELE1BQU0sRUFBRUMsRUFBRSxFQUFFQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUUsR0FBR0w7SUFDOUMsTUFBTU0sYUFBYSxDQUFDLENBQUNGLElBQUlHLElBQUk7SUFDN0IsK0NBQStDO0lBQy9DLDJDQUEyQztJQUMzQyw2Q0FBNkM7SUFDN0MsK0NBQStDO0lBQy9DLE1BQU1DLFdBQVc7UUFDZkMsUUFBUSxDQUFDO0lBQ1g7SUFFQSxJQUFJQztJQUVKLGVBQWVDLGFBQWEsRUFBRUMsS0FBSyxFQUFxQixHQUFHLENBQUMsQ0FBQztRQUMzRCxJQUFJVixPQUFPVyxJQUFJLEVBQUU7WUFDZixJQUFJUixTQUFTLFVBQVU7Z0JBQ3JCLE9BQU9ELElBQUlVLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDO29CQUM1QkMsZ0JBQWdCO29CQUNoQlo7b0JBQ0FTLE1BQU1YLE9BQU9XLElBQUk7Z0JBQ25CO1lBQ0Y7WUFFQSxJQUFJUixTQUFTLGdCQUFnQkosSUFBSTtnQkFDL0IsSUFBSSxPQUFPVyxVQUFVLFVBQVU7b0JBQzdCLE1BQU1LLGVBQWUsTUFBTWIsSUFBSVUsT0FBTyxDQUFDSSxJQUFJLENBQUM7d0JBQzFDQyxZQUFZakIsT0FBT1csSUFBSTt3QkFDdkJPLE9BQU87d0JBQ1BDLE9BQU87d0JBQ1BMLGdCQUFnQjt3QkFDaEJNLFlBQVk7d0JBQ1psQjt3QkFDQVEsT0FBTzs0QkFDTCxHQUFHQSxLQUFLOzRCQUNSVyxLQUFLO21DQUNDWCxNQUFNVyxHQUFHLElBQUksRUFBRTtnQ0FDbkI7b0NBQ0V0QixJQUFJO3dDQUNGdUIsUUFBUXZCO29DQUNWO2dDQUNGOzZCQUNEO3dCQUNIO29CQUNGO29CQUVBLE9BQU9nQixjQUFjUSxNQUFNLENBQUMsRUFBRSxJQUFJQztnQkFDcEM7Z0JBRUEsT0FBT3RCLElBQUlVLE9BQU8sQ0FBQ2EsUUFBUSxDQUFDO29CQUMxQjFCO29CQUNBa0IsWUFBWWpCLE9BQU9XLElBQUk7b0JBQ3ZCTyxPQUFPO29CQUNQSixnQkFBZ0I7b0JBQ2hCWjtnQkFDRjtZQUNGO1FBQ0Y7UUFFQSxPQUFPc0I7SUFDVDtJQUVBLE1BQU1FLHNCQUEyQyxPQUFPLEVBQ3REQyxNQUFNLEVBQ05DLFdBQVcsRUFDWEMsZUFBZSxLQUFLLEVBQ3BCQyxTQUFTLEVBQ1RDLFdBQVcsRUFDWjtRQUNDLE1BQU1DLGtCQUFrQkQ7UUFFeEIsSUFBSUgsZ0JBQWdCLFdBQVdwQixxQkFBcUJnQixXQUFXO1lBQzdELHVGQUF1RjtZQUN2RmhCLG1CQUFtQkMsZUFBZXdCLElBQUksQ0FBQyxDQUFDQztnQkFDdEMxQixtQkFBbUIwQjtZQUNyQjtRQUNGO1FBQ0EsZ0ZBQWdGO1FBQ2hGLE1BQU0xQjtRQUVOLE1BQU0yQixPQUFPakMsS0FBS2tDO1FBRWxCLE1BQU1DLGVBQWUsTUFBTVYsT0FBTztZQUFFNUI7WUFBSW9DO1lBQU1ELEtBQUsxQjtZQUFrQk47UUFBSTtRQUV6RSxJQUFJLE9BQU9tQyxpQkFBaUIsWUFBWSxDQUFDUixjQUFjO1lBQ3JERyxlQUFlLENBQUNGLFVBQVUsR0FBRztnQkFDM0JRLFlBQ0V2QyxNQUFNSSxTQUFTLFdBQVcsQ0FBQyxDQUFFLE1BQU1NLGFBQWE7b0JBQUVDLE9BQU8yQjtnQkFBYSxLQUFNO2dCQUM5RTNCLE9BQU8yQjtZQUNUO1FBQ0YsT0FBTyxJQUFJTCxlQUFlLENBQUNGLFVBQVUsRUFBRVEsZUFBZSxPQUFPO1lBQzNETixlQUFlLENBQUNGLFVBQVUsR0FBRztnQkFDM0JRLFlBQVksQ0FBQyxDQUFDRDtZQUNoQjtRQUNGO0lBQ0Y7SUFFQSxNQUFNRSx1QkFBdUIsT0FBTyxFQUFFQyxnQkFBZ0IsRUFBRWpDLE1BQU0sRUFBRXVCLFNBQVMsRUFBRUMsV0FBVyxFQUFFO1FBQ3RGLE1BQU1DLGtCQUFrQkQsWUFBWXhCLE1BQU07UUFFMUMsTUFBTWtDLFFBQVFDLEdBQUcsQ0FDZm5DLE9BQU9vQyxHQUFHLENBQUMsT0FBT0M7WUFDaEIsSUFBSUEsTUFBTUMsSUFBSSxFQUFFO2dCQUNkLElBQUksQ0FBQ2IsZUFBZSxDQUFDWSxNQUFNQyxJQUFJLENBQUMsRUFBRWIsZUFBZSxDQUFDWSxNQUFNQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUVqRSxJQUFJRCxNQUFNakIsTUFBTSxJQUFJLE9BQU9pQixNQUFNakIsTUFBTSxDQUFDRyxVQUFVLEtBQUssWUFBWTtvQkFDakUsTUFBTUosb0JBQW9CO3dCQUN4QkMsUUFBUWlCLE1BQU1qQixNQUFNLENBQUNHLFVBQVU7d0JBQy9CRixhQUFhO3dCQUNiQyxjQUFjO3dCQUNkQzt3QkFDQUMsYUFBYUMsZUFBZSxDQUFDWSxNQUFNQyxJQUFJLENBQUM7b0JBQzFDO2dCQUNGLE9BQU87b0JBQ0xiLGVBQWUsQ0FBQ1ksTUFBTUMsSUFBSSxDQUFDLENBQUNmLFVBQVUsR0FBRzt3QkFDdkNRLFlBQVlQLFdBQVcsQ0FBQ0QsVUFBVSxFQUFFUTtvQkFDdEM7Z0JBQ0Y7Z0JBRUEsSUFBSU0sTUFBTXJDLE1BQU0sRUFBRTtvQkFDaEIsSUFBSSxDQUFDeUIsZUFBZSxDQUFDWSxNQUFNQyxJQUFJLENBQUMsQ0FBQ3RDLE1BQU0sRUFBRXlCLGVBQWUsQ0FBQ1ksTUFBTUMsSUFBSSxDQUFDLENBQUN0QyxNQUFNLEdBQUcsQ0FBQztvQkFFL0UsTUFBTWdDLHFCQUFxQjt3QkFDekJDO3dCQUNBakMsUUFBUXFDLE1BQU1yQyxNQUFNO3dCQUNwQnVCO3dCQUNBQyxhQUFhQyxlQUFlLENBQUNZLE1BQU1DLElBQUksQ0FBQztvQkFDMUM7Z0JBQ0Y7Z0JBRUEsSUFBSUQsT0FBT0UsUUFBUTtvQkFDakIsSUFBSSxDQUFDZCxlQUFlLENBQUNZLE1BQU1DLElBQUksQ0FBQyxFQUFFQyxRQUFRZCxlQUFlLENBQUNZLE1BQU1DLElBQUksQ0FBQyxDQUFDQyxNQUFNLEdBQUcsQ0FBQztvQkFFaEYsTUFBTUwsUUFBUUMsR0FBRyxDQUNmRSxNQUFNRSxNQUFNLENBQUNILEdBQUcsQ0FBQyxPQUFPSTt3QkFDdEIsSUFBSSxDQUFDZixlQUFlLENBQUNZLE1BQU1DLElBQUksQ0FBQyxDQUFDQyxNQUFNLEVBQUUsQ0FBQ0MsTUFBTXBDLElBQUksQ0FBQyxFQUFFOzRCQUNyRHFCLGVBQWUsQ0FBQ1ksTUFBTUMsSUFBSSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTXBDLElBQUksQ0FBQyxHQUFHO2dDQUMvQ0osUUFBUSxDQUFDO2dDQUNULENBQUN1QixVQUFVLEVBQUU7b0NBQUVRLFlBQVlFO2dDQUFpQjs0QkFDOUM7d0JBQ0YsT0FBTyxJQUFJLENBQUNSLGVBQWUsQ0FBQ1ksTUFBTUMsSUFBSSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTXBDLElBQUksQ0FBQyxDQUFDbUIsVUFBVSxFQUFFOzRCQUNyRUUsZUFBZSxDQUFDWSxNQUFNQyxJQUFJLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNcEMsSUFBSSxDQUFDLENBQUNtQixVQUFVLEdBQUc7Z0NBQzFEUSxZQUFZRTs0QkFDZDt3QkFDRjt3QkFFQSxNQUFNRCxxQkFBcUI7NEJBQ3pCQzs0QkFDQWpDLFFBQVF3QyxNQUFNeEMsTUFBTTs0QkFDcEJ1Qjs0QkFDQUMsYUFBYUMsZUFBZSxDQUFDWSxNQUFNQyxJQUFJLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNcEMsSUFBSSxDQUFDO3dCQUM3RDtvQkFDRjtnQkFFSjtZQUNGLE9BQU8sSUFBSWlDLE1BQU1yQyxNQUFNLEVBQUU7Z0JBQ3ZCLE1BQU1nQyxxQkFBcUI7b0JBQ3pCQztvQkFDQWpDLFFBQVFxQyxNQUFNckMsTUFBTTtvQkFDcEJ1QjtvQkFDQUM7Z0JBQ0Y7WUFDRixPQUFPLElBQUlhLE1BQU16QyxJQUFJLEtBQUssUUFBUTtnQkFDaEMsTUFBTXNDLFFBQVFDLEdBQUcsQ0FDZkUsTUFBTUksSUFBSSxDQUFDTCxHQUFHLENBQUMsT0FBT007b0JBQ3BCLElBQUlDLElBQUFBLGlCQUFVLEVBQUNELE1BQU07d0JBQ25CLElBQUksQ0FBQ2pCLGVBQWUsQ0FBQ2lCLElBQUlKLElBQUksQ0FBQyxFQUFFOzRCQUM5QmIsZUFBZSxDQUFDaUIsSUFBSUosSUFBSSxDQUFDLEdBQUc7Z0NBQzFCdEMsUUFBUSxDQUFDO2dDQUNULENBQUN1QixVQUFVLEVBQUU7b0NBQUVRLFlBQVlFO2dDQUFpQjs0QkFDOUM7d0JBQ0YsT0FBTyxJQUFJLENBQUNSLGVBQWUsQ0FBQ2lCLElBQUlKLElBQUksQ0FBQyxDQUFDZixVQUFVLEVBQUU7NEJBQ2hERSxlQUFlLENBQUNpQixJQUFJSixJQUFJLENBQUMsQ0FBQ2YsVUFBVSxHQUFHO2dDQUFFUSxZQUFZRTs0QkFBaUI7d0JBQ3hFO3dCQUNBLE1BQU1ELHFCQUFxQjs0QkFDekJDOzRCQUNBakMsUUFBUTBDLElBQUkxQyxNQUFNOzRCQUNsQnVCOzRCQUNBQyxhQUFhQyxlQUFlLENBQUNpQixJQUFJSixJQUFJLENBQUM7d0JBQ3hDO29CQUNGLE9BQU87d0JBQ0wsTUFBTU4scUJBQXFCOzRCQUN6QkM7NEJBQ0FqQyxRQUFRMEMsSUFBSTFDLE1BQU07NEJBQ2xCdUI7NEJBQ0FDO3dCQUNGO29CQUNGO2dCQUNGO1lBRUo7UUFDRjtJQUVKO0lBRUEsTUFBTTlCLFdBQVdrRCxNQUFNLENBQUMsT0FBT0MsZ0JBQWdCdEI7UUFDN0MsTUFBTXNCO1FBRU4sSUFBSUM7UUFFSixJQUFJLE9BQU9yRCxPQUFPMkIsTUFBTSxDQUFDRyxVQUFVLEtBQUssWUFBWTtZQUNsRHVCLHNCQUFzQjNCLG9CQUFvQjtnQkFDeENDLFFBQVEzQixPQUFPMkIsTUFBTSxDQUFDRyxVQUFVO2dCQUNoQ0YsYUFBYTtnQkFDYkU7Z0JBQ0FDLGFBQWF6QjtZQUNmO1FBQ0YsT0FBTztZQUNMQSxRQUFRLENBQUN3QixVQUFVLEdBQUc7Z0JBQ3BCUSxZQUFZbEM7WUFDZDtRQUNGO1FBRUEsTUFBTWlEO1FBRU4sTUFBTWQscUJBQXFCO1lBQ3pCQyxrQkFBa0JsQyxRQUFRLENBQUN3QixVQUFVLENBQUNRLFVBQVU7WUFDaEQvQixRQUFRUCxPQUFPTyxNQUFNO1lBQ3JCdUI7WUFDQUMsYUFBYXpCO1FBQ2Y7SUFDRixHQUFHbUMsUUFBUWEsT0FBTztJQUVsQixPQUFPaEQ7QUFDVCJ9