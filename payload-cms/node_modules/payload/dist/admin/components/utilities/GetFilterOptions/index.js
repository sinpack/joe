"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GetFilterOptions", {
    enumerable: true,
    get: function() {
        return GetFilterOptions;
    }
});
const _deepequal = /*#__PURE__*/ _interop_require_default(require("deep-equal"));
const _react = require("react");
const _context = require("../../forms/Form/context");
const _getSiblingData = /*#__PURE__*/ _interop_require_default(require("../../forms/Form/getSiblingData"));
const _reduceFieldsToValues = /*#__PURE__*/ _interop_require_default(require("../../forms/Form/reduceFieldsToValues"));
const _getFilterOptionsQuery = require("../../forms/field-types/getFilterOptionsQuery");
const _Auth = require("../Auth");
const _DocumentInfo = require("../DocumentInfo");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const GetFilterOptions = ({ filterOptions, filterOptionsResult, path, relationTo, setFilterOptionsResult })=>{
    const [fields] = (0, _context.useAllFormFields)();
    const { id } = (0, _DocumentInfo.useDocumentInfo)();
    const { user } = (0, _Auth.useAuth)();
    (0, _react.useEffect)(()=>{
        const data = (0, _reduceFieldsToValues.default)(fields, true);
        const siblingData = (0, _getSiblingData.default)(fields, path);
        const getFilterOptions = async ()=>{
            const newFilterOptionsResult = await (0, _getFilterOptionsQuery.getFilterOptionsQuery)(filterOptions, {
                id,
                data,
                relationTo,
                siblingData,
                user
            });
            if (!(0, _deepequal.default)(newFilterOptionsResult, filterOptionsResult)) {
                setFilterOptionsResult(newFilterOptionsResult);
            }
        };
        getFilterOptions();
    }, [
        fields,
        filterOptions,
        id,
        relationTo,
        user,
        path,
        filterOptionsResult,
        setFilterOptionsResult
    ]);
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9HZXRGaWx0ZXJPcHRpb25zL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXF1YWwgZnJvbSAnZGVlcC1lcXVhbCdcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IEZpbHRlck9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBGaWx0ZXJPcHRpb25zUmVzdWx0IH0gZnJvbSAnLi4vLi4vZm9ybXMvZmllbGQtdHlwZXMvUmVsYXRpb25zaGlwL3R5cGVzJ1xuXG5pbXBvcnQgeyB1c2VBbGxGb3JtRmllbGRzIH0gZnJvbSAnLi4vLi4vZm9ybXMvRm9ybS9jb250ZXh0J1xuaW1wb3J0IGdldFNpYmxpbmdEYXRhIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0vZ2V0U2libGluZ0RhdGEnXG5pbXBvcnQgcmVkdWNlRmllbGRzVG9WYWx1ZXMgZnJvbSAnLi4vLi4vZm9ybXMvRm9ybS9yZWR1Y2VGaWVsZHNUb1ZhbHVlcydcbmltcG9ydCB7IGdldEZpbHRlck9wdGlvbnNRdWVyeSB9IGZyb20gJy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL2dldEZpbHRlck9wdGlvbnNRdWVyeSdcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi9BdXRoJ1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRJbmZvIH0gZnJvbSAnLi4vRG9jdW1lbnRJbmZvJ1xuXG50eXBlIEFyZ3MgPSB7XG4gIGZpbHRlck9wdGlvbnM6IEZpbHRlck9wdGlvbnNcbiAgZmlsdGVyT3B0aW9uc1Jlc3VsdDogRmlsdGVyT3B0aW9uc1Jlc3VsdFxuICBwYXRoOiBzdHJpbmdcbiAgcmVsYXRpb25Ubzogc3RyaW5nIHwgc3RyaW5nW11cbiAgc2V0RmlsdGVyT3B0aW9uc1Jlc3VsdDogKG9wdGlvbkZpbHRlcnM6IEZpbHRlck9wdGlvbnNSZXN1bHQpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IEdldEZpbHRlck9wdGlvbnMgPSAoe1xuICBmaWx0ZXJPcHRpb25zLFxuICBmaWx0ZXJPcHRpb25zUmVzdWx0LFxuICBwYXRoLFxuICByZWxhdGlvblRvLFxuICBzZXRGaWx0ZXJPcHRpb25zUmVzdWx0LFxufTogQXJncyk6IG51bGwgPT4ge1xuICBjb25zdCBbZmllbGRzXSA9IHVzZUFsbEZvcm1GaWVsZHMoKVxuICBjb25zdCB7IGlkIH0gPSB1c2VEb2N1bWVudEluZm8oKVxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHJlZHVjZUZpZWxkc1RvVmFsdWVzKGZpZWxkcywgdHJ1ZSlcbiAgICBjb25zdCBzaWJsaW5nRGF0YSA9IGdldFNpYmxpbmdEYXRhKGZpZWxkcywgcGF0aClcblxuICAgIGNvbnN0IGdldEZpbHRlck9wdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdGaWx0ZXJPcHRpb25zUmVzdWx0ID0gYXdhaXQgZ2V0RmlsdGVyT3B0aW9uc1F1ZXJ5KGZpbHRlck9wdGlvbnMsIHtcbiAgICAgICAgaWQsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHJlbGF0aW9uVG8sXG4gICAgICAgIHNpYmxpbmdEYXRhLFxuICAgICAgICB1c2VyLFxuICAgICAgfSlcblxuICAgICAgaWYgKCFlcXVhbChuZXdGaWx0ZXJPcHRpb25zUmVzdWx0LCBmaWx0ZXJPcHRpb25zUmVzdWx0KSkge1xuICAgICAgICBzZXRGaWx0ZXJPcHRpb25zUmVzdWx0KG5ld0ZpbHRlck9wdGlvbnNSZXN1bHQpXG4gICAgICB9XG4gICAgfVxuICAgIGdldEZpbHRlck9wdGlvbnMoKVxuICB9LCBbXG4gICAgZmllbGRzLFxuICAgIGZpbHRlck9wdGlvbnMsXG4gICAgaWQsXG4gICAgcmVsYXRpb25UbyxcbiAgICB1c2VyLFxuICAgIHBhdGgsXG4gICAgZmlsdGVyT3B0aW9uc1Jlc3VsdCxcbiAgICBzZXRGaWx0ZXJPcHRpb25zUmVzdWx0LFxuICBdKVxuXG4gIHJldHVybiBudWxsXG59XG4iXSwibmFtZXMiOlsiR2V0RmlsdGVyT3B0aW9ucyIsImZpbHRlck9wdGlvbnMiLCJmaWx0ZXJPcHRpb25zUmVzdWx0IiwicGF0aCIsInJlbGF0aW9uVG8iLCJzZXRGaWx0ZXJPcHRpb25zUmVzdWx0IiwiZmllbGRzIiwidXNlQWxsRm9ybUZpZWxkcyIsImlkIiwidXNlRG9jdW1lbnRJbmZvIiwidXNlciIsInVzZUF1dGgiLCJ1c2VFZmZlY3QiLCJkYXRhIiwicmVkdWNlRmllbGRzVG9WYWx1ZXMiLCJzaWJsaW5nRGF0YSIsImdldFNpYmxpbmdEYXRhIiwiZ2V0RmlsdGVyT3B0aW9ucyIsIm5ld0ZpbHRlck9wdGlvbnNSZXN1bHQiLCJnZXRGaWx0ZXJPcHRpb25zUXVlcnkiLCJlcXVhbCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBcUJhQTs7O2VBQUFBOzs7a0VBckJLO3VCQUNRO3lCQUtPO3VFQUNOOzZFQUNNO3VDQUNLO3NCQUNkOzhCQUNROzs7Ozs7QUFVekIsTUFBTUEsbUJBQW1CLENBQUMsRUFDL0JDLGFBQWEsRUFDYkMsbUJBQW1CLEVBQ25CQyxJQUFJLEVBQ0pDLFVBQVUsRUFDVkMsc0JBQXNCLEVBQ2pCO0lBQ0wsTUFBTSxDQUFDQyxPQUFPLEdBQUdDLElBQUFBLHlCQUFnQjtJQUNqQyxNQUFNLEVBQUVDLEVBQUUsRUFBRSxHQUFHQyxJQUFBQSw2QkFBZTtJQUM5QixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHQyxJQUFBQSxhQUFPO0lBRXhCQyxJQUFBQSxnQkFBUyxFQUFDO1FBQ1IsTUFBTUMsT0FBT0MsSUFBQUEsNkJBQW9CLEVBQUNSLFFBQVE7UUFDMUMsTUFBTVMsY0FBY0MsSUFBQUEsdUJBQWMsRUFBQ1YsUUFBUUg7UUFFM0MsTUFBTWMsbUJBQW1CO1lBQ3ZCLE1BQU1DLHlCQUF5QixNQUFNQyxJQUFBQSw0Q0FBcUIsRUFBQ2xCLGVBQWU7Z0JBQ3hFTztnQkFDQUs7Z0JBQ0FUO2dCQUNBVztnQkFDQUw7WUFDRjtZQUVBLElBQUksQ0FBQ1UsSUFBQUEsa0JBQUssRUFBQ0Ysd0JBQXdCaEIsc0JBQXNCO2dCQUN2REcsdUJBQXVCYTtZQUN6QjtRQUNGO1FBQ0FEO0lBQ0YsR0FBRztRQUNEWDtRQUNBTDtRQUNBTztRQUNBSjtRQUNBTTtRQUNBUDtRQUNBRDtRQUNBRztLQUNEO0lBRUQsT0FBTztBQUNUIn0=