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
const _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _reactrouterdom = require("react-router-dom");
const _types = require("../../../../fields/config/types");
const _sortableFieldTypes = /*#__PURE__*/ _interop_require_default(require("../../../../fields/sortableFieldTypes"));
const _getTranslation = require("../../../../utilities/getTranslation");
const _SearchParams = require("../../utilities/SearchParams");
const _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../ReactSelect"));
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
const baseClass = 'sort-complex';
const SortComplex = (props)=>{
    const { collection, handleChange, modifySearchQuery = true } = props;
    const history = (0, _reactrouterdom.useHistory)();
    const params = (0, _SearchParams.useSearchParams)();
    const { i18n, t } = (0, _reacti18next.useTranslation)('general');
    const [sortOptions, setSortOptions] = (0, _react.useState)();
    const [sortFields] = (0, _react.useState)(()=>collection.fields.reduce((fields, field)=>{
            if ((0, _types.fieldAffectsData)(field) && _sortableFieldTypes.default.indexOf(field.type) > -1) {
                return [
                    ...fields,
                    {
                        label: (0, _getTranslation.getTranslation)(field.label || field.name, i18n),
                        value: field.name
                    }
                ];
            }
            return fields;
        }, []));
    const [sortField, setSortField] = (0, _react.useState)(sortFields[0]);
    const [initialSort] = (0, _react.useState)(()=>({
            label: t('descending'),
            value: '-'
        }));
    const [sortOrder, setSortOrder] = (0, _react.useState)(initialSort);
    (0, _react.useEffect)(()=>{
        if (sortField?.value) {
            const newSortValue = `${sortOrder.value}${sortField.value}`;
            if (handleChange) handleChange(newSortValue);
            if (params.sort !== newSortValue && modifySearchQuery) {
                history.replace({
                    search: _qs.default.stringify({
                        ...params,
                        sort: newSortValue
                    }, {
                        addQueryPrefix: true
                    })
                });
            }
        }
    }, [
        history,
        params,
        sortField,
        sortOrder,
        modifySearchQuery,
        handleChange
    ]);
    (0, _react.useEffect)(()=>{
        setSortOptions([
            {
                label: t('ascending'),
                value: ''
            },
            {
                label: t('descending'),
                value: '-'
            }
        ]);
    }, [
        i18n,
        t
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__wrap`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__select`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__label`
    }, t('columnToSort')), /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        onChange: setSortField,
        options: sortFields,
        value: sortField
    })), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__select`
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__label`
    }, t('order')), /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        onChange: (incomingSort)=>{
            setSortOrder(incomingSort || initialSort);
        },
        options: sortOptions,
        value: sortOrder
    })))));
};
const _default = SortComplex;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1NvcnRDb21wbGV4L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB0eXBlIHsgT3B0aW9uT2JqZWN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyBmaWVsZEFmZmVjdHNEYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCBzb3J0YWJsZUZpZWxkVHlwZXMgZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL3NvcnRhYmxlRmllbGRUeXBlcydcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJ1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1NlYXJjaFBhcmFtcydcbmltcG9ydCBSZWFjdFNlbGVjdCBmcm9tICcuLi9SZWFjdFNlbGVjdCdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnc29ydC1jb21wbGV4J1xuXG5jb25zdCBTb3J0Q29tcGxleDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY29sbGVjdGlvbiwgaGFuZGxlQ2hhbmdlLCBtb2RpZnlTZWFyY2hRdWVyeSA9IHRydWUgfSA9IHByb3BzXG5cbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuICBjb25zdCBwYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKVxuICBjb25zdCB7IGkxOG4sIHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJylcbiAgY29uc3QgW3NvcnRPcHRpb25zLCBzZXRTb3J0T3B0aW9uc10gPSB1c2VTdGF0ZTxPcHRpb25PYmplY3RbXT4oKVxuXG4gIGNvbnN0IFtzb3J0RmllbGRzXSA9IHVzZVN0YXRlKCgpID0+XG4gICAgY29sbGVjdGlvbi5maWVsZHMucmVkdWNlKChmaWVsZHMsIGZpZWxkKSA9PiB7XG4gICAgICBpZiAoZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgJiYgc29ydGFibGVGaWVsZFR5cGVzLmluZGV4T2YoZmllbGQudHlwZSkgPiAtMSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIC4uLmZpZWxkcyxcbiAgICAgICAgICB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihmaWVsZC5sYWJlbCB8fCBmaWVsZC5uYW1lLCBpMThuKSwgdmFsdWU6IGZpZWxkLm5hbWUgfSxcbiAgICAgICAgXVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZpZWxkc1xuICAgIH0sIFtdKSxcbiAgKVxuXG4gIGNvbnN0IFtzb3J0RmllbGQsIHNldFNvcnRGaWVsZF0gPSB1c2VTdGF0ZShzb3J0RmllbGRzWzBdKVxuICBjb25zdCBbaW5pdGlhbFNvcnRdID0gdXNlU3RhdGUoKCkgPT4gKHsgbGFiZWw6IHQoJ2Rlc2NlbmRpbmcnKSwgdmFsdWU6ICctJyB9KSlcbiAgY29uc3QgW3NvcnRPcmRlciwgc2V0U29ydE9yZGVyXSA9IHVzZVN0YXRlKGluaXRpYWxTb3J0KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNvcnRGaWVsZD8udmFsdWUpIHtcbiAgICAgIGNvbnN0IG5ld1NvcnRWYWx1ZSA9IGAke3NvcnRPcmRlci52YWx1ZX0ke3NvcnRGaWVsZC52YWx1ZX1gXG5cbiAgICAgIGlmIChoYW5kbGVDaGFuZ2UpIGhhbmRsZUNoYW5nZShuZXdTb3J0VmFsdWUpXG5cbiAgICAgIGlmIChwYXJhbXMuc29ydCAhPT0gbmV3U29ydFZhbHVlICYmIG1vZGlmeVNlYXJjaFF1ZXJ5KSB7XG4gICAgICAgIGhpc3RvcnkucmVwbGFjZSh7XG4gICAgICAgICAgc2VhcmNoOiBxdWVyeVN0cmluZy5zdHJpbmdpZnkoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgICAgICAgc29ydDogbmV3U29ydFZhbHVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgYWRkUXVlcnlQcmVmaXg6IHRydWUgfSxcbiAgICAgICAgICApLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2hpc3RvcnksIHBhcmFtcywgc29ydEZpZWxkLCBzb3J0T3JkZXIsIG1vZGlmeVNlYXJjaFF1ZXJ5LCBoYW5kbGVDaGFuZ2VdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U29ydE9wdGlvbnMoW1xuICAgICAgeyBsYWJlbDogdCgnYXNjZW5kaW5nJyksIHZhbHVlOiAnJyB9LFxuICAgICAgeyBsYWJlbDogdCgnZGVzY2VuZGluZycpLCB2YWx1ZTogJy0nIH0sXG4gICAgXSlcbiAgfSwgW2kxOG4sIHRdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NlbGVjdGB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+e3QoJ2NvbHVtblRvU29ydCcpfTwvZGl2PlxuICAgICAgICAgICAgPFJlYWN0U2VsZWN0IG9uQ2hhbmdlPXtzZXRTb3J0RmllbGR9IG9wdGlvbnM9e3NvcnRGaWVsZHN9IHZhbHVlPXtzb3J0RmllbGR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NlbGVjdGB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+e3QoJ29yZGVyJyl9PC9kaXY+XG4gICAgICAgICAgICA8UmVhY3RTZWxlY3RcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpbmNvbWluZ1NvcnQpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTb3J0T3JkZXIoaW5jb21pbmdTb3J0IHx8IGluaXRpYWxTb3J0KVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvcHRpb25zPXtzb3J0T3B0aW9uc31cbiAgICAgICAgICAgICAgdmFsdWU9e3NvcnRPcmRlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb3J0Q29tcGxleFxuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIlNvcnRDb21wbGV4IiwicHJvcHMiLCJjb2xsZWN0aW9uIiwiaGFuZGxlQ2hhbmdlIiwibW9kaWZ5U2VhcmNoUXVlcnkiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInBhcmFtcyIsInVzZVNlYXJjaFBhcmFtcyIsImkxOG4iLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJzb3J0T3B0aW9ucyIsInNldFNvcnRPcHRpb25zIiwidXNlU3RhdGUiLCJzb3J0RmllbGRzIiwiZmllbGRzIiwicmVkdWNlIiwiZmllbGQiLCJmaWVsZEFmZmVjdHNEYXRhIiwic29ydGFibGVGaWVsZFR5cGVzIiwiaW5kZXhPZiIsInR5cGUiLCJsYWJlbCIsImdldFRyYW5zbGF0aW9uIiwibmFtZSIsInZhbHVlIiwic29ydEZpZWxkIiwic2V0U29ydEZpZWxkIiwiaW5pdGlhbFNvcnQiLCJzb3J0T3JkZXIiLCJzZXRTb3J0T3JkZXIiLCJ1c2VFZmZlY3QiLCJuZXdTb3J0VmFsdWUiLCJzb3J0IiwicmVwbGFjZSIsInNlYXJjaCIsInF1ZXJ5U3RyaW5nIiwic3RyaW5naWZ5IiwiYWRkUXVlcnlQcmVmaXgiLCJkaXYiLCJjbGFzc05hbWUiLCJSZWFjdCIsIkZyYWdtZW50IiwiUmVhY3RTZWxlY3QiLCJvbkNoYW5nZSIsIm9wdGlvbnMiLCJpbmNvbWluZ1NvcnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTRGQTs7O2VBQUE7OzsyREE1RndCOytEQUNtQjs4QkFDWjtnQ0FDSjt1QkFLTTsyRUFDRjtnQ0FDQTs4QkFDQztvRUFDUjtRQUNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxNQUFNQSxZQUFZO0FBRWxCLE1BQU1DLGNBQStCLENBQUNDO0lBQ3BDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUVDLG9CQUFvQixJQUFJLEVBQUUsR0FBR0g7SUFFL0QsTUFBTUksVUFBVUMsSUFBQUEsMEJBQVU7SUFDMUIsTUFBTUMsU0FBU0MsSUFBQUEsNkJBQWU7SUFDOUIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBQ25DLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHQyxJQUFBQSxlQUFRO0lBRTlDLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHRCxJQUFBQSxlQUFRLEVBQUMsSUFDNUJaLFdBQVdjLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUNELFFBQVFFO1lBQ2hDLElBQUlDLElBQUFBLHVCQUFnQixFQUFDRCxVQUFVRSwyQkFBa0IsQ0FBQ0MsT0FBTyxDQUFDSCxNQUFNSSxJQUFJLElBQUksQ0FBQyxHQUFHO2dCQUMxRSxPQUFPO3VCQUNGTjtvQkFDSDt3QkFBRU8sT0FBT0MsSUFBQUEsOEJBQWMsRUFBQ04sTUFBTUssS0FBSyxJQUFJTCxNQUFNTyxJQUFJLEVBQUVoQjt3QkFBT2lCLE9BQU9SLE1BQU1PLElBQUk7b0JBQUM7aUJBQzdFO1lBQ0g7WUFDQSxPQUFPVDtRQUNULEdBQUcsRUFBRTtJQUdQLE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHZCxJQUFBQSxlQUFRLEVBQUNDLFVBQVUsQ0FBQyxFQUFFO0lBQ3hELE1BQU0sQ0FBQ2MsWUFBWSxHQUFHZixJQUFBQSxlQUFRLEVBQUMsSUFBTyxDQUFBO1lBQUVTLE9BQU9iLEVBQUU7WUFBZWdCLE9BQU87UUFBSSxDQUFBO0lBQzNFLE1BQU0sQ0FBQ0ksV0FBV0MsYUFBYSxHQUFHakIsSUFBQUEsZUFBUSxFQUFDZTtJQUUzQ0csSUFBQUEsZ0JBQVMsRUFBQztRQUNSLElBQUlMLFdBQVdELE9BQU87WUFDcEIsTUFBTU8sZUFBZSxDQUFDLEVBQUVILFVBQVVKLEtBQUssQ0FBQyxFQUFFQyxVQUFVRCxLQUFLLENBQUMsQ0FBQztZQUUzRCxJQUFJdkIsY0FBY0EsYUFBYThCO1lBRS9CLElBQUkxQixPQUFPMkIsSUFBSSxLQUFLRCxnQkFBZ0I3QixtQkFBbUI7Z0JBQ3JEQyxRQUFROEIsT0FBTyxDQUFDO29CQUNkQyxRQUFRQyxXQUFXLENBQUNDLFNBQVMsQ0FDM0I7d0JBQ0UsR0FBRy9CLE1BQU07d0JBQ1QyQixNQUFNRDtvQkFDUixHQUNBO3dCQUFFTSxnQkFBZ0I7b0JBQUs7Z0JBRTNCO1lBQ0Y7UUFDRjtJQUNGLEdBQUc7UUFBQ2xDO1FBQVNFO1FBQVFvQjtRQUFXRztRQUFXMUI7UUFBbUJEO0tBQWE7SUFFM0U2QixJQUFBQSxnQkFBUyxFQUFDO1FBQ1JuQixlQUFlO1lBQ2I7Z0JBQUVVLE9BQU9iLEVBQUU7Z0JBQWNnQixPQUFPO1lBQUc7WUFDbkM7Z0JBQUVILE9BQU9iLEVBQUU7Z0JBQWVnQixPQUFPO1lBQUk7U0FDdEM7SUFDSCxHQUFHO1FBQUNqQjtRQUFNQztLQUFFO0lBRVoscUJBQ0UsNkJBQUM4QjtRQUFJQyxXQUFXMUM7cUJBQ2QsNkJBQUMyQyxjQUFLLENBQUNDLFFBQVEsc0JBQ2IsNkJBQUNIO1FBQUlDLFdBQVcsQ0FBQyxFQUFFMUMsVUFBVSxNQUFNLENBQUM7cUJBQ2xDLDZCQUFDeUM7UUFBSUMsV0FBVyxDQUFDLEVBQUUxQyxVQUFVLFFBQVEsQ0FBQztxQkFDcEMsNkJBQUN5QztRQUFJQyxXQUFXLENBQUMsRUFBRTFDLFVBQVUsT0FBTyxDQUFDO09BQUdXLEVBQUUsZ0NBQzFDLDZCQUFDa0Msb0JBQVc7UUFBQ0MsVUFBVWpCO1FBQWNrQixTQUFTL0I7UUFBWVcsT0FBT0M7dUJBRW5FLDZCQUFDYTtRQUFJQyxXQUFXLENBQUMsRUFBRTFDLFVBQVUsUUFBUSxDQUFDO3FCQUNwQyw2QkFBQ3lDO1FBQUlDLFdBQVcsQ0FBQyxFQUFFMUMsVUFBVSxPQUFPLENBQUM7T0FBR1csRUFBRSx5QkFDMUMsNkJBQUNrQyxvQkFBVztRQUNWQyxVQUFVLENBQUNFO1lBQ1RoQixhQUFhZ0IsZ0JBQWdCbEI7UUFDL0I7UUFDQWlCLFNBQVNsQztRQUNUYyxPQUFPSTs7QUFPckI7TUFFQSxXQUFlOUIifQ==