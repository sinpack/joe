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
const _react = require("react");
const _reacti18next = require("react-i18next");
const _api = require("../api");
const _Locale = require("../components/utilities/Locale");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const usePayloadAPI = (url, options = {})=>{
    const { initialData = {}, initialParams = {} } = options;
    const { i18n } = (0, _reacti18next.useTranslation)();
    const [data, setData] = (0, _react.useState)(initialData);
    const [params, setParams] = (0, _react.useState)(initialParams);
    const [isLoading, setIsLoading] = (0, _react.useState)(true);
    const [isError, setIsError] = (0, _react.useState)(false);
    const { code: locale } = (0, _Locale.useLocale)();
    const search = _qs.default.stringify({
        locale,
        ...typeof params === 'object' ? params : {}
    }, {
        addQueryPrefix: true
    });
    const fetchData = (0, _react.useCallback)(async (abortController)=>{
        if (url) {
            setIsError(false);
            setIsLoading(true);
            try {
                const response = await _api.requests.get(`${url}${search}`, {
                    headers: {
                        'Accept-Language': i18n.language
                    },
                    signal: abortController ? abortController.signal : undefined
                });
                if (response.status > 201) {
                    setIsError(true);
                }
                const json = await response.json();
                setData(json);
                setIsLoading(false);
            } catch (error) {
                if (!abortController || !abortController.signal.aborted) {
                    setIsError(true);
                    setIsLoading(false);
                }
            }
        } else {
            setIsError(false);
            setIsLoading(false);
        }
    }, [
        url,
        search,
        i18n.language
    ]);
    (0, _react.useEffect)(()=>{
        const abortController = new AbortController();
        void fetchData(abortController);
        return ()=>{
            abortController.abort();
        };
    }, [
        url,
        search,
        fetchData
    ]);
    return [
        {
            data,
            isError,
            isLoading
        },
        {
            refetchData: fetchData,
            setParams
        }
    ];
};
const _default = usePayloadAPI;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VQYXlsb2FkQVBJLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXMnXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuXG5pbXBvcnQgeyByZXF1ZXN0cyB9IGZyb20gJy4uL2FwaSdcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbGl0aWVzL0xvY2FsZSdcblxudHlwZSBSZXN1bHQgPSBbXG4gIHtcbiAgICBkYXRhOiBhbnlcbiAgICBpc0Vycm9yOiBib29sZWFuXG4gICAgaXNMb2FkaW5nOiBib29sZWFuXG4gIH0sXG4gIHtcbiAgICByZWZldGNoRGF0YTogKGFib3J0Q29udHJvbGxlcj86IEFib3J0Q29udHJvbGxlcikgPT4gUHJvbWlzZTx2b2lkPlxuICAgIHNldFBhcmFtczogUmVhY3QuRGlzcGF0Y2g8dW5rbm93bj5cbiAgfSxcbl1cblxudHlwZSBPcHRpb25zID0ge1xuICBpbml0aWFsRGF0YT86IGFueVxuICBpbml0aWFsUGFyYW1zPzogdW5rbm93blxufVxuXG50eXBlIFVzZVBheWxvYWRBUEkgPSAodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBPcHRpb25zKSA9PiBSZXN1bHRcblxuY29uc3QgdXNlUGF5bG9hZEFQSTogVXNlUGF5bG9hZEFQSSA9ICh1cmwsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCB7IGluaXRpYWxEYXRhID0ge30sIGluaXRpYWxQYXJhbXMgPSB7fSB9ID0gb3B0aW9uc1xuXG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsRGF0YSlcbiAgY29uc3QgW3BhcmFtcywgc2V0UGFyYW1zXSA9IHVzZVN0YXRlKGluaXRpYWxQYXJhbXMpXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbaXNFcnJvciwgc2V0SXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgeyBjb2RlOiBsb2NhbGUgfSA9IHVzZUxvY2FsZSgpXG5cbiAgY29uc3Qgc2VhcmNoID0gcXVlcnlTdHJpbmcuc3RyaW5naWZ5KFxuICAgIHtcbiAgICAgIGxvY2FsZSxcbiAgICAgIC4uLih0eXBlb2YgcGFyYW1zID09PSAnb2JqZWN0JyA/IHBhcmFtcyA6IHt9KSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGFkZFF1ZXJ5UHJlZml4OiB0cnVlLFxuICAgIH0sXG4gIClcblxuICBjb25zdCBmZXRjaERhdGEgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoYWJvcnRDb250cm9sbGVyPzogQWJvcnRDb250cm9sbGVyKSA9PiB7XG4gICAgICBpZiAodXJsKSB7XG4gICAgICAgIHNldElzRXJyb3IoZmFsc2UpXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMuZ2V0KGAke3VybH0ke3NlYXJjaH1gLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNpZ25hbDogYWJvcnRDb250cm9sbGVyID8gYWJvcnRDb250cm9sbGVyLnNpZ25hbCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+IDIwMSkge1xuICAgICAgICAgICAgc2V0SXNFcnJvcih0cnVlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICBzZXREYXRhKGpzb24pXG4gICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGlmICghYWJvcnRDb250cm9sbGVyIHx8ICFhYm9ydENvbnRyb2xsZXIuc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgICAgIHNldElzRXJyb3IodHJ1ZSlcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldElzRXJyb3IoZmFsc2UpXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgIH1cbiAgICB9LFxuICAgIFt1cmwsIHNlYXJjaCwgaTE4bi5sYW5ndWFnZV0sXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICAgIHZvaWQgZmV0Y2hEYXRhKGFib3J0Q29udHJvbGxlcilcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKVxuICAgIH1cbiAgfSwgW3VybCwgc2VhcmNoLCBmZXRjaERhdGFdKVxuXG4gIHJldHVybiBbXG4gICAgeyBkYXRhLCBpc0Vycm9yLCBpc0xvYWRpbmcgfSxcbiAgICB7IHJlZmV0Y2hEYXRhOiBmZXRjaERhdGEsIHNldFBhcmFtcyB9LFxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVBheWxvYWRBUElcbiJdLCJuYW1lcyI6WyJ1c2VQYXlsb2FkQVBJIiwidXJsIiwib3B0aW9ucyIsImluaXRpYWxEYXRhIiwiaW5pdGlhbFBhcmFtcyIsImkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsImRhdGEiLCJzZXREYXRhIiwidXNlU3RhdGUiLCJwYXJhbXMiLCJzZXRQYXJhbXMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0Vycm9yIiwic2V0SXNFcnJvciIsImNvZGUiLCJsb2NhbGUiLCJ1c2VMb2NhbGUiLCJzZWFyY2giLCJxdWVyeVN0cmluZyIsInN0cmluZ2lmeSIsImFkZFF1ZXJ5UHJlZml4IiwiZmV0Y2hEYXRhIiwidXNlQ2FsbGJhY2siLCJhYm9ydENvbnRyb2xsZXIiLCJyZXNwb25zZSIsInJlcXVlc3RzIiwiZ2V0IiwiaGVhZGVycyIsImxhbmd1YWdlIiwic2lnbmFsIiwidW5kZWZpbmVkIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiYWJvcnRlZCIsInVzZUVmZmVjdCIsIkFib3J0Q29udHJvbGxlciIsImFib3J0IiwicmVmZXRjaERhdGEiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBK0ZBOzs7ZUFBQTs7OzJEQS9Gd0I7dUJBQ3lCOzhCQUNsQjtxQkFFTjt3QkFDQzs7Ozs7O0FBcUIxQixNQUFNQSxnQkFBK0IsQ0FBQ0MsS0FBS0MsVUFBVSxDQUFDLENBQUM7SUFDckQsTUFBTSxFQUFFQyxjQUFjLENBQUMsQ0FBQyxFQUFFQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsR0FBR0Y7SUFFakQsTUFBTSxFQUFFRyxJQUFJLEVBQUUsR0FBR0MsSUFBQUEsNEJBQWM7SUFDL0IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdDLElBQUFBLGVBQVEsRUFBQ047SUFDakMsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdGLElBQUFBLGVBQVEsRUFBQ0w7SUFDckMsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdKLElBQUFBLGVBQVEsRUFBQztJQUMzQyxNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR04sSUFBQUEsZUFBUSxFQUFDO0lBQ3ZDLE1BQU0sRUFBRU8sTUFBTUMsTUFBTSxFQUFFLEdBQUdDLElBQUFBLGlCQUFTO0lBRWxDLE1BQU1DLFNBQVNDLFdBQVcsQ0FBQ0MsU0FBUyxDQUNsQztRQUNFSjtRQUNBLEdBQUksT0FBT1AsV0FBVyxXQUFXQSxTQUFTLENBQUMsQ0FBQztJQUM5QyxHQUNBO1FBQ0VZLGdCQUFnQjtJQUNsQjtJQUdGLE1BQU1DLFlBQVlDLElBQUFBLGtCQUFXLEVBQzNCLE9BQU9DO1FBQ0wsSUFBSXhCLEtBQUs7WUFDUGMsV0FBVztZQUNYRixhQUFhO1lBQ2IsSUFBSTtnQkFDRixNQUFNYSxXQUFXLE1BQU1DLGFBQVEsQ0FBQ0MsR0FBRyxDQUFDLENBQUMsRUFBRTNCLElBQUksRUFBRWtCLE9BQU8sQ0FBQyxFQUFFO29CQUNyRFUsU0FBUzt3QkFDUCxtQkFBbUJ4QixLQUFLeUIsUUFBUTtvQkFDbEM7b0JBQ0FDLFFBQVFOLGtCQUFrQkEsZ0JBQWdCTSxNQUFNLEdBQUdDO2dCQUNyRDtnQkFFQSxJQUFJTixTQUFTTyxNQUFNLEdBQUcsS0FBSztvQkFDekJsQixXQUFXO2dCQUNiO2dCQUVBLE1BQU1tQixPQUFPLE1BQU1SLFNBQVNRLElBQUk7Z0JBQ2hDMUIsUUFBUTBCO2dCQUNSckIsYUFBYTtZQUNmLEVBQUUsT0FBT3NCLE9BQU87Z0JBQ2QsSUFBSSxDQUFDVixtQkFBbUIsQ0FBQ0EsZ0JBQWdCTSxNQUFNLENBQUNLLE9BQU8sRUFBRTtvQkFDdkRyQixXQUFXO29CQUNYRixhQUFhO2dCQUNmO1lBQ0Y7UUFDRixPQUFPO1lBQ0xFLFdBQVc7WUFDWEYsYUFBYTtRQUNmO0lBQ0YsR0FDQTtRQUFDWjtRQUFLa0I7UUFBUWQsS0FBS3lCLFFBQVE7S0FBQztJQUc5Qk8sSUFBQUEsZ0JBQVMsRUFBQztRQUNSLE1BQU1aLGtCQUFrQixJQUFJYTtRQUM1QixLQUFLZixVQUFVRTtRQUVmLE9BQU87WUFDTEEsZ0JBQWdCYyxLQUFLO1FBQ3ZCO0lBQ0YsR0FBRztRQUFDdEM7UUFBS2tCO1FBQVFJO0tBQVU7SUFFM0IsT0FBTztRQUNMO1lBQUVoQjtZQUFNTztZQUFTRjtRQUFVO1FBQzNCO1lBQUU0QixhQUFhakI7WUFBV1o7UUFBVTtLQUNyQztBQUNIO01BRUEsV0FBZVgifQ==