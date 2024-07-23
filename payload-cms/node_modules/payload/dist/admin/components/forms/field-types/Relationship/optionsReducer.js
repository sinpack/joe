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
const _getTranslation = require("../../../../../utilities/getTranslation");
const _useTitle = require("../../../../hooks/useTitle");
const reduceToIDs = (options)=>options.reduce((ids, option)=>{
        if (option.options) {
            return [
                ...ids,
                ...reduceToIDs(option.options)
            ];
        }
        return [
            ...ids,
            {
                id: option.value,
                relationTo: option.relationTo
            }
        ];
    }, []);
const sortOptions = (options)=>options.sort((a, b)=>{
        if (typeof a?.label?.localeCompare === 'function' && typeof b?.label?.localeCompare === 'function') {
            return a.label.localeCompare(b.label);
        }
        return 0;
    });
const optionsReducer = (state, action)=>{
    switch(action.type){
        case 'CLEAR':
            {
                return [];
            }
        case 'UPDATE':
            {
                const { collection, config, doc, i18n } = action;
                const relation = collection.slug;
                const newOptions = [
                    ...state
                ];
                const docTitle = (0, _useTitle.formatUseAsTitle)({
                    collection,
                    config,
                    doc,
                    i18n
                });
                const foundOptionGroup = newOptions.find((optionGroup)=>optionGroup.label === collection.labels.plural);
                const foundOption = foundOptionGroup?.options?.find((option)=>option.value === doc.id);
                if (foundOption) {
                    foundOption.label = docTitle || `${i18n.t('general:untitled')} - ID: ${doc.id}`;
                    foundOption.relationTo = relation;
                }
                return newOptions;
            }
        case 'ADD':
            {
                const { collection, config, docs, i18n, ids = [], sort } = action;
                const relation = collection.slug;
                const loadedIDs = reduceToIDs(state);
                const newOptions = [
                    ...state
                ];
                const optionsToAddTo = newOptions.find((optionGroup)=>optionGroup.label === collection.labels.plural);
                const newSubOptions = docs.reduce((docSubOptions, doc)=>{
                    if (loadedIDs.filter((item)=>item.id === doc.id && item.relationTo === relation).length === 0) {
                        loadedIDs.push({
                            id: doc.id,
                            relationTo: relation
                        });
                        const docTitle = (0, _useTitle.formatUseAsTitle)({
                            collection,
                            config,
                            doc,
                            i18n
                        });
                        return [
                            ...docSubOptions,
                            {
                                label: docTitle || `${i18n.t('general:untitled')} - ID: ${doc.id}`,
                                relationTo: relation,
                                value: doc.id
                            }
                        ];
                    }
                    return docSubOptions;
                }, []);
                ids.forEach((id)=>{
                    if (loadedIDs.filter((item)=>item.id === id && item.relationTo === relation).length === 0) {
                        loadedIDs.push({
                            id,
                            relationTo: relation
                        });
                        newSubOptions.push({
                            label: `${i18n.t('general:untitled')} - ID: ${id}`,
                            relationTo: relation,
                            value: id
                        });
                    }
                });
                if (optionsToAddTo) {
                    const subOptions = [
                        ...optionsToAddTo.options,
                        ...newSubOptions
                    ];
                    optionsToAddTo.options = sort ? sortOptions(subOptions) : subOptions;
                } else {
                    newOptions.push({
                        label: (0, _getTranslation.getTranslation)(collection.labels.plural, i18n),
                        options: sort ? sortOptions(newSubOptions) : newSubOptions
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9vcHRpb25zUmVkdWNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFjdGlvbiwgT3B0aW9uLCBPcHRpb25Hcm91cCB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJ1xuaW1wb3J0IHsgZm9ybWF0VXNlQXNUaXRsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2hvb2tzL3VzZVRpdGxlJ1xuXG5jb25zdCByZWR1Y2VUb0lEcyA9IChvcHRpb25zKSA9PlxuICBvcHRpb25zLnJlZHVjZSgoaWRzLCBvcHRpb24pID0+IHtcbiAgICBpZiAob3B0aW9uLm9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBbLi4uaWRzLCAuLi5yZWR1Y2VUb0lEcyhvcHRpb24ub3B0aW9ucyldXG4gICAgfVxuXG4gICAgcmV0dXJuIFsuLi5pZHMsIHsgaWQ6IG9wdGlvbi52YWx1ZSwgcmVsYXRpb25Ubzogb3B0aW9uLnJlbGF0aW9uVG8gfV1cbiAgfSwgW10pXG5cbmNvbnN0IHNvcnRPcHRpb25zID0gKG9wdGlvbnM6IE9wdGlvbltdKTogT3B0aW9uW10gPT5cbiAgb3B0aW9ucy5zb3J0KChhOiBPcHRpb24sIGI6IE9wdGlvbikgPT4ge1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiBhPy5sYWJlbD8ubG9jYWxlQ29tcGFyZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgdHlwZW9mIGI/LmxhYmVsPy5sb2NhbGVDb21wYXJlID09PSAnZnVuY3Rpb24nXG4gICAgKSB7XG4gICAgICByZXR1cm4gYS5sYWJlbC5sb2NhbGVDb21wYXJlKGIubGFiZWwpXG4gICAgfVxuXG4gICAgcmV0dXJuIDBcbiAgfSlcblxuY29uc3Qgb3B0aW9uc1JlZHVjZXIgPSAoc3RhdGU6IE9wdGlvbkdyb3VwW10sIGFjdGlvbjogQWN0aW9uKTogT3B0aW9uR3JvdXBbXSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdDTEVBUic6IHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGNhc2UgJ1VQREFURSc6IHtcbiAgICAgIGNvbnN0IHsgY29sbGVjdGlvbiwgY29uZmlnLCBkb2MsIGkxOG4gfSA9IGFjdGlvblxuICAgICAgY29uc3QgcmVsYXRpb24gPSBjb2xsZWN0aW9uLnNsdWdcbiAgICAgIGNvbnN0IG5ld09wdGlvbnMgPSBbLi4uc3RhdGVdXG5cbiAgICAgIGNvbnN0IGRvY1RpdGxlID0gZm9ybWF0VXNlQXNUaXRsZSh7XG4gICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgZG9jLFxuICAgICAgICBpMThuLFxuICAgICAgfSlcblxuICAgICAgY29uc3QgZm91bmRPcHRpb25Hcm91cCA9IG5ld09wdGlvbnMuZmluZChcbiAgICAgICAgKG9wdGlvbkdyb3VwKSA9PiBvcHRpb25Hcm91cC5sYWJlbCA9PT0gY29sbGVjdGlvbi5sYWJlbHMucGx1cmFsLFxuICAgICAgKVxuICAgICAgY29uc3QgZm91bmRPcHRpb24gPSBmb3VuZE9wdGlvbkdyb3VwPy5vcHRpb25zPy5maW5kKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSA9PT0gZG9jLmlkKVxuXG4gICAgICBpZiAoZm91bmRPcHRpb24pIHtcbiAgICAgICAgZm91bmRPcHRpb24ubGFiZWwgPSBkb2NUaXRsZSB8fCBgJHtpMThuLnQoJ2dlbmVyYWw6dW50aXRsZWQnKX0gLSBJRDogJHtkb2MuaWR9YFxuICAgICAgICBmb3VuZE9wdGlvbi5yZWxhdGlvblRvID0gcmVsYXRpb25cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld09wdGlvbnNcbiAgICB9XG5cbiAgICBjYXNlICdBREQnOiB7XG4gICAgICBjb25zdCB7IGNvbGxlY3Rpb24sIGNvbmZpZywgZG9jcywgaTE4biwgaWRzID0gW10sIHNvcnQgfSA9IGFjdGlvblxuICAgICAgY29uc3QgcmVsYXRpb24gPSBjb2xsZWN0aW9uLnNsdWdcbiAgICAgIGNvbnN0IGxvYWRlZElEcyA9IHJlZHVjZVRvSURzKHN0YXRlKVxuICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IFsuLi5zdGF0ZV1cbiAgICAgIGNvbnN0IG9wdGlvbnNUb0FkZFRvID0gbmV3T3B0aW9ucy5maW5kKFxuICAgICAgICAob3B0aW9uR3JvdXApID0+IG9wdGlvbkdyb3VwLmxhYmVsID09PSBjb2xsZWN0aW9uLmxhYmVscy5wbHVyYWwsXG4gICAgICApXG4gICAgICBjb25zdCBuZXdTdWJPcHRpb25zID0gZG9jcy5yZWR1Y2UoKGRvY1N1Yk9wdGlvbnMsIGRvYykgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgbG9hZGVkSURzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZG9jLmlkICYmIGl0ZW0ucmVsYXRpb25UbyA9PT0gcmVsYXRpb24pLmxlbmd0aCA9PT1cbiAgICAgICAgICAwXG4gICAgICAgICkge1xuICAgICAgICAgIGxvYWRlZElEcy5wdXNoKHsgaWQ6IGRvYy5pZCwgcmVsYXRpb25UbzogcmVsYXRpb24gfSlcblxuICAgICAgICAgIGNvbnN0IGRvY1RpdGxlID0gZm9ybWF0VXNlQXNUaXRsZSh7XG4gICAgICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgZG9jLFxuICAgICAgICAgICAgaTE4bixcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLmRvY1N1Yk9wdGlvbnMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxhYmVsOiBkb2NUaXRsZSB8fCBgJHtpMThuLnQoJ2dlbmVyYWw6dW50aXRsZWQnKX0gLSBJRDogJHtkb2MuaWR9YCxcbiAgICAgICAgICAgICAgcmVsYXRpb25UbzogcmVsYXRpb24sXG4gICAgICAgICAgICAgIHZhbHVlOiBkb2MuaWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkb2NTdWJPcHRpb25zXG4gICAgICB9LCBbXSlcblxuICAgICAgaWRzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBsb2FkZWRJRHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCAmJiBpdGVtLnJlbGF0aW9uVG8gPT09IHJlbGF0aW9uKS5sZW5ndGggPT09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgbG9hZGVkSURzLnB1c2goeyBpZCwgcmVsYXRpb25UbzogcmVsYXRpb24gfSlcbiAgICAgICAgICBuZXdTdWJPcHRpb25zLnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6IGAke2kxOG4udCgnZ2VuZXJhbDp1bnRpdGxlZCcpfSAtIElEOiAke2lkfWAsXG4gICAgICAgICAgICByZWxhdGlvblRvOiByZWxhdGlvbixcbiAgICAgICAgICAgIHZhbHVlOiBpZCxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAob3B0aW9uc1RvQWRkVG8pIHtcbiAgICAgICAgY29uc3Qgc3ViT3B0aW9ucyA9IFsuLi5vcHRpb25zVG9BZGRUby5vcHRpb25zLCAuLi5uZXdTdWJPcHRpb25zXVxuXG4gICAgICAgIG9wdGlvbnNUb0FkZFRvLm9wdGlvbnMgPSBzb3J0ID8gc29ydE9wdGlvbnMoc3ViT3B0aW9ucykgOiBzdWJPcHRpb25zXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPcHRpb25zLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiBnZXRUcmFuc2xhdGlvbihjb2xsZWN0aW9uLmxhYmVscy5wbHVyYWwsIGkxOG4pLFxuICAgICAgICAgIG9wdGlvbnM6IHNvcnQgPyBzb3J0T3B0aW9ucyhuZXdTdWJPcHRpb25zKSA6IG5ld1N1Yk9wdGlvbnMsXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdPcHRpb25zXG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9wdGlvbnNSZWR1Y2VyXG4iXSwibmFtZXMiOlsicmVkdWNlVG9JRHMiLCJvcHRpb25zIiwicmVkdWNlIiwiaWRzIiwib3B0aW9uIiwiaWQiLCJ2YWx1ZSIsInJlbGF0aW9uVG8iLCJzb3J0T3B0aW9ucyIsInNvcnQiLCJhIiwiYiIsImxhYmVsIiwibG9jYWxlQ29tcGFyZSIsIm9wdGlvbnNSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY29sbGVjdGlvbiIsImNvbmZpZyIsImRvYyIsImkxOG4iLCJyZWxhdGlvbiIsInNsdWciLCJuZXdPcHRpb25zIiwiZG9jVGl0bGUiLCJmb3JtYXRVc2VBc1RpdGxlIiwiZm91bmRPcHRpb25Hcm91cCIsImZpbmQiLCJvcHRpb25Hcm91cCIsImxhYmVscyIsInBsdXJhbCIsImZvdW5kT3B0aW9uIiwidCIsImRvY3MiLCJsb2FkZWRJRHMiLCJvcHRpb25zVG9BZGRUbyIsIm5ld1N1Yk9wdGlvbnMiLCJkb2NTdWJPcHRpb25zIiwiZmlsdGVyIiwiaXRlbSIsImxlbmd0aCIsInB1c2giLCJmb3JFYWNoIiwic3ViT3B0aW9ucyIsImdldFRyYW5zbGF0aW9uIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQTZIQTs7O2VBQUE7OztnQ0EzSCtCOzBCQUNFO0FBRWpDLE1BQU1BLGNBQWMsQ0FBQ0MsVUFDbkJBLFFBQVFDLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQztRQUNuQixJQUFJQSxPQUFPSCxPQUFPLEVBQUU7WUFD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