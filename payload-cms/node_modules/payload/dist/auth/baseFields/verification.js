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
const _extractTranslations = require("../../translations/extractTranslations");
const labels = (0, _extractTranslations.extractTranslations)([
    'authentication:verified'
]);
const autoRemoveVerificationToken = ({ data, operation, originalDoc, value })=>{
    // If a user manually sets `_verified` to true,
    // and it was `false`, set _verificationToken to `null`.
    // This is useful because the admin panel
    // allows users to set `_verified` to true manually
    if (operation === 'update') {
        if (data?._verified === true && originalDoc?._verified === false) {
            return null;
        }
    }
    return value;
};
const _default = [
    {
        name: '_verified',
        access: {
            create: ({ req: { user } })=>Boolean(user),
            read: ({ req: { user } })=>Boolean(user),
            update: ({ req: { user } })=>Boolean(user)
        },
        admin: {
            components: {
                Field: ()=>null
            }
        },
        label: labels['authentication:verified'],
        type: 'checkbox'
    },
    {
        name: '_verificationToken',
        hidden: true,
        hooks: {
            beforeChange: [
                autoRemoveVerificationToken
            ]
        },
        type: 'text'
    }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL2Jhc2VGaWVsZHMvdmVyaWZpY2F0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgRmllbGQsIEZpZWxkSG9vayB9IGZyb20gJy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5cbmltcG9ydCB7IGV4dHJhY3RUcmFuc2xhdGlvbnMgfSBmcm9tICcuLi8uLi90cmFuc2xhdGlvbnMvZXh0cmFjdFRyYW5zbGF0aW9ucydcblxuY29uc3QgbGFiZWxzID0gZXh0cmFjdFRyYW5zbGF0aW9ucyhbJ2F1dGhlbnRpY2F0aW9uOnZlcmlmaWVkJ10pXG5cbmNvbnN0IGF1dG9SZW1vdmVWZXJpZmljYXRpb25Ub2tlbjogRmllbGRIb29rID0gKHsgZGF0YSwgb3BlcmF0aW9uLCBvcmlnaW5hbERvYywgdmFsdWUgfSkgPT4ge1xuICAvLyBJZiBhIHVzZXIgbWFudWFsbHkgc2V0cyBgX3ZlcmlmaWVkYCB0byB0cnVlLFxuICAvLyBhbmQgaXQgd2FzIGBmYWxzZWAsIHNldCBfdmVyaWZpY2F0aW9uVG9rZW4gdG8gYG51bGxgLlxuICAvLyBUaGlzIGlzIHVzZWZ1bCBiZWNhdXNlIHRoZSBhZG1pbiBwYW5lbFxuICAvLyBhbGxvd3MgdXNlcnMgdG8gc2V0IGBfdmVyaWZpZWRgIHRvIHRydWUgbWFudWFsbHlcblxuICBpZiAob3BlcmF0aW9uID09PSAndXBkYXRlJykge1xuICAgIGlmIChkYXRhPy5fdmVyaWZpZWQgPT09IHRydWUgJiYgb3JpZ2luYWxEb2M/Ll92ZXJpZmllZCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIG5hbWU6ICdfdmVyaWZpZWQnLFxuICAgIGFjY2Vzczoge1xuICAgICAgY3JlYXRlOiAoeyByZXE6IHsgdXNlciB9IH0pID0+IEJvb2xlYW4odXNlciksXG4gICAgICByZWFkOiAoeyByZXE6IHsgdXNlciB9IH0pID0+IEJvb2xlYW4odXNlciksXG4gICAgICB1cGRhdGU6ICh7IHJlcTogeyB1c2VyIH0gfSkgPT4gQm9vbGVhbih1c2VyKSxcbiAgICB9LFxuICAgIGFkbWluOiB7XG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEZpZWxkOiAoKSA9PiBudWxsLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGxhYmVsOiBsYWJlbHNbJ2F1dGhlbnRpY2F0aW9uOnZlcmlmaWVkJ10sXG4gICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdfdmVyaWZpY2F0aW9uVG9rZW4nLFxuICAgIGhpZGRlbjogdHJ1ZSxcbiAgICBob29rczoge1xuICAgICAgYmVmb3JlQ2hhbmdlOiBbYXV0b1JlbW92ZVZlcmlmaWNhdGlvblRva2VuXSxcbiAgICB9LFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgfSxcbl0gYXMgRmllbGRbXVxuIl0sIm5hbWVzIjpbImxhYmVscyIsImV4dHJhY3RUcmFuc2xhdGlvbnMiLCJhdXRvUmVtb3ZlVmVyaWZpY2F0aW9uVG9rZW4iLCJkYXRhIiwib3BlcmF0aW9uIiwib3JpZ2luYWxEb2MiLCJ2YWx1ZSIsIl92ZXJpZmllZCIsIm5hbWUiLCJhY2Nlc3MiLCJjcmVhdGUiLCJyZXEiLCJ1c2VyIiwiQm9vbGVhbiIsInJlYWQiLCJ1cGRhdGUiLCJhZG1pbiIsImNvbXBvbmVudHMiLCJGaWVsZCIsImxhYmVsIiwidHlwZSIsImhpZGRlbiIsImhvb2tzIiwiYmVmb3JlQ2hhbmdlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBcUJBOzs7ZUFBQTs7O3FDQW5Cb0M7QUFFcEMsTUFBTUEsU0FBU0MsSUFBQUEsd0NBQW1CLEVBQUM7SUFBQztDQUEwQjtBQUU5RCxNQUFNQyw4QkFBeUMsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxLQUFLLEVBQUU7SUFDckYsK0NBQStDO0lBQy9DLHdEQUF3RDtJQUN4RCx5Q0FBeUM7SUFDekMsbURBQW1EO0lBRW5ELElBQUlGLGNBQWMsVUFBVTtRQUMxQixJQUFJRCxNQUFNSSxjQUFjLFFBQVFGLGFBQWFFLGNBQWMsT0FBTztZQUNoRSxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9EO0FBQ1Q7TUFFQSxXQUFlO0lBQ2I7UUFDRUUsTUFBTTtRQUNOQyxRQUFRO1lBQ05DLFFBQVEsQ0FBQyxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRSxFQUFFLEdBQUtDLFFBQVFEO1lBQ3ZDRSxNQUFNLENBQUMsRUFBRUgsS0FBSyxFQUFFQyxJQUFJLEVBQUUsRUFBRSxHQUFLQyxRQUFRRDtZQUNyQ0csUUFBUSxDQUFDLEVBQUVKLEtBQUssRUFBRUMsSUFBSSxFQUFFLEVBQUUsR0FBS0MsUUFBUUQ7UUFDekM7UUFDQUksT0FBTztZQUNMQyxZQUFZO2dCQUNWQyxPQUFPLElBQU07WUFDZjtRQUNGO1FBQ0FDLE9BQU9uQixNQUFNLENBQUMsMEJBQTBCO1FBQ3hDb0IsTUFBTTtJQUNSO0lBQ0E7UUFDRVosTUFBTTtRQUNOYSxRQUFRO1FBQ1JDLE9BQU87WUFDTEMsY0FBYztnQkFBQ3JCO2FBQTRCO1FBQzdDO1FBQ0FrQixNQUFNO0lBQ1I7Q0FDRCJ9