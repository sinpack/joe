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
    Meta: function() {
        return _Meta.default;
    },
    buildStateFromSchema: function() {
        return _buildStateFromSchema.default;
    },
    useAuth: function() {
        return _Auth.useAuth;
    },
    useCollapsible: function() {
        return _provider.useCollapsible;
    },
    useConfig: function() {
        return _Config.useConfig;
    },
    useDocumentInfo: function() {
        return _DocumentInfo.useDocumentInfo;
    },
    useEditDepth: function() {
        return _EditDepth.useEditDepth;
    },
    useLocale: function() {
        return _Locale.useLocale;
    },
    useTheme: function() {
        return _Theme.useTheme;
    },
    withMergedProps: function() {
        return _WithMergedProps.withMergedProps;
    }
});
const _provider = require("../dist/admin/components/elements/Collapsible/provider");
const _buildStateFromSchema = /*#__PURE__*/ _interop_require_default(require("../dist/admin/components/forms/Form/buildStateFromSchema"));
const _Auth = require("../dist/admin/components/utilities/Auth");
const _Config = require("../dist/admin/components/utilities/Config");
const _DocumentInfo = require("../dist/admin/components/utilities/DocumentInfo");
const _EditDepth = require("../dist/admin/components/utilities/EditDepth");
const _Locale = require("../dist/admin/components/utilities/Locale");
const _Meta = /*#__PURE__*/ _interop_require_default(require("../dist/admin/components/utilities/Meta"));
const _Theme = require("../dist/admin/components/utilities/Theme");
const _WithMergedProps = require("../dist/admin/components/utilities/WithMergedProps");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHBvcnRzL2NvbXBvbmVudHMvdXRpbGl0aWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IHVzZUNvbGxhcHNpYmxlIH0gZnJvbSAnLi4vLi4vYWRtaW4vY29tcG9uZW50cy9lbGVtZW50cy9Db2xsYXBzaWJsZS9wcm92aWRlcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYnVpbGRTdGF0ZUZyb21TY2hlbWEgfSBmcm9tICcuLi8uLi9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vYnVpbGRTdGF0ZUZyb21TY2hlbWEnXG5leHBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vYWRtaW4vY29tcG9uZW50cy91dGlsaXRpZXMvQXV0aCdcbmV4cG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL2FkbWluL2NvbXBvbmVudHMvdXRpbGl0aWVzL0NvbmZpZydcbmV4cG9ydCB7IHVzZURvY3VtZW50SW5mbyB9IGZyb20gJy4uLy4uL2FkbWluL2NvbXBvbmVudHMvdXRpbGl0aWVzL0RvY3VtZW50SW5mbydcbmV4cG9ydCB7IHVzZUVkaXREZXB0aCB9IGZyb20gJy4uLy4uL2FkbWluL2NvbXBvbmVudHMvdXRpbGl0aWVzL0VkaXREZXB0aCdcbmV4cG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJy4uLy4uL2FkbWluL2NvbXBvbmVudHMvdXRpbGl0aWVzL0xvY2FsZSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWV0YSB9IGZyb20gJy4uLy4uL2FkbWluL2NvbXBvbmVudHMvdXRpbGl0aWVzL01ldGEnXG5leHBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL2FkbWluL2NvbXBvbmVudHMvdXRpbGl0aWVzL1RoZW1lJ1xuZXhwb3J0IHsgd2l0aE1lcmdlZFByb3BzIH0gZnJvbSAnLi4vLi4vYWRtaW4vY29tcG9uZW50cy91dGlsaXRpZXMvV2l0aE1lcmdlZFByb3BzJ1xuIl0sIm5hbWVzIjpbIk1ldGEiLCJidWlsZFN0YXRlRnJvbVNjaGVtYSIsInVzZUF1dGgiLCJ1c2VDb2xsYXBzaWJsZSIsInVzZUNvbmZpZyIsInVzZURvY3VtZW50SW5mbyIsInVzZUVkaXREZXB0aCIsInVzZUxvY2FsZSIsInVzZVRoZW1lIiwid2l0aE1lcmdlZFByb3BzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFPb0JBLElBQUk7ZUFBSkEsYUFBSTs7SUFOSkMsb0JBQW9CO2VBQXBCQSw2QkFBb0I7O0lBQy9CQyxPQUFPO2VBQVBBLGFBQU87O0lBRlBDLGNBQWM7ZUFBZEEsd0JBQWM7O0lBR2RDLFNBQVM7ZUFBVEEsaUJBQVM7O0lBQ1RDLGVBQWU7ZUFBZkEsNkJBQWU7O0lBQ2ZDLFlBQVk7ZUFBWkEsdUJBQVk7O0lBQ1pDLFNBQVM7ZUFBVEEsaUJBQVM7O0lBRVRDLFFBQVE7ZUFBUkEsZUFBUTs7SUFDUkMsZUFBZTtlQUFmQSxnQ0FBZTs7OzBCQVRPOzZFQUNpQjtzQkFDeEI7d0JBQ0U7OEJBQ007MkJBQ0g7d0JBQ0g7NkRBQ007dUJBQ1A7aUNBQ08ifQ==