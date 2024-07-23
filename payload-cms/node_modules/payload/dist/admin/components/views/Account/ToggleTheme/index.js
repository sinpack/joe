"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ToggleTheme", {
    enumerable: true,
    get: function() {
        return ToggleTheme;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _Input = /*#__PURE__*/ _interop_require_default(require("../../../forms/field-types/RadioGroup/Input"));
const _Theme = require("../../../utilities/Theme");
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
const ToggleTheme = ()=>{
    const { autoMode, setTheme, theme } = (0, _Theme.useTheme)();
    const { t } = (0, _reacti18next.useTranslation)('general');
    const onChange = (0, _react.useCallback)((newTheme)=>{
        setTheme(newTheme);
    }, [
        setTheme
    ]);
    return /*#__PURE__*/ _react.default.createElement(_Input.default, {
        label: t('adminTheme'),
        name: "theme",
        onChange: onChange,
        options: [
            {
                label: t('automatic'),
                value: 'auto'
            },
            {
                label: t('light'),
                value: 'light'
            },
            {
                label: t('dark'),
                value: 'dark'
            }
        ],
        value: autoMode ? 'auto' : theme
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0FjY291bnQvVG9nZ2xlVGhlbWUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgdHlwZSB7IE9uQ2hhbmdlIH0gZnJvbSAnLi4vLi4vLi4vZm9ybXMvZmllbGQtdHlwZXMvUmFkaW9Hcm91cC90eXBlcydcbmltcG9ydCB0eXBlIHsgVGhlbWUgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvVGhlbWUnXG5cbmltcG9ydCBSYWRpb0dyb3VwSW5wdXQgZnJvbSAnLi4vLi4vLi4vZm9ybXMvZmllbGQtdHlwZXMvUmFkaW9Hcm91cC9JbnB1dCdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL1RoZW1lJ1xuXG5leHBvcnQgY29uc3QgVG9nZ2xlVGhlbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IGF1dG9Nb2RlLCBzZXRUaGVtZSwgdGhlbWUgfSA9IHVzZVRoZW1lKClcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpXG5cbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjazxPbkNoYW5nZTxUaGVtZT4+KFxuICAgIChuZXdUaGVtZSkgPT4ge1xuICAgICAgc2V0VGhlbWUobmV3VGhlbWUpXG4gICAgfSxcbiAgICBbc2V0VGhlbWVdLFxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8UmFkaW9Hcm91cElucHV0XG4gICAgICBsYWJlbD17dCgnYWRtaW5UaGVtZScpfVxuICAgICAgbmFtZT1cInRoZW1lXCJcbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiB0KCdhdXRvbWF0aWMnKSxcbiAgICAgICAgICB2YWx1ZTogJ2F1dG8nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IHQoJ2xpZ2h0JyksXG4gICAgICAgICAgdmFsdWU6ICdsaWdodCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogdCgnZGFyaycpLFxuICAgICAgICAgIHZhbHVlOiAnZGFyaycsXG4gICAgICAgIH0sXG4gICAgICBdfVxuICAgICAgdmFsdWU9e2F1dG9Nb2RlID8gJ2F1dG8nIDogdGhlbWV9XG4gICAgLz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlRvZ2dsZVRoZW1lIiwiYXV0b01vZGUiLCJzZXRUaGVtZSIsInRoZW1lIiwidXNlVGhlbWUiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJvbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwibmV3VGhlbWUiLCJSYWRpb0dyb3VwSW5wdXQiLCJsYWJlbCIsIm5hbWUiLCJvcHRpb25zIiwidmFsdWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFTYUE7OztlQUFBQTs7OytEQVRzQjs4QkFDSjs4REFLSDt1QkFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsTUFBTUEsY0FBd0I7SUFDbkMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFLEdBQUdDLElBQUFBLGVBQVE7SUFDOUMsTUFBTSxFQUFFQyxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWMsRUFBQztJQUU3QixNQUFNQyxXQUFXQyxJQUFBQSxrQkFBVyxFQUMxQixDQUFDQztRQUNDUCxTQUFTTztJQUNYLEdBQ0E7UUFBQ1A7S0FBUztJQUdaLHFCQUNFLDZCQUFDUSxjQUFlO1FBQ2RDLE9BQU9OLEVBQUU7UUFDVE8sTUFBSztRQUNMTCxVQUFVQTtRQUNWTSxTQUFTO1lBQ1A7Z0JBQ0VGLE9BQU9OLEVBQUU7Z0JBQ1RTLE9BQU87WUFDVDtZQUNBO2dCQUNFSCxPQUFPTixFQUFFO2dCQUNUUyxPQUFPO1lBQ1Q7WUFDQTtnQkFDRUgsT0FBT04sRUFBRTtnQkFDVFMsT0FBTztZQUNUO1NBQ0Q7UUFDREEsT0FBT2IsV0FBVyxTQUFTRTs7QUFHakMifQ==