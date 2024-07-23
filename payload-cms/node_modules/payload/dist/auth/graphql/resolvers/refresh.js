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
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("../../../utilities/isolateObjectProperty"));
const _refresh = /*#__PURE__*/ _interop_require_default(require("../../operations/refresh"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function refreshResolver(collection) {
    async function resolver(_, __, context) {
        const options = {
            collection,
            depth: 0,
            req: (0, _isolateObjectProperty.default)(context.req, 'transactionID'),
            res: context.res
        };
        const result = await (0, _refresh.default)(options);
        return result;
    }
    return resolver;
}
const _default = refreshResolver;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL3JlZnJlc2gudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5cbmltcG9ydCBpc29sYXRlT2JqZWN0UHJvcGVydHkgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2lzb2xhdGVPYmplY3RQcm9wZXJ0eSdcbmltcG9ydCByZWZyZXNoIGZyb20gJy4uLy4uL29wZXJhdGlvbnMvcmVmcmVzaCdcblxuZnVuY3Rpb24gcmVmcmVzaFJlc29sdmVyKGNvbGxlY3Rpb246IENvbGxlY3Rpb24pIHtcbiAgYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZXIoXywgX18sIGNvbnRleHQpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgY29sbGVjdGlvbixcbiAgICAgIGRlcHRoOiAwLFxuICAgICAgcmVxOiBpc29sYXRlT2JqZWN0UHJvcGVydHk8UGF5bG9hZFJlcXVlc3Q+KGNvbnRleHQucmVxLCAndHJhbnNhY3Rpb25JRCcpLFxuICAgICAgcmVzOiBjb250ZXh0LnJlcyxcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWZyZXNoKG9wdGlvbnMpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICByZXR1cm4gcmVzb2x2ZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVmcmVzaFJlc29sdmVyXG4iXSwibmFtZXMiOlsicmVmcmVzaFJlc29sdmVyIiwiY29sbGVjdGlvbiIsInJlc29sdmVyIiwiXyIsIl9fIiwiY29udGV4dCIsIm9wdGlvbnMiLCJkZXB0aCIsInJlcSIsImlzb2xhdGVPYmplY3RQcm9wZXJ0eSIsInJlcyIsInJlc3VsdCIsInJlZnJlc2giXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXVCQTs7O2VBQUE7Ozs4RUFwQmtDO2dFQUNkOzs7Ozs7QUFFcEIsU0FBU0EsZ0JBQWdCQyxVQUFzQjtJQUM3QyxlQUFlQyxTQUFTQyxDQUFDLEVBQUVDLEVBQUUsRUFBRUMsT0FBTztRQUNwQyxNQUFNQyxVQUFVO1lBQ2RMO1lBQ0FNLE9BQU87WUFDUEMsS0FBS0MsSUFBQUEsOEJBQXFCLEVBQWlCSixRQUFRRyxHQUFHLEVBQUU7WUFDeERFLEtBQUtMLFFBQVFLLEdBQUc7UUFDbEI7UUFFQSxNQUFNQyxTQUFTLE1BQU1DLElBQUFBLGdCQUFPLEVBQUNOO1FBRTdCLE9BQU9LO0lBQ1Q7SUFFQSxPQUFPVDtBQUNUO01BRUEsV0FBZUYifQ==