"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "buildVersionGlobalFields", {
    enumerable: true,
    get: function() {
        return buildVersionGlobalFields;
    }
});
const buildVersionGlobalFields = (global)=>{
    const fields = [
        {
            name: 'version',
            fields: global.fields,
            type: 'group'
        },
        {
            name: 'createdAt',
            admin: {
                disabled: true
            },
            type: 'date'
        },
        {
            name: 'updatedAt',
            admin: {
                disabled: true
            },
            type: 'date'
        }
    ];
    if (global?.versions?.drafts) {
        fields.push({
            name: 'latest',
            admin: {
                disabled: true
            },
            index: true,
            type: 'checkbox'
        });
    }
    if (global?.versions?.drafts && global?.versions?.drafts?.autosave) {
        fields.push({
            name: 'autosave',
            index: true,
            type: 'checkbox'
        });
    }
    return fields;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJzaW9ucy9idWlsZEdsb2JhbEZpZWxkcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vZ2xvYmFscy9jb25maWcvdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBidWlsZFZlcnNpb25HbG9iYWxGaWVsZHMgPSAoZ2xvYmFsOiBTYW5pdGl6ZWRHbG9iYWxDb25maWcpOiBGaWVsZFtdID0+IHtcbiAgY29uc3QgZmllbGRzOiBGaWVsZFtdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICd2ZXJzaW9uJyxcbiAgICAgIGZpZWxkczogZ2xvYmFsLmZpZWxkcyxcbiAgICAgIHR5cGU6ICdncm91cCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnY3JlYXRlZEF0JyxcbiAgICAgIGFkbWluOiB7XG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICd1cGRhdGVkQXQnLFxuICAgICAgYWRtaW46IHtcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgdHlwZTogJ2RhdGUnLFxuICAgIH0sXG4gIF1cblxuICBpZiAoZ2xvYmFsPy52ZXJzaW9ucz8uZHJhZnRzKSB7XG4gICAgZmllbGRzLnB1c2goe1xuICAgICAgbmFtZTogJ2xhdGVzdCcsXG4gICAgICBhZG1pbjoge1xuICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgfSlcbiAgfVxuXG4gIGlmIChnbG9iYWw/LnZlcnNpb25zPy5kcmFmdHMgJiYgZ2xvYmFsPy52ZXJzaW9ucz8uZHJhZnRzPy5hdXRvc2F2ZSkge1xuICAgIGZpZWxkcy5wdXNoKHtcbiAgICAgIG5hbWU6ICdhdXRvc2F2ZScsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBmaWVsZHNcbn1cbiJdLCJuYW1lcyI6WyJidWlsZFZlcnNpb25HbG9iYWxGaWVsZHMiLCJnbG9iYWwiLCJmaWVsZHMiLCJuYW1lIiwidHlwZSIsImFkbWluIiwiZGlzYWJsZWQiLCJ2ZXJzaW9ucyIsImRyYWZ0cyIsInB1c2giLCJpbmRleCIsImF1dG9zYXZlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQUdhQTs7O2VBQUFBOzs7QUFBTixNQUFNQSwyQkFBMkIsQ0FBQ0M7SUFDdkMsTUFBTUMsU0FBa0I7UUFDdEI7WUFDRUMsTUFBTTtZQUNORCxRQUFRRCxPQUFPQyxNQUFNO1lBQ3JCRSxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxNQUFNO1lBQ05FLE9BQU87Z0JBQ0xDLFVBQVU7WUFDWjtZQUNBRixNQUFNO1FBQ1I7UUFDQTtZQUNFRCxNQUFNO1lBQ05FLE9BQU87Z0JBQ0xDLFVBQVU7WUFDWjtZQUNBRixNQUFNO1FBQ1I7S0FDRDtJQUVELElBQUlILFFBQVFNLFVBQVVDLFFBQVE7UUFDNUJOLE9BQU9PLElBQUksQ0FBQztZQUNWTixNQUFNO1lBQ05FLE9BQU87Z0JBQ0xDLFVBQVU7WUFDWjtZQUNBSSxPQUFPO1lBQ1BOLE1BQU07UUFDUjtJQUNGO0lBRUEsSUFBSUgsUUFBUU0sVUFBVUMsVUFBVVAsUUFBUU0sVUFBVUMsUUFBUUcsVUFBVTtRQUNsRVQsT0FBT08sSUFBSSxDQUFDO1lBQ1ZOLE1BQU07WUFDTk8sT0FBTztZQUNQTixNQUFNO1FBQ1I7SUFDRjtJQUVBLE9BQU9GO0FBQ1QifQ==