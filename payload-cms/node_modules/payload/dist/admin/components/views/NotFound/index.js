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
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
const _Gutter = require("../../elements/Gutter");
const _StepNav = require("../../elements/StepNav");
const _Config = require("../../utilities/Config");
const _Meta = /*#__PURE__*/ _interop_require_default(require("../../utilities/Meta"));
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
const baseClass = 'not-found';
const NotFound = (props)=>{
    const { marginTop } = props;
    const { setStepNav } = (0, _StepNav.useStepNav)();
    const { routes: { admin } } = (0, _Config.useConfig)();
    const { t } = (0, _reacti18next.useTranslation)('general');
    (0, _react.useEffect)(()=>{
        setStepNav([
            {
                label: t('notFound')
            }
        ]);
    }, [
        setStepNav,
        t
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            baseClass,
            marginTop && `${baseClass}--margin-top-${marginTop}`
        ].filter(Boolean).join(' ')
    }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        description: t('pageNotFound'),
        keywords: `404 ${t('notFound')}`,
        title: t('notFound')
    }), /*#__PURE__*/ _react.default.createElement(_Gutter.Gutter, {
        className: `${baseClass}__wrap`
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t('nothingFound')), /*#__PURE__*/ _react.default.createElement("p", null, t('sorryNotFound')), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        className: `${baseClass}__button`,
        el: "link",
        to: `${admin}`
    }, t('backToDashboard'))));
};
const _default = NotFound;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL05vdEZvdW5kL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vZWxlbWVudHMvQnV0dG9uJ1xuaW1wb3J0IHsgR3V0dGVyIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvR3V0dGVyJ1xuaW1wb3J0IHsgdXNlU3RlcE5hdiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL1N0ZXBOYXYnXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJ1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL01ldGEnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ25vdC1mb3VuZCdcblxuY29uc3QgTm90Rm91bmQ6IFJlYWN0LkZDPHtcbiAgbWFyZ2luVG9wPzogJ2xhcmdlJ1xufT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBtYXJnaW5Ub3AgfSA9IHByb3BzXG5cbiAgY29uc3QgeyBzZXRTdGVwTmF2IH0gPSB1c2VTdGVwTmF2KClcblxuICBjb25zdCB7XG4gICAgcm91dGVzOiB7IGFkbWluIH0sXG4gIH0gPSB1c2VDb25maWcoKVxuXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RlcE5hdihbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiB0KCdub3RGb3VuZCcpLFxuICAgICAgfSxcbiAgICBdKVxuICB9LCBbc2V0U3RlcE5hdiwgdF0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1tiYXNlQ2xhc3MsIG1hcmdpblRvcCAmJiBgJHtiYXNlQ2xhc3N9LS1tYXJnaW4tdG9wLSR7bWFyZ2luVG9wfWBdXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgLmpvaW4oJyAnKX1cbiAgICA+XG4gICAgICA8TWV0YVxuICAgICAgICBkZXNjcmlwdGlvbj17dCgncGFnZU5vdEZvdW5kJyl9XG4gICAgICAgIGtleXdvcmRzPXtgNDA0ICR7dCgnbm90Rm91bmQnKX1gfVxuICAgICAgICB0aXRsZT17dCgnbm90Rm91bmQnKX1cbiAgICAgIC8+XG4gICAgICA8R3V0dGVyIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fd3JhcGB9PlxuICAgICAgICA8aDE+e3QoJ25vdGhpbmdGb3VuZCcpfTwvaDE+XG4gICAgICAgIDxwPnt0KCdzb3JyeU5vdEZvdW5kJyl9PC9wPlxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYnV0dG9uYH0gZWw9XCJsaW5rXCIgdG89e2Ake2FkbWlufWB9PlxuICAgICAgICAgIHt0KCdiYWNrVG9EYXNoYm9hcmQnKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0d1dHRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZFxuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIk5vdEZvdW5kIiwicHJvcHMiLCJtYXJnaW5Ub3AiLCJzZXRTdGVwTmF2IiwidXNlU3RlcE5hdiIsInJvdXRlcyIsImFkbWluIiwidXNlQ29uZmlnIiwidCIsInVzZVRyYW5zbGF0aW9uIiwidXNlRWZmZWN0IiwibGFiZWwiLCJkaXYiLCJjbGFzc05hbWUiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIk1ldGEiLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwidGl0bGUiLCJHdXR0ZXIiLCJoMSIsInAiLCJCdXR0b24iLCJlbCIsInRvIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBdURBOzs7ZUFBQTs7OytEQXZEaUM7OEJBQ0Y7K0RBRVo7d0JBQ0k7eUJBQ0k7d0JBQ0Q7NkRBQ1Q7UUFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxNQUFNQSxZQUFZO0FBRWxCLE1BQU1DLFdBRUQsQ0FBQ0M7SUFDSixNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHRDtJQUV0QixNQUFNLEVBQUVFLFVBQVUsRUFBRSxHQUFHQyxJQUFBQSxtQkFBVTtJQUVqQyxNQUFNLEVBQ0pDLFFBQVEsRUFBRUMsS0FBSyxFQUFFLEVBQ2xCLEdBQUdDLElBQUFBLGlCQUFTO0lBRWIsTUFBTSxFQUFFQyxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWMsRUFBQztJQUU3QkMsSUFBQUEsZ0JBQVMsRUFBQztRQUNSUCxXQUFXO1lBQ1Q7Z0JBQ0VRLE9BQU9ILEVBQUU7WUFDWDtTQUNEO0lBQ0gsR0FBRztRQUFDTDtRQUFZSztLQUFFO0lBRWxCLHFCQUNFLDZCQUFDSTtRQUNDQyxXQUFXO1lBQUNkO1lBQVdHLGFBQWEsQ0FBQyxFQUFFSCxVQUFVLGFBQWEsRUFBRUcsVUFBVSxDQUFDO1NBQUMsQ0FDekVZLE1BQU0sQ0FBQ0MsU0FDUEMsSUFBSSxDQUFDO3FCQUVSLDZCQUFDQyxhQUFJO1FBQ0hDLGFBQWFWLEVBQUU7UUFDZlcsVUFBVSxDQUFDLElBQUksRUFBRVgsRUFBRSxZQUFZLENBQUM7UUFDaENZLE9BQU9aLEVBQUU7c0JBRVgsNkJBQUNhLGNBQU07UUFBQ1IsV0FBVyxDQUFDLEVBQUVkLFVBQVUsTUFBTSxDQUFDO3FCQUNyQyw2QkFBQ3VCLFlBQUlkLEVBQUUsZ0NBQ1AsNkJBQUNlLFdBQUdmLEVBQUUsaUNBQ04sNkJBQUNnQixlQUFNO1FBQUNYLFdBQVcsQ0FBQyxFQUFFZCxVQUFVLFFBQVEsQ0FBQztRQUFFMEIsSUFBRztRQUFPQyxJQUFJLENBQUMsRUFBRXBCLE1BQU0sQ0FBQztPQUNoRUUsRUFBRTtBQUtiO01BRUEsV0FBZVIifQ==