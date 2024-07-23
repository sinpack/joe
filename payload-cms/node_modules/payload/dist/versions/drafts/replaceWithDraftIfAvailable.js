"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _auth = require("../../auth");
const _combineQueries = require("../../database/combineQueries");
const _types = require("../../types");
const _sanitizeInternalFields = /*#__PURE__*/ _interop_require_default(require("../../utilities/sanitizeInternalFields"));
const _appendVersionToQueryKey = require("./appendVersionToQueryKey");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const replaceWithDraftIfAvailable = async ({ accessResult, doc, entity, entityType, req })=>{
    const { locale } = req;
    const queryToBuild = {
        and: [
            {
                'version._status': {
                    equals: 'draft'
                }
            }
        ]
    };
    if (entityType === 'collection') {
        queryToBuild.and.push({
            parent: {
                equals: doc.id
            }
        });
    }
    if ((0, _types.docHasTimestamps)(doc)) {
        queryToBuild.and.push({
            updatedAt: {
                greater_than: doc.updatedAt
            }
        });
    }
    let versionAccessResult;
    if ((0, _auth.hasWhereAccessResult)(accessResult)) {
        versionAccessResult = (0, _appendVersionToQueryKey.appendVersionToQueryKey)(accessResult);
    }
    const findVersionsArgs = {
        collection: entity.slug,
        global: entity.slug,
        limit: 1,
        locale,
        req,
        sort: '-updatedAt',
        where: (0, _combineQueries.combineQueries)(queryToBuild, versionAccessResult)
    };
    let versionDocs;
    if (entityType === 'global') {
        versionDocs = (await req.payload.db.findGlobalVersions(findVersionsArgs)).docs;
    } else {
        versionDocs = (await req.payload.db.findVersions(findVersionsArgs)).docs;
    }
    let draft = versionDocs[0];
    if (!draft) {
        return doc;
    }
    draft = JSON.parse(JSON.stringify(draft));
    draft = (0, _sanitizeInternalFields.default)(draft);
    // Patch globalType onto version doc
    if (entityType === 'global' && 'globalType' in doc) {
        draft.version.globalType = doc.globalType;
    }
    // Disregard all other draft content at this point,
    // Only interested in the version itself.
    // Operations will handle firing hooks, etc.
    return {
        id: doc.id,
        ...draft.version,
        createdAt: draft.createdAt,
        updatedAt: draft.updatedAt
    };
};
const _default = replaceWithDraftIfAvailable;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJzaW9ucy9kcmFmdHMvcmVwbGFjZVdpdGhEcmFmdElmQXZhaWxhYmxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZywgVHlwZVdpdGhJRCB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgQWNjZXNzUmVzdWx0IH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBGaW5kR2xvYmFsVmVyc2lvbnNBcmdzLCBGaW5kVmVyc2lvbnNBcmdzIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4uLy4uL2dsb2JhbHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCwgV2hlcmUgfSBmcm9tICcuLi8uLi90eXBlcydcblxuaW1wb3J0IHsgaGFzV2hlcmVBY2Nlc3NSZXN1bHQgfSBmcm9tICcuLi8uLi9hdXRoJ1xuaW1wb3J0IHsgY29tYmluZVF1ZXJpZXMgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9jb21iaW5lUXVlcmllcydcbmltcG9ydCB7IGRvY0hhc1RpbWVzdGFtcHMgfSBmcm9tICcuLi8uLi90eXBlcydcbmltcG9ydCBzYW5pdGl6ZUludGVybmFsRmllbGRzIGZyb20gJy4uLy4uL3V0aWxpdGllcy9zYW5pdGl6ZUludGVybmFsRmllbGRzJ1xuaW1wb3J0IHsgYXBwZW5kVmVyc2lvblRvUXVlcnlLZXkgfSBmcm9tICcuL2FwcGVuZFZlcnNpb25Ub1F1ZXJ5S2V5J1xuXG50eXBlIEFyZ3VtZW50czxUPiA9IHtcbiAgYWNjZXNzUmVzdWx0OiBBY2Nlc3NSZXN1bHRcbiAgZG9jOiBUXG4gIGVudGl0eTogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB8IFNhbml0aXplZEdsb2JhbENvbmZpZ1xuICBlbnRpdHlUeXBlOiAnY29sbGVjdGlvbicgfCAnZ2xvYmFsJ1xuICBvdmVycmlkZUFjY2VzczogYm9vbGVhblxuICByZXE6IFBheWxvYWRSZXF1ZXN0XG59XG5cbmNvbnN0IHJlcGxhY2VXaXRoRHJhZnRJZkF2YWlsYWJsZSA9IGFzeW5jIDxUIGV4dGVuZHMgVHlwZVdpdGhJRD4oe1xuICBhY2Nlc3NSZXN1bHQsXG4gIGRvYyxcbiAgZW50aXR5LFxuICBlbnRpdHlUeXBlLFxuICByZXEsXG59OiBBcmd1bWVudHM8VD4pOiBQcm9taXNlPFQ+ID0+IHtcbiAgY29uc3QgeyBsb2NhbGUgfSA9IHJlcVxuXG4gIGNvbnN0IHF1ZXJ5VG9CdWlsZDogV2hlcmUgPSB7XG4gICAgYW5kOiBbXG4gICAgICB7XG4gICAgICAgICd2ZXJzaW9uLl9zdGF0dXMnOiB7XG4gICAgICAgICAgZXF1YWxzOiAnZHJhZnQnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9XG5cbiAgaWYgKGVudGl0eVR5cGUgPT09ICdjb2xsZWN0aW9uJykge1xuICAgIHF1ZXJ5VG9CdWlsZC5hbmQucHVzaCh7XG4gICAgICBwYXJlbnQ6IHtcbiAgICAgICAgZXF1YWxzOiBkb2MuaWQsXG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICBpZiAoZG9jSGFzVGltZXN0YW1wcyhkb2MpKSB7XG4gICAgcXVlcnlUb0J1aWxkLmFuZC5wdXNoKHtcbiAgICAgIHVwZGF0ZWRBdDoge1xuICAgICAgICBncmVhdGVyX3RoYW46IGRvYy51cGRhdGVkQXQsXG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICBsZXQgdmVyc2lvbkFjY2Vzc1Jlc3VsdFxuXG4gIGlmIChoYXNXaGVyZUFjY2Vzc1Jlc3VsdChhY2Nlc3NSZXN1bHQpKSB7XG4gICAgdmVyc2lvbkFjY2Vzc1Jlc3VsdCA9IGFwcGVuZFZlcnNpb25Ub1F1ZXJ5S2V5KGFjY2Vzc1Jlc3VsdClcbiAgfVxuXG4gIGNvbnN0IGZpbmRWZXJzaW9uc0FyZ3M6IEZpbmRWZXJzaW9uc0FyZ3MgJiBGaW5kR2xvYmFsVmVyc2lvbnNBcmdzID0ge1xuICAgIGNvbGxlY3Rpb246IGVudGl0eS5zbHVnLFxuICAgIGdsb2JhbDogZW50aXR5LnNsdWcsXG4gICAgbGltaXQ6IDEsXG4gICAgbG9jYWxlLFxuICAgIHJlcSxcbiAgICBzb3J0OiAnLXVwZGF0ZWRBdCcsXG4gICAgd2hlcmU6IGNvbWJpbmVRdWVyaWVzKHF1ZXJ5VG9CdWlsZCwgdmVyc2lvbkFjY2Vzc1Jlc3VsdCksXG4gIH1cblxuICBsZXQgdmVyc2lvbkRvY3NcbiAgaWYgKGVudGl0eVR5cGUgPT09ICdnbG9iYWwnKSB7XG4gICAgdmVyc2lvbkRvY3MgPSAoYXdhaXQgcmVxLnBheWxvYWQuZGIuZmluZEdsb2JhbFZlcnNpb25zPFQ+KGZpbmRWZXJzaW9uc0FyZ3MpKS5kb2NzXG4gIH0gZWxzZSB7XG4gICAgdmVyc2lvbkRvY3MgPSAoYXdhaXQgcmVxLnBheWxvYWQuZGIuZmluZFZlcnNpb25zPFQ+KGZpbmRWZXJzaW9uc0FyZ3MpKS5kb2NzXG4gIH1cblxuICBsZXQgZHJhZnQgPSB2ZXJzaW9uRG9jc1swXVxuXG4gIGlmICghZHJhZnQpIHtcbiAgICByZXR1cm4gZG9jXG4gIH1cblxuICBkcmFmdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZHJhZnQpKVxuICBkcmFmdCA9IHNhbml0aXplSW50ZXJuYWxGaWVsZHMoZHJhZnQpXG5cbiAgLy8gUGF0Y2ggZ2xvYmFsVHlwZSBvbnRvIHZlcnNpb24gZG9jXG4gIGlmIChlbnRpdHlUeXBlID09PSAnZ2xvYmFsJyAmJiAnZ2xvYmFsVHlwZScgaW4gZG9jKSB7XG4gICAgZHJhZnQudmVyc2lvbi5nbG9iYWxUeXBlID0gZG9jLmdsb2JhbFR5cGVcbiAgfVxuXG4gIC8vIERpc3JlZ2FyZCBhbGwgb3RoZXIgZHJhZnQgY29udGVudCBhdCB0aGlzIHBvaW50LFxuICAvLyBPbmx5IGludGVyZXN0ZWQgaW4gdGhlIHZlcnNpb24gaXRzZWxmLlxuICAvLyBPcGVyYXRpb25zIHdpbGwgaGFuZGxlIGZpcmluZyBob29rcywgZXRjLlxuICByZXR1cm4ge1xuICAgIGlkOiBkb2MuaWQsXG4gICAgLi4uZHJhZnQudmVyc2lvbixcbiAgICBjcmVhdGVkQXQ6IGRyYWZ0LmNyZWF0ZWRBdCxcbiAgICB1cGRhdGVkQXQ6IGRyYWZ0LnVwZGF0ZWRBdCxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXBsYWNlV2l0aERyYWZ0SWZBdmFpbGFibGVcbiJdLCJuYW1lcyI6WyJyZXBsYWNlV2l0aERyYWZ0SWZBdmFpbGFibGUiLCJhY2Nlc3NSZXN1bHQiLCJkb2MiLCJlbnRpdHkiLCJlbnRpdHlUeXBlIiwicmVxIiwibG9jYWxlIiwicXVlcnlUb0J1aWxkIiwiYW5kIiwiZXF1YWxzIiwicHVzaCIsInBhcmVudCIsImlkIiwiZG9jSGFzVGltZXN0YW1wcyIsInVwZGF0ZWRBdCIsImdyZWF0ZXJfdGhhbiIsInZlcnNpb25BY2Nlc3NSZXN1bHQiLCJoYXNXaGVyZUFjY2Vzc1Jlc3VsdCIsImFwcGVuZFZlcnNpb25Ub1F1ZXJ5S2V5IiwiZmluZFZlcnNpb25zQXJncyIsImNvbGxlY3Rpb24iLCJzbHVnIiwiZ2xvYmFsIiwibGltaXQiLCJzb3J0Iiwid2hlcmUiLCJjb21iaW5lUXVlcmllcyIsInZlcnNpb25Eb2NzIiwicGF5bG9hZCIsImRiIiwiZmluZEdsb2JhbFZlcnNpb25zIiwiZG9jcyIsImZpbmRWZXJzaW9ucyIsImRyYWZ0IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic2FuaXRpemVJbnRlcm5hbEZpZWxkcyIsInZlcnNpb24iLCJnbG9iYWxUeXBlIiwiY3JlYXRlZEF0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkF3R0E7OztlQUFBOzs7c0JBbEdxQztnQ0FDTjt1QkFDRTsrRUFDRTt5Q0FDSzs7Ozs7O0FBV3hDLE1BQU1BLDhCQUE4QixPQUE2QixFQUMvREMsWUFBWSxFQUNaQyxHQUFHLEVBQ0hDLE1BQU0sRUFDTkMsVUFBVSxFQUNWQyxHQUFHLEVBQ1U7SUFDYixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHRDtJQUVuQixNQUFNRSxlQUFzQjtRQUMxQkMsS0FBSztZQUNIO2dCQUNFLG1CQUFtQjtvQkFDakJDLFFBQVE7Z0JBQ1Y7WUFDRjtTQUNEO0lBQ0g7SUFFQSxJQUFJTCxlQUFlLGNBQWM7UUFDL0JHLGFBQWFDLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDO1lBQ3BCQyxRQUFRO2dCQUNORixRQUFRUCxJQUFJVSxFQUFFO1lBQ2hCO1FBQ0Y7SUFDRjtJQUVBLElBQUlDLElBQUFBLHVCQUFnQixFQUFDWCxNQUFNO1FBQ3pCSyxhQUFhQyxHQUFHLENBQUNFLElBQUksQ0FBQztZQUNwQkksV0FBVztnQkFDVEMsY0FBY2IsSUFBSVksU0FBUztZQUM3QjtRQUNGO0lBQ0Y7SUFFQSxJQUFJRTtJQUVKLElBQUlDLElBQUFBLDBCQUFvQixFQUFDaEIsZUFBZTtRQUN0Q2Usc0JBQXNCRSxJQUFBQSxnREFBdUIsRUFBQ2pCO0lBQ2hEO0lBRUEsTUFBTWtCLG1CQUE4RDtRQUNsRUMsWUFBWWpCLE9BQU9rQixJQUFJO1FBQ3ZCQyxRQUFRbkIsT0FBT2tCLElBQUk7UUFDbkJFLE9BQU87UUFDUGpCO1FBQ0FEO1FBQ0FtQixNQUFNO1FBQ05DLE9BQU9DLElBQUFBLDhCQUFjLEVBQUNuQixjQUFjUztJQUN0QztJQUVBLElBQUlXO0lBQ0osSUFBSXZCLGVBQWUsVUFBVTtRQUMzQnVCLGNBQWMsQUFBQyxDQUFBLE1BQU10QixJQUFJdUIsT0FBTyxDQUFDQyxFQUFFLENBQUNDLGtCQUFrQixDQUFJWCxpQkFBZ0IsRUFBR1ksSUFBSTtJQUNuRixPQUFPO1FBQ0xKLGNBQWMsQUFBQyxDQUFBLE1BQU10QixJQUFJdUIsT0FBTyxDQUFDQyxFQUFFLENBQUNHLFlBQVksQ0FBSWIsaUJBQWdCLEVBQUdZLElBQUk7SUFDN0U7SUFFQSxJQUFJRSxRQUFRTixXQUFXLENBQUMsRUFBRTtJQUUxQixJQUFJLENBQUNNLE9BQU87UUFDVixPQUFPL0I7SUFDVDtJQUVBK0IsUUFBUUMsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxTQUFTLENBQUNIO0lBQ2xDQSxRQUFRSSxJQUFBQSwrQkFBc0IsRUFBQ0o7SUFFL0Isb0NBQW9DO0lBQ3BDLElBQUk3QixlQUFlLFlBQVksZ0JBQWdCRixLQUFLO1FBQ2xEK0IsTUFBTUssT0FBTyxDQUFDQyxVQUFVLEdBQUdyQyxJQUFJcUMsVUFBVTtJQUMzQztJQUVBLG1EQUFtRDtJQUNuRCx5Q0FBeUM7SUFDekMsNENBQTRDO0lBQzVDLE9BQU87UUFDTDNCLElBQUlWLElBQUlVLEVBQUU7UUFDVixHQUFHcUIsTUFBTUssT0FBTztRQUNoQkUsV0FBV1AsTUFBTU8sU0FBUztRQUMxQjFCLFdBQVdtQixNQUFNbkIsU0FBUztJQUM1QjtBQUNGO01BRUEsV0FBZWQifQ==