"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DocumentTab", {
    enumerable: true,
    get: function() {
        return DocumentTab;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _reactrouterdom = require("react-router-dom");
const _Config = require("../../../../utilities/Config");
const _DocumentInfo = require("../../../../utilities/DocumentInfo");
require("./index.scss");
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
const baseClass = 'doc-tab';
const DocumentTab = (props)=>{
    const { id, apiURL, collection, condition, global, href: tabHref, isActive: checkIsActive, label, newTab, pillLabel } = props;
    const { t } = (0, _reacti18next.useTranslation)('general');
    const location = (0, _reactrouterdom.useLocation)();
    const config = (0, _Config.useConfig)();
    const documentInfo = (0, _DocumentInfo.useDocumentInfo)();
    const match = (0, _reactrouterdom.useRouteMatch)();
    const { routes } = config;
    const { versions } = documentInfo;
    let href = `${match.url}${typeof tabHref === 'string' ? tabHref : ''}`;
    if (typeof tabHref === 'function') {
        href = tabHref({
            id,
            apiURL,
            collection,
            global,
            match,
            routes
        });
    }
    const isActive = typeof checkIsActive === 'function' ? checkIsActive({
        href,
        location,
        match
    }) : typeof checkIsActive === 'boolean' ? checkIsActive : location.pathname.startsWith(href);
    if (!condition || condition && Boolean(condition({
        collection,
        config,
        documentInfo,
        global
    }))) {
        const labelToRender = typeof label === 'function' ? label({
            t
        }) : label;
        const pillToRender = typeof pillLabel === 'function' ? pillLabel({
            versions
        }) : pillLabel;
        return /*#__PURE__*/ _react.default.createElement("li", {
            className: [
                baseClass,
                isActive && `${baseClass}--active`
            ].filter(Boolean).join(' ')
        }, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
            className: `${baseClass}__link`,
            to: href,
            ...newTab && {
                rel: 'noopener noreferrer',
                target: '_blank'
            },
            tabIndex: isActive ? -1 : 0
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: `${baseClass}__label`
        }, labelToRender, pillToRender && /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, " ", /*#__PURE__*/ _react.default.createElement("span", {
            className: `${baseClass}__count`
        }, pillToRender)))));
    }
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RvY3VtZW50SGVhZGVyL1RhYnMvVGFiL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcbmltcG9ydCB7IExpbmssIHVzZUxvY2F0aW9uLCB1c2VSb3V0ZU1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHR5cGUgeyBEb2N1bWVudFRhYkNvbmZpZyB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBEb2N1bWVudFRhYlByb3BzIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnXG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJ1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnXG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdkb2MtdGFiJ1xuXG5leHBvcnQgY29uc3QgRG9jdW1lbnRUYWI6IFJlYWN0LkZDPERvY3VtZW50VGFiUHJvcHMgJiBEb2N1bWVudFRhYkNvbmZpZz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGFwaVVSTCxcbiAgICBjb2xsZWN0aW9uLFxuICAgIGNvbmRpdGlvbixcbiAgICBnbG9iYWwsXG4gICAgaHJlZjogdGFiSHJlZixcbiAgICBpc0FjdGl2ZTogY2hlY2tJc0FjdGl2ZSxcbiAgICBsYWJlbCxcbiAgICBuZXdUYWIsXG4gICAgcGlsbExhYmVsLFxuICB9ID0gcHJvcHNcblxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJylcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZygpXG4gIGNvbnN0IGRvY3VtZW50SW5mbyA9IHVzZURvY3VtZW50SW5mbygpXG4gIGNvbnN0IG1hdGNoID0gdXNlUm91dGVNYXRjaCgpXG5cbiAgY29uc3QgeyByb3V0ZXMgfSA9IGNvbmZpZ1xuICBjb25zdCB7IHZlcnNpb25zIH0gPSBkb2N1bWVudEluZm9cblxuICBsZXQgaHJlZiA9IGAke21hdGNoLnVybH0ke3R5cGVvZiB0YWJIcmVmID09PSAnc3RyaW5nJyA/IHRhYkhyZWYgOiAnJ31gXG5cbiAgaWYgKHR5cGVvZiB0YWJIcmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaHJlZiA9IHRhYkhyZWYoe1xuICAgICAgaWQsXG4gICAgICBhcGlVUkwsXG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgZ2xvYmFsLFxuICAgICAgbWF0Y2gsXG4gICAgICByb3V0ZXMsXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGlzQWN0aXZlID1cbiAgICB0eXBlb2YgY2hlY2tJc0FjdGl2ZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyBjaGVja0lzQWN0aXZlKHsgaHJlZiwgbG9jYXRpb24sIG1hdGNoIH0pXG4gICAgICA6IHR5cGVvZiBjaGVja0lzQWN0aXZlID09PSAnYm9vbGVhbidcbiAgICAgID8gY2hlY2tJc0FjdGl2ZVxuICAgICAgOiBsb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKGhyZWYpXG5cbiAgaWYgKFxuICAgICFjb25kaXRpb24gfHxcbiAgICAoY29uZGl0aW9uICYmIEJvb2xlYW4oY29uZGl0aW9uKHsgY29sbGVjdGlvbiwgY29uZmlnLCBkb2N1bWVudEluZm8sIGdsb2JhbCB9KSkpXG4gICkge1xuICAgIGNvbnN0IGxhYmVsVG9SZW5kZXIgPSB0eXBlb2YgbGFiZWwgPT09ICdmdW5jdGlvbicgPyBsYWJlbCh7IHQgfSkgOiBsYWJlbFxuICAgIGNvbnN0IHBpbGxUb1JlbmRlciA9IHR5cGVvZiBwaWxsTGFiZWwgPT09ICdmdW5jdGlvbicgPyBwaWxsTGFiZWwoeyB2ZXJzaW9ucyB9KSA6IHBpbGxMYWJlbFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9e1tiYXNlQ2xhc3MsIGlzQWN0aXZlICYmIGAke2Jhc2VDbGFzc30tLWFjdGl2ZWBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9PlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGlua2B9XG4gICAgICAgICAgdG89e2hyZWZ9XG4gICAgICAgICAgey4uLihuZXdUYWIgJiYgeyByZWw6ICdub29wZW5lciBub3JlZmVycmVyJywgdGFyZ2V0OiAnX2JsYW5rJyB9KX1cbiAgICAgICAgICB0YWJJbmRleD17aXNBY3RpdmUgPyAtMSA6IDB9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+XG4gICAgICAgICAgICB7bGFiZWxUb1JlbmRlcn1cbiAgICAgICAgICAgIHtwaWxsVG9SZW5kZXIgJiYgKFxuICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jb3VudGB9PntwaWxsVG9SZW5kZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cbiJdLCJuYW1lcyI6WyJEb2N1bWVudFRhYiIsImJhc2VDbGFzcyIsInByb3BzIiwiaWQiLCJhcGlVUkwiLCJjb2xsZWN0aW9uIiwiY29uZGl0aW9uIiwiZ2xvYmFsIiwiaHJlZiIsInRhYkhyZWYiLCJpc0FjdGl2ZSIsImNoZWNrSXNBY3RpdmUiLCJsYWJlbCIsIm5ld1RhYiIsInBpbGxMYWJlbCIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImxvY2F0aW9uIiwidXNlTG9jYXRpb24iLCJjb25maWciLCJ1c2VDb25maWciLCJkb2N1bWVudEluZm8iLCJ1c2VEb2N1bWVudEluZm8iLCJtYXRjaCIsInVzZVJvdXRlTWF0Y2giLCJyb3V0ZXMiLCJ2ZXJzaW9ucyIsInVybCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsIkJvb2xlYW4iLCJsYWJlbFRvUmVuZGVyIiwicGlsbFRvUmVuZGVyIiwibGkiLCJjbGFzc05hbWUiLCJmaWx0ZXIiLCJqb2luIiwiTGluayIsInRvIiwicmVsIiwidGFyZ2V0IiwidGFiSW5kZXgiLCJzcGFuIiwiRnJhZ21lbnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFhYUE7OztlQUFBQTs7OytEQWJtQjs4QkFDRDtnQ0FDa0I7d0JBS3ZCOzhCQUNNO1FBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxNQUFNQyxZQUFZO0FBRVgsTUFBTUQsY0FBOEQsQ0FBQ0U7SUFDMUUsTUFBTSxFQUNKQyxFQUFFLEVBQ0ZDLE1BQU0sRUFDTkMsVUFBVSxFQUNWQyxTQUFTLEVBQ1RDLE1BQU0sRUFDTkMsTUFBTUMsT0FBTyxFQUNiQyxVQUFVQyxhQUFhLEVBQ3ZCQyxLQUFLLEVBQ0xDLE1BQU0sRUFDTkMsU0FBUyxFQUNWLEdBQUdaO0lBRUosTUFBTSxFQUFFYSxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWMsRUFBQztJQUM3QixNQUFNQyxXQUFXQyxJQUFBQSwyQkFBVztJQUM1QixNQUFNQyxTQUFTQyxJQUFBQSxpQkFBUztJQUN4QixNQUFNQyxlQUFlQyxJQUFBQSw2QkFBZTtJQUNwQyxNQUFNQyxRQUFRQyxJQUFBQSw2QkFBYTtJQUUzQixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHTjtJQUNuQixNQUFNLEVBQUVPLFFBQVEsRUFBRSxHQUFHTDtJQUVyQixJQUFJYixPQUFPLENBQUMsRUFBRWUsTUFBTUksR0FBRyxDQUFDLEVBQUUsT0FBT2xCLFlBQVksV0FBV0EsVUFBVSxHQUFHLENBQUM7SUFFdEUsSUFBSSxPQUFPQSxZQUFZLFlBQVk7UUFDakNELE9BQU9DLFFBQVE7WUFDYk47WUFDQUM7WUFDQUM7WUFDQUU7WUFDQWdCO1lBQ0FFO1FBQ0Y7SUFDRjtJQUVBLE1BQU1mLFdBQ0osT0FBT0Msa0JBQWtCLGFBQ3JCQSxjQUFjO1FBQUVIO1FBQU1TO1FBQVVNO0lBQU0sS0FDdEMsT0FBT1osa0JBQWtCLFlBQ3pCQSxnQkFDQU0sU0FBU1csUUFBUSxDQUFDQyxVQUFVLENBQUNyQjtJQUVuQyxJQUNFLENBQUNGLGFBQ0FBLGFBQWF3QixRQUFReEIsVUFBVTtRQUFFRDtRQUFZYztRQUFRRTtRQUFjZDtJQUFPLEtBQzNFO1FBQ0EsTUFBTXdCLGdCQUFnQixPQUFPbkIsVUFBVSxhQUFhQSxNQUFNO1lBQUVHO1FBQUUsS0FBS0g7UUFDbkUsTUFBTW9CLGVBQWUsT0FBT2xCLGNBQWMsYUFBYUEsVUFBVTtZQUFFWTtRQUFTLEtBQUtaO1FBRWpGLHFCQUNFLDZCQUFDbUI7WUFBR0MsV0FBVztnQkFBQ2pDO2dCQUFXUyxZQUFZLENBQUMsRUFBRVQsVUFBVSxRQUFRLENBQUM7YUFBQyxDQUFDa0MsTUFBTSxDQUFDTCxTQUFTTSxJQUFJLENBQUM7eUJBQ2xGLDZCQUFDQyxvQkFBSTtZQUNISCxXQUFXLENBQUMsRUFBRWpDLFVBQVUsTUFBTSxDQUFDO1lBQy9CcUMsSUFBSTlCO1lBQ0gsR0FBSUssVUFBVTtnQkFBRTBCLEtBQUs7Z0JBQXVCQyxRQUFRO1lBQVMsQ0FBQztZQUMvREMsVUFBVS9CLFdBQVcsQ0FBQyxJQUFJO3lCQUUxQiw2QkFBQ2dDO1lBQUtSLFdBQVcsQ0FBQyxFQUFFakMsVUFBVSxPQUFPLENBQUM7V0FDbkM4QixlQUNBQyw4QkFDQyw2QkFBQ1csZUFBUSxRQUFDLG1CQUVSLDZCQUFDRDtZQUFLUixXQUFXLENBQUMsRUFBRWpDLFVBQVUsT0FBTyxDQUFDO1dBQUcrQjtJQU92RDtJQUVBLE9BQU87QUFDVCJ9