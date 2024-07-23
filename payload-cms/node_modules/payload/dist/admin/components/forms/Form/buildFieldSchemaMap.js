"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "buildFieldSchemaMap", {
    enumerable: true,
    get: function() {
        return buildFieldSchemaMap;
    }
});
const _createNestedFieldPath = require("./createNestedFieldPath");
const buildFieldSchemaMap = (entityFields)=>{
    const fieldMap = new Map();
    const buildUpMap = (fields, parentPath = '')=>{
        fields.forEach((field)=>{
            const path = (0, _createNestedFieldPath.createNestedFieldPath)(parentPath, field);
            switch(field.type){
                case 'blocks':
                    field.blocks.forEach((block)=>{
                        const blockPath = `${path}.${block.slug}`;
                        fieldMap.set(blockPath, block.fields);
                        buildUpMap(block.fields, blockPath);
                    });
                    break;
                case 'array':
                    fieldMap.set(path, field.fields);
                    buildUpMap(field.fields, path);
                    break;
                case 'row':
                case 'collapsible':
                case 'group':
                    buildUpMap(field.fields, path);
                    break;
                case 'tabs':
                    field.tabs.forEach((tab)=>{
                        let tabPath = path;
                        if (tabPath) {
                            tabPath = 'name' in tab ? `${tabPath}.${tab.name}` : tabPath;
                        } else {
                            tabPath = 'name' in tab ? `${tab.name}` : tabPath;
                        }
                        buildUpMap(tab.fields, tabPath);
                    });
                    break;
                default:
                    break;
            }
        });
    };
    buildUpMap(entityFields);
    return fieldMap;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vYnVpbGRGaWVsZFNjaGVtYU1hcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcydcblxuaW1wb3J0IHsgY3JlYXRlTmVzdGVkRmllbGRQYXRoIH0gZnJvbSAnLi9jcmVhdGVOZXN0ZWRGaWVsZFBhdGgnXG5cbi8qKlxuICogKipSZXR1cm5zIE1hcCB3aXRoIGFycmF5IGFuZCBibG9jayBmaWVsZCBzY2hlbWFzKipcbiAqIC0gVGFrZXMgZW50aXR5IGZpZWxkcyBhbmQgcmV0dXJucyBhIE1hcCB0byByZXRyaWV2ZSBmaWVsZCBzY2hlbWFzIGJ5IHBhdGggd2l0aG91dCBpbmRleGVzXG4gKlxuICogKipBY2Nlc3NpbmcgZmllbGQgc2NoZW1hcyoqXG4gKiAtIGFycmF5IGZpZWxkczogaW5kZXhlcyBtdXN0IGJlIHJlbW92ZWQgZnJvbSBwYXRoIGkuZS4gYGFycmF5LmlubmVyQXJyYXlgIGluc3RlYWQgb2YgYGFycmF5LjAuaW5uZXJBcnJheWBcbiAqIC0gYmxvY2sgZmllbGRzOiB0aGUgYmxvY2sgc2x1ZyBtdXN0IGJlIGFwcGVuZGVkIHRvIHRoZSBwYXRoIGBibG9ja3NGaWVsZE5hbWUuYmxvY2tTbHVnYCBpbnN0ZWFkIG9mIGBibG9ja3NGaWVsZE5hbWVgXG4gKlxuICogQHBhcmFtIGVudGl0eUZpZWxkc1xuICogQHJldHVybnMgTWFwPHN0cmluZywgRmllbGRbXT5cbiAqL1xuZXhwb3J0IGNvbnN0IGJ1aWxkRmllbGRTY2hlbWFNYXAgPSAoZW50aXR5RmllbGRzOiBGaWVsZFtdKTogTWFwPHN0cmluZywgRmllbGRbXT4gPT4ge1xuICBjb25zdCBmaWVsZE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBGaWVsZFtdPigpXG5cbiAgY29uc3QgYnVpbGRVcE1hcCA9IChmaWVsZHM6IEZpZWxkW10sIHBhcmVudFBhdGggPSAnJykgPT4ge1xuICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgY29uc3QgcGF0aCA9IGNyZWF0ZU5lc3RlZEZpZWxkUGF0aChwYXJlbnRQYXRoLCBmaWVsZClcblxuICAgICAgc3dpdGNoIChmaWVsZC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jsb2Nrcyc6XG4gICAgICAgICAgZmllbGQuYmxvY2tzLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBibG9ja1BhdGggPSBgJHtwYXRofS4ke2Jsb2NrLnNsdWd9YFxuICAgICAgICAgICAgZmllbGRNYXAuc2V0KGJsb2NrUGF0aCwgYmxvY2suZmllbGRzKVxuICAgICAgICAgICAgYnVpbGRVcE1hcChibG9jay5maWVsZHMsIGJsb2NrUGF0aClcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgIGZpZWxkTWFwLnNldChwYXRoLCBmaWVsZC5maWVsZHMpXG4gICAgICAgICAgYnVpbGRVcE1hcChmaWVsZC5maWVsZHMsIHBhdGgpXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdyb3cnOlxuICAgICAgICBjYXNlICdjb2xsYXBzaWJsZSc6XG4gICAgICAgIGNhc2UgJ2dyb3VwJzpcbiAgICAgICAgICBidWlsZFVwTWFwKGZpZWxkLmZpZWxkcywgcGF0aClcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ3RhYnMnOlxuICAgICAgICAgIGZpZWxkLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGFiUGF0aCA9IHBhdGhcbiAgICAgICAgICAgIGlmICh0YWJQYXRoKSB7XG4gICAgICAgICAgICAgIHRhYlBhdGggPSAnbmFtZScgaW4gdGFiID8gYCR7dGFiUGF0aH0uJHt0YWIubmFtZX1gIDogdGFiUGF0aFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFiUGF0aCA9ICduYW1lJyBpbiB0YWIgPyBgJHt0YWIubmFtZX1gIDogdGFiUGF0aFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnVpbGRVcE1hcCh0YWIuZmllbGRzLCB0YWJQYXRoKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJ1aWxkVXBNYXAoZW50aXR5RmllbGRzKVxuXG4gIHJldHVybiBmaWVsZE1hcFxufVxuIl0sIm5hbWVzIjpbImJ1aWxkRmllbGRTY2hlbWFNYXAiLCJlbnRpdHlGaWVsZHMiLCJmaWVsZE1hcCIsIk1hcCIsImJ1aWxkVXBNYXAiLCJmaWVsZHMiLCJwYXJlbnRQYXRoIiwiZm9yRWFjaCIsImZpZWxkIiwicGF0aCIsImNyZWF0ZU5lc3RlZEZpZWxkUGF0aCIsInR5cGUiLCJibG9ja3MiLCJibG9jayIsImJsb2NrUGF0aCIsInNsdWciLCJzZXQiLCJ0YWJzIiwidGFiIiwidGFiUGF0aCIsIm5hbWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWVhQTs7O2VBQUFBOzs7dUNBYnlCO0FBYS9CLE1BQU1BLHNCQUFzQixDQUFDQztJQUNsQyxNQUFNQyxXQUFXLElBQUlDO0lBRXJCLE1BQU1DLGFBQWEsQ0FBQ0MsUUFBaUJDLGFBQWEsRUFBRTtRQUNsREQsT0FBT0UsT0FBTyxDQUFDLENBQUNDO1lBQ2QsTUFBTUMsT0FBT0MsSUFBQUEsNENBQXFCLEVBQUNKLFlBQVlFO1lBRS9DLE9BQVFBLE1BQU1HLElBQUk7Z0JBQ2hCLEtBQUs7b0JBQ0hILE1BQU1JLE1BQU0sQ0FBQ0wsT0FBTyxDQUFDLENBQUNNO3dCQUNwQixNQUFNQyxZQUFZLENBQUMsRUFBRUwsS0FBSyxDQUFDLEVBQUVJLE1BQU1FLElBQUksQ0FBQyxDQUFDO3dCQUN6Q2IsU0FBU2MsR0FBRyxDQUFDRixXQUFXRCxNQUFNUixNQUFNO3dCQUNwQ0QsV0FBV1MsTUFBTVIsTUFBTSxFQUFFUztvQkFDM0I7b0JBQ0E7Z0JBRUYsS0FBSztvQkFDSFosU0FBU2MsR0FBRyxDQUFDUCxNQUFNRCxNQUFNSCxNQUFNO29CQUMvQkQsV0FBV0ksTUFBTUgsTUFBTSxFQUFFSTtvQkFDekI7Z0JBRUYsS0FBSztnQkFDTCxLQUFLO2dCQUNMLEtBQUs7b0JBQ0hMLFdBQVdJLE1BQU1ILE1BQU0sRUFBRUk7b0JBQ3pCO2dCQUVGLEtBQUs7b0JBQ0hELE1BQU1TLElBQUksQ0FBQ1YsT0FBTyxDQUFDLENBQUNXO3dCQUNsQixJQUFJQyxVQUFVVjt3QkFDZCxJQUFJVSxTQUFTOzRCQUNYQSxVQUFVLFVBQVVELE1BQU0sQ0FBQyxFQUFFQyxRQUFRLENBQUMsRUFBRUQsSUFBSUUsSUFBSSxDQUFDLENBQUMsR0FBR0Q7d0JBQ3ZELE9BQU87NEJBQ0xBLFVBQVUsVUFBVUQsTUFBTSxDQUFDLEVBQUVBLElBQUlFLElBQUksQ0FBQyxDQUFDLEdBQUdEO3dCQUM1Qzt3QkFDQWYsV0FBV2MsSUFBSWIsTUFBTSxFQUFFYztvQkFDekI7b0JBQ0E7Z0JBRUY7b0JBQ0U7WUFDSjtRQUNGO0lBQ0Y7SUFFQWYsV0FBV0g7SUFFWCxPQUFPQztBQUNUIn0=