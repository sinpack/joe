/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findVersionByIDResolver;
    }
});
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("../../../utilities/isolateObjectProperty"));
const _findVersionByID = /*#__PURE__*/ _interop_require_default(require("../../operations/findVersionByID"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function findVersionByIDResolver(globalConfig) {
    return async function resolver(_, args, context) {
        let { req } = context;
        const locale = req.locale;
        const fallbackLocale = req.fallbackLocale;
        req = (0, _isolateObjectProperty.default)(req, 'locale');
        req = (0, _isolateObjectProperty.default)(req, 'fallbackLocale');
        req.locale = args.locale || locale;
        req.fallbackLocale = args.fallbackLocale || fallbackLocale;
        context.req = req;
        const options = {
            id: args.id,
            depth: 0,
            globalConfig,
            req: (0, _isolateObjectProperty.default)(req, 'transactionID')
        };
        const result = await (0, _findVersionByID.default)(options);
        return result;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL2dyYXBocWwvcmVzb2x2ZXJzL2ZpbmRWZXJzaW9uQnlJRC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHR5cGUgeyBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBEb2N1bWVudCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCBpc29sYXRlT2JqZWN0UHJvcGVydHkgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2lzb2xhdGVPYmplY3RQcm9wZXJ0eSdcbmltcG9ydCBmaW5kVmVyc2lvbkJ5SUQgZnJvbSAnLi4vLi4vb3BlcmF0aW9ucy9maW5kVmVyc2lvbkJ5SUQnXG5cbmV4cG9ydCB0eXBlIFJlc29sdmVyID0gKFxuICBfOiB1bmtub3duLFxuICBhcmdzOiB7XG4gICAgZHJhZnQ/OiBib29sZWFuXG4gICAgZmFsbGJhY2tMb2NhbGU/OiBzdHJpbmdcbiAgICBpZDogbnVtYmVyIHwgc3RyaW5nXG4gICAgbG9jYWxlPzogc3RyaW5nXG4gIH0sXG4gIGNvbnRleHQ6IHtcbiAgICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gICAgcmVzOiBSZXNwb25zZVxuICB9LFxuKSA9PiBQcm9taXNlPERvY3VtZW50PlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kVmVyc2lvbkJ5SURSZXNvbHZlcihnbG9iYWxDb25maWc6IFNhbml0aXplZEdsb2JhbENvbmZpZyk6IFJlc29sdmVyIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVyKF8sIGFyZ3MsIGNvbnRleHQpIHtcbiAgICBsZXQgeyByZXEgfSA9IGNvbnRleHRcbiAgICBjb25zdCBsb2NhbGUgPSByZXEubG9jYWxlXG4gICAgY29uc3QgZmFsbGJhY2tMb2NhbGUgPSByZXEuZmFsbGJhY2tMb2NhbGVcbiAgICByZXEgPSBpc29sYXRlT2JqZWN0UHJvcGVydHkocmVxLCAnbG9jYWxlJylcbiAgICByZXEgPSBpc29sYXRlT2JqZWN0UHJvcGVydHkocmVxLCAnZmFsbGJhY2tMb2NhbGUnKVxuICAgIHJlcS5sb2NhbGUgPSBhcmdzLmxvY2FsZSB8fCBsb2NhbGVcbiAgICByZXEuZmFsbGJhY2tMb2NhbGUgPSBhcmdzLmZhbGxiYWNrTG9jYWxlIHx8IGZhbGxiYWNrTG9jYWxlXG5cbiAgICBjb250ZXh0LnJlcSA9IHJlcVxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGlkOiBhcmdzLmlkLFxuICAgICAgZGVwdGg6IDAsXG4gICAgICBnbG9iYWxDb25maWcsXG4gICAgICByZXE6IGlzb2xhdGVPYmplY3RQcm9wZXJ0eTxQYXlsb2FkUmVxdWVzdD4ocmVxLCAndHJhbnNhY3Rpb25JRCcpLFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZpbmRWZXJzaW9uQnlJRChvcHRpb25zKVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZpbmRWZXJzaW9uQnlJRFJlc29sdmVyIiwiZ2xvYmFsQ29uZmlnIiwicmVzb2x2ZXIiLCJfIiwiYXJncyIsImNvbnRleHQiLCJyZXEiLCJsb2NhbGUiLCJmYWxsYmFja0xvY2FsZSIsImlzb2xhdGVPYmplY3RQcm9wZXJ0eSIsIm9wdGlvbnMiLCJpZCIsImRlcHRoIiwicmVzdWx0IiwiZmluZFZlcnNpb25CeUlEIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7OytCQXdCcEM7OztlQUF3QkE7Ozs4RUFqQlU7d0VBQ047Ozs7OztBQWdCYixTQUFTQSx3QkFBd0JDLFlBQW1DO0lBQ2pGLE9BQU8sZUFBZUMsU0FBU0MsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLE9BQU87UUFDN0MsSUFBSSxFQUFFQyxHQUFHLEVBQUUsR0FBR0Q7UUFDZCxNQUFNRSxTQUFTRCxJQUFJQyxNQUFNO1FBQ3pCLE1BQU1DLGlCQUFpQkYsSUFBSUUsY0FBYztRQUN6Q0YsTUFBTUcsSUFBQUEsOEJBQXFCLEVBQUNILEtBQUs7UUFDakNBLE1BQU1HLElBQUFBLDhCQUFxQixFQUFDSCxLQUFLO1FBQ2pDQSxJQUFJQyxNQUFNLEdBQUdILEtBQUtHLE1BQU0sSUFBSUE7UUFDNUJELElBQUlFLGNBQWMsR0FBR0osS0FBS0ksY0FBYyxJQUFJQTtRQUU1Q0gsUUFBUUMsR0FBRyxHQUFHQTtRQUVkLE1BQU1JLFVBQVU7WUFDZEMsSUFBSVAsS0FBS08sRUFBRTtZQUNYQyxPQUFPO1lBQ1BYO1lBQ0FLLEtBQUtHLElBQUFBLDhCQUFxQixFQUFpQkgsS0FBSztRQUNsRDtRQUVBLE1BQU1PLFNBQVMsTUFBTUMsSUFBQUEsd0JBQWUsRUFBQ0o7UUFDckMsT0FBT0c7SUFDVDtBQUNGIn0=