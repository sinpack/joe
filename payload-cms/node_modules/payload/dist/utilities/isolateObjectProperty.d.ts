/**
 * Creates a proxy for the given object that has its own property
 */
export default function isolateObjectProperty<T extends object>(object: T, key: (keyof T)[] | keyof T): T;
//# sourceMappingURL=isolateObjectProperty.d.ts.map