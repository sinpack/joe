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
const _validations = require("../../fields/validations");
const _extractTranslations = require("../../translations/extractTranslations");
const labels = (0, _extractTranslations.extractTranslations)([
    'general:email'
]);
const baseAuthFields = [
    {
        name: 'email',
        admin: {
            components: {
                Field: ()=>null
            }
        },
        label: labels['general:email'],
        required: true,
        type: 'email',
        unique: true,
        validate: _validations.email
    },
    {
        name: 'resetPasswordToken',
        hidden: true,
        type: 'text'
    },
    {
        name: 'resetPasswordExpiration',
        hidden: true,
        type: 'date'
    },
    {
        name: 'salt',
        hidden: true,
        type: 'text'
    },
    {
        name: 'hash',
        hidden: true,
        type: 'text'
    }
];
const _default = baseAuthFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL2Jhc2VGaWVsZHMvYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IHsgZW1haWwgfSBmcm9tICcuLi8uLi9maWVsZHMvdmFsaWRhdGlvbnMnXG5pbXBvcnQgeyBleHRyYWN0VHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zL2V4dHJhY3RUcmFuc2xhdGlvbnMnXG5cbmNvbnN0IGxhYmVscyA9IGV4dHJhY3RUcmFuc2xhdGlvbnMoWydnZW5lcmFsOmVtYWlsJ10pXG5cbmNvbnN0IGJhc2VBdXRoRmllbGRzOiBGaWVsZFtdID0gW1xuICB7XG4gICAgbmFtZTogJ2VtYWlsJyxcbiAgICBhZG1pbjoge1xuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBGaWVsZDogKCkgPT4gbnVsbCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBsYWJlbDogbGFiZWxzWydnZW5lcmFsOmVtYWlsJ10sXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgdHlwZTogJ2VtYWlsJyxcbiAgICB1bmlxdWU6IHRydWUsXG4gICAgdmFsaWRhdGU6IGVtYWlsLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ3Jlc2V0UGFzc3dvcmRUb2tlbicsXG4gICAgaGlkZGVuOiB0cnVlLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdyZXNldFBhc3N3b3JkRXhwaXJhdGlvbicsXG4gICAgaGlkZGVuOiB0cnVlLFxuICAgIHR5cGU6ICdkYXRlJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdzYWx0JyxcbiAgICBoaWRkZW46IHRydWUsXG4gICAgdHlwZTogJ3RleHQnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2hhc2gnLFxuICAgIGhpZGRlbjogdHJ1ZSxcbiAgICB0eXBlOiAndGV4dCcsXG4gIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VBdXRoRmllbGRzXG4iXSwibmFtZXMiOlsibGFiZWxzIiwiZXh0cmFjdFRyYW5zbGF0aW9ucyIsImJhc2VBdXRoRmllbGRzIiwibmFtZSIsImFkbWluIiwiY29tcG9uZW50cyIsIkZpZWxkIiwibGFiZWwiLCJyZXF1aXJlZCIsInR5cGUiLCJ1bmlxdWUiLCJ2YWxpZGF0ZSIsImVtYWlsIiwiaGlkZGVuIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTJDQTs7O2VBQUE7Ozs2QkF6Q3NCO3FDQUNjO0FBRXBDLE1BQU1BLFNBQVNDLElBQUFBLHdDQUFtQixFQUFDO0lBQUM7Q0FBZ0I7QUFFcEQsTUFBTUMsaUJBQTBCO0lBQzlCO1FBQ0VDLE1BQU07UUFDTkMsT0FBTztZQUNMQyxZQUFZO2dCQUNWQyxPQUFPLElBQU07WUFDZjtRQUNGO1FBQ0FDLE9BQU9QLE1BQU0sQ0FBQyxnQkFBZ0I7UUFDOUJRLFVBQVU7UUFDVkMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFVBQVVDLGtCQUFLO0lBQ2pCO0lBQ0E7UUFDRVQsTUFBTTtRQUNOVSxRQUFRO1FBQ1JKLE1BQU07SUFDUjtJQUNBO1FBQ0VOLE1BQU07UUFDTlUsUUFBUTtRQUNSSixNQUFNO0lBQ1I7SUFDQTtRQUNFTixNQUFNO1FBQ05VLFFBQVE7UUFDUkosTUFBTTtJQUNSO0lBQ0E7UUFDRU4sTUFBTTtRQUNOVSxRQUFRO1FBQ1JKLE1BQU07SUFDUjtDQUNEO01BRUQsV0FBZVAifQ==