"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findOneHandler;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _isNumber = require("../../utilities/isNumber");
const _findOne = /*#__PURE__*/ _interop_require_default(require("../operations/findOne"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function findOneHandler(globalConfig) {
    return async function handler(req, res, next) {
        try {
            const { slug } = globalConfig;
            const result = await (0, _findOne.default)({
                depth: (0, _isNumber.isNumber)(req.query?.depth) ? Number(req.query.depth) : undefined,
                draft: req.query.draft === 'true',
                globalConfig,
                req,
                slug
            });
            return res.status(_httpstatus.default.OK).json(result);
        } catch (error) {
            return next(error);
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nbG9iYWxzL3JlcXVlc3RIYW5kbGVycy9maW5kT25lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEZ1bmN0aW9uLCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJ1xuXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcydcbmltcG9ydCB0eXBlIHsgRG9jdW1lbnQgfSBmcm9tICcuLi8uLi90eXBlcydcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pc051bWJlcidcbmltcG9ydCBmaW5kT25lIGZyb20gJy4uL29wZXJhdGlvbnMvZmluZE9uZSdcblxuZXhwb3J0IHR5cGUgRmluZE9uZUdsb2JhbFJlc3VsdCA9IFByb21pc2U8UmVzcG9uc2U8RG9jdW1lbnQ+IHwgdm9pZD5cbmV4cG9ydCB0eXBlIEZpbmRPbmVHbG9iYWxSZXNwb25zZSA9IChcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdCxcbiAgcmVzOiBSZXNwb25zZSxcbiAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuKSA9PiBGaW5kT25lR2xvYmFsUmVzdWx0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRPbmVIYW5kbGVyKGdsb2JhbENvbmZpZzogU2FuaXRpemVkR2xvYmFsQ29uZmlnKTogRmluZE9uZUdsb2JhbFJlc3BvbnNlIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gICAgcmVxOiBQYXlsb2FkUmVxdWVzdCxcbiAgICByZXM6IFJlc3BvbnNlLFxuICAgIG5leHQ6IE5leHRGdW5jdGlvbixcbiAgKTogRmluZE9uZUdsb2JhbFJlc3VsdCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgc2x1ZyB9ID0gZ2xvYmFsQ29uZmlnXG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZpbmRPbmUoe1xuICAgICAgICBkZXB0aDogaXNOdW1iZXIocmVxLnF1ZXJ5Py5kZXB0aCkgPyBOdW1iZXIocmVxLnF1ZXJ5LmRlcHRoKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgZHJhZnQ6IHJlcS5xdWVyeS5kcmFmdCA9PT0gJ3RydWUnLFxuICAgICAgICBnbG9iYWxDb25maWcsXG4gICAgICAgIHJlcSxcbiAgICAgICAgc2x1ZyxcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuT0spLmpzb24ocmVzdWx0KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvcilcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJmaW5kT25lSGFuZGxlciIsImdsb2JhbENvbmZpZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0Iiwic2x1ZyIsInJlc3VsdCIsImZpbmRPbmUiLCJkZXB0aCIsImlzTnVtYmVyIiwicXVlcnkiLCJOdW1iZXIiLCJ1bmRlZmluZWQiLCJkcmFmdCIsInN0YXR1cyIsImh0dHBTdGF0dXMiLCJPSyIsImpzb24iLCJlcnJvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWtCQTs7O2VBQXdCQTs7O21FQWhCRDswQkFNRTtnRUFDTDs7Ozs7O0FBU0wsU0FBU0EsZUFBZUMsWUFBbUM7SUFDeEUsT0FBTyxlQUFlQyxRQUNwQkMsR0FBbUIsRUFDbkJDLEdBQWEsRUFDYkMsSUFBa0I7UUFFbEIsSUFBSTtZQUNGLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdMO1lBRWpCLE1BQU1NLFNBQVMsTUFBTUMsSUFBQUEsZ0JBQU8sRUFBQztnQkFDM0JDLE9BQU9DLElBQUFBLGtCQUFRLEVBQUNQLElBQUlRLEtBQUssRUFBRUYsU0FBU0csT0FBT1QsSUFBSVEsS0FBSyxDQUFDRixLQUFLLElBQUlJO2dCQUM5REMsT0FBT1gsSUFBSVEsS0FBSyxDQUFDRyxLQUFLLEtBQUs7Z0JBQzNCYjtnQkFDQUU7Z0JBQ0FHO1lBQ0Y7WUFFQSxPQUFPRixJQUFJVyxNQUFNLENBQUNDLG1CQUFVLENBQUNDLEVBQUUsRUFBRUMsSUFBSSxDQUFDWDtRQUN4QyxFQUFFLE9BQU9ZLE9BQU87WUFDZCxPQUFPZCxLQUFLYztRQUNkO0lBQ0Y7QUFDRiJ9