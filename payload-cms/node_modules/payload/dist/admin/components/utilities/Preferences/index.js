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
    PreferencesProvider: function() {
        return PreferencesProvider;
    },
    usePreferences: function() {
        return usePreferences;
    }
});
const _deepequal = /*#__PURE__*/ _interop_require_default(require("deep-equal"));
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _api = require("../../../api");
const _Auth = require("../Auth");
const _Config = require("../Config");
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
const Context = /*#__PURE__*/ (0, _react.createContext)({});
const requestOptions = (value, language)=>({
        body: JSON.stringify({
            value
        }),
        headers: {
            'Accept-Language': language,
            'Content-Type': 'application/json'
        }
    });
const PreferencesProvider = ({ children })=>{
    const contextRef = (0, _react.useRef)({});
    const preferencesRef = (0, _react.useRef)({});
    const pendingUpdate = (0, _react.useRef)({});
    const config = (0, _Config.useConfig)();
    const { user } = (0, _Auth.useAuth)();
    const { i18n } = (0, _reacti18next.useTranslation)();
    const { routes: { api }, serverURL } = config;
    (0, _react.useEffect)(()=>{
        if (!user) {
            // clear preferences between users
            preferencesRef.current = {};
        }
    }, [
        user
    ]);
    const getPreference = (0, _react.useCallback)(async (key)=>{
        const prefs = preferencesRef.current;
        if (typeof prefs[key] !== 'undefined') return prefs[key];
        const promise = new Promise((resolve)=>{
            void (async ()=>{
                const request = await _api.requests.get(`${serverURL}${api}/payload-preferences/${key}`, {
                    headers: {
                        'Accept-Language': i18n.language
                    }
                });
                let value = null;
                if (request.status === 200) {
                    const preference = await request.json();
                    value = preference.value;
                }
                preferencesRef.current[key] = value;
                resolve(value);
            })();
        });
        prefs[key] = promise;
        return promise;
    }, [
        i18n.language,
        api,
        preferencesRef,
        serverURL
    ]);
    const setPreference = (0, _react.useCallback)(async (key, value, merge = false)=>{
        if (merge === false) {
            preferencesRef.current[key] = value;
            await _api.requests.post(`${serverURL}${api}/payload-preferences/${key}`, requestOptions(value, i18n.language));
            return;
        }
        let newValue = value;
        const currentPreference = await getPreference(key);
        // handle value objects where multiple values can be set under one key
        if (typeof value === 'object' && typeof currentPreference === 'object' && typeof newValue === 'object') {
            // merge the value with any existing preference for the key
            newValue = {
                ...currentPreference || {},
                ...value
            };
            if ((0, _deepequal.default)(newValue, currentPreference)) {
                return;
            }
            // add the requested changes to a pendingUpdate batch for the key
            pendingUpdate.current[key] = {
                ...pendingUpdate.current[key],
                ...newValue
            };
        } else {
            if (newValue === currentPreference) {
                return;
            }
            pendingUpdate.current[key] = newValue;
        }
        const updatePreference = async ()=>{
            // compare the value stored in context before sending to eliminate duplicate requests
            if ((0, _deepequal.default)(pendingUpdate.current[key], preferencesRef.current[key])) {
                return;
            }
            // preference set in context here to prevent other updatePreference at the same time
            preferencesRef.current[key] = pendingUpdate.current[key];
            await _api.requests.post(`${serverURL}${api}/payload-preferences/${key}`, requestOptions(preferencesRef.current[key], i18n.language));
            // reset any changes for this key after sending the request
            delete pendingUpdate.current[key];
        };
        // use timeout to allow multiple changes of different values using the same key in one request
        setTimeout(()=>{
            void updatePreference();
        });
    }, [
        api,
        getPreference,
        i18n.language,
        pendingUpdate,
        serverURL
    ]);
    contextRef.current.getPreference = getPreference;
    contextRef.current.setPreference = setPreference;
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: contextRef.current
    }, children);
};
const usePreferences = ()=>(0, _react.useContext)(Context);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9QcmVmZXJlbmNlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzRGVlcEVxdWFsIGZyb20gJ2RlZXAtZXF1YWwnXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCB7IHJlcXVlc3RzIH0gZnJvbSAnLi4vLi4vLi4vYXBpJ1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL0F1dGgnXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi9Db25maWcnXG5cbnR5cGUgUHJlZmVyZW5jZXNDb250ZXh0ID0ge1xuICBnZXRQcmVmZXJlbmNlOiA8VCA9IGFueT4oa2V5OiBzdHJpbmcpID0+IFByb21pc2U8VD4gfCBUXG4gIC8qKlxuICAgKiBAcGFyYW0ga2V5IC0gYSBzdHJpbmcgaWRlbnRpZmllciBmb3IgdGhlIHByb3BlcnR5IGJlaW5nIHNldFxuICAgKiBAcGFyYW0gdmFsdWUgLSBwcmVmZXJlbmNlIGRhdGEgdG8gc3RvcmVcbiAgICogQHBhcmFtIG1lcmdlIC0gd2hlbiB0cnVlIHdpbGwgY29tYmluZSB0aGUgZXhpc3RpbmcgcHJlZmVyZW5jZSBvYmplY3QgYmF0Y2ggdGhlIGNoYW5nZSBpbnRvIG9uZSByZXF1ZXN0IGZvciBvYmplY3RzLCBkZWZhdWx0ID0gZmFsc2VcbiAgICovXG4gIHNldFByZWZlcmVuY2U6IDxUID0gYW55PihrZXk6IHN0cmluZywgdmFsdWU6IFQsIG1lcmdlPzogYm9vbGVhbikgPT4gUHJvbWlzZTx2b2lkPlxufVxuXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBQcmVmZXJlbmNlc0NvbnRleHQpXG5cbmNvbnN0IHJlcXVlc3RPcHRpb25zID0gKHZhbHVlLCBsYW5ndWFnZSkgPT4gKHtcbiAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB2YWx1ZSB9KSxcbiAgaGVhZGVyczoge1xuICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBsYW5ndWFnZSxcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IFByZWZlcmVuY2VzUHJvdmlkZXI6IFJlYWN0LkZDPHsgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGNvbnRleHRSZWYgPSB1c2VSZWYoe30gYXMgUHJlZmVyZW5jZXNDb250ZXh0KVxuICBjb25zdCBwcmVmZXJlbmNlc1JlZiA9IHVzZVJlZih7fSlcbiAgY29uc3QgcGVuZGluZ1VwZGF0ZSA9IHVzZVJlZih7fSlcbiAgY29uc3QgY29uZmlnID0gdXNlQ29uZmlnKClcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKClcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IHtcbiAgICByb3V0ZXM6IHsgYXBpIH0sXG4gICAgc2VydmVyVVJMLFxuICB9ID0gY29uZmlnXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIC8vIGNsZWFyIHByZWZlcmVuY2VzIGJldHdlZW4gdXNlcnNcbiAgICAgIHByZWZlcmVuY2VzUmVmLmN1cnJlbnQgPSB7fVxuICAgIH1cbiAgfSwgW3VzZXJdKVxuXG4gIGNvbnN0IGdldFByZWZlcmVuY2UgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyA8VCA9IGFueSw+KGtleTogc3RyaW5nKTogUHJvbWlzZTxUPiA9PiB7XG4gICAgICBjb25zdCBwcmVmcyA9IHByZWZlcmVuY2VzUmVmLmN1cnJlbnRcbiAgICAgIGlmICh0eXBlb2YgcHJlZnNba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBwcmVmc1trZXldXG4gICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmU6ICh2YWx1ZTogVCkgPT4gdm9pZCkgPT4ge1xuICAgICAgICB2b2lkIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHJlcXVlc3RzLmdldChgJHtzZXJ2ZXJVUkx9JHthcGl9L3BheWxvYWQtcHJlZmVyZW5jZXMvJHtrZXl9YCwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgICBsZXQgdmFsdWUgPSBudWxsXG4gICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnN0IHByZWZlcmVuY2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxuICAgICAgICAgICAgdmFsdWUgPSBwcmVmZXJlbmNlLnZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICAgIHByZWZlcmVuY2VzUmVmLmN1cnJlbnRba2V5XSA9IHZhbHVlXG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSlcbiAgICAgICAgfSkoKVxuICAgICAgfSlcbiAgICAgIHByZWZzW2tleV0gPSBwcm9taXNlXG4gICAgICByZXR1cm4gcHJvbWlzZVxuICAgIH0sXG4gICAgW2kxOG4ubGFuZ3VhZ2UsIGFwaSwgcHJlZmVyZW5jZXNSZWYsIHNlcnZlclVSTF0sXG4gIClcblxuICBjb25zdCBzZXRQcmVmZXJlbmNlID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKGtleTogc3RyaW5nLCB2YWx1ZTogdW5rbm93biwgbWVyZ2UgPSBmYWxzZSk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgaWYgKG1lcmdlID09PSBmYWxzZSkge1xuICAgICAgICBwcmVmZXJlbmNlc1JlZi5jdXJyZW50W2tleV0gPSB2YWx1ZVxuICAgICAgICBhd2FpdCByZXF1ZXN0cy5wb3N0KFxuICAgICAgICAgIGAke3NlcnZlclVSTH0ke2FwaX0vcGF5bG9hZC1wcmVmZXJlbmNlcy8ke2tleX1gLFxuICAgICAgICAgIHJlcXVlc3RPcHRpb25zKHZhbHVlLCBpMThuLmxhbmd1YWdlKSxcbiAgICAgICAgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IG5ld1ZhbHVlID0gdmFsdWVcbiAgICAgIGNvbnN0IGN1cnJlbnRQcmVmZXJlbmNlID0gYXdhaXQgZ2V0UHJlZmVyZW5jZShrZXkpXG4gICAgICAvLyBoYW5kbGUgdmFsdWUgb2JqZWN0cyB3aGVyZSBtdWx0aXBsZSB2YWx1ZXMgY2FuIGJlIHNldCB1bmRlciBvbmUga2V5XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgdHlwZW9mIGN1cnJlbnRQcmVmZXJlbmNlID09PSAnb2JqZWN0JyAmJlxuICAgICAgICB0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnXG4gICAgICApIHtcbiAgICAgICAgLy8gbWVyZ2UgdGhlIHZhbHVlIHdpdGggYW55IGV4aXN0aW5nIHByZWZlcmVuY2UgZm9yIHRoZSBrZXlcbiAgICAgICAgbmV3VmFsdWUgPSB7IC4uLihjdXJyZW50UHJlZmVyZW5jZSB8fCB7fSksIC4uLnZhbHVlIH1cbiAgICAgICAgaWYgKGlzRGVlcEVxdWFsKG5ld1ZhbHVlLCBjdXJyZW50UHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICAvLyBhZGQgdGhlIHJlcXVlc3RlZCBjaGFuZ2VzIHRvIGEgcGVuZGluZ1VwZGF0ZSBiYXRjaCBmb3IgdGhlIGtleVxuICAgICAgICBwZW5kaW5nVXBkYXRlLmN1cnJlbnRba2V5XSA9IHtcbiAgICAgICAgICAuLi5wZW5kaW5nVXBkYXRlLmN1cnJlbnRba2V5XSxcbiAgICAgICAgICAuLi4obmV3VmFsdWUgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pLFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobmV3VmFsdWUgPT09IGN1cnJlbnRQcmVmZXJlbmNlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgcGVuZGluZ1VwZGF0ZS5jdXJyZW50W2tleV0gPSBuZXdWYWx1ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCB1cGRhdGVQcmVmZXJlbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyBjb21wYXJlIHRoZSB2YWx1ZSBzdG9yZWQgaW4gY29udGV4dCBiZWZvcmUgc2VuZGluZyB0byBlbGltaW5hdGUgZHVwbGljYXRlIHJlcXVlc3RzXG4gICAgICAgIGlmIChpc0RlZXBFcXVhbChwZW5kaW5nVXBkYXRlLmN1cnJlbnRba2V5XSwgcHJlZmVyZW5jZXNSZWYuY3VycmVudFtrZXldKSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vIHByZWZlcmVuY2Ugc2V0IGluIGNvbnRleHQgaGVyZSB0byBwcmV2ZW50IG90aGVyIHVwZGF0ZVByZWZlcmVuY2UgYXQgdGhlIHNhbWUgdGltZVxuICAgICAgICBwcmVmZXJlbmNlc1JlZi5jdXJyZW50W2tleV0gPSBwZW5kaW5nVXBkYXRlLmN1cnJlbnRba2V5XVxuXG4gICAgICAgIGF3YWl0IHJlcXVlc3RzLnBvc3QoXG4gICAgICAgICAgYCR7c2VydmVyVVJMfSR7YXBpfS9wYXlsb2FkLXByZWZlcmVuY2VzLyR7a2V5fWAsXG4gICAgICAgICAgcmVxdWVzdE9wdGlvbnMocHJlZmVyZW5jZXNSZWYuY3VycmVudFtrZXldLCBpMThuLmxhbmd1YWdlKSxcbiAgICAgICAgKVxuICAgICAgICAvLyByZXNldCBhbnkgY2hhbmdlcyBmb3IgdGhpcyBrZXkgYWZ0ZXIgc2VuZGluZyB0aGUgcmVxdWVzdFxuICAgICAgICBkZWxldGUgcGVuZGluZ1VwZGF0ZS5jdXJyZW50W2tleV1cbiAgICAgIH1cblxuICAgICAgLy8gdXNlIHRpbWVvdXQgdG8gYWxsb3cgbXVsdGlwbGUgY2hhbmdlcyBvZiBkaWZmZXJlbnQgdmFsdWVzIHVzaW5nIHRoZSBzYW1lIGtleSBpbiBvbmUgcmVxdWVzdFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHZvaWQgdXBkYXRlUHJlZmVyZW5jZSgpXG4gICAgICB9KVxuICAgIH0sXG4gICAgW2FwaSwgZ2V0UHJlZmVyZW5jZSwgaTE4bi5sYW5ndWFnZSwgcGVuZGluZ1VwZGF0ZSwgc2VydmVyVVJMXSxcbiAgKVxuXG4gIGNvbnRleHRSZWYuY3VycmVudC5nZXRQcmVmZXJlbmNlID0gZ2V0UHJlZmVyZW5jZVxuICBjb250ZXh0UmVmLmN1cnJlbnQuc2V0UHJlZmVyZW5jZSA9IHNldFByZWZlcmVuY2VcblxuICByZXR1cm4gPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRSZWYuY3VycmVudH0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj5cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVByZWZlcmVuY2VzID0gKCk6IFByZWZlcmVuY2VzQ29udGV4dCA9PiB1c2VDb250ZXh0KENvbnRleHQpXG4iXSwibmFtZXMiOlsiUHJlZmVyZW5jZXNQcm92aWRlciIsInVzZVByZWZlcmVuY2VzIiwiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJyZXF1ZXN0T3B0aW9ucyIsInZhbHVlIiwibGFuZ3VhZ2UiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJjaGlsZHJlbiIsImNvbnRleHRSZWYiLCJ1c2VSZWYiLCJwcmVmZXJlbmNlc1JlZiIsInBlbmRpbmdVcGRhdGUiLCJjb25maWciLCJ1c2VDb25maWciLCJ1c2VyIiwidXNlQXV0aCIsImkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsInJvdXRlcyIsImFwaSIsInNlcnZlclVSTCIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJnZXRQcmVmZXJlbmNlIiwidXNlQ2FsbGJhY2siLCJrZXkiLCJwcmVmcyIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlcXVlc3QiLCJyZXF1ZXN0cyIsImdldCIsInN0YXR1cyIsInByZWZlcmVuY2UiLCJqc29uIiwic2V0UHJlZmVyZW5jZSIsIm1lcmdlIiwicG9zdCIsIm5ld1ZhbHVlIiwiY3VycmVudFByZWZlcmVuY2UiLCJpc0RlZXBFcXVhbCIsInVwZGF0ZVByZWZlcmVuY2UiLCJzZXRUaW1lb3V0IiwiUHJvdmlkZXIiLCJ1c2VDb250ZXh0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUE0QmFBLG1CQUFtQjtlQUFuQkE7O0lBK0dBQyxjQUFjO2VBQWRBOzs7a0VBM0lXOytEQUN5RDs4QkFDbEQ7cUJBRU47c0JBQ0Q7d0JBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTFCLE1BQU1DLHdCQUFVQyxJQUFBQSxvQkFBYSxFQUFDLENBQUM7QUFFL0IsTUFBTUMsaUJBQWlCLENBQUNDLE9BQU9DLFdBQWMsQ0FBQTtRQUMzQ0MsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQUVKO1FBQU07UUFDN0JLLFNBQVM7WUFDUCxtQkFBbUJKO1lBQ25CLGdCQUFnQjtRQUNsQjtJQUNGLENBQUE7QUFFTyxNQUFNTixzQkFBZ0UsQ0FBQyxFQUFFVyxRQUFRLEVBQUU7SUFDeEYsTUFBTUMsYUFBYUMsSUFBQUEsYUFBTSxFQUFDLENBQUM7SUFDM0IsTUFBTUMsaUJBQWlCRCxJQUFBQSxhQUFNLEVBQUMsQ0FBQztJQUMvQixNQUFNRSxnQkFBZ0JGLElBQUFBLGFBQU0sRUFBQyxDQUFDO0lBQzlCLE1BQU1H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