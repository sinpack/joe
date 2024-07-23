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
const _reacttoastify = require("react-toastify");
const _Auth = require("../../utilities/Auth");
const _Config = require("../../utilities/Config");
const _DocumentInfo = require("../../utilities/DocumentInfo");
const _Locale = require("../../utilities/Locale");
const _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
const _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
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
const baseClass = 'preview-btn';
const DefaultPreviewButton = ({ disabled, label, preview })=>{
    return /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "secondary",
        className: baseClass,
        disabled: disabled,
        onClick: preview,
        size: "small"
    }, label);
};
const PreviewButton = ({ CustomComponent, generatePreviewURL })=>{
    const { id, collection, global } = (0, _DocumentInfo.useDocumentInfo)();
    const [isLoading, setIsLoading] = (0, _react.useState)(false);
    const { code: locale } = (0, _Locale.useLocale)();
    const { token } = (0, _Auth.useAuth)();
    const { routes: { api }, serverURL } = (0, _Config.useConfig)();
    const { t } = (0, _reacti18next.useTranslation)('version');
    const isGeneratingPreviewURL = (0, _react.useRef)(false);
    // we need to regenerate the preview URL every time the button is clicked
    // to do this we need to fetch the document data fresh from the API
    // this will ensure the latest data is used when generating the preview URL
    const preview = (0, _react.useCallback)(async ()=>{
        if (!generatePreviewURL || isGeneratingPreviewURL.current) return;
        isGeneratingPreviewURL.current = true;
        try {
            setIsLoading(true);
            let url = `${serverURL}${api}`;
            if (collection) url = `${url}/${collection.slug}/${id}`;
            if (global) url = `${url}/globals/${global.slug}`;
            const data = await fetch(`${url}?draft=true&locale=${locale}&fallback-locale=null`).then((res)=>res.json());
            const previewURL = await generatePreviewURL(data, {
                locale,
                token
            });
            if (!previewURL) throw new Error();
            setIsLoading(false);
            isGeneratingPreviewURL.current = false;
            window.open(previewURL, '_blank');
        } catch (err) {
            setIsLoading(false);
            isGeneratingPreviewURL.current = false;
            _reacttoastify.toast.error(t('error:previewing'));
        }
    }, [
        serverURL,
        api,
        collection,
        global,
        id,
        generatePreviewURL,
        locale,
        token,
        t
    ]);
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: CustomComponent,
        DefaultComponent: DefaultPreviewButton,
        componentProps: {
            DefaultButton: DefaultPreviewButton,
            disabled: isLoading || !generatePreviewURL,
            label: isLoading ? t('general:loading') : t('preview'),
            preview
        }
    });
};
const _default = PreviewButton;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1ByZXZpZXdCdXR0b24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcblxuaW1wb3J0IHR5cGUgeyBHZW5lcmF0ZVByZXZpZXdVUkwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCdcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnXG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJ1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSdcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJ1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncHJldmlldy1idG4nXG5cbmV4cG9ydCB0eXBlIEN1c3RvbVByZXZpZXdCdXR0b25Qcm9wcyA9IFJlYWN0LkNvbXBvbmVudFR5cGU8XG4gIERlZmF1bHRQcmV2aWV3QnV0dG9uUHJvcHMgJiB7XG4gICAgRGVmYXVsdEJ1dHRvbjogUmVhY3QuQ29tcG9uZW50VHlwZTxEZWZhdWx0UHJldmlld0J1dHRvblByb3BzPlxuICB9XG4+XG5leHBvcnQgdHlwZSBEZWZhdWx0UHJldmlld0J1dHRvblByb3BzID0ge1xuICBkaXNhYmxlZDogYm9vbGVhblxuICBsYWJlbDogc3RyaW5nXG4gIHByZXZpZXc6ICgpID0+IHZvaWRcbn1cbmNvbnN0IERlZmF1bHRQcmV2aWV3QnV0dG9uOiBSZWFjdC5GQzxEZWZhdWx0UHJldmlld0J1dHRvblByb3BzPiA9ICh7XG4gIGRpc2FibGVkLFxuICBsYWJlbCxcbiAgcHJldmlldyxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uXG4gICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICBjbGFzc05hbWU9e2Jhc2VDbGFzc31cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIG9uQ2xpY2s9e3ByZXZpZXd9XG4gICAgICBzaXplPVwic21hbGxcIlxuICAgID5cbiAgICAgIHtsYWJlbH1cbiAgICA8L0J1dHRvbj5cbiAgKVxufVxuXG50eXBlIFByb3BzID0ge1xuICBDdXN0b21Db21wb25lbnQ/OiBDdXN0b21QcmV2aWV3QnV0dG9uUHJvcHNcbiAgZ2VuZXJhdGVQcmV2aWV3VVJMPzogR2VuZXJhdGVQcmV2aWV3VVJMXG59XG5jb25zdCBQcmV2aWV3QnV0dG9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBDdXN0b21Db21wb25lbnQsIGdlbmVyYXRlUHJldmlld1VSTCB9KSA9PiB7XG4gIGNvbnN0IHsgaWQsIGNvbGxlY3Rpb24sIGdsb2JhbCB9ID0gdXNlRG9jdW1lbnRJbmZvKClcblxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHsgY29kZTogbG9jYWxlIH0gPSB1c2VMb2NhbGUoKVxuICBjb25zdCB7IHRva2VuIH0gPSB1c2VBdXRoKClcbiAgY29uc3Qge1xuICAgIHJvdXRlczogeyBhcGkgfSxcbiAgICBzZXJ2ZXJVUkwsXG4gIH0gPSB1c2VDb25maWcoKVxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCd2ZXJzaW9uJylcbiAgY29uc3QgaXNHZW5lcmF0aW5nUHJldmlld1VSTCA9IHVzZVJlZihmYWxzZSlcblxuICAvLyB3ZSBuZWVkIHRvIHJlZ2VuZXJhdGUgdGhlIHByZXZpZXcgVVJMIGV2ZXJ5IHRpbWUgdGhlIGJ1dHRvbiBpcyBjbGlja2VkXG4gIC8vIHRvIGRvIHRoaXMgd2UgbmVlZCB0byBmZXRjaCB0aGUgZG9jdW1lbnQgZGF0YSBmcmVzaCBmcm9tIHRoZSBBUElcbiAgLy8gdGhpcyB3aWxsIGVuc3VyZSB0aGUgbGF0ZXN0IGRhdGEgaXMgdXNlZCB3aGVuIGdlbmVyYXRpbmcgdGhlIHByZXZpZXcgVVJMXG4gIGNvbnN0IHByZXZpZXcgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFnZW5lcmF0ZVByZXZpZXdVUkwgfHwgaXNHZW5lcmF0aW5nUHJldmlld1VSTC5jdXJyZW50KSByZXR1cm5cbiAgICBpc0dlbmVyYXRpbmdQcmV2aWV3VVJMLmN1cnJlbnQgPSB0cnVlXG5cbiAgICB0cnkge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXG5cbiAgICAgIGxldCB1cmwgPSBgJHtzZXJ2ZXJVUkx9JHthcGl9YFxuICAgICAgaWYgKGNvbGxlY3Rpb24pIHVybCA9IGAke3VybH0vJHtjb2xsZWN0aW9uLnNsdWd9LyR7aWR9YFxuICAgICAgaWYgKGdsb2JhbCkgdXJsID0gYCR7dXJsfS9nbG9iYWxzLyR7Z2xvYmFsLnNsdWd9YFxuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYCR7dXJsfT9kcmFmdD10cnVlJmxvY2FsZT0ke2xvY2FsZX0mZmFsbGJhY2stbG9jYWxlPW51bGxgKS50aGVuKFxuICAgICAgICAocmVzKSA9PiByZXMuanNvbigpLFxuICAgICAgKVxuICAgICAgY29uc3QgcHJldmlld1VSTCA9IGF3YWl0IGdlbmVyYXRlUHJldmlld1VSTChkYXRhLCB7IGxvY2FsZSwgdG9rZW4gfSlcbiAgICAgIGlmICghcHJldmlld1VSTCkgdGhyb3cgbmV3IEVycm9yKClcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgIGlzR2VuZXJhdGluZ1ByZXZpZXdVUkwuY3VycmVudCA9IGZhbHNlXG4gICAgICB3aW5kb3cub3BlbihwcmV2aWV3VVJMLCAnX2JsYW5rJylcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgIGlzR2VuZXJhdGluZ1ByZXZpZXdVUkwuY3VycmVudCA9IGZhbHNlXG4gICAgICB0b2FzdC5lcnJvcih0KCdlcnJvcjpwcmV2aWV3aW5nJykpXG4gICAgfVxuICB9LCBbc2VydmVyVVJMLCBhcGksIGNvbGxlY3Rpb24sIGdsb2JhbCwgaWQsIGdlbmVyYXRlUHJldmlld1VSTCwgbG9jYWxlLCB0b2tlbiwgdF0pXG5cbiAgcmV0dXJuIChcbiAgICA8UmVuZGVyQ3VzdG9tQ29tcG9uZW50XG4gICAgICBDdXN0b21Db21wb25lbnQ9e0N1c3RvbUNvbXBvbmVudH1cbiAgICAgIERlZmF1bHRDb21wb25lbnQ9e0RlZmF1bHRQcmV2aWV3QnV0dG9ufVxuICAgICAgY29tcG9uZW50UHJvcHM9e3tcbiAgICAgICAgRGVmYXVsdEJ1dHRvbjogRGVmYXVsdFByZXZpZXdCdXR0b24sXG4gICAgICAgIGRpc2FibGVkOiBpc0xvYWRpbmcgfHwgIWdlbmVyYXRlUHJldmlld1VSTCxcbiAgICAgICAgbGFiZWw6IGlzTG9hZGluZyA/IHQoJ2dlbmVyYWw6bG9hZGluZycpIDogdCgncHJldmlldycpLFxuICAgICAgICBwcmV2aWV3LFxuICAgICAgfX1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZXZpZXdCdXR0b25cbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJEZWZhdWx0UHJldmlld0J1dHRvbiIsImRpc2FibGVkIiwibGFiZWwiLCJwcmV2aWV3IiwiQnV0dG9uIiwiYnV0dG9uU3R5bGUiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic2l6ZSIsIlByZXZpZXdCdXR0b24iLCJDdXN0b21Db21wb25lbnQiLCJnZW5lcmF0ZVByZXZpZXdVUkwiLCJpZCIsImNvbGxlY3Rpb24iLCJnbG9iYWwiLCJ1c2VEb2N1bWVudEluZm8iLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImNvZGUiLCJsb2NhbGUiLCJ1c2VMb2NhbGUiLCJ0b2tlbiIsInVzZUF1dGgiLCJyb3V0ZXMiLCJhcGkiLCJzZXJ2ZXJVUkwiLCJ1c2VDb25maWciLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJpc0dlbmVyYXRpbmdQcmV2aWV3VVJMIiwidXNlUmVmIiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwidXJsIiwic2x1ZyIsImRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicHJldmlld1VSTCIsIkVycm9yIiwid2luZG93Iiwib3BlbiIsImVyciIsInRvYXN0IiwiZXJyb3IiLCJSZW5kZXJDdXN0b21Db21wb25lbnQiLCJEZWZhdWx0Q29tcG9uZW50IiwiY29tcG9uZW50UHJvcHMiLCJEZWZhdWx0QnV0dG9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBdUdBOzs7ZUFBQTs7OytEQXZHcUQ7OEJBQ3RCOytCQUNUO3NCQUlFO3dCQUNFOzhCQUNNO3dCQUNOOzhFQUNROytEQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixNQUFNQSxZQUFZO0FBWWxCLE1BQU1DLHVCQUE0RCxDQUFDLEVBQ2pFQyxRQUFRLEVBQ1JDLEtBQUssRUFDTEMsT0FBTyxFQUNSO0lBQ0MscUJBQ0UsNkJBQUNDLGVBQU07UUFDTEMsYUFBWTtRQUNaQyxXQUFXUDtRQUNYRSxVQUFVQTtRQUNWTSxTQUFTSjtRQUNUSyxNQUFLO09BRUpOO0FBR1A7QUFNQSxNQUFNTyxnQkFBaUMsQ0FBQyxFQUFFQyxlQUFlLEVBQUVDLGtCQUFrQixFQUFFO0lBQzdFLE1BQU0sRUFBRUMsRUFBRSxFQUFFQyxVQUFVLEVBQUVDLE1BQU0sRUFBRSxHQUFHQyxJQUFBQSw2QkFBZTtJQUVsRCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0MsSUFBQUEsZUFBUSxFQUFDO0lBQzNDLE1BQU0sRUFBRUMsTUFBTUMsTUFBTSxFQUFFLEdBQUdDLElBQUFBLGlCQUFTO0lBQ2xDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdDLElBQUFBLGFBQU87SUFDekIsTUFBTSxFQUNKQyxRQUFRLEVBQUVDLEdBQUcsRUFBRSxFQUNmQyxTQUFTLEVBQ1YsR0FBR0MsSUFBQUEsaUJBQVM7SUFDYixNQUFNLEVBQUVDLENBQUMsRUFBRSxHQUFHQyxJQUFBQSw0QkFBYyxFQUFDO0lBQzdCLE1BQU1DLHlCQUF5QkMsSUFBQUEsYUFBTSxFQUFDO0lBRXRDLHlFQUF5RTtJQUN6RSxtRUFBbUU7SUFDbkUsMkVBQTJFO0lBQzNFLE1BQU01QixVQUFVNkIsSUFBQUEsa0JBQVcsRUFBQztRQUMxQixJQUFJLENBQUNyQixzQkFBc0JtQix1QkFBdUJHLE9BQU8sRUFBRTtRQUMzREgsdUJBQXVCRyxPQUFPLEdBQUc7UUFFakMsSUFBSTtZQUNGaEIsYUFBYTtZQUViLElBQUlpQixNQUFNLENBQUMsRUFBRVIsVUFBVSxFQUFFRCxJQUFJLENBQUM7WUFDOUIsSUFBSVosWUFBWXFCLE1BQU0sQ0FBQyxFQUFFQSxJQUFJLENBQUMsRUFBRXJCLFdBQVdzQixJQUFJLENBQUMsQ0FBQyxFQUFFdkIsR0FBRyxDQUFDO1lBQ3ZELElBQUlFLFFBQVFvQixNQUFNLENBQUMsRUFBRUEsSUFBSSxTQUFTLEVBQUVwQixPQUFPcUIsSUFBSSxDQUFDLENBQUM7WUFFakQsTUFBTUMsT0FBTyxNQUFNQyxNQUFNLENBQUMsRUFBRUgsSUFBSSxtQkFBbUIsRUFBRWQsT0FBTyxxQkFBcUIsQ0FBQyxFQUFFa0IsSUFBSSxDQUN0RixDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO1lBRW5CLE1BQU1DLGFBQWEsTUFBTTlCLG1CQUFtQnlCLE1BQU07Z0JBQUVoQjtnQkFBUUU7WUFBTTtZQUNsRSxJQUFJLENBQUNtQixZQUFZLE1BQU0sSUFBSUM7WUFDM0J6QixhQUFhO1lBQ2JhLHVCQUF1QkcsT0FBTyxHQUFHO1lBQ2pDVSxPQUFPQyxJQUFJLENBQUNILFlBQVk7UUFDMUIsRUFBRSxPQUFPSSxLQUFLO1lBQ1o1QixhQUFhO1lBQ2JhLHVCQUF1QkcsT0FBTyxHQUFHO1lBQ2pDYSxvQkFBSyxDQUFDQyxLQUFLLENBQUNuQixFQUFFO1FBQ2hCO0lBQ0YsR0FBRztRQUFDRjtRQUFXRDtRQUFLWjtRQUFZQztRQUFRRjtRQUFJRDtRQUFvQlM7UUFBUUU7UUFBT007S0FBRTtJQUVqRixxQkFDRSw2QkFBQ29CLDhCQUFxQjtRQUNwQnRDLGlCQUFpQkE7UUFDakJ1QyxrQkFBa0JqRDtRQUNsQmtELGdCQUFnQjtZQUNkQyxlQUFlbkQ7WUFDZkMsVUFBVWUsYUFBYSxDQUFDTDtZQUN4QlQsT0FBT2MsWUFBWVksRUFBRSxxQkFBcUJBLEVBQUU7WUFDNUN6QjtRQUNGOztBQUdOO01BRUEsV0FBZU0ifQ==