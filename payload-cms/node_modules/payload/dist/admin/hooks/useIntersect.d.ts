/// <reference types="react" />
type Intersect = [setNode: React.Dispatch<Element>, entry: IntersectionObserverEntry];
declare const useIntersect: ({ root, rootMargin, threshold }?: {
    root?: any;
    rootMargin?: string;
    threshold?: number;
}, disable?: boolean) => Intersect;
export default useIntersect;
//# sourceMappingURL=useIntersect.d.ts.map