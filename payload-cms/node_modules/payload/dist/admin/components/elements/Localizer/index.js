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
const _getTranslation = require("../../../../utilities/getTranslation");
const _Config = require("../../utilities/Config");
const _Locale = require("../../utilities/Locale");
const _SearchParams = require("../../utilities/SearchParams");
const _Popup = /*#__PURE__*/ _interop_require_default(require("../Popup"));
const _PopupButtonList = /*#__PURE__*/ _interop_require_wildcard(require("../Popup/PopupButtonList"));
const _LocalizerLabel = require("./LocalizerLabel");
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
const baseClass = 'localizer';
const Localizer = (props)=>{
    const { className } = props;
    const config = (0, _Config.useConfig)();
    const { localization } = config;
    const { i18n } = (0, _reacti18next.useTranslation)();
    const locale = (0, _Locale.useLocale)();
    const searchParams = (0, _SearchParams.useSearchParams)();
    const localeLabel = (0, _getTranslation.getTranslation)(locale.label, i18n);
    if (localization) {
        const { locales } = localization;
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: [
                baseClass,
                className
            ].filter(Boolean).join(' ')
        }, /*#__PURE__*/ _react.default.createElement(_Popup.default, {
            button: /*#__PURE__*/ _react.default.createElement(_LocalizerLabel.LocalizerLabel, null),
            horizontalAlign: "right",
            render: ({ close })=>/*#__PURE__*/ _react.default.createElement(_PopupButtonList.ButtonGroup, null, /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, locale ? /*#__PURE__*/ _react.default.createElement(_PopupButtonList.Button, {
                    active: true,
                    key: locale.code,
                    onClick: close,
                    to: {
                        search: _qs.default.stringify({
                            ...searchParams,
                            locale: locale.code
                        })
                    }
                }, localeLabel, localeLabel !== locale.code && ` (${locale.code})`) : null, locales.map((localeOption)=>{
                    if (locale.code === localeOption.code) return null;
                    const newParams = {
                        ...searchParams,
                        locale: localeOption.code
                    };
                    const search = _qs.default.stringify(newParams);
                    const localeOptionLabel = (0, _getTranslation.getTranslation)(localeOption.label, i18n);
                    return /*#__PURE__*/ _react.default.createElement(_PopupButtonList.Button, {
                        key: localeOption.code,
                        onClick: close,
                        to: {
                            search
                        }
                    }, localeOptionLabel, localeOptionLabel !== localeOption.code && ` (${localeOption.code})`);
                }))),
            showScrollbar: true,
            size: "large"
        }));
    }
    return null;
};
const _default = Localizer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xvY2FsaXplci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzIGZyb20gJ3FzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTG9jYWxlJ1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1NlYXJjaFBhcmFtcydcbmltcG9ydCBQb3B1cCBmcm9tICcuLi9Qb3B1cCdcbmltcG9ydCAqIGFzIFBvcHVwTGlzdCBmcm9tICcuLi9Qb3B1cC9Qb3B1cEJ1dHRvbkxpc3QnXG5pbXBvcnQgeyBMb2NhbGl6ZXJMYWJlbCB9IGZyb20gJy4vTG9jYWxpemVyTGFiZWwnXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgYmFzZUNsYXNzID0gJ2xvY2FsaXplcidcblxuY29uc3QgTG9jYWxpemVyOiBSZWFjdC5GQzx7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xufT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BzXG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZygpXG4gIGNvbnN0IHsgbG9jYWxpemF0aW9uIH0gPSBjb25maWdcblxuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgbG9jYWxlID0gdXNlTG9jYWxlKClcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKClcblxuICBjb25zdCBsb2NhbGVMYWJlbCA9IGdldFRyYW5zbGF0aW9uKGxvY2FsZS5sYWJlbCwgaTE4bilcblxuICBpZiAobG9jYWxpemF0aW9uKSB7XG4gICAgY29uc3QgeyBsb2NhbGVzIH0gPSBsb2NhbGl6YXRpb25cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17W2Jhc2VDbGFzcywgY2xhc3NOYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfT5cbiAgICAgICAgPFBvcHVwXG4gICAgICAgICAgYnV0dG9uPXs8TG9jYWxpemVyTGFiZWwgLz59XG4gICAgICAgICAgaG9yaXpvbnRhbEFsaWduPVwicmlnaHRcIlxuICAgICAgICAgIHJlbmRlcj17KHsgY2xvc2UgfSkgPT4gKFxuICAgICAgICAgICAgPFBvcHVwTGlzdC5CdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIHtsb2NhbGUgPyAoXG4gICAgICAgICAgICAgICAgICA8UG9wdXBMaXN0LkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAga2V5PXtsb2NhbGUuY29kZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiBxcy5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2VhcmNoUGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiBsb2NhbGUuY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2xvY2FsZUxhYmVsfVxuICAgICAgICAgICAgICAgICAgICB7bG9jYWxlTGFiZWwgIT09IGxvY2FsZS5jb2RlICYmIGAgKCR7bG9jYWxlLmNvZGV9KWB9XG4gICAgICAgICAgICAgICAgICA8L1BvcHVwTGlzdC5CdXR0b24+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICB7bG9jYWxlcy5tYXAoKGxvY2FsZU9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsZS5jb2RlID09PSBsb2NhbGVPcHRpb24uY29kZSkgcmV0dXJuIG51bGxcblxuICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zZWFyY2hQYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogbG9jYWxlT3B0aW9uLmNvZGUsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2ggPSBxcy5zdHJpbmdpZnkobmV3UGFyYW1zKVxuICAgICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlT3B0aW9uTGFiZWwgPSBnZXRUcmFuc2xhdGlvbihsb2NhbGVPcHRpb24ubGFiZWwsIGkxOG4pXG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxQb3B1cExpc3QuQnV0dG9uIGtleT17bG9jYWxlT3B0aW9uLmNvZGV9IG9uQ2xpY2s9e2Nsb3NlfSB0bz17eyBzZWFyY2ggfX0+XG4gICAgICAgICAgICAgICAgICAgICAge2xvY2FsZU9wdGlvbkxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgIHtsb2NhbGVPcHRpb25MYWJlbCAhPT0gbG9jYWxlT3B0aW9uLmNvZGUgJiYgYCAoJHtsb2NhbGVPcHRpb24uY29kZX0pYH1cbiAgICAgICAgICAgICAgICAgICAgPC9Qb3B1cExpc3QuQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPC9Qb3B1cExpc3QuQnV0dG9uR3JvdXA+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBzaG93U2Nyb2xsYmFyXG4gICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsaXplclxuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkxvY2FsaXplciIsInByb3BzIiwiY2xhc3NOYW1lIiwiY29uZmlnIiwidXNlQ29uZmlnIiwibG9jYWxpemF0aW9uIiwiaTE4biIsInVzZVRyYW5zbGF0aW9uIiwibG9jYWxlIiwidXNlTG9jYWxlIiwic2VhcmNoUGFyYW1zIiwidXNlU2VhcmNoUGFyYW1zIiwibG9jYWxlTGFiZWwiLCJnZXRUcmFuc2xhdGlvbiIsImxhYmVsIiwibG9jYWxlcyIsImRpdiIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiUG9wdXAiLCJidXR0b24iLCJMb2NhbGl6ZXJMYWJlbCIsImhvcml6b250YWxBbGlnbiIsInJlbmRlciIsImNsb3NlIiwiUG9wdXBMaXN0IiwiQnV0dG9uR3JvdXAiLCJSZWFjdCIsIkZyYWdtZW50IiwiQnV0dG9uIiwiYWN0aXZlIiwia2V5IiwiY29kZSIsIm9uQ2xpY2siLCJ0byIsInNlYXJjaCIsInFzIiwic3RyaW5naWZ5IiwibWFwIiwibG9jYWxlT3B0aW9uIiwibmV3UGFyYW1zIiwibG9jYWxlT3B0aW9uTGFiZWwiLCJzaG93U2Nyb2xsYmFyIiwic2l6ZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXNGQTs7O2VBQUE7OzsyREF0RmU7OERBQ0c7OEJBQ2E7Z0NBRUE7d0JBQ0w7d0JBQ0E7OEJBQ007OERBQ2Q7eUVBQ1M7Z0NBQ0k7UUFDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsTUFBTUEsWUFBWTtBQUVsQixNQUFNQyxZQUVELENBQUNDO0lBQ0osTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0Q7SUFDdEIsTUFBTUUsU0FBU0MsSUFBQUEsaUJBQVM7SUFDeEIsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBR0Y7SUFFekIsTUFBTSxFQUFFRyxJQUFJLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWM7SUFDL0IsTUFBTUMsU0FBU0MsSUFBQUEsaUJBQVM7SUFDeEIsTUFBTUMsZUFBZUMsSUFBQUEsNkJBQWU7SUFFcEMsTUFBTUMsY0FBY0MsSUFBQUEsOEJBQWMsRUFBQ0wsT0FBT00sS0FBSyxFQUFFUjtJQUVqRCxJQUFJRCxjQUFjO1FBQ2hCLE1BQU0sRUFBRVUsT0FBTyxFQUFFLEdBQUdWO1FBRXBCLHFCQUNFLDZCQUFDVztZQUFJZCxXQUFXO2dCQUFDSDtnQkFBV0c7YUFBVSxDQUFDZSxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQzt5QkFDMUQsNkJBQUNDLGNBQUs7WUFDSkMsc0JBQVEsNkJBQUNDLDhCQUFjO1lBQ3ZCQyxpQkFBZ0I7WUFDaEJDLFFBQVEsQ0FBQyxFQUFFQyxLQUFLLEVBQUUsaUJBQ2hCLDZCQUFDQyxpQkFBVUMsV0FBVyxzQkFDcEIsNkJBQUNDLGNBQUssQ0FBQ0MsUUFBUSxRQUNackIsdUJBQ0MsNkJBQUNrQixpQkFBVUksTUFBTTtvQkFDZkMsUUFBQUE7b0JBQ0FDLEtBQUt4QixPQUFPeUIsSUFBSTtvQkFDaEJDLFNBQVNUO29CQUNUVSxJQUFJO3dCQUNGQyxRQUFRQyxXQUFFLENBQUNDLFNBQVMsQ0FBQzs0QkFDbkIsR0FBRzVCLFlBQVk7NEJBQ2ZGLFFBQVFBLE9BQU95QixJQUFJO3dCQUNyQjtvQkFDRjttQkFFQ3JCLGFBQ0FBLGdCQUFnQkosT0FBT3lCLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRXpCLE9BQU95QixJQUFJLENBQUMsQ0FBQyxDQUFDLElBRW5ELE1BRUhsQixRQUFRd0IsR0FBRyxDQUFDLENBQUNDO29CQUNaLElBQUloQyxPQUFPeUIsSUFBSSxLQUFLTyxhQUFhUCxJQUFJLEVBQUUsT0FBTztvQkFFOUMsTUFBTVEsWUFBWTt3QkFDaEIsR0FBRy9CLFlBQVk7d0JBQ2ZGLFFBQVFnQyxhQUFhUCxJQUFJO29CQUMzQjtvQkFDQSxNQUFNRyxTQUFTQyxXQUFFLENBQUNDLFNBQVMsQ0FBQ0c7b0JBQzVCLE1BQU1DLG9CQUFvQjdCLElBQUFBLDhCQUFjLEVBQUMyQixhQUFhMUIsS0FBSyxFQUFFUjtvQkFFN0QscUJBQ0UsNkJBQUNvQixpQkFBVUksTUFBTTt3QkFBQ0UsS0FBS1EsYUFBYVAsSUFBSTt3QkFBRUMsU0FBU1Q7d0JBQU9VLElBQUk7NEJBQUVDO3dCQUFPO3VCQUNwRU0sbUJBQ0FBLHNCQUFzQkYsYUFBYVAsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFTyxhQUFhUCxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUczRTtZQUlOVSxlQUFBQTtZQUNBQyxNQUFLOztJQUliO0lBRUEsT0FBTztBQUNUO01BRUEsV0FBZTVDIn0=