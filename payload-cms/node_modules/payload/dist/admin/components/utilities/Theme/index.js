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
    ThemeProvider: function() {
        return ThemeProvider;
    },
    default: function() {
        return _default;
    },
    useTheme: function() {
        return useTheme;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
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
const initialContext = {
    autoMode: true,
    setTheme: ()=>null,
    theme: 'light'
};
const Context = /*#__PURE__*/ (0, _react.createContext)(initialContext);
const localStorageKey = 'payload-theme';
const getTheme = ()=>{
    let theme;
    const themeFromStorage = window.localStorage.getItem(localStorageKey);
    if (themeFromStorage === 'light' || themeFromStorage === 'dark') {
        theme = themeFromStorage;
    } else {
        theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
};
const ThemeProvider = ({ children })=>{
    const [theme, setThemeState] = (0, _react.useState)(getTheme);
    const [autoMode, setAutoMode] = (0, _react.useState)(()=>{
        const themeFromStorage = window.localStorage.getItem(localStorageKey);
        return !themeFromStorage;
    });
    const setTheme = (0, _react.useCallback)((themeToSet)=>{
        if (themeToSet === 'light' || themeToSet === 'dark') {
            setThemeState(themeToSet);
            setAutoMode(false);
            window.localStorage.setItem(localStorageKey, themeToSet);
            document.documentElement.setAttribute('data-theme', themeToSet);
        } else if (themeToSet === 'auto') {
            const existingThemeFromStorage = window.localStorage.getItem(localStorageKey);
            if (existingThemeFromStorage) window.localStorage.removeItem(localStorageKey);
            const themeFromOS = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', themeFromOS);
            setAutoMode(true);
            setThemeState(themeFromOS);
        }
    }, []);
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: {
            autoMode,
            setTheme,
            theme
        }
    }, children);
};
const useTheme = ()=>(0, _react.useContext)(Context);
const _default = Context;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9UaGVtZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgdHlwZSBUaGVtZSA9ICdkYXJrJyB8ICdsaWdodCdcblxuZXhwb3J0IHR5cGUgVGhlbWVDb250ZXh0ID0ge1xuICBhdXRvTW9kZTogYm9vbGVhblxuICBzZXRUaGVtZTogKHRoZW1lOiBUaGVtZSkgPT4gdm9pZFxuICB0aGVtZTogVGhlbWVcbn1cblxuY29uc3QgaW5pdGlhbENvbnRleHQ6IFRoZW1lQ29udGV4dCA9IHtcbiAgYXV0b01vZGU6IHRydWUsXG4gIHNldFRoZW1lOiAoKSA9PiBudWxsLFxuICB0aGVtZTogJ2xpZ2h0Jyxcbn1cblxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbENvbnRleHQpXG5cbmNvbnN0IGxvY2FsU3RvcmFnZUtleSA9ICdwYXlsb2FkLXRoZW1lJ1xuXG5jb25zdCBnZXRUaGVtZSA9ICgpID0+IHtcbiAgbGV0IHRoZW1lOiBUaGVtZVxuICBjb25zdCB0aGVtZUZyb21TdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUtleSlcblxuICBpZiAodGhlbWVGcm9tU3RvcmFnZSA9PT0gJ2xpZ2h0JyB8fCB0aGVtZUZyb21TdG9yYWdlID09PSAnZGFyaycpIHtcbiAgICB0aGVtZSA9IHRoZW1lRnJvbVN0b3JhZ2VcbiAgfSBlbHNlIHtcbiAgICB0aGVtZSA9XG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXNcbiAgICAgICAgPyAnZGFyaydcbiAgICAgICAgOiAnbGlnaHQnXG4gIH1cblxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgdGhlbWUpXG4gIHJldHVybiB0aGVtZVxufVxuXG5leHBvcnQgY29uc3QgVGhlbWVQcm92aWRlcjogUmVhY3QuRkM8eyBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZSB9PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZVN0YXRlXSA9IHVzZVN0YXRlPFRoZW1lPihnZXRUaGVtZSlcbiAgY29uc3QgW2F1dG9Nb2RlLCBzZXRBdXRvTW9kZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgY29uc3QgdGhlbWVGcm9tU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VLZXkpXG4gICAgcmV0dXJuICF0aGVtZUZyb21TdG9yYWdlXG4gIH0pXG5cbiAgY29uc3Qgc2V0VGhlbWUgPSB1c2VDYWxsYmFjaygodGhlbWVUb1NldDogJ2F1dG8nIHwgVGhlbWUpID0+IHtcbiAgICBpZiAodGhlbWVUb1NldCA9PT0gJ2xpZ2h0JyB8fCB0aGVtZVRvU2V0ID09PSAnZGFyaycpIHtcbiAgICAgIHNldFRoZW1lU3RhdGUodGhlbWVUb1NldClcbiAgICAgIHNldEF1dG9Nb2RlKGZhbHNlKVxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUtleSwgdGhlbWVUb1NldClcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCB0aGVtZVRvU2V0KVxuICAgIH0gZWxzZSBpZiAodGhlbWVUb1NldCA9PT0gJ2F1dG8nKSB7XG4gICAgICBjb25zdCBleGlzdGluZ1RoZW1lRnJvbVN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlS2V5KVxuICAgICAgaWYgKGV4aXN0aW5nVGhlbWVGcm9tU3RvcmFnZSkgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGxvY2FsU3RvcmFnZUtleSlcbiAgICAgIGNvbnN0IHRoZW1lRnJvbU9TID1cbiAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzXG4gICAgICAgICAgPyAnZGFyaydcbiAgICAgICAgICA6ICdsaWdodCdcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCB0aGVtZUZyb21PUylcbiAgICAgIHNldEF1dG9Nb2RlKHRydWUpXG4gICAgICBzZXRUaGVtZVN0YXRlKHRoZW1lRnJvbU9TKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGF1dG9Nb2RlLCBzZXRUaGVtZSwgdGhlbWUgfX0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj5cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVRoZW1lID0gKCk6IFRoZW1lQ29udGV4dCA9PiB1c2VDb250ZXh0KENvbnRleHQpXG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRcbiJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwidXNlVGhlbWUiLCJpbml0aWFsQ29udGV4dCIsImF1dG9Nb2RlIiwic2V0VGhlbWUiLCJ0aGVtZSIsIkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwibG9jYWxTdG9yYWdlS2V5IiwiZ2V0VGhlbWUiLCJ0aGVtZUZyb21TdG9yYWdlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjaGlsZHJlbiIsInNldFRoZW1lU3RhdGUiLCJ1c2VTdGF0ZSIsInNldEF1dG9Nb2RlIiwidXNlQ2FsbGJhY2siLCJ0aGVtZVRvU2V0Iiwic2V0SXRlbSIsImV4aXN0aW5nVGhlbWVGcm9tU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJ0aGVtZUZyb21PUyIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDb250ZXh0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFxQ2FBLGFBQWE7ZUFBYkE7O0lBK0JiLE9BQXNCO2VBQXRCOztJQUZhQyxRQUFRO2VBQVJBOzs7K0RBbEUyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXhFLE1BQU1DLGlCQUErQjtJQUNuQ0MsVUFBVTtJQUNWQyxVQUFVLElBQU07SUFDaEJDLE9BQU87QUFDVDtBQUVBLE1BQU1DLHdCQUFVQyxJQUFBQSxvQkFBYSxFQUFDTDtBQUU5QixNQUFNTSxrQkFBa0I7QUFFeEIsTUFBTUMsV0FBVztJQUNmLElBQUlKO0lBQ0osTUFBTUssbUJBQW1CQyxPQUFPQyxZQUFZLENBQUNDLE9BQU8sQ0FBQ0w7SUFFckQsSUFBSUUscUJBQXFCLFdBQVdBLHFCQUFxQixRQUFRO1FBQy9ETCxRQUFRSztJQUNWLE9BQU87UUFDTEwsUUFDRU0sT0FBT0csVUFBVSxJQUFJSCxPQUFPRyxVQUFVLENBQUMsZ0NBQWdDQyxPQUFPLEdBQzFFLFNBQ0E7SUFDUjtJQUVBQyxTQUFTQyxlQUFlLENBQUNDLFlBQVksQ0FBQyxjQUFjYjtJQUNwRCxPQUFPQTtBQUNUO0FBRU8sTUFBTUwsZ0JBQTBELENBQUMsRUFBRW1CLFFBQVEsRUFBRTtJQUNsRixNQUFNLENBQUNkLE9BQU9lLGNBQWMsR0FBR0MsSUFBQUEsZUFBUSxFQUFRWjtJQUMvQyxNQUFNLENBQUNOLFVBQVVtQixZQUFZLEdBQUdELElBQUFBLGVBQVEsRUFBQztRQUN2QyxNQUFNWCxtQkFBbUJDLE9BQU9DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDTDtRQUNyRCxPQUFPLENBQUNFO0lBQ1Y7SUFFQSxNQUFNTixXQUFXbUIsSUFBQUEsa0JBQVcsRUFBQyxDQUFDQztRQUM1QixJQUFJQSxlQUFlLFdBQVdBLGVBQWUsUUFBUTtZQUNuREosY0FBY0k7WUFDZEYsWUFBWTtZQUNaWCxPQUFPQyxZQUFZLENBQUNhLE9BQU8sQ0FBQ2pCLGlCQUFpQmdCO1lBQzdDUixTQUFTQyxlQUFlLENBQUNDLFlBQVksQ0FBQyxjQUFjTTtRQUN0RCxPQUFPLElBQUlBLGVBQWUsUUFBUTtZQUNoQyxNQUFNRSwyQkFBMkJmLE9BQU9DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDTDtZQUM3RCxJQUFJa0IsMEJBQTBCZixPQUFPQyxZQUFZLENBQUNlLFVBQVUsQ0FBQ25CO1lBQzdELE1BQU1vQixjQUNKakIsT0FBT0csVUFBVSxJQUFJSCxPQUFPRyxVQUFVLENBQUMsZ0NBQWdDQyxPQUFPLEdBQzFFLFNBQ0E7WUFDTkMsU0FBU0MsZUFBZSxDQUFDQyxZQUFZLENBQUMsY0FBY1U7WUFDcEROLFlBQVk7WUFDWkYsY0FBY1E7UUFDaEI7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFBTyw2QkFBQ3RCLFFBQVF1QixRQUFRO1FBQUNDLE9BQU87WUFBRTNCO1lBQVVDO1lBQVVDO1FBQU07T0FBSWM7QUFDbEU7QUFFTyxNQUFNbEIsV0FBVyxJQUFvQjhCLElBQUFBLGlCQUFVLEVBQUN6QjtNQUV2RCxXQUFlQSJ9