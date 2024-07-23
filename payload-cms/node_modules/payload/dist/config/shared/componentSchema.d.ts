import joi from 'joi';
export declare const componentSchema: joi.AlternativesSchema<any>;
export declare const documentTabSchema: {
    condition: joi.FunctionSchema<Function>;
    href: joi.AlternativesSchema<any>;
    isActive: joi.AlternativesSchema<any>;
    label: joi.AlternativesSchema<any>;
    newTab: joi.BooleanSchema<boolean>;
    pillLabel: joi.AlternativesSchema<any>;
};
export declare const customViewSchema: joi.ObjectSchema<any>;
export declare const livePreviewSchema: {
    breakpoints: joi.ArraySchema<any[]>;
    url: joi.AlternativesSchema<any>;
};
//# sourceMappingURL=componentSchema.d.ts.map