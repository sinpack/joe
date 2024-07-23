"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getDataLoader", {
    enumerable: true,
    get: function() {
        return getDataLoader;
    }
});
const _dataloader = /*#__PURE__*/ _interop_require_default(require("dataloader"));
const _types = require("../fields/config/types");
const _getIDType = require("../utilities/getIDType");
const _isValidID = require("../utilities/isValidID");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// Payload uses `dataloader` to solve the classic GraphQL N+1 problem.
// We keep a list of all documents requested to be populated for any given request
// and then batch together documents within the same collection,
// making only 1 find per each collection, rather than `findByID` per each requested doc.
// This dramatically improves performance for REST and Local API `depth` populations,
// and also ensures complex GraphQL queries perform lightning-fast.
const batchAndLoadDocs = (req)=>async (keys)=>{
        const { payload } = req;
        // Create docs array of same length as keys, using null as value
        // We will replace nulls with injected docs as they are retrieved
        const docs = keys.map(()=>null);
        // Batch IDs by their `find` args
        // so we can make one find query per combination of collection, depth, locale, and fallbackLocale.
        // Resulting shape will be as follows:
        // {
        //   // key is stringified set of find args
        //   '[null,"pages",2,0,"es","en",false,false]': [
        //     // value is array of IDs to find with these args
        //     'q34tl23462346234524',
        //     '435523540194324280',
        //     '2346245j35l3j5234532li',
        //   ],
        //   // etc
        // };
        const batchByFindArgs = keys.reduce((batches, key)=>{
            const [transactionID, collection, id, depth, currentDepth, locale, fallbackLocale, overrideAccess, showHiddenFields, draft] = JSON.parse(key);
            const batchKeyArray = [
                transactionID,
                collection,
                depth,
                currentDepth,
                locale,
                fallbackLocale,
                overrideAccess,
                showHiddenFields,
                draft
            ];
            const batchKey = JSON.stringify(batchKeyArray);
            const idField = payload.collections?.[collection].config.fields.find((field)=>(0, _types.fieldAffectsData)(field) && field.name === 'id');
            let sanitizedID = id;
            if (idField?.type === 'number') sanitizedID = parseFloat(id);
            if ((0, _isValidID.isValidID)(sanitizedID, (0, _getIDType.getIDType)(idField, payload?.db?.defaultIDType))) {
                return {
                    ...batches,
                    [batchKey]: [
                        ...batches[batchKey] || [],
                        sanitizedID
                    ]
                };
            }
            return batches;
        }, {});
        // Run find requests one after another, so as to not hang transactions
        await Object.entries(batchByFindArgs).reduce(async (priorFind, [batchKey, ids])=>{
            await priorFind;
            const [transactionID, collection, depth, currentDepth, locale, fallbackLocale, overrideAccess, showHiddenFields, draft] = JSON.parse(batchKey);
            req.transactionID = transactionID;
            const result = await payload.find({
                collection,
                currentDepth,
                depth,
                disableErrors: true,
                draft,
                fallbackLocale,
                locale,
                overrideAccess: Boolean(overrideAccess),
                pagination: false,
                req,
                showHiddenFields: Boolean(showHiddenFields),
                where: {
                    id: {
                        in: ids
                    }
                }
            });
            // For each returned doc, find index in original keys
            // Inject doc within docs array if index exists
            result.docs.forEach((doc)=>{
                const docKey = JSON.stringify([
                    req.transactionID,
                    collection,
                    doc.id,
                    depth,
                    currentDepth,
                    locale,
                    fallbackLocale,
                    overrideAccess,
                    showHiddenFields,
                    draft
                ]);
                const docsIndex = keys.findIndex((key)=>key === docKey);
                if (docsIndex > -1) {
                    docs[docsIndex] = doc;
                }
            });
        }, Promise.resolve());
        // Return docs array,
        // which has now been injected with all fetched docs
        // and should match the length of the incoming keys arg
        return docs;
    };
