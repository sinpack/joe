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
    SelectAllStatus: function() {
        return SelectAllStatus;
    },
    SelectionProvider: function() {
        return SelectionProvider;
    },
    useSelection: function() {
        return useSelection;
    }
});
const _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactrouterdom = require("react-router-dom");
const _Locale = require("../../../../utilities/Locale");
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
var SelectAllStatus;
(function(SelectAllStatus) {
    SelectAllStatus["AllAvailable"] = "allAvailable";
    SelectAllStatus["AllInPage"] = "allInPage";
    SelectAllStatus["None"] = "none";
    SelectAllStatus["Some"] = "some";
})(SelectAllStatus || (SelectAllStatus = {}));
const Context = /*#__PURE__*/ (0, _react.createContext)({});
const SelectionProvider = ({ children, docs = [], totalDocs })=>{
    const contextRef = (0, _react.useRef)({});
    const history = (0, _reactrouterdom.useHistory)();
    const { code: locale } = (0, _Locale.useLocale)();
    const [selected, setSelected] = (0, _react.useState)({});
    const [selectAll, setSelectAll] = (0, _react.useState)("none");
    const [count, setCount] = (0, _react.useState)(0);
    const toggleAll = (0, _react.useCallback)((allAvailable = false)=>{
        const rows = {};
        if (allAvailable) {
            setSelectAll("allAvailable");
            docs.forEach(({ id })=>{
                rows[id] = true;
            });
        } else if (selectAll === "allAvailable" || selectAll === "allInPage") {
            setSelectAll("none");
            docs.forEach(({ id })=>{
                rows[id] = false;
            });
        } else {
            docs.forEach(({ id })=>{
                rows[id] = selectAll !== "some";
            });
        }
        setSelected(rows);
    }, [
        docs,
        selectAll
    ]);
    const setSelection = (0, _react.useCallback)((id)=>{
        const isSelected = !selected[id];
        const newSelected = {
            ...selected,
            [id]: isSelected
        };
        if (!isSelected) {
            setSelectAll("some");
        }
        setSelected(newSelected);
    }, [
        selected
    ]);
    const getQueryParams = (0, _react.useCallback)((additionalParams)=>{
        let where;
        if (selectAll === "allAvailable") {
            const params = _qs.default.parse(history.location.search, {
                ignoreQueryPrefix: true
            }).where;
            where = params || {
                id: {
                    not_equals: ''
                }
            };
        } else {
            where = {
                id: {
                    in: Object.keys(selected).filter((id)=>selected[id]).map((id)=>id)
                }
            };
        }
        if (additionalParams) {
            where = {
                and: [
                    {
                        ...additionalParams
                    },
                    where
                ]
            };
        }
        return _qs.default.stringify({
            locale,
            where
        }, {
            addQueryPrefix: true
        });
    }, [
        history.location.search,
        selectAll,
        selected,
        locale
    ]);
    (0, _react.useEffect)(()=>{
        if (selectAll === "allAvailable") {
            return;
        }
        let some = false;
        let all = true;
        Object.values(selected).forEach((val)=>{
            all = all && val;
            some = some || val;
        });
        if (all) {
            setSelectAll("allInPage");
        } else if (some) {
            setSelectAll("some");
        } else {
            setSelectAll("none");
        }
    }, [
        docs,
        selectAll,
        selected
    ]);
    (0, _react.useEffect)(()=>{
        const rows = {};
        if (docs.length) {
            docs.forEach(({ id })=>{
                rows[id] = false;
            });
            setSelected(rows);
        }
        setSelectAll("none");
    }, [
        docs,
        history
    ]);
    (0, _react.useEffect)(()=>{
        const newCount = selectAll === "allAvailable" ? totalDocs : Object.keys(selected).filter((id)=>selected[id]).length;
        setCount(newCount);
    }, [
        selectAll,
        selected,
        totalDocs
    ]);
    contextRef.current = {
        count,
        getQueryParams,
        selectAll,
        selected,
        setSelection,
        toggleAll,
        totalDocs
    };
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: contextRef.current
    }, children);
};
const useSelection = ()=>(0, _react.useContext)(Context);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvU2VsZWN0aW9uUHJvdmlkZXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxcydcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHR5cGUgeyBXaGVyZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3R5cGVzJ1xuXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvTG9jYWxlJ1xuXG5leHBvcnQgZW51bSBTZWxlY3RBbGxTdGF0dXMge1xuICBBbGxBdmFpbGFibGUgPSAnYWxsQXZhaWxhYmxlJyxcbiAgQWxsSW5QYWdlID0gJ2FsbEluUGFnZScsXG4gIE5vbmUgPSAnbm9uZScsXG4gIFNvbWUgPSAnc29tZScsXG59XG5cbnR5cGUgU2VsZWN0aW9uQ29udGV4dCA9IHtcbiAgY291bnQ6IG51bWJlclxuICBnZXRRdWVyeVBhcmFtczogKGFkZGl0aW9uYWxQYXJhbXM/OiBXaGVyZSkgPT4gc3RyaW5nXG4gIHNlbGVjdEFsbDogU2VsZWN0QWxsU3RhdHVzXG4gIHNlbGVjdGVkOiBSZWNvcmQ8bnVtYmVyIHwgc3RyaW5nLCBib29sZWFuPlxuICBzZXRTZWxlY3Rpb246IChpZDogbnVtYmVyIHwgc3RyaW5nKSA9PiB2b2lkXG4gIHRvZ2dsZUFsbDogKGFsbEF2YWlsYWJsZT86IGJvb2xlYW4pID0+IHZvaWRcbiAgdG90YWxEb2NzOiBudW1iZXJcbn1cblxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgU2VsZWN0aW9uQ29udGV4dClcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICBkb2NzOiBhbnlbXVxuICB0b3RhbERvY3M6IG51bWJlclxufVxuZXhwb3J0IGNvbnN0IFNlbGVjdGlvblByb3ZpZGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgZG9jcyA9IFtdLCB0b3RhbERvY3MgfSkgPT4ge1xuICBjb25zdCBjb250ZXh0UmVmID0gdXNlUmVmKHt9IGFzIFNlbGVjdGlvbkNvbnRleHQpXG5cbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKClcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZTxTZWxlY3Rpb25Db250ZXh0WydzZWxlY3RlZCddPih7fSlcbiAgY29uc3QgW3NlbGVjdEFsbCwgc2V0U2VsZWN0QWxsXSA9IHVzZVN0YXRlPFNlbGVjdEFsbFN0YXR1cz4oU2VsZWN0QWxsU3RhdHVzLk5vbmUpXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCB0b2dnbGVBbGwgPSB1c2VDYWxsYmFjayhcbiAgICAoYWxsQXZhaWxhYmxlID0gZmFsc2UpID0+IHtcbiAgICAgIGNvbnN0IHJvd3MgPSB7fVxuICAgICAgaWYgKGFsbEF2YWlsYWJsZSkge1xuICAgICAgICBzZXRTZWxlY3RBbGwoU2VsZWN0QWxsU3RhdHVzLkFsbEF2YWlsYWJsZSlcbiAgICAgICAgZG9jcy5mb3JFYWNoKCh7IGlkIH0pID0+IHtcbiAgICAgICAgICByb3dzW2lkXSA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHNlbGVjdEFsbCA9PT0gU2VsZWN0QWxsU3RhdHVzLkFsbEF2YWlsYWJsZSB8fFxuICAgICAgICBzZWxlY3RBbGwgPT09IFNlbGVjdEFsbFN0YXR1cy5BbGxJblBhZ2VcbiAgICAgICkge1xuICAgICAgICBzZXRTZWxlY3RBbGwoU2VsZWN0QWxsU3RhdHVzLk5vbmUpXG4gICAgICAgIGRvY3MuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XG4gICAgICAgICAgcm93c1tpZF0gPSBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jcy5mb3JFYWNoKCh7IGlkIH0pID0+IHtcbiAgICAgICAgICByb3dzW2lkXSA9IHNlbGVjdEFsbCAhPT0gU2VsZWN0QWxsU3RhdHVzLlNvbWVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHNldFNlbGVjdGVkKHJvd3MpXG4gICAgfSxcbiAgICBbZG9jcywgc2VsZWN0QWxsXSxcbiAgKVxuXG4gIGNvbnN0IHNldFNlbGVjdGlvbiA9IHVzZUNhbGxiYWNrKFxuICAgIChpZCkgPT4ge1xuICAgICAgY29uc3QgaXNTZWxlY3RlZCA9ICFzZWxlY3RlZFtpZF1cbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkID0ge1xuICAgICAgICAuLi5zZWxlY3RlZCxcbiAgICAgICAgW2lkXTogaXNTZWxlY3RlZCxcbiAgICAgIH1cbiAgICAgIGlmICghaXNTZWxlY3RlZCkge1xuICAgICAgICBzZXRTZWxlY3RBbGwoU2VsZWN0QWxsU3RhdHVzLlNvbWUpXG4gICAgICB9XG4gICAgICBzZXRTZWxlY3RlZChuZXdTZWxlY3RlZClcbiAgICB9LFxuICAgIFtzZWxlY3RlZF0sXG4gIClcblxuICBjb25zdCBnZXRRdWVyeVBhcmFtcyA9IHVzZUNhbGxiYWNrKFxuICAgIChhZGRpdGlvbmFsUGFyYW1zPzogV2hlcmUpOiBzdHJpbmcgPT4ge1xuICAgICAgbGV0IHdoZXJlOiBXaGVyZVxuICAgICAgaWYgKHNlbGVjdEFsbCA9PT0gU2VsZWN0QWxsU3RhdHVzLkFsbEF2YWlsYWJsZSkge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBxdWVyeVN0cmluZy5wYXJzZShoaXN0b3J5LmxvY2F0aW9uLnNlYXJjaCwgeyBpZ25vcmVRdWVyeVByZWZpeDogdHJ1ZSB9KVxuICAgICAgICAgIC53aGVyZSBhcyBXaGVyZVxuICAgICAgICB3aGVyZSA9IHBhcmFtcyB8fCB7XG4gICAgICAgICAgaWQ6IHsgbm90X2VxdWFsczogJycgfSxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2hlcmUgPSB7XG4gICAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgIGluOiBPYmplY3Qua2V5cyhzZWxlY3RlZClcbiAgICAgICAgICAgICAgLmZpbHRlcigoaWQpID0+IHNlbGVjdGVkW2lkXSlcbiAgICAgICAgICAgICAgLm1hcCgoaWQpID0+IGlkKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYWRkaXRpb25hbFBhcmFtcykge1xuICAgICAgICB3aGVyZSA9IHtcbiAgICAgICAgICBhbmQ6IFt7IC4uLmFkZGl0aW9uYWxQYXJhbXMgfSwgd2hlcmVdLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcXVlcnlTdHJpbmcuc3RyaW5naWZ5KFxuICAgICAgICB7XG4gICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgIHdoZXJlLFxuICAgICAgICB9LFxuICAgICAgICB7IGFkZFF1ZXJ5UHJlZml4OiB0cnVlIH0sXG4gICAgICApXG4gICAgfSxcbiAgICBbaGlzdG9yeS5sb2NhdGlvbi5zZWFyY2gsIHNlbGVjdEFsbCwgc2VsZWN0ZWQsIGxvY2FsZV0sXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWxlY3RBbGwgPT09IFNlbGVjdEFsbFN0YXR1cy5BbGxBdmFpbGFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgc29tZSA9IGZhbHNlXG4gICAgbGV0IGFsbCA9IHRydWVcbiAgICBPYmplY3QudmFsdWVzKHNlbGVjdGVkKS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgIGFsbCA9IGFsbCAmJiB2YWxcbiAgICAgIHNvbWUgPSBzb21lIHx8IHZhbFxuICAgIH0pXG5cbiAgICBpZiAoYWxsKSB7XG4gICAgICBzZXRTZWxlY3RBbGwoU2VsZWN0QWxsU3RhdHVzLkFsbEluUGFnZSlcbiAgICB9IGVsc2UgaWYgKHNvbWUpIHtcbiAgICAgIHNldFNlbGVjdEFsbChTZWxlY3RBbGxTdGF0dXMuU29tZSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2VsZWN0QWxsKFNlbGVjdEFsbFN0YXR1cy5Ob25lKVxuICAgIH1cbiAgfSwgW2RvY3MsIHNlbGVjdEFsbCwgc2VsZWN0ZWRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgcm93cyA9IHt9XG4gICAgaWYgKGRvY3MubGVuZ3RoKSB7XG4gICAgICBkb2NzLmZvckVhY2goKHsgaWQgfSkgPT4ge1xuICAgICAgICByb3dzW2lkXSA9IGZhbHNlXG4gICAgICB9KVxuICAgICAgc2V0U2VsZWN0ZWQocm93cylcbiAgICB9XG4gICAgc2V0U2VsZWN0QWxsKFNlbGVjdEFsbFN0YXR1cy5Ob25lKVxuICB9LCBbZG9jcywgaGlzdG9yeV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuZXdDb3VudCA9XG4gICAgICBzZWxlY3RBbGwgPT09IFNlbGVjdEFsbFN0YXR1cy5BbGxBdmFpbGFibGVcbiAgICAgICAgPyB0b3RhbERvY3NcbiAgICAgICAgOiBPYmplY3Qua2V5cyhzZWxlY3RlZCkuZmlsdGVyKChpZCkgPT4gc2VsZWN0ZWRbaWRdKS5sZW5ndGhcbiAgICBzZXRDb3VudChuZXdDb3VudClcbiAgfSwgW3NlbGVjdEFsbCwgc2VsZWN0ZWQsIHRvdGFsRG9jc10pXG5cbiAgY29udGV4dFJlZi5jdXJyZW50ID0ge1xuICAgIGNvdW50LFxuICAgIGdldFF1ZXJ5UGFyYW1zLFxuICAgIHNlbGVjdEFsbCxcbiAgICBzZWxlY3RlZCxcbiAgICBzZXRTZWxlY3Rpb24sXG4gICAgdG9nZ2xlQWxsLFxuICAgIHRvdGFsRG9jcyxcbiAgfVxuXG4gIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFJlZi5jdXJyZW50fT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPlxufVxuXG5leHBvcnQgY29uc3QgdXNlU2VsZWN0aW9uID0gKCk6IFNlbGVjdGlvbkNvbnRleHQgPT4gdXNlQ29udGV4dChDb250ZXh0KVxuIl0sIm5hbWVzIjpbIlNlbGVjdGlvblByb3ZpZGVyIiwidXNlU2VsZWN0aW9uIiwiU2VsZWN0QWxsU3RhdHVzIiwiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjaGlsZHJlbiIsImRvY3MiLCJ0b3RhbERvY3MiLCJjb250ZXh0UmVmIiwidXNlUmVmIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJjb2RlIiwibG9jYWxlIiwidXNlTG9jYWxlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZVN0YXRlIiwic2VsZWN0QWxsIiwic2V0U2VsZWN0QWxsIiwiY291bnQiLCJzZXRDb3VudCIsInRvZ2dsZUFsbCIsInVzZUNhbGxiYWNrIiwiYWxsQXZhaWxhYmxlIiwicm93cyIsImZvckVhY2giLCJpZCIsInNldFNlbGVjdGlvbiIsImlzU2VsZWN0ZWQiLCJuZXdTZWxlY3RlZCIsImdldFF1ZXJ5UGFyYW1zIiwiYWRkaXRpb25hbFBhcmFtcyIsIndoZXJlIiwicGFyYW1zIiwicXVlcnlTdHJpbmciLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwiaWdub3JlUXVlcnlQcmVmaXgiLCJub3RfZXF1YWxzIiwiaW4iLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwibWFwIiwiYW5kIiwic3RyaW5naWZ5IiwiYWRkUXVlcnlQcmVmaXgiLCJ1c2VFZmZlY3QiLCJzb21lIiwiYWxsIiwidmFsdWVzIiwidmFsIiwibGVuZ3RoIiwibmV3Q291bnQiLCJjdXJyZW50IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUNvbnRleHQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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