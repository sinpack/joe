"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "defaultOptions", {
    enumerable: true,
    get: function() {
        return defaultOptions;
    }
});
const _index = /*#__PURE__*/ _interop_require_default(require("./index"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const defaultOptions = {
    debug: false,
    detection: {
        caches: [
            'cookie',
            'localStorage',
            'header'
        ],
        lookupCookie: 'lng',
        lookupLocalStorage: 'lng',
        order: [
            'cookie',
            'localStorage',
            'header'
        ]
    },
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    },
    resources: _index.default,
    supportedLngs: Object.keys(_index.default)
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2xhdGlvbnMvZGVmYXVsdE9wdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBJbml0T3B0aW9ucyB9IGZyb20gJ2kxOG5leHQnXG5cbmltcG9ydCB0cmFuc2xhdGlvbnMgZnJvbSAnLi9pbmRleCdcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPcHRpb25zOiBJbml0T3B0aW9ucyA9IHtcbiAgZGVidWc6IGZhbHNlLFxuICBkZXRlY3Rpb246IHtcbiAgICBjYWNoZXM6IFsnY29va2llJywgJ2xvY2FsU3RvcmFnZScsICdoZWFkZXInXSxcbiAgICBsb29rdXBDb29raWU6ICdsbmcnLFxuICAgIGxvb2t1cExvY2FsU3RvcmFnZTogJ2xuZycsXG4gICAgb3JkZXI6IFsnY29va2llJywgJ2xvY2FsU3RvcmFnZScsICdoZWFkZXInXSxcbiAgfSxcbiAgZmFsbGJhY2tMbmc6ICdlbicsXG4gIGludGVycG9sYXRpb246IHtcbiAgICBlc2NhcGVWYWx1ZTogZmFsc2UsXG4gIH0sXG4gIHJlc291cmNlczogdHJhbnNsYXRpb25zLFxuICBzdXBwb3J0ZWRMbmdzOiBPYmplY3Qua2V5cyh0cmFuc2xhdGlvbnMpLFxufVxuIl0sIm5hbWVzIjpbImRlZmF1bHRPcHRpb25zIiwiZGVidWciLCJkZXRlY3Rpb24iLCJjYWNoZXMiLCJsb29rdXBDb29raWUiLCJsb29rdXBMb2NhbFN0b3JhZ2UiLCJvcmRlciIsImZhbGxiYWNrTG5nIiwiaW50ZXJwb2xhdGlvbiIsImVzY2FwZVZhbHVlIiwicmVzb3VyY2VzIiwidHJhbnNsYXRpb25zIiwic3VwcG9ydGVkTG5ncyIsIk9iamVjdCIsImtleXMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBSWFBOzs7ZUFBQUE7Ozs4REFGWTs7Ozs7O0FBRWxCLE1BQU1BLGlCQUE4QjtJQUN6Q0MsT0FBTztJQUNQQyxXQUFXO1FBQ1RDLFFBQVE7WUFBQztZQUFVO1lBQWdCO1NBQVM7UUFDNUNDLGNBQWM7UUFDZEMsb0JBQW9CO1FBQ3BCQyxPQUFPO1lBQUM7WUFBVTtZQUFnQjtTQUFTO0lBQzdDO0lBQ0FDLGFBQWE7SUFDYkMsZUFBZTtRQUNiQyxhQUFhO0lBQ2Y7SUFDQUMsV0FBV0MsY0FBWTtJQUN2QkMsZUFBZUMsT0FBT0MsSUFBSSxDQUFDSCxjQUFZO0FBQ3pDIn0=