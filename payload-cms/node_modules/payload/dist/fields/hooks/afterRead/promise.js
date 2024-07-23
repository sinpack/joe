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
const _getDefaultValue = /*#__PURE__*/ _interop_require_default(require("../../getDefaultValue"));
const _relationshipPopulationPromise = /*#__PURE__*/ _interop_require_default(require("./relationshipPopulationPromise"));
const _traverseFields = require("./traverseFields");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const promise = async ({ collection, context, currentDepth, depth, doc, draft, fallbackLocale, field, fieldPromises, findMany, flattenLocales, global, locale, overrideAccess, populationPromises, req, showHiddenFields, siblingDoc, triggerAccessControl = true, triggerHooks = true })=>{
    if ((0, _types.fieldAffectsData)(field) && field.hidden && typeof siblingDoc[field.name] !== 'undefined' && !showHiddenFields) {
        delete siblingDoc[field.name];
    }
    const shouldHoistLocalizedValue = flattenLocales && (0, _types.fieldAffectsData)(field) && typeof siblingDoc[field.name] === 'object' && siblingDoc[field.name] !== null && field.localized && locale !== 'all' && req.payload.config.localization;
    if (shouldHoistLocalizedValue) {
        // replace actual value with localized value before sanitizing
        // { [locale]: fields } -> fields
        const value = siblingDoc[field.name][locale];
        let hoistedValue = value;
        if (fallbackLocale && fallbackLocale !== locale) {
            const fallbackValue = siblingDoc[field.name][fallbackLocale];
            const isNullOrUndefined = typeof value === 'undefined' || value === null;
            if (fallbackValue) {
                switch(field.type){
                    case 'text':
                    case 'textarea':
                        {
                            if (value === '' || isNullOrUndefined) {
                                hoistedValue = fallbackValue;
                            }
                            break;
                        }
                    default:
                        {
                            if (isNullOrUndefined) {
                                hoistedValue = fallbackValue;
                            }
                            break;
                        }
                }
            }
        }
        siblingDoc[field.name] = hoistedValue;
    }
    // Sanitize outgoing field value
    switch(field.type){
        case 'group':
            {
                // Fill groups with empty objects so fields with hooks within groups can populate
                // themselves virtually as necessary
                if (typeof siblingDoc[field.name] === 'undefined') {
                    siblingDoc[field.name] = {};
                }
                break;
            }
        case 'tabs':
            {
                field.tabs.forEach((tab)=>{
                    if ((0, _types.tabHasName)(tab) && (typeof siblingDoc[tab.name] === 'undefined' || siblingDoc[tab.name] === null)) {
                        siblingDoc[tab.name] = {};
                    }
                });
                break;
            }
        case 'richText':
            {
                const editor = field?.editor;
                // This is run here AND in the GraphQL Resolver
                if (editor?.populationPromise) {
                    const populateDepth = field?.maxDepth !== undefined && field?.maxDepth < depth ? field?.maxDepth : depth;
                    const populationPromise = editor.populationPromise({
                        context,
                        currentDepth,
                        depth: populateDepth,
                        draft,
                        field,
                        findMany,
                        flattenLocales,
                        overrideAccess,
                        populationPromises,
                        req,
                        showHiddenFields,
                        siblingDoc
                    });
                    if (populationPromise) {
                        populationPromises.push(populationPromise);
                    }
                }
                // This is only run here, independent of depth
                if (editor?.afterReadPromise) {
                    const afterReadPromise = editor?.afterReadPromise({
                        field,
                        incomingEditorState: siblingDoc[field.name],
                        siblingDoc
                    });
                    if (afterReadPromise) {
                        populationPromises.push(afterReadPromise);
                    }
                }
                break;
            }
        case 'point':
            {
                const pointDoc = siblingDoc[field.name];
                if (Array.isArray(pointDoc?.coordinates) && pointDoc.coordinates.length === 2) {
                    siblingDoc[field.name] = pointDoc.coordinates;
                } else {
                    siblingDoc[field.name] = undefined;
                }
                break;
            }
        default:
            {
                break;
            }
    }
    if ((0, _types.fieldAffectsData)(field)) {
        // Execute hooks
        if (triggerHooks && field.hooks?.afterRead) {
            await field.hooks.afterRead.reduce(async (priorHook, currentHook)=>{
                await priorHook;
                const shouldRunHookOnAllLocales = field.localized && (locale === 'all' || !flattenLocales) && typeof siblingDoc[field.name] === 'object';
                if (shouldRunHookOnAllLocales) {
                    const hookPromises = Object.entries(siblingDoc[field.name]).map(([locale, value])=>(async ()=>{
                            const hookedValue = await currentHook({
                                collection,
                                context,
                                data: doc,
                                field,
                                global,
                                operation: 'read',
                                originalDoc: doc,
                                req,
                                siblingData: siblingDoc,
                                value
                            });
                            if (hookedValue !== undefined) {
                                siblingDoc[field.name][locale] = hookedValue;
                            }
                        })());
                    await Promise.all(hookPromises);
                } else {
                    const hookedValue = await currentHook({
                        collection,
                        context,
                        data: doc,
                        field,
                        findMany,
                        global,
                        operation: 'read',
                        originalDoc: doc,
                        req,
                        siblingData: siblingDoc,
                        value: siblingDoc[field.name]
                    });
                    if (hookedValue !== undefined) {
                        siblingDoc[field.name] = hookedValue;
                    }
                }
            }, Promise.resolve());
        }
        // Execute access control
        let allowDefaultValue = true;
        if (triggerAccessControl && field.access && field.access.read) {
            const result = overrideAccess ? true : await field.access.read({
                id: doc.id,
                data: doc,
                doc,
                req,
                siblingData: siblingDoc
            });
            if (!result) {
                allowDefaultValue = false;
                delete siblingDoc[field.name];
            }
        }
        // Set defaultValue on the field for globals being returned without being first created
        // or collection documents created prior to having a default
        if (allowDefaultValue && typeof siblingDoc[field.name] === 'undefined' && typeof field.defaultValue !== 'undefined') {
            siblingDoc[field.name] = await (0, _getDefaultValue.default)({
                defaultValue: field.defaultValue,
                locale,
                user: req.user,
                value: siblingDoc[field.name]
            });
        }
        if (field.type === 'relationship' || field.type === 'upload') {
            populationPromises.push((0, _relationshipPopulationPromise.default)({
                currentDepth,
                depth,
                draft,
                fallbackLocale,
                field,
                locale,
                overrideAccess,
                req,
                showHiddenFields,
                siblingDoc
            }));
        }
    }
    switch(field.type){
        case 'group':
            {
                let groupDoc = siblingDoc[field.name];
                if (typeof siblingDoc[field.name] !== 'object') groupDoc = {};
                (0, _traverseFields.traverseFields)({
                    collection,
                    context,
                    currentDepth,
                    depth,
                    doc,
                    draft,
                    fallbackLocale,
                    fieldPromises,
                    fields: field.fields,
                    findMany,
                    flattenLocales,
                    global,
                    locale,
                    overrideAccess,
                    populationPromises,
                    req,
                    showHiddenFields,
                    siblingDoc: groupDoc,
                    triggerAccessControl,
                    triggerHooks
                });
                break;
            }
        case 'array':
            {
                const rows = siblingDoc[field.name];
                if (Array.isArray(rows)) {
                    rows.forEach((row)=>{
                        (0, _traverseFields.traverseFields)({
                            collection,
                            context,
                            currentDepth,
                            depth,
                            doc,
                            draft,
                            fallbackLocale,
                            fieldPromises,
                            fields: field.fields,
                            findMany,
                            flattenLocales,
                            global,
                            locale,
                            overrideAccess,
                            populationPromises,
                            req,
                            showHiddenFields,
                            siblingDoc: row || {},
                            triggerAccessControl,
                            triggerHooks
                        });
                    });
                } else if (!shouldHoistLocalizedValue && typeof rows === 'object' && rows !== null) {
                    Object.values(rows).forEach((localeRows)=>{
                        if (Array.isArray(localeRows)) {
                            localeRows.forEach((row)=>{
                                (0, _traverseFields.traverseFields)({
                                    collection,
                                    context,
                                    currentDepth,
                                    depth,
                                    doc,
                                    draft,
                                    fallbackLocale,
                                    fieldPromises,
                                    fields: field.fields,
                                    findMany,
                                    flattenLocales,
                                    global,
                                    locale,
                                    overrideAccess,
                                    populationPromises,
                                    req,
                                    showHiddenFields,
                                    siblingDoc: row || {},
                                    triggerAccessControl,
                                    triggerHooks
                                });
                            });
                        }
                    });
                } else {
                    siblingDoc[field.name] = [];
                }
                break;
            }
        case 'blocks':
            {
                const rows = siblingDoc[field.name];
                if (Array.isArray(rows)) {
                    rows.forEach((row)=>{
                        const block = field.blocks.find((blockType)=>blockType.slug === row.blockType);
                        if (block) {
                            (0, _traverseFields.traverseFields)({
                                collection,
                                context,
                                currentDepth,
                                depth,
                                doc,
                                draft,
                                fallbackLocale,
                                fieldPromises,
                                fields: block.fields,
                                findMany,
                                flattenLocales,
                                global,
                                locale,
                                overrideAccess,
                                populationPromises,
                                req,
                                showHiddenFields,
                                siblingDoc: row || {},
                                triggerAccessControl,
                                triggerHooks
                            });
                        }
                    });
                } else if (!shouldHoistLocalizedValue && typeof rows === 'object' && rows !== null) {
                    Object.values(rows).forEach((localeRows)=>{
                        if (Array.isArray(localeRows)) {
                            localeRows.forEach((row)=>{
                                const block = field.blocks.find((blockType)=>blockType.slug === row.blockType);
                                if (block) {
                                    (0, _traverseFields.traverseFields)({
                                        collection,
                                        context,
                                        currentDepth,
                                        depth,
                                        doc,
                                        draft,
                                        fallbackLocale,
                                        fieldPromises,
                                        fields: block.fields,
                                        findMany,
                                        flattenLocales,
                                        global,
                                        locale,
                                        overrideAccess,
                                        populationPromises,
                                        req,
                                        showHiddenFields,
                                        siblingDoc: row || {},
                                        triggerAccessControl,
                                        triggerHooks
                                    });
                                }
                            });
                        }
                    });
                } else {
                    siblingDoc[field.name] = [];
                }
                break;
            }
        case 'row':
        case 'collapsible':
            {
                (0, _traverseFields.traverseFields)({
                    collection,
                    context,
                    currentDepth,
                    depth,
                    doc,
                    draft,
                    fallbackLocale,
                    fieldPromises,
                    fields: field.fields,
                    findMany,
                    flattenLocales,
                    global,
                    locale,
                    overrideAccess,
                    populationPromises,
                    req,
                    showHiddenFields,
                    siblingDoc,
                    triggerAccessControl,
                    triggerHooks
                });
                break;
            }
        case 'tab':
            {
                let tabDoc = siblingDoc;
                if ((0, _types.tabHasName)(field)) {
                    tabDoc = siblingDoc[field.name];
                    if (typeof siblingDoc[field.name] !== 'object') tabDoc = {};
                }
                (0, _traverseFields.traverseFields)({
                    collection,
                    context,
                    currentDepth,
                    depth,
                    doc,
                    draft,
                    fallbackLocale,
                    fieldPromises,
                    fields: field.fields,
                    findMany,
                    flattenLocales,
                    global,
                    locale,
                    overrideAccess,
                    populationPromises,
                    req,
                    showHiddenFields,
                    siblingDoc: tabDoc,
                    triggerAccessControl,
                    triggerHooks
                });
                break;
            }
        case 'tabs':
            {
                (0, _traverseFields.traverseFields)({
                    collection,
                    context,
                    currentDepth,
                    depth,
                    doc,
                    draft,
                    fallbackLocale,
                    fieldPromises,
                    fields: field.tabs.map((tab)=>({
                            ...tab,
                            type: 'tab'
                        })),
                    findMany,
                    flattenLocales,
                    global,
                    locale,
                    overrideAccess,
                    populationPromises,
                    req,
                    showHiddenFields,
                    siblingDoc,
                    triggerAccessControl,
                    triggerHooks
                });
                break;
            }
        default:
            {
                break;
            }
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYWZ0ZXJSZWFkL3Byb21pc2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB0eXBlIHsgUmljaFRleHRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vYWRtaW4vY29tcG9uZW50cy9mb3Jtcy9maWVsZC10eXBlcy9SaWNoVGV4dC90eXBlcydcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QsIFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcydcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFscy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IEZpZWxkLCBUYWJBc0ZpZWxkIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgeyBmaWVsZEFmZmVjdHNEYXRhLCB0YWJIYXNOYW1lIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJ1xuaW1wb3J0IGdldFZhbHVlV2l0aERlZmF1bHQgZnJvbSAnLi4vLi4vZ2V0RGVmYXVsdFZhbHVlJ1xuaW1wb3J0IHJlbGF0aW9uc2hpcFBvcHVsYXRpb25Qcm9taXNlIGZyb20gJy4vcmVsYXRpb25zaGlwUG9wdWxhdGlvblByb21pc2UnXG5pbXBvcnQgeyB0cmF2ZXJzZUZpZWxkcyB9IGZyb20gJy4vdHJhdmVyc2VGaWVsZHMnXG5cbnR5cGUgQXJncyA9IHtcbiAgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB8IG51bGxcbiAgY29udGV4dDogUmVxdWVzdENvbnRleHRcbiAgY3VycmVudERlcHRoOiBudW1iZXJcbiAgZGVwdGg6IG51bWJlclxuICBkb2M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIGRyYWZ0OiBib29sZWFuXG4gIGZhbGxiYWNrTG9jYWxlOiBudWxsIHwgc3RyaW5nXG4gIGZpZWxkOiBGaWVsZCB8IFRhYkFzRmllbGRcbiAgZmllbGRQcm9taXNlczogUHJvbWlzZTx2b2lkPltdXG4gIGZpbmRNYW55OiBib29sZWFuXG4gIGZsYXR0ZW5Mb2NhbGVzOiBib29sZWFuXG4gIGdsb2JhbDogU2FuaXRpemVkR2xvYmFsQ29uZmlnIHwgbnVsbFxuICBsb2NhbGU6IG51bGwgfCBzdHJpbmdcbiAgb3ZlcnJpZGVBY2Nlc3M6IGJvb2xlYW5cbiAgcG9wdWxhdGlvblByb21pc2VzOiBQcm9taXNlPHZvaWQ+W11cbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBzaG93SGlkZGVuRmllbGRzOiBib29sZWFuXG4gIHNpYmxpbmdEb2M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIHRyaWdnZXJBY2Nlc3NDb250cm9sPzogYm9vbGVhblxuICB0cmlnZ2VySG9va3M/OiBib29sZWFuXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgcmVzcG9uc2libGUgZm9yIHRoZSBmb2xsb3dpbmcgYWN0aW9ucywgaW4gb3JkZXI6XG4vLyAtIFJlbW92ZSBoaWRkZW4gZmllbGRzIGZyb20gcmVzcG9uc2Vcbi8vIC0gRmxhdHRlbiBsb2NhbGVzIGludG8gcmVxdWVzdGVkIGxvY2FsZVxuLy8gLSBTYW5pdGl6ZSBvdXRnb2luZyBkYXRhIChwb2ludCBmaWVsZCwgZXRjLilcbi8vIC0gRXhlY3V0ZSBmaWVsZCBob29rc1xuLy8gLSBFeGVjdXRlIHJlYWQgYWNjZXNzIGNvbnRyb2xcbi8vIC0gUG9wdWxhdGUgcmVsYXRpb25zaGlwc1xuXG5leHBvcnQgY29uc3QgcHJvbWlzZSA9IGFzeW5jICh7XG4gIGNvbGxlY3Rpb24sXG4gIGNvbnRleHQsXG4gIGN1cnJlbnREZXB0aCxcbiAgZGVwdGgsXG4gIGRvYyxcbiAgZHJhZnQsXG4gIGZhbGxiYWNrTG9jYWxlLFxuICBmaWVsZCxcbiAgZmllbGRQcm9taXNlcyxcbiAgZmluZE1hbnksXG4gIGZsYXR0ZW5Mb2NhbGVzLFxuICBnbG9iYWwsXG4gIGxvY2FsZSxcbiAgb3ZlcnJpZGVBY2Nlc3MsXG4gIHBvcHVsYXRpb25Qcm9taXNlcyxcbiAgcmVxLFxuICBzaG93SGlkZGVuRmllbGRzLFxuICBzaWJsaW5nRG9jLFxuICB0cmlnZ2VyQWNjZXNzQ29udHJvbCA9IHRydWUsXG4gIHRyaWdnZXJIb29rcyA9IHRydWUsXG59OiBBcmdzKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGlmIChcbiAgICBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJlxuICAgIGZpZWxkLmhpZGRlbiAmJlxuICAgIHR5cGVvZiBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICFzaG93SGlkZGVuRmllbGRzXG4gICkge1xuICAgIGRlbGV0ZSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdXG4gIH1cblxuICBjb25zdCBzaG91bGRIb2lzdExvY2FsaXplZFZhbHVlID1cbiAgICBmbGF0dGVuTG9jYWxlcyAmJlxuICAgIGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmXG4gICAgdHlwZW9mIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gPT09ICdvYmplY3QnICYmXG4gICAgc2libGluZ0RvY1tmaWVsZC5uYW1lXSAhPT0gbnVsbCAmJlxuICAgIGZpZWxkLmxvY2FsaXplZCAmJlxuICAgIGxvY2FsZSAhPT0gJ2FsbCcgJiZcbiAgICByZXEucGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uXG5cbiAgaWYgKHNob3VsZEhvaXN0TG9jYWxpemVkVmFsdWUpIHtcbiAgICAvLyByZXBsYWNlIGFjdHVhbCB2YWx1ZSB3aXRoIGxvY2FsaXplZCB2YWx1ZSBiZWZvcmUgc2FuaXRpemluZ1xuICAgIC8vIHsgW2xvY2FsZV06IGZpZWxkcyB9IC0+IGZpZWxkc1xuICAgIGNvbnN0IHZhbHVlID0gc2libGluZ0RvY1tmaWVsZC5uYW1lXVtsb2NhbGVdXG5cbiAgICBsZXQgaG9pc3RlZFZhbHVlID0gdmFsdWVcblxuICAgIGlmIChmYWxsYmFja0xvY2FsZSAmJiBmYWxsYmFja0xvY2FsZSAhPT0gbG9jYWxlKSB7XG4gICAgICBjb25zdCBmYWxsYmFja1ZhbHVlID0gc2libGluZ0RvY1tmaWVsZC5uYW1lXVtmYWxsYmFja0xvY2FsZV1cbiAgICAgIGNvbnN0IGlzTnVsbE9yVW5kZWZpbmVkID0gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PT0gbnVsbFxuXG4gICAgICBpZiAoZmFsbGJhY2tWYWx1ZSkge1xuICAgICAgICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICBjYXNlICd0ZXh0YXJlYSc6IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJycgfHwgaXNOdWxsT3JVbmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgaG9pc3RlZFZhbHVlID0gZmFsbGJhY2tWYWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgaG9pc3RlZFZhbHVlID0gZmFsbGJhY2tWYWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdID0gaG9pc3RlZFZhbHVlXG4gIH1cblxuICAvLyBTYW5pdGl6ZSBvdXRnb2luZyBmaWVsZCB2YWx1ZVxuICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICBjYXNlICdncm91cCc6IHtcbiAgICAgIC8vIEZpbGwgZ3JvdXBzIHdpdGggZW1wdHkgb2JqZWN0cyBzbyBmaWVsZHMgd2l0aCBob29rcyB3aXRoaW4gZ3JvdXBzIGNhbiBwb3B1bGF0ZVxuICAgICAgLy8gdGhlbXNlbHZlcyB2aXJ0dWFsbHkgYXMgbmVjZXNzYXJ5XG4gICAgICBpZiAodHlwZW9mIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gPSB7fVxuICAgICAgfVxuXG4gICAgICBicmVha1xuICAgIH1cbiAgICBjYXNlICd0YWJzJzoge1xuICAgICAgZmllbGQudGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRhYkhhc05hbWUodGFiKSAmJlxuICAgICAgICAgICh0eXBlb2Ygc2libGluZ0RvY1t0YWIubmFtZV0gPT09ICd1bmRlZmluZWQnIHx8IHNpYmxpbmdEb2NbdGFiLm5hbWVdID09PSBudWxsKVxuICAgICAgICApIHtcbiAgICAgICAgICBzaWJsaW5nRG9jW3RhYi5uYW1lXSA9IHt9XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgY2FzZSAncmljaFRleHQnOiB7XG4gICAgICBjb25zdCBlZGl0b3I6IFJpY2hUZXh0QWRhcHRlciA9IGZpZWxkPy5lZGl0b3JcbiAgICAgIC8vIFRoaXMgaXMgcnVuIGhlcmUgQU5EIGluIHRoZSBHcmFwaFFMIFJlc29sdmVyXG4gICAgICBpZiAoZWRpdG9yPy5wb3B1bGF0aW9uUHJvbWlzZSkge1xuICAgICAgICBjb25zdCBwb3B1bGF0ZURlcHRoID1cbiAgICAgICAgICBmaWVsZD8ubWF4RGVwdGggIT09IHVuZGVmaW5lZCAmJiBmaWVsZD8ubWF4RGVwdGggPCBkZXB0aCA/IGZpZWxkPy5tYXhEZXB0aCA6IGRlcHRoXG5cbiAgICAgICAgY29uc3QgcG9wdWxhdGlvblByb21pc2UgPSBlZGl0b3IucG9wdWxhdGlvblByb21pc2Uoe1xuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgY3VycmVudERlcHRoLFxuICAgICAgICAgIGRlcHRoOiBwb3B1bGF0ZURlcHRoLFxuICAgICAgICAgIGRyYWZ0LFxuICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgIGZpbmRNYW55LFxuICAgICAgICAgIGZsYXR0ZW5Mb2NhbGVzLFxuICAgICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICAgIHBvcHVsYXRpb25Qcm9taXNlcyxcbiAgICAgICAgICByZXEsXG4gICAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgICBzaWJsaW5nRG9jLFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChwb3B1bGF0aW9uUHJvbWlzZSkge1xuICAgICAgICAgIHBvcHVsYXRpb25Qcm9taXNlcy5wdXNoKHBvcHVsYXRpb25Qcm9taXNlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoaXMgaXMgb25seSBydW4gaGVyZSwgaW5kZXBlbmRlbnQgb2YgZGVwdGhcbiAgICAgIGlmIChlZGl0b3I/LmFmdGVyUmVhZFByb21pc2UpIHtcbiAgICAgICAgY29uc3QgYWZ0ZXJSZWFkUHJvbWlzZSA9IGVkaXRvcj8uYWZ0ZXJSZWFkUHJvbWlzZSh7XG4gICAgICAgICAgZmllbGQsXG4gICAgICAgICAgaW5jb21pbmdFZGl0b3JTdGF0ZTogc2libGluZ0RvY1tmaWVsZC5uYW1lXSBhcyBvYmplY3QsXG4gICAgICAgICAgc2libGluZ0RvYyxcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoYWZ0ZXJSZWFkUHJvbWlzZSkge1xuICAgICAgICAgIHBvcHVsYXRpb25Qcm9taXNlcy5wdXNoKGFmdGVyUmVhZFByb21pc2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBjYXNlICdwb2ludCc6IHtcbiAgICAgIGNvbnN0IHBvaW50RG9jID0gc2libGluZ0RvY1tmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocG9pbnREb2M/LmNvb3JkaW5hdGVzKSAmJiBwb2ludERvYy5jb29yZGluYXRlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgc2libGluZ0RvY1tmaWVsZC5uYW1lXSA9IHBvaW50RG9jLmNvb3JkaW5hdGVzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoZmllbGRBZmZlY3RzRGF0YShmaWVsZCkpIHtcbiAgICAvLyBFeGVjdXRlIGhvb2tzXG4gICAgaWYgKHRyaWdnZXJIb29rcyAmJiBmaWVsZC5ob29rcz8uYWZ0ZXJSZWFkKSB7XG4gICAgICBhd2FpdCBmaWVsZC5ob29rcy5hZnRlclJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGN1cnJlbnRIb29rKSA9PiB7XG4gICAgICAgIGF3YWl0IHByaW9ySG9va1xuXG4gICAgICAgIGNvbnN0IHNob3VsZFJ1bkhvb2tPbkFsbExvY2FsZXMgPVxuICAgICAgICAgIGZpZWxkLmxvY2FsaXplZCAmJlxuICAgICAgICAgIChsb2NhbGUgPT09ICdhbGwnIHx8ICFmbGF0dGVuTG9jYWxlcykgJiZcbiAgICAgICAgICB0eXBlb2Ygc2libGluZ0RvY1tmaWVsZC5uYW1lXSA9PT0gJ29iamVjdCdcblxuICAgICAgICBpZiAoc2hvdWxkUnVuSG9va09uQWxsTG9jYWxlcykge1xuICAgICAgICAgIGNvbnN0IGhvb2tQcm9taXNlcyA9IE9iamVjdC5lbnRyaWVzKHNpYmxpbmdEb2NbZmllbGQubmFtZV0pLm1hcCgoW2xvY2FsZSwgdmFsdWVdKSA9PlxuICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaG9va2VkVmFsdWUgPSBhd2FpdCBjdXJyZW50SG9vayh7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGRhdGE6IGRvYyxcbiAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICBnbG9iYWwsXG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiAncmVhZCcsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxEb2M6IGRvYyxcbiAgICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICAgICAgc2libGluZ0RhdGE6IHNpYmxpbmdEb2MsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgaWYgKGhvb2tlZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdW2xvY2FsZV0gPSBob29rZWRWYWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSgpLFxuICAgICAgICAgIClcblxuICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGhvb2tQcm9taXNlcylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBob29rZWRWYWx1ZSA9IGF3YWl0IGN1cnJlbnRIb29rKHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgZGF0YTogZG9jLFxuICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICBmaW5kTWFueSxcbiAgICAgICAgICAgIGdsb2JhbCxcbiAgICAgICAgICAgIG9wZXJhdGlvbjogJ3JlYWQnLFxuICAgICAgICAgICAgb3JpZ2luYWxEb2M6IGRvYyxcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgIHNpYmxpbmdEYXRhOiBzaWJsaW5nRG9jLFxuICAgICAgICAgICAgdmFsdWU6IHNpYmxpbmdEb2NbZmllbGQubmFtZV0sXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGlmIChob29rZWRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdID0gaG9va2VkVmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKVxuICAgIH1cblxuICAgIC8vIEV4ZWN1dGUgYWNjZXNzIGNvbnRyb2xcbiAgICBsZXQgYWxsb3dEZWZhdWx0VmFsdWUgPSB0cnVlXG4gICAgaWYgKHRyaWdnZXJBY2Nlc3NDb250cm9sICYmIGZpZWxkLmFjY2VzcyAmJiBmaWVsZC5hY2Nlc3MucmVhZCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gb3ZlcnJpZGVBY2Nlc3NcbiAgICAgICAgPyB0cnVlXG4gICAgICAgIDogYXdhaXQgZmllbGQuYWNjZXNzLnJlYWQoe1xuICAgICAgICAgICAgaWQ6IGRvYy5pZCBhcyBudW1iZXIgfCBzdHJpbmcsXG4gICAgICAgICAgICBkYXRhOiBkb2MsXG4gICAgICAgICAgICBkb2MsXG4gICAgICAgICAgICByZXEsXG4gICAgICAgICAgICBzaWJsaW5nRGF0YTogc2libGluZ0RvYyxcbiAgICAgICAgICB9KVxuXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBhbGxvd0RlZmF1bHRWYWx1ZSA9IGZhbHNlXG4gICAgICAgIGRlbGV0ZSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0IGRlZmF1bHRWYWx1ZSBvbiB0aGUgZmllbGQgZm9yIGdsb2JhbHMgYmVpbmcgcmV0dXJuZWQgd2l0aG91dCBiZWluZyBmaXJzdCBjcmVhdGVkXG4gICAgLy8gb3IgY29sbGVjdGlvbiBkb2N1bWVudHMgY3JlYXRlZCBwcmlvciB0byBoYXZpbmcgYSBkZWZhdWx0XG4gICAgaWYgKFxuICAgICAgYWxsb3dEZWZhdWx0VmFsdWUgJiZcbiAgICAgIHR5cGVvZiBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdID09PSAndW5kZWZpbmVkJyAmJlxuICAgICAgdHlwZW9mIGZpZWxkLmRlZmF1bHRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICApIHtcbiAgICAgIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gPSBhd2FpdCBnZXRWYWx1ZVdpdGhEZWZhdWx0KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBmaWVsZC5kZWZhdWx0VmFsdWUsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgdXNlcjogcmVxLnVzZXIsXG4gICAgICAgIHZhbHVlOiBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3JlbGF0aW9uc2hpcCcgfHwgZmllbGQudHlwZSA9PT0gJ3VwbG9hZCcpIHtcbiAgICAgIHBvcHVsYXRpb25Qcm9taXNlcy5wdXNoKFxuICAgICAgICByZWxhdGlvbnNoaXBQb3B1bGF0aW9uUHJvbWlzZSh7XG4gICAgICAgICAgY3VycmVudERlcHRoLFxuICAgICAgICAgIGRlcHRoLFxuICAgICAgICAgIGRyYWZ0LFxuICAgICAgICAgIGZhbGxiYWNrTG9jYWxlLFxuICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICByZXEsXG4gICAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgICBzaWJsaW5nRG9jLFxuICAgICAgICB9KSxcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICBjYXNlICdncm91cCc6IHtcbiAgICAgIGxldCBncm91cERvYyA9IHNpYmxpbmdEb2NbZmllbGQubmFtZV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgICAgIGlmICh0eXBlb2Ygc2libGluZ0RvY1tmaWVsZC5uYW1lXSAhPT0gJ29iamVjdCcpIGdyb3VwRG9jID0ge31cblxuICAgICAgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBjdXJyZW50RGVwdGgsXG4gICAgICAgIGRlcHRoLFxuICAgICAgICBkb2MsXG4gICAgICAgIGRyYWZ0LFxuICAgICAgICBmYWxsYmFja0xvY2FsZSxcbiAgICAgICAgZmllbGRQcm9taXNlcyxcbiAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgIGZpbmRNYW55LFxuICAgICAgICBmbGF0dGVuTG9jYWxlcyxcbiAgICAgICAgZ2xvYmFsLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICBwb3B1bGF0aW9uUHJvbWlzZXMsXG4gICAgICAgIHJlcSxcbiAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgc2libGluZ0RvYzogZ3JvdXBEb2MsXG4gICAgICAgIHRyaWdnZXJBY2Nlc3NDb250cm9sLFxuICAgICAgICB0cmlnZ2VySG9va3MsXG4gICAgICB9KVxuXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGNhc2UgJ2FycmF5Jzoge1xuICAgICAgY29uc3Qgcm93cyA9IHNpYmxpbmdEb2NbZmllbGQubmFtZV1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocm93cykpIHtcbiAgICAgICAgcm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgICAgIGRlcHRoLFxuICAgICAgICAgICAgZG9jLFxuICAgICAgICAgICAgZHJhZnQsXG4gICAgICAgICAgICBmYWxsYmFja0xvY2FsZSxcbiAgICAgICAgICAgIGZpZWxkUHJvbWlzZXMsXG4gICAgICAgICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkcyxcbiAgICAgICAgICAgIGZpbmRNYW55LFxuICAgICAgICAgICAgZmxhdHRlbkxvY2FsZXMsXG4gICAgICAgICAgICBnbG9iYWwsXG4gICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICAgIHBvcHVsYXRpb25Qcm9taXNlcyxcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICAgICAgICBzaWJsaW5nRG9jOiByb3cgfHwge30sXG4gICAgICAgICAgICB0cmlnZ2VyQWNjZXNzQ29udHJvbCxcbiAgICAgICAgICAgIHRyaWdnZXJIb29rcyxcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmICghc2hvdWxkSG9pc3RMb2NhbGl6ZWRWYWx1ZSAmJiB0eXBlb2Ygcm93cyA9PT0gJ29iamVjdCcgJiYgcm93cyAhPT0gbnVsbCkge1xuICAgICAgICBPYmplY3QudmFsdWVzKHJvd3MpLmZvckVhY2goKGxvY2FsZVJvd3MpID0+IHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsb2NhbGVSb3dzKSkge1xuICAgICAgICAgICAgbG9jYWxlUm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICAgICAgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RGVwdGgsXG4gICAgICAgICAgICAgICAgZGVwdGgsXG4gICAgICAgICAgICAgICAgZG9jLFxuICAgICAgICAgICAgICAgIGRyYWZ0LFxuICAgICAgICAgICAgICAgIGZhbGxiYWNrTG9jYWxlLFxuICAgICAgICAgICAgICAgIGZpZWxkUHJvbWlzZXMsXG4gICAgICAgICAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgICAgICAgICAgZmluZE1hbnksXG4gICAgICAgICAgICAgICAgZmxhdHRlbkxvY2FsZXMsXG4gICAgICAgICAgICAgICAgZ2xvYmFsLFxuICAgICAgICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICAgICAgICBwb3B1bGF0aW9uUHJvbWlzZXMsXG4gICAgICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICAgICAgICAgICAgc2libGluZ0RvYzogcm93IHx8IHt9LFxuICAgICAgICAgICAgICAgIHRyaWdnZXJBY2Nlc3NDb250cm9sLFxuICAgICAgICAgICAgICAgIHRyaWdnZXJIb29rcyxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2libGluZ0RvY1tmaWVsZC5uYW1lXSA9IFtdXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGNhc2UgJ2Jsb2Nrcyc6IHtcbiAgICAgIGNvbnN0IHJvd3MgPSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdXG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd3MpKSB7XG4gICAgICAgIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgY29uc3QgYmxvY2sgPSBmaWVsZC5ibG9ja3MuZmluZCgoYmxvY2tUeXBlKSA9PiBibG9ja1R5cGUuc2x1ZyA9PT0gcm93LmJsb2NrVHlwZSlcblxuICAgICAgICAgIGlmIChibG9jaykge1xuICAgICAgICAgICAgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICBjdXJyZW50RGVwdGgsXG4gICAgICAgICAgICAgIGRlcHRoLFxuICAgICAgICAgICAgICBkb2MsXG4gICAgICAgICAgICAgIGRyYWZ0LFxuICAgICAgICAgICAgICBmYWxsYmFja0xvY2FsZSxcbiAgICAgICAgICAgICAgZmllbGRQcm9taXNlcyxcbiAgICAgICAgICAgICAgZmllbGRzOiBibG9jay5maWVsZHMsXG4gICAgICAgICAgICAgIGZpbmRNYW55LFxuICAgICAgICAgICAgICBmbGF0dGVuTG9jYWxlcyxcbiAgICAgICAgICAgICAgZ2xvYmFsLFxuICAgICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICAgICAgICBwb3B1bGF0aW9uUHJvbWlzZXMsXG4gICAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgICAgICAgc2libGluZ0RvYzogcm93IHx8IHt9LFxuICAgICAgICAgICAgICB0cmlnZ2VyQWNjZXNzQ29udHJvbCxcbiAgICAgICAgICAgICAgdHJpZ2dlckhvb2tzLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKCFzaG91bGRIb2lzdExvY2FsaXplZFZhbHVlICYmIHR5cGVvZiByb3dzID09PSAnb2JqZWN0JyAmJiByb3dzICE9PSBudWxsKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMocm93cykuZm9yRWFjaCgobG9jYWxlUm93cykgPT4ge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxvY2FsZVJvd3MpKSB7XG4gICAgICAgICAgICBsb2NhbGVSb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBibG9jayA9IGZpZWxkLmJsb2Nrcy5maW5kKChibG9ja1R5cGUpID0+IGJsb2NrVHlwZS5zbHVnID09PSByb3cuYmxvY2tUeXBlKVxuXG4gICAgICAgICAgICAgIGlmIChibG9jaykge1xuICAgICAgICAgICAgICAgIHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgY3VycmVudERlcHRoLFxuICAgICAgICAgICAgICAgICAgZGVwdGgsXG4gICAgICAgICAgICAgICAgICBkb2MsXG4gICAgICAgICAgICAgICAgICBkcmFmdCxcbiAgICAgICAgICAgICAgICAgIGZhbGxiYWNrTG9jYWxlLFxuICAgICAgICAgICAgICAgICAgZmllbGRQcm9taXNlcyxcbiAgICAgICAgICAgICAgICAgIGZpZWxkczogYmxvY2suZmllbGRzLFxuICAgICAgICAgICAgICAgICAgZmluZE1hbnksXG4gICAgICAgICAgICAgICAgICBmbGF0dGVuTG9jYWxlcyxcbiAgICAgICAgICAgICAgICAgIGdsb2JhbCxcbiAgICAgICAgICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICAgICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICAgICAgICAgICAgcG9wdWxhdGlvblByb21pc2VzLFxuICAgICAgICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgICAgICAgICAgIHNpYmxpbmdEb2M6IHJvdyB8fCB7fSxcbiAgICAgICAgICAgICAgICAgIHRyaWdnZXJBY2Nlc3NDb250cm9sLFxuICAgICAgICAgICAgICAgICAgdHJpZ2dlckhvb2tzLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2libGluZ0RvY1tmaWVsZC5uYW1lXSA9IFtdXG4gICAgICB9XG5cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgY2FzZSAncm93JzpcbiAgICBjYXNlICdjb2xsYXBzaWJsZSc6IHtcbiAgICAgIHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgY3VycmVudERlcHRoLFxuICAgICAgICBkZXB0aCxcbiAgICAgICAgZG9jLFxuICAgICAgICBkcmFmdCxcbiAgICAgICAgZmFsbGJhY2tMb2NhbGUsXG4gICAgICAgIGZpZWxkUHJvbWlzZXMsXG4gICAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgICBmaW5kTWFueSxcbiAgICAgICAgZmxhdHRlbkxvY2FsZXMsXG4gICAgICAgIGdsb2JhbCxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgcG9wdWxhdGlvblByb21pc2VzLFxuICAgICAgICByZXEsXG4gICAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICAgIHNpYmxpbmdEb2MsXG4gICAgICAgIHRyaWdnZXJBY2Nlc3NDb250cm9sLFxuICAgICAgICB0cmlnZ2VySG9va3MsXG4gICAgICB9KVxuXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGNhc2UgJ3RhYic6IHtcbiAgICAgIGxldCB0YWJEb2MgPSBzaWJsaW5nRG9jXG4gICAgICBpZiAodGFiSGFzTmFtZShmaWVsZCkpIHtcbiAgICAgICAgdGFiRG9jID0gc2libGluZ0RvY1tmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgICBpZiAodHlwZW9mIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gIT09ICdvYmplY3QnKSB0YWJEb2MgPSB7fVxuICAgICAgfVxuXG4gICAgICB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgZGVwdGgsXG4gICAgICAgIGRvYyxcbiAgICAgICAgZHJhZnQsXG4gICAgICAgIGZhbGxiYWNrTG9jYWxlLFxuICAgICAgICBmaWVsZFByb21pc2VzLFxuICAgICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkcyxcbiAgICAgICAgZmluZE1hbnksXG4gICAgICAgIGZsYXR0ZW5Mb2NhbGVzLFxuICAgICAgICBnbG9iYWwsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgIHBvcHVsYXRpb25Qcm9taXNlcyxcbiAgICAgICAgcmVxLFxuICAgICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgICBzaWJsaW5nRG9jOiB0YWJEb2MsXG4gICAgICAgIHRyaWdnZXJBY2Nlc3NDb250cm9sLFxuICAgICAgICB0cmlnZ2VySG9va3MsXG4gICAgICB9KVxuXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGNhc2UgJ3RhYnMnOiB7XG4gICAgICB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgZGVwdGgsXG4gICAgICAgIGRvYyxcbiAgICAgICAgZHJhZnQsXG4gICAgICAgIGZhbGxiYWNrTG9jYWxlLFxuICAgICAgICBmaWVsZFByb21pc2VzLFxuICAgICAgICBmaWVsZHM6IGZpZWxkLnRhYnMubWFwKCh0YWIpID0+ICh7IC4uLnRhYiwgdHlwZTogJ3RhYicgfSkpLFxuICAgICAgICBmaW5kTWFueSxcbiAgICAgICAgZmxhdHRlbkxvY2FsZXMsXG4gICAgICAgIGdsb2JhbCxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgcG9wdWxhdGlvblByb21pc2VzLFxuICAgICAgICByZXEsXG4gICAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICAgIHNpYmxpbmdEb2MsXG4gICAgICAgIHRyaWdnZXJBY2Nlc3NDb250cm9sLFxuICAgICAgICB0cmlnZ2VySG9va3MsXG4gICAgICB9KVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbInByb21pc2UiLCJjb2xsZWN0aW9uIiwiY29udGV4dCIsImN1cnJlbnREZXB0aCIsImRlcHRoIiwiZG9jIiwiZHJhZnQiLCJmYWxsYmFja0xvY2FsZSIsImZpZWxkIiwiZmllbGRQcm9taXNlcyIsImZpbmRNYW55IiwiZmxhdHRlbkxvY2FsZXMiLCJnbG9iYWwiLCJsb2NhbGUiLCJvdmVycmlkZUFjY2VzcyIsInBvcHVsYXRpb25Qcm9taXNlcyIsInJlcSIsInNob3dIaWRkZW5GaWVsZHMiLCJzaWJsaW5nRG9jIiwidHJpZ2dlckFjY2Vzc0NvbnRyb2wiLCJ0cmlnZ2VySG9va3MiLCJmaWVsZEFmZmVjdHNEYXRhIiwiaGlkZGVuIiwibmFtZSIsInNob3VsZEhvaXN0TG9jYWxpemVkVmFsdWUiLCJsb2NhbGl6ZWQiLCJwYXlsb2FkIiwiY29uZmlnIiwibG9jYWxpemF0aW9uIiwidmFsdWUiLCJob2lzdGVkVmFsdWUiLCJmYWxsYmFja1ZhbHVlIiwiaXNOdWxsT3JVbmRlZmluZWQiLCJ0eXBlIiwidGFicyIsImZvckVhY2giLCJ0YWIiLCJ0YWJIYXNOYW1lIiwiZWRpdG9yIiwicG9wdWxhdGlvblByb21pc2UiLCJwb3B1bGF0ZURlcHRoIiwibWF4RGVwdGgiLCJ1bmRlZmluZWQiLCJwdXNoIiwiYWZ0ZXJSZWFkUHJvbWlzZSIsImluY29taW5nRWRpdG9yU3RhdGUiLCJwb2ludERvYyIsIkFycmF5IiwiaXNBcnJheSIsImNvb3JkaW5hdGVzIiwibGVuZ3RoIiwiaG9va3MiLCJhZnRlclJlYWQiLCJyZWR1Y2UiLCJwcmlvckhvb2siLCJjdXJyZW50SG9vayIsInNob3VsZFJ1bkhvb2tPbkFsbExvY2FsZXMiLCJob29rUHJvbWlzZXMiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiaG9va2VkVmFsdWUiLCJkYXRhIiwib3BlcmF0aW9uIiwib3JpZ2luYWxEb2MiLCJzaWJsaW5nRGF0YSIsIlByb21pc2UiLCJhbGwiLCJyZXNvbHZlIiwiYWxsb3dEZWZhdWx0VmFsdWUiLCJhY2Nlc3MiLCJyZWFkIiwicmVzdWx0IiwiaWQiLCJkZWZhdWx0VmFsdWUiLCJnZXRWYWx1ZVdpdGhEZWZhdWx0IiwidXNlciIsInJlbGF0aW9uc2hpcFBvcHVsYXRpb25Qcm9taXNlIiwiZ3JvdXBEb2MiLCJ0cmF2ZXJzZUZpZWxkcyIsImZpZWxkcyIsInJvd3MiLCJyb3ciLCJ2YWx1ZXMiLCJsb2NhbGVSb3dzIiwiYmxvY2siLCJibG9ja3MiLCJmaW5kIiwiYmxvY2tUeXBlIiwic2x1ZyIsInRhYkRvYyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7OzsrQkEyQ3ZCQTs7O2VBQUFBOzs7dUJBcENnQzt3RUFDYjtzRkFDVTtnQ0FDWDs7Ozs7O0FBaUN4QixNQUFNQSxVQUFVLE9BQU8sRUFDNUJDLFVBQVUsRUFDVkMsT0FBTyxFQUNQQyxZQUFZLEVBQ1pDLEtBQUssRUFDTEMsR0FBRyxFQUNIQyxLQUFLLEVBQ0xDLGNBQWMsRUFDZEMsS0FBSyxFQUNMQyxhQUFhLEVBQ2JDLFFBQVEsRUFDUkMsY0FBYyxFQUNkQyxNQUFNLEVBQ05DLE1BQU0sRUFDTkMsY0FBYyxFQUNkQyxrQkFBa0IsRUFDbEJDLEdBQUcsRUFDSEMsZ0JBQWdCLEVBQ2hCQyxVQUFVLEVBQ1ZDLHVCQUF1QixJQUFJLEVBQzNCQyxlQUFlLElBQUksRUFDZDtJQUNMLElBQ0VDLElBQUFBLHVCQUFnQixFQUFDYixVQUNqQkEsTUFBTWMsTUFBTSxJQUNa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