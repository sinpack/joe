/// <reference types="react" />
import type { ArrayField, BlockField, CheckboxField, CodeField, DateField, EmailField, JSONField, NumberField, PointField, RadioField, RelationshipField, RichTextField, SelectField, TextField, TextareaField, UploadField, Validate } from './config/types';
export declare const text: Validate<unknown, unknown, TextField>;
export declare const password: Validate<unknown, unknown, TextField>;
export declare const email: Validate<unknown, unknown, EmailField>;
export declare const textarea: Validate<unknown, unknown, TextareaField>;
export declare const code: Validate<unknown, unknown, CodeField>;
export declare const json: Validate<unknown, unknown, JSONField & {
    jsonError?: string;
}>;
export declare const checkbox: Validate<unknown, unknown, CheckboxField>;
export declare const date: Validate<unknown, unknown, DateField>;
export declare const richText: Validate<object, unknown, RichTextField, RichTextField>;
export declare const number: Validate<unknown, unknown, NumberField>;
export declare const array: Validate<unknown, unknown, ArrayField>;
export declare const blocks: Validate<unknown, unknown, BlockField>;
export declare const upload: Validate<unknown, unknown, UploadField>;
export declare const relationship: Validate<unknown, unknown, RelationshipField>;
export declare const select: Validate<unknown, unknown, SelectField>;
export declare const radio: Validate<unknown, unknown, RadioField>;
export declare const point: Validate<unknown, unknown, PointField>;
declare const _default: {
    array: Validate<unknown, unknown, ArrayField>;
    blocks: Validate<unknown, unknown, BlockField>;
    checkbox: Validate<unknown, unknown, CheckboxField>;
    code: Validate<unknown, unknown, CodeField>;
    date: Validate<unknown, unknown, DateField>;
    email: Validate<unknown, unknown, EmailField>;
    json: Validate<unknown, unknown, Omit<import("./config/types").FieldBase, "admin"> & {
        admin?: {
            className?: string;
            components?: {
                Cell?: import("react").ComponentType<any>;
                Field?: import("react").ComponentType<any>;
                Filter?: import("react").ComponentType<any>;
            };
            condition?: import("./config/types").Condition<any, any>;
            description?: import("../exports/components/elements").Description;
            disableBulkEdit?: boolean;
            disableListColumn?: boolean;
            disableListFilter?: boolean;
            disabled?: boolean;
            hidden?: boolean;
            position?: "sidebar";
            readOnly?: boolean;
            style?: import("react").CSSProperties;
            width?: string;
        } & {
            components?: {
                Error?: import("react").ComponentType<import("../admin/components/forms/Error/types").Props>;
                Label?: import("react").ComponentType<import("../admin/components/forms/Label/types").Props>;
            };
            editorOptions?: import("monaco-editor").editor.IStandaloneEditorConstructionOptions;
        };
        jsonSchema?: Record<string, unknown>;
        type: "json";
    } & {
        jsonError?: string;
    }>;
    number: Validate<unknown, unknown, NumberField>;
    password: Validate<unknown, unknown, TextField>;
    point: Validate<unknown, unknown, PointField>;
    radio: Validate<unknown, unknown, RadioField>;
    relationship: Validate<unknown, unknown, RelationshipField>;
    richText: Validate<object, unknown, RichTextField, RichTextField>;
    select: Validate<unknown, unknown, SelectField>;
    text: Validate<unknown, unknown, TextField>;
    textarea: Validate<unknown, unknown, TextareaField>;
    upload: Validate<unknown, unknown, UploadField>;
};
export default _default;
//# sourceMappingURL=validations.d.ts.map