/* eslint-disable no-param-reassign */ "use strict";
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
    convertArrayToHash: function() {
        return convertArrayToHash;
    },
    convertArrayToObject: function() {
        return convertArrayToObject;
    },
    convertObjectToArray: function() {
        return convertObjectToArray;
    }
});
const convertArrayToObject = (arr, key)=>arr.reduce((obj, item)=>{
        if (key) {
            obj[item[key]] = item;
            return obj;
        }
        obj[item] = {};
        return obj;
    }, {});
const convertObjectToArray = (arr)=>Object.values(arr);
const convertArrayToHash = (arr, key)=>arr.reduce((obj, item, i)=>{
        obj[item[key]] = i;
        return obj;
    }, {});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udmVydERhdGEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmNvbnN0IGNvbnZlcnRBcnJheVRvT2JqZWN0ID0gKGFyciwga2V5KSA9PlxuICBhcnIucmVkdWNlKChvYmosIGl0ZW0pID0+IHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICBvYmpbaXRlbVtrZXldXSA9IGl0ZW1cbiAgICAgIHJldHVybiBvYmpcbiAgICB9XG5cbiAgICBvYmpbaXRlbV0gPSB7fVxuICAgIHJldHVybiBvYmpcbiAgfSwge30pXG5cbmNvbnN0IGNvbnZlcnRPYmplY3RUb0FycmF5ID0gKGFycikgPT4gT2JqZWN0LnZhbHVlcyhhcnIpXG5cbmNvbnN0IGNvbnZlcnRBcnJheVRvSGFzaCA9IChhcnIsIGtleSkgPT5cbiAgYXJyLnJlZHVjZSgob2JqLCBpdGVtLCBpKSA9PiB7XG4gICAgb2JqW2l0ZW1ba2V5XV0gPSBpXG4gICAgcmV0dXJuIG9ialxuICB9LCB7fSlcblxuZXhwb3J0IHsgY29udmVydEFycmF5VG9IYXNoLCBjb252ZXJ0QXJyYXlUb09iamVjdCwgY29udmVydE9iamVjdFRvQXJyYXkgfVxuIl0sIm5hbWVzIjpbImNvbnZlcnRBcnJheVRvSGFzaCIsImNvbnZlcnRBcnJheVRvT2JqZWN0IiwiY29udmVydE9iamVjdFRvQXJyYXkiLCJhcnIiLCJrZXkiLCJyZWR1Y2UiLCJvYmoiLCJpdGVtIiwiT2JqZWN0IiwidmFsdWVzIiwiaSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7Ozs7Ozs7Ozs7SUFvQjNCQSxrQkFBa0I7ZUFBbEJBOztJQUFvQkMsb0JBQW9CO2VBQXBCQTs7SUFBc0JDLG9CQUFvQjtlQUFwQkE7OztBQW5CbkQsTUFBTUQsdUJBQXVCLENBQUNFLEtBQUtDLE1BQ2pDRCxJQUFJRSxNQUFNLENBQUMsQ0FBQ0MsS0FBS0M7UUFDZixJQUFJSCxLQUFLO1lBQ1BFLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDSCxJQUFJLENBQUMsR0FBR0c7WUFDakIsT0FBT0Q7UUFDVDtRQUVBQSxHQUFHLENBQUNDLEtBQUssR0FBRyxDQUFDO1FBQ2IsT0FBT0Q7SUFDVCxHQUFHLENBQUM7QUFFTixNQUFNSix1QkFBdUIsQ0FBQ0MsTUFBUUssT0FBT0MsTUFBTSxDQUFDTjtBQUVwRCxNQUFNSCxxQkFBcUIsQ0FBQ0csS0FBS0MsTUFDL0JELElBQUlFLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxNQUFNRztRQUNyQkosR0FBRyxDQUFDQyxJQUFJLENBQUNILElBQUksQ0FBQyxHQUFHTTtRQUNqQixPQUFPSjtJQUNULEdBQUcsQ0FBQyJ9