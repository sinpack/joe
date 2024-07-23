"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "reducer", {
    enumerable: true,
    get: function() {
        return reducer;
    }
});
function reducer(state, action) {
    switch(action.type){
        case 'REQUEST':
            {
                const newState = {
                    ...state
                };
                action.docs.forEach(({ relationTo, value })=>{
                    if (typeof newState[relationTo] !== 'object') {
                        newState[relationTo] = {};
                    }
                    newState[relationTo][value] = null;
                });
                return newState;
            }
        case 'ADD_LOADED':
            {
                const newState = {
                    ...state
                };
                if (typeof newState[action.relationTo] !== 'object') {
                    newState[action.relationTo] = {};
                }
                const unreturnedIDs = [
                    ...action.idsToLoad
                ];
                if (Array.isArray(action.docs)) {
                    action.docs.forEach((doc)=>{
                        unreturnedIDs.splice(unreturnedIDs.indexOf(doc.id), 1);
                        newState[action.relationTo][doc.id] = doc;
                    });
                }
                unreturnedIDs.forEach((id)=>{
                    newState[action.relationTo][id] = false;
                });
                return newState;
            }
        default:
            {
                return state;
            }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvUmVsYXRpb25zaGlwUHJvdmlkZXIvcmVkdWNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFR5cGVXaXRoSUQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IERvY3VtZW50cyB9IGZyb20gJy4vaW5kZXgnXG5cbnR5cGUgUmVxdWVzdERvY3VtZW50cyA9IHtcbiAgZG9jczogeyByZWxhdGlvblRvOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfVtdXG4gIHR5cGU6ICdSRVFVRVNUJ1xufVxuXG50eXBlIEFkZExvYWRlZERvY3VtZW50cyA9IHtcbiAgZG9jczogVHlwZVdpdGhJRFtdXG4gIGlkc1RvTG9hZDogKG51bWJlciB8IHN0cmluZylbXVxuICByZWxhdGlvblRvOiBzdHJpbmdcbiAgdHlwZTogJ0FERF9MT0FERUQnXG59XG5cbnR5cGUgQWN0aW9uID0gQWRkTG9hZGVkRG9jdW1lbnRzIHwgUmVxdWVzdERvY3VtZW50c1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZTogRG9jdW1lbnRzLCBhY3Rpb246IEFjdGlvbik6IERvY3VtZW50cyB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdSRVFVRVNUJzoge1xuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7IC4uLnN0YXRlIH1cblxuICAgICAgYWN0aW9uLmRvY3MuZm9yRWFjaCgoeyByZWxhdGlvblRvLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbmV3U3RhdGVbcmVsYXRpb25Ub10gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgbmV3U3RhdGVbcmVsYXRpb25Ub10gPSB7fVxuICAgICAgICB9XG4gICAgICAgIG5ld1N0YXRlW3JlbGF0aW9uVG9dW3ZhbHVlXSA9IG51bGxcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBuZXdTdGF0ZVxuICAgIH1cblxuICAgIGNhc2UgJ0FERF9MT0FERUQnOiB7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfVxuICAgICAgaWYgKHR5cGVvZiBuZXdTdGF0ZVthY3Rpb24ucmVsYXRpb25Ub10gIT09ICdvYmplY3QnKSB7XG4gICAgICAgIG5ld1N0YXRlW2FjdGlvbi5yZWxhdGlvblRvXSA9IHt9XG4gICAgICB9XG4gICAgICBjb25zdCB1bnJldHVybmVkSURzID0gWy4uLmFjdGlvbi5pZHNUb0xvYWRdXG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFjdGlvbi5kb2NzKSkge1xuICAgICAgICBhY3Rpb24uZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICB1bnJldHVybmVkSURzLnNwbGljZSh1bnJldHVybmVkSURzLmluZGV4T2YoZG9jLmlkKSwgMSlcbiAgICAgICAgICBuZXdTdGF0ZVthY3Rpb24ucmVsYXRpb25Ub11bZG9jLmlkXSA9IGRvY1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICB1bnJldHVybmVkSURzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgIG5ld1N0YXRlW2FjdGlvbi5yZWxhdGlvblRvXVtpZF0gPSBmYWxzZVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG5ld1N0YXRlXG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIm5ld1N0YXRlIiwiZG9jcyIsImZvckVhY2giLCJyZWxhdGlvblRvIiwidmFsdWUiLCJ1bnJldHVybmVkSURzIiwiaWRzVG9Mb2FkIiwiQXJyYXkiLCJpc0FycmF5IiwiZG9jIiwic3BsaWNlIiwiaW5kZXhPZiIsImlkIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBaUJnQkE7OztlQUFBQTs7O0FBQVQsU0FBU0EsUUFBUUMsS0FBZ0IsRUFBRUMsTUFBYztJQUN0RCxPQUFRQSxPQUFPQyxJQUFJO1FBQ2pCLEtBQUs7WUFBVztnQkFDZCxNQUFNQyxXQUFXO29CQUFFLEdBQUdILEtBQUs7Z0JBQUM7Z0JBRTVCQyxPQUFPRyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFO29CQUN4QyxJQUFJLE9BQU9KLFFBQVEsQ0FBQ0csV0FBVyxLQUFLLFVBQVU7d0JBQzVDSCxRQUFRLENBQUNHLFdBQVcsR0FBRyxDQUFDO29CQUMxQjtvQkFDQUgsUUFBUSxDQUFDRyxXQUFXLENBQUNDLE1BQU0sR0FBRztnQkFDaEM7Z0JBRUEsT0FBT0o7WUFDVDtRQUVBLEtBQUs7WUFBYztnQkFDakIsTUFBTUEsV0FBVztvQkFBRSxHQUFHSCxLQUFLO2dCQUFDO2dCQUM1QixJQUFJLE9BQU9HLFFBQVEsQ0FBQ0YsT0FBT0ssVUFBVSxDQUFDLEtBQUssVUFBVTtvQkFDbkRILFFBQVEsQ0FBQ0YsT0FBT0ssVUFBVSxDQUFDLEdBQUcsQ0FBQztnQkFDakM7Z0JBQ0EsTUFBTUUsZ0JBQWdCO3VCQUFJUCxPQUFPUSxTQUFTO2lCQUFDO2dCQUUzQyxJQUFJQyxNQUFNQyxPQUFPLENBQUNWLE9BQU9HLElBQUksR0FBRztvQkFDOUJILE9BQU9HLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUNPO3dCQUNuQkosY0FBY0ssTUFBTSxDQUFDTCxjQUFjTSxPQUFPLENBQUNGLElBQUlHLEVBQUUsR0FBRzt3QkFDcERaLFFBQVEsQ0FBQ0YsT0FBT0ssVUFBVSxDQUFDLENBQUNNLElBQUlHLEVBQUUsQ0FBQyxHQUFHSDtvQkFDeEM7Z0JBQ0Y7Z0JBRUFKLGNBQWNILE9BQU8sQ0FBQyxDQUFDVTtvQkFDckJaLFFBQVEsQ0FBQ0YsT0FBT0ssVUFBVSxDQUFDLENBQUNTLEdBQUcsR0FBRztnQkFDcEM7Z0JBRUEsT0FBT1o7WUFDVDtRQUVBO1lBQVM7Z0JBQ1AsT0FBT0g7WUFDVDtJQUNGO0FBQ0YifQ==