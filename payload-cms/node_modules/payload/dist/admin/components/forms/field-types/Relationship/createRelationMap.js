"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRelationMap", {
    enumerable: true,
    get: function() {
        return createRelationMap;
    }
});
const createRelationMap = ({ hasMany, relationTo, value })=>{
    const hasMultipleRelations = Array.isArray(relationTo);
    let relationMap;
    if (Array.isArray(relationTo)) {
        relationMap = relationTo.reduce((map, current)=>{
            return {
                ...map,
                [current]: []
            };
        }, {});
    } else {
        relationMap = {
            [relationTo]: []
        };
    }
    if (value === null) {
        return relationMap;
    }
    const add = (relation, id)=>{
        if ((typeof id === 'string' || typeof id === 'number') && typeof relation === 'string') {
            if (relationMap[relation]) {
                relationMap[relation].push(id);
            } else {
                relationMap[relation] = [
                    id
                ];
            }
        }
    };
    if (hasMany && Array.isArray(value)) {
        value.forEach((val)=>{
            if (hasMultipleRelations && typeof val === 'object' && 'relationTo' in val && 'value' in val) {
                add(val.relationTo, val.value);
            }
            if (!hasMultipleRelations && typeof relationTo === 'string') {
                add(relationTo, val);
            }
        });
    } else if (hasMultipleRelations && Array.isArray(relationTo)) {
        if (typeof value === 'object' && 'relationTo' in value && 'value' in value) {
            add(value.relationTo, value.value);
        }
    } else {
        add(relationTo, value);
    }
    return relationMap;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9jcmVhdGVSZWxhdGlvbk1hcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFZhbHVlIH0gZnJvbSAnLi90eXBlcydcblxudHlwZSBSZWxhdGlvbk1hcCA9IHtcbiAgW3JlbGF0aW9uOiBzdHJpbmddOiAobnVtYmVyIHwgc3RyaW5nKVtdXG59XG5cbnR5cGUgQ3JlYXRlUmVsYXRpb25NYXAgPSAoYXJnczoge1xuICBoYXNNYW55OiBib29sZWFuXG4gIHJlbGF0aW9uVG86IHN0cmluZyB8IHN0cmluZ1tdXG4gIHZhbHVlOiBWYWx1ZSB8IFZhbHVlW10gfCBudWxsIC8vIHJlYWxseSBuZWVkcyB0byBiZSBgVmFsdWVXaXRoUmVsYXRpb25gXG59KSA9PiBSZWxhdGlvbk1hcFxuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVsYXRpb25NYXA6IENyZWF0ZVJlbGF0aW9uTWFwID0gKHsgaGFzTWFueSwgcmVsYXRpb25UbywgdmFsdWUgfSkgPT4ge1xuICBjb25zdCBoYXNNdWx0aXBsZVJlbGF0aW9ucyA9IEFycmF5LmlzQXJyYXkocmVsYXRpb25UbylcbiAgbGV0IHJlbGF0aW9uTWFwOiBSZWxhdGlvbk1hcFxuICBpZiAoQXJyYXkuaXNBcnJheShyZWxhdGlvblRvKSkge1xuICAgIHJlbGF0aW9uTWFwID0gcmVsYXRpb25Uby5yZWR1Y2UoKG1hcCwgY3VycmVudCkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ubWFwLCBbY3VycmVudF06IFtdIH1cbiAgICB9LCB7fSlcbiAgfSBlbHNlIHtcbiAgICByZWxhdGlvbk1hcCA9IHsgW3JlbGF0aW9uVG9dOiBbXSB9XG4gIH1cblxuICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gcmVsYXRpb25NYXBcbiAgfVxuXG4gIGNvbnN0IGFkZCA9IChyZWxhdGlvbjogc3RyaW5nLCBpZDogdW5rbm93bikgPT4ge1xuICAgIGlmICgodHlwZW9mIGlkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgaWQgPT09ICdudW1iZXInKSAmJiB0eXBlb2YgcmVsYXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAocmVsYXRpb25NYXBbcmVsYXRpb25dKSB7XG4gICAgICAgIHJlbGF0aW9uTWFwW3JlbGF0aW9uXS5wdXNoKGlkKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVsYXRpb25NYXBbcmVsYXRpb25dID0gW2lkXVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNNYW55ICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgdmFsdWUuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGhhc011bHRpcGxlUmVsYXRpb25zICYmXG4gICAgICAgIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmXG4gICAgICAgICdyZWxhdGlvblRvJyBpbiB2YWwgJiZcbiAgICAgICAgJ3ZhbHVlJyBpbiB2YWxcbiAgICAgICkge1xuICAgICAgICBhZGQodmFsLnJlbGF0aW9uVG8sIHZhbC52YWx1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKCFoYXNNdWx0aXBsZVJlbGF0aW9ucyAmJiB0eXBlb2YgcmVsYXRpb25UbyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgYWRkKHJlbGF0aW9uVG8sIHZhbClcbiAgICAgIH1cbiAgICB9KVxuICB9IGVsc2UgaWYgKGhhc011bHRpcGxlUmVsYXRpb25zICYmIEFycmF5LmlzQXJyYXkocmVsYXRpb25UbykpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAncmVsYXRpb25UbycgaW4gdmFsdWUgJiYgJ3ZhbHVlJyBpbiB2YWx1ZSkge1xuICAgICAgYWRkKHZhbHVlLnJlbGF0aW9uVG8sIHZhbHVlLnZhbHVlKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBhZGQocmVsYXRpb25UbywgdmFsdWUpXG4gIH1cblxuICByZXR1cm4gcmVsYXRpb25NYXBcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVSZWxhdGlvbk1hcCIsImhhc01hbnkiLCJyZWxhdGlvblRvIiwidmFsdWUiLCJoYXNNdWx0aXBsZVJlbGF0aW9ucyIsIkFycmF5IiwiaXNBcnJheSIsInJlbGF0aW9uTWFwIiwicmVkdWNlIiwibWFwIiwiY3VycmVudCIsImFkZCIsInJlbGF0aW9uIiwiaWQiLCJwdXNoIiwiZm9yRWFjaCIsInZhbCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFZYUE7OztlQUFBQTs7O0FBQU4sTUFBTUEsb0JBQXVDLENBQUMsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLEtBQUssRUFBRTtJQUNqRixNQUFNQyx1QkFBdUJDLE1BQU1DLE9BQU8sQ0FBQ0o7SUFDM0MsSUFBSUs7SUFDSixJQUFJRixNQUFNQyxPQUFPLENBQUNKLGFBQWE7UUFDN0JLLGNBQWNMLFdBQVdNLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQztZQUNwQyxPQUFPO2dCQUFFLEdBQUdELEdBQUc7Z0JBQUUsQ0FBQ0MsUUFBUSxFQUFFLEVBQUU7WUFBQztRQUNqQyxHQUFHLENBQUM7SUFDTixPQUFPO1FBQ0xILGNBQWM7WUFBRSxDQUFDTCxXQUFXLEVBQUUsRUFBRTtRQUFDO0lBQ25DO0lBRUEsSUFBSUMsVUFBVSxNQUFNO1FBQ2xCLE9BQU9JO0lBQ1Q7SUFFQSxNQUFNSSxNQUFNLENBQUNDLFVBQWtCQztRQUM3QixJQUFJLEFBQUMsQ0FBQSxPQUFPQSxPQUFPLFlBQVksT0FBT0EsT0FBTyxRQUFPLEtBQU0sT0FBT0QsYUFBYSxVQUFVO1lBQ3RGLElBQUlMLFdBQVcsQ0FBQ0ssU0FBUyxFQUFFO2dCQUN6QkwsV0FBVyxDQUFDSyxTQUFTLENBQUNFLElBQUksQ0FBQ0Q7WUFDN0IsT0FBTztnQkFDTE4sV0FBVyxDQUFDSyxTQUFTLEdBQUc7b0JBQUNDO2lCQUFHO1lBQzlCO1FBQ0Y7SUFDRjtJQUVBLElBQUlaLFdBQVdJLE1BQU1DLE9BQU8sQ0FBQ0gsUUFBUTtRQUNuQ0EsTUFBTVksT0FBTyxDQUFDLENBQUNDO1lBQ2IsSUFDRVosd0JBQ0EsT0FBT1ksUUFBUSxZQUNmLGdCQUFnQkEsT0FDaEIsV0FBV0EsS0FDWDtnQkFDQUwsSUFBSUssSUFBSWQsVUFBVSxFQUFFYyxJQUFJYixLQUFLO1lBQy9CO1lBRUEsSUFBSSxDQUFDQyx3QkFBd0IsT0FBT0YsZUFBZSxVQUFVO2dCQUMzRFMsSUFBSVQsWUFBWWM7WUFDbEI7UUFDRjtJQUNGLE9BQU8sSUFBSVosd0JBQXdCQyxNQUFNQyxPQUFPLENBQUNKLGFBQWE7UUFDNUQsSUFBSSxPQUFPQyxVQUFVLFlBQVksZ0JBQWdCQSxTQUFTLFdBQVdBLE9BQU87WUFDMUVRLElBQUlSLE1BQU1ELFVBQVUsRUFBRUMsTUFBTUEsS0FBSztRQUNuQztJQUNGLE9BQU87UUFDTFEsSUFBSVQsWUFBWUM7SUFDbEI7SUFFQSxPQUFPSTtBQUNUIn0=