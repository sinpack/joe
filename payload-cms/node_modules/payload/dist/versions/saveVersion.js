"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "saveVersion", {
    enumerable: true,
    get: function() {
        return saveVersion;
    }
});
const _deepCopyObject = require("../utilities/deepCopyObject");
const _sanitizeInternalFields = /*#__PURE__*/ _interop_require_default(require("../utilities/sanitizeInternalFields"));
const _enforceMaxVersions = require("./enforceMaxVersions");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const saveVersion = async ({ id, autosave, collection, docWithLocales: doc, draft, global, payload, req })=>{
    let result;
    let createNewVersion = true;
    const now = new Date().toISOString();
    const versionData = (0, _deepCopyObject.deepCopyObject)(doc);
    if (draft) versionData._status = 'draft';
    if (versionData._id) delete versionData._id;
    try {
        if (autosave) {
            let docs;
            const findVersionArgs = {
                limit: 1,
                req,
                sort: '-updatedAt'
            };
            if (collection) {
                ({ docs } = await payload.db.findVersions({
                    ...findVersionArgs,
                    collection: collection.slug,
                    req,
                    where: {
                        parent: {
                            equals: id
                        }
                    }
                }));
            } else {
                ({ docs } = await payload.db.findGlobalVersions({
                    ...findVersionArgs,
                    global: global.slug,
                    req
                }));
            }
            const [latestVersion] = docs;
            // overwrite the latest version if it's set to autosave
            if (latestVersion?.autosave === true) {
                createNewVersion = false;
                const data = {
                    createdAt: new Date(latestVersion.createdAt).toISOString(),
                    updatedAt: draft ? now : new Date(doc.updatedAt).toISOString(),
                    version: versionData
                };
                const updateVersionArgs = {
                    id: latestVersion.id,
                    req,
                    versionData: data
                };
                if (collection) {
                    result = await payload.db.updateVersion({
                        ...updateVersionArgs,
                        collection: collection.slug,
                        req
                    });
                } else {
                    result = await payload.db.updateGlobalVersion({
                        ...updateVersionArgs,
                        global: global.slug,
                        req
                    });
                }
            }
        }
        if (createNewVersion) {
            if (collection) {
                result = await payload.db.createVersion({
                    autosave: Boolean(autosave),
                    collectionSlug: collection.slug,
                    createdAt: doc?.createdAt ? new Date(doc.createdAt).toISOString() : now,
                    parent: collection ? id : undefined,
                    req,
                    updatedAt: draft ? now : new Date(doc.updatedAt).toISOString(),
                    versionData
                });
            }
            if (global) {
                result = await payload.db.createGlobalVersion({
                    autosave: Boolean(autosave),
                    createdAt: doc?.createdAt ? new Date(doc.createdAt).toISOString() : now,
                    globalSlug: global.slug,
                    parent: collection ? id : undefined,
                    req,
                    updatedAt: draft ? now : new Date(doc.updatedAt).toISOString(),
                    versionData
                });
            }
        }
    } catch (err) {
        let errorMessage;
        if (collection) errorMessage = `There was an error while saving a version for the ${collection.labels.singular} with ID ${id}.`;
        if (global) errorMessage = `There was an error while saving a version for the global ${global.label}.`;
        payload.logger.error(errorMessage);
        payload.logger.error(err);
    }
    let max = 100;
    if (collection && typeof collection.versions.maxPerDoc === 'number') max = collection.versions.maxPerDoc;
    if (global && typeof global.versions.max === 'number') max = global.versions.max;
    if (createNewVersion && max > 0) {
        await (0, _enforceMaxVersions.enforceMaxVersions)({
            id,
            collection,
            global,
            max,
            payload,
            req
        });
    }
    let createdVersion = result.version;
    createdVersion.createdAt = result.createdAt;
    createdVersion.updatedAt = result.updatedAt;
    createdVersion = (0, _sanitizeInternalFields.default)(createdVersion);
    createdVersion.id = result.parent;
    return createdVersion;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJzaW9ucy9zYXZlVmVyc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcsIFR5cGVXaXRoSUQgfSBmcm9tICcuLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vZXhwcmVzcy90eXBlcydcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vZ2xvYmFscy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFBheWxvYWQgfSBmcm9tICcuLi9wYXlsb2FkJ1xuXG5pbXBvcnQgeyBkZWVwQ29weU9iamVjdCB9IGZyb20gJy4uL3V0aWxpdGllcy9kZWVwQ29weU9iamVjdCdcbmltcG9ydCBzYW5pdGl6ZUludGVybmFsRmllbGRzIGZyb20gJy4uL3V0aWxpdGllcy9zYW5pdGl6ZUludGVybmFsRmllbGRzJ1xuaW1wb3J0IHsgZW5mb3JjZU1heFZlcnNpb25zIH0gZnJvbSAnLi9lbmZvcmNlTWF4VmVyc2lvbnMnXG5cbnR5cGUgQXJncyA9IHtcbiAgYXV0b3NhdmU/OiBib29sZWFuXG4gIGNvbGxlY3Rpb24/OiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnXG4gIGRvY1dpdGhMb2NhbGVzOiBhbnlcbiAgZHJhZnQ/OiBib29sZWFuXG4gIGdsb2JhbD86IFNhbml0aXplZEdsb2JhbENvbmZpZ1xuICBpZD86IG51bWJlciB8IHN0cmluZ1xuICBwYXlsb2FkOiBQYXlsb2FkXG4gIHJlcT86IFBheWxvYWRSZXF1ZXN0XG59XG5cbmV4cG9ydCBjb25zdCBzYXZlVmVyc2lvbiA9IGFzeW5jICh7XG4gIGlkLFxuICBhdXRvc2F2ZSxcbiAgY29sbGVjdGlvbixcbiAgZG9jV2l0aExvY2FsZXM6IGRvYyxcbiAgZHJhZnQsXG4gIGdsb2JhbCxcbiAgcGF5bG9hZCxcbiAgcmVxLFxufTogQXJncyk6IFByb21pc2U8VHlwZVdpdGhJRD4gPT4ge1xuICBsZXQgcmVzdWx0XG4gIGxldCBjcmVhdGVOZXdWZXJzaW9uID0gdHJ1ZVxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgY29uc3QgdmVyc2lvbkRhdGEgPSBkZWVwQ29weU9iamVjdChkb2MpXG4gIGlmIChkcmFmdCkgdmVyc2lvbkRhdGEuX3N0YXR1cyA9ICdkcmFmdCdcbiAgaWYgKHZlcnNpb25EYXRhLl9pZCkgZGVsZXRlIHZlcnNpb25EYXRhLl9pZFxuXG4gIHRyeSB7XG4gICAgaWYgKGF1dG9zYXZlKSB7XG4gICAgICBsZXQgZG9jc1xuICAgICAgY29uc3QgZmluZFZlcnNpb25BcmdzID0ge1xuICAgICAgICBsaW1pdDogMSxcbiAgICAgICAgcmVxLFxuICAgICAgICBzb3J0OiAnLXVwZGF0ZWRBdCcsXG4gICAgICB9XG4gICAgICBpZiAoY29sbGVjdGlvbikge1xuICAgICAgICA7KHsgZG9jcyB9ID0gYXdhaXQgcGF5bG9hZC5kYi5maW5kVmVyc2lvbnMoe1xuICAgICAgICAgIC4uLmZpbmRWZXJzaW9uQXJncyxcbiAgICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLnNsdWcsXG4gICAgICAgICAgcmVxLFxuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBwYXJlbnQ6IHtcbiAgICAgICAgICAgICAgZXF1YWxzOiBpZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICA7KHsgZG9jcyB9ID0gYXdhaXQgcGF5bG9hZC5kYi5maW5kR2xvYmFsVmVyc2lvbnMoe1xuICAgICAgICAgIC4uLmZpbmRWZXJzaW9uQXJncyxcbiAgICAgICAgICBnbG9iYWw6IGdsb2JhbC5zbHVnLFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgICBjb25zdCBbbGF0ZXN0VmVyc2lvbl0gPSBkb2NzXG5cbiAgICAgIC8vIG92ZXJ3cml0ZSB0aGUgbGF0ZXN0IHZlcnNpb24gaWYgaXQncyBzZXQgdG8gYXV0b3NhdmVcbiAgICAgIGlmIChsYXRlc3RWZXJzaW9uPy5hdXRvc2F2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjcmVhdGVOZXdWZXJzaW9uID0gZmFsc2VcblxuICAgICAgICBjb25zdCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHtcbiAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKGxhdGVzdFZlcnNpb24uY3JlYXRlZEF0KS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIHVwZGF0ZWRBdDogZHJhZnQgPyBub3cgOiBuZXcgRGF0ZShkb2MudXBkYXRlZEF0KS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIHZlcnNpb246IHZlcnNpb25EYXRhLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXBkYXRlVmVyc2lvbkFyZ3MgPSB7XG4gICAgICAgICAgaWQ6IGxhdGVzdFZlcnNpb24uaWQsXG4gICAgICAgICAgcmVxLFxuICAgICAgICAgIHZlcnNpb25EYXRhOiBkYXRhIGFzIFR5cGVXaXRoSUQsXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29sbGVjdGlvbikge1xuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHBheWxvYWQuZGIudXBkYXRlVmVyc2lvbih7XG4gICAgICAgICAgICAuLi51cGRhdGVWZXJzaW9uQXJncyxcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24uc2x1ZyxcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHBheWxvYWQuZGIudXBkYXRlR2xvYmFsVmVyc2lvbih7XG4gICAgICAgICAgICAuLi51cGRhdGVWZXJzaW9uQXJncyxcbiAgICAgICAgICAgIGdsb2JhbDogZ2xvYmFsLnNsdWcsXG4gICAgICAgICAgICByZXEsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjcmVhdGVOZXdWZXJzaW9uKSB7XG4gICAgICBpZiAoY29sbGVjdGlvbikge1xuICAgICAgICByZXN1bHQgPSBhd2FpdCBwYXlsb2FkLmRiLmNyZWF0ZVZlcnNpb24oe1xuICAgICAgICAgIGF1dG9zYXZlOiBCb29sZWFuKGF1dG9zYXZlKSxcbiAgICAgICAgICBjb2xsZWN0aW9uU2x1ZzogY29sbGVjdGlvbi5zbHVnLFxuICAgICAgICAgIGNyZWF0ZWRBdDogZG9jPy5jcmVhdGVkQXQgPyBuZXcgRGF0ZShkb2MuY3JlYXRlZEF0KS50b0lTT1N0cmluZygpIDogbm93LFxuICAgICAgICAgIHBhcmVudDogY29sbGVjdGlvbiA/IGlkIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgICB1cGRhdGVkQXQ6IGRyYWZ0ID8gbm93IDogbmV3IERhdGUoZG9jLnVwZGF0ZWRBdCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICB2ZXJzaW9uRGF0YSxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKGdsb2JhbCkge1xuICAgICAgICByZXN1bHQgPSBhd2FpdCBwYXlsb2FkLmRiLmNyZWF0ZUdsb2JhbFZlcnNpb24oe1xuICAgICAgICAgIGF1dG9zYXZlOiBCb29sZWFuKGF1dG9zYXZlKSxcbiAgICAgICAgICBjcmVhdGVkQXQ6IGRvYz8uY3JlYXRlZEF0ID8gbmV3IERhdGUoZG9jLmNyZWF0ZWRBdCkudG9JU09TdHJpbmcoKSA6IG5vdyxcbiAgICAgICAgICBnbG9iYWxTbHVnOiBnbG9iYWwuc2x1ZyxcbiAgICAgICAgICBwYXJlbnQ6IGNvbGxlY3Rpb24gPyBpZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICByZXEsXG4gICAgICAgICAgdXBkYXRlZEF0OiBkcmFmdCA/IG5vdyA6IG5ldyBEYXRlKGRvYy51cGRhdGVkQXQpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgdmVyc2lvbkRhdGEsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBsZXQgZXJyb3JNZXNzYWdlOiBzdHJpbmdcblxuICAgIGlmIChjb2xsZWN0aW9uKVxuICAgICAgZXJyb3JNZXNzYWdlID0gYFRoZXJlIHdhcyBhbiBlcnJvciB3aGlsZSBzYXZpbmcgYSB2ZXJzaW9uIGZvciB0aGUgJHtjb2xsZWN0aW9uLmxhYmVscy5zaW5ndWxhcn0gd2l0aCBJRCAke2lkfS5gXG4gICAgaWYgKGdsb2JhbClcbiAgICAgIGVycm9yTWVzc2FnZSA9IGBUaGVyZSB3YXMgYW4gZXJyb3Igd2hpbGUgc2F2aW5nIGEgdmVyc2lvbiBmb3IgdGhlIGdsb2JhbCAke2dsb2JhbC5sYWJlbH0uYFxuICAgIHBheWxvYWQubG9nZ2VyLmVycm9yKGVycm9yTWVzc2FnZSlcbiAgICBwYXlsb2FkLmxvZ2dlci5lcnJvcihlcnIpXG4gIH1cblxuICBsZXQgbWF4ID0gMTAwXG5cbiAgaWYgKGNvbGxlY3Rpb24gJiYgdHlwZW9mIGNvbGxlY3Rpb24udmVyc2lvbnMubWF4UGVyRG9jID09PSAnbnVtYmVyJylcbiAgICBtYXggPSBjb2xsZWN0aW9uLnZlcnNpb25zLm1heFBlckRvY1xuICBpZiAoZ2xvYmFsICYmIHR5cGVvZiBnbG9iYWwudmVyc2lvbnMubWF4ID09PSAnbnVtYmVyJykgbWF4ID0gZ2xvYmFsLnZlcnNpb25zLm1heFxuXG4gIGlmIChjcmVhdGVOZXdWZXJzaW9uICYmIG1heCA+IDApIHtcbiAgICBhd2FpdCBlbmZvcmNlTWF4VmVyc2lvbnMoe1xuICAgICAgaWQsXG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgZ2xvYmFsLFxuICAgICAgbWF4LFxuICAgICAgcGF5bG9hZCxcbiAgICAgIHJlcSxcbiAgICB9KVxuICB9XG5cbiAgbGV0IGNyZWF0ZWRWZXJzaW9uID0gcmVzdWx0LnZlcnNpb25cbiAgY3JlYXRlZFZlcnNpb24uY3JlYXRlZEF0ID0gcmVzdWx0LmNyZWF0ZWRBdFxuICBjcmVhdGVkVmVyc2lvbi51cGRhdGVkQXQgPSByZXN1bHQudXBkYXRlZEF0XG5cbiAgY3JlYXRlZFZlcnNpb24gPSBzYW5pdGl6ZUludGVybmFsRmllbGRzKGNyZWF0ZWRWZXJzaW9uKVxuICBjcmVhdGVkVmVyc2lvbi5pZCA9IHJlc3VsdC5wYXJlbnRcblxuICByZXR1cm4gY3JlYXRlZFZlcnNpb25cbn1cbiJdLCJuYW1lcyI6WyJzYXZlVmVyc2lvbiIsImlkIiwiYXV0b3NhdmUiLCJjb2xsZWN0aW9uIiwiZG9jV2l0aExvY2FsZXMiLCJkb2MiLCJkcmFmdCIsImdsb2JhbCIsInBheWxvYWQiLCJyZXEiLCJyZXN1bHQiLCJjcmVhdGVOZXdWZXJzaW9uIiwibm93IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwidmVyc2lvbkRhdGEiLCJkZWVwQ29weU9iamVjdCIsIl9zdGF0dXMiLCJfaWQiLCJkb2NzIiwiZmluZFZlcnNpb25BcmdzIiwibGltaXQiLCJzb3J0IiwiZGIiLCJmaW5kVmVyc2lvbnMiLCJzbHVnIiwid2hlcmUiLCJwYXJlbnQiLCJlcXVhbHMiLCJmaW5kR2xvYmFsVmVyc2lvbnMiLCJsYXRlc3RWZXJzaW9uIiwiZGF0YSIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInZlcnNpb24iLCJ1cGRhdGVWZXJzaW9uQXJncyIsInVwZGF0ZVZlcnNpb24iLCJ1cGRhdGVHbG9iYWxWZXJzaW9uIiwiY3JlYXRlVmVyc2lvbiIsIkJvb2xlYW4iLCJjb2xsZWN0aW9uU2x1ZyIsInVuZGVmaW5lZCIsImNyZWF0ZUdsb2JhbFZlcnNpb24iLCJnbG9iYWxTbHVnIiwiZXJyIiwiZXJyb3JNZXNzYWdlIiwibGFiZWxzIiwic2luZ3VsYXIiLCJsYWJlbCIsImxvZ2dlciIsImVycm9yIiwibWF4IiwidmVyc2lvbnMiLCJtYXhQZXJEb2MiLCJlbmZvcmNlTWF4VmVyc2lvbnMiLCJjcmVhdGVkVmVyc2lvbiIsInNhbml0aXplSW50ZXJuYWxGaWVsZHMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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