"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NavToggler", {
    enumerable: true,
    get: function() {
        return NavToggler;
    }
});
const _windowinfo = require("@faceless-ui/window-info");
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacti18next = require("react-i18next");
const _Preferences = require("../../../utilities/Preferences");
const _context = require("../context");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const baseClass = 'nav-toggler';
const NavToggler = (props)=>{
    const { id, children, className, tabIndex = 0 } = props;
    const { t } = (0, _reacti18next.useTranslation)('general');
    const { setPreference } = (0, _Preferences.usePreferences)();
    const { navOpen, setNavOpen } = (0, _context.useNav)();
    const { breakpoints: { l: largeBreak } } = (0, _windowinfo.useWindowInfo)();
    return /*#__PURE__*/ _react.default.createElement("button", {
        "aria-label": `${navOpen ? t('close') : t('open')} ${t('menu')}`,
        className: [
            baseClass,
            navOpen && `${baseClass}--is-open`,
            className
        ].filter(Boolean).join(' '),
        id: id,
        onClick: async ()=>{
            setNavOpen(!navOpen);
            // only when the user explicitly toggles the nav on desktop do we want to set the preference
            // this is because the js may open or close the nav based on the window size, routing, etc
            if (!largeBreak) {
                await setPreference('nav', {
                    open: !navOpen
                });
            }
        },
        tabIndex: tabIndex,
        type: "button"
    }, children);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL05hdi9OYXZUb2dnbGVyL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXaW5kb3dJbmZvIH0gZnJvbSAnQGZhY2VsZXNzLXVpL3dpbmRvdy1pbmZvJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgeyB1c2VQcmVmZXJlbmNlcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9QcmVmZXJlbmNlcydcbmltcG9ydCB7IHVzZU5hdiB9IGZyb20gJy4uL2NvbnRleHQnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ25hdi10b2dnbGVyJ1xuXG5leHBvcnQgY29uc3QgTmF2VG9nZ2xlcjogUmVhY3QuRkM8e1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgaWQ/OiBzdHJpbmdcbiAgdGFiSW5kZXg/OiBudW1iZXJcbn0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaWQsIGNoaWxkcmVuLCBjbGFzc05hbWUsIHRhYkluZGV4ID0gMCB9ID0gcHJvcHNcblxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJylcblxuICBjb25zdCB7IHNldFByZWZlcmVuY2UgfSA9IHVzZVByZWZlcmVuY2VzKClcblxuICBjb25zdCB7IG5hdk9wZW4sIHNldE5hdk9wZW4gfSA9IHVzZU5hdigpXG5cbiAgY29uc3Qge1xuICAgIGJyZWFrcG9pbnRzOiB7IGw6IGxhcmdlQnJlYWsgfSxcbiAgfSA9IHVzZVdpbmRvd0luZm8oKVxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgYXJpYS1sYWJlbD17YCR7bmF2T3BlbiA/IHQoJ2Nsb3NlJykgOiB0KCdvcGVuJyl9ICR7dCgnbWVudScpfWB9XG4gICAgICBjbGFzc05hbWU9e1tiYXNlQ2xhc3MsIG5hdk9wZW4gJiYgYCR7YmFzZUNsYXNzfS0taXMtb3BlbmAsIGNsYXNzTmFtZV1cbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAuam9pbignICcpfVxuICAgICAgaWQ9e2lkfVxuICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICBzZXROYXZPcGVuKCFuYXZPcGVuKVxuXG4gICAgICAgIC8vIG9ubHkgd2hlbiB0aGUgdXNlciBleHBsaWNpdGx5IHRvZ2dsZXMgdGhlIG5hdiBvbiBkZXNrdG9wIGRvIHdlIHdhbnQgdG8gc2V0IHRoZSBwcmVmZXJlbmNlXG4gICAgICAgIC8vIHRoaXMgaXMgYmVjYXVzZSB0aGUganMgbWF5IG9wZW4gb3IgY2xvc2UgdGhlIG5hdiBiYXNlZCBvbiB0aGUgd2luZG93IHNpemUsIHJvdXRpbmcsIGV0Y1xuICAgICAgICBpZiAoIWxhcmdlQnJlYWspIHtcbiAgICAgICAgICBhd2FpdCBzZXRQcmVmZXJlbmNlKCduYXYnLCB7XG4gICAgICAgICAgICBvcGVuOiAhbmF2T3BlbixcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgdGFiSW5kZXg9e3RhYkluZGV4fVxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApXG59XG4iXSwibmFtZXMiOlsiTmF2VG9nZ2xlciIsImJhc2VDbGFzcyIsInByb3BzIiwiaWQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInRhYkluZGV4IiwidCIsInVzZVRyYW5zbGF0aW9uIiwic2V0UHJlZmVyZW5jZSIsInVzZVByZWZlcmVuY2VzIiwibmF2T3BlbiIsInNldE5hdk9wZW4iLCJ1c2VOYXYiLCJicmVha3BvaW50cyIsImwiLCJsYXJnZUJyZWFrIiwidXNlV2luZG93SW5mbyIsImJ1dHRvbiIsImFyaWEtbGFiZWwiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIm9uQ2xpY2siLCJvcGVuIiwidHlwZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQVVhQTs7O2VBQUFBOzs7NEJBVmlCOzhEQUNaOzhCQUNhOzZCQUVBO3lCQUNSO1FBQ2hCOzs7Ozs7QUFFUCxNQUFNQyxZQUFZO0FBRVgsTUFBTUQsYUFLUixDQUFDRTtJQUNKLE1BQU0sRUFBRUMsRUFBRSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxDQUFDLEVBQUUsR0FBR0o7SUFFbEQsTUFBTSxFQUFFSyxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWMsRUFBQztJQUU3QixNQUFNLEVBQUVDLGFBQWEsRUFBRSxHQUFHQyxJQUFBQSwyQkFBYztJQUV4QyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFLEdBQUdDLElBQUFBLGVBQU07SUFFdEMsTUFBTSxFQUNKQyxhQUFhLEVBQUVDLEdBQUdDLFVBQVUsRUFBRSxFQUMvQixHQUFHQyxJQUFBQSx5QkFBYTtJQUVqQixxQkFDRSw2QkFBQ0M7UUFDQ0MsY0FBWSxDQUFDLEVBQUVSLFVBQVVKLEVBQUUsV0FBV0EsRUFBRSxRQUFRLENBQUMsRUFBRUEsRUFBRSxRQUFRLENBQUM7UUFDOURGLFdBQVc7WUFBQ0o7WUFBV1UsV0FBVyxDQUFDLEVBQUVWLFVBQVUsU0FBUyxDQUFDO1lBQUVJO1NBQVUsQ0FDbEVlLE1BQU0sQ0FBQ0MsU0FDUEMsSUFBSSxDQUFDO1FBQ1JuQixJQUFJQTtRQUNKb0IsU0FBUztZQUNQWCxXQUFXLENBQUNEO1lBRVosNEZBQTRGO1lBQzVGLDBGQUEwRjtZQUMxRixJQUFJLENBQUNLLFlBQVk7Z0JBQ2YsTUFBTVAsY0FBYyxPQUFPO29CQUN6QmUsTUFBTSxDQUFDYjtnQkFDVDtZQUNGO1FBQ0Y7UUFDQUwsVUFBVUE7UUFDVm1CLE1BQUs7T0FFSnJCO0FBR1AifQ==