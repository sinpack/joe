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
const _delete = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/delete"));
const _findOne = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/findOne"));
const _update = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/update"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const preferenceAccess = ({ req })=>({
        'user.value': {
            equals: req?.user?.id
        }
    });
const getPreferencesCollection = (config)=>({
        slug: 'payload-preferences',
        access: {
            delete: preferenceAccess,
            read: preferenceAccess
        },
        admin: {
            hidden: true
        },
        endpoints: [
            {
                handler: _findOne.default,
                method: 'get',
                path: '/:key'
            },
            {
                handler: _delete.default,
                method: 'delete',
                path: '/:key'
            },
            {
                handler: _update.default,
                method: 'post',
                path: '/:key'
            }
        ],
        fields: [
            {
                name: 'user',
                type: 'relationship',
                hooks: {
                    beforeValidate: [
                        ({ req })=>{
                            if (!req?.user) {
                                return null;
                            }
                            return {
                                relationTo: req?.user.collection,
                                value: req?.user.id
                            };
                        }
                    ]
                },
                index: true,
                relationTo: config.collections.filter((collectionConfig)=>collectionConfig.auth).map((collectionConfig)=>collectionConfig.slug),
                required: true
            },
            {
                name: 'key',
                type: 'text',
                index: true
            },
            {
                name: 'value',
                type: 'json'
            }
        ]
    });
