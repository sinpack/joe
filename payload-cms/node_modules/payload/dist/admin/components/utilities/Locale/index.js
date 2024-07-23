"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    LocaleProvider: function() {
        return LocaleProvider;
    },
    default: function() {
        return _default;
    },
    useLocale: function() {
        return useLocale;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _findLocaleFromCode = require("../../../../utilities/findLocaleFromCode");
const _Auth = require("../Auth");
const _Config = require("../Config");
const _Preferences = require("../Preferences");
const _SearchParams = require("../SearchParams");
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
const LocaleContext = /*#__PURE__*/ (0, _react.createContext)({});
const LocaleProvider = ({ children })=>{
    const { localization } = (0, _Config.useConfig)();
    const { refreshPermissions, user } = (0, _Auth.useAuth)();
    const defaultLocale = localization && localization.defaultLocale ? localization.defaultLocale : 'en';
    const searchParams = (0, _SearchParams.useSearchParams)();
    const [localeCode, setLocaleCode] = (0, _react.useState)(searchParams?.locale || defaultLocale);
    const [locale, setLocale] = (0, _react.useState)(localization && (0, _findLocaleFromCode.findLocaleFromCode)(localization, localeCode));
    const { getPreference, setPreference } = (0, _Preferences.usePreferences)();
    const localeFromParams = searchParams.locale;
    const handleLocaleChange = _react.default.useCallback((newLocaleCode)=>{
        if (!localization) return;
        if (localization.localeCodes.indexOf(newLocaleCode) > -1) {
            setLocaleCode(newLocaleCode);
            setLocale((0, _findLocaleFromCode.findLocaleFromCode)(localization, newLocaleCode));
            if (user) {
                void setPreference('locale', newLocaleCode);
                void refreshPermissions({
                    locale: newLocaleCode
                });
            }
        }
    }, [
        localization,
        setPreference,
        user,
        refreshPermissions
    ]);
    (0, _react.useEffect)(()=>{
        if (!localization) {
            return;
        }
        // set locale from search param
        if (localeFromParams && localization.localeCodes.indexOf(localeFromParams) > -1) {
            handleLocaleChange(localeFromParams);
            return;
        }
        // set locale from preferences or default
        const initializeLocale = async ()=>{
            let preferenceLocale;
            if (user) {
                preferenceLocale = await getPreference('locale');
                handleLocaleChange(preferenceLocale);
                return;
            }
            handleLocaleChange(defaultLocale);
        };
        void initializeLocale();
    }, [
        defaultLocale,
        getPreference,
        handleLocaleChange,
        localeFromParams,
        localization,
        user
    ]);
    return /*#__PURE__*/ _react.default.createElement(LocaleContext.Provider, {
        value: locale
    }, children);
};
const useLocale = ()=>(0, _react.useContext)(LocaleContext);
const _default = LocaleContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9Mb2NhbGUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgTG9jYWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgeyBmaW5kTG9jYWxlRnJvbUNvZGUgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZmluZExvY2FsZUZyb21Db2RlJ1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL0F1dGgnXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi9Db25maWcnXG5pbXBvcnQgeyB1c2VQcmVmZXJlbmNlcyB9IGZyb20gJy4uL1ByZWZlcmVuY2VzJ1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vU2VhcmNoUGFyYW1zJ1xuXG5jb25zdCBMb2NhbGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBMb2NhbGUpXG5cbmV4cG9ydCBjb25zdCBMb2NhbGVQcm92aWRlcjogUmVhY3QuRkM8eyBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZSB9PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBsb2NhbGl6YXRpb24gfSA9IHVzZUNvbmZpZygpXG5cbiAgY29uc3QgeyByZWZyZXNoUGVybWlzc2lvbnMsIHVzZXIgfSA9IHVzZUF1dGgoKVxuICBjb25zdCBkZWZhdWx0TG9jYWxlID1cbiAgICBsb2NhbGl6YXRpb24gJiYgbG9jYWxpemF0aW9uLmRlZmF1bHRMb2NhbGUgPyBsb2NhbGl6YXRpb24uZGVmYXVsdExvY2FsZSA6ICdlbidcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKClcbiAgY29uc3QgW2xvY2FsZUNvZGUsIHNldExvY2FsZUNvZGVdID0gdXNlU3RhdGU8c3RyaW5nPihcbiAgICAoc2VhcmNoUGFyYW1zPy5sb2NhbGUgYXMgc3RyaW5nKSB8fCBkZWZhdWx0TG9jYWxlLFxuICApXG4gIGNvbnN0IFtsb2NhbGUsIHNldExvY2FsZV0gPSB1c2VTdGF0ZTxMb2NhbGUgfCBudWxsPihcbiAgICBsb2NhbGl6YXRpb24gJiYgZmluZExvY2FsZUZyb21Db2RlKGxvY2FsaXphdGlvbiwgbG9jYWxlQ29kZSksXG4gIClcbiAgY29uc3QgeyBnZXRQcmVmZXJlbmNlLCBzZXRQcmVmZXJlbmNlIH0gPSB1c2VQcmVmZXJlbmNlcygpXG4gIGNvbnN0IGxvY2FsZUZyb21QYXJhbXMgPSBzZWFyY2hQYXJhbXMubG9jYWxlXG5cbiAgY29uc3QgaGFuZGxlTG9jYWxlQ2hhbmdlID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKG5ld0xvY2FsZUNvZGU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCFsb2NhbGl6YXRpb24pIHJldHVyblxuXG4gICAgICBpZiAobG9jYWxpemF0aW9uLmxvY2FsZUNvZGVzLmluZGV4T2YobmV3TG9jYWxlQ29kZSkgPiAtMSkge1xuICAgICAgICBzZXRMb2NhbGVDb2RlKG5ld0xvY2FsZUNvZGUpXG4gICAgICAgIHNldExvY2FsZShmaW5kTG9jYWxlRnJvbUNvZGUobG9jYWxpemF0aW9uLCBuZXdMb2NhbGVDb2RlKSlcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICB2b2lkIHNldFByZWZlcmVuY2UoJ2xvY2FsZScsIG5ld0xvY2FsZUNvZGUpXG4gICAgICAgICAgdm9pZCByZWZyZXNoUGVybWlzc2lvbnMoeyBsb2NhbGU6IG5ld0xvY2FsZUNvZGUgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2xvY2FsaXphdGlvbiwgc2V0UHJlZmVyZW5jZSwgdXNlciwgcmVmcmVzaFBlcm1pc3Npb25zXSxcbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsb2NhbGl6YXRpb24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHNldCBsb2NhbGUgZnJvbSBzZWFyY2ggcGFyYW1cbiAgICBpZiAobG9jYWxlRnJvbVBhcmFtcyAmJiBsb2NhbGl6YXRpb24ubG9jYWxlQ29kZXMuaW5kZXhPZihsb2NhbGVGcm9tUGFyYW1zIGFzIHN0cmluZykgPiAtMSkge1xuICAgICAgaGFuZGxlTG9jYWxlQ2hhbmdlKGxvY2FsZUZyb21QYXJhbXMgYXMgc3RyaW5nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gc2V0IGxvY2FsZSBmcm9tIHByZWZlcmVuY2VzIG9yIGRlZmF1bHRcbiAgICBjb25zdCBpbml0aWFsaXplTG9jYWxlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IHByZWZlcmVuY2VMb2NhbGU6IHN0cmluZ1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgcHJlZmVyZW5jZUxvY2FsZSA9IGF3YWl0IGdldFByZWZlcmVuY2U8c3RyaW5nPignbG9jYWxlJylcbiAgICAgICAgaGFuZGxlTG9jYWxlQ2hhbmdlKHByZWZlcmVuY2VMb2NhbGUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaGFuZGxlTG9jYWxlQ2hhbmdlKGRlZmF1bHRMb2NhbGUpXG4gICAgfVxuXG4gICAgdm9pZCBpbml0aWFsaXplTG9jYWxlKClcbiAgfSwgW2RlZmF1bHRMb2NhbGUsIGdldFByZWZlcmVuY2UsIGhhbmRsZUxvY2FsZUNoYW5nZSwgbG9jYWxlRnJvbVBhcmFtcywgbG9jYWxpemF0aW9uLCB1c2VyXSlcblxuICByZXR1cm4gPExvY2FsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2xvY2FsZX0+e2NoaWxkcmVufTwvTG9jYWxlQ29udGV4dC5Qcm92aWRlcj5cbn1cblxuLyoqXG4gKiBBIGhvb2sgdGhhdCByZXR1cm5zIHRoZSBjdXJyZW50IGxvY2FsZSBvYmplY3QuXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VMb2NhbGUgPSAoKTogTG9jYWxlID0+IHVzZUNvbnRleHQoTG9jYWxlQ29udGV4dClcblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxlQ29udGV4dFxuIl0sIm5hbWVzIjpbIkxvY2FsZVByb3ZpZGVyIiwidXNlTG9jYWxlIiwiTG9jYWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjaGlsZHJlbiIsImxvY2FsaXphdGlvbiIsInVzZUNvbmZpZyIsInJlZnJlc2hQZXJtaXNzaW9ucyIsInVzZXIiLCJ1c2VBdXRoIiwiZGVmYXVsdExvY2FsZSIsInNlYXJjaFBhcmFtcyIsInVzZVNlYXJjaFBhcmFtcyIsImxvY2FsZUNvZGUiLCJzZXRMb2NhbGVDb2RlIiwidXNlU3RhdGUiLCJsb2NhbGUiLCJzZXRMb2NhbGUiLCJmaW5kTG9jYWxlRnJvbUNvZGUiLCJnZXRQcmVmZXJlbmNlIiwic2V0UHJlZmVyZW5jZSIsInVzZVByZWZlcmVuY2VzIiwibG9jYWxlRnJvbVBhcmFtcyIsImhhbmRsZUxvY2FsZUNoYW5nZSIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJuZXdMb2NhbGVDb2RlIiwibG9jYWxlQ29kZXMiLCJpbmRleE9mIiwidXNlRWZmZWN0IiwiaW5pdGlhbGl6ZUxvY2FsZSIsInByZWZlcmVuY2VMb2NhbGUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ29udGV4dCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBWWFBLGNBQWM7ZUFBZEE7O0lBaUViLE9BQTRCO2VBQTVCOztJQUZhQyxTQUFTO2VBQVRBOzs7K0RBM0V5RDtvQ0FJbkM7c0JBQ1g7d0JBQ0U7NkJBQ0s7OEJBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxNQUFNQyw4QkFBZ0JDLElBQUFBLG9CQUFhLEVBQUMsQ0FBQztBQUU5QixNQUFNSCxpQkFBMkQsQ0FBQyxFQUFFSSxRQUFRLEVBQUU7SUFDbkYsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBR0MsSUFBQUEsaUJBQVM7SUFFbEMsTUFBTSxFQUFFQyxrQkFBa0IsRUFBRUMsSUFBSSxFQUFFLEdBQUdDLElBQUFBLGFBQU87SUFDNUMsTUFBTUMsZ0JBQ0pMLGdCQUFnQkEsYUFBYUssYUFBYSxHQUFHTCxhQUFhSyxhQUFhLEdBQUc7SUFDNUUsTUFBTUMsZUFBZUMsSUFBQUEsNkJBQWU7SUFDcEMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdDLElBQUFBLGVBQVEsRUFDMUMsQUFBQ0osY0FBY0ssVUFBcUJOO0lBRXRDLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHRixJQUFBQSxlQUFRLEVBQ2xDVixnQkFBZ0JhLElBQUFBLHNDQUFrQixFQUFDYixjQUFjUTtJQUVuRCxNQUFNLEVBQUVNLGFBQWEsRUFBRUMsYUFBYSxFQUFFLEdBQUdDLElBQUFBLDJCQUFjO0lBQ3ZELE1BQU1DLG1CQUFtQlgsYUFBYUssTUFBTTtJQUU1QyxNQUFNTyxxQkFBcUJDLGNBQUssQ0FBQ0MsV0FBVyxDQUMxQyxDQUFDQztRQUNDLElBQUksQ0FBQ3JCLGNBQWM7UUFFbkIsSUFBSUEsYUFBYXNCLFdBQVcsQ0FBQ0MsT0FBTyxDQUFDRixpQkFBaUIsQ0FBQyxHQUFHO1lBQ3hEWixjQUFjWTtZQUNkVCxVQUFVQyxJQUFBQSxzQ0FBa0IsRUFBQ2IsY0FBY3FCO1lBQzNDLElBQUlsQixNQUFNO2dCQUNSLEtBQUtZLGNBQWMsVUFBVU07Z0JBQzdCLEtBQUtuQixtQkFBbUI7b0JBQUVTLFFBQVFVO2dCQUFjO1lBQ2xEO1FBQ0Y7SUFDRixHQUNBO1FBQUNyQjtRQUFjZTtRQUFlWjtRQUFNRDtLQUFtQjtJQUd6RHNCLElBQUFBLGdCQUFTLEVBQUM7UUFDUixJQUFJLENBQUN4QixjQUFjO1lBQ2pCO1FBQ0Y7UUFFQSwrQkFBK0I7UUFDL0IsSUFBSWlCLG9CQUFvQmpCLGFBQWFzQixXQUFXLENBQUNDLE9BQU8sQ0FBQ04sb0JBQThCLENBQUMsR0FBRztZQUN6RkMsbUJBQW1CRDtZQUNuQjtRQUNGO1FBRUEseUNBQXlDO1FBQ3pDLE1BQU1RLG1CQUFtQjtZQUN2QixJQUFJQztZQUNKLElBQUl2QixNQUFNO2dCQUNSdUIsbUJBQW1CLE1BQU1aLGNBQXNCO2dCQUMvQ0ksbUJBQW1CUTtnQkFDbkI7WUFDRjtZQUNBUixtQkFBbUJiO1FBQ3JCO1FBRUEsS0FBS29CO0lBQ1AsR0FBRztRQUFDcEI7UUFBZVM7UUFBZUk7UUFBb0JEO1FBQWtCakI7UUFBY0c7S0FBSztJQUUzRixxQkFBTyw2QkFBQ04sY0FBYzhCLFFBQVE7UUFBQ0MsT0FBT2pCO09BQVNaO0FBQ2pEO0FBS08sTUFBTUgsWUFBWSxJQUFjaUMsSUFBQUEsaUJBQVUsRUFBQ2hDO01BRWxELFdBQWVBIn0=