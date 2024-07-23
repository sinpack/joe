/* eslint-disable no-restricted-syntax */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "validateQueryPaths", {
    enumerable: true,
    get: function() {
        return validateQueryPaths;
    }
});
const _QueryError = /*#__PURE__*/ _interop_require_default(require("../../errors/QueryError"));
const _constants = require("../../types/constants");
const _deepCopyObject = require("../../utilities/deepCopyObject");
const _flattenTopLevelFields = /*#__PURE__*/ _interop_require_default(require("../../utilities/flattenTopLevelFields"));
const _validateSearchParams = require("./validateSearchParams");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const flattenWhere = (query)=>Object.entries(query).reduce((flattenedConstraints, [key, val])=>{
        if ((key === 'and' || key === 'or') && Array.isArray(val)) {
            const subWhereConstraints = val.reduce((acc, subVal)=>{
                const subWhere = flattenWhere(subVal);
                return [
                    ...acc,
                    ...subWhere
                ];
            }, []);
            return [
                ...flattenedConstraints,
                ...subWhereConstraints
            ];
        }
        return [
            ...flattenedConstraints,
            {
                [key]: val
            }
        ];
    }, []);
async function validateQueryPaths({ collectionConfig, errors = [], globalConfig, overrideAccess, policies = {
    collections: {},
    globals: {}
}, req, versionFields, where }) {
    const fields = (0, _flattenTopLevelFields.default)(versionFields || (globalConfig || collectionConfig).fields);
    if (typeof where === 'object') {
        const whereFields = flattenWhere(where);
        // We need to determine if the whereKey is an AND, OR, or a schema path
        const promises = [];
        whereFields.map(async (constraint)=>{
            Object.keys(constraint).map(async (path)=>{
                Object.entries(constraint[path]).map(async ([operator, val])=>{
                    if (_constants.validOperators.includes(operator)) {
                        promises.push((0, _validateSearchParams.validateSearchParam)({
                            collectionConfig: (0, _deepCopyObject.deepCopyObject)(collectionConfig),
                            errors,
                            fields: fields,
                            globalConfig: (0, _deepCopyObject.deepCopyObject)(globalConfig),
                            operator,
                            overrideAccess,
                            path,
                            policies,
                            req,
                            val,
                            versionFields
                        }));
                    }
                });
            });
        });
        await Promise.all(promises);
        if (errors.length > 0) {
            throw new _QueryError.default(errors);
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9xdWVyeVZhbGlkYXRpb24vdmFsaWRhdGVRdWVyeVBhdGhzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IEZpZWxkLCBGaWVsZEFmZmVjdGluZ0RhdGEgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi9nbG9iYWxzL2NvbmZpZy90eXBlcydcbi8qIGVzbGludC1kaXNhYmxlIG5vLWF3YWl0LWluLWxvb3AgKi9cbmltcG9ydCB0eXBlIHsgT3BlcmF0b3IsIFBheWxvYWRSZXF1ZXN0LCBXaGVyZSwgV2hlcmVGaWVsZCB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBFbnRpdHlQb2xpY2llcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCBRdWVyeUVycm9yIGZyb20gJy4uLy4uL2Vycm9ycy9RdWVyeUVycm9yJ1xuaW1wb3J0IHsgdmFsaWRPcGVyYXRvcnMgfSBmcm9tICcuLi8uLi90eXBlcy9jb25zdGFudHMnXG5pbXBvcnQgeyBkZWVwQ29weU9iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9kZWVwQ29weU9iamVjdCdcbmltcG9ydCBmbGF0dGVuRmllbGRzIGZyb20gJy4uLy4uL3V0aWxpdGllcy9mbGF0dGVuVG9wTGV2ZWxGaWVsZHMnXG5pbXBvcnQgeyB2YWxpZGF0ZVNlYXJjaFBhcmFtIH0gZnJvbSAnLi92YWxpZGF0ZVNlYXJjaFBhcmFtcydcblxudHlwZSBBcmdzID0ge1xuICBlcnJvcnM/OiB7IHBhdGg6IHN0cmluZyB9W11cbiAgb3ZlcnJpZGVBY2Nlc3M6IGJvb2xlYW5cbiAgcG9saWNpZXM/OiBFbnRpdHlQb2xpY2llc1xuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIHZlcnNpb25GaWVsZHM/OiBGaWVsZFtdXG4gIHdoZXJlOiBXaGVyZVxufSAmIChcbiAgfCB7XG4gICAgICBjb2xsZWN0aW9uQ29uZmlnOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnXG4gICAgICBnbG9iYWxDb25maWc/OiBuZXZlciB8IHVuZGVmaW5lZFxuICAgIH1cbiAgfCB7XG4gICAgICBjb2xsZWN0aW9uQ29uZmlnPzogbmV2ZXIgfCB1bmRlZmluZWRcbiAgICAgIGdsb2JhbENvbmZpZzogU2FuaXRpemVkR2xvYmFsQ29uZmlnXG4gICAgfVxuKVxuXG5jb25zdCBmbGF0dGVuV2hlcmUgPSAocXVlcnk6IFdoZXJlKTogV2hlcmVGaWVsZFtdID0+XG4gIE9iamVjdC5lbnRyaWVzKHF1ZXJ5KS5yZWR1Y2UoKGZsYXR0ZW5lZENvbnN0cmFpbnRzLCBba2V5LCB2YWxdKSA9PiB7XG4gICAgaWYgKChrZXkgPT09ICdhbmQnIHx8IGtleSA9PT0gJ29yJykgJiYgQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICBjb25zdCBzdWJXaGVyZUNvbnN0cmFpbnRzOiBXaGVyZVtdID0gdmFsLnJlZHVjZSgoYWNjLCBzdWJWYWwpID0+IHtcbiAgICAgICAgY29uc3Qgc3ViV2hlcmUgPSBmbGF0dGVuV2hlcmUoc3ViVmFsKVxuICAgICAgICByZXR1cm4gWy4uLmFjYywgLi4uc3ViV2hlcmVdXG4gICAgICB9LCBbXSlcbiAgICAgIHJldHVybiBbLi4uZmxhdHRlbmVkQ29uc3RyYWludHMsIC4uLnN1YldoZXJlQ29uc3RyYWludHNdXG4gICAgfVxuXG4gICAgcmV0dXJuIFsuLi5mbGF0dGVuZWRDb25zdHJhaW50cywgeyBba2V5XTogdmFsIH1dXG4gIH0sIFtdKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVRdWVyeVBhdGhzKHtcbiAgY29sbGVjdGlvbkNvbmZpZyxcbiAgZXJyb3JzID0gW10sXG4gIGdsb2JhbENvbmZpZyxcbiAgb3ZlcnJpZGVBY2Nlc3MsXG4gIHBvbGljaWVzID0ge1xuICAgIGNvbGxlY3Rpb25zOiB7fSxcbiAgICBnbG9iYWxzOiB7fSxcbiAgfSxcbiAgcmVxLFxuICB2ZXJzaW9uRmllbGRzLFxuICB3aGVyZSxcbn06IEFyZ3MpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgZmllbGRzID0gZmxhdHRlbkZpZWxkcyhcbiAgICB2ZXJzaW9uRmllbGRzIHx8IChnbG9iYWxDb25maWcgfHwgY29sbGVjdGlvbkNvbmZpZykuZmllbGRzLFxuICApIGFzIEZpZWxkQWZmZWN0aW5nRGF0YVtdXG4gIGlmICh0eXBlb2Ygd2hlcmUgPT09ICdvYmplY3QnKSB7XG4gICAgY29uc3Qgd2hlcmVGaWVsZHMgPSBmbGF0dGVuV2hlcmUod2hlcmUpXG4gICAgLy8gV2UgbmVlZCB0byBkZXRlcm1pbmUgaWYgdGhlIHdoZXJlS2V5IGlzIGFuIEFORCwgT1IsIG9yIGEgc2NoZW1hIHBhdGhcbiAgICBjb25zdCBwcm9taXNlcyA9IFtdXG4gICAgd2hlcmVGaWVsZHMubWFwKGFzeW5jIChjb25zdHJhaW50KSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhjb25zdHJhaW50KS5tYXAoYXN5bmMgKHBhdGgpID0+IHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY29uc3RyYWludFtwYXRoXSkubWFwKGFzeW5jIChbb3BlcmF0b3IsIHZhbF0pID0+IHtcbiAgICAgICAgICBpZiAodmFsaWRPcGVyYXRvcnMuaW5jbHVkZXMob3BlcmF0b3IgYXMgT3BlcmF0b3IpKSB7XG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxuICAgICAgICAgICAgICB2YWxpZGF0ZVNlYXJjaFBhcmFtKHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uQ29uZmlnOiBkZWVwQ29weU9iamVjdChjb2xsZWN0aW9uQ29uZmlnKSxcbiAgICAgICAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgICAgICAgZmllbGRzOiBmaWVsZHMgYXMgRmllbGRbXSxcbiAgICAgICAgICAgICAgICBnbG9iYWxDb25maWc6IGRlZXBDb3B5T2JqZWN0KGdsb2JhbENvbmZpZyksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgICBwb2xpY2llcyxcbiAgICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICAgICAgdmFsLFxuICAgICAgICAgICAgICAgIHZlcnNpb25GaWVsZHMsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBRdWVyeUVycm9yKGVycm9ycylcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZVF1ZXJ5UGF0aHMiLCJmbGF0dGVuV2hlcmUiLCJxdWVyeSIsIk9iamVjdCIsImVudHJpZXMiLCJyZWR1Y2UiLCJmbGF0dGVuZWRDb25zdHJhaW50cyIsImtleSIsInZhbCIsIkFycmF5IiwiaXNBcnJheSIsInN1YldoZXJlQ29uc3RyYWludHMiLCJhY2MiLCJzdWJWYWwiLCJzdWJXaGVyZSIsImNvbGxlY3Rpb25Db25maWciLCJlcnJvcnMiLCJnbG9iYWxDb25maWciLCJvdmVycmlkZUFjY2VzcyIsInBvbGljaWVzIiwiY29sbGVjdGlvbnMiLCJnbG9iYWxzIiwicmVxIiwidmVyc2lvbkZpZWxkcyIsIndoZXJlIiwiZmllbGRzIiwiZmxhdHRlbkZpZWxkcyIsIndoZXJlRmllbGRzIiwicHJvbWlzZXMiLCJtYXAiLCJjb25zdHJhaW50Iiwia2V5cyIsInBhdGgiLCJvcGVyYXRvciIsInZhbGlkT3BlcmF0b3JzIiwiaW5jbHVkZXMiLCJwdXNoIiwidmFsaWRhdGVTZWFyY2hQYXJhbSIsImRlZXBDb3B5T2JqZWN0IiwiUHJvbWlzZSIsImFsbCIsImxlbmd0aCIsIlF1ZXJ5RXJyb3IiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUEsdUNBQXVDOzs7OytCQTZDakJBOzs7ZUFBQUE7OzttRUFyQ0M7MkJBQ1E7Z0NBQ0E7OEVBQ0w7c0NBQ1U7Ozs7OztBQW9CcEMsTUFBTUMsZUFBZSxDQUFDQyxRQUNwQkMsT0FBT0MsT0FBTyxDQUFDRixPQUFPRyxNQUFNLENBQUMsQ0FBQ0Msc0JBQXNCLENBQUNDLEtBQUtDLElBQUk7UUFDNUQsSUFBSSxBQUFDRCxDQUFBQSxRQUFRLFNBQVNBLFFBQVEsSUFBRyxLQUFNRSxNQUFNQyxPQUFPLENBQUNGLE1BQU07WUFDekQsTUFBTUcsc0JBQStCSCxJQUFJSCxNQUFNLENBQUMsQ0FBQ08sS0FBS0M7Z0JBQ3BELE1BQU1DLFdBQVdiLGFBQWFZO2dCQUM5QixPQUFPO3VCQUFJRDt1QkFBUUU7aUJBQVM7WUFDOUIsR0FBRyxFQUFFO1lBQ0wsT0FBTzttQkFBSVI7bUJBQXlCSzthQUFvQjtRQUMxRDtRQUVBLE9BQU87ZUFBSUw7WUFBc0I7Z0JBQUUsQ0FBQ0MsSUFBSSxFQUFFQztZQUFJO1NBQUU7SUFDbEQsR0FBRyxFQUFFO0FBRUEsZUFBZVIsbUJBQW1CLEVBQ3ZDZSxnQkFBZ0IsRUFDaEJDLFNBQVMsRUFBRSxFQUNYQyxZQUFZLEVBQ1pDLGNBQWMsRUFDZEMsV0FBVztJQUNUQyxhQUFhLENBQUM7SUFDZEMsU0FBUyxDQUFDO0FBQ1osQ0FBQyxFQUNEQyxHQUFHLEVBQ0hDLGFBQWEsRUFDYkMsS0FBSyxFQUNBO0lBQ0wsTUFBTUMsU0FBU0MsSUFBQUEsOEJBQWEsRUFDMUJILGlCQUFpQixBQUFDTixDQUFBQSxnQkFBZ0JGLGdCQUFlLEVBQUdVLE1BQU07SUFFNUQsSUFBSSxPQUFPRCxVQUFVLFVBQVU7UUFDN0IsTUFBTUcsY0FBYzFCLGFBQWF1QjtRQUNqQyx1RUFBdUU7UUFDdkUsTUFBTUksV0FBVyxFQUFFO1FBQ25CRCxZQUFZRSxHQUFHLENBQUMsT0FBT0M7WUFDckIzQixPQUFPNEIsSUFBSSxDQUFDRCxZQUFZRCxHQUFHLENBQUMsT0FBT0c7Z0JBQ2pDN0IsT0FBT0MsT0FBTyxDQUFDMEIsVUFBVSxDQUFDRSxLQUFLLEVBQUVILEdBQUcsQ0FBQyxPQUFPLENBQUNJLFVBQVV6QixJQUFJO29CQUN6RCxJQUFJMEIseUJBQWMsQ0FBQ0MsUUFBUSxDQUFDRixXQUF1Qjt3QkFDakRMLFNBQVNRLElBQUksQ0FDWEMsSUFBQUEseUNBQW1CLEVBQUM7NEJBQ2xCdEIsa0JBQWtCdUIsSUFBQUEsOEJBQWMsRUFBQ3ZCOzRCQUNqQ0M7NEJBQ0FTLFFBQVFBOzRCQUNSUixjQUFjcUIsSUFBQUEsOEJBQWMsRUFBQ3JCOzRCQUM3QmdCOzRCQUNBZjs0QkFDQWM7NEJBQ0FiOzRCQUNBRzs0QkFDQWQ7NEJBQ0FlO3dCQUNGO29CQUVKO2dCQUNGO1lBQ0Y7UUFDRjtRQUNBLE1BQU1nQixRQUFRQyxHQUFHLENBQUNaO1FBQ2xCLElBQUlaLE9BQU95QixNQUFNLEdBQUcsR0FBRztZQUNyQixNQUFNLElBQUlDLG1CQUFVLENBQUMxQjtRQUN2QjtJQUNGO0FBQ0YifQ==