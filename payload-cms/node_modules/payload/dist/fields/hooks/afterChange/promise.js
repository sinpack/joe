/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "promise", {
    enumerable: true,
    get: function() {
        return promise;
    }
});
const _types = require("../../config/types");
const _traverseFields = require("./traverseFields");
const promise = async ({ collection, context, data, doc, field, global, operation, previousDoc, previousSiblingDoc, req, siblingData, siblingDoc })=>{
    if ((0, _types.fieldAffectsData)(field)) {
        // Execute hooks
        if (field.hooks?.afterChange) {
            await field.hooks.afterChange.reduce(async (priorHook, currentHook)=>{
                await priorHook;
                const hookedValue = await currentHook({
                    collection,
                    context,
                    data,
                    field,
                    global,
                    operation,
                    originalDoc: doc,
                    previousDoc,
                    previousSiblingDoc,
                    previousValue: previousDoc[field.name],
                    req,
                    siblingData,
                    value: siblingData[field.name]
                });
                if (hookedValue !== undefined) {
                    siblingDoc[field.name] = hookedValue;
                }
            }, Promise.resolve());
        }
    }
    // Traverse subfields
    switch(field.type){
        case 'group':
            {
                await (0, _traverseFields.traverseFields)({
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.fields,
                    global,
                    operation,
                    previousDoc,
                    previousSiblingDoc: previousDoc[field.name],
                    req,
                    siblingData: siblingData?.[field.name] || {},
                    siblingDoc: siblingDoc[field.name]
                });
                break;
            }
        case 'array':
            {
                const rows = siblingDoc[field.name];
                if (Array.isArray(rows)) {
                    const promises = [];
                    rows.forEach((row, i)=>{
                        promises.push((0, _traverseFields.traverseFields)({
                            collection,
                            context,
                            data,
                            doc,
                            fields: field.fields,
                            global,
                            operation,
                            previousDoc,
                            previousSiblingDoc: previousDoc?.[field.name]?.[i] || {},
                            req,
                            siblingData: siblingData?.[field.name]?.[i] || {},
                            siblingDoc: {
                                ...row
                            } || {}
                        }));
                    });
                    await Promise.all(promises);
                }
                break;
            }
        case 'blocks':
            {
                const rows = siblingDoc[field.name];
                if (Array.isArray(rows)) {
                    const promises = [];
                    rows.forEach((row, i)=>{
                        const block = field.blocks.find((blockType)=>blockType.slug === row.blockType);
                        if (block) {
                            promises.push((0, _traverseFields.traverseFields)({
                                collection,
                                context,
                                data,
                                doc,
                                fields: block.fields,
                                global,
                                operation,
                                previousDoc,
                                previousSiblingDoc: previousDoc?.[field.name]?.[i] || {},
                                req,
                                siblingData: siblingData?.[field.name]?.[i] || {},
                                siblingDoc: {
                                    ...row
                                } || {}
                            }));
                        }
                    });
                    await Promise.all(promises);
                }
                break;
            }
        case 'row':
        case 'collapsible':
            {
                await (0, _traverseFields.traverseFields)({
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.fields,
                    global,
                    operation,
                    previousDoc,
                    previousSiblingDoc: {
                        ...previousSiblingDoc
                    },
                    req,
                    siblingData: siblingData || {},
                    siblingDoc: {
                        ...siblingDoc
                    }
                });
                break;
            }
        case 'tab':
            {
                let tabSiblingData = siblingData;
                let tabSiblingDoc = siblingDoc;
                let tabPreviousSiblingDoc = siblingDoc;
                if ((0, _types.tabHasName)(field)) {
                    tabSiblingData = siblingData[field.name];
                    tabSiblingDoc = siblingDoc[field.name];
                    tabPreviousSiblingDoc = previousDoc[field.name];
                }
                await (0, _traverseFields.traverseFields)({
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.fields,
                    global,
                    operation,
                    previousDoc,
                    previousSiblingDoc: tabPreviousSiblingDoc,
                    req,
                    siblingData: tabSiblingData,
                    siblingDoc: tabSiblingDoc
                });
                break;
            }
        case 'tabs':
            {
                await (0, _traverseFields.traverseFields)({
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.tabs.map((tab)=>({
                            ...tab,
                            type: 'tab'
                        })),
                    global,
                    operation,
                    previousDoc,
                    previousSiblingDoc: {
                        ...previousSiblingDoc
                    },
                    req,
                    siblingData: siblingData || {},
                    siblingDoc: {
                        ...siblingDoc
                    }
                });
                break;
            }
        default:
            {
                break;
            }
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYWZ0ZXJDaGFuZ2UvcHJvbWlzZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCwgUmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWxzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgRmllbGQsIFRhYkFzRmllbGQgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCB7IGZpZWxkQWZmZWN0c0RhdGEsIHRhYkhhc05hbWUgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnXG5pbXBvcnQgeyB0cmF2ZXJzZUZpZWxkcyB9IGZyb20gJy4vdHJhdmVyc2VGaWVsZHMnXG5cbnR5cGUgQXJncyA9IHtcbiAgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB8IG51bGxcbiAgY29udGV4dDogUmVxdWVzdENvbnRleHRcbiAgZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgZG9jOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBmaWVsZDogRmllbGQgfCBUYWJBc0ZpZWxkXG4gIGdsb2JhbDogU2FuaXRpemVkR2xvYmFsQ29uZmlnIHwgbnVsbFxuICBvcGVyYXRpb246ICdjcmVhdGUnIHwgJ3VwZGF0ZSdcbiAgcHJldmlvdXNEb2M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIHByZXZpb3VzU2libGluZ0RvYzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBzaWJsaW5nRGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgc2libGluZ0RvYzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyByZXNwb25zaWJsZSBmb3IgdGhlIGZvbGxvd2luZyBhY3Rpb25zLCBpbiBvcmRlcjpcbi8vIC0gRXhlY3V0ZSBmaWVsZCBob29rc1xuXG5leHBvcnQgY29uc3QgcHJvbWlzZSA9IGFzeW5jICh7XG4gIGNvbGxlY3Rpb24sXG4gIGNvbnRleHQsXG4gIGRhdGEsXG4gIGRvYyxcbiAgZmllbGQsXG4gIGdsb2JhbCxcbiAgb3BlcmF0aW9uLFxuICBwcmV2aW91c0RvYyxcbiAgcHJldmlvdXNTaWJsaW5nRG9jLFxuICByZXEsXG4gIHNpYmxpbmdEYXRhLFxuICBzaWJsaW5nRG9jLFxufTogQXJncyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoZmllbGRBZmZlY3RzRGF0YShmaWVsZCkpIHtcbiAgICAvLyBFeGVjdXRlIGhvb2tzXG4gICAgaWYgKGZpZWxkLmhvb2tzPy5hZnRlckNoYW5nZSkge1xuICAgICAgYXdhaXQgZmllbGQuaG9va3MuYWZ0ZXJDaGFuZ2UucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGN1cnJlbnRIb29rKSA9PiB7XG4gICAgICAgIGF3YWl0IHByaW9ySG9va1xuXG4gICAgICAgIGNvbnN0IGhvb2tlZFZhbHVlID0gYXdhaXQgY3VycmVudEhvb2soe1xuICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgIGdsb2JhbCxcbiAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgb3JpZ2luYWxEb2M6IGRvYyxcbiAgICAgICAgICBwcmV2aW91c0RvYyxcbiAgICAgICAgICBwcmV2aW91c1NpYmxpbmdEb2MsXG4gICAgICAgICAgcHJldmlvdXNWYWx1ZTogcHJldmlvdXNEb2NbZmllbGQubmFtZV0sXG4gICAgICAgICAgcmVxLFxuICAgICAgICAgIHNpYmxpbmdEYXRhLFxuICAgICAgICAgIHZhbHVlOiBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSxcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoaG9va2VkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gPSBob29rZWRWYWx1ZVxuICAgICAgICB9XG4gICAgICB9LCBQcm9taXNlLnJlc29sdmUoKSlcbiAgICB9XG4gIH1cblxuICAvLyBUcmF2ZXJzZSBzdWJmaWVsZHNcbiAgc3dpdGNoIChmaWVsZC50eXBlKSB7XG4gICAgY2FzZSAnZ3JvdXAnOiB7XG4gICAgICBhd2FpdCB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGRvYyxcbiAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgIGdsb2JhbCxcbiAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICBwcmV2aW91c0RvYyxcbiAgICAgICAgcHJldmlvdXNTaWJsaW5nRG9jOiBwcmV2aW91c0RvY1tmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICAgICAgcmVxLFxuICAgICAgICBzaWJsaW5nRGF0YTogKHNpYmxpbmdEYXRhPy5bZmllbGQubmFtZV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pIHx8IHt9LFxuICAgICAgICBzaWJsaW5nRG9jOiBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICAgICAgfSlcblxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBjYXNlICdhcnJheSc6IHtcbiAgICAgIGNvbnN0IHJvd3MgPSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdXG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd3MpKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW11cbiAgICAgICAgcm93cy5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICAgICAgICBwcm9taXNlcy5wdXNoKFxuICAgICAgICAgICAgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICBkb2MsXG4gICAgICAgICAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgICAgICAgICBnbG9iYWwsXG4gICAgICAgICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgICAgICAgcHJldmlvdXNEb2MsXG4gICAgICAgICAgICAgIHByZXZpb3VzU2libGluZ0RvYzogcHJldmlvdXNEb2M/LltmaWVsZC5uYW1lXT8uW2ldIHx8ICh7fSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiksXG4gICAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgICAgc2libGluZ0RhdGE6IHNpYmxpbmdEYXRhPy5bZmllbGQubmFtZV0/LltpXSB8fCB7fSxcbiAgICAgICAgICAgICAgc2libGluZ0RvYzogeyAuLi5yb3cgfSB8fCB7fSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGNhc2UgJ2Jsb2Nrcyc6IHtcbiAgICAgIGNvbnN0IHJvd3MgPSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdXG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd3MpKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW11cbiAgICAgICAgcm93cy5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICAgICAgICBjb25zdCBibG9jayA9IGZpZWxkLmJsb2Nrcy5maW5kKChibG9ja1R5cGUpID0+IGJsb2NrVHlwZS5zbHVnID09PSByb3cuYmxvY2tUeXBlKVxuXG4gICAgICAgICAgaWYgKGJsb2NrKSB7XG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxuICAgICAgICAgICAgICB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgZG9jLFxuICAgICAgICAgICAgICAgIGZpZWxkczogYmxvY2suZmllbGRzLFxuICAgICAgICAgICAgICAgIGdsb2JhbCxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgICAgICAgcHJldmlvdXNEb2MsXG4gICAgICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nRG9jOlxuICAgICAgICAgICAgICAgICAgcHJldmlvdXNEb2M/LltmaWVsZC5uYW1lXT8uW2ldIHx8ICh7fSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiksXG4gICAgICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgICAgIHNpYmxpbmdEYXRhOiBzaWJsaW5nRGF0YT8uW2ZpZWxkLm5hbWVdPy5baV0gfHwge30sXG4gICAgICAgICAgICAgICAgc2libGluZ0RvYzogeyAuLi5yb3cgfSB8fCB7fSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICAgIH1cblxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBjYXNlICdyb3cnOlxuICAgIGNhc2UgJ2NvbGxhcHNpYmxlJzoge1xuICAgICAgYXdhaXQgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBkYXRhLFxuICAgICAgICBkb2MsXG4gICAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgICBnbG9iYWwsXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgcHJldmlvdXNEb2MsXG4gICAgICAgIHByZXZpb3VzU2libGluZ0RvYzogeyAuLi5wcmV2aW91c1NpYmxpbmdEb2MgfSxcbiAgICAgICAgcmVxLFxuICAgICAgICBzaWJsaW5nRGF0YTogc2libGluZ0RhdGEgfHwge30sXG4gICAgICAgIHNpYmxpbmdEb2M6IHsgLi4uc2libGluZ0RvYyB9LFxuICAgICAgfSlcblxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBjYXNlICd0YWInOiB7XG4gICAgICBsZXQgdGFiU2libGluZ0RhdGEgPSBzaWJsaW5nRGF0YVxuICAgICAgbGV0IHRhYlNpYmxpbmdEb2MgPSBzaWJsaW5nRG9jXG4gICAgICBsZXQgdGFiUHJldmlvdXNTaWJsaW5nRG9jID0gc2libGluZ0RvY1xuXG4gICAgICBpZiAodGFiSGFzTmFtZShmaWVsZCkpIHtcbiAgICAgICAgdGFiU2libGluZ0RhdGEgPSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgICB0YWJTaWJsaW5nRG9jID0gc2libGluZ0RvY1tmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgICB0YWJQcmV2aW91c1NpYmxpbmdEb2MgPSBwcmV2aW91c0RvY1tmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGRvYyxcbiAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgIGdsb2JhbCxcbiAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICBwcmV2aW91c0RvYyxcbiAgICAgICAgcHJldmlvdXNTaWJsaW5nRG9jOiB0YWJQcmV2aW91c1NpYmxpbmdEb2MsXG4gICAgICAgIHJlcSxcbiAgICAgICAgc2libGluZ0RhdGE6IHRhYlNpYmxpbmdEYXRhLFxuICAgICAgICBzaWJsaW5nRG9jOiB0YWJTaWJsaW5nRG9jLFxuICAgICAgfSlcblxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBjYXNlICd0YWJzJzoge1xuICAgICAgYXdhaXQgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBkYXRhLFxuICAgICAgICBkb2MsXG4gICAgICAgIGZpZWxkczogZmllbGQudGFicy5tYXAoKHRhYikgPT4gKHsgLi4udGFiLCB0eXBlOiAndGFiJyB9KSksXG4gICAgICAgIGdsb2JhbCxcbiAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICBwcmV2aW91c0RvYyxcbiAgICAgICAgcHJldmlvdXNTaWJsaW5nRG9jOiB7IC4uLnByZXZpb3VzU2libGluZ0RvYyB9LFxuICAgICAgICByZXEsXG4gICAgICAgIHNpYmxpbmdEYXRhOiBzaWJsaW5nRGF0YSB8fCB7fSxcbiAgICAgICAgc2libGluZ0RvYzogeyAuLi5zaWJsaW5nRG9jIH0sXG4gICAgICB9KVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbInByb21pc2UiLCJjb2xsZWN0aW9uIiwiY29udGV4dCIsImRhdGEiLCJkb2MiLCJmaWVsZCIsImdsb2JhbCIsIm9wZXJhdGlvbiIsInByZXZpb3VzRG9jIiwicHJldmlvdXNTaWJsaW5nRG9jIiwicmVxIiwic2libGluZ0RhdGEiLCJzaWJsaW5nRG9jIiwiZmllbGRBZmZlY3RzRGF0YSIsImhvb2tzIiwiYWZ0ZXJDaGFuZ2UiLCJyZWR1Y2UiLCJwcmlvckhvb2siLCJjdXJyZW50SG9vayIsImhvb2tlZFZhbHVlIiwib3JpZ2luYWxEb2MiLCJwcmV2aW91c1ZhbHVlIiwibmFtZSIsInZhbHVlIiwidW5kZWZpbmVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0eXBlIiwidHJhdmVyc2VGaWVsZHMiLCJmaWVsZHMiLCJyb3dzIiwiQXJyYXkiLCJpc0FycmF5IiwicHJvbWlzZXMiLCJmb3JFYWNoIiwicm93IiwiaSIsInB1c2giLCJhbGwiLCJibG9jayIsImJsb2NrcyIsImZpbmQiLCJibG9ja1R5cGUiLCJzbHVnIiwidGFiU2libGluZ0RhdGEiLCJ0YWJTaWJsaW5nRG9jIiwidGFiUHJldmlvdXNTaWJsaW5nRG9jIiwidGFiSGFzTmFtZSIsInRhYnMiLCJtYXAiLCJ0YWIiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7K0JBMkJ2QkE7OztlQUFBQTs7O3VCQXJCZ0M7Z0NBQ2Q7QUFvQnhCLE1BQU1BLFVBQVUsT0FBTyxFQUM1QkMsVUFBVSxFQUNWQyxPQUFPLEVBQ1BDLElBQUksRUFDSkMsR0FBRyxFQUNIQyxLQUFLLEVBQ0xDLE1BQU0sRUFDTkMsU0FBUyxFQUNUQyxXQUFXLEVBQ1hDLGtCQUFrQixFQUNsQkMsR0FBRyxFQUNIQyxXQUFXLEVBQ1hDLFVBQVUsRUFDTDtJQUNMLElBQUlDLElBQUFBLHVCQUFnQixFQUFDUixRQUFRO1FBQzNCLGdCQUFnQjtRQUNoQixJQUFJQSxNQUFNUyxLQUFLLEVBQUVDLGFBQWE7WUFDNUIsTUFBTVYsTUFBTVMsS0FBSyxDQUFDQyxXQUFXLENBQUNDLE1BQU0sQ0FBQyxPQUFPQyxXQUFXQztnQkFDckQsTUFBTUQ7Z0JBRU4sTUFBTUUsY0FBYyxNQUFNRCxZQUFZO29C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