const getDataLoader = (req)=>new _dataloader.default(batchAndLoadDocs(req));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2xsZWN0aW9ucy9kYXRhbG9hZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQmF0Y2hMb2FkRm4gfSBmcm9tICdkYXRhbG9hZGVyJ1xuXG5pbXBvcnQgRGF0YUxvYWRlciBmcm9tICdkYXRhbG9hZGVyJ1xuXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vZXhwcmVzcy90eXBlcydcbmltcG9ydCB0eXBlIHsgVHlwZVdpdGhJRCB9IGZyb20gJy4vY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgeyBmaWVsZEFmZmVjdHNEYXRhIH0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCB7IGdldElEVHlwZSB9IGZyb20gJy4uL3V0aWxpdGllcy9nZXRJRFR5cGUnXG5pbXBvcnQgeyBpc1ZhbGlkSUQgfSBmcm9tICcuLi91dGlsaXRpZXMvaXNWYWxpZElEJ1xuXG4vLyBQYXlsb2FkIHVzZXMgYGRhdGFsb2FkZXJgIHRvIHNvbHZlIHRoZSBjbGFzc2ljIEdyYXBoUUwgTisxIHByb2JsZW0uXG5cbi8vIFdlIGtlZXAgYSBsaXN0IG9mIGFsbCBkb2N1bWVudHMgcmVxdWVzdGVkIHRvIGJlIHBvcHVsYXRlZCBmb3IgYW55IGdpdmVuIHJlcXVlc3Rcbi8vIGFuZCB0aGVuIGJhdGNoIHRvZ2V0aGVyIGRvY3VtZW50cyB3aXRoaW4gdGhlIHNhbWUgY29sbGVjdGlvbixcbi8vIG1ha2luZyBvbmx5IDEgZmluZCBwZXIgZWFjaCBjb2xsZWN0aW9uLCByYXRoZXIgdGhhbiBgZmluZEJ5SURgIHBlciBlYWNoIHJlcXVlc3RlZCBkb2MuXG5cbi8vIFRoaXMgZHJhbWF0aWNhbGx5IGltcHJvdmVzIHBlcmZvcm1hbmNlIGZvciBSRVNUIGFuZCBMb2NhbCBBUEkgYGRlcHRoYCBwb3B1bGF0aW9ucyxcbi8vIGFuZCBhbHNvIGVuc3VyZXMgY29tcGxleCBHcmFwaFFMIHF1ZXJpZXMgcGVyZm9ybSBsaWdodG5pbmctZmFzdC5cblxuY29uc3QgYmF0Y2hBbmRMb2FkRG9jcyA9XG4gIChyZXE6IFBheWxvYWRSZXF1ZXN0KTogQmF0Y2hMb2FkRm48c3RyaW5nLCBUeXBlV2l0aElEPiA9PlxuICBhc3luYyAoa2V5czogc3RyaW5nW10pOiBQcm9taXNlPFR5cGVXaXRoSURbXT4gPT4ge1xuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gcmVxXG5cbiAgICAvLyBDcmVhdGUgZG9jcyBhcnJheSBvZiBzYW1lIGxlbmd0aCBhcyBrZXlzLCB1c2luZyBudWxsIGFzIHZhbHVlXG4gICAgLy8gV2Ugd2lsbCByZXBsYWNlIG51bGxzIHdpdGggaW5qZWN0ZWQgZG9jcyBhcyB0aGV5IGFyZSByZXRyaWV2ZWRcbiAgICBjb25zdCBkb2NzOiAoVHlwZVdpdGhJRCB8IG51bGwpW10gPSBrZXlzLm1hcCgoKSA9PiBudWxsKVxuXG4gICAgLy8gQmF0Y2ggSURzIGJ5IHRoZWlyIGBmaW5kYCBhcmdzXG4gICAgLy8gc28gd2UgY2FuIG1ha2Ugb25lIGZpbmQgcXVlcnkgcGVyIGNvbWJpbmF0aW9uIG9mIGNvbGxlY3Rpb24sIGRlcHRoLCBsb2NhbGUsIGFuZCBmYWxsYmFja0xvY2FsZS5cblxuICAgIC8vIFJlc3VsdGluZyBzaGFwZSB3aWxsIGJlIGFzIGZvbGxvd3M6XG5cbiAgICAvLyB7XG4gICAgLy8gICAvLyBrZXkgaXMgc3RyaW5naWZpZWQgc2V0IG9mIGZpbmQgYXJnc1xuICAgIC8vICAgJ1tudWxsLFwicGFnZXNcIiwyLDAsXCJlc1wiLFwiZW5cIixmYWxzZSxmYWxzZV0nOiBbXG4gICAgLy8gICAgIC8vIHZhbHVlIGlzIGFycmF5IG9mIElEcyB0byBmaW5kIHdpdGggdGhlc2UgYXJnc1xuICAgIC8vICAgICAncTM0dGwyMzQ2MjM0NjIzNDUyNCcsXG4gICAgLy8gICAgICc0MzU1MjM1NDAxOTQzMjQyODAnLFxuICAgIC8vICAgICAnMjM0NjI0NWozNWwzajUyMzQ1MzJsaScsXG4gICAgLy8gICBdLFxuICAgIC8vICAgLy8gZXRjXG4gICAgLy8gfTtcblxuICAgIGNvbnN0IGJhdGNoQnlGaW5kQXJncyA9IGtleXMucmVkdWNlKChiYXRjaGVzLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IFtcbiAgICAgICAgdHJhbnNhY3Rpb25JRCxcbiAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgaWQsXG4gICAgICAgIGRlcHRoLFxuICAgICAgICBjdXJyZW50RGVwdGgsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgZmFsbGJhY2tMb2NhbGUsXG4gICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgICBkcmFmdCxcbiAgICAgIF0gPSBKU09OLnBhcnNlKGtleSlcblxuICAgICAgY29uc3QgYmF0Y2hLZXlBcnJheSA9IFtcbiAgICAgICAgdHJhbnNhY3Rpb25JRCxcbiAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgZGVwdGgsXG4gICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBmYWxsYmFja0xvY2FsZSxcbiAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICAgIGRyYWZ0LFxuICAgICAgXVxuXG4gICAgICBjb25zdCBiYXRjaEtleSA9IEpTT04uc3RyaW5naWZ5KGJhdGNoS2V5QXJyYXkpXG5cbiAgICAgIGNvbnN0IGlkRmllbGQgPSBwYXlsb2FkLmNvbGxlY3Rpb25zPy5bY29sbGVjdGlvbl0uY29uZmlnLmZpZWxkcy5maW5kKFxuICAgICAgICAoZmllbGQpID0+IGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmIGZpZWxkLm5hbWUgPT09ICdpZCcsXG4gICAgICApXG5cbiAgICAgIGxldCBzYW5pdGl6ZWRJRDogbnVtYmVyIHwgc3RyaW5nID0gaWRcblxuICAgICAgaWYgKGlkRmllbGQ/LnR5cGUgPT09ICdudW1iZXInKSBzYW5pdGl6ZWRJRCA9IHBhcnNlRmxvYXQoaWQpXG5cbiAgICAgIGlmIChpc1ZhbGlkSUQoc2FuaXRpemVkSUQsIGdldElEVHlwZShpZEZpZWxkLCBwYXlsb2FkPy5kYj8uZGVmYXVsdElEVHlwZSkpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uYmF0Y2hlcyxcbiAgICAgICAgICBbYmF0Y2hLZXldOiBbLi4uKGJhdGNoZXNbYmF0Y2hLZXldIHx8IFtdKSwgc2FuaXRpemVkSURdLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYmF0Y2hlc1xuICAgIH0sIHt9KVxuXG4gICAgLy8gUnVuIGZpbmQgcmVxdWVzdHMgb25lIGFmdGVyIGFub3RoZXIsIHNvIGFzIHRvIG5vdCBoYW5nIHRyYW5zYWN0aW9uc1xuXG4gICAgYXdhaXQgT2JqZWN0LmVudHJpZXMoYmF0Y2hCeUZpbmRBcmdzKS5yZWR1Y2UoYXN5bmMgKHByaW9yRmluZCwgW2JhdGNoS2V5LCBpZHNdKSA9PiB7XG4gICAgICBhd2FpdCBwcmlvckZpbmRcblxuICAgICAgY29uc3QgW1xuICAgICAgICB0cmFuc2FjdGlvbklELFxuICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICBkZXB0aCxcbiAgICAgICAgY3VycmVudERlcHRoLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIGZhbGxiYWNrTG9jYWxlLFxuICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgZHJhZnQsXG4gICAgICBdID0gSlNPTi5wYXJzZShiYXRjaEtleSlcblxuICAgICAgcmVxLnRyYW5zYWN0aW9uSUQgPSB0cmFuc2FjdGlvbklEXG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBheWxvYWQuZmluZCh7XG4gICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgZGVwdGgsXG4gICAgICAgIGRpc2FibGVFcnJvcnM6IHRydWUsXG4gICAgICAgIGRyYWZ0LFxuICAgICAgICBmYWxsYmFja0xvY2FsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBvdmVycmlkZUFjY2VzczogQm9vbGVhbihvdmVycmlkZUFjY2VzcyksXG4gICAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgICAgICByZXEsXG4gICAgICAgIHNob3dIaWRkZW5GaWVsZHM6IEJvb2xlYW4oc2hvd0hpZGRlbkZpZWxkcyksXG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgIGluOiBpZHMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG5cbiAgICAgIC8vIEZvciBlYWNoIHJldHVybmVkIGRvYywgZmluZCBpbmRleCBpbiBvcmlnaW5hbCBrZXlzXG4gICAgICAvLyBJbmplY3QgZG9jIHdpdGhpbiBkb2NzIGFycmF5IGlmIGluZGV4IGV4aXN0c1xuXG4gICAgICByZXN1bHQuZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgY29uc3QgZG9jS2V5ID0gSlNPTi5zdHJpbmdpZnkoW1xuICAgICAgICAgIHJlcS50cmFuc2FjdGlvbklELFxuICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgZG9jLmlkLFxuICAgICAgICAgIGRlcHRoLFxuICAgICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgZmFsbGJhY2tMb2NhbGUsXG4gICAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgICBkcmFmdCxcbiAgICAgICAgXSlcbiAgICAgICAgY29uc3QgZG9jc0luZGV4ID0ga2V5cy5maW5kSW5kZXgoKGtleSkgPT4ga2V5ID09PSBkb2NLZXkpXG5cbiAgICAgICAgaWYgKGRvY3NJbmRleCA+IC0xKSB7XG4gICAgICAgICAgZG9jc1tkb2NzSW5kZXhdID0gZG9jXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpXG5cbiAgICAvLyBSZXR1cm4gZG9jcyBhcnJheSxcbiAgICAvLyB3aGljaCBoYXMgbm93IGJlZW4gaW5qZWN0ZWQgd2l0aCBhbGwgZmV0Y2hlZCBkb2NzXG4gICAgLy8gYW5kIHNob3VsZCBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBpbmNvbWluZyBrZXlzIGFyZ1xuICAgIHJldHVybiBkb2NzXG4gIH1cblxuZXhwb3J0IGNvbnN0IGdldERhdGFMb2FkZXIgPSAocmVxOiBQYXlsb2FkUmVxdWVzdCkgPT4gbmV3IERhdGFMb2FkZXIoYmF0Y2hBbmRMb2FkRG9jcyhyZXEpKVxuIl0sIm5hbWVzIjpbImdldERhdGFMb2FkZXIiLCJiYXRjaEFuZExvYWREb2NzIiwicmVxIiwia2V5cyIsInBheWxvYWQiLCJkb2NzIiwibWFwIiwiYmF0Y2hCeUZpbmRBcmdzIiwicmVkdWNlIiwiYmF0Y2hlcyIsImtleSIsInRyYW5zYWN0aW9uSUQiLCJjb2xsZWN0aW9uIiwiaWQiLCJkZXB0aCIsImN1cnJlbnREZXB0aCIsImxvY2FsZSIsImZhbGxiYWNrTG9jYWxlIiwib3ZlcnJpZGVBY2Nlc3MiLCJzaG93SGlkZGVuRmllbGRzIiwiZHJhZnQiLCJKU09OIiwicGFyc2UiLCJiYXRjaEtleUFycmF5IiwiYmF0Y2hLZXkiLCJzdHJpbmdpZnkiLCJpZEZpZWxkIiwiY29sbGVjdGlvbnMiLCJjb25maWciLCJmaWVsZHMiLCJmaW5kIiwiZmllbGQiLCJmaWVsZEFmZmVjdHNEYXRhIiwibmFtZSIsInNhbml0aXplZElEIiwidHlwZSIsInBhcnNlRmxvYXQiLCJpc1ZhbGlkSUQiLCJnZXRJRFR5cGUiLCJkYiIsImRlZmF1bHRJRFR5cGUiLCJPYmplY3QiLCJlbnRyaWVzIiwicHJpb3JGaW5kIiwiaWRzIiwicmVzdWx0IiwiZGlzYWJsZUVycm9ycyIsIkJvb2xlYW4iLCJwYWdpbmF0aW9uIiwid2hlcmUiLCJpbiIsImZvckVhY2giLCJkb2MiLCJkb2NLZXkiLCJkb2NzSW5kZXgiLCJmaW5kSW5kZXgiLCJQcm9taXNlIiwicmVzb2x2ZSIsIkRhdGFMb2FkZXIiXSwicmFu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