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
const _crypto = /*#__PURE__*/ _interop_require_default(require("crypto"));
const _extractTranslations = require("../../translations/extractTranslations");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const labels = (0, _extractTranslations.extractTranslations)([
    'authentication:enableAPIKey',
    'authentication:apiKey'
]);
const encryptKey = ({ req, value })=>value ? req.payload.encrypt(value) : null;
const decryptKey = ({ req, value })=>value ? req.payload.decrypt(value) : undefined;
const _default = [
    {
        name: 'enableAPIKey',
        type: 'checkbox',
        admin: {
            components: {
                Field: ()=>null
            }
        },
        label: labels['authentication:enableAPIKey']
    },
    {
        name: 'apiKey',
        type: 'text',
        admin: {
            components: {
                Field: ()=>null
            }
        },
        hooks: {
            afterRead: [
                decryptKey
            ],
            beforeChange: [
                encryptKey
            ]
        },
        label: labels['authentication:apiKey']
    },
    {
        name: 'apiKeyIndex',
        type: 'text',
        admin: {
            disabled: true
        },
        hidden: true,
        hooks: {
            beforeValidate: [
                ({ data, req, value })=>{
                    if (data.apiKey === false || data.apiKey === null) {
                        return null;
                    }
                    if (data.enableAPIKey === false || data.enableAPIKey === null) {
                        return null;
                    }
                    if (data.apiKey) {
                        return _crypto.default.createHmac('sha1', req.payload.secret).update(data.apiKey).digest('hex');
                    }
                    return value;
                }
            ]
        }
    }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL2Jhc2VGaWVsZHMvYXBpS2V5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJ1xuXG5pbXBvcnQgdHlwZSB7IEZpZWxkLCBGaWVsZEhvb2sgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuXG5pbXBvcnQgeyBleHRyYWN0VHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zL2V4dHJhY3RUcmFuc2xhdGlvbnMnXG5cbmNvbnN0IGxhYmVscyA9IGV4dHJhY3RUcmFuc2xhdGlvbnMoWydhdXRoZW50aWNhdGlvbjplbmFibGVBUElLZXknLCAnYXV0aGVudGljYXRpb246YXBpS2V5J10pXG5cbmNvbnN0IGVuY3J5cHRLZXk6IEZpZWxkSG9vayA9ICh7IHJlcSwgdmFsdWUgfSkgPT5cbiAgdmFsdWUgPyByZXEucGF5bG9hZC5lbmNyeXB0KHZhbHVlIGFzIHN0cmluZykgOiBudWxsXG5jb25zdCBkZWNyeXB0S2V5OiBGaWVsZEhvb2sgPSAoeyByZXEsIHZhbHVlIH0pID0+XG4gIHZhbHVlID8gcmVxLnBheWxvYWQuZGVjcnlwdCh2YWx1ZSBhcyBzdHJpbmcpIDogdW5kZWZpbmVkXG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIG5hbWU6ICdlbmFibGVBUElLZXknLFxuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgYWRtaW46IHtcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgRmllbGQ6ICgpID0+IG51bGwsXG4gICAgICB9LFxuICAgIH0sXG4gICAgbGFiZWw6IGxhYmVsc1snYXV0aGVudGljYXRpb246ZW5hYmxlQVBJS2V5J10sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnYXBpS2V5JyxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgYWRtaW46IHtcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgRmllbGQ6ICgpID0+IG51bGwsXG4gICAgICB9LFxuICAgIH0sXG4gICAgaG9va3M6IHtcbiAgICAgIGFmdGVyUmVhZDogW2RlY3J5cHRLZXldLFxuICAgICAgYmVmb3JlQ2hhbmdlOiBbZW5jcnlwdEtleV0sXG4gICAgfSxcbiAgICBsYWJlbDogbGFiZWxzWydhdXRoZW50aWNhdGlvbjphcGlLZXknXSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdhcGlLZXlJbmRleCcsXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIGFkbWluOiB7XG4gICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGhpZGRlbjogdHJ1ZSxcbiAgICBob29rczoge1xuICAgICAgYmVmb3JlVmFsaWRhdGU6IFtcbiAgICAgICAgKHsgZGF0YSwgcmVxLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEuYXBpS2V5ID09PSBmYWxzZSB8fCBkYXRhLmFwaUtleSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGRhdGEuZW5hYmxlQVBJS2V5ID09PSBmYWxzZSB8fCBkYXRhLmVuYWJsZUFQSUtleSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGRhdGEuYXBpS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gY3J5cHRvXG4gICAgICAgICAgICAgIC5jcmVhdGVIbWFjKCdzaGExJywgcmVxLnBheWxvYWQuc2VjcmV0KVxuICAgICAgICAgICAgICAudXBkYXRlKGRhdGEuYXBpS2V5IGFzIHN0cmluZylcbiAgICAgICAgICAgICAgLmRpZ2VzdCgnaGV4JylcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG5dIGFzIEZpZWxkW11cbiJdLCJuYW1lcyI6WyJsYWJlbHMiLCJleHRyYWN0VHJhbnNsYXRpb25zIiwiZW5jcnlwdEtleSIsInJlcSIsInZhbHVlIiwicGF5bG9hZCIsImVuY3J5cHQiLCJkZWNyeXB0S2V5IiwiZGVjcnlwdCIsInVuZGVmaW5lZCIsIm5hbWUiLCJ0eXBlIiwiYWRtaW4iLCJjb21wb25lbnRzIiwiRmllbGQiLCJsYWJlbCIsImhvb2tzIiwiYWZ0ZXJSZWFkIiwiYmVmb3JlQ2hhbmdlIiwiZGlzYWJsZWQiLCJoaWRkZW4iLCJiZWZvcmVWYWxpZGF0ZSIsImRhdGEiLCJhcGlLZXkiLCJlbmFibGVBUElLZXkiLCJjcnlwdG8iLCJjcmVhdGVIbWFjIiwic2VjcmV0IiwidXBkYXRlIiwiZGlnZXN0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBYUE7OztlQUFBOzs7K0RBYm1CO3FDQUlpQjs7Ozs7O0FBRXBDLE1BQU1BLFNBQVNDLElBQUFBLHdDQUFtQixFQUFDO0lBQUM7SUFBK0I7Q0FBd0I7QUFFM0YsTUFBTUMsYUFBd0IsQ0FBQyxFQUFFQyxHQUFHLEVBQUVDLEtBQUssRUFBRSxHQUMzQ0EsUUFBUUQsSUFBSUUsT0FBTyxDQUFDQyxPQUFPLENBQUNGLFNBQW1CO0FBQ2pELE1BQU1HLGFBQXdCLENBQUMsRUFBRUosR0FBRyxFQUFFQyxLQUFLLEVBQUUsR0FDM0NBLFFBQVFELElBQUlFLE9BQU8sQ0FBQ0csT0FBTyxDQUFDSixTQUFtQks7TUFFakQsV0FBZTtJQUNiO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxPQUFPO1lBQ0xDLFlBQVk7Z0JBQ1ZDLE9BQU8sSUFBTTtZQUNmO1FBQ0Y7UUFDQUMsT0FBT2YsTUFBTSxDQUFDLDhCQUE4QjtJQUM5QztJQUNBO1FBQ0VVLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxPQUFPO1lBQ0xDLFlBQVk7Z0JBQ1ZDLE9BQU8sSUFBTTtZQUNmO1FBQ0Y7UUFDQUUsT0FBTztZQUNMQyxXQUFXO2dCQUFDVjthQUFXO1lBQ3ZCVyxjQUFjO2dCQUFDaEI7YUFBVztRQUM1QjtRQUNBYSxPQUFPZixNQUFNLENBQUMsd0JBQXdCO0lBQ3hDO0lBQ0E7UUFDRVUsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87WUFDTE8sVUFBVTtRQUNaO1FBQ0FDLFFBQVE7UUFDUkosT0FBTztZQUNMSyxnQkFBZ0I7Z0JBQ2QsQ0FBQyxFQUFFQyxJQUFJLEVBQUVuQixHQUFHLEVBQUVDLEtBQUssRUFBRTtvQkFDbkIsSUFBSWtCLEtBQUtDLE1BQU0sS0FBSyxTQUFTRCxLQUFLQyxNQUFNLEtBQUssTUFBTTt3QkFDakQsT0FBTztvQkFDVDtvQkFDQSxJQUFJRCxLQUFLRSxZQUFZLEtBQUssU0FBU0YsS0FBS0UsWUFBWSxLQUFLLE1BQU07d0JBQzdELE9BQU87b0JBQ1Q7b0JBQ0EsSUFBSUYsS0FBS0MsTUFBTSxFQUFFO3dCQUNmLE9BQU9FLGVBQU0sQ0FDVkMsVUFBVSxDQUFDLFFBQVF2QixJQUFJRSxPQUFPLENBQUNzQixNQUFNLEVBQ3JDQyxNQUFNLENBQUNOLEtBQUtDLE1BQU0sRUFDbEJNLE1BQU0sQ0FBQztvQkFDWjtvQkFDQSxPQUFPekI7Z0JBQ1Q7YUFDRDtRQUNIO0lBQ0Y7Q0FDRCJ9