"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "buildVersionCollectionFields", {
    enumerable: true,
    get: function() {
        return buildVersionCollectionFields;
    }
});
const buildVersionCollectionFields = (collection)=>{
    const fields = [
        {
            name: 'parent',
            type: 'relationship',
            index: true,
            relationTo: collection.slug
        },
        {
            name: 'version',
            type: 'group',
            fields: collection.fields.filter((field)=>!('name' in field) || field.name !== 'id')
        },
        {
            name: 'createdAt',
            type: 'date',
            admin: {
                disabled: true
            },
            index: true
        },
        {
            name: 'updatedAt',
            type: 'date',
            admin: {
                disabled: true
            },
            index: true
        }
    ];
    if (collection?.versions?.drafts) {
        fields.push({
            name: 'latest',
            type: 'checkbox',
            admin: {
                disabled: true
            },
            index: true
        });
    }
    if (collection?.versions?.drafts && collection?.versions?.drafts?.autosave) {
        fields.push({
            name: 'autosave',
            type: 'checkbox',
            index: true
        });
    }
    return fields;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJzaW9ucy9idWlsZENvbGxlY3Rpb25GaWVsZHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBidWlsZFZlcnNpb25Db2xsZWN0aW9uRmllbGRzID0gKGNvbGxlY3Rpb246IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcpOiBGaWVsZFtdID0+IHtcbiAgY29uc3QgZmllbGRzOiBGaWVsZFtdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdwYXJlbnQnLFxuICAgICAgdHlwZTogJ3JlbGF0aW9uc2hpcCcsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIHJlbGF0aW9uVG86IGNvbGxlY3Rpb24uc2x1ZyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICd2ZXJzaW9uJyxcbiAgICAgIHR5cGU6ICdncm91cCcsXG4gICAgICBmaWVsZHM6IGNvbGxlY3Rpb24uZmllbGRzLmZpbHRlcigoZmllbGQpID0+ICEoJ25hbWUnIGluIGZpZWxkKSB8fCBmaWVsZC5uYW1lICE9PSAnaWQnKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdjcmVhdGVkQXQnLFxuICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgYWRtaW46IHtcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAndXBkYXRlZEF0JyxcbiAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgIGFkbWluOiB7XG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgIH0sXG4gIF1cblxuICBpZiAoY29sbGVjdGlvbj8udmVyc2lvbnM/LmRyYWZ0cykge1xuICAgIGZpZWxkcy5wdXNoKHtcbiAgICAgIG5hbWU6ICdsYXRlc3QnLFxuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIGFkbWluOiB7XG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgIH0pXG4gIH1cblxuICBpZiAoY29sbGVjdGlvbj8udmVyc2lvbnM/LmRyYWZ0cyAmJiBjb2xsZWN0aW9uPy52ZXJzaW9ucz8uZHJhZnRzPy5hdXRvc2F2ZSkge1xuICAgIGZpZWxkcy5wdXNoKHtcbiAgICAgIG5hbWU6ICdhdXRvc2F2ZScsXG4gICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBmaWVsZHNcbn1cbiJdLCJuYW1lcyI6WyJidWlsZFZlcnNpb25Db2xsZWN0aW9uRmllbGRzIiwiY29sbGVjdGlvbiIsImZpZWxkcyIsIm5hbWUiLCJ0eXBlIiwiaW5kZXgiLCJyZWxhdGlvblRvIiwic2x1ZyIsImZpbHRlciIsImZpZWxkIiwiYWRtaW4iLCJkaXNhYmxlZCIsInZlcnNpb25zIiwiZHJhZnRzIiwicHVzaCIsImF1dG9zYXZlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBR2FBOzs7ZUFBQUE7OztBQUFOLE1BQU1BLCtCQUErQixDQUFDQztJQUMzQyxNQUFNQyxTQUFrQjtRQUN0QjtZQUNFQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsT0FBTztZQUNQQyxZQUFZTCxXQUFXTSxJQUFJO1FBQzdCO1FBQ0E7WUFDRUosTUFBTTtZQUNOQyxNQUFNO1lBQ05GLFFBQVFELFdBQVdDLE1BQU0sQ0FBQ00sTUFBTSxDQUFDLENBQUNDLFFBQVUsQ0FBRSxDQUFBLFVBQVVBLEtBQUksS0FBTUEsTUFBTU4sSUFBSSxLQUFLO1FBQ25GO1FBQ0E7WUFDRUEsTUFBTTtZQUNOQyxNQUFNO1lBQ05NLE9BQU87Z0JBQ0xDLFVBQVU7WUFDWjtZQUNBTixPQUFPO1FBQ1Q7UUFDQTtZQUNFRixNQUFNO1lBQ05DLE1BQU07WUFDTk0sT0FBTztnQkFDTEMsVUFBVTtZQUNaO1lBQ0FOLE9BQU87UUFDVDtLQUNEO0lBRUQsSUFBSUosWUFBWVcsVUFBVUMsUUFBUTtRQUNoQ1gsT0FBT1ksSUFBSSxDQUFDO1lBQ1ZYLE1BQU07WUFDTkMsTUFBTTtZQUNOTSxPQUFPO2dCQUNMQyxVQUFVO1lBQ1o7WUFDQU4sT0FBTztRQUNUO0lBQ0Y7SUFFQSxJQUFJSixZQUFZVyxVQUFVQyxVQUFVWixZQUFZVyxVQUFVQyxRQUFRRSxVQUFVO1FBQzFFYixPQUFPWSxJQUFJLENBQUM7WUFDVlgsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0g7QUFDVCJ9