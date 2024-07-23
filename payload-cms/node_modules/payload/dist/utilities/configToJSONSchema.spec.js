"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _sanitize = require("../config/sanitize");
const _configToJSONSchema = require("./configToJSONSchema");
describe('configToJSONSchema', ()=>{
    it('should handle optional arrays with required fields', ()=>{
        const config = {
            collections: [
                {
                    fields: [
                        {
                            name: 'someRequiredField',
                            type: 'array',
                            fields: [
                                {
                                    name: 'someRequiredField',
                                    required: true,
                                    type: 'text'
                                }
                            ]
                        }
                    ],
                    slug: 'test',
                    timestamps: false
                }
            ]
        };
        const sanitizedConfig = (0, _sanitize.sanitizeConfig)(config);
        const schema = (0, _configToJSONSchema.configToJSONSchema)(sanitizedConfig, 'text');
        expect(schema?.definitions?.test).toStrictEqual({
            additionalProperties: false,
            properties: {
                id: {
                    type: 'string'
                },
                someRequiredField: {
                    items: {
                        additionalProperties: false,
                        properties: {
                            id: {
                                type: [
                                    'string',
                                    'null'
                                ]
                            },
                            someRequiredField: {
                                type: 'string'
                            }
                        },
                        required: [
                            'someRequiredField'
                        ],
                        type: 'object'
                    },
                    type: [
                        'array',
                        'null'
                    ]
                }
            },
            required: [
                'id'
            ],
            title: 'Test',
            type: 'object'
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29uZmlnVG9KU09OU2NoZW1hLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCB7IHNhbml0aXplQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3Nhbml0aXplJ1xuaW1wb3J0IHsgY29uZmlnVG9KU09OU2NoZW1hIH0gZnJvbSAnLi9jb25maWdUb0pTT05TY2hlbWEnXG5cbmRlc2NyaWJlKCdjb25maWdUb0pTT05TY2hlbWEnLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgaGFuZGxlIG9wdGlvbmFsIGFycmF5cyB3aXRoIHJlcXVpcmVkIGZpZWxkcycsICgpID0+IHtcbiAgICBjb25zdCBjb25maWc6IENvbmZpZyA9IHtcbiAgICAgIGNvbGxlY3Rpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3NvbWVSZXF1aXJlZEZpZWxkJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ3NvbWVSZXF1aXJlZEZpZWxkJyxcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc2x1ZzogJ3Rlc3QnLFxuICAgICAgICAgIHRpbWVzdGFtcHM6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9XG5cbiAgICBjb25zdCBzYW5pdGl6ZWRDb25maWcgPSBzYW5pdGl6ZUNvbmZpZyhjb25maWcpXG4gICAgY29uc3Qgc2NoZW1hID0gY29uZmlnVG9KU09OU2NoZW1hKHNhbml0aXplZENvbmZpZywgJ3RleHQnKVxuXG4gICAgZXhwZWN0KHNjaGVtYT8uZGVmaW5pdGlvbnM/LnRlc3QpLnRvU3RyaWN0RXF1YWwoe1xuICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBpZDoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICB9LFxuICAgICAgICBzb21lUmVxdWlyZWRGaWVsZDoge1xuICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIGlkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogWydzdHJpbmcnLCAnbnVsbCddLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzb21lUmVxdWlyZWRGaWVsZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBbJ3NvbWVSZXF1aXJlZEZpZWxkJ10sXG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHR5cGU6IFsnYXJyYXknLCAnbnVsbCddLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJlcXVpcmVkOiBbJ2lkJ10sXG4gICAgICB0aXRsZTogJ1Rlc3QnLFxuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgfSlcbiAgfSlcbn0pXG4iXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImNvbmZpZyIsImNvbGxlY3Rpb25zIiwiZmllbGRzIiwibmFtZSIsInR5cGUiLCJyZXF1aXJlZCIsInNsdWciLCJ0aW1lc3RhbXBzIiwic2FuaXRpemVkQ29uZmlnIiwic2FuaXRpemVDb25maWciLCJzY2hlbWEiLCJjb25maWdUb0pTT05TY2hlbWEiLCJleHBlY3QiLCJkZWZpbml0aW9ucyIsInRlc3QiLCJ0b1N0cmljdEVxdWFsIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiaWQiLCJzb21lUmVxdWlyZWRGaWVsZCIsIml0ZW1zIiwidGl0bGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OzBCQUUrQjtvQ0FDSTtBQUVuQ0EsU0FBUyxzQkFBc0I7SUFDN0JDLEdBQUcsc0RBQXNEO1FBQ3ZELE1BQU1DLFNBQWlCO1lBQ3JCQyxhQUFhO2dCQUNYO29CQUNFQyxRQUFRO3dCQUNOOzRCQUNFQyxNQUFNOzRCQUNOQyxNQUFNOzRCQUNORixRQUFRO2dDQUNOO29DQUNFQyxNQUFNO29DQUNORSxVQUFVO29DQUNWRCxNQUFNO2dDQUNSOzZCQUNEO3dCQUNIO3FCQUNEO29CQUNERSxNQUFNO29CQUNOQyxZQUFZO2dCQUNkO2FBQ0Q7UUFDSDtRQUVBLE1BQU1DLGtCQUFrQkMsSUFBQUEsd0JBQWMsRUFBQ1Q7UUFDdkMsTUFBTVUsU0FBU0MsSUFBQUEsc0NBQWtCLEVBQUNILGlCQUFpQjtRQUVuREksT0FBT0YsUUFBUUcsYUFBYUMsTUFBTUMsYUFBYSxDQUFDO1lBQzlDQyxzQkFBc0I7WUFDdEJDLFlBQVk7Z0JBQ1ZDLElBQUk7b0JBQ0ZkLE1BQU07Z0JBQ1I7Z0JBQ0FlLG1CQUFtQjtvQkFDakJDLE9BQU87d0JBQ0xKLHNCQUFzQjt3QkFDdEJDLFlBQVk7NEJBQ1ZDLElBQUk7Z0NBQ0ZkLE1BQU07b0NBQUM7b0NBQVU7aUNBQU87NEJBQzFCOzRCQUNBZSxtQkFBbUI7Z0NBQ2pCZixNQUFNOzRCQUNSO3dCQUNGO3dCQUNBQyxVQUFVOzRCQUFDO3lCQUFvQjt3QkFDL0JELE1BQU07b0JBQ1I7b0JBQ0FBLE1BQU07d0JBQUM7d0JBQVM7cUJBQU87Z0JBQ3pCO1lBQ0Y7WUFDQUMsVUFBVTtnQkFBQzthQUFLO1lBQ2hCZ0IsT0FBTztZQUNQakIsTUFBTTtRQUNSO0lBQ0Y7QUFDRiJ9