const _default = getPreferencesCollection;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmVmZXJlbmNlcy9wcmVmZXJlbmNlc0NvbGxlY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBBY2Nlc3MsIENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IGRlbGV0ZUhhbmRsZXIgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvZGVsZXRlJ1xuaW1wb3J0IGZpbmRPbmUgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvZmluZE9uZSdcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvdXBkYXRlJ1xuXG5jb25zdCBwcmVmZXJlbmNlQWNjZXNzOiBBY2Nlc3MgPSAoeyByZXEgfSkgPT4gKHtcbiAgJ3VzZXIudmFsdWUnOiB7XG4gICAgZXF1YWxzOiByZXE/LnVzZXI/LmlkLFxuICB9LFxufSlcblxuY29uc3QgZ2V0UHJlZmVyZW5jZXNDb2xsZWN0aW9uID0gKGNvbmZpZzogQ29uZmlnKTogQ29sbGVjdGlvbkNvbmZpZyA9PiAoe1xuICBzbHVnOiAncGF5bG9hZC1wcmVmZXJlbmNlcycsXG4gIGFjY2Vzczoge1xuICAgIGRlbGV0ZTogcHJlZmVyZW5jZUFjY2VzcyxcbiAgICByZWFkOiBwcmVmZXJlbmNlQWNjZXNzLFxuICB9LFxuICBhZG1pbjoge1xuICAgIGhpZGRlbjogdHJ1ZSxcbiAgfSxcbiAgZW5kcG9pbnRzOiBbXG4gICAge1xuICAgICAgaGFuZGxlcjogZmluZE9uZSxcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICBwYXRoOiAnLzprZXknLFxuICAgIH0sXG4gICAge1xuICAgICAgaGFuZGxlcjogZGVsZXRlSGFuZGxlcixcbiAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXG4gICAgICBwYXRoOiAnLzprZXknLFxuICAgIH0sXG4gICAge1xuICAgICAgaGFuZGxlcjogdXBkYXRlLFxuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBwYXRoOiAnLzprZXknLFxuICAgIH0sXG4gIF0sXG4gIGZpZWxkczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICd1c2VyJyxcbiAgICAgIHR5cGU6ICdyZWxhdGlvbnNoaXAnLFxuICAgICAgaG9va3M6IHtcbiAgICAgICAgYmVmb3JlVmFsaWRhdGU6IFtcbiAgICAgICAgICAoeyByZXEgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXE/LnVzZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHJlbGF0aW9uVG86IHJlcT8udXNlci5jb2xsZWN0aW9uLFxuICAgICAgICAgICAgICB2YWx1ZTogcmVxPy51c2VyLmlkLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICByZWxhdGlvblRvOiBjb25maWcuY29sbGVjdGlvbnNcbiAgICAgICAgLmZpbHRlcigoY29sbGVjdGlvbkNvbmZpZykgPT4gY29sbGVjdGlvbkNvbmZpZy5hdXRoKVxuICAgICAgICAubWFwKChjb2xsZWN0aW9uQ29uZmlnKSA9PiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcpLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAna2V5JyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3ZhbHVlJyxcbiAgICAgIHR5cGU6ICdqc29uJyxcbiAgICB9LFxuICBdLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgZ2V0UHJlZmVyZW5jZXNDb2xsZWN0aW9uXG4iXSwibmFtZXMiOlsicHJlZmVyZW5jZUFjY2VzcyIsInJlcSIsImVxdWFscyIsInVzZXIiLCJpZCIsImdldFByZWZlcmVuY2VzQ29sbGVjdGlvbiIsImNvbmZpZyIsInNsdWciLCJhY2Nlc3MiLCJkZWxldGUiLCJyZWFkIiwiYWRtaW4iLCJoaWRkZW4iLCJlbmRwb2ludHMiLCJoYW5kbGVyIiwiZmluZE9uZSIsIm1ldGhvZCIsInBhdGgiLCJkZWxldGVIYW5kbGVyIiwidXBkYXRlIiwiZmllbGRzIiwibmFtZSIsInR5cGUiLCJob29rcyIsImJlZm9yZVZhbGlkYXRlIiwicmVsYXRpb25UbyIsImNvbGxlY3Rpb24iLCJ2YWx1ZSIsImluZGV4IiwiY29sbGVjdGlvbnMiLCJmaWx0ZXIiLCJjb2xsZWN0aW9uQ29uZmlnIiwiYXV0aCIsIm1hcCIsInJlcXVpcmVkIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkEwRUE7OztlQUFBOzs7K0RBdkUwQjtnRUFDTjsrREFDRDs7Ozs7O0FBRW5CLE1BQU1BLG1CQUEyQixDQUFDLEVBQUVDLEdBQUcsRUFBRSxHQUFNLENBQUE7UUFDN0MsY0FBYztZQUNaQyxRQUFRRCxLQUFLRSxNQUFNQztRQUNyQjtJQUNGLENBQUE7QUFFQSxNQUFNQywyQkFBMkIsQ0FBQ0MsU0FBc0MsQ0FBQTtRQUN0RUMsTUFBTTtRQUNOQyxRQUFRO1lBQ05DLFFBQVFUO1lBQ1JVLE1BQU1WO1FBQ1I7UUFDQVcsT0FBTztZQUNMQyxRQUFRO1FBQ1Y7UUFDQUMsV0FBVztZQUNUO2dCQUNFQyxTQUFTQyxnQkFBTztnQkFDaEJDLFFBQVE7Z0JBQ1JDLE1BQU07WUFDUjtZQUNBO2dCQUNFSCxTQUFTSSxlQUFhO2dCQUN0QkYsUUFBUTtnQkFDUkMsTUFBTTtZQUNSO1lBQ0E7Z0JBQ0VILFNBQVNLLGVBQU07Z0JBQ2ZILFFBQVE7Z0JBQ1JDLE1BQU07WUFDUjtTQUNEO1FBQ0RHLFFBQVE7WUFDTjtnQkFDRUMsTUFBTTtnQkFDTkMsTUFBTTtnQkFDTkMsT0FBTztvQkFDTEMsZ0JBQWdCO3dCQUNkLENBQUMsRUFBRXZCLEdBQUcsRUFBRTs0QkFDTixJQUFJLENBQUNBLEtBQUtFLE1BQU07Z0NBQ2QsT0FBTzs0QkFDVDs0QkFDQSxPQUFPO2dDQUNMc0IsWUFBWXhCLEtBQUtFLEtBQUt1QjtnQ0FDdEJDLE9BQU8xQixLQUFLRSxLQUFLQzs0QkFDbkI7d0JBQ0Y7cUJBQ0Q7Z0JBQ0g7Z0JBQ0F3QixPQUFPO2dCQUNQSCxZQUFZbkIsT0FBT3VCLFdBQVcsQ0FDM0JDLE1BQU0sQ0FBQyxDQUFDQyxtQkFBcUJBLGlCQUFpQkMsSUFBSSxFQUNsREMsR0FBRyxDQUFDLENBQUNGLG1CQUFxQkEsaUJBQWlCeEIsSUFBSTtnQkFDbEQyQixVQUFVO1lBQ1o7WUFDQTtnQkFDRWIsTUFBTTtnQkFDTkMsTUFBTTtnQkFDTk0sT0FBTztZQUNUO1lBQ0E7Z0JBQ0VQLE1BQU07Z0JBQ05DLE1BQU07WUFDUjtTQUNEO0lBQ0gsQ0FBQTtNQUVBLFdBQWVqQiJ9