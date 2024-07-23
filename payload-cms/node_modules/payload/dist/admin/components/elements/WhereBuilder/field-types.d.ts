declare const fieldTypeConditions: {
    checkbox: {
        component: string;
        operators: {
            label: string;
            value: string;
        }[];
    };
    code: {
        component: string;
        operators: {
            label: string;
            value: string;
        }[];
    };
    date: {
        component: string;
        operators: {
            label: string;
            value: string;
        }[];
    };
    email: {
        component: string;
        operators: {
            label: string;
            value: string;
        }[];
    };
    json: {
        component: string;
        operators: {
            label: string;
            value: string;
        }[];
    };
    number: {
        component: string;
        operators: (hasMany: any) => any;
    };
    point: {
        component: string;
        operators: {
            label: string;
            value: string;
        }[];
    };
    radio: {
        component: string;
        operators: {
            label: string;
            value: string;
        }[];
    };
    relationship: {
        component: string;
        operators: {
            label: string;
            value: string;
        }[];
    };
    richText: {
        component: string;
        operators: {
            label: string;
            value: string;
        }[];
    };
    select: {
        component: string;
        operators: (hasMany: any) => any;
    };
    text: {
        component: string;
        operators: (hasMany: any) => any;
    };
    textarea: {
        component: string;
        operators: {
            label: string;
            value: string;
        }[];
    };
    upload: {
        component: string;
        operators: {
            label: string;
            value: string;
        }[];
    };
};
export default fieldTypeConditions;
//# sourceMappingURL=field-types.d.ts.map