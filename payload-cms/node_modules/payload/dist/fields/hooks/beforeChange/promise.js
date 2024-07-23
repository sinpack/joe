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
const _deepmerge = /*#__PURE__*/ _interop_require_default(require("deepmerge"));
const _types = require("../../config/types");
const _getExistingRowDoc = require("./getExistingRowDoc");
const _traverseFields = require("./traverseFields");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const promise = async ({ id, collection, context, data, doc, docWithLocales, errors, field, global, mergeLocaleActions, operation, path, req, siblingData, siblingDoc, siblingDocWithLocales, skipValidation })=>{
    const passesCondition = field.admin?.condition ? Boolean(field.admin.condition(data, siblingData, {
        user: req.user
    })) : true;
    let skipValidationFromHere = skipValidation || !passesCondition;
    const defaultLocale = req.payload.config?.localization ? req.payload.config.localization?.defaultLocale : 'en';
    const operationLocale = req.locale || defaultLocale;
    if ((0, _types.fieldAffectsData)(field)) {
        // skip validation if the field is localized and the incoming data is null
        if (field.localized && operationLocale !== defaultLocale) {
            if ([
                'array',
                'blocks'
            ].includes(field.type) && siblingData[field.name] === null) {
                skipValidationFromHere = true;
            }
        }
        // Execute hooks
        if (field.hooks?.beforeChange) {
            await field.hooks.beforeChange.reduce(async (priorHook, currentHook)=>{
                await priorHook;
                const hookedValue = await currentHook({
                    collection,
                    context,
                    data,
                    field,
                    global,
                    operation,
                    originalDoc: doc,
                    previousSiblingDoc: siblingDoc,
                    previousValue: siblingDoc[field.name],
                    req,
                    siblingData,
                    value: siblingData[field.name]
                });
                if (hookedValue !== undefined) {
                    siblingData[field.name] = hookedValue;
                }
            }, Promise.resolve());
        }
        // Validate
        if (!skipValidationFromHere && field.validate) {
            const valueToValidate = siblingData[field.name];
            let jsonError;
            if (field.type === 'json' && typeof siblingData[field.name] === 'string') {
                try {
                    JSON.parse(siblingData[field.name]);
                } catch (e) {
                    jsonError = e;
                }
            }
            const validationResult = await field.validate(valueToValidate, {
                ...field,
                id,
                config: req.payload.config,
                data: (0, _deepmerge.default)(doc, data, {
                    arrayMerge: (_, source)=>source
                }),
                jsonError,
                operation,
                payload: req.payload,
                previousValue: siblingDoc[field.name],
                req,
                siblingData: (0, _deepmerge.default)(siblingDoc, siblingData, {
                    arrayMerge: (_, source)=>source
                }),
                t: req.t,
                user: req.user
            });
            if (typeof validationResult === 'string') {
                errors.push({
                    field: `${path}${field.name}`,
                    message: validationResult
                });
            }
        }
        // Push merge locale action if applicable
        if (field.localized) {
            mergeLocaleActions.push(()=>{
                if (req.payload.config.localization) {
                    const { localization } = req.payload.config;
                    const localeData = localization.localeCodes.reduce((localizedValues, locale)=>{
                        const fieldValue = locale === req.locale ? siblingData[field.name] : siblingDocWithLocales?.[field.name]?.[locale];
                        // update locale value if it's not undefined
                        if (typeof fieldValue !== 'undefined') {
                            return {
                                ...localizedValues,
                                [locale]: fieldValue
                            };
                        }
                        return localizedValues;
                    }, {});
                    // If there are locales with data, set the data
                    if (Object.keys(localeData).length > 0) {
                        siblingData[field.name] = localeData;
                    }
                }
            });
        }
    }
    switch(field.type){
        case 'point':
            {
                // Transform point data for storage
                if (Array.isArray(siblingData[field.name]) && siblingData[field.name][0] !== null && siblingData[field.name][1] !== null) {
                    siblingData[field.name] = {
                        coordinates: [
                            parseFloat(siblingData[field.name][0]),
                            parseFloat(siblingData[field.name][1])
                        ],
                        type: 'Point'
                    };
                }
                break;
            }
        case 'group':
            {
                if (typeof siblingData[field.name] !== 'object') siblingData[field.name] = {};
                if (typeof siblingDoc[field.name] !== 'object') siblingDoc[field.name] = {};
                if (typeof siblingDocWithLocales[field.name] !== 'object') siblingDocWithLocales[field.name] = {};
                await (0, _traverseFields.traverseFields)({
                    id,
                    collection,
                    context,
                    data,
                    doc,
                    docWithLocales,
                    errors,
                    fields: field.fields,
                    global,
                    mergeLocaleActions,
                    operation,
                    path: `${path}${field.name}.`,
                    req,
                    siblingData: siblingData[field.name],
                    siblingDoc: siblingDoc[field.name],
                    siblingDocWithLocales: siblingDocWithLocales[field.name],
                    skipValidation: skipValidationFromHere
                });
                break;
            }
        case 'array':
            {
                const rows = siblingData[field.name];
                if (Array.isArray(rows)) {
                    const promises = [];
                    rows.forEach((row, i)=>{
                        promises.push((0, _traverseFields.traverseFields)({
                            id,
                            collection,
                            context,
                            data,
                            doc,
                            docWithLocales,
                            errors,
                            fields: field.fields,
                            global,
                            mergeLocaleActions,
                            operation,
                            path: `${path}${field.name}.${i}.`,
                            req,
                            siblingData: row,
                            siblingDoc: (0, _getExistingRowDoc.getExistingRowDoc)(row, siblingDoc[field.name]),
                            siblingDocWithLocales: (0, _getExistingRowDoc.getExistingRowDoc)(row, siblingDocWithLocales[field.name]),
                            skipValidation: skipValidationFromHere
                        }));
                    });
                    await Promise.all(promises);
                }
                break;
            }
        case 'blocks':
            {
                const rows = siblingData[field.name];
                if (Array.isArray(rows)) {
                    const promises = [];
                    rows.forEach((row, i)=>{
                        const rowSiblingDoc = (0, _getExistingRowDoc.getExistingRowDoc)(row, siblingDoc[field.name]);
                        const rowSiblingDocWithLocales = (0, _getExistingRowDoc.getExistingRowDoc)(row, siblingDocWithLocales[field.name]);
                        const blockTypeToMatch = row.blockType || rowSiblingDoc.blockType;
                        const block = field.blocks.find((blockType)=>blockType.slug === blockTypeToMatch);
                        if (block) {
                            promises.push((0, _traverseFields.traverseFields)({
                                id,
                                collection,
                                context,
                                data,
                                doc,
                                docWithLocales,
                                errors,
                                fields: block.fields,
                                global,
                                mergeLocaleActions,
                                operation,
                                path: `${path}${field.name}.${i}.`,
                                req,
                                siblingData: row,
                                siblingDoc: rowSiblingDoc,
                                siblingDocWithLocales: rowSiblingDocWithLocales,
                                skipValidation: skipValidationFromHere
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
                    id,
                    collection,
                    context,
                    data,
                    doc,
                    docWithLocales,
                    errors,
                    fields: field.fields,
                    global,
                    mergeLocaleActions,
                    operation,
                    path,
                    req,
                    siblingData,
                    siblingDoc,
                    siblingDocWithLocales,
                    skipValidation: skipValidationFromHere
                });
                break;
            }
        case 'tab':
            {
                let tabPath = path;
                let tabSiblingData = siblingData;
                let tabSiblingDoc = siblingDoc;
                let tabSiblingDocWithLocales = siblingDocWithLocales;
                if ((0, _types.tabHasName)(field)) {
                    tabPath = `${path}${field.name}.`;
                    if (typeof siblingData[field.name] !== 'object') siblingData[field.name] = {};
                    if (typeof siblingDoc[field.name] !== 'object') siblingDoc[field.name] = {};
                    if (typeof siblingDocWithLocales[field.name] !== 'object') siblingDocWithLocales[field.name] = {};
                    tabSiblingData = siblingData[field.name];
                    tabSiblingDoc = siblingDoc[field.name];
                    tabSiblingDocWithLocales = siblingDocWithLocales[field.name];
                }
                await (0, _traverseFields.traverseFields)({
                    id,
                    collection,
                    context,
                    data,
                    doc,
                    docWithLocales,
                    errors,
                    fields: field.fields,
                    global,
                    mergeLocaleActions,
                    operation,
                    path: tabPath,
                    req,
                    siblingData: tabSiblingData,
                    siblingDoc: tabSiblingDoc,
                    siblingDocWithLocales: tabSiblingDocWithLocales,
                    skipValidation: skipValidationFromHere
                });
                break;
            }
        case 'tabs':
            {
                await (0, _traverseFields.traverseFields)({
                    id,
                    collection,
                    context,
                    data,
                    doc,
                    docWithLocales,
                    errors,
                    fields: field.tabs.map((tab)=>({
                            ...tab,
                            type: 'tab'
                        })),
                    global,
                    mergeLocaleActions,
                    operation,
                    path,
                    req,
                    siblingData,
                    siblingDoc,
                    siblingDocWithLocales,
                    skipValidation: skipValidationFromHere
                });
                break;
            }
        default:
            {
                break;
            }
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYmVmb3JlQ2hhbmdlL3Byb21pc2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnXG5cbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QsIFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcydcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFscy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IE9wZXJhdGlvbiB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBGaWVsZCwgVGFiQXNGaWVsZCB9IGZyb20gJy4uLy4uL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IHsgZmllbGRBZmZlY3RzRGF0YSwgdGFiSGFzTmFtZSB9IGZyb20gJy4uLy4uL2NvbmZpZy90eXBlcydcbmltcG9ydCB7IGdldEV4aXN0aW5nUm93RG9jIH0gZnJvbSAnLi9nZXRFeGlzdGluZ1Jvd0RvYydcbmltcG9ydCB7IHRyYXZlcnNlRmllbGRzIH0gZnJvbSAnLi90cmF2ZXJzZUZpZWxkcydcblxudHlwZSBBcmdzID0ge1xuICBjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIHwgbnVsbFxuICBjb250ZXh0OiBSZXF1ZXN0Q29udGV4dFxuICBkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBkb2M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIGRvY1dpdGhMb2NhbGVzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBlcnJvcnM6IHsgZmllbGQ6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nIH1bXVxuICBmaWVsZDogRmllbGQgfCBUYWJBc0ZpZWxkXG4gIGdsb2JhbDogU2FuaXRpemVkR2xvYmFsQ29uZmlnIHwgbnVsbFxuICBpZD86IG51bWJlciB8IHN0cmluZ1xuICBtZXJnZUxvY2FsZUFjdGlvbnM6ICgoKSA9PiB2b2lkKVtdXG4gIG9wZXJhdGlvbjogT3BlcmF0aW9uXG4gIHBhdGg6IHN0cmluZ1xuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIHNpYmxpbmdEYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBzaWJsaW5nRG9jOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBzaWJsaW5nRG9jV2l0aExvY2FsZXM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBza2lwVmFsaWRhdGlvbjogYm9vbGVhblxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgZm9sbG93aW5nIGFjdGlvbnMsIGluIG9yZGVyOlxuLy8gLSBSdW4gY29uZGl0aW9uXG4vLyAtIEV4ZWN1dGUgZmllbGQgaG9va3Ncbi8vIC0gVmFsaWRhdGUgZGF0YVxuLy8gLSBUcmFuc2Zvcm0gZGF0YSBmb3Igc3RvcmFnZVxuLy8gLSBVbmZsYXR0ZW4gbG9jYWxlc1xuXG5leHBvcnQgY29uc3QgcHJvbWlzZSA9IGFzeW5jICh7XG4gIGlkLFxuICBjb2xsZWN0aW9uLFxuICBjb250ZXh0LFxuICBkYXRhLFxuICBkb2MsXG4gIGRvY1dpdGhMb2NhbGVzLFxuICBlcnJvcnMsXG4gIGZpZWxkLFxuICBnbG9iYWwsXG4gIG1lcmdlTG9jYWxlQWN0aW9ucyxcbiAgb3BlcmF0aW9uLFxuICBwYXRoLFxuICByZXEsXG4gIHNpYmxpbmdEYXRhLFxuICBzaWJsaW5nRG9jLFxuICBzaWJsaW5nRG9jV2l0aExvY2FsZXMsXG4gIHNraXBWYWxpZGF0aW9uLFxufTogQXJncyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBjb25zdCBwYXNzZXNDb25kaXRpb24gPSBmaWVsZC5hZG1pbj8uY29uZGl0aW9uXG4gICAgPyBCb29sZWFuKGZpZWxkLmFkbWluLmNvbmRpdGlvbihkYXRhLCBzaWJsaW5nRGF0YSwgeyB1c2VyOiByZXEudXNlciB9KSlcbiAgICA6IHRydWVcbiAgbGV0IHNraXBWYWxpZGF0aW9uRnJvbUhlcmUgPSBza2lwVmFsaWRhdGlvbiB8fCAhcGFzc2VzQ29uZGl0aW9uXG5cbiAgY29uc3QgZGVmYXVsdExvY2FsZSA9IHJlcS5wYXlsb2FkLmNvbmZpZz8ubG9jYWxpemF0aW9uXG4gICAgPyByZXEucGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uPy5kZWZhdWx0TG9jYWxlXG4gICAgOiAnZW4nXG4gIGNvbnN0IG9wZXJhdGlvbkxvY2FsZSA9IHJlcS5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZVxuXG4gIGlmIChmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSkge1xuICAgIC8vIHNraXAgdmFsaWRhdGlvbiBpZiB0aGUgZmllbGQgaXMgbG9jYWxpemVkIGFuZCB0aGUgaW5jb21pbmcgZGF0YSBpcyBudWxsXG4gICAgaWYgKGZpZWxkLmxvY2FsaXplZCAmJiBvcGVyYXRpb25Mb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUpIHtcbiAgICAgIGlmIChbJ2FycmF5JywgJ2Jsb2NrcyddLmluY2x1ZGVzKGZpZWxkLnR5cGUpICYmIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID09PSBudWxsKSB7XG4gICAgICAgIHNraXBWYWxpZGF0aW9uRnJvbUhlcmUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRXhlY3V0ZSBob29rc1xuICAgIGlmIChmaWVsZC5ob29rcz8uYmVmb3JlQ2hhbmdlKSB7XG4gICAgICBhd2FpdCBmaWVsZC5ob29rcy5iZWZvcmVDaGFuZ2UucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGN1cnJlbnRIb29rKSA9PiB7XG4gICAgICAgIGF3YWl0IHByaW9ySG9va1xuXG4gICAgICAgIGNvbnN0IGhvb2tlZFZhbHVlID0gYXdhaXQgY3VycmVudEhvb2soe1xuICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgIGdsb2JhbCxcbiAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgb3JpZ2luYWxEb2M6IGRvYyxcbiAgICAgICAgICBwcmV2aW91c1NpYmxpbmdEb2M6IHNpYmxpbmdEb2MsXG4gICAgICAgICAgcHJldmlvdXNWYWx1ZTogc2libGluZ0RvY1tmaWVsZC5uYW1lXSxcbiAgICAgICAgICByZXEsXG4gICAgICAgICAgc2libGluZ0RhdGEsXG4gICAgICAgICAgdmFsdWU6IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdLFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChob29rZWRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSBob29rZWRWYWx1ZVxuICAgICAgICB9XG4gICAgICB9LCBQcm9taXNlLnJlc29sdmUoKSlcbiAgICB9XG5cbiAgICAvLyBWYWxpZGF0ZVxuICAgIGlmICghc2tpcFZhbGlkYXRpb25Gcm9tSGVyZSAmJiBmaWVsZC52YWxpZGF0ZSkge1xuICAgICAgY29uc3QgdmFsdWVUb1ZhbGlkYXRlID0gc2libGluZ0RhdGFbZmllbGQubmFtZV1cbiAgICAgIGxldCBqc29uRXJyb3JcblxuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdqc29uJyAmJiB0eXBlb2Ygc2libGluZ0RhdGFbZmllbGQubmFtZV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgSlNPTi5wYXJzZShzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSBhcyBzdHJpbmcpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBqc29uRXJyb3IgPSBlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IGF3YWl0IGZpZWxkLnZhbGlkYXRlKHZhbHVlVG9WYWxpZGF0ZSwge1xuICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbmZpZzogcmVxLnBheWxvYWQuY29uZmlnLFxuICAgICAgICBkYXRhOiBtZXJnZShkb2MsIGRhdGEsIHsgYXJyYXlNZXJnZTogKF8sIHNvdXJjZSkgPT4gc291cmNlIH0pLFxuICAgICAgICBqc29uRXJyb3IsXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgcGF5bG9hZDogcmVxLnBheWxvYWQsXG4gICAgICAgIHByZXZpb3VzVmFsdWU6IHNpYmxpbmdEb2NbZmllbGQubmFtZV0sXG4gICAgICAgIHJlcSxcbiAgICAgICAgc2libGluZ0RhdGE6IG1lcmdlKHNpYmxpbmdEb2MsIHNpYmxpbmdEYXRhLCB7IGFycmF5TWVyZ2U6IChfLCBzb3VyY2UpID0+IHNvdXJjZSB9KSxcbiAgICAgICAgdDogcmVxLnQsXG4gICAgICAgIHVzZXI6IHJlcS51c2VyLFxuICAgICAgfSlcblxuICAgICAgaWYgKHR5cGVvZiB2YWxpZGF0aW9uUmVzdWx0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBlcnJvcnMucHVzaCh7XG4gICAgICAgICAgZmllbGQ6IGAke3BhdGh9JHtmaWVsZC5uYW1lfWAsXG4gICAgICAgICAgbWVzc2FnZTogdmFsaWRhdGlvblJlc3VsdCxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQdXNoIG1lcmdlIGxvY2FsZSBhY3Rpb24gaWYgYXBwbGljYWJsZVxuICAgIGlmIChmaWVsZC5sb2NhbGl6ZWQpIHtcbiAgICAgIG1lcmdlTG9jYWxlQWN0aW9ucy5wdXNoKCgpID0+IHtcbiAgICAgICAgaWYgKHJlcS5wYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb24pIHtcbiAgICAgICAgICBjb25zdCB7IGxvY2FsaXphdGlvbiB9ID0gcmVxLnBheWxvYWQuY29uZmlnXG4gICAgICAgICAgY29uc3QgbG9jYWxlRGF0YSA9IGxvY2FsaXphdGlvbi5sb2NhbGVDb2Rlcy5yZWR1Y2UoKGxvY2FsaXplZFZhbHVlcywgbG9jYWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZFZhbHVlID1cbiAgICAgICAgICAgICAgbG9jYWxlID09PSByZXEubG9jYWxlXG4gICAgICAgICAgICAgICAgPyBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXVxuICAgICAgICAgICAgICAgIDogc2libGluZ0RvY1dpdGhMb2NhbGVzPy5bZmllbGQubmFtZV0/Lltsb2NhbGVdXG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBsb2NhbGUgdmFsdWUgaWYgaXQncyBub3QgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZpZWxkVmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ubG9jYWxpemVkVmFsdWVzLFxuICAgICAgICAgICAgICAgIFtsb2NhbGVdOiBmaWVsZFZhbHVlLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBsb2NhbGl6ZWRWYWx1ZXNcbiAgICAgICAgICB9LCB7fSlcblxuICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBsb2NhbGVzIHdpdGggZGF0YSwgc2V0IHRoZSBkYXRhXG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGxvY2FsZURhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0gbG9jYWxlRGF0YVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICBjYXNlICdwb2ludCc6IHtcbiAgICAgIC8vIFRyYW5zZm9ybSBwb2ludCBkYXRhIGZvciBzdG9yYWdlXG4gICAgICBpZiAoXG4gICAgICAgIEFycmF5LmlzQXJyYXkoc2libGluZ0RhdGFbZmllbGQubmFtZV0pICYmXG4gICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdWzBdICE9PSBudWxsICYmXG4gICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdWzFdICE9PSBudWxsXG4gICAgICApIHtcbiAgICAgICAgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXM6IFtcbiAgICAgICAgICAgIHBhcnNlRmxvYXQoc2libGluZ0RhdGFbZmllbGQubmFtZV1bMF0pLFxuICAgICAgICAgICAgcGFyc2VGbG9hdChzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXVsxXSksXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0eXBlOiAnUG9pbnQnLFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgY2FzZSAnZ3JvdXAnOiB7XG4gICAgICBpZiAodHlwZW9mIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdICE9PSAnb2JqZWN0Jykgc2libGluZ0RhdGFbZmllbGQubmFtZV0gPSB7fVxuICAgICAgaWYgKHR5cGVvZiBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdICE9PSAnb2JqZWN0Jykgc2libGluZ0RvY1tmaWVsZC5uYW1lXSA9IHt9XG4gICAgICBpZiAodHlwZW9mIHNpYmxpbmdEb2NXaXRoTG9jYWxlc1tmaWVsZC5uYW1lXSAhPT0gJ29iamVjdCcpXG4gICAgICAgIHNpYmxpbmdEb2NXaXRoTG9jYWxlc1tmaWVsZC5uYW1lXSA9IHt9XG5cbiAgICAgIGF3YWl0IHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGRvYyxcbiAgICAgICAgZG9jV2l0aExvY2FsZXMsXG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgIGdsb2JhbCxcbiAgICAgICAgbWVyZ2VMb2NhbGVBY3Rpb25zLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIHBhdGg6IGAke3BhdGh9JHtmaWVsZC5uYW1lfS5gLFxuICAgICAgICByZXEsXG4gICAgICAgIHNpYmxpbmdEYXRhOiBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICAgICAgc2libGluZ0RvYzogc2libGluZ0RvY1tmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICAgICAgc2libGluZ0RvY1dpdGhMb2NhbGVzOiBzaWJsaW5nRG9jV2l0aExvY2FsZXNbZmllbGQubmFtZV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gICAgICAgIHNraXBWYWxpZGF0aW9uOiBza2lwVmFsaWRhdGlvbkZyb21IZXJlLFxuICAgICAgfSlcblxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBjYXNlICdhcnJheSc6IHtcbiAgICAgIGNvbnN0IHJvd3MgPSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dzKSkge1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdXG4gICAgICAgIHJvd3MuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgcHJvbWlzZXMucHVzaChcbiAgICAgICAgICAgIHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgIGRvYyxcbiAgICAgICAgICAgICAgZG9jV2l0aExvY2FsZXMsXG4gICAgICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgICAgICAgIGdsb2JhbCxcbiAgICAgICAgICAgICAgbWVyZ2VMb2NhbGVBY3Rpb25zLFxuICAgICAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgICAgIHBhdGg6IGAke3BhdGh9JHtmaWVsZC5uYW1lfS4ke2l9LmAsXG4gICAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgICAgc2libGluZ0RhdGE6IHJvdyxcbiAgICAgICAgICAgICAgc2libGluZ0RvYzogZ2V0RXhpc3RpbmdSb3dEb2Mocm93LCBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdKSxcbiAgICAgICAgICAgICAgc2libGluZ0RvY1dpdGhMb2NhbGVzOiBnZXRFeGlzdGluZ1Jvd0RvYyhyb3csIHNpYmxpbmdEb2NXaXRoTG9jYWxlc1tmaWVsZC5uYW1lXSksXG4gICAgICAgICAgICAgIHNraXBWYWxpZGF0aW9uOiBza2lwVmFsaWRhdGlvbkZyb21IZXJlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgICAgfVxuXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGNhc2UgJ2Jsb2Nrcyc6IHtcbiAgICAgIGNvbnN0IHJvd3MgPSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dzKSkge1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdXG4gICAgICAgIHJvd3MuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgY29uc3Qgcm93U2libGluZ0RvYyA9IGdldEV4aXN0aW5nUm93RG9jKHJvdywgc2libGluZ0RvY1tmaWVsZC5uYW1lXSlcbiAgICAgICAgICBjb25zdCByb3dTaWJsaW5nRG9jV2l0aExvY2FsZXMgPSBnZXRFeGlzdGluZ1Jvd0RvYyhyb3csIHNpYmxpbmdEb2NXaXRoTG9jYWxlc1tmaWVsZC5uYW1lXSlcblxuICAgICAgICAgIGNvbnN0IGJsb2NrVHlwZVRvTWF0Y2ggPSByb3cuYmxvY2tUeXBlIHx8IHJvd1NpYmxpbmdEb2MuYmxvY2tUeXBlXG4gICAgICAgICAgY29uc3QgYmxvY2sgPSBmaWVsZC5ibG9ja3MuZmluZCgoYmxvY2tUeXBlKSA9PiBibG9ja1R5cGUuc2x1ZyA9PT0gYmxvY2tUeXBlVG9NYXRjaClcblxuICAgICAgICAgIGlmIChibG9jaykge1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcbiAgICAgICAgICAgICAgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgIGRvYyxcbiAgICAgICAgICAgICAgICBkb2NXaXRoTG9jYWxlcyxcbiAgICAgICAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgICAgICAgZmllbGRzOiBibG9jay5maWVsZHMsXG4gICAgICAgICAgICAgICAgZ2xvYmFsLFxuICAgICAgICAgICAgICAgIG1lcmdlTG9jYWxlQWN0aW9ucyxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgICAgICAgcGF0aDogYCR7cGF0aH0ke2ZpZWxkLm5hbWV9LiR7aX0uYCxcbiAgICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICAgICAgc2libGluZ0RhdGE6IHJvdyxcbiAgICAgICAgICAgICAgICBzaWJsaW5nRG9jOiByb3dTaWJsaW5nRG9jLFxuICAgICAgICAgICAgICAgIHNpYmxpbmdEb2NXaXRoTG9jYWxlczogcm93U2libGluZ0RvY1dpdGhMb2NhbGVzLFxuICAgICAgICAgICAgICAgIHNraXBWYWxpZGF0aW9uOiBza2lwVmFsaWRhdGlvbkZyb21IZXJlLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gICAgICB9XG5cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgY2FzZSAncm93JzpcbiAgICBjYXNlICdjb2xsYXBzaWJsZSc6IHtcbiAgICAgIGF3YWl0IHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGRvYyxcbiAgICAgICAgZG9jV2l0aExvY2FsZXMsXG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgIGdsb2JhbCxcbiAgICAgICAgbWVyZ2VMb2NhbGVBY3Rpb25zLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIHBhdGgsXG4gICAgICAgIHJlcSxcbiAgICAgICAgc2libGluZ0RhdGEsXG4gICAgICAgIHNpYmxpbmdEb2MsXG4gICAgICAgIHNpYmxpbmdEb2NXaXRoTG9jYWxlcyxcbiAgICAgICAgc2tpcFZhbGlkYXRpb246IHNraXBWYWxpZGF0aW9uRnJvbUhlcmUsXG4gICAgICB9KVxuXG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGNhc2UgJ3RhYic6IHtcbiAgICAgIGxldCB0YWJQYXRoID0gcGF0aFxuICAgICAgbGV0IHRhYlNpYmxpbmdEYXRhID0gc2libGluZ0RhdGFcbiAgICAgIGxldCB0YWJTaWJsaW5nRG9jID0gc2libGluZ0RvY1xuICAgICAgbGV0IHRhYlNpYmxpbmdEb2NXaXRoTG9jYWxlcyA9IHNpYmxpbmdEb2NXaXRoTG9jYWxlc1xuXG4gICAgICBpZiAodGFiSGFzTmFtZShmaWVsZCkpIHtcbiAgICAgICAgdGFiUGF0aCA9IGAke3BhdGh9JHtmaWVsZC5uYW1lfS5gXG4gICAgICAgIGlmICh0eXBlb2Ygc2libGluZ0RhdGFbZmllbGQubmFtZV0gIT09ICdvYmplY3QnKSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9IHt9XG4gICAgICAgIGlmICh0eXBlb2Ygc2libGluZ0RvY1tmaWVsZC5uYW1lXSAhPT0gJ29iamVjdCcpIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gPSB7fVxuICAgICAgICBpZiAodHlwZW9mIHNpYmxpbmdEb2NXaXRoTG9jYWxlc1tmaWVsZC5uYW1lXSAhPT0gJ29iamVjdCcpXG4gICAgICAgICAgc2libGluZ0RvY1dpdGhMb2NhbGVzW2ZpZWxkLm5hbWVdID0ge31cblxuICAgICAgICB0YWJTaWJsaW5nRGF0YSA9IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgICAgIHRhYlNpYmxpbmdEb2MgPSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgICAgIHRhYlNpYmxpbmdEb2NXaXRoTG9jYWxlcyA9IHNpYmxpbmdEb2NXaXRoTG9jYWxlc1tmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgICAgfVxuXG4gICAgICBhd2FpdCB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgIGlkLFxuICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBkYXRhLFxuICAgICAgICBkb2MsXG4gICAgICAgIGRvY1dpdGhMb2NhbGVzLFxuICAgICAgICBlcnJvcnMsXG4gICAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgICBnbG9iYWwsXG4gICAgICAgIG1lcmdlTG9jYWxlQWN0aW9ucyxcbiAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICBwYXRoOiB0YWJQYXRoLFxuICAgICAgICByZXEsXG4gICAgICAgIHNpYmxpbmdEYXRhOiB0YWJTaWJsaW5nRGF0YSxcbiAgICAgICAgc2libGluZ0RvYzogdGFiU2libGluZ0RvYyxcbiAgICAgICAgc2libGluZ0RvY1dpdGhMb2NhbGVzOiB0YWJTaWJsaW5nRG9jV2l0aExvY2FsZXMsXG4gICAgICAgIHNraXBWYWxpZGF0aW9uOiBza2lwVmFsaWRhdGlvbkZyb21IZXJlLFxuICAgICAgfSlcblxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBjYXNlICd0YWJzJzoge1xuICAgICAgYXdhaXQgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICBpZCxcbiAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZG9jLFxuICAgICAgICBkb2NXaXRoTG9jYWxlcyxcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBmaWVsZHM6IGZpZWxkLnRhYnMubWFwKCh0YWIpID0+ICh7IC4uLnRhYiwgdHlwZTogJ3RhYicgfSkpLFxuICAgICAgICBnbG9iYWwsXG4gICAgICAgIG1lcmdlTG9jYWxlQWN0aW9ucyxcbiAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICBwYXRoLFxuICAgICAgICByZXEsXG4gICAgICAgIHNpYmxpbmdEYXRhLFxuICAgICAgICBzaWJsaW5nRG9jLFxuICAgICAgICBzaWJsaW5nRG9jV2l0aExvY2FsZXMsXG4gICAgICAgIHNraXBWYWxpZGF0aW9uOiBza2lwVmFsaWRhdGlvbkZyb21IZXJlLFxuICAgICAgfSlcblxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbInByb21pc2UiLCJpZCIsImNvbGxlY3Rpb24iLCJjb250ZXh0IiwiZGF0YSIsImRvYyIsImRvY1dpdGhMb2NhbGVzIiwiZXJyb3JzIiwiZmllbGQiLCJnbG9iYWwiLCJtZXJnZUxvY2FsZUFjdGlvbnMiLCJvcGVyYXRpb24iLCJwYXRoIiwicmVxIiwic2libGluZ0RhdGEiLCJzaWJsaW5nRG9jIiwic2libGluZ0RvY1dpdGhMb2NhbGVzIiwic2tpcFZhbGlkYXRpb24iLCJwYXNzZXNDb25kaXRpb24iLCJhZG1pbiIsImNvbmRpdGlvbiIsIkJvb2xlYW4iLCJ1c2VyIiwic2tpcFZhbGlkYXRpb25Gcm9tSGVyZSIsImRlZmF1bHRMb2NhbGUiLCJwYXlsb2FkIiwiY29uZmlnIiwibG9jYWxpemF0aW9uIiwib3BlcmF0aW9uTG9jYWxlIiwibG9jYWxlIiwiZmllbGRBZmZlY3RzRGF0YSIsImxvY2FsaXplZCIsImluY2x1ZGVzIiwidHlwZSIsIm5hbWUiLCJob29rcyIsImJlZm9yZUNoYW5nZSIsInJlZHVjZSIsInByaW9ySG9vayIsImN1cnJlbnRIb29rIiwiaG9va2VkVmFsdWUiLCJvcmlnaW5hbERvYyIsInByZXZpb3VzU2libGluZ0RvYyIsInByZXZpb3VzVmFsdWUiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsIlByb21pc2UiLCJyZXNvbHZlIiwidmFsaWRhdGUiLCJ2YWx1ZVRvVmFsaWRhdGUiLCJqc29uRXJyb3IiLCJKU09OIiwicGFyc2UiLCJlIiwidmFsaWRhdGlvblJlc3VsdCIsIm1lcmdlIiwiYXJyYXlNZXJnZSIsIl8iLCJzb3VyY2UiLCJ0IiwicHVzaCIsIm1lc3NhZ2UiLCJsb2NhbGVEYXRhIiwibG9jYWxlQ29kZXMiLCJsb2NhbGl6ZWRWYWx1ZXMiLCJmaWVsZFZhbHVlIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIkFycmF5IiwiaXNBcnJheSIsImNvb3JkaW5hdGVzIiwicGFyc2VGbG9hdCIsInRyYXZlcnNlRmllbGRzIiwiZmllbGRzIiwicm93cyIsInByb21pc2VzIiwiZm9yRWFjaCIsInJvdyIsImkiLCJnZXRFeGlzdGluZ1Jvd0RvYyIsImFsbCIsInJvd1NpYmxpbmdEb2MiLCJyb3dTaWJsaW5nRG9jV2l0aExvY2FsZXMiLCJibG9ja1R5cGVUb01hdGNoIiwiYmxvY2tUeXBlIiwiYmxvY2siLCJibG9ja3MiLCJmaW5kIiwic2x1ZyIsInRhYlBhdGgiLCJ0YWJTaWJsaW5nRGF0YSIsInRhYlNpYmxpbmdEb2MiLCJ0YWJTaWJsaW5nRG9jV2l0aExvY2FsZXMiLCJ0YWJIYXNOYW1lIiwidGFicyIsIm1hcCIsInRhYiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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