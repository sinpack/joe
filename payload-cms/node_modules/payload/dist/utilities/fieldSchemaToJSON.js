"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "fieldSchemaToJSON", {
    enumerable: true,
    get: function() {
        return fieldSchemaToJSON;
    }
});
const fieldSchemaToJSON = (fields)=>{
    return fields.reduce((acc, field)=>{
        let result = acc;
        switch(field.type){
            case 'group':
                acc.push({
                    name: field.name,
                    fields: fieldSchemaToJSON(field.fields),
                    type: field.type
                });
                break;
            case 'array':
                acc.push({
                    name: field.name,
                    fields: fieldSchemaToJSON([
                        ...field.fields,
                        {
                            name: 'id',
                            type: 'text'
                        }
                    ]),
                    type: field.type
                });
                break;
            case 'blocks':
                acc.push({
                    name: field.name,
                    blocks: field.blocks.reduce((acc, block)=>{
                        acc[block.slug] = {
                            fields: fieldSchemaToJSON([
                                ...block.fields,
                                {
                                    name: 'id',
                                    type: 'text'
                                }
                            ])
                        };
                        return acc;
                    }, {}),
                    type: field.type
                });
                break;
            case 'row':
            case 'collapsible':
                result = result.concat(fieldSchemaToJSON(field.fields));
                break;
            case 'tabs':
                {
                    let tabFields = [];
                    field.tabs.forEach((tab)=>{
                        if ('name' in tab) {
                            tabFields.push({
                                name: tab.name,
                                fields: fieldSchemaToJSON(tab.fields),
                                type: field.type
                            });
                            return;
                        }
                        tabFields = tabFields.concat(fieldSchemaToJSON(tab.fields));
                    });
                    result = result.concat(tabFields);
                    break;
                }
            case 'relationship':
            case 'upload':
                acc.push({
                    name: field.name,
                    hasMany: 'hasMany' in field ? Boolean(field.hasMany) : false,
                    relationTo: field.relationTo,
                    type: field.type
                });
                break;
            default:
                if ('name' in field) {
                    acc.push({
                        name: field.name,
                        type: field.type
                    });
                }
        }
        return result;
    }, []);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZmllbGRTY2hlbWFUb0pTT04udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBGaWVsZFR5cGVzIH0gZnJvbSAnLi4vZXhwb3J0cy9jb25maWcnXG5pbXBvcnQgdHlwZSB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcydcblxuZXhwb3J0IHR5cGUgRmllbGRTY2hlbWFKU09OID0ge1xuICBibG9ja3M/OiBGaWVsZFNjaGVtYUpTT04gLy8gVE9ETzogY29uZGl0aW9uYWxseSBhZGQgYmFzZWQgb24gYHR5cGVgXG4gIGZpZWxkcz86IEZpZWxkU2NoZW1hSlNPTiAvLyBUT0RPOiBjb25kaXRpb25hbGx5IGFkZCBiYXNlZCBvbiBgdHlwZWBcbiAgaGFzTWFueT86IGJvb2xlYW4gLy8gVE9ETzogY29uZGl0aW9uYWxseSBhZGQgYmFzZWQgb24gYHR5cGVgXG4gIG5hbWU6IHN0cmluZ1xuICByZWxhdGlvblRvPzogc3RyaW5nIC8vIFRPRE86IGNvbmRpdGlvbmFsbHkgYWRkIGJhc2VkIG9uIGB0eXBlYFxuICBzbHVnPzogc3RyaW5nIC8vIFRPRE86IGNvbmRpdGlvbmFsbHkgYWRkIGJhc2VkIG9uIGB0eXBlYFxuICB0eXBlOiBrZXlvZiBGaWVsZFR5cGVzXG59W11cblxuZXhwb3J0IGNvbnN0IGZpZWxkU2NoZW1hVG9KU09OID0gKGZpZWxkczogRmllbGRbXSk6IEZpZWxkU2NoZW1hSlNPTiA9PiB7XG4gIHJldHVybiBmaWVsZHMucmVkdWNlKChhY2MsIGZpZWxkKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IGFjY1xuXG4gICAgc3dpdGNoIChmaWVsZC50eXBlKSB7XG4gICAgICBjYXNlICdncm91cCc6XG4gICAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBmaWVsZC5uYW1lLFxuICAgICAgICAgIGZpZWxkczogZmllbGRTY2hlbWFUb0pTT04oZmllbGQuZmllbGRzKSxcbiAgICAgICAgICB0eXBlOiBmaWVsZC50eXBlLFxuICAgICAgICB9KVxuXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgZmllbGRzOiBmaWVsZFNjaGVtYVRvSlNPTihbXG4gICAgICAgICAgICAuLi5maWVsZC5maWVsZHMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSksXG4gICAgICAgICAgdHlwZTogZmllbGQudHlwZSxcbiAgICAgICAgfSlcblxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdibG9ja3MnOlxuICAgICAgICBhY2MucHVzaCh7XG4gICAgICAgICAgbmFtZTogZmllbGQubmFtZSxcbiAgICAgICAgICBibG9ja3M6IGZpZWxkLmJsb2Nrcy5yZWR1Y2UoKGFjYywgYmxvY2spID0+IHtcbiAgICAgICAgICAgIGFjY1tibG9jay5zbHVnXSA9IHtcbiAgICAgICAgICAgICAgZmllbGRzOiBmaWVsZFNjaGVtYVRvSlNPTihbXG4gICAgICAgICAgICAgICAgLi4uYmxvY2suZmllbGRzLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgICB9LCB7fSksXG4gICAgICAgICAgdHlwZTogZmllbGQudHlwZSxcbiAgICAgICAgfSlcblxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdyb3cnOlxuICAgICAgY2FzZSAnY29sbGFwc2libGUnOlxuICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGZpZWxkU2NoZW1hVG9KU09OKGZpZWxkLmZpZWxkcykpXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ3RhYnMnOiB7XG4gICAgICAgIGxldCB0YWJGaWVsZHMgPSBbXVxuXG4gICAgICAgIGZpZWxkLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgICAgaWYgKCduYW1lJyBpbiB0YWIpIHtcbiAgICAgICAgICAgIHRhYkZpZWxkcy5wdXNoKHtcbiAgICAgICAgICAgICAgbmFtZTogdGFiLm5hbWUsXG4gICAgICAgICAgICAgIGZpZWxkczogZmllbGRTY2hlbWFUb0pTT04odGFiLmZpZWxkcyksXG4gICAgICAgICAgICAgIHR5cGU6IGZpZWxkLnR5cGUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGFiRmllbGRzID0gdGFiRmllbGRzLmNvbmNhdChmaWVsZFNjaGVtYVRvSlNPTih0YWIuZmllbGRzKSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHRhYkZpZWxkcylcblxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlICdyZWxhdGlvbnNoaXAnOlxuICAgICAgY2FzZSAndXBsb2FkJzpcbiAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgaGFzTWFueTogJ2hhc01hbnknIGluIGZpZWxkID8gQm9vbGVhbihmaWVsZC5oYXNNYW55KSA6IGZhbHNlLCAvLyBUT0RPOiB0eXBlIHRoaXNcbiAgICAgICAgICByZWxhdGlvblRvOiBmaWVsZC5yZWxhdGlvblRvLFxuICAgICAgICAgIHR5cGU6IGZpZWxkLnR5cGUsXG4gICAgICAgIH0pXG5cbiAgICAgICAgYnJlYWtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKCduYW1lJyBpbiBmaWVsZCkge1xuICAgICAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgICB0eXBlOiBmaWVsZC50eXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sIFtdKVxufVxuIl0sIm5hbWVzIjpbImZpZWxkU2NoZW1hVG9KU09OIiwiZmllbGRzIiwicmVkdWNlIiwiYWNjIiwiZmllbGQiLCJyZXN1bHQiLCJ0eXBlIiwicHVzaCIsIm5hbWUiLCJibG9ja3MiLCJibG9jayIsInNsdWciLCJjb25jYXQiLCJ0YWJGaWVsZHMiLCJ0YWJzIiwiZm9yRWFjaCIsInRhYiIsImhhc01hbnkiLCJCb29sZWFuIiwicmVsYXRpb25UbyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFhYUE7OztlQUFBQTs7O0FBQU4sTUFBTUEsb0JBQW9CLENBQUNDO0lBQ2hDLE9BQU9BLE9BQU9DLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQztRQUN6QixJQUFJQyxTQUFTRjtRQUViLE9BQVFDLE1BQU1FLElBQUk7WUFDaEIsS0FBSztnQkFDSEgsSUFBSUksSUFBSSxDQUFDO29CQUNQQyxNQUFNSixNQUFNSSxJQUFJO29CQUNoQlAsUUFBUUQsa0JBQWtCSSxNQUFNSCxNQUFNO29CQUN0Q0ssTUFBTUYsTUFBTUUsSUFBSTtnQkFDbEI7Z0JBRUE7WUFFRixLQUFLO2dCQUNISCxJQUFJSSxJQUFJLENBQUM7b0JBQ1BDLE1BQU1KLE1BQU1JLElBQUk7b0JBQ2hCUCxRQUFRRCxrQkFBa0I7MkJBQ3JCSSxNQUFNSCxNQUFNO3dCQUNmOzRCQUNFTyxNQUFNOzRCQUNORixNQUFNO3dCQUNSO3FCQUNEO29CQUNEQSxNQUFNRixNQUFNRSxJQUFJO2dCQUNsQjtnQkFFQTtZQUVGLEtBQUs7Z0JBQ0hILElBQUlJLElBQUksQ0FBQztvQkFDUEMsTUFBTUosTUFBTUksSUFBSTtvQkFDaEJDLFFBQVFMLE1BQU1LLE1BQU0sQ0FBQ1AsTUFBTSxDQUFDLENBQUNDLEtBQUtPO3dCQUNoQ1AsR0FBRyxDQUFDTyxNQUFNQyxJQUFJLENBQUMsR0FBRzs0QkFDaEJWLFFBQVFELGtCQUFrQjttQ0FDckJVLE1BQU1ULE1BQU07Z0NBQ2Y7b0NBQ0VPLE1BQU07b0NBQ05GLE1BQU07Z0NBQ1I7NkJBQ0Q7d0JBQ0g7d0JBRUEsT0FBT0g7b0JBQ1QsR0FBRyxDQUFDO29CQUNKRyxNQUFNRixNQUFNRSxJQUFJO2dCQUNsQjtnQkFFQTtZQUVGLEtBQUs7WUFDTCxLQUFLO2dCQUNIRCxTQUFTQSxPQUFPTyxNQUFNLENBQUNaLGtCQUFrQkksTUFBTUgsTUFBTTtnQkFDckQ7WUFFRixLQUFLO2dCQUFRO29CQUNYLElBQUlZLFlBQVksRUFBRTtvQkFFbEJULE1BQU1VLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUNDO3dCQUNsQixJQUFJLFVBQVVBLEtBQUs7NEJBQ2pCSCxVQUFVTixJQUFJLENBQUM7Z0NBQ2JDLE1BQU1RLElBQUlSLElBQUk7Z0NBQ2RQLFFBQVFELGtCQUFrQmdCLElBQUlmLE1BQU07Z0NBQ3BDSyxNQUFNRixNQUFNRSxJQUFJOzRCQUNsQjs0QkFDQTt3QkFDRjt3QkFFQU8sWUFBWUEsVUFBVUQsTUFBTSxDQUFDWixrQkFBa0JnQixJQUFJZixNQUFNO29CQUMzRDtvQkFFQUksU0FBU0EsT0FBT08sTUFBTSxDQUFDQztvQkFFdkI7Z0JBQ0Y7WUFFQSxLQUFLO1lBQ0wsS0FBSztnQkFDSFYsSUFBSUksSUFBSSxDQUFDO29CQUNQQyxNQUFNSixNQUFNSSxJQUFJO29CQUNoQlMsU0FBUyxhQUFhYixRQUFRYyxRQUFRZCxNQUFNYSxPQUFPLElBQUk7b0JBQ3ZERSxZQUFZZixNQUFNZSxVQUFVO29CQUM1QmIsTUFBTUYsTUFBTUUsSUFBSTtnQkFDbEI7Z0JBRUE7WUFFRjtnQkFDRSxJQUFJLFVBQVVGLE9BQU87b0JBQ25CRCxJQUFJSSxJQUFJLENBQUM7d0JBQ1BDLE1BQU1KLE1BQU1JLElBQUk7d0JBQ2hCRixNQUFNRixNQUFNRSxJQUFJO29CQUNsQjtnQkFDRjtRQUNKO1FBRUEsT0FBT0Q7SUFDVCxHQUFHLEVBQUU7QUFDUCJ9