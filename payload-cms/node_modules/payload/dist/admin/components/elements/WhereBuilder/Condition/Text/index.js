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
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../../../ReactSelect"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'condition-value-text';
const Text = ({ disabled, onChange, operator, value })=>{
    const { t } = (0, _reacti18next.useTranslation)();
    const isMulti = [
        'in',
        'not_in'
    ].includes(operator);
    const [valueToRender, setValueToRender] = _react.default.useState([]);
    const onSelect = _react.default.useCallback((selectedOption)=>{
        let newValue;
        if (!selectedOption) {
            newValue = [];
        } else if (isMulti) {
            if (Array.isArray(selectedOption)) {
                newValue = selectedOption.map((option)=>option.value?.value || option.value);
            } else {
                newValue = [
                    selectedOption.value?.value || selectedOption.value
                ];
            }
        }
        onChange(newValue);
    }, [
        isMulti,
        onChange
    ]);
    _react.default.useEffect(()=>{
        if (Array.isArray(value)) {
            setValueToRender(value.map((val, index)=>{
                return {
                    id: `${val}${index}`,
                    label: `${val}`,
                    value: {
                        toString: ()=>`${val}${index}`,
                        value: val?.value || val
                    }
                };
            }));
        } else {
            setValueToRender([]);
        }
    }, [
        value
    ]);
    return isMulti ? /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        disabled: disabled,
        isClearable: true,
        isCreatable: true,
        isMulti: isMulti,
        isSortable: true,
        onChange: onSelect,
        options: [],
        placeholder: t('general:enterAValue'),
        value: valueToRender || []
    }) : /*#__PURE__*/ _react.default.createElement("input", {
        className: baseClass,
        disabled: disabled,
        onChange: (e)=>onChange(e.target.value),
        placeholder: t('general:enterAValue'),
        type: "text",
        value: value || ''
    });
};
const _default = Text;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9Db25kaXRpb24vVGV4dC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IFJlYWN0U2VsZWN0IGZyb20gJy4uLy4uLy4uL1JlYWN0U2VsZWN0J1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdjb25kaXRpb24tdmFsdWUtdGV4dCdcblxuY29uc3QgVGV4dDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgZGlzYWJsZWQsIG9uQ2hhbmdlLCBvcGVyYXRvciwgdmFsdWUgfSkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICBjb25zdCBpc011bHRpID0gWydpbicsICdub3RfaW4nXS5pbmNsdWRlcyhvcGVyYXRvcilcblxuICBjb25zdCBbdmFsdWVUb1JlbmRlciwgc2V0VmFsdWVUb1JlbmRlcl0gPSBSZWFjdC51c2VTdGF0ZTxcbiAgICB7IGlkOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiB7IHZhbHVlOiBzdHJpbmcgfSB9W11cbiAgPihbXSlcblxuICBjb25zdCBvblNlbGVjdCA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChzZWxlY3RlZE9wdGlvbikgPT4ge1xuICAgICAgbGV0IG5ld1ZhbHVlXG4gICAgICBpZiAoIXNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gW11cbiAgICAgIH0gZWxzZSBpZiAoaXNNdWx0aSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RlZE9wdGlvbikpIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IHNlbGVjdGVkT3B0aW9uLm1hcCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWU/LnZhbHVlIHx8IG9wdGlvbi52YWx1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IFtzZWxlY3RlZE9wdGlvbi52YWx1ZT8udmFsdWUgfHwgc2VsZWN0ZWRPcHRpb24udmFsdWVdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb25DaGFuZ2UobmV3VmFsdWUpXG4gICAgfSxcbiAgICBbaXNNdWx0aSwgb25DaGFuZ2VdLFxuICApXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHNldFZhbHVlVG9SZW5kZXIoXG4gICAgICAgIHZhbHVlLm1hcCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogYCR7dmFsfSR7aW5kZXh9YCwgLy8gYXBwZW5kIGluZGV4IHRvIGF2b2lkIGR1cGxpY2F0ZSBrZXlzIGJ1dCBhbGxvdyBkdXBsaWNhdGUgbnVtYmVyc1xuICAgICAgICAgICAgbGFiZWw6IGAke3ZhbH1gLFxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgdG9TdHJpbmc6ICgpID0+IGAke3ZhbH0ke2luZGV4fWAsXG4gICAgICAgICAgICAgIHZhbHVlOiAodmFsIGFzIGFueSk/LnZhbHVlIHx8IHZhbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VmFsdWVUb1JlbmRlcihbXSlcbiAgICB9XG4gIH0sIFt2YWx1ZV0pXG5cbiAgcmV0dXJuIGlzTXVsdGkgPyAoXG4gICAgPFJlYWN0U2VsZWN0XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBpc0NsZWFyYWJsZVxuICAgICAgaXNDcmVhdGFibGVcbiAgICAgIGlzTXVsdGk9e2lzTXVsdGl9XG4gICAgICBpc1NvcnRhYmxlXG4gICAgICBvbkNoYW5nZT17b25TZWxlY3R9XG4gICAgICBvcHRpb25zPXtbXX1cbiAgICAgIHBsYWNlaG9sZGVyPXt0KCdnZW5lcmFsOmVudGVyQVZhbHVlJyl9XG4gICAgICB2YWx1ZT17dmFsdWVUb1JlbmRlciB8fCBbXX1cbiAgICAvPlxuICApIDogKFxuICAgIDxpbnB1dFxuICAgICAgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIHBsYWNlaG9sZGVyPXt0KCdnZW5lcmFsOmVudGVyQVZhbHVlJyl9XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICB2YWx1ZT17dmFsdWUgfHwgJyd9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiVGV4dCIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJvcGVyYXRvciIsInZhbHVlIiwidCIsInVzZVRyYW5zbGF0aW9uIiwiaXNNdWx0aSIsImluY2x1ZGVzIiwidmFsdWVUb1JlbmRlciIsInNldFZhbHVlVG9SZW5kZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwib25TZWxlY3QiLCJ1c2VDYWxsYmFjayIsInNlbGVjdGVkT3B0aW9uIiwibmV3VmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJvcHRpb24iLCJ1c2VFZmZlY3QiLCJ2YWwiLCJpbmRleCIsImlkIiwibGFiZWwiLCJ0b1N0cmluZyIsIlJlYWN0U2VsZWN0IiwiaXNDbGVhcmFibGUiLCJpc0NyZWF0YWJsZSIsImlzU29ydGFibGUiLCJvcHRpb25zIiwicGxhY2Vob2xkZXIiLCJpbnB1dCIsImNsYXNzTmFtZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBZ0ZBOzs7ZUFBQTs7OzhEQWhGa0I7OEJBQ2E7b0VBSVA7UUFDakI7Ozs7OztBQUVQLE1BQU1BLFlBQVk7QUFFbEIsTUFBTUMsT0FBd0IsQ0FBQyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUU7SUFDcEUsTUFBTSxFQUFFQyxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWM7SUFFNUIsTUFBTUMsVUFBVTtRQUFDO1FBQU07S0FBUyxDQUFDQyxRQUFRLENBQUNMO0lBRTFDLE1BQU0sQ0FBQ00sZUFBZUMsaUJBQWlCLEdBQUdDLGNBQUssQ0FBQ0MsUUFBUSxDQUV0RCxFQUFFO0lBRUosTUFBTUMsV0FBV0YsY0FBSyxDQUFDRyxXQUFXLENBQ2hDLENBQUNDO1FBQ0MsSUFBSUM7UUFDSixJQUFJLENBQUNELGdCQUFnQjtZQUNuQkMsV0FBVyxFQUFFO1FBQ2YsT0FBTyxJQUFJVCxTQUFTO1lBQ2xCLElBQUlVLE1BQU1DLE9BQU8sQ0FBQ0gsaUJBQWlCO2dCQUNqQ0MsV0FBV0QsZUFBZUksR0FBRyxDQUFDLENBQUNDLFNBQVdBLE9BQU9oQixLQUFLLEVBQUVBLFNBQVNnQixPQUFPaEIsS0FBSztZQUMvRSxPQUFPO2dCQUNMWSxXQUFXO29CQUFDRCxlQUFlWCxLQUFLLEVBQUVBLFNBQVNXLGVBQWVYLEtBQUs7aUJBQUM7WUFDbEU7UUFDRjtRQUVBRixTQUFTYztJQUNYLEdBQ0E7UUFBQ1Q7UUFBU0w7S0FBUztJQUdyQlMsY0FBSyxDQUFDVSxTQUFTLENBQUM7UUFDZCxJQUFJSixNQUFNQyxPQUFPLENBQUNkLFFBQVE7WUFDeEJNLGlCQUNFTixNQUFNZSxHQUFHLENBQUMsQ0FBQ0csS0FBS0M7Z0JBQ2QsT0FBTztvQkFDTEMsSUFBSSxDQUFDLEVBQUVGLElBQUksRUFBRUMsTUFBTSxDQUFDO29CQUNwQkUsT0FBTyxDQUFDLEVBQUVILElBQUksQ0FBQztvQkFDZmxCLE9BQU87d0JBQ0xzQixVQUFVLElBQU0sQ0FBQyxFQUFFSixJQUFJLEVBQUVDLE1BQU0sQ0FBQzt3QkFDaENuQixPQUFPLEFBQUNrQixLQUFhbEIsU0FBU2tCO29CQUNoQztnQkFDRjtZQUNGO1FBRUosT0FBTztZQUNMWixpQkFBaUIsRUFBRTtRQUNyQjtJQUNGLEdBQUc7UUFBQ047S0FBTTtJQUVWLE9BQU9HLHdCQUNMLDZCQUFDb0Isb0JBQVc7UUFDVjFCLFVBQVVBO1FBQ1YyQixhQUFBQTtRQUNBQyxhQUFBQTtRQUNBdEIsU0FBU0E7UUFDVHVCLFlBQUFBO1FBQ0E1QixVQUFVVztRQUNWa0IsU0FBUyxFQUFFO1FBQ1hDLGFBQWEzQixFQUFFO1FBQ2ZELE9BQU9LLGlCQUFpQixFQUFFO3VCQUc1Qiw2QkFBQ3dCO1FBQ0NDLFdBQVduQztRQUNYRSxVQUFVQTtRQUNWQyxVQUFVLENBQUNpQyxJQUFNakMsU0FBU2lDLEVBQUVDLE1BQU0sQ0FBQ2hDLEtBQUs7UUFDeEM0QixhQUFhM0IsRUFBRTtRQUNmZ0MsTUFBSztRQUNMakMsT0FBT0EsU0FBUzs7QUFHdEI7TUFFQSxXQUFlSiJ9