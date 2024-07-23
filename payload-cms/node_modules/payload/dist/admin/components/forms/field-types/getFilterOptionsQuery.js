"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getFilterOptionsQuery", {
    enumerable: true,
    get: function() {
        return getFilterOptionsQuery;
    }
});
const getFilterOptionsQuery = async (filterOptions, options)=>{
    const { relationTo } = options;
    const relations = Array.isArray(relationTo) ? relationTo : [
        relationTo
    ];
    const query = {};
    if (typeof filterOptions !== 'undefined') {
        await Promise.all(relations.map(async (relation)=>{
            query[relation] = typeof filterOptions === 'function' ? await filterOptions({
                ...options,
                relationTo: relation
            }) : filterOptions;
            if (query[relation] === true) {
                query[relation] = {};
            }
            // this is an ugly way to prevent results from being returned
            if (query[relation] === false) {
                query[relation] = {
                    id: {
                        exists: false
                    }
                };
            }
        }));
    }
    return query;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL2dldEZpbHRlck9wdGlvbnNRdWVyeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZpbHRlck9wdGlvbnMsIEZpbHRlck9wdGlvbnNQcm9wcyB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFdoZXJlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBnZXRGaWx0ZXJPcHRpb25zUXVlcnkgPSBhc3luYyAoXG4gIGZpbHRlck9wdGlvbnM6IEZpbHRlck9wdGlvbnMsXG4gIG9wdGlvbnM6IE9taXQ8RmlsdGVyT3B0aW9uc1Byb3BzLCAncmVsYXRpb25Ubyc+ICYgeyByZWxhdGlvblRvOiBzdHJpbmcgfCBzdHJpbmdbXSB9LFxuKTogUHJvbWlzZTx7IFtjb2xsZWN0aW9uOiBzdHJpbmddOiBXaGVyZSB9PiA9PiB7XG4gIGNvbnN0IHsgcmVsYXRpb25UbyB9ID0gb3B0aW9uc1xuICBjb25zdCByZWxhdGlvbnMgPSBBcnJheS5pc0FycmF5KHJlbGF0aW9uVG8pID8gcmVsYXRpb25UbyA6IFtyZWxhdGlvblRvXVxuICBjb25zdCBxdWVyeSA9IHt9XG4gIGlmICh0eXBlb2YgZmlsdGVyT3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIHJlbGF0aW9ucy5tYXAoYXN5bmMgKHJlbGF0aW9uKSA9PiB7XG4gICAgICAgIHF1ZXJ5W3JlbGF0aW9uXSA9XG4gICAgICAgICAgdHlwZW9mIGZpbHRlck9wdGlvbnMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gYXdhaXQgZmlsdGVyT3B0aW9ucyh7IC4uLm9wdGlvbnMsIHJlbGF0aW9uVG86IHJlbGF0aW9uIH0pXG4gICAgICAgICAgICA6IGZpbHRlck9wdGlvbnNcbiAgICAgICAgaWYgKHF1ZXJ5W3JlbGF0aW9uXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHF1ZXJ5W3JlbGF0aW9uXSA9IHt9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcyBpcyBhbiB1Z2x5IHdheSB0byBwcmV2ZW50IHJlc3VsdHMgZnJvbSBiZWluZyByZXR1cm5lZFxuICAgICAgICBpZiAocXVlcnlbcmVsYXRpb25dID09PSBmYWxzZSkge1xuICAgICAgICAgIHF1ZXJ5W3JlbGF0aW9uXSA9IHsgaWQ6IHsgZXhpc3RzOiBmYWxzZSB9IH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKVxuICB9XG4gIHJldHVybiBxdWVyeVxufVxuIl0sIm5hbWVzIjpbImdldEZpbHRlck9wdGlvbnNRdWVyeSIsImZpbHRlck9wdGlvbnMiLCJvcHRpb25zIiwicmVsYXRpb25UbyIsInJlbGF0aW9ucyIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5IiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsInJlbGF0aW9uIiwiaWQiLCJleGlzdHMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQUdhQTs7O2VBQUFBOzs7QUFBTixNQUFNQSx3QkFBd0IsT0FDbkNDLGVBQ0FDO0lBRUEsTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBR0Q7SUFDdkIsTUFBTUUsWUFBWUMsTUFBTUMsT0FBTyxDQUFDSCxjQUFjQSxhQUFhO1FBQUNBO0tBQVc7SUFDdkUsTUFBTUksUUFBUSxDQUFDO0lBQ2YsSUFBSSxPQUFPTixrQkFBa0IsYUFBYTtRQUN4QyxNQUFNTyxRQUFRQyxHQUFHLENBQ2ZMLFVBQVVNLEdBQUcsQ0FBQyxPQUFPQztZQUNuQkosS0FBSyxDQUFDSSxTQUFTLEdBQ2IsT0FBT1Ysa0JBQWtCLGFBQ3JCLE1BQU1BLGNBQWM7Z0JBQUUsR0FBR0MsT0FBTztnQkFBRUMsWUFBWVE7WUFBUyxLQUN2RFY7WUFDTixJQUFJTSxLQUFLLENBQUNJLFNBQVMsS0FBSyxNQUFNO2dCQUM1QkosS0FBSyxDQUFDSSxTQUFTLEdBQUcsQ0FBQztZQUNyQjtZQUNBLDZEQUE2RDtZQUM3RCxJQUFJSixLQUFLLENBQUNJLFNBQVMsS0FBSyxPQUFPO2dCQUM3QkosS0FBSyxDQUFDSSxTQUFTLEdBQUc7b0JBQUVDLElBQUk7d0JBQUVDLFFBQVE7b0JBQU07Z0JBQUU7WUFDNUM7UUFDRjtJQUVKO0lBQ0EsT0FBT047QUFDVCJ9