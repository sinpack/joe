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
    ActionsProvider: function() {
        return ActionsProvider;
    },
    useActions: function() {
        return useActions;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _Config = require("../../utilities/Config");
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
const ActionsContext = /*#__PURE__*/ (0, _react.createContext)({
    actions: [],
    setViewActions: ()=>{}
});
const useActions = ()=>(0, _react.useContext)(ActionsContext);
const ActionsProvider = ({ children })=>{
    const [viewActions, setViewActions] = (0, _react.useState)([]);
    const [adminActions, setAdminActions] = (0, _react.useState)([]);
    const { admin: { components: { actions: configAdminActions } } } = (0, _Config.useConfig)();
    (0, _react.useEffect)(()=>{
        setAdminActions(configAdminActions || []);
    }, [
        configAdminActions
    ]);
    const combinedActions = [
        ...viewActions,
        ...adminActions
    ];
    return /*#__PURE__*/ _react.default.createElement(ActionsContext.Provider, {
        value: {
            actions: combinedActions,
            setViewActions
        }
    }, children);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9BY3Rpb25zUHJvdmlkZXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnXG5cbnR5cGUgQWN0aW9uc0NvbnRleHRUeXBlID0ge1xuICBhY3Rpb25zOiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5bXVxuICBzZXRWaWV3QWN0aW9uczogKGFjdGlvbnM6IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PltdKSA9PiB2b2lkXG59XG5cbmNvbnN0IEFjdGlvbnNDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBY3Rpb25zQ29udGV4dFR5cGU+KHtcbiAgYWN0aW9uczogW10sXG4gIHNldFZpZXdBY3Rpb25zOiAoKSA9PiB7fSxcbn0pXG5cbmV4cG9ydCBjb25zdCB1c2VBY3Rpb25zID0gKCkgPT4gdXNlQ29udGV4dChBY3Rpb25zQ29udGV4dClcblxuZXhwb3J0IGNvbnN0IEFjdGlvbnNQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3ZpZXdBY3Rpb25zLCBzZXRWaWV3QWN0aW9uc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2FkbWluQWN0aW9ucywgc2V0QWRtaW5BY3Rpb25zXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGNvbnN0IHtcbiAgICBhZG1pbjoge1xuICAgICAgY29tcG9uZW50czogeyBhY3Rpb25zOiBjb25maWdBZG1pbkFjdGlvbnMgfSxcbiAgICB9LFxuICB9ID0gdXNlQ29uZmlnKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEFkbWluQWN0aW9ucyhjb25maWdBZG1pbkFjdGlvbnMgfHwgW10pXG4gIH0sIFtjb25maWdBZG1pbkFjdGlvbnNdKVxuXG4gIGNvbnN0IGNvbWJpbmVkQWN0aW9ucyA9IFsuLi52aWV3QWN0aW9ucywgLi4uYWRtaW5BY3Rpb25zXVxuXG4gIHJldHVybiAoXG4gICAgPEFjdGlvbnNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGFjdGlvbnM6IGNvbWJpbmVkQWN0aW9ucywgc2V0Vmlld0FjdGlvbnMgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BY3Rpb25zQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkFjdGlvbnNQcm92aWRlciIsInVzZUFjdGlvbnMiLCJBY3Rpb25zQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJhY3Rpb25zIiwic2V0Vmlld0FjdGlvbnMiLCJ1c2VDb250ZXh0IiwiY2hpbGRyZW4iLCJ2aWV3QWN0aW9ucyIsInVzZVN0YXRlIiwiYWRtaW5BY3Rpb25zIiwic2V0QWRtaW5BY3Rpb25zIiwiYWRtaW4iLCJjb21wb25lbnRzIiwiY29uZmlnQWRtaW5BY3Rpb25zIiwidXNlQ29uZmlnIiwidXNlRWZmZWN0IiwiY29tYmluZWRBY3Rpb25zIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQWdCYUEsZUFBZTtlQUFmQTs7SUFGQUMsVUFBVTtlQUFWQTs7OytEQWR5RDt3QkFFNUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8xQixNQUFNQywrQkFBaUJDLElBQUFBLG9CQUFhLEVBQXFCO0lBQ3ZEQyxTQUFTLEVBQUU7SUFDWEMsZ0JBQWdCLEtBQU87QUFDekI7QUFFTyxNQUFNSixhQUFhLElBQU1LLElBQUFBLGlCQUFVLEVBQUNKO0FBRXBDLE1BQU1GLGtCQUFrQixDQUFDLEVBQUVPLFFBQVEsRUFBRTtJQUMxQyxNQUFNLENBQUNDLGFBQWFILGVBQWUsR0FBR0ksSUFBQUEsZUFBUSxFQUFDLEVBQUU7SUFDakQsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0YsSUFBQUEsZUFBUSxFQUFDLEVBQUU7SUFFbkQsTUFBTSxFQUNKRyxPQUFPLEVBQ0xDLFlBQVksRUFBRVQsU0FBU1Usa0JBQWtCLEVBQUUsRUFDNUMsRUFDRixHQUFHQyxJQUFBQSxpQkFBUztJQUViQyxJQUFBQSxnQkFBUyxFQUFDO1FBQ1JMLGdCQUFnQkcsc0JBQXNCLEVBQUU7SUFDMUMsR0FBRztRQUFDQTtLQUFtQjtJQUV2QixNQUFNRyxrQkFBa0I7V0FBSVQ7V0FBZ0JFO0tBQWE7SUFFekQscUJBQ0UsNkJBQUNSLGVBQWVnQixRQUFRO1FBQUNDLE9BQU87WUFBRWYsU0FBU2E7WUFBaUJaO1FBQWU7T0FDeEVFO0FBR1AifQ==