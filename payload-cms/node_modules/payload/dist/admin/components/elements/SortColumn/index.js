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
const _getTranslation = require("../../../../utilities/getTranslation");
const _Chevron = /*#__PURE__*/ _interop_require_default(require("../../icons/Chevron"));
const _SearchParams = require("../../utilities/SearchParams");
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
const baseClass = 'sort-column';
const SortColumn = (props)=>{
    const { name, disable = false, label } = props;
    const params = (0, _SearchParams.useSearchParams)();
    const history = (0, _reactrouterdom.useHistory)();
    const { i18n, t } = (0, _reacti18next.useTranslation)('general');
    const { sort } = params;
    const desc = `-${name}`;
    const asc = name;
    const ascClasses = [
        `${baseClass}__asc`
    ];
    if (sort === asc) ascClasses.push(`${baseClass}--active`);
    const descClasses = [
        `${baseClass}__desc`
    ];
    if (sort === desc) descClasses.push(`${baseClass}--active`);
    const setSort = (0, _react.useCallback)((newSort)=>{
        history.push({
            search: _qs.default.stringify({
                ...params,
                sort: newSort
            }, {
                addQueryPrefix: true
            })
        });
    }, [
        params,
        history
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("span", {
        className: `${baseClass}__label`
    }, (0, _getTranslation.getTranslation)(label, i18n)), !disable && /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__buttons`
    }, /*#__PURE__*/ _react.default.createElement("button", {
        "aria-label": t('sortByLabelDirection', {
            direction: t('ascending'),
            label: (0, _getTranslation.getTranslation)(label, i18n)
        }),
        className: [
            ...ascClasses,
            `${baseClass}__button`
        ].filter(Boolean).join(' '),
        onClick: ()=>setSort(asc),
        type: "button"
    }, /*#__PURE__*/ _react.default.createElement(_Chevron.default, {
        direction: "up"
    })), /*#__PURE__*/ _react.default.createElement("button", {
        "aria-label": t('sortByLabelDirection', {
            direction: t('descending'),
            label: (0, _getTranslation.getTranslation)(label, i18n)
        }),
        className: [
            ...descClasses,
            `${baseClass}__button`
        ].filter(Boolean).join(' '),
        onClick: ()=>setSort(desc),
        type: "button"
    }, /*#__PURE__*/ _react.default.createElement(_Chevron.default, null))));
};
const _default = SortColumn;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1NvcnRDb2x1bW4vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxcydcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB0eXBlIHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcbmltcG9ydCBDaGV2cm9uIGZyb20gJy4uLy4uL2ljb25zL0NoZXZyb24nXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvU2VhcmNoUGFyYW1zJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdzb3J0LWNvbHVtbidcblxuY29uc3QgU29ydENvbHVtbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgZGlzYWJsZSA9IGZhbHNlLCBsYWJlbCB9ID0gcHJvcHNcbiAgY29uc3QgcGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKClcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuICBjb25zdCB7IGkxOG4sIHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJylcblxuICBjb25zdCB7IHNvcnQgfSA9IHBhcmFtc1xuXG4gIGNvbnN0IGRlc2MgPSBgLSR7bmFtZX1gXG4gIGNvbnN0IGFzYyA9IG5hbWVcblxuICBjb25zdCBhc2NDbGFzc2VzID0gW2Ake2Jhc2VDbGFzc31fX2FzY2BdXG4gIGlmIChzb3J0ID09PSBhc2MpIGFzY0NsYXNzZXMucHVzaChgJHtiYXNlQ2xhc3N9LS1hY3RpdmVgKVxuXG4gIGNvbnN0IGRlc2NDbGFzc2VzID0gW2Ake2Jhc2VDbGFzc31fX2Rlc2NgXVxuICBpZiAoc29ydCA9PT0gZGVzYykgZGVzY0NsYXNzZXMucHVzaChgJHtiYXNlQ2xhc3N9LS1hY3RpdmVgKVxuXG4gIGNvbnN0IHNldFNvcnQgPSB1c2VDYWxsYmFjayhcbiAgICAobmV3U29ydCkgPT4ge1xuICAgICAgaGlzdG9yeS5wdXNoKHtcbiAgICAgICAgc2VhcmNoOiBxdWVyeVN0cmluZy5zdHJpbmdpZnkoXG4gICAgICAgICAge1xuICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgc29ydDogbmV3U29ydCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgYWRkUXVlcnlQcmVmaXg6IHRydWUgfSxcbiAgICAgICAgKSxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBbcGFyYW1zLCBoaXN0b3J5XSxcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+e2dldFRyYW5zbGF0aW9uKGxhYmVsLCBpMThuKX08L3NwYW4+XG4gICAgICB7IWRpc2FibGUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYnV0dG9uc2B9PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3QoJ3NvcnRCeUxhYmVsRGlyZWN0aW9uJywge1xuICAgICAgICAgICAgICBkaXJlY3Rpb246IHQoJ2FzY2VuZGluZycpLFxuICAgICAgICAgICAgICBsYWJlbDogZ2V0VHJhbnNsYXRpb24obGFiZWwsIGkxOG4pLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e1suLi5hc2NDbGFzc2VzLCBgJHtiYXNlQ2xhc3N9X19idXR0b25gXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U29ydChhc2MpfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENoZXZyb24gZGlyZWN0aW9uPVwidXBcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3QoJ3NvcnRCeUxhYmVsRGlyZWN0aW9uJywge1xuICAgICAgICAgICAgICBkaXJlY3Rpb246IHQoJ2Rlc2NlbmRpbmcnKSxcbiAgICAgICAgICAgICAgbGFiZWw6IGdldFRyYW5zbGF0aW9uKGxhYmVsLCBpMThuKSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtbLi4uZGVzY0NsYXNzZXMsIGAke2Jhc2VDbGFzc31fX2J1dHRvbmBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTb3J0KGRlc2MpfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENoZXZyb24gLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRDb2x1bW5cbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJTb3J0Q29sdW1uIiwicHJvcHMiLCJuYW1lIiwiZGlzYWJsZSIsImxhYmVsIiwicGFyYW1zIiwidXNlU2VhcmNoUGFyYW1zIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJpMThuIiwidCIsInVzZVRyYW5zbGF0aW9uIiwic29ydCIsImRlc2MiLCJhc2MiLCJhc2NDbGFzc2VzIiwicHVzaCIsImRlc2NDbGFzc2VzIiwic2V0U29ydCIsInVzZUNhbGxiYWNrIiwibmV3U29ydCIsInNlYXJjaCIsInF1ZXJ5U3RyaW5nIiwic3RyaW5naWZ5IiwiYWRkUXVlcnlQcmVmaXgiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiZ2V0VHJhbnNsYXRpb24iLCJidXR0b24iLCJhcmlhLWxhYmVsIiwiZGlyZWN0aW9uIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJvbkNsaWNrIiwidHlwZSIsIkNoZXZyb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQStFQTs7O2VBQUE7OzsyREEvRXdCOytEQUNXOzhCQUNKO2dDQUNKO2dDQUlJO2dFQUNYOzhCQUNZO1FBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLE1BQU1BLFlBQVk7QUFFbEIsTUFBTUMsYUFBOEIsQ0FBQ0M7SUFDbkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsS0FBSyxFQUFFQyxLQUFLLEVBQUUsR0FBR0g7SUFDekMsTUFBTUksU0FBU0MsSUFBQUEsNkJBQWU7SUFDOUIsTUFBTUMsVUFBVUMsSUFBQUEsMEJBQVU7SUFDMUIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBRW5DLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdQO0lBRWpCLE1BQU1RLE9BQU8sQ0FBQyxDQUFDLEVBQUVYLEtBQUssQ0FBQztJQUN2QixNQUFNWSxNQUFNWjtJQUVaLE1BQU1hLGFBQWE7UUFBQyxDQUFDLEVBQUVoQixVQUFVLEtBQUssQ0FBQztLQUFDO0lBQ3hDLElBQUlhLFNBQVNFLEtBQUtDLFdBQVdDLElBQUksQ0FBQyxDQUFDLEVBQUVqQixVQUFVLFFBQVEsQ0FBQztJQUV4RCxNQUFNa0IsY0FBYztRQUFDLENBQUMsRUFBRWxCLFVBQVUsTUFBTSxDQUFDO0tBQUM7SUFDMUMsSUFBSWEsU0FBU0MsTUFBTUksWUFBWUQsSUFBSSxDQUFDLENBQUMsRUFBRWpCLFVBQVUsUUFBUSxDQUFDO0lBRTFELE1BQU1tQixVQUFVQyxJQUFBQSxrQkFBVyxFQUN6QixDQUFDQztRQUNDYixRQUFRUyxJQUFJLENBQUM7WUFDWEssUUFBUUMsV0FBVyxDQUFDQyxTQUFTLENBQzNCO2dCQUNFLEdBQUdsQixNQUFNO2dCQUNUTyxNQUFNUTtZQUNSLEdBQ0E7Z0JBQUVJLGdCQUFnQjtZQUFLO1FBRTNCO0lBQ0YsR0FDQTtRQUFDbkI7UUFBUUU7S0FBUTtJQUduQixxQkFDRSw2QkFBQ2tCO1FBQUlDLFdBQVczQjtxQkFDZCw2QkFBQzRCO1FBQUtELFdBQVcsQ0FBQyxFQUFFM0IsVUFBVSxPQUFPLENBQUM7T0FBRzZCLElBQUFBLDhCQUFjLEVBQUN4QixPQUFPSyxRQUM5RCxDQUFDTix5QkFDQSw2QkFBQ3NCO1FBQUlDLFdBQVcsQ0FBQyxFQUFFM0IsVUFBVSxTQUFTLENBQUM7cUJBQ3JDLDZCQUFDOEI7UUFDQ0MsY0FBWXBCLEVBQUUsd0JBQXdCO1lBQ3BDcUIsV0FBV3JCLEVBQUU7WUFDYk4sT0FBT3dCLElBQUFBLDhCQUFjLEVBQUN4QixPQUFPSztRQUMvQjtRQUNBaUIsV0FBVztlQUFJWDtZQUFZLENBQUMsRUFBRWhCLFVBQVUsUUFBUSxDQUFDO1NBQUMsQ0FBQ2lDLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO1FBQ3hFQyxTQUFTLElBQU1qQixRQUFRSjtRQUN2QnNCLE1BQUs7cUJBRUwsNkJBQUNDLGdCQUFPO1FBQUNOLFdBQVU7dUJBRXJCLDZCQUFDRjtRQUNDQyxjQUFZcEIsRUFBRSx3QkFBd0I7WUFDcENxQixXQUFXckIsRUFBRTtZQUNiTixPQUFPd0IsSUFBQUEsOEJBQWMsRUFBQ3hCLE9BQU9LO1FBQy9CO1FBQ0FpQixXQUFXO2VBQUlUO1lBQWEsQ0FBQyxFQUFFbEIsVUFBVSxRQUFRLENBQUM7U0FBQyxDQUFDaUMsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7UUFDekVDLFNBQVMsSUFBTWpCLFFBQVFMO1FBQ3ZCdUIsTUFBSztxQkFFTCw2QkFBQ0MsZ0JBQU87QUFNcEI7TUFFQSxXQUFlckMifQ==