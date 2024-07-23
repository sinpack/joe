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
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _reactrouterdom = require("react-router-dom");
const _defaults = require("../../../../collections/config/defaults");
const _Chevron = /*#__PURE__*/ _interop_require_default(require("../../icons/Chevron"));
const _SearchParams = require("../../utilities/SearchParams");
const _Popup = /*#__PURE__*/ _interop_require_default(require("../Popup"));
const _PopupButtonList = /*#__PURE__*/ _interop_require_wildcard(require("../Popup/PopupButtonList"));
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
const baseClass = 'per-page';
const defaultLimits = _defaults.defaults.admin.pagination.limits;
const PerPage = ({ handleChange, limit, limits = defaultLimits, modifySearchParams = true, resetPage = false })=>{
    const params = (0, _SearchParams.useSearchParams)();
    const history = (0, _reactrouterdom.useHistory)();
    const { t } = (0, _reacti18next.useTranslation)('general');
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Popup.default, {
        button: /*#__PURE__*/ _react.default.createElement("div", {
            className: `${baseClass}__base-button`
        }, /*#__PURE__*/ _react.default.createElement("span", null, t('perPage', {
            limit
        })), " ", /*#__PURE__*/ _react.default.createElement(_Chevron.default, {
            className: `${baseClass}__icon`
        })),
        horizontalAlign: "right",
        render: ({ close })=>/*#__PURE__*/ _react.default.createElement(_PopupButtonList.ButtonGroup, null, limits.map((limitNumber, i)=>/*#__PURE__*/ _react.default.createElement(_PopupButtonList.Button, {
                    className: [
                        `${baseClass}__button`,
                        limitNumber === Number(limit) && `${baseClass}__button-active`
                    ].filter(Boolean).join(' '),
                    key: i,
                    onClick: ()=>{
                        close();
                        if (handleChange) handleChange(limitNumber);
                        if (modifySearchParams) {
                            history.replace({
                                search: _qs.default.stringify({
                                    ...params,
                                    limit: limitNumber,
                                    page: resetPage ? 1 : params.page
                                }, {
                                    addQueryPrefix: true
                                })
                            });
                        }
                    }
                }, limitNumber === Number(limit) && /*#__PURE__*/ _react.default.createElement("div", {
                    className: `${baseClass}__chevron`
                }, /*#__PURE__*/ _react.default.createElement(_Chevron.default, {
                    direction: "right"
                })), " ", /*#__PURE__*/ _react.default.createElement("span", null, limitNumber)))),
        size: "small"
    }));
};
const _default = PerPage;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1BlclBhZ2UvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyBmcm9tICdxcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy9kZWZhdWx0cydcbmltcG9ydCBDaGV2cm9uIGZyb20gJy4uLy4uL2ljb25zL0NoZXZyb24nXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvU2VhcmNoUGFyYW1zJ1xuaW1wb3J0IFBvcHVwIGZyb20gJy4uL1BvcHVwJ1xuaW1wb3J0ICogYXMgUG9wdXBMaXN0IGZyb20gJy4uL1BvcHVwL1BvcHVwQnV0dG9uTGlzdCdcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncGVyLXBhZ2UnXG5cbmNvbnN0IGRlZmF1bHRMaW1pdHMgPSBkZWZhdWx0cy5hZG1pbi5wYWdpbmF0aW9uLmxpbWl0c1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IHtcbiAgaGFuZGxlQ2hhbmdlPzogKGxpbWl0OiBudW1iZXIpID0+IHZvaWRcbiAgbGltaXQ6IG51bWJlclxuICBsaW1pdHM6IG51bWJlcltdXG4gIG1vZGlmeVNlYXJjaFBhcmFtcz86IGJvb2xlYW5cbiAgcmVzZXRQYWdlPzogYm9vbGVhblxufVxuXG5jb25zdCBQZXJQYWdlOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBoYW5kbGVDaGFuZ2UsXG4gIGxpbWl0LFxuICBsaW1pdHMgPSBkZWZhdWx0TGltaXRzLFxuICBtb2RpZnlTZWFyY2hQYXJhbXMgPSB0cnVlLFxuICByZXNldFBhZ2UgPSBmYWxzZSxcbn0pID0+IHtcbiAgY29uc3QgcGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKClcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPFBvcHVwXG4gICAgICAgIGJ1dHRvbj17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2Jhc2UtYnV0dG9uYH0+XG4gICAgICAgICAgICA8c3Bhbj57dCgncGVyUGFnZScsIHsgbGltaXQgfSl9PC9zcGFuPlxuICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICB7PENoZXZyb24gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19pY29uYH0gLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgaG9yaXpvbnRhbEFsaWduPVwicmlnaHRcIlxuICAgICAgICByZW5kZXI9eyh7IGNsb3NlIH0pID0+IChcbiAgICAgICAgICA8UG9wdXBMaXN0LkJ1dHRvbkdyb3VwPlxuICAgICAgICAgICAge2xpbWl0cy5tYXAoKGxpbWl0TnVtYmVyLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxQb3B1cExpc3QuQnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgICAgICAgICBgJHtiYXNlQ2xhc3N9X19idXR0b25gLFxuICAgICAgICAgICAgICAgICAgbGltaXROdW1iZXIgPT09IE51bWJlcihsaW1pdCkgJiYgYCR7YmFzZUNsYXNzfV9fYnV0dG9uLWFjdGl2ZWAsXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJyAnKX1cbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZUNoYW5nZSkgaGFuZGxlQ2hhbmdlKGxpbWl0TnVtYmVyKVxuICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmeVNlYXJjaFBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2Uoe1xuICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaDogcXMuc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBsaW1pdE51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZTogcmVzZXRQYWdlID8gMSA6IHBhcmFtcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYWRkUXVlcnlQcmVmaXg6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bGltaXROdW1iZXIgPT09IE51bWJlcihsaW1pdCkgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2NoZXZyb25gfT5cbiAgICAgICAgICAgICAgICAgICAgPENoZXZyb24gZGlyZWN0aW9uPVwicmlnaHRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICA8c3Bhbj57bGltaXROdW1iZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICA8L1BvcHVwTGlzdC5CdXR0b24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1BvcHVwTGlzdC5CdXR0b25Hcm91cD5cbiAgICAgICAgKX1cbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyUGFnZVxuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsImRlZmF1bHRMaW1pdHMiLCJkZWZhdWx0cyIsImFkbWluIiwicGFnaW5hdGlvbiIsImxpbWl0cyIsIlBlclBhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJsaW1pdCIsIm1vZGlmeVNlYXJjaFBhcmFtcyIsInJlc2V0UGFnZSIsInBhcmFtcyIsInVzZVNlYXJjaFBhcmFtcyIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwidCIsInVzZVRyYW5zbGF0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiUG9wdXAiLCJidXR0b24iLCJzcGFuIiwiQ2hldnJvbiIsImhvcml6b250YWxBbGlnbiIsInJlbmRlciIsImNsb3NlIiwiUG9wdXBMaXN0IiwiQnV0dG9uR3JvdXAiLCJtYXAiLCJsaW1pdE51bWJlciIsImkiLCJCdXR0b24iLCJOdW1iZXIiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImtleSIsIm9uQ2xpY2siLCJyZXBsYWNlIiwic2VhcmNoIiwicXMiLCJzdHJpbmdpZnkiLCJwYWdlIiwiYWRkUXVlcnlQcmVmaXgiLCJkaXJlY3Rpb24iLCJzaXplIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBMkZBOzs7ZUFBQTs7OzJEQTNGZTs4REFDRzs4QkFDYTtnQ0FDSjswQkFFRjtnRUFDTDs4QkFDWTs4REFDZDt5RUFDUztRQUNwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxNQUFNQSxZQUFZO0FBRWxCLE1BQU1DLGdCQUFnQkMsa0JBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxVQUFVLENBQUNDLE1BQU07QUFVdEQsTUFBTUMsVUFBMkIsQ0FBQyxFQUNoQ0MsWUFBWSxFQUNaQyxLQUFLLEVBQ0xILFNBQVNKLGFBQWEsRUFDdEJRLHFCQUFxQixJQUFJLEVBQ3pCQyxZQUFZLEtBQUssRUFDbEI7SUFDQyxNQUFNQyxTQUFTQyxJQUFBQSw2QkFBZTtJQUM5QixNQUFNQyxVQUFVQyxJQUFBQSwwQkFBVTtJQUMxQixNQUFNLEVBQUVDLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBRTdCLHFCQUNFLDZCQUFDQztRQUFJQyxXQUFXbEI7cUJBQ2QsNkJBQUNtQixjQUFLO1FBQ0pDLHNCQUNFLDZCQUFDSDtZQUFJQyxXQUFXLENBQUMsRUFBRWxCLFVBQVUsYUFBYSxDQUFDO3lCQUN6Qyw2QkFBQ3FCLGNBQU1OLEVBQUUsV0FBVztZQUFFUDtRQUFNLEtBQVUsbUJBRXJDLDZCQUFDYyxnQkFBTztZQUFDSixXQUFXLENBQUMsRUFBRWxCLFVBQVUsTUFBTSxDQUFDOztRQUc3Q3VCLGlCQUFnQjtRQUNoQkMsUUFBUSxDQUFDLEVBQUVDLEtBQUssRUFBRSxpQkFDaEIsNkJBQUNDLGlCQUFVQyxXQUFXLFFBQ25CdEIsT0FBT3VCLEdBQUcsQ0FBQyxDQUFDQyxhQUFhQyxrQkFDeEIsNkJBQUNKLGlCQUFVSyxNQUFNO29CQUNmYixXQUFXO3dCQUNULENBQUMsRUFBRWxCLFVBQVUsUUFBUSxDQUFDO3dCQUN0QjZCLGdCQUFnQkcsT0FBT3hCLFVBQVUsQ0FBQyxFQUFFUixVQUFVLGVBQWUsQ0FBQztxQkFDL0QsQ0FDRWlDLE1BQU0sQ0FBQ0MsU0FDUEMsSUFBSSxDQUFDO29CQUNSQyxLQUFLTjtvQkFDTE8sU0FBUzt3QkFDUFo7d0JBQ0EsSUFBSWxCLGNBQWNBLGFBQWFzQjt3QkFDL0IsSUFBSXBCLG9CQUFvQjs0QkFDdEJJLFFBQVF5QixPQUFPLENBQUM7Z0NBQ2RDLFFBQVFDLFdBQUUsQ0FBQ0MsU0FBUyxDQUNsQjtvQ0FDRSxHQUFHOUIsTUFBTTtvQ0FDVEgsT0FBT3FCO29DQUNQYSxNQUFNaEMsWUFBWSxJQUFJQyxPQUFPK0IsSUFBSTtnQ0FDbkMsR0FDQTtvQ0FBRUMsZ0JBQWdCO2dDQUFLOzRCQUUzQjt3QkFDRjtvQkFDRjttQkFFQ2QsZ0JBQWdCRyxPQUFPeEIsd0JBQ3RCLDZCQUFDUztvQkFBSUMsV0FBVyxDQUFDLEVBQUVsQixVQUFVLFNBQVMsQ0FBQztpQ0FDckMsNkJBQUNzQixnQkFBTztvQkFBQ3NCLFdBQVU7cUJBRXJCLG1CQUVGLDZCQUFDdkIsY0FBTVE7UUFLZmdCLE1BQUs7O0FBSWI7TUFFQSxXQUFldkMifQ==