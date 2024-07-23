"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "WatchCondition", {
    enumerable: true,
    get: function() {
        return WatchCondition;
    }
});
const _react = require("react");
const _Auth = require("../../utilities/Auth");
const _DocumentInfo = require("../../utilities/DocumentInfo");
const _context = require("../Form/context");
const _getSiblingData = /*#__PURE__*/ _interop_require_default(require("../Form/getSiblingData"));
const _reduceFieldsToValues = /*#__PURE__*/ _interop_require_default(require("../Form/reduceFieldsToValues"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const WatchCondition = ({ name, condition, path: pathFromProps, setShowField })=>{
    const path = typeof pathFromProps === 'string' ? pathFromProps : name;
    const { user } = (0, _Auth.useAuth)();
    const [fields, dispatchFields] = (0, _context.useAllFormFields)();
    const { id } = (0, _DocumentInfo.useDocumentInfo)();
    const data = (0, _reduceFieldsToValues.default)(fields, true);
    const siblingData = (0, _getSiblingData.default)(fields, path);
    // Manually provide ID to `data`
    data.id = id;
    const hasCondition = Boolean(condition);
    const isPassingCondition = hasCondition ? Boolean(condition(data, siblingData, {
        user
    })) : true;
    const field = fields[path];
    const wasPassingCondition = field?.passesCondition;
    (0, _react.useEffect)(()=>{
        if (hasCondition) {
            if (isPassingCondition && !wasPassingCondition) {
                dispatchFields({
                    path,
                    result: true,
                    type: 'MODIFY_CONDITION',
                    user
                });
            }
            if (!isPassingCondition && (wasPassingCondition || typeof wasPassingCondition === 'undefined')) {
                dispatchFields({
                    path,
                    result: false,
                    type: 'MODIFY_CONDITION',
                    user
                });
            }
        }
    }, [
        isPassingCondition,
        wasPassingCondition,
        dispatchFields,
        path,
        hasCondition,
        user,
        setShowField
    ]);
    (0, _react.useEffect)(()=>{
        setShowField(isPassingCondition);
    }, [
        setShowField,
        isPassingCondition
    ]);
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL3dpdGhDb25kaXRpb24vV2F0Y2hDb25kaXRpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHR5cGUgeyBDb25kaXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnXG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJ1xuaW1wb3J0IHsgdXNlQWxsRm9ybUZpZWxkcyB9IGZyb20gJy4uL0Zvcm0vY29udGV4dCdcbmltcG9ydCBnZXRTaWJsaW5nRGF0YSBmcm9tICcuLi9Gb3JtL2dldFNpYmxpbmdEYXRhJ1xuaW1wb3J0IHJlZHVjZUZpZWxkc1RvVmFsdWVzIGZyb20gJy4uL0Zvcm0vcmVkdWNlRmllbGRzVG9WYWx1ZXMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNvbmRpdGlvbjogQ29uZGl0aW9uXG4gIG5hbWU6IHN0cmluZ1xuICBwYXRoPzogc3RyaW5nXG4gIHNldFNob3dGaWVsZDogKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxufVxuXG5leHBvcnQgY29uc3QgV2F0Y2hDb25kaXRpb246IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIG5hbWUsXG4gIGNvbmRpdGlvbixcbiAgcGF0aDogcGF0aEZyb21Qcm9wcyxcbiAgc2V0U2hvd0ZpZWxkLFxufSkgPT4ge1xuICBjb25zdCBwYXRoID0gdHlwZW9mIHBhdGhGcm9tUHJvcHMgPT09ICdzdHJpbmcnID8gcGF0aEZyb21Qcm9wcyA6IG5hbWVcblxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKVxuICBjb25zdCBbZmllbGRzLCBkaXNwYXRjaEZpZWxkc10gPSB1c2VBbGxGb3JtRmllbGRzKClcbiAgY29uc3QgeyBpZCB9ID0gdXNlRG9jdW1lbnRJbmZvKClcblxuICBjb25zdCBkYXRhID0gcmVkdWNlRmllbGRzVG9WYWx1ZXMoZmllbGRzLCB0cnVlKVxuICBjb25zdCBzaWJsaW5nRGF0YSA9IGdldFNpYmxpbmdEYXRhKGZpZWxkcywgcGF0aClcblxuICAvLyBNYW51YWxseSBwcm92aWRlIElEIHRvIGBkYXRhYFxuICBkYXRhLmlkID0gaWRcblxuICBjb25zdCBoYXNDb25kaXRpb24gPSBCb29sZWFuKGNvbmRpdGlvbilcbiAgY29uc3QgaXNQYXNzaW5nQ29uZGl0aW9uID0gaGFzQ29uZGl0aW9uID8gQm9vbGVhbihjb25kaXRpb24oZGF0YSwgc2libGluZ0RhdGEsIHsgdXNlciB9KSkgOiB0cnVlXG4gIGNvbnN0IGZpZWxkID0gZmllbGRzW3BhdGhdXG5cbiAgY29uc3Qgd2FzUGFzc2luZ0NvbmRpdGlvbiA9IGZpZWxkPy5wYXNzZXNDb25kaXRpb25cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChoYXNDb25kaXRpb24pIHtcbiAgICAgIGlmIChpc1Bhc3NpbmdDb25kaXRpb24gJiYgIXdhc1Bhc3NpbmdDb25kaXRpb24pIHtcbiAgICAgICAgZGlzcGF0Y2hGaWVsZHMoeyBwYXRoLCByZXN1bHQ6IHRydWUsIHR5cGU6ICdNT0RJRllfQ09ORElUSU9OJywgdXNlciB9KVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgICFpc1Bhc3NpbmdDb25kaXRpb24gJiZcbiAgICAgICAgKHdhc1Bhc3NpbmdDb25kaXRpb24gfHwgdHlwZW9mIHdhc1Bhc3NpbmdDb25kaXRpb24gPT09ICd1bmRlZmluZWQnKVxuICAgICAgKSB7XG4gICAgICAgIGRpc3BhdGNoRmllbGRzKHsgcGF0aCwgcmVzdWx0OiBmYWxzZSwgdHlwZTogJ01PRElGWV9DT05ESVRJT04nLCB1c2VyIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbXG4gICAgaXNQYXNzaW5nQ29uZGl0aW9uLFxuICAgIHdhc1Bhc3NpbmdDb25kaXRpb24sXG4gICAgZGlzcGF0Y2hGaWVsZHMsXG4gICAgcGF0aCxcbiAgICBoYXNDb25kaXRpb24sXG4gICAgdXNlcixcbiAgICBzZXRTaG93RmllbGQsXG4gIF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTaG93RmllbGQoaXNQYXNzaW5nQ29uZGl0aW9uKVxuICB9LCBbc2V0U2hvd0ZpZWxkLCBpc1Bhc3NpbmdDb25kaXRpb25dKVxuXG4gIHJldHVybiBudWxsXG59XG4iXSwibmFtZXMiOlsiV2F0Y2hDb25kaXRpb24iLCJuYW1lIiwiY29uZGl0aW9uIiwicGF0aCIsInBhdGhGcm9tUHJvcHMiLCJzZXRTaG93RmllbGQiLCJ1c2VyIiwidXNlQXV0aCIsImZpZWxkcyIsImRpc3BhdGNoRmllbGRzIiwidXNlQWxsRm9ybUZpZWxkcyIsImlkIiwidXNlRG9jdW1lbnRJbmZvIiwiZGF0YSIsInJlZHVjZUZpZWxkc1RvVmFsdWVzIiwic2libGluZ0RhdGEiLCJnZXRTaWJsaW5nRGF0YSIsImhhc0NvbmRpdGlvbiIsIkJvb2xlYW4iLCJpc1Bhc3NpbmdDb25kaXRpb24iLCJmaWVsZCIsIndhc1Bhc3NpbmdDb25kaXRpb24iLCJwYXNzZXNDb25kaXRpb24iLCJ1c2VFZmZlY3QiLCJyZXN1bHQiLCJ0eXBlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQW1CYUE7OztlQUFBQTs7O3VCQWpCYTtzQkFJRjs4QkFDUTt5QkFDQzt1RUFDTjs2RUFDTTs7Ozs7O0FBUzFCLE1BQU1BLGlCQUFrQyxDQUFDLEVBQzlDQyxJQUFJLEVBQ0pDLFNBQVMsRUFDVEMsTUFBTUMsYUFBYSxFQUNuQkMsWUFBWSxFQUNiO0lBQ0MsTUFBTUYsT0FBTyxPQUFPQyxrQkFBa0IsV0FBV0EsZ0JBQWdCSDtJQUVqRSxNQUFNLEVBQUVLLElBQUksRUFBRSxHQUFHQyxJQUFBQSxhQUFPO0lBQ3hCLE1BQU0sQ0FBQ0MsUUFBUUMsZUFBZSxHQUFHQyxJQUFBQSx5QkFBZ0I7SUFDakQsTUFBTSxFQUFFQyxFQUFFLEVBQUUsR0FBR0MsSUFBQUEsNkJBQWU7SUFFOUIsTUFBTUMsT0FBT0MsSUFBQUEsNkJBQW9CLEVBQUNOLFFBQVE7SUFDMUMsTUFBTU8sY0FBY0MsSUFBQUEsdUJBQWMsRUFBQ1IsUUFBUUw7SUFFM0MsZ0NBQWdDO0lBQ2hDVSxLQUFLRixFQUFFLEdBQUdBO0lBRVYsTUFBTU0sZUFBZUMsUUFBUWhCO0lBQzdCLE1BQU1pQixxQkFBcUJGLGVBQWVDLFFBQVFoQixVQUFVVyxNQUFNRSxhQUFhO1FBQUVUO0lBQUssTUFBTTtJQUM1RixNQUFNYyxRQUFRWixNQUFNLENBQUNMLEtBQUs7SUFFMUIsTUFBTWtCLHNCQUFzQkQsT0FBT0U7SUFFbkNDLElBQUFBLGdCQUFTLEVBQUM7UUFDUixJQUFJTixjQUFjO1lBQ2hCLElBQUlFLHNCQUFzQixDQUFDRSxxQkFBcUI7Z0JBQzlDWixlQUFlO29CQUFFTjtvQkFBTXFCLFFBQVE7b0JBQU1DLE1BQU07b0JBQW9CbkI7Z0JBQUs7WUFDdEU7WUFFQSxJQUNFLENBQUNhLHNCQUNBRSxDQUFBQSx1QkFBdUIsT0FBT0Esd0JBQXdCLFdBQVUsR0FDakU7Z0JBQ0FaLGVBQWU7b0JBQUVOO29CQUFNcUIsUUFBUTtvQkFBT0MsTUFBTTtvQkFBb0JuQjtnQkFBSztZQUN2RTtRQUNGO0lBQ0YsR0FBRztRQUNEYTtRQUNBRTtRQUNBWjtRQUNBTjtRQUNBYztRQUNBWDtRQUNBRDtLQUNEO0lBRURrQixJQUFBQSxnQkFBUyxFQUFDO1FBQ1JsQixhQUFhYztJQUNmLEdBQUc7UUFBQ2Q7UUFBY2M7S0FBbUI7SUFFckMsT0FBTztBQUNUIn0=