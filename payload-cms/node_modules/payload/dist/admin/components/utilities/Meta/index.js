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
const _react = /*#__PURE__*/ _interop_require_default(require("react"));
const _reacthelmet = /*#__PURE__*/ _interop_require_default(require("react-helmet"));
const _reacti18next = require("react-i18next");
const _faviconsvg = /*#__PURE__*/ _interop_require_default(require("../../../assets/images/favicon.svg"));
const _ogimagepng = /*#__PURE__*/ _interop_require_default(require("../../../assets/images/og-image.png"));
const _useMountEffect = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useMountEffect"));
const _Config = require("../Config");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const rtlLanguages = [
    'ar',
    'fa',
    'ha',
    'ku',
    'ur',
    'ps',
    'dv',
    'ks',
    'khw',
    'he',
    'yi'
];
const Meta = ({ description, keywords = 'CMS, Admin, Dashboard', // lang = 'en',
meta = [], title })=>{
    const { i18n } = (0, _reacti18next.useTranslation)();
    const currentLanguage = i18n.language;
    const currentDirection = rtlLanguages.includes(currentLanguage) ? 'RTL' : 'LTR';
    const config = (0, _Config.useConfig)();
    const titleSuffix = config.admin.meta?.titleSuffix ?? '- Payload';
    const favicon = config.admin.meta.favicon ?? _faviconsvg.default;
    const ogImage = config.admin.meta.ogImage ?? _ogimagepng.default;
    (0, _useMountEffect.default)(()=>{
        const faviconElement = document.querySelector('link[data-placeholder-favicon]');
        if (faviconElement) {
            faviconElement.remove();
        }
    });
    return /*#__PURE__*/ _react.default.createElement(_reacthelmet.default, {
        htmlAttributes: {
            dir: currentDirection,
            lang: currentLanguage
        },
        link: [
            {
                href: favicon,
                rel: 'icon',
                type: 'image/svg+xml'
            }
        ],
        meta: [
            {
                name: 'description',
                content: description
            },
            {
                name: 'keywords',
                content: keywords
            },
            {
                content: `${title} ${titleSuffix}`,
                property: 'og:title'
            },
            {
                content: ogImage,
                property: 'og:image'
            },
            {
                content: description,
                property: 'og:description'
            },
            {
                content: 'website',
                property: 'og:type'
            },
            {
                name: 'twitter:card',
                content: 'summary'
            },
            {
                name: 'twitter:title',
                content: title
            },
            {
                name: 'twitter:description',
                content: description
            }
        ].concat(meta),
        title: `${title} ${titleSuffix}`
    });
};
const _default = Meta;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9NZXRhL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCBwYXlsb2FkRmF2aWNvbiBmcm9tICcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Zhdmljb24uc3ZnJ1xuaW1wb3J0IHBheWxvYWRPZ0ltYWdlIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvb2ctaW1hZ2UucG5nJ1xuaW1wb3J0IHVzZU1vdW50RWZmZWN0IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZU1vdW50RWZmZWN0J1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vQ29uZmlnJ1xuXG5jb25zdCBydGxMYW5ndWFnZXMgPSBbJ2FyJywgJ2ZhJywgJ2hhJywgJ2t1JywgJ3VyJywgJ3BzJywgJ2R2JywgJ2tzJywgJ2todycsICdoZScsICd5aSddXG5cbmNvbnN0IE1ldGE6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGRlc2NyaXB0aW9uLFxuICBrZXl3b3JkcyA9ICdDTVMsIEFkbWluLCBEYXNoYm9hcmQnLFxuICAvLyBsYW5nID0gJ2VuJyxcbiAgbWV0YSA9IFtdLFxuICB0aXRsZSxcbn0pID0+IHtcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IGN1cnJlbnRMYW5ndWFnZSA9IGkxOG4ubGFuZ3VhZ2VcbiAgY29uc3QgY3VycmVudERpcmVjdGlvbiA9IHJ0bExhbmd1YWdlcy5pbmNsdWRlcyhjdXJyZW50TGFuZ3VhZ2UpID8gJ1JUTCcgOiAnTFRSJ1xuXG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZygpXG4gIGNvbnN0IHRpdGxlU3VmZml4ID0gY29uZmlnLmFkbWluLm1ldGE/LnRpdGxlU3VmZml4ID8/ICctIFBheWxvYWQnXG4gIGNvbnN0IGZhdmljb24gPSBjb25maWcuYWRtaW4ubWV0YS5mYXZpY29uID8/IHBheWxvYWRGYXZpY29uXG4gIGNvbnN0IG9nSW1hZ2UgPSBjb25maWcuYWRtaW4ubWV0YS5vZ0ltYWdlID8/IHBheWxvYWRPZ0ltYWdlXG5cbiAgdXNlTW91bnRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZhdmljb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MTGlua0VsZW1lbnQ+KCdsaW5rW2RhdGEtcGxhY2Vob2xkZXItZmF2aWNvbl0nKVxuICAgIGlmIChmYXZpY29uRWxlbWVudCkge1xuICAgICAgZmF2aWNvbkVsZW1lbnQucmVtb3ZlKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8SGVsbWV0XG4gICAgICBodG1sQXR0cmlidXRlcz17e1xuICAgICAgICBkaXI6IGN1cnJlbnREaXJlY3Rpb24sXG4gICAgICAgIGxhbmc6IGN1cnJlbnRMYW5ndWFnZSxcbiAgICAgIH19XG4gICAgICBsaW5rPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBocmVmOiBmYXZpY29uLFxuICAgICAgICAgIHJlbDogJ2ljb24nLFxuICAgICAgICAgIHR5cGU6ICdpbWFnZS9zdmcreG1sJyxcbiAgICAgICAgfSxcbiAgICAgIF19XG4gICAgICBtZXRhPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZGVzY3JpcHRpb24nLFxuICAgICAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2tleXdvcmRzJyxcbiAgICAgICAgICBjb250ZW50OiBrZXl3b3JkcyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRlbnQ6IGAke3RpdGxlfSAke3RpdGxlU3VmZml4fWAsXG4gICAgICAgICAgcHJvcGVydHk6ICdvZzp0aXRsZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb250ZW50OiBvZ0ltYWdlLFxuICAgICAgICAgIHByb3BlcnR5OiAnb2c6aW1hZ2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXG4gICAgICAgICAgcHJvcGVydHk6ICdvZzpkZXNjcmlwdGlvbicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb250ZW50OiAnd2Vic2l0ZScsXG4gICAgICAgICAgcHJvcGVydHk6ICdvZzp0eXBlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICd0d2l0dGVyOmNhcmQnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdzdW1tYXJ5JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICd0d2l0dGVyOnRpdGxlJyxcbiAgICAgICAgICBjb250ZW50OiB0aXRsZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICd0d2l0dGVyOmRlc2NyaXB0aW9uJyxcbiAgICAgICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcbiAgICAgICAgfSxcbiAgICAgIF0uY29uY2F0KG1ldGEpfVxuICAgICAgdGl0bGU9e2Ake3RpdGxlfSAke3RpdGxlU3VmZml4fWB9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXRhXG4iXSwibmFtZXMiOlsicnRsTGFuZ3VhZ2VzIiwiTWV0YSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJtZXRhIiwidGl0bGUiLCJpMThuIiwidXNlVHJhbnNsYXRpb24iLCJjdXJyZW50TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsImN1cnJlbnREaXJlY3Rpb24iLCJpbmNsdWRlcyIsImNvbmZpZyIsInVzZUNvbmZpZyIsInRpdGxlU3VmZml4IiwiYWRtaW4iLCJmYXZpY29uIiwicGF5bG9hZEZhdmljb24iLCJvZ0ltYWdlIiwicGF5bG9hZE9nSW1hZ2UiLCJ1c2VNb3VudEVmZmVjdCIsImZhdmljb25FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlIiwiSGVsbWV0IiwiaHRtbEF0dHJpYnV0ZXMiLCJkaXIiLCJsYW5nIiwibGluayIsImhyZWYiLCJyZWwiLCJ0eXBlIiwibmFtZSIsImNvbnRlbnQiLCJwcm9wZXJ0eSIsImNvbmNhdCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTRGQTs7O2VBQUE7Ozs4REE1RmtCO29FQUNDOzhCQUNZO21FQUlKO21FQUNBO3VFQUNBO3dCQUNEOzs7Ozs7QUFFMUIsTUFBTUEsZUFBZTtJQUFDO0lBQU07SUFBTTtJQUFNO0lBQU07SUFBTTtJQUFNO0lBQU07SUFBTTtJQUFPO0lBQU07Q0FBSztBQUV4RixNQUFNQyxPQUF3QixDQUFDLEVBQzdCQyxXQUFXLEVBQ1hDLFdBQVcsdUJBQXVCLEVBQ2xDLGVBQWU7QUFDZkMsT0FBTyxFQUFFLEVBQ1RDLEtBQUssRUFDTjtJQUNDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLElBQUFBLDRCQUFjO0lBQy9CLE1BQU1DLGtCQUFrQkYsS0FBS0csUUFBUTtJQUNyQyxNQUFNQyxtQkFBbUJWLGFBQWFXLFFBQVEsQ0FBQ0gsbUJBQW1CLFFBQVE7SUFFMUUsTUFBTUksU0FBU0MsSUFBQUEsaUJBQVM7SUFDeEIsTUFBTUMsY0FBY0YsT0FBT0csS0FBSyxDQUFDWCxJQUFJLEVBQUVVLGVBQWU7SUFDdEQsTUFBTUUsVUFBVUosT0FBT0csS0FBSyxDQUFDWCxJQUFJLENBQUNZLE9BQU8sSUFBSUMsbUJBQWM7SUFDM0QsTUFBTUMsVUFBVU4sT0FBT0csS0FBSyxDQUFDWCxJQUFJLENBQUNjLE9BQU8sSUFBSUMsbUJBQWM7SUFFM0RDLElBQUFBLHVCQUFjLEVBQUM7UUFDYixNQUFNQyxpQkFBaUJDLFNBQVNDLGFBQWEsQ0FBa0I7UUFDL0QsSUFBSUYsZ0JBQWdCO1lBQ2xCQSxlQUFlRyxNQUFNO1FBQ3ZCO0lBQ0Y7SUFFQSxxQkFDRSw2QkFBQ0Msb0JBQU07UUFDTEMsZ0JBQWdCO1lBQ2RDLEtBQUtqQjtZQUNMa0IsTUFBTXBCO1FBQ1I7UUFDQXFCLE1BQU07WUFDSjtnQkFDRUMsTUFBTWQ7Z0JBQ05lLEtBQUs7Z0JBQ0xDLE1BQU07WUFDUjtTQUNEO1FBQ0Q1QixNQUFNO1lBQ0o7Z0JBQ0U2QixNQUFNO2dCQUNOQyxTQUFTaEM7WUFDWDtZQUNBO2dCQUNFK0IsTUFBTTtnQkFDTkMsU0FBUy9CO1lBQ1g7WUFDQTtnQkFDRStCLFNBQVMsQ0FBQyxFQUFFN0IsTUFBTSxDQUFDLEVBQUVTLFlBQVksQ0FBQztnQkFDbENxQixVQUFVO1lBQ1o7WUFDQTtnQkFDRUQsU0FBU2hCO2dCQUNUaUIsVUFBVTtZQUNaO1lBQ0E7Z0JBQ0VELFNBQVNoQztnQkFDVGlDLFVBQVU7WUFDWjtZQUNBO2dCQUNFRCxTQUFTO2dCQUNUQyxVQUFVO1lBQ1o7WUFDQTtnQkFDRUYsTUFBTTtnQkFDTkMsU0FBUztZQUNYO1lBQ0E7Z0JBQ0VELE1BQU07Z0JBQ05DLFNBQVM3QjtZQUNYO1lBQ0E7Z0JBQ0U0QixNQUFNO2dCQUNOQyxTQUFTaEM7WUFDWDtTQUNELENBQUNrQyxNQUFNLENBQUNoQztRQUNUQyxPQUFPLENBQUMsRUFBRUEsTUFBTSxDQUFDLEVBQUVTLFlBQVksQ0FBQzs7QUFHdEM7TUFFQSxXQUFlYiJ9