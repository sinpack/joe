export type UpdatedDocument = {
    entitySlug: string;
    id?: string;
    updatedAt: string;
};
export type DocumentEventsContext = {
    mostRecentUpdate: UpdatedDocument;
    reportUpdate: (updatedDocument: Array<UpdatedDocument>) => void;
};
//# sourceMappingURL=types.d.ts.map