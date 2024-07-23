"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return restoreVersionHandler;
    }
});
const _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
const _formatSuccess = /*#__PURE__*/ _interop_require_default(require("../../express/responses/formatSuccess"));
const _restoreVersion = /*#__PURE__*/ _interop_require_default(require("../operations/restoreVersion"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function restoreVersionHandler(globalConfig) {
    return async function handler(req, res, next) {
        const options = {
            id: req.params.id,
            depth: Number(req.query.depth),
            globalConfig,
            req
        };
        try {
            const doc = await (0, _restoreVersion.default)(options);
            return res.status(_httpstatus.default.OK).json({
                ...(0, _formatSuccess.default)(req.t('version:restoredSuccessfully'), 'message'),
                doc
            });
        } catch (error) {
            return next(error);
        }
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nbG9iYWxzL3JlcXVlc3RIYW5kbGVycy9yZXN0b3JlVmVyc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRGdW5jdGlvbiwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cydcblxuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IERvY3VtZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IGZvcm1hdFN1Y2Nlc3NSZXNwb25zZSBmcm9tICcuLi8uLi9leHByZXNzL3Jlc3BvbnNlcy9mb3JtYXRTdWNjZXNzJ1xuaW1wb3J0IHJlc3RvcmVWZXJzaW9uIGZyb20gJy4uL29wZXJhdGlvbnMvcmVzdG9yZVZlcnNpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc3RvcmVWZXJzaW9uSGFuZGxlcihnbG9iYWxDb25maWc6IFNhbml0aXplZEdsb2JhbENvbmZpZykge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICAgIHJlczogUmVzcG9uc2UsXG4gICAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuICApOiBQcm9taXNlPFJlc3BvbnNlPERvY3VtZW50PiB8IHZvaWQ+IHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgaWQ6IHJlcS5wYXJhbXMuaWQsXG4gICAgICBkZXB0aDogTnVtYmVyKHJlcS5xdWVyeS5kZXB0aCksXG4gICAgICBnbG9iYWxDb25maWcsXG4gICAgICByZXEsXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRvYyA9IGF3YWl0IHJlc3RvcmVWZXJzaW9uKG9wdGlvbnMpXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKHtcbiAgICAgICAgLi4uZm9ybWF0U3VjY2Vzc1Jlc3BvbnNlKHJlcS50KCd2ZXJzaW9uOnJlc3RvcmVkU3VjY2Vzc2Z1bGx5JyksICdtZXNzYWdlJyksXG4gICAgICAgIGRvYyxcbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycm9yKVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbInJlc3RvcmVWZXJzaW9uSGFuZGxlciIsImdsb2JhbENvbmZpZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0Iiwib3B0aW9ucyIsImlkIiwicGFyYW1zIiwiZGVwdGgiLCJOdW1iZXIiLCJxdWVyeSIsImRvYyIsInJlc3RvcmVWZXJzaW9uIiwic3RhdHVzIiwiaHR0cFN0YXR1cyIsIk9LIiwianNvbiIsImZvcm1hdFN1Y2Nlc3NSZXNwb25zZSIsInQiLCJlcnJvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBV0E7OztlQUF3QkE7OzttRUFURDtzRUFNVzt1RUFDUDs7Ozs7O0FBRVosU0FBU0Esc0JBQXNCQyxZQUFtQztJQUMvRSxPQUFPLGVBQWVDLFFBQ3BCQyxHQUFtQixFQUNuQkMsR0FBYSxFQUNiQyxJQUFrQjtRQUVsQixNQUFNQyxVQUFVO1lBQ2RDLElBQUlKLElBQUlLLE1BQU0sQ0FBQ0QsRUFBRTtZQUNqQkUsT0FBT0MsT0FBT1AsSUFBSVEsS0FBSyxDQUFDRixLQUFLO1lBQzdCUjtZQUNBRTtRQUNGO1FBRUEsSUFBSTtZQUNGLE1BQU1TLE1BQU0sTUFBTUMsSUFBQUEsdUJBQWMsRUFBQ1A7WUFDakMsT0FBT0YsSUFBSVUsTUFBTSxDQUFDQyxtQkFBVSxDQUFDQyxFQUFFLEVBQUVDLElBQUksQ0FBQztnQkFDcEMsR0FBR0MsSUFBQUEsc0JBQXFCLEVBQUNmLElBQUlnQixDQUFDLENBQUMsaUNBQWlDLFVBQVU7Z0JBQzFFUDtZQUNGO1FBQ0YsRUFBRSxPQUFPUSxPQUFPO1lBQ2QsT0FBT2YsS0FBS2U7UUFDZDtJQUNGO0FBQ0YifQ==