"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Save", {
    enumerable: true,
    get: function() {
        return Save;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _useHotkey = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useHotkey"));
const _context = require("../../forms/Form/context");
const _Submit = /*#__PURE__*/ _interop_require_default(require("../../forms/Submit"));
const _EditDepth = require("../../utilities/EditDepth");
const _OperationProvider = require("../../utilities/OperationProvider");
const _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
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
const DefaultSaveButton = ({ label, save })=>{
    const ref = (0, _react.useRef)(null);
    const editDepth = (0, _EditDepth.useEditDepth)();
    const operation = (0, _OperationProvider.useOperation)();
    const modified = (0, _context.useFormModified)();
    const forceDisable = operation === 'update' && !modified;
    (0, _useHotkey.default)({
        cmdCtrlKey: true,
        editDepth,
        keyCodes: [
            's'
        ]
    }, (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (forceDisable) {
            return;
        }
        if (ref?.current) {
            ref.current.click();
        }
    });
    return /*#__PURE__*/ _react.default.createElement(_Submit.default, {
        buttonId: "action-save",
        onClick: save,
        ref: ref,
        size: "small",
        type: "button"
    }, label);
};
const Save = ({ CustomComponent })=>{
    const { t } = (0, _reacti18next.useTranslation)('general');
    const { submit } = (0, _context.useForm)();
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: CustomComponent,
        DefaultComponent: DefaultSaveButton,
        componentProps: {
            DefaultButton: DefaultSaveButton,
            label: t('save'),
            save: submit
        }
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1NhdmUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHVzZUhvdGtleSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VIb3RrZXknXG5pbXBvcnQgeyB1c2VGb3JtLCB1c2VGb3JtTW9kaWZpZWQgfSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtL2NvbnRleHQnXG5pbXBvcnQgRm9ybVN1Ym1pdCBmcm9tICcuLi8uLi9mb3Jtcy9TdWJtaXQnXG5pbXBvcnQgeyB1c2VFZGl0RGVwdGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRWRpdERlcHRoJ1xuaW1wb3J0IHsgdXNlT3BlcmF0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL09wZXJhdGlvblByb3ZpZGVyJ1xuaW1wb3J0IFJlbmRlckN1c3RvbUNvbXBvbmVudCBmcm9tICcuLi8uLi91dGlsaXRpZXMvUmVuZGVyQ3VzdG9tQ29tcG9uZW50J1xuXG5leHBvcnQgdHlwZSBDdXN0b21TYXZlQnV0dG9uUHJvcHMgPSBSZWFjdC5Db21wb25lbnRUeXBlPFxuICBEZWZhdWx0U2F2ZUJ1dHRvblByb3BzICYge1xuICAgIERlZmF1bHRCdXR0b246IFJlYWN0LkNvbXBvbmVudFR5cGU8RGVmYXVsdFNhdmVCdXR0b25Qcm9wcz5cbiAgfVxuPlxudHlwZSBEZWZhdWx0U2F2ZUJ1dHRvblByb3BzID0ge1xuICBsYWJlbDogc3RyaW5nXG4gIHNhdmU6ICgpID0+IHZvaWRcbn1cblxuY29uc3QgRGVmYXVsdFNhdmVCdXR0b246IFJlYWN0LkZDPERlZmF1bHRTYXZlQnV0dG9uUHJvcHM+ID0gKHsgbGFiZWwsIHNhdmUgfSkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IGVkaXREZXB0aCA9IHVzZUVkaXREZXB0aCgpXG4gIGNvbnN0IG9wZXJhdGlvbiA9IHVzZU9wZXJhdGlvbigpXG4gIGNvbnN0IG1vZGlmaWVkID0gdXNlRm9ybU1vZGlmaWVkKClcblxuICBjb25zdCBmb3JjZURpc2FibGUgPSBvcGVyYXRpb24gPT09ICd1cGRhdGUnICYmICFtb2RpZmllZFxuXG4gIHVzZUhvdGtleSh7IGNtZEN0cmxLZXk6IHRydWUsIGVkaXREZXB0aCwga2V5Q29kZXM6IFsncyddIH0sIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgaWYgKGZvcmNlRGlzYWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJlZj8uY3VycmVudCkge1xuICAgICAgcmVmLmN1cnJlbnQuY2xpY2soKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxGb3JtU3VibWl0IGJ1dHRvbklkPVwiYWN0aW9uLXNhdmVcIiBvbkNsaWNrPXtzYXZlfSByZWY9e3JlZn0gc2l6ZT1cInNtYWxsXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAge2xhYmVsfVxuICAgIDwvRm9ybVN1Ym1pdD5cbiAgKVxufVxuXG50eXBlIFByb3BzID0ge1xuICBDdXN0b21Db21wb25lbnQ/OiBDdXN0b21TYXZlQnV0dG9uUHJvcHNcbn1cbmV4cG9ydCBjb25zdCBTYXZlOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBDdXN0b21Db21wb25lbnQgfSkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJylcbiAgY29uc3QgeyBzdWJtaXQgfSA9IHVzZUZvcm0oKVxuXG4gIHJldHVybiAoXG4gICAgPFJlbmRlckN1c3RvbUNvbXBvbmVudFxuICAgICAgQ3VzdG9tQ29tcG9uZW50PXtDdXN0b21Db21wb25lbnR9XG4gICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0U2F2ZUJ1dHRvbn1cbiAgICAgIGNvbXBvbmVudFByb3BzPXt7XG4gICAgICAgIERlZmF1bHRCdXR0b246IERlZmF1bHRTYXZlQnV0dG9uLFxuICAgICAgICBsYWJlbDogdCgnc2F2ZScpLFxuICAgICAgICBzYXZlOiBzdWJtaXQsXG4gICAgICB9fVxuICAgIC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJTYXZlIiwiRGVmYXVsdFNhdmVCdXR0b24iLCJsYWJlbCIsInNhdmUiLCJyZWYiLCJ1c2VSZWYiLCJlZGl0RGVwdGgiLCJ1c2VFZGl0RGVwdGgiLCJvcGVyYXRpb24iLCJ1c2VPcGVyYXRpb24iLCJtb2RpZmllZCIsInVzZUZvcm1Nb2RpZmllZCIsImZvcmNlRGlzYWJsZSIsInVzZUhvdGtleSIsImNtZEN0cmxLZXkiLCJrZXlDb2RlcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJjbGljayIsIkZvcm1TdWJtaXQiLCJidXR0b25JZCIsIm9uQ2xpY2siLCJzaXplIiwidHlwZSIsIkN1c3RvbUNvbXBvbmVudCIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsInN1Ym1pdCIsInVzZUZvcm0iLCJSZW5kZXJDdXN0b21Db21wb25lbnQiLCJEZWZhdWx0Q29tcG9uZW50IiwiY29tcG9uZW50UHJvcHMiLCJEZWZhdWx0QnV0dG9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBbURhQTs7O2VBQUFBOzs7K0RBbkRpQjs4QkFDQztrRUFFVDt5QkFDbUI7K0RBQ2xCOzJCQUNNO21DQUNBOzhFQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlsQyxNQUFNQyxvQkFBc0QsQ0FBQyxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRTtJQUMxRSxNQUFNQyxNQUFNQyxJQUFBQSxhQUFNLEVBQW9CO0lBQ3RDLE1BQU1DLFlBQVlDLElBQUFBLHVCQUFZO0lBQzlCLE1BQU1DLFlBQVlDLElBQUFBLCtCQUFZO0lBQzlCLE1BQU1DLFdBQVdDLElBQUFBLHdCQUFlO0lBRWhDLE1BQU1DLGVBQWVKLGNBQWMsWUFBWSxDQUFDRTtJQUVoREcsSUFBQUEsa0JBQVMsRUFBQztRQUFFQyxZQUFZO1FBQU1SO1FBQVdTLFVBQVU7WUFBQztTQUFJO0lBQUMsR0FBRyxDQUFDQztRQUMzREEsRUFBRUMsY0FBYztRQUNoQkQsRUFBRUUsZUFBZTtRQUVqQixJQUFJTixjQUFjO1lBQ2hCO1FBQ0Y7UUFFQSxJQUFJUixLQUFLZSxTQUFTO1lBQ2hCZixJQUFJZSxPQUFPLENBQUNDLEtBQUs7UUFDbkI7SUFDRjtJQUVBLHFCQUNFLDZCQUFDQyxlQUFVO1FBQUNDLFVBQVM7UUFBY0MsU0FBU3BCO1FBQU1DLEtBQUtBO1FBQUtvQixNQUFLO1FBQVFDLE1BQUs7T0FDM0V2QjtBQUdQO0FBS08sTUFBTUYsT0FBd0IsQ0FBQyxFQUFFMEIsZUFBZSxFQUFFO0lBQ3ZELE1BQU0sRUFBRUMsQ0FBQyxFQUFFLEdBQUdDLElBQUFBLDRCQUFjLEVBQUM7SUFDN0IsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0MsSUFBQUEsZ0JBQU87SUFFMUIscUJBQ0UsNkJBQUNDLDhCQUFxQjtRQUNwQkwsaUJBQWlCQTtRQUNqQk0sa0JBQWtCL0I7UUFDbEJnQyxnQkFBZ0I7WUFDZEMsZUFBZWpDO1lBQ2ZDLE9BQU95QixFQUFFO1lBQ1R4QixNQUFNMEI7UUFDUjs7QUFHTiJ9