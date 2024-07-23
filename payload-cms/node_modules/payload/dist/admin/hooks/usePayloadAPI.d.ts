/// <reference types="react" />
type Result = [
    {
        data: any;
        isError: boolean;
        isLoading: boolean;
    },
    {
        refetchData: (abortController?: AbortController) => Promise<void>;
        setParams: React.Dispatch<unknown>;
    }
];
type Options = {
    initialData?: any;
    initialParams?: unknown;
};
type UsePayloadAPI = (url: string, options?: Options) => Result;
declare const usePayloadAPI: UsePayloadAPI;
export default usePayloadAPI;
//# sourceMappingURL=usePayloadAPI.d.ts.map