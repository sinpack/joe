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
    LoadingOverlayProvider: function() {
        return LoadingOverlayProvider;
    },
    default: function() {
        return _default;
    },
    useLoadingOverlay: function() {
        return useLoadingOverlay;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacti18next = require("react-i18next");
const _useDelayedRender = require("../../../hooks/useDelayedRender");
const _Loading = require("../../elements/Loading");
const _reducer = require("./reducer");
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
const animatedDuration = 250;
const Context = /*#__PURE__*/ (0, _react.createContext)({
    isOnScreen: false,
    toggleLoadingOverlay: undefined
});
const LoadingOverlayProvider = ({ children })=>{
    const { t } = (0, _reacti18next.useTranslation)('general');
    const fallbackText = t('loading');
    const [overlays, dispatchOverlay] = _react.default.useReducer(_reducer.reducer, _reducer.defaultLoadingOverlayState);
    const { isMounted, isUnmounting, triggerDelayedRender } = (0, _useDelayedRender.useDelayedRender)({
        delayBeforeShow: 1000,
        inTimeout: animatedDuration,
        minShowTime: 500,
        outTimeout: animatedDuration,
        show: overlays.isLoading
    });
    const toggleLoadingOverlay = _react.default.useCallback(({ isLoading, key, loadingText = fallbackText, type })=>{
        if (isLoading) {
            triggerDelayedRender();
            dispatchOverlay({
                payload: {
                    key,
                    loadingText,
                    type
                },
                type: 'add'
            });
        } else {
            dispatchOverlay({
                payload: {
                    key,
                    type
                },
                type: 'remove'
            });
        }
    }, [
        triggerDelayedRender,
        fallbackText
    ]);
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: {
            isOnScreen: isMounted,
            toggleLoadingOverlay
        }
    }, isMounted && /*#__PURE__*/ _react.default.createElement(_Loading.LoadingOverlay, {
        animationDuration: `${animatedDuration}ms`,
        loadingText: overlays.loadingText || fallbackText,
        overlayType: overlays.overlayType,
        show: !isUnmounting
    }), children);
};
const useLoadingOverlay = ()=>{
    const contextHook = _react.default.useContext(Context);
    if (contextHook === undefined) {
        throw new Error('useLoadingOverlay must be used within a LoadingOverlayProvider');
    }
    return contextHook;
};
const _default = Context;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9Mb2FkaW5nT3ZlcmxheS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHR5cGUgeyBMb2FkaW5nT3ZlcmxheUNvbnRleHQsIFRvZ2dsZUxvYWRpbmdPdmVybGF5IH0gZnJvbSAnLi90eXBlcydcblxuaW1wb3J0IHsgdXNlRGVsYXllZFJlbmRlciB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZURlbGF5ZWRSZW5kZXInXG5pbXBvcnQgeyBMb2FkaW5nT3ZlcmxheSB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL0xvYWRpbmcnXG5pbXBvcnQgeyBkZWZhdWx0TG9hZGluZ092ZXJsYXlTdGF0ZSwgcmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcidcblxuY29uc3QgYW5pbWF0ZWREdXJhdGlvbiA9IDI1MFxuXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gIGlzT25TY3JlZW46IGZhbHNlLFxuICB0b2dnbGVMb2FkaW5nT3ZlcmxheTogdW5kZWZpbmVkLFxufSlcblxuZXhwb3J0IGNvbnN0IExvYWRpbmdPdmVybGF5UHJvdmlkZXI6IFJlYWN0LkZDPHsgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKVxuICBjb25zdCBmYWxsYmFja1RleHQgPSB0KCdsb2FkaW5nJylcbiAgY29uc3QgW292ZXJsYXlzLCBkaXNwYXRjaE92ZXJsYXldID0gUmVhY3QudXNlUmVkdWNlcihyZWR1Y2VyLCBkZWZhdWx0TG9hZGluZ092ZXJsYXlTdGF0ZSlcblxuICBjb25zdCB7IGlzTW91bnRlZCwgaXNVbm1vdW50aW5nLCB0cmlnZ2VyRGVsYXllZFJlbmRlciB9ID0gdXNlRGVsYXllZFJlbmRlcih7XG4gICAgZGVsYXlCZWZvcmVTaG93OiAxMDAwLFxuICAgIGluVGltZW91dDogYW5pbWF0ZWREdXJhdGlvbixcbiAgICBtaW5TaG93VGltZTogNTAwLFxuICAgIG91dFRpbWVvdXQ6IGFuaW1hdGVkRHVyYXRpb24sXG4gICAgc2hvdzogb3ZlcmxheXMuaXNMb2FkaW5nLFxuICB9KVxuXG4gIGNvbnN0IHRvZ2dsZUxvYWRpbmdPdmVybGF5ID0gUmVhY3QudXNlQ2FsbGJhY2s8VG9nZ2xlTG9hZGluZ092ZXJsYXk+KFxuICAgICh7IGlzTG9hZGluZywga2V5LCBsb2FkaW5nVGV4dCA9IGZhbGxiYWNrVGV4dCwgdHlwZSB9KSA9PiB7XG4gICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgIHRyaWdnZXJEZWxheWVkUmVuZGVyKClcbiAgICAgICAgZGlzcGF0Y2hPdmVybGF5KHtcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBsb2FkaW5nVGV4dCxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0eXBlOiAnYWRkJyxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoT3ZlcmxheSh7XG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHR5cGU6ICdyZW1vdmUnLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgW3RyaWdnZXJEZWxheWVkUmVuZGVyLCBmYWxsYmFja1RleHRdLFxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgaXNPblNjcmVlbjogaXNNb3VudGVkLFxuICAgICAgICB0b2dnbGVMb2FkaW5nT3ZlcmxheSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2lzTW91bnRlZCAmJiAoXG4gICAgICAgIDxMb2FkaW5nT3ZlcmxheVxuICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uPXtgJHthbmltYXRlZER1cmF0aW9ufW1zYH1cbiAgICAgICAgICBsb2FkaW5nVGV4dD17b3ZlcmxheXMubG9hZGluZ1RleHQgfHwgZmFsbGJhY2tUZXh0fVxuICAgICAgICAgIG92ZXJsYXlUeXBlPXtvdmVybGF5cy5vdmVybGF5VHlwZX1cbiAgICAgICAgICBzaG93PXshaXNVbm1vdW50aW5nfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUxvYWRpbmdPdmVybGF5ID0gKCk6IExvYWRpbmdPdmVybGF5Q29udGV4dCA9PiB7XG4gIGNvbnN0IGNvbnRleHRIb29rID0gUmVhY3QudXNlQ29udGV4dChDb250ZXh0KVxuICBpZiAoY29udGV4dEhvb2sgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlTG9hZGluZ092ZXJsYXkgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIExvYWRpbmdPdmVybGF5UHJvdmlkZXInKVxuICB9XG5cbiAgcmV0dXJuIGNvbnRleHRIb29rXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRcbiJdLCJuYW1lcyI6WyJMb2FkaW5nT3ZlcmxheVByb3ZpZGVyIiwidXNlTG9hZGluZ092ZXJsYXkiLCJhbmltYXRlZER1cmF0aW9uIiwiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJpc09uU2NyZWVuIiwidG9nZ2xlTG9hZGluZ092ZXJsYXkiLCJ1bmRlZmluZWQiLCJjaGlsZHJlbiIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImZhbGxiYWNrVGV4dCIsIm92ZXJsYXlzIiwiZGlzcGF0Y2hPdmVybGF5IiwiUmVhY3QiLCJ1c2VSZWR1Y2VyIiwicmVkdWNlciIsImRlZmF1bHRMb2FkaW5nT3ZlcmxheVN0YXRlIiwiaXNNb3VudGVkIiwiaXNVbm1vdW50aW5nIiwidHJpZ2dlckRlbGF5ZWRSZW5kZXIiLCJ1c2VEZWxheWVkUmVuZGVyIiwiZGVsYXlCZWZvcmVTaG93IiwiaW5UaW1lb3V0IiwibWluU2hvd1RpbWUiLCJvdXRUaW1lb3V0Iiwic2hvdyIsImlzTG9hZGluZyIsInVzZUNhbGxiYWNrIiwia2V5IiwibG9hZGluZ1RleHQiLCJ0eXBlIiwicGF5bG9hZCIsIlByb3ZpZGVyIiwidmFsdWUiLCJMb2FkaW5nT3ZlcmxheSIsImFuaW1hdGlvbkR1cmF0aW9uIiwib3ZlcmxheVR5cGUiLCJjb250ZXh0SG9vayIsInVzZUNvbnRleHQiLCJFcnJvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBZ0JhQSxzQkFBc0I7ZUFBdEJBOztJQW1FYixPQUFzQjtlQUF0Qjs7SUFUYUMsaUJBQWlCO2VBQWpCQTs7OytEQTFFd0I7OEJBQ047a0NBSUU7eUJBQ0Y7eUJBQ3FCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEQsTUFBTUMsbUJBQW1CO0FBRXpCLE1BQU1DLHdCQUFVQyxJQUFBQSxvQkFBYSxFQUFDO0lBQzVCQyxZQUFZO0lBQ1pDLHNCQUFzQkM7QUFDeEI7QUFFTyxNQUFNUCx5QkFBbUUsQ0FBQyxFQUFFUSxRQUFRLEVBQUU7SUFDM0YsTUFBTSxFQUFFQyxDQUFDLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWMsRUFBQztJQUM3QixNQUFNQyxlQUFlRixFQUFFO0lBQ3ZCLE1BQU0sQ0FBQ0csVUFBVUMsZ0JBQWdCLEdBQUdDLGNBQUssQ0FBQ0MsVUFBVSxDQUFDQyxnQkFBTyxFQUFFQyxtQ0FBMEI7SUFFeEYsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRUMsb0JBQW9CLEVBQUUsR0FBR0MsSUFBQUEsa0NBQWdCLEVBQUM7UUFDekVDLGlCQUFpQjtRQUNqQkMsV0FBV3JCO1FBQ1hzQixhQUFhO1FBQ2JDLFlBQVl2QjtRQUNad0IsTUFBTWQsU0FBU2UsU0FBUztJQUMxQjtJQUVBLE1BQU1yQix1QkFBdUJRLGNBQUssQ0FBQ2MsV0FBVyxDQUM1QyxDQUFDLEVBQUVELFNBQVMsRUFBRUUsR0FBRyxFQUFFQyxjQUFjbkIsWUFBWSxFQUFFb0IsSUFBSSxFQUFFO1FBQ25ELElBQUlKLFdBQVc7WUFDYlA7WUFDQVAsZ0JBQWdCO2dCQUNkbUIsU0FBUztvQkFDUEg7b0JBQ0FDO29CQUNBQztnQkFDRjtnQkFDQUEsTUFBTTtZQUNSO1FBQ0YsT0FBTztZQUNMbEIsZ0JBQWdCO2dCQUNkbUIsU0FBUztvQkFDUEg7b0JBQ0FFO2dCQUNGO2dCQUNBQSxNQUFNO1lBQ1I7UUFDRjtJQUNGLEdBQ0E7UUFBQ1g7UUFBc0JUO0tBQWE7SUFHdEMscUJBQ0UsNkJBQUNSLFFBQVE4QixRQUFRO1FBQ2ZDLE9BQU87WUFDTDdCLFlBQVlhO1lBQ1paO1FBQ0Y7T0FFQ1ksMkJBQ0MsNkJBQUNpQix1QkFBYztRQUNiQyxtQkFBbUIsQ0FBQyxFQUFFbEMsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQzRCLGFBQWFsQixTQUFTa0IsV0FBVyxJQUFJbkI7UUFDckMwQixhQUFhekIsU0FBU3lCLFdBQVc7UUFDakNYLE1BQU0sQ0FBQ1A7UUFHVlg7QUFHUDtBQUVPLE1BQU1QLG9CQUFvQjtJQUMvQixNQUFNcUMsY0FBY3hCLGNBQUssQ0FBQ3lCLFVBQVUsQ0FBQ3BDO0lBQ3JDLElBQUltQyxnQkFBZ0IvQixXQUFXO1FBQzdCLE1BQU0sSUFBSWlDLE1BQU07SUFDbEI7SUFFQSxPQUFPRjtBQUNUO01BRUEsV0FBZW5DIn0=