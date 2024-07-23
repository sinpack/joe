"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    TableColumnContext: function() {
        return TableColumnContext;
    },
    TableColumnsProvider: function() {
        return TableColumnsProvider;
    },
    useTableColumns: function() {
        return useTableColumns;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _types = require("../../../../fields/config/types");
const _Preferences = require("../../utilities/Preferences");
const _formatFields = /*#__PURE__*/ _interop_require_default(require("../../views/collections/List/formatFields"));
const _buildColumns = /*#__PURE__*/ _interop_require_default(require("./buildColumns"));
const _columnReducer = require("./columnReducer");
const _getInitialColumns = /*#__PURE__*/ _interop_require_default(require("./getInitialColumns"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const TableColumnContext = /*#__PURE__*/ (0, _react.createContext)({});
const useTableColumns = ()=>(0, _react.useContext)(TableColumnContext);
const filterTableFields = (fields)=>{
    return fields.reduce((acc, field)=>{
        if ((0, _types.fieldHasSubFields)(field)) {
            field = {
                ...field,
                fields: filterTableFields(field.fields)
            };
        }
        if (!field.admin?.disableListColumn) acc.push(field);
        return acc;
    }, []);
};
const TableColumnsProvider = ({ cellProps, children, collection: { admin: { defaultColumns, useAsTitle } }, collection })=>{
    const preferenceKey = `${collection.slug}-list`;
    const prevCollection = (0, _react.useRef)();
    const hasInitialized = (0, _react.useRef)(false);
    const { getPreference, setPreference } = (0, _Preferences.usePreferences)();
    const [formattedFields] = (0, _react.useState)(()=>(0, _formatFields.default)(collection));
    const filteredFields = filterTableFields(formattedFields);
    const [tableColumns, dispatchTableColumns] = (0, _react.useReducer)(_columnReducer.columnReducer, {}, ()=>{
        const initialColumns = (0, _getInitialColumns.default)(filteredFields, useAsTitle, defaultColumns);
        return (0, _buildColumns.default)({
            cellProps,
            collection,
            columns: initialColumns.map((column)=>({
                    accessor: column,
                    active: true
                }))
        });
    });
    // /////////////////////////////////////
    // Sync preferences on collection change
    // /////////////////////////////////////
    (0, _react.useEffect)(()=>{
        const sync = async ()=>{
            const collectionHasChanged = prevCollection.current !== collection.slug;
            if (collectionHasChanged) {
                hasInitialized.current = false;
                const currentPreferences = await getPreference(preferenceKey);
                prevCollection.current = collection.slug;
                const initialColumns = (0, _getInitialColumns.default)(filteredFields, useAsTitle, defaultColumns);
                const newCols = currentPreferences?.columns || initialColumns;
                dispatchTableColumns({
                    type: 'set',
                    payload: {
                        cellProps,
                        collection: {
                            ...collection,
                            fields: filteredFields
                        },
                        columns: newCols.map((column)=>{
                            // 'string' is for backwards compatibility
                            // the preference used to be stored as an array of strings
                            if (typeof column === 'string') {
                                return {
                                    accessor: column,
                                    active: true
                                };
                            }
                            return column;
                        })
                    }
                });
                hasInitialized.current = true;
            }
        };
        void sync();
    }, [
        preferenceKey,
        setPreference,
        tableColumns,
        getPreference,
        useAsTitle,
        defaultColumns,
        collection,
        cellProps,
        filteredFields
    ]);
    // /////////////////////////////////////
    // Set preferences on column change
    // /////////////////////////////////////
    (0, _react.useEffect)(()=>{
        if (!hasInitialized.current) return;
        const columns = tableColumns.map((c)=>({
                accessor: c.accessor,
                active: c.active
            }));
        void setPreference(preferenceKey, {
            columns
        }, true);
    }, [
        tableColumns,
        preferenceKey,
        setPreference,
        getPreference
    ]);
    const setActiveColumns = (0, _react.useCallback)((columns)=>{
        dispatchTableColumns({
            type: 'set',
            payload: {
                // onSelect,
                cellProps,
                collection: {
                    ...collection,
                    fields: (0, _formatFields.default)(collection)
                },
                columns: columns.map((column)=>({
                        accessor: column,
                        active: true
                    }))
            }
        });
    }, [
        collection,
        cellProps
    ]);
    const moveColumn = (0, _react.useCallback)((args)=>{
        const { fromIndex, toIndex } = args;
        dispatchTableColumns({
            type: 'move',
            payload: {
                cellProps,
                collection: {
                    ...collection,
                    fields: (0, _formatFields.default)(collection)
                },
                fromIndex,
                toIndex
            }
        });
    }, [
        collection,
        cellProps
    ]);
    const toggleColumn = (0, _react.useCallback)((column)=>{
        dispatchTableColumns({
            type: 'toggle',
            payload: {
                cellProps,
                collection: {
                    ...collection,
                    fields: (0, _formatFields.default)(collection)
                },
                column
            }
        });
    }, [
        collection,
        cellProps
    ]);
    return /*#__PURE__*/ _react.default.createElement(TableColumnContext.Provider, {
        value: {
            columns: tableColumns,
            dispatchTableColumns,
            moveColumn,
            setActiveColumns,
            toggleColumn
        }
    }, children);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1RhYmxlQ29sdW1ucy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3QsXG4gIHVzZVJlZHVjZXIsXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFByb3BzIGFzIENlbGxQcm9wcyB9IGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC90eXBlcydcbmltcG9ydCB0eXBlIHsgTGlzdFByZWZlcmVuY2VzIH0gZnJvbSAnLi4vLi4vdmlld3MvY29sbGVjdGlvbnMvTGlzdC90eXBlcydcbmltcG9ydCB0eXBlIHsgQ29sdW1uIH0gZnJvbSAnLi4vVGFibGUvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IEFjdGlvbiB9IGZyb20gJy4vY29sdW1uUmVkdWNlcidcblxuaW1wb3J0IHsgdHlwZSBGaWVsZCwgZmllbGRIYXNTdWJGaWVsZHMgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHsgdXNlUHJlZmVyZW5jZXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvUHJlZmVyZW5jZXMnXG5pbXBvcnQgZm9ybWF0RmllbGRzIGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvZm9ybWF0RmllbGRzJ1xuaW1wb3J0IGJ1aWxkQ29sdW1ucyBmcm9tICcuL2J1aWxkQ29sdW1ucydcbmltcG9ydCB7IGNvbHVtblJlZHVjZXIgfSBmcm9tICcuL2NvbHVtblJlZHVjZXInXG5pbXBvcnQgZ2V0SW5pdGlhbENvbHVtblN0YXRlIGZyb20gJy4vZ2V0SW5pdGlhbENvbHVtbnMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ29sdW1ucyB7XG4gIGNvbHVtbnM6IENvbHVtbltdXG4gIGRpc3BhdGNoVGFibGVDb2x1bW5zOiBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+XG4gIG1vdmVDb2x1bW46IChhcmdzOiB7IGZyb21JbmRleDogbnVtYmVyOyB0b0luZGV4OiBudW1iZXIgfSkgPT4gdm9pZFxuICBzZXRBY3RpdmVDb2x1bW5zOiAoY29sdW1uczogc3RyaW5nW10pID0+IHZvaWRcbiAgdG9nZ2xlQ29sdW1uOiAoY29sdW1uOiBzdHJpbmcpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IFRhYmxlQ29sdW1uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8SVRhYmxlQ29sdW1ucz4oe30gYXMgSVRhYmxlQ29sdW1ucylcblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlQ29sdW1ucyA9ICgpOiBJVGFibGVDb2x1bW5zID0+IHVzZUNvbnRleHQoVGFibGVDb2x1bW5Db250ZXh0KVxuXG5jb25zdCBmaWx0ZXJUYWJsZUZpZWxkcyA9IChmaWVsZHM6IEZpZWxkW10pOiBGaWVsZFtdID0+IHtcbiAgcmV0dXJuIGZpZWxkcy5yZWR1Y2UoKGFjYywgZmllbGQpID0+IHtcbiAgICBpZiAoZmllbGRIYXNTdWJGaWVsZHMoZmllbGQpKSB7XG4gICAgICBmaWVsZCA9IHtcbiAgICAgICAgLi4uZmllbGQsXG4gICAgICAgIGZpZWxkczogZmlsdGVyVGFibGVGaWVsZHMoZmllbGQuZmllbGRzKSxcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmaWVsZC5hZG1pbj8uZGlzYWJsZUxpc3RDb2x1bW4pIGFjYy5wdXNoKGZpZWxkKVxuICAgIHJldHVybiBhY2NcbiAgfSwgW10pXG59XG5cbmV4cG9ydCBjb25zdCBUYWJsZUNvbHVtbnNQcm92aWRlcjogUmVhY3QuRkM8e1xuICBjZWxsUHJvcHM/OiBQYXJ0aWFsPENlbGxQcm9wcz5bXVxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIGNvbGxlY3Rpb246IFNhbml0aXplZENvbGxlY3Rpb25Db25maWdcbn0+ID0gKHtcbiAgY2VsbFByb3BzLFxuICBjaGlsZHJlbixcbiAgY29sbGVjdGlvbjoge1xuICAgIGFkbWluOiB7IGRlZmF1bHRDb2x1bW5zLCB1c2VBc1RpdGxlIH0sXG4gIH0sXG4gIGNvbGxlY3Rpb24sXG59KSA9PiB7XG4gIGNvbnN0IHByZWZlcmVuY2VLZXkgPSBgJHtjb2xsZWN0aW9uLnNsdWd9LWxpc3RgXG4gIGNvbnN0IHByZXZDb2xsZWN0aW9uID0gdXNlUmVmPFNhbml0aXplZENvbGxlY3Rpb25Db25maWdbJ3NsdWcnXT4oKVxuICBjb25zdCBoYXNJbml0aWFsaXplZCA9IHVzZVJlZihmYWxzZSlcbiAgY29uc3QgeyBnZXRQcmVmZXJlbmNlLCBzZXRQcmVmZXJlbmNlIH0gPSB1c2VQcmVmZXJlbmNlcygpXG4gIGNvbnN0IFtmb3JtYXR0ZWRGaWVsZHNdID0gdXNlU3RhdGU8RmllbGRbXT4oKCkgPT4gZm9ybWF0RmllbGRzKGNvbGxlY3Rpb24pKVxuICBjb25zdCBmaWx0ZXJlZEZpZWxkcyA9IGZpbHRlclRhYmxlRmllbGRzKGZvcm1hdHRlZEZpZWxkcylcblxuICBjb25zdCBbdGFibGVDb2x1bW5zLCBkaXNwYXRjaFRhYmxlQ29sdW1uc10gPSB1c2VSZWR1Y2VyKGNvbHVtblJlZHVjZXIsIHt9LCAoKSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbENvbHVtbnMgPSBnZXRJbml0aWFsQ29sdW1uU3RhdGUoZmlsdGVyZWRGaWVsZHMsIHVzZUFzVGl0bGUsIGRlZmF1bHRDb2x1bW5zKVxuXG4gICAgcmV0dXJuIGJ1aWxkQ29sdW1ucyh7XG4gICAgICBjZWxsUHJvcHMsXG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgY29sdW1uczogaW5pdGlhbENvbHVtbnMubWFwKChjb2x1bW4pID0+ICh7XG4gICAgICAgIGFjY2Vzc29yOiBjb2x1bW4sXG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgIH0pKSxcbiAgICB9KVxuICB9KVxuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gU3luYyBwcmVmZXJlbmNlcyBvbiBjb2xsZWN0aW9uIGNoYW5nZVxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzeW5jID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY29sbGVjdGlvbkhhc0NoYW5nZWQgPSBwcmV2Q29sbGVjdGlvbi5jdXJyZW50ICE9PSBjb2xsZWN0aW9uLnNsdWdcblxuICAgICAgaWYgKGNvbGxlY3Rpb25IYXNDaGFuZ2VkKSB7XG4gICAgICAgIGhhc0luaXRpYWxpemVkLmN1cnJlbnQgPSBmYWxzZVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcmVmZXJlbmNlcyA9IGF3YWl0IGdldFByZWZlcmVuY2U8TGlzdFByZWZlcmVuY2VzPihwcmVmZXJlbmNlS2V5KVxuICAgICAgICBwcmV2Q29sbGVjdGlvbi5jdXJyZW50ID0gY29sbGVjdGlvbi5zbHVnXG4gICAgICAgIGNvbnN0IGluaXRpYWxDb2x1bW5zID0gZ2V0SW5pdGlhbENvbHVtblN0YXRlKGZpbHRlcmVkRmllbGRzLCB1c2VBc1RpdGxlLCBkZWZhdWx0Q29sdW1ucylcbiAgICAgICAgY29uc3QgbmV3Q29scyA9IGN1cnJlbnRQcmVmZXJlbmNlcz8uY29sdW1ucyB8fCBpbml0aWFsQ29sdW1uc1xuXG4gICAgICAgIGRpc3BhdGNoVGFibGVDb2x1bW5zKHtcbiAgICAgICAgICB0eXBlOiAnc2V0JyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBjZWxsUHJvcHMsXG4gICAgICAgICAgICBjb2xsZWN0aW9uOiB7IC4uLmNvbGxlY3Rpb24sIGZpZWxkczogZmlsdGVyZWRGaWVsZHMgfSxcbiAgICAgICAgICAgIGNvbHVtbnM6IG5ld0NvbHMubWFwKChjb2x1bW4pID0+IHtcbiAgICAgICAgICAgICAgLy8gJ3N0cmluZycgaXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgICAgICAgICAgIC8vIHRoZSBwcmVmZXJlbmNlIHVzZWQgdG8gYmUgc3RvcmVkIGFzIGFuIGFycmF5IG9mIHN0cmluZ3NcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb2x1bW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIGFjY2Vzc29yOiBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBjb2x1bW5cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG5cbiAgICAgICAgaGFzSW5pdGlhbGl6ZWQuY3VycmVudCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2b2lkIHN5bmMoKVxuICB9LCBbXG4gICAgcHJlZmVyZW5jZUtleSxcbiAgICBzZXRQcmVmZXJlbmNlLFxuICAgIHRhYmxlQ29sdW1ucyxcbiAgICBnZXRQcmVmZXJlbmNlLFxuICAgIHVzZUFzVGl0bGUsXG4gICAgZGVmYXVsdENvbHVtbnMsXG4gICAgY29sbGVjdGlvbixcbiAgICBjZWxsUHJvcHMsXG4gICAgZmlsdGVyZWRGaWVsZHMsXG4gIF0pXG5cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBTZXQgcHJlZmVyZW5jZXMgb24gY29sdW1uIGNoYW5nZVxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0luaXRpYWxpemVkLmN1cnJlbnQpIHJldHVyblxuICAgIGNvbnN0IGNvbHVtbnMgPSB0YWJsZUNvbHVtbnMubWFwKChjKSA9PiAoe1xuICAgICAgYWNjZXNzb3I6IGMuYWNjZXNzb3IsXG4gICAgICBhY3RpdmU6IGMuYWN0aXZlLFxuICAgIH0pKVxuXG4gICAgdm9pZCBzZXRQcmVmZXJlbmNlKHByZWZlcmVuY2VLZXksIHsgY29sdW1ucyB9LCB0cnVlKVxuICB9LCBbdGFibGVDb2x1bW5zLCBwcmVmZXJlbmNlS2V5LCBzZXRQcmVmZXJlbmNlLCBnZXRQcmVmZXJlbmNlXSlcblxuICBjb25zdCBzZXRBY3RpdmVDb2x1bW5zID0gdXNlQ2FsbGJhY2soXG4gICAgKGNvbHVtbnM6IHN0cmluZ1tdKSA9PiB7XG4gICAgICBkaXNwYXRjaFRhYmxlQ29sdW1ucyh7XG4gICAgICAgIHR5cGU6ICdzZXQnLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgLy8gb25TZWxlY3QsXG4gICAgICAgICAgY2VsbFByb3BzLFxuICAgICAgICAgIGNvbGxlY3Rpb246IHsgLi4uY29sbGVjdGlvbiwgZmllbGRzOiBmb3JtYXRGaWVsZHMoY29sbGVjdGlvbikgfSxcbiAgICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoe1xuICAgICAgICAgICAgYWNjZXNzb3I6IGNvbHVtbixcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICB9KSksXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sXG4gICAgW2NvbGxlY3Rpb24sIGNlbGxQcm9wc10sXG4gIClcblxuICBjb25zdCBtb3ZlQ29sdW1uID0gdXNlQ2FsbGJhY2soXG4gICAgKGFyZ3M6IHsgZnJvbUluZGV4OiBudW1iZXI7IHRvSW5kZXg6IG51bWJlciB9KSA9PiB7XG4gICAgICBjb25zdCB7IGZyb21JbmRleCwgdG9JbmRleCB9ID0gYXJnc1xuXG4gICAgICBkaXNwYXRjaFRhYmxlQ29sdW1ucyh7XG4gICAgICAgIHR5cGU6ICdtb3ZlJyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGNlbGxQcm9wcyxcbiAgICAgICAgICBjb2xsZWN0aW9uOiB7IC4uLmNvbGxlY3Rpb24sIGZpZWxkczogZm9ybWF0RmllbGRzKGNvbGxlY3Rpb24pIH0sXG4gICAgICAgICAgZnJvbUluZGV4LFxuICAgICAgICAgIHRvSW5kZXgsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sXG4gICAgW2NvbGxlY3Rpb24sIGNlbGxQcm9wc10sXG4gIClcblxuICBjb25zdCB0b2dnbGVDb2x1bW4gPSB1c2VDYWxsYmFjayhcbiAgICAoY29sdW1uOiBzdHJpbmcpID0+IHtcbiAgICAgIGRpc3BhdGNoVGFibGVDb2x1bW5zKHtcbiAgICAgICAgdHlwZTogJ3RvZ2dsZScsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBjZWxsUHJvcHMsXG4gICAgICAgICAgY29sbGVjdGlvbjogeyAuLi5jb2xsZWN0aW9uLCBmaWVsZHM6IGZvcm1hdEZpZWxkcyhjb2xsZWN0aW9uKSB9LFxuICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSxcbiAgICBbY29sbGVjdGlvbiwgY2VsbFByb3BzXSxcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlQ29sdW1uQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgY29sdW1uczogdGFibGVDb2x1bW5zLFxuICAgICAgICBkaXNwYXRjaFRhYmxlQ29sdW1ucyxcbiAgICAgICAgbW92ZUNvbHVtbixcbiAgICAgICAgc2V0QWN0aXZlQ29sdW1ucyxcbiAgICAgICAgdG9nZ2xlQ29sdW1uLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9UYWJsZUNvbHVtbkNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJUYWJsZUNvbHVtbkNvbnRleHQiLCJUYWJsZUNvbHVtbnNQcm92aWRlciIsInVzZVRhYmxlQ29sdW1ucyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiZmlsdGVyVGFibGVGaWVsZHMiLCJmaWVsZHMiLCJyZWR1Y2UiLCJhY2MiLCJmaWVsZCIsImZpZWxkSGFzU3ViRmllbGRzIiwiYWRtaW4iLCJkaXNhYmxlTGlzdENvbHVtbiIsInB1c2giLCJjZWxsUHJvcHMiLCJjaGlsZHJlbiIsImNvbGxlY3Rpb24iLCJkZWZhdWx0Q29sdW1ucyIsInVzZUFzVGl0bGUiLCJwcmVmZXJlbmNlS2V5Iiwic2x1ZyIsInByZXZDb2xsZWN0aW9uIiwidXNlUmVmIiwiaGFzSW5pdGlhbGl6ZWQiLCJnZXRQcmVmZXJlbmNlIiwic2V0UHJlZmVyZW5jZSIsInVzZVByZWZlcmVuY2VzIiwiZm9ybWF0dGVkRmllbGRzIiwidXNlU3RhdGUiLCJmb3JtYXRGaWVsZHMiLCJmaWx0ZXJlZEZpZWxkcyIsInRhYmxlQ29sdW1ucyIsImRpc3BhdGNoVGFibGVDb2x1bW5zIiwidXNlUmVkdWNlciIsImNvbHVtblJlZHVjZXIiLCJpbml0aWFsQ29sdW1ucyIsImdldEluaXRpYWxDb2x1bW5TdGF0ZSIsImJ1aWxkQ29sdW1ucyIsImNvbHVtbnMiLCJtYXAiLCJjb2x1bW4iLCJhY2Nlc3NvciIsImFjdGl2ZSIsInVzZUVmZmVjdCIsInN5bmMiLCJjb2xsZWN0aW9uSGFzQ2hhbmdlZCIsImN1cnJlbnQiLCJjdXJyZW50UHJlZmVyZW5jZXMiLCJuZXdDb2xzIiwidHlwZSIsInBheWxvYWQiLCJjIiwic2V0QWN0aXZlQ29sdW1ucyIsInVzZUNhbGxiYWNrIiwibW92ZUNvbHVtbiIsImFyZ3MiLCJmcm9tSW5kZXgiLCJ0b0luZGV4IiwidG9nZ2xlQ29sdW1uIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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