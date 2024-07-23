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
const _getTranslation = require("../../../../../../utilities/getTranslation");
const reduceToIDs = (options)=>options.reduce((ids, option)=>{
        if (option.options) {
            return [
                ...ids,
                ...reduceToIDs(option.options)
            ];
        }
        return [
            ...ids,
            option.id
        ];
    }, []);
const optionsReducer = (state, action)=>{
    switch(action.type){
        case 'CLEAR':
            {
                return action.required ? [] : [
                    {
                        label: action.i18n.t('general:none'),
                        value: 'null'
                    }
                ];
            }
        case 'ADD':
            {
                const { collection, data, hasMultipleRelations, i18n, relation } = action;
                const labelKey = collection.admin.useAsTitle || 'id';
                const loadedIDs = reduceToIDs(state);
                if (!hasMultipleRelations) {
                    return [
                        ...state,
                        ...data.docs.reduce((docs, doc)=>{
                            if (loadedIDs.indexOf(doc.id) === -1) {
                                loadedIDs.push(doc.id);
                                return [
                                    ...docs,
                                    {
                                        label: doc[labelKey],
                                        value: doc.id
                                    }
                                ];
                            }
                            return docs;
                        }, [])
                    ];
                }
                const newOptions = [
                    ...state
                ];
                const optionsToAddTo = newOptions.find((optionGroup)=>optionGroup.label === (0, _getTranslation.getTranslation)(collection.labels.plural, i18n));
                const newSubOptions = data.docs.reduce((docs, doc)=>{
                    if (loadedIDs.indexOf(doc.id) === -1) {
                        loadedIDs.push(doc.id);
                        return [
                            ...docs,
                            {
                                label: doc[labelKey],
                                relationTo: relation,
                                value: doc.id
                            }
                        ];
                    }
                    return docs;
                }, []);
                if (optionsToAddTo) {
                    optionsToAddTo.options = [
                        ...optionsToAddTo.options,
                        ...newSubOptions
                    ];
                } else {
                    newOptions.push({
                        label: (0, _getTranslation.getTranslation)(collection.labels.plural, i18n),
                        options: newSubOptions,
                        value: undefined
                    });
                }
                return newOptions;
            }
        default:
            {
                return state;
            }
    }
};
const _default = optionsReducer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9Db25kaXRpb24vUmVsYXRpb25zaGlwL29wdGlvbnNSZWR1Y2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQWN0aW9uLCBPcHRpb24gfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbidcblxuY29uc3QgcmVkdWNlVG9JRHMgPSAob3B0aW9ucykgPT5cbiAgb3B0aW9ucy5yZWR1Y2UoKGlkcywgb3B0aW9uKSA9PiB7XG4gICAgaWYgKG9wdGlvbi5vcHRpb25zKSB7XG4gICAgICByZXR1cm4gWy4uLmlkcywgLi4ucmVkdWNlVG9JRHMob3B0aW9uLm9wdGlvbnMpXVxuICAgIH1cblxuICAgIHJldHVybiBbLi4uaWRzLCBvcHRpb24uaWRdXG4gIH0sIFtdKVxuXG5jb25zdCBvcHRpb25zUmVkdWNlciA9IChzdGF0ZTogT3B0aW9uW10sIGFjdGlvbjogQWN0aW9uKTogT3B0aW9uW10gPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQ0xFQVInOiB7XG4gICAgICByZXR1cm4gYWN0aW9uLnJlcXVpcmVkID8gW10gOiBbeyBsYWJlbDogYWN0aW9uLmkxOG4udCgnZ2VuZXJhbDpub25lJyksIHZhbHVlOiAnbnVsbCcgfV1cbiAgICB9XG5cbiAgICBjYXNlICdBREQnOiB7XG4gICAgICBjb25zdCB7IGNvbGxlY3Rpb24sIGRhdGEsIGhhc011bHRpcGxlUmVsYXRpb25zLCBpMThuLCByZWxhdGlvbiB9ID0gYWN0aW9uXG5cbiAgICAgIGNvbnN0IGxhYmVsS2V5ID0gY29sbGVjdGlvbi5hZG1pbi51c2VBc1RpdGxlIHx8ICdpZCdcblxuICAgICAgY29uc3QgbG9hZGVkSURzID0gcmVkdWNlVG9JRHMoc3RhdGUpXG5cbiAgICAgIGlmICghaGFzTXVsdGlwbGVSZWxhdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAuLi5kYXRhLmRvY3MucmVkdWNlKChkb2NzLCBkb2MpID0+IHtcbiAgICAgICAgICAgIGlmIChsb2FkZWRJRHMuaW5kZXhPZihkb2MuaWQpID09PSAtMSkge1xuICAgICAgICAgICAgICBsb2FkZWRJRHMucHVzaChkb2MuaWQpXG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgLi4uZG9jcyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogZG9jW2xhYmVsS2V5XSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBkb2MuaWQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvY3NcbiAgICAgICAgICB9LCBbXSksXG4gICAgICAgIF1cbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IFsuLi5zdGF0ZV1cbiAgICAgIGNvbnN0IG9wdGlvbnNUb0FkZFRvID0gbmV3T3B0aW9ucy5maW5kKFxuICAgICAgICAob3B0aW9uR3JvdXApID0+IG9wdGlvbkdyb3VwLmxhYmVsID09PSBnZXRUcmFuc2xhdGlvbihjb2xsZWN0aW9uLmxhYmVscy5wbHVyYWwsIGkxOG4pLFxuICAgICAgKVxuXG4gICAgICBjb25zdCBuZXdTdWJPcHRpb25zID0gZGF0YS5kb2NzLnJlZHVjZSgoZG9jcywgZG9jKSA9PiB7XG4gICAgICAgIGlmIChsb2FkZWRJRHMuaW5kZXhPZihkb2MuaWQpID09PSAtMSkge1xuICAgICAgICAgIGxvYWRlZElEcy5wdXNoKGRvYy5pZClcblxuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi5kb2NzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogZG9jW2xhYmVsS2V5XSxcbiAgICAgICAgICAgICAgcmVsYXRpb25UbzogcmVsYXRpb24sXG4gICAgICAgICAgICAgIHZhbHVlOiBkb2MuaWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkb2NzXG4gICAgICB9LCBbXSlcblxuICAgICAgaWYgKG9wdGlvbnNUb0FkZFRvKSB7XG4gICAgICAgIG9wdGlvbnNUb0FkZFRvLm9wdGlvbnMgPSBbLi4ub3B0aW9uc1RvQWRkVG8ub3B0aW9ucywgLi4ubmV3U3ViT3B0aW9uc11cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09wdGlvbnMucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IGdldFRyYW5zbGF0aW9uKGNvbGxlY3Rpb24ubGFiZWxzLnBsdXJhbCwgaTE4biksXG4gICAgICAgICAgb3B0aW9uczogbmV3U3ViT3B0aW9ucyxcbiAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3T3B0aW9uc1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBvcHRpb25zUmVkdWNlclxuIl0sIm5hbWVzIjpbInJlZHVjZVRvSURzIiwib3B0aW9ucyIsInJlZHVjZSIsImlkcyIsIm9wdGlvbiIsImlkIiwib3B0aW9uc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJyZXF1aXJlZCIsImxhYmVsIiwiaTE4biIsInQiLCJ2YWx1ZSIsImNvbGxlY3Rpb24iLCJkYXRhIiwiaGFzTXVsdGlwbGVSZWxhdGlvbnMiLCJyZWxhdGlvbiIsImxhYmVsS2V5IiwiYWRtaW4iLCJ1c2VBc1RpdGxlIiwibG9hZGVkSURzIiwiZG9jcyIsImRvYyIsImluZGV4T2YiLCJwdXNoIiwibmV3T3B0aW9ucyIsIm9wdGlvbnNUb0FkZFRvIiwiZmluZCIsIm9wdGlvbkdyb3VwIiwiZ2V0VHJhbnNsYXRpb24iLCJsYWJlbHMiLCJwbHVyYWwiLCJuZXdTdWJPcHRpb25zIiwicmVsYXRpb25UbyIsInVuZGVmaW5lZCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFzRkE7OztlQUFBOzs7Z0NBcEYrQjtBQUUvQixNQUFNQSxjQUFjLENBQUNDLFVBQ25CQSxRQUFRQyxNQUFNLENBQUMsQ0FBQ0MsS0FBS0M7UUFDbkIsSUFBSUEsT0FBT0gsT0FBTyxFQUFFO1lBQ2xCLE9BQU87bUJBQUlFO21CQUFRSCxZQUFZSSxPQUFPSCxPQUFPO2FBQUU7UUFDakQ7UUFFQSxPQUFPO2VBQUlFO1lBQUtDLE9BQU9DLEVBQUU7U0FBQztJQUM1QixHQUFHLEVBQUU7QUFFUCxNQUFNQyxpQkFBaUIsQ0FBQ0MsT0FBaUJDO0lBQ3ZDLE9BQVFBLE9BQU9DLElBQUk7UUFDakIsS0FBSztZQUFTO2dCQUNaLE9BQU9ELE9BQU9FLFFBQVEsR0FBRyxFQUFFLEdBQUc7b0JBQUM7d0JBQUVDLE9BQU9ILE9BQU9JLElBQUksQ0FBQ0MsQ0FBQyxDQUFDO3dCQUFpQkMsT0FBTztvQkFBTztpQkFBRTtZQUN6RjtRQUVBLEtBQUs7WUFBTztnQkFDVixNQUFNLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFQyxvQkFBb0IsRUFBRUwsSUFBSSxFQUFFTSxRQUFRLEVBQUUsR0FBR1Y7Z0JBRW5FLE1BQU1XLFdBQVdKLFdBQVdLLEtBQUssQ0FBQ0MsVUFBVSxJQUFJO2dCQUVoRCxNQUFNQyxZQUFZdEIsWUFBWU87Z0JBRTlCLElBQUksQ0FBQ1Usc0JBQXNCO29CQUN6QixPQUFPOzJCQUNGVjsyQkFDQVMsS0FBS08sSUFBSSxDQUFDckIsTUFBTSxDQUFDLENBQUNxQixNQUFNQzs0QkFDekIsSUFBSUYsVUFBVUcsT0FBTyxDQUFDRCxJQUFJbkIsRUFBRSxNQUFNLENBQUMsR0FBRztnQ0FDcENpQixVQUFVSSxJQUFJLENBQUNGLElBQUluQixFQUFFO2dDQUNyQixPQUFPO3VDQUNGa0I7b0NBQ0g7d0NBQ0VaLE9BQU9hLEdBQUcsQ0FBQ0wsU0FBUzt3Q0FDcEJMLE9BQU9VLElBQUluQixFQUFFO29DQUNmO2lDQUNEOzRCQUNIOzRCQUNBLE9BQU9rQjt3QkFDVCxHQUFHLEVBQUU7cUJBQ047Z0JBQ0g7Z0JBRUEsTUFBTUksYUFBYTt1QkFBSXBCO2lCQUFNO2dCQUM3QixNQUFNcUIsaUJBQWlCRCxXQUFXRSxJQUFJLENBQ3BDLENBQUNDLGNBQWdCQSxZQUFZbkIsS0FBSyxLQUFLb0IsSUFBQUEsOEJBQWMsRUFBQ2hCLFdBQVdpQixNQUFNLENBQUNDLE1BQU0sRUFBRXJCO2dCQUdsRixNQUFNc0IsZ0JBQWdCbEIsS0FBS08sSUFBSSxDQUFDckIsTUFBTSxDQUFDLENBQUNxQixNQUFNQztvQkFDNUMsSUFBSUYsVUFBVUcsT0FBTyxDQUFDRCxJQUFJbkIsRUFBRSxNQUFNLENBQUMsR0FBRzt3QkFDcENpQixVQUFVSSxJQUFJLENBQUNGLElBQUluQixFQUFFO3dCQUVyQixPQUFPOytCQUNGa0I7NEJBQ0g7Z0NBQ0VaLE9BQU9hLEdBQUcsQ0FBQ0wsU0FBUztnQ0FDcEJnQixZQUFZakI7Z0NBQ1pKLE9BQU9VLElBQUluQixFQUFFOzRCQUNmO3lCQUNEO29CQUNIO29CQUVBLE9BQU9rQjtnQkFDVCxHQUFHLEVBQUU7Z0JBRUwsSUFBSUssZ0JBQWdCO29CQUNsQkEsZUFBZTNCLE9BQU8sR0FBRzsyQkFBSTJCLGVBQWUzQixPQUFPOzJCQUFLaUM7cUJBQWM7Z0JBQ3hFLE9BQU87b0JBQ0xQLFdBQVdELElBQUksQ0FBQzt3QkFDZGYsT0FBT29CLElBQUFBLDhCQUFjLEVBQUNoQixXQUFXaUIsTUFBTSxDQUFDQyxNQUFNLEVBQUVyQjt3QkFDaERYLFNBQVNpQzt3QkFDVHBCLE9BQU9zQjtvQkFDVDtnQkFDRjtnQkFFQSxPQUFPVDtZQUNUO1FBRUE7WUFBUztnQkFDUCxPQUFPcEI7WUFDVDtJQUNGO0FBQ0Y7TUFFQSxXQUFlRCJ9