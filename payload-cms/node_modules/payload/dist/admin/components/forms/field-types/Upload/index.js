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
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _validations = require("../../../../../fields/validations");
const _Config = require("../../../utilities/Config");
const _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
const _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
const _Input = /*#__PURE__*/ _interop_require_default(require("./Input"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const Upload = (props)=>{
    const { collections, routes: { api }, serverURL } = (0, _Config.useConfig)();
    const { name, admin: { className, condition, description, readOnly, style, width, components: { Error, Label } = {} } = {}, fieldTypes, filterOptions, label, path, relationTo, required, validate = _validations.upload } = props;
    const collection = collections.find((coll)=>coll.slug === relationTo);
    const memoizedValidate = (0, _react.useCallback)((value, options)=>{
        return validate(value, {
            ...options,
            required
        });
    }, [
        validate,
        required
    ]);
    const field = (0, _useField.default)({
        condition,
        path,
        validate: memoizedValidate
    });
    const { errorMessage, setValue, showError, value } = field;
    const onChange = (0, _react.useCallback)((incomingValue)=>{
        const incomingID = incomingValue?.id || incomingValue;
        setValue(incomingID);
    }, [
        setValue
    ]);
    if (collection.upload) {
        return /*#__PURE__*/ _react.default.createElement(_Input.default, {
            api: api,
            className: className,
            collection: collection,
            description: description,
            errorMessage: errorMessage,
            fieldTypes: fieldTypes,
            filterOptions: filterOptions,
            label: label,
            name: name,
            onChange: onChange,
            path: path,
            readOnly: readOnly,
            relationTo: relationTo,
            required: required,
            serverURL: serverURL,
            showError: showError,
            style: style,
            value: value,
            width: width,
            Error: Error,
            Label: Label
        });
    }
    return null;
};
const _default = (0, _withCondition.default)(Upload);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1VwbG9hZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyB1cGxvYWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvdmFsaWRhdGlvbnMnXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvQ29uZmlnJ1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uL3VzZUZpZWxkJ1xuaW1wb3J0IHdpdGhDb25kaXRpb24gZnJvbSAnLi4vLi4vd2l0aENvbmRpdGlvbidcbmltcG9ydCBVcGxvYWRJbnB1dCBmcm9tICcuL0lucHV0J1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IFVwbG9hZDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9ucyxcbiAgICByb3V0ZXM6IHsgYXBpIH0sXG4gICAgc2VydmVyVVJMLFxuICB9ID0gdXNlQ29uZmlnKClcblxuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBhZG1pbjoge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY29uZGl0aW9uLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICByZWFkT25seSxcbiAgICAgIHN0eWxlLFxuICAgICAgd2lkdGgsXG4gICAgICBjb21wb25lbnRzOiB7IEVycm9yLCBMYWJlbCB9ID0ge30sXG4gICAgfSA9IHt9LFxuICAgIGZpZWxkVHlwZXMsXG4gICAgZmlsdGVyT3B0aW9ucyxcbiAgICBsYWJlbCxcbiAgICBwYXRoLFxuICAgIHJlbGF0aW9uVG8sXG4gICAgcmVxdWlyZWQsXG4gICAgdmFsaWRhdGUgPSB1cGxvYWQsXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9ucy5maW5kKChjb2xsKSA9PiBjb2xsLnNsdWcgPT09IHJlbGF0aW9uVG8pXG5cbiAgY29uc3QgbWVtb2l6ZWRWYWxpZGF0ZSA9IHVzZUNhbGxiYWNrKFxuICAgICh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlKHZhbHVlLCB7IC4uLm9wdGlvbnMsIHJlcXVpcmVkIH0pXG4gICAgfSxcbiAgICBbdmFsaWRhdGUsIHJlcXVpcmVkXSxcbiAgKVxuXG4gIGNvbnN0IGZpZWxkID0gdXNlRmllbGQoe1xuICAgIGNvbmRpdGlvbixcbiAgICBwYXRoLFxuICAgIHZhbGlkYXRlOiBtZW1vaXplZFZhbGlkYXRlLFxuICB9KVxuXG4gIGNvbnN0IHsgZXJyb3JNZXNzYWdlLCBzZXRWYWx1ZSwgc2hvd0Vycm9yLCB2YWx1ZSB9ID0gZmllbGRcblxuICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgIChpbmNvbWluZ1ZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBpbmNvbWluZ0lEID0gaW5jb21pbmdWYWx1ZT8uaWQgfHwgaW5jb21pbmdWYWx1ZVxuICAgICAgc2V0VmFsdWUoaW5jb21pbmdJRClcbiAgICB9LFxuICAgIFtzZXRWYWx1ZV0sXG4gIClcblxuICBpZiAoY29sbGVjdGlvbi51cGxvYWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFVwbG9hZElucHV0XG4gICAgICAgIGFwaT17YXBpfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICBlcnJvck1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgICAgZmllbGRUeXBlcz17ZmllbGRUeXBlc31cbiAgICAgICAgZmlsdGVyT3B0aW9ucz17ZmlsdGVyT3B0aW9uc31cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgcmVsYXRpb25Ubz17cmVsYXRpb25Ub31cbiAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICBzZXJ2ZXJVUkw9e3NlcnZlclVSTH1cbiAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlIGFzIHN0cmluZ31cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBFcnJvcj17RXJyb3J9XG4gICAgICAgIExhYmVsPXtMYWJlbH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25kaXRpb24oVXBsb2FkKVxuIl0sIm5hbWVzIjpbIlVwbG9hZCIsInByb3BzIiwiY29sbGVjdGlvbnMiLCJyb3V0ZXMiLCJhcGkiLCJzZXJ2ZXJVUkwiLCJ1c2VDb25maWciLCJuYW1lIiwiYWRtaW4iLCJjbGFzc05hbWUiLCJjb25kaXRpb24iLCJkZXNjcmlwdGlvbiIsInJlYWRPbmx5Iiwic3R5bGUiLCJ3aWR0aCIsImNvbXBvbmVudHMiLCJFcnJvciIsIkxhYmVsIiwiZmllbGRUeXBlcyIsImZpbHRlck9wdGlvbnMiLCJsYWJlbCIsInBhdGgiLCJyZWxhdGlvblRvIiwicmVxdWlyZWQiLCJ2YWxpZGF0ZSIsInVwbG9hZCIsImNvbGxlY3Rpb24iLCJmaW5kIiwiY29sbCIsInNsdWciLCJtZW1vaXplZFZhbGlkYXRlIiwidXNlQ2FsbGJhY2siLCJ2YWx1ZSIsIm9wdGlvbnMiLCJmaWVsZCIsInVzZUZpZWxkIiwiZXJyb3JNZXNzYWdlIiwic2V0VmFsdWUiLCJzaG93RXJyb3IiLCJvbkNoYW5nZSIsImluY29taW5nVmFsdWUiLCJpbmNvbWluZ0lEIiwiaWQiLCJVcGxvYWRJbnB1dCIsIndpdGhDb25kaXRpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkE2RkE7OztlQUFBOzs7K0RBN0ZtQzs2QkFJWjt3QkFDRztpRUFDTDtzRUFDSzs4REFDRjtRQUNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxNQUFNQSxTQUEwQixDQUFDQztJQUMvQixNQUFNLEVBQ0pDLFdBQVcsRUFDWEMsUUFBUSxFQUFFQyxHQUFHLEVBQUUsRUFDZkMsU0FBUyxFQUNWLEdBQUdDLElBQUFBLGlCQUFTO0lBRWIsTUFBTSxFQUNKQyxJQUFJLEVBQ0pDLE9BQU8sRUFDTEMsU0FBUyxFQUNUQyxTQUFTLEVBQ1RDLFdBQVcsRUFDWEMsUUFBUSxFQUNSQyxLQUFLLEVBQ0xDLEtBQUssRUFDTEMsWUFBWSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUNsQyxHQUFHLENBQUMsQ0FBQyxFQUNOQyxVQUFVLEVBQ1ZDLGFBQWEsRUFDYkMsS0FBSyxFQUNMQyxJQUFJLEVBQ0pDLFVBQVUsRUFDVkMsUUFBUSxFQUNSQyxXQUFXQyxtQkFBTSxFQUNsQixHQUFHeEI7SUFFSixNQUFNeUIsYUFBYXhCLFlBQVl5QixJQUFJLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsSUFBSSxLQUFLUDtJQUU1RCxNQUFNUSxtQkFBbUJDLElBQUFBLGtCQUFXLEVBQ2xDLENBQUNDLE9BQU9DO1FBQ04sT0FBT1QsU0FBU1EsT0FBTztZQUFFLEdBQUdDLE9BQU87WUFBRVY7UUFBUztJQUNoRCxHQUNBO1FBQUNDO1FBQVVEO0tBQVM7SUFHdEIsTUFBTVcsUUFBUUMsSUFBQUEsaUJBQVEsRUFBQztRQUNyQnpCO1FBQ0FXO1FBQ0FHLFVBQVVNO0lBQ1o7SUFFQSxNQUFNLEVBQUVNLFlBQVksRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVOLEtBQUssRUFBRSxHQUFHRTtJQUVyRCxNQUFNSyxXQUFXUixJQUFBQSxrQkFBVyxFQUMxQixDQUFDUztRQUNDLE1BQU1DLGFBQWFELGVBQWVFLE1BQU1GO1FBQ3hDSCxTQUFTSTtJQUNYLEdBQ0E7UUFBQ0o7S0FBUztJQUdaLElBQUlYLFdBQVdELE1BQU0sRUFBRTtRQUNyQixxQkFDRSw2QkFBQ2tCLGNBQVc7WUFDVnZDLEtBQUtBO1lBQ0xLLFdBQVdBO1lBQ1hpQixZQUFZQTtZQUNaZixhQUFhQTtZQUNieUIsY0FBY0E7WUFDZGxCLFlBQVlBO1lBQ1pDLGVBQWVBO1lBQ2ZDLE9BQU9BO1lBQ1BiLE1BQU1BO1lBQ05nQyxVQUFVQTtZQUNWbEIsTUFBTUE7WUFDTlQsVUFBVUE7WUFDVlUsWUFBWUE7WUFDWkMsVUFBVUE7WUFDVmxCLFdBQVdBO1lBQ1hpQyxXQUFXQTtZQUNYekIsT0FBT0E7WUFDUG1CLE9BQU9BO1lBQ1BsQixPQUFPQTtZQUNQRSxPQUFPQTtZQUNQQyxPQUFPQTs7SUFHYjtJQUVBLE9BQU87QUFDVDtNQUNBLFdBQWUyQixJQUFBQSxzQkFBYSxFQUFDNUMifQ==