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
    formatLabels: function() {
        return formatLabels;
    },
    formatNames: function() {
        return formatNames;
    },
    toWords: function() {
        return toWords;
    }
});
const _pluralize = /*#__PURE__*/ _interop_require_wildcard(require("pluralize"));
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
const capitalizeFirstLetter = (string)=>string.charAt(0).toUpperCase() + string.slice(1);
const toWords = (inputString, joinWords = false)=>{
    const notNullString = inputString || '';
    const trimmedString = notNullString.trim();
    const arrayOfStrings = trimmedString.split(/[\s-]/);
    const splitStringsArray = [];
    arrayOfStrings.forEach((tempString)=>{
        if (tempString !== '') {
            const splitWords = tempString.split(/(?=[A-Z])/).join(' ');
            splitStringsArray.push(capitalizeFirstLetter(splitWords));
        }
    });
    return joinWords ? splitStringsArray.join('').replace(/\s/g, '') : splitStringsArray.join(' ');
};
const formatLabels = (slug)=>{
    const words = toWords(slug);
    return (0, _pluralize.isPlural)(slug) ? {
        plural: words,
        singular: (0, _pluralize.singular)(words)
    } : {
        plural: (0, _pluralize.default)(words),
        singular: words
    };
};
const formatNames = (slug)=>{
    const words = toWords(slug, true);
    return (0, _pluralize.isPlural)(slug) ? {
        plural: words,
        singular: (0, _pluralize.singular)(words)
    } : {
        plural: (0, _pluralize.default)(words),
        singular: words
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZm9ybWF0TGFiZWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwbHVyYWxpemUsIHsgaXNQbHVyYWwsIHNpbmd1bGFyIH0gZnJvbSAncGx1cmFsaXplJ1xuXG5jb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT5cbiAgc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpXG5cbmNvbnN0IHRvV29yZHMgPSAoaW5wdXRTdHJpbmc6IHN0cmluZywgam9pbldvcmRzID0gZmFsc2UpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBub3ROdWxsU3RyaW5nID0gaW5wdXRTdHJpbmcgfHwgJydcbiAgY29uc3QgdHJpbW1lZFN0cmluZyA9IG5vdE51bGxTdHJpbmcudHJpbSgpXG4gIGNvbnN0IGFycmF5T2ZTdHJpbmdzID0gdHJpbW1lZFN0cmluZy5zcGxpdCgvW1xccy1dLylcblxuICBjb25zdCBzcGxpdFN0cmluZ3NBcnJheSA9IFtdXG4gIGFycmF5T2ZTdHJpbmdzLmZvckVhY2goKHRlbXBTdHJpbmcpID0+IHtcbiAgICBpZiAodGVtcFN0cmluZyAhPT0gJycpIHtcbiAgICAgIGNvbnN0IHNwbGl0V29yZHMgPSB0ZW1wU3RyaW5nLnNwbGl0KC8oPz1bQS1aXSkvKS5qb2luKCcgJylcbiAgICAgIHNwbGl0U3RyaW5nc0FycmF5LnB1c2goY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHNwbGl0V29yZHMpKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gam9pbldvcmRzID8gc3BsaXRTdHJpbmdzQXJyYXkuam9pbignJykucmVwbGFjZSgvXFxzL2csICcnKSA6IHNwbGl0U3RyaW5nc0FycmF5LmpvaW4oJyAnKVxufVxuXG5jb25zdCBmb3JtYXRMYWJlbHMgPSAoc2x1Zzogc3RyaW5nKTogeyBwbHVyYWw6IHN0cmluZzsgc2luZ3VsYXI6IHN0cmluZyB9ID0+IHtcbiAgY29uc3Qgd29yZHMgPSB0b1dvcmRzKHNsdWcpXG4gIHJldHVybiBpc1BsdXJhbChzbHVnKVxuICAgID8ge1xuICAgICAgICBwbHVyYWw6IHdvcmRzLFxuICAgICAgICBzaW5ndWxhcjogc2luZ3VsYXIod29yZHMpLFxuICAgICAgfVxuICAgIDoge1xuICAgICAgICBwbHVyYWw6IHBsdXJhbGl6ZSh3b3JkcyksXG4gICAgICAgIHNpbmd1bGFyOiB3b3JkcyxcbiAgICAgIH1cbn1cblxuY29uc3QgZm9ybWF0TmFtZXMgPSAoc2x1Zzogc3RyaW5nKTogeyBwbHVyYWw6IHN0cmluZzsgc2luZ3VsYXI6IHN0cmluZyB9ID0+IHtcbiAgY29uc3Qgd29yZHMgPSB0b1dvcmRzKHNsdWcsIHRydWUpXG4gIHJldHVybiBpc1BsdXJhbChzbHVnKVxuICAgID8ge1xuICAgICAgICBwbHVyYWw6IHdvcmRzLFxuICAgICAgICBzaW5ndWxhcjogc2luZ3VsYXIod29yZHMpLFxuICAgICAgfVxuICAgIDoge1xuICAgICAgICBwbHVyYWw6IHBsdXJhbGl6ZSh3b3JkcyksXG4gICAgICAgIHNpbmd1bGFyOiB3b3JkcyxcbiAgICAgIH1cbn1cblxuZXhwb3J0IHsgZm9ybWF0TGFiZWxzLCBmb3JtYXROYW1lcywgdG9Xb3JkcyB9XG4iXSwibmFtZXMiOlsiZm9ybWF0TGFiZWxzIiwiZm9ybWF0TmFtZXMiLCJ0b1dvcmRzIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImlucHV0U3RyaW5nIiwiam9pbldvcmRzIiwibm90TnVsbFN0cmluZyIsInRyaW1tZWRTdHJpbmciLCJ0cmltIiwiYXJyYXlPZlN0cmluZ3MiLCJzcGxpdCIsInNwbGl0U3RyaW5nc0FycmF5IiwiZm9yRWFjaCIsInRlbXBTdHJpbmciLCJzcGxpdFdvcmRzIiwiam9pbiIsInB1c2giLCJyZXBsYWNlIiwic2x1ZyIsIndvcmRzIiwiaXNQbHVyYWwiLCJwbHVyYWwiLCJzaW5ndWxhciIsInBsdXJhbGl6ZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBK0NTQSxZQUFZO2VBQVpBOztJQUFjQyxXQUFXO2VBQVhBOztJQUFhQyxPQUFPO2VBQVBBOzs7bUVBL0NVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsTUFBTUMsd0JBQXdCLENBQUNDLFNBQzdCQSxPQUFPQyxNQUFNLENBQUMsR0FBR0MsV0FBVyxLQUFLRixPQUFPRyxLQUFLLENBQUM7QUFFaEQsTUFBTUwsVUFBVSxDQUFDTSxhQUFxQkMsWUFBWSxLQUFLO0lBQ3JELE1BQU1DLGdCQUFnQkYsZUFBZTtJQUNyQyxNQUFNRyxnQkFBZ0JELGNBQWNFLElBQUk7SUFDeEMsTUFBTUMsaUJBQWlCRixjQUFjRyxLQUFLLENBQUM7SUFFM0MsTUFBTUMsb0JBQW9CLEVBQUU7SUFDNUJGLGVBQWVHLE9BQU8sQ0FBQyxDQUFDQztRQUN0QixJQUFJQSxlQUFlLElBQUk7WUFDckIsTUFBTUMsYUFBYUQsV0FBV0gsS0FBSyxDQUFDLGFBQWFLLElBQUksQ0FBQztZQUN0REosa0JBQWtCSyxJQUFJLENBQUNqQixzQkFBc0JlO1FBQy9DO0lBQ0Y7SUFFQSxPQUFPVCxZQUFZTSxrQkFBa0JJLElBQUksQ0FBQyxJQUFJRSxPQUFPLENBQUMsT0FBTyxNQUFNTixrQkFBa0JJLElBQUksQ0FBQztBQUM1RjtBQUVBLE1BQU1uQixlQUFlLENBQUNzQjtJQUNwQixNQUFNQyxRQUFRckIsUUFBUW9CO0lBQ3RCLE9BQU9FLElBQUFBLG1CQUFRLEVBQUNGLFFBQ1o7UUFDRUcsUUFBUUY7UUFDUkcsVUFBVUEsSUFBQUEsbUJBQVEsRUFBQ0g7SUFDckIsSUFDQTtRQUNFRSxRQUFRRSxJQUFBQSxrQkFBUyxFQUFDSjtRQUNsQkcsVUFBVUg7SUFDWjtBQUNOO0FBRUEsTUFBTXRCLGNBQWMsQ0FBQ3FCO0lBQ25CLE1BQU1DLFFBQVFyQixRQUFRb0IsTUFBTTtJQUM1QixPQUFPRSxJQUFBQSxtQkFBUSxFQUFDRixRQUNaO1FBQ0VHLFFBQVFGO1FBQ1JHLFVBQVVBLElBQUFBLG1CQUFRLEVBQUNIO0lBQ3JCLElBQ0E7UUFDRUUsUUFBUUUsSUFBQUEsa0JBQVMsRUFBQ0o7UUFDbEJHLFVBQVVIO0lBQ1o7QUFDTiJ9