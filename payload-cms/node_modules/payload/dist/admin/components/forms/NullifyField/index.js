"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NullifyLocaleField", {
    enumerable: true,
    get: function() {
        return NullifyLocaleField;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _Banner = require("../../elements/Banner");
const _Config = require("../../utilities/Config");
const _Locale = require("../../utilities/Locale");
const _context = require("../Form/context");
const _Input = require("../field-types/Checkbox/Input");
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
const NullifyLocaleField = ({ fieldValue, localized, path })=>{
    const { dispatchFields, setModified } = (0, _context.useForm)();
    const { code: currentLocale } = (0, _Locale.useLocale)();
    const { localization } = (0, _Config.useConfig)();
    const [checked, setChecked] = _react.useState(typeof fieldValue !== 'number');
    const defaultLocale = localization && localization.defaultLocale ? localization.defaultLocale : 'en';
    const { t } = (0, _reacti18next.useTranslation)('general');
    const onChange = ()=>{
        const useFallback = !checked;
        dispatchFields({
            path,
            type: 'UPDATE',
            value: useFallback ? null : fieldValue || 0
        });
        setModified(true);
        setChecked(useFallback);
    };
    if (!localized || currentLocale === defaultLocale || localization && !localization.fallback) {
        // hide when field is not localized or editing default locale or when fallback is disabled
        return null;
    }
    if (fieldValue) {
        let hideCheckbox = false;
        if (typeof fieldValue === 'number' && fieldValue > 0) hideCheckbox = true;
        if (Array.isArray(fieldValue) && fieldValue.length > 0) hideCheckbox = true;
        if (hideCheckbox) {
            if (checked) setChecked(false) // uncheck when field has value
            ;
            return null;
        }
    }
    return /*#__PURE__*/ _react.createElement(_Banner.Banner, null, /*#__PURE__*/ _react.createElement(_Input.CheckboxInput, {
        checked: checked,
        id: `field-${path.replace(/\./g, '__')}`,
        label: t('fallbackToDefaultLocale'),
        onToggle: onChange
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL051bGxpZnlGaWVsZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB7IEJhbm5lciB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL0Jhbm5lcidcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTG9jYWxlJ1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJy4uL0Zvcm0vY29udGV4dCdcbmltcG9ydCB7IENoZWNrYm94SW5wdXQgfSBmcm9tICcuLi9maWVsZC10eXBlcy9DaGVja2JveC9JbnB1dCdcblxudHlwZSBOdWxsaWZ5TG9jYWxlRmllbGRQcm9wcyA9IHtcbiAgZmllbGRWYWx1ZT86IFtdIHwgbnVsbCB8IG51bWJlclxuICBsb2NhbGl6ZWQ6IGJvb2xlYW5cbiAgcGF0aDogc3RyaW5nXG59XG5leHBvcnQgY29uc3QgTnVsbGlmeUxvY2FsZUZpZWxkOiBSZWFjdC5GQzxOdWxsaWZ5TG9jYWxlRmllbGRQcm9wcz4gPSAoe1xuICBmaWVsZFZhbHVlLFxuICBsb2NhbGl6ZWQsXG4gIHBhdGgsXG59KSA9PiB7XG4gIGNvbnN0IHsgZGlzcGF0Y2hGaWVsZHMsIHNldE1vZGlmaWVkIH0gPSB1c2VGb3JtKClcbiAgY29uc3QgeyBjb2RlOiBjdXJyZW50TG9jYWxlIH0gPSB1c2VMb2NhbGUoKVxuICBjb25zdCB7IGxvY2FsaXphdGlvbiB9ID0gdXNlQ29uZmlnKClcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHlwZW9mIGZpZWxkVmFsdWUgIT09ICdudW1iZXInKVxuICBjb25zdCBkZWZhdWx0TG9jYWxlID1cbiAgICBsb2NhbGl6YXRpb24gJiYgbG9jYWxpemF0aW9uLmRlZmF1bHRMb2NhbGUgPyBsb2NhbGl6YXRpb24uZGVmYXVsdExvY2FsZSA6ICdlbidcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpXG5cbiAgY29uc3Qgb25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgdXNlRmFsbGJhY2sgPSAhY2hlY2tlZFxuXG4gICAgZGlzcGF0Y2hGaWVsZHMoe1xuICAgICAgcGF0aCxcbiAgICAgIHR5cGU6ICdVUERBVEUnLFxuICAgICAgdmFsdWU6IHVzZUZhbGxiYWNrID8gbnVsbCA6IGZpZWxkVmFsdWUgfHwgMCxcbiAgICB9KVxuICAgIHNldE1vZGlmaWVkKHRydWUpXG4gICAgc2V0Q2hlY2tlZCh1c2VGYWxsYmFjaylcbiAgfVxuXG4gIGlmICghbG9jYWxpemVkIHx8IGN1cnJlbnRMb2NhbGUgPT09IGRlZmF1bHRMb2NhbGUgfHwgKGxvY2FsaXphdGlvbiAmJiAhbG9jYWxpemF0aW9uLmZhbGxiYWNrKSkge1xuICAgIC8vIGhpZGUgd2hlbiBmaWVsZCBpcyBub3QgbG9jYWxpemVkIG9yIGVkaXRpbmcgZGVmYXVsdCBsb2NhbGUgb3Igd2hlbiBmYWxsYmFjayBpcyBkaXNhYmxlZFxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBpZiAoZmllbGRWYWx1ZSkge1xuICAgIGxldCBoaWRlQ2hlY2tib3ggPSBmYWxzZVxuICAgIGlmICh0eXBlb2YgZmllbGRWYWx1ZSA9PT0gJ251bWJlcicgJiYgZmllbGRWYWx1ZSA+IDApIGhpZGVDaGVja2JveCA9IHRydWVcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZFZhbHVlKSAmJiBmaWVsZFZhbHVlLmxlbmd0aCA+IDApIGhpZGVDaGVja2JveCA9IHRydWVcblxuICAgIGlmIChoaWRlQ2hlY2tib3gpIHtcbiAgICAgIGlmIChjaGVja2VkKSBzZXRDaGVja2VkKGZhbHNlKSAvLyB1bmNoZWNrIHdoZW4gZmllbGQgaGFzIHZhbHVlXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJhbm5lcj5cbiAgICAgIDxDaGVja2JveElucHV0XG4gICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgIGlkPXtgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9nLCAnX18nKX1gfVxuICAgICAgICBsYWJlbD17dCgnZmFsbGJhY2tUb0RlZmF1bHRMb2NhbGUnKX1cbiAgICAgICAgb25Ub2dnbGU9e29uQ2hhbmdlfVxuICAgICAgLz5cbiAgICA8L0Jhbm5lcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIk51bGxpZnlMb2NhbGVGaWVsZCIsImZpZWxkVmFsdWUiLCJsb2NhbGl6ZWQiLCJwYXRoIiwiZGlzcGF0Y2hGaWVsZHMiLCJzZXRNb2RpZmllZCIsInVzZUZvcm0iLCJjb2RlIiwiY3VycmVudExvY2FsZSIsInVzZUxvY2FsZSIsImxvY2FsaXphdGlvbiIsInVzZUNvbmZpZyIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImRlZmF1bHRMb2NhbGUiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJvbkNoYW5nZSIsInVzZUZhbGxiYWNrIiwidHlwZSIsInZhbHVlIiwiZmFsbGJhY2siLCJoaWRlQ2hlY2tib3giLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJCYW5uZXIiLCJDaGVja2JveElucHV0IiwiaWQiLCJyZXBsYWNlIiwibGFiZWwiLCJvblRvZ2dsZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFjYUE7OztlQUFBQTs7OytEQWRVOzhCQUNRO3dCQUVSO3dCQUNHO3dCQUNBO3lCQUNGO3VCQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdkIsTUFBTUEscUJBQXdELENBQUMsRUFDcEVDLFVBQVUsRUFDVkMsU0FBUyxFQUNUQyxJQUFJLEVBQ0w7SUFDQyxNQUFNLEVBQUVDLGNBQWMsRUFBRUMsV0FBVyxFQUFFLEdBQUdDLElBQUFBLGdCQUFPO0lBQy9DLE1BQU0sRUFBRUMsTUFBTUMsYUFBYSxFQUFFLEdBQUdDLElBQUFBLGlCQUFTO0lBQ3pDLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUdDLElBQUFBLGlCQUFTO0lBQ2xDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHQyxPQUFNQyxRQUFRLENBQVUsT0FBT2QsZUFBZTtJQUM1RSxNQUFNZSxnQkFDSk4sZ0JBQWdCQSxhQUFhTSxhQUFhLEdBQUdOLGFBQWFNLGFBQWEsR0FBRztJQUM1RSxNQUFNLEVBQUVDLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBRTdCLE1BQU1DLFdBQVc7UUFDZixNQUFNQyxjQUFjLENBQUNSO1FBRXJCUixlQUFlO1lBQ2JEO1lBQ0FrQixNQUFNO1lBQ05DLE9BQU9GLGNBQWMsT0FBT25CLGNBQWM7UUFDNUM7UUFDQUksWUFBWTtRQUNaUSxXQUFXTztJQUNiO0lBRUEsSUFBSSxDQUFDbEIsYUFBYU0sa0JBQWtCUSxpQkFBa0JOLGdCQUFnQixDQUFDQSxhQUFhYSxRQUFRLEVBQUc7UUFDN0YsMEZBQTBGO1FBQzFGLE9BQU87SUFDVDtJQUVBLElBQUl0QixZQUFZO1FBQ2QsSUFBSXVCLGVBQWU7UUFDbkIsSUFBSSxPQUFPdkIsZUFBZSxZQUFZQSxhQUFhLEdBQUd1QixlQUFlO1FBQ3JFLElBQUlDLE1BQU1DLE9BQU8sQ0FBQ3pCLGVBQWVBLFdBQVcwQixNQUFNLEdBQUcsR0FBR0gsZUFBZTtRQUV2RSxJQUFJQSxjQUFjO1lBQ2hCLElBQUlaLFNBQVNDLFdBQVcsT0FBTywrQkFBK0I7O1lBQzlELE9BQU87UUFDVDtJQUNGO0lBRUEscUJBQ0UscUJBQUNlLGNBQU0sc0JBQ0wscUJBQUNDLG9CQUFhO1FBQ1pqQixTQUFTQTtRQUNUa0IsSUFBSSxDQUFDLE1BQU0sRUFBRTNCLEtBQUs0QixPQUFPLENBQUMsT0FBTyxNQUFNLENBQUM7UUFDeENDLE9BQU9mLEVBQUU7UUFDVGdCLFVBQVVkOztBQUlsQiJ9