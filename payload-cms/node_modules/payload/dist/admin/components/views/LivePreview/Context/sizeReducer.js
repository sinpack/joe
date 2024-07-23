// export const sizeReducer: (state, action) => {
//   switch (action.type) {
//     case 'width':
//       return { ...state, width: action.value }
//     case 'height':
//       return { ...state, height: action.value }
//     default:
//       return { ...state, ...(action?.value || {}) }
//   }
// },
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "sizeReducer", {
    enumerable: true,
    get: function() {
        return sizeReducer;
    }
});
const sizeReducer = (state, action)=>{
    switch(action.type){
        case 'width':
            return {
                ...state,
                width: action.value
            };
        case 'height':
            return {
                ...state,
                height: action.value
            };
        default:
            return {
                ...state,
                ...action?.value || {}
            };
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0xpdmVQcmV2aWV3L0NvbnRleHQvc2l6ZVJlZHVjZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXhwb3J0IGNvbnN0IHNpemVSZWR1Y2VyOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuLy8gICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4vLyAgICAgY2FzZSAnd2lkdGgnOlxuLy8gICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHdpZHRoOiBhY3Rpb24udmFsdWUgfVxuLy8gICAgIGNhc2UgJ2hlaWdodCc6XG4vLyAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaGVpZ2h0OiBhY3Rpb24udmFsdWUgfVxuLy8gICAgIGRlZmF1bHQ6XG4vLyAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uKGFjdGlvbj8udmFsdWUgfHwge30pIH1cbi8vICAgfVxuLy8gfSxcblxudHlwZSBTaXplUmVkdWNlclN0YXRlID0ge1xuICBoZWlnaHQ6IG51bWJlclxuICB3aWR0aDogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIFNpemVSZWR1Y2VyQWN0aW9uID1cbiAgfCB7XG4gICAgICB0eXBlOiAnaGVpZ2h0JyB8ICd3aWR0aCdcbiAgICAgIHZhbHVlOiBudW1iZXJcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogJ3Jlc2V0J1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgaGVpZ2h0OiBudW1iZXJcbiAgICAgICAgd2lkdGg6IG51bWJlclxuICAgICAgfVxuICAgIH1cblxuZXhwb3J0IGNvbnN0IHNpemVSZWR1Y2VyID0gKHN0YXRlOiBTaXplUmVkdWNlclN0YXRlLCBhY3Rpb246IFNpemVSZWR1Y2VyQWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICd3aWR0aCc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgd2lkdGg6IGFjdGlvbi52YWx1ZSB9XG4gICAgY2FzZSAnaGVpZ2h0JzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBoZWlnaHQ6IGFjdGlvbi52YWx1ZSB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi4oYWN0aW9uPy52YWx1ZSB8fCB7fSkgfVxuICB9XG59XG4iXSwibmFtZXMiOlsic2l6ZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ3aWR0aCIsInZhbHVlIiwiaGVpZ2h0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQSxpREFBaUQ7QUFDakQsMkJBQTJCO0FBQzNCLG9CQUFvQjtBQUNwQixpREFBaUQ7QUFDakQscUJBQXFCO0FBQ3JCLGtEQUFrRDtBQUNsRCxlQUFlO0FBQ2Ysc0RBQXNEO0FBQ3RELE1BQU07QUFDTixLQUFLOzs7OzsrQkFvQlFBOzs7ZUFBQUE7OztBQUFOLE1BQU1BLGNBQWMsQ0FBQ0MsT0FBeUJDO0lBQ25ELE9BQVFBLE9BQU9DLElBQUk7UUFDakIsS0FBSztZQUNILE9BQU87Z0JBQUUsR0FBR0YsS0FBSztnQkFBRUcsT0FBT0YsT0FBT0csS0FBSztZQUFDO1FBQ3pDLEtBQUs7WUFDSCxPQUFPO2dCQUFFLEdBQUdKLEtBQUs7Z0JBQUVLLFFBQVFKLE9BQU9HLEtBQUs7WUFBQztRQUMxQztZQUNFLE9BQU87Z0JBQUUsR0FBR0osS0FBSztnQkFBRSxHQUFJQyxRQUFRRyxTQUFTLENBQUMsQ0FBQztZQUFFO0lBQ2hEO0FBQ0YifQ==