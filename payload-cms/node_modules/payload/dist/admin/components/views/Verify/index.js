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
const _reactrouterdom = require("react-router-dom");
const _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
const _Logo = /*#__PURE__*/ _interop_require_default(require("../../graphics/Logo"));
const _Minimal = /*#__PURE__*/ _interop_require_default(require("../../templates/Minimal"));
const _Auth = require("../../utilities/Auth");
const _Config = require("../../utilities/Config");
const _Meta = /*#__PURE__*/ _interop_require_default(require("../../utilities/Meta"));
const _Login = /*#__PURE__*/ _interop_require_default(require("../Login"));
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
const baseClass = 'verify';
const Verify = ({ collection })=>{
    const { slug: collectionSlug } = collection;
    const { user } = (0, _Auth.useAuth)();
    const { token } = (0, _reactrouterdom.useParams)();
    const { admin: { user: adminUser }, routes: { admin: adminRoute }, serverURL } = (0, _Config.useConfig)();
    const { i18n, t } = (0, _reacti18next.useTranslation)('authentication');
    const isAdminUser = collectionSlug === adminUser;
    const [verifyResult, setVerifyResult] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        async function verifyToken() {
            const result = await fetch(`${serverURL}/api/${collectionSlug}/verify/${token}`, {
                credentials: 'include',
                headers: {
                    'Accept-Language': i18n.language
                },
                method: 'POST'
            });
            setVerifyResult(result);
        }
        verifyToken();
    }, [
        setVerifyResult,
        collectionSlug,
        serverURL,
        token,
        i18n
    ]);
    if (user) {
        return /*#__PURE__*/ _react.default.createElement(_Login.default, null);
    }
    const getText = ()=>{
        if (verifyResult?.status === 200) return t('verifiedSuccessfully');
        if (verifyResult?.status === 202) return t('alreadyActivated');
        return t('unableToVerify');
    };
    return /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        description: t('verifyUser'),
        keywords: t('verify'),
        title: t('verify')
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: `${baseClass}__brand`
    }, /*#__PURE__*/ _react.default.createElement(_Logo.default, null)), /*#__PURE__*/ _react.default.createElement("h2", null, getText()), isAdminUser && verifyResult?.status === 200 && /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "secondary",
        el: "link",
        to: `${adminRoute}/login`
    }, t('login')));
};
const _default = Verify;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcmlmeS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9CdXR0b24nXG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi9ncmFwaGljcy9Mb2dvJ1xuaW1wb3J0IE1pbmltYWxUZW1wbGF0ZSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvTWluaW1hbCdcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCdcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnXG5pbXBvcnQgTWV0YSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTWV0YSdcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9Mb2dpbidcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAndmVyaWZ5J1xuXG5jb25zdCBWZXJpZnk6IFJlYWN0LkZDPHsgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9PiA9ICh7IGNvbGxlY3Rpb24gfSkgPT4ge1xuICBjb25zdCB7IHNsdWc6IGNvbGxlY3Rpb25TbHVnIH0gPSBjb2xsZWN0aW9uXG5cbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKClcbiAgY29uc3QgeyB0b2tlbiB9ID0gdXNlUGFyYW1zPHsgdG9rZW4/OiBzdHJpbmcgfT4oKVxuICBjb25zdCB7XG4gICAgYWRtaW46IHsgdXNlcjogYWRtaW5Vc2VyIH0sXG4gICAgcm91dGVzOiB7IGFkbWluOiBhZG1pblJvdXRlIH0sXG4gICAgc2VydmVyVVJMLFxuICB9ID0gdXNlQ29uZmlnKClcbiAgY29uc3QgeyBpMThuLCB0IH0gPSB1c2VUcmFuc2xhdGlvbignYXV0aGVudGljYXRpb24nKVxuXG4gIGNvbnN0IGlzQWRtaW5Vc2VyID0gY29sbGVjdGlvblNsdWcgPT09IGFkbWluVXNlclxuICBjb25zdCBbdmVyaWZ5UmVzdWx0LCBzZXRWZXJpZnlSZXN1bHRdID0gdXNlU3RhdGU8UmVzcG9uc2UgfCBudWxsPihudWxsKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5VG9rZW4oKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgJHtzZXJ2ZXJVUkx9L2FwaS8ke2NvbGxlY3Rpb25TbHVnfS92ZXJpZnkvJHt0b2tlbn1gLCB7XG4gICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICB9KVxuICAgICAgc2V0VmVyaWZ5UmVzdWx0KHJlc3VsdClcbiAgICB9XG4gICAgdmVyaWZ5VG9rZW4oKVxuICB9LCBbc2V0VmVyaWZ5UmVzdWx0LCBjb2xsZWN0aW9uU2x1Zywgc2VydmVyVVJMLCB0b2tlbiwgaTE4bl0pXG5cbiAgaWYgKHVzZXIpIHtcbiAgICByZXR1cm4gPExvZ2luIC8+XG4gIH1cblxuICBjb25zdCBnZXRUZXh0ID0gKCkgPT4ge1xuICAgIGlmICh2ZXJpZnlSZXN1bHQ/LnN0YXR1cyA9PT0gMjAwKSByZXR1cm4gdCgndmVyaWZpZWRTdWNjZXNzZnVsbHknKVxuICAgIGlmICh2ZXJpZnlSZXN1bHQ/LnN0YXR1cyA9PT0gMjAyKSByZXR1cm4gdCgnYWxyZWFkeUFjdGl2YXRlZCcpXG4gICAgcmV0dXJuIHQoJ3VuYWJsZVRvVmVyaWZ5JylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPE1pbmltYWxUZW1wbGF0ZSBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8TWV0YSBkZXNjcmlwdGlvbj17dCgndmVyaWZ5VXNlcicpfSBrZXl3b3Jkcz17dCgndmVyaWZ5Jyl9IHRpdGxlPXt0KCd2ZXJpZnknKX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19icmFuZGB9PlxuICAgICAgICA8TG9nbyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDI+e2dldFRleHQoKX08L2gyPlxuICAgICAge2lzQWRtaW5Vc2VyICYmIHZlcmlmeVJlc3VsdD8uc3RhdHVzID09PSAyMDAgJiYgKFxuICAgICAgICA8QnV0dG9uIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCIgZWw9XCJsaW5rXCIgdG89e2Ake2FkbWluUm91dGV9L2xvZ2luYH0+XG4gICAgICAgICAge3QoJ2xvZ2luJyl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L01pbmltYWxUZW1wbGF0ZT5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgVmVyaWZ5XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiVmVyaWZ5IiwiY29sbGVjdGlvbiIsInNsdWciLCJjb2xsZWN0aW9uU2x1ZyIsInVzZXIiLCJ1c2VBdXRoIiwidG9rZW4iLCJ1c2VQYXJhbXMiLCJhZG1pbiIsImFkbWluVXNlciIsInJvdXRlcyIsImFkbWluUm91dGUiLCJzZXJ2ZXJVUkwiLCJ1c2VDb25maWciLCJpMThuIiwidCIsInVzZVRyYW5zbGF0aW9uIiwiaXNBZG1pblVzZXIiLCJ2ZXJpZnlSZXN1bHQiLCJzZXRWZXJpZnlSZXN1bHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInZlcmlmeVRva2VuIiwicmVzdWx0IiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJsYW5ndWFnZSIsIm1ldGhvZCIsIkxvZ2luIiwiZ2V0VGV4dCIsInN0YXR1cyIsIk1pbmltYWxUZW1wbGF0ZSIsImNsYXNzTmFtZSIsIk1ldGEiLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwidGl0bGUiLCJkaXYiLCJMb2dvIiwiaDIiLCJCdXR0b24iLCJidXR0b25TdHlsZSIsImVsIiwidG8iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXVFQTs7O2VBQUE7OzsrREF2RTJDOzhCQUNaO2dDQUNMOytEQUlQOzZEQUNGO2dFQUNXO3NCQUNKO3dCQUNFOzZEQUNUOzhEQUNDO1FBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsTUFBTUEsWUFBWTtBQUVsQixNQUFNQyxTQUE4RCxDQUFDLEVBQUVDLFVBQVUsRUFBRTtJQUNqRixNQUFNLEVBQUVDLE1BQU1DLGNBQWMsRUFBRSxHQUFHRjtJQUVqQyxNQUFNLEVBQUVHLElBQUksRUFBRSxHQUFHQyxJQUFBQSxhQUFPO0lBQ3hCLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdDLElBQUFBLHlCQUFTO0lBQzNCLE1BQU0sRUFDSkMsT0FBTyxFQUFFSixNQUFNSyxTQUFTLEVBQUUsRUFDMUJDLFFBQVEsRUFBRUYsT0FBT0csVUFBVSxFQUFFLEVBQzdCQyxTQUFTLEVBQ1YsR0FBR0MsSUFBQUEsaUJBQVM7SUFDYixNQUFNLEVBQUVDLElBQUksRUFBRUMsQ0FBQyxFQUFFLEdBQUdDLElBQUFBLDRCQUFjLEVBQUM7SUFFbkMsTUFBTUMsY0FBY2QsbUJBQW1CTTtJQUN2QyxNQUFNLENBQUNTLGNBQWNDLGdCQUFnQixHQUFHQyxJQUFBQSxlQUFRLEVBQWtCO0lBRWxFQyxJQUFBQSxnQkFBUyxFQUFDO1FBQ1IsZUFBZUM7WUFDYixNQUFNQyxTQUFTLE1BQU1DLE1BQU0sQ0FBQyxFQUFFWixVQUFVLEtBQUssRUFBRVQsZUFBZSxRQUFRLEVBQUVHLE1BQU0sQ0FBQyxFQUFFO2dCQUMvRW1CLGFBQWE7Z0JBQ2JDLFNBQVM7b0JBQ1AsbUJBQW1CWixLQUFLYSxRQUFRO2dCQUNsQztnQkFDQUMsUUFBUTtZQUNWO1lBQ0FULGdCQUFnQkk7UUFDbEI7UUFDQUQ7SUFDRixHQUFHO1FBQUNIO1FBQWlCaEI7UUFBZ0JTO1FBQVdOO1FBQU9RO0tBQUs7SUFFNUQsSUFBSVYsTUFBTTtRQUNSLHFCQUFPLDZCQUFDeUIsY0FBSztJQUNmO0lBRUEsTUFBTUMsVUFBVTtRQUNkLElBQUlaLGNBQWNhLFdBQVcsS0FBSyxPQUFPaEIsRUFBRTtRQUMzQyxJQUFJRyxjQUFjYSxXQUFXLEtBQUssT0FBT2hCLEVBQUU7UUFDM0MsT0FBT0EsRUFBRTtJQUNYO0lBRUEscUJBQ0UsNkJBQUNpQixnQkFBZTtRQUFDQyxXQUFXbEM7cUJBQzFCLDZCQUFDbUMsYUFBSTtRQUFDQyxhQUFhcEIsRUFBRTtRQUFlcUIsVUFBVXJCLEVBQUU7UUFBV3NCLE9BQU90QixFQUFFO3NCQUNwRSw2QkFBQ3VCO1FBQUlMLFdBQVcsQ0FBQyxFQUFFbEMsVUFBVSxPQUFPLENBQUM7cUJBQ25DLDZCQUFDd0MsYUFBSSx3QkFFUCw2QkFBQ0MsWUFBSVYsWUFDSmIsZUFBZUMsY0FBY2EsV0FBVyxxQkFDdkMsNkJBQUNVLGVBQU07UUFBQ0MsYUFBWTtRQUFZQyxJQUFHO1FBQU9DLElBQUksQ0FBQyxFQUFFakMsV0FBVyxNQUFNLENBQUM7T0FDaEVJLEVBQUU7QUFLYjtNQUNBLFdBQWVmIn0=