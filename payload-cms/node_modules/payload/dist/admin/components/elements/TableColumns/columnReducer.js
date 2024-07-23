"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "columnReducer", {
    enumerable: true,
    get: function() {
        return columnReducer;
    }
});
const _buildColumns = /*#__PURE__*/ _interop_require_default(require("./buildColumns"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const columnReducer = (state, action)=>{
    switch(action.type){
        case 'toggle':
            {
                const { cellProps, collection, column } = action.payload;
                const withToggledColumn = state.map((col)=>{
                    if (col.name === column) {
                        return {
                            ...col,
                            active: !col.active
                        };
                    }
                    return col;
                });
                return (0, _buildColumns.default)({
                    cellProps,
                    collection,
                    columns: withToggledColumn
                });
            }
        case 'move':
            {
                const { cellProps, collection, fromIndex, toIndex } = action.payload;
                const withMovedColumn = [
                    ...state
                ];
                const [columnToMove] = withMovedColumn.splice(fromIndex, 1);
                withMovedColumn.splice(toIndex, 0, columnToMove);
                return (0, _buildColumns.default)({
                    cellProps,
                    collection,
                    columns: withMovedColumn
                });
            }
        case 'set':
            {
                const { cellProps, collection, columns } = action.payload;
                return (0, _buildColumns.default)({
                    cellProps,
                    collection,
                    columns
                });
            }
        default:
            return state;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1RhYmxlQ29sdW1ucy9jb2x1bW5SZWR1Y2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUHJvcHMgYXMgQ2VsbFByb3BzIH0gZnJvbSAnLi4vLi4vdmlld3MvY29sbGVjdGlvbnMvTGlzdC9DZWxsL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBDb2x1bW4gfSBmcm9tICcuLi9UYWJsZS90eXBlcydcblxuaW1wb3J0IGJ1aWxkQ29sdW1ucyBmcm9tICcuL2J1aWxkQ29sdW1ucydcblxudHlwZSBUT0dHTEUgPSB7XG4gIHBheWxvYWQ6IHtcbiAgICBjZWxsUHJvcHM6IFBhcnRpYWw8Q2VsbFByb3BzPltdXG4gICAgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xuICAgIGNvbHVtbjogc3RyaW5nXG4gIH1cbiAgdHlwZTogJ3RvZ2dsZSdcbn1cblxudHlwZSBTRVQgPSB7XG4gIHBheWxvYWQ6IHtcbiAgICBjZWxsUHJvcHM6IFBhcnRpYWw8Q2VsbFByb3BzPltdXG4gICAgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xuICAgIGNvbHVtbnM6IFBpY2s8Q29sdW1uLCAnYWNjZXNzb3InIHwgJ2FjdGl2ZSc+W11cbiAgfVxuICB0eXBlOiAnc2V0J1xufVxuXG50eXBlIE1PVkUgPSB7XG4gIHBheWxvYWQ6IHtcbiAgICBjZWxsUHJvcHM6IFBhcnRpYWw8Q2VsbFByb3BzPltdXG4gICAgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xuICAgIGZyb21JbmRleDogbnVtYmVyXG4gICAgdG9JbmRleDogbnVtYmVyXG4gIH1cbiAgdHlwZTogJ21vdmUnXG59XG5cbmV4cG9ydCB0eXBlIEFjdGlvbiA9IE1PVkUgfCBTRVQgfCBUT0dHTEVcblxuZXhwb3J0IGNvbnN0IGNvbHVtblJlZHVjZXIgPSAoc3RhdGU6IENvbHVtbltdLCBhY3Rpb246IEFjdGlvbik6IENvbHVtbltdID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ3RvZ2dsZSc6IHtcbiAgICAgIGNvbnN0IHsgY2VsbFByb3BzLCBjb2xsZWN0aW9uLCBjb2x1bW4gfSA9IGFjdGlvbi5wYXlsb2FkXG5cbiAgICAgIGNvbnN0IHdpdGhUb2dnbGVkQ29sdW1uID0gc3RhdGUubWFwKChjb2wpID0+IHtcbiAgICAgICAgaWYgKGNvbC5uYW1lID09PSBjb2x1bW4pIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY29sLFxuICAgICAgICAgICAgYWN0aXZlOiAhY29sLmFjdGl2ZSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gYnVpbGRDb2x1bW5zKHtcbiAgICAgICAgY2VsbFByb3BzLFxuICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICBjb2x1bW5zOiB3aXRoVG9nZ2xlZENvbHVtbixcbiAgICAgIH0pXG4gICAgfVxuICAgIGNhc2UgJ21vdmUnOiB7XG4gICAgICBjb25zdCB7IGNlbGxQcm9wcywgY29sbGVjdGlvbiwgZnJvbUluZGV4LCB0b0luZGV4IH0gPSBhY3Rpb24ucGF5bG9hZFxuXG4gICAgICBjb25zdCB3aXRoTW92ZWRDb2x1bW4gPSBbLi4uc3RhdGVdXG4gICAgICBjb25zdCBbY29sdW1uVG9Nb3ZlXSA9IHdpdGhNb3ZlZENvbHVtbi5zcGxpY2UoZnJvbUluZGV4LCAxKVxuICAgICAgd2l0aE1vdmVkQ29sdW1uLnNwbGljZSh0b0luZGV4LCAwLCBjb2x1bW5Ub01vdmUpXG5cbiAgICAgIHJldHVybiBidWlsZENvbHVtbnMoe1xuICAgICAgICBjZWxsUHJvcHMsXG4gICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgIGNvbHVtbnM6IHdpdGhNb3ZlZENvbHVtbixcbiAgICAgIH0pXG4gICAgfVxuICAgIGNhc2UgJ3NldCc6IHtcbiAgICAgIGNvbnN0IHsgY2VsbFByb3BzLCBjb2xsZWN0aW9uLCBjb2x1bW5zIH0gPSBhY3Rpb24ucGF5bG9hZFxuXG4gICAgICByZXR1cm4gYnVpbGRDb2x1bW5zKHtcbiAgICAgICAgY2VsbFByb3BzLFxuICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICBjb2x1bW5zLFxuICAgICAgfSlcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG4iXSwibmFtZXMiOlsiY29sdW1uUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImNlbGxQcm9wcyIsImNvbGxlY3Rpb24iLCJjb2x1bW4iLCJwYXlsb2FkIiwid2l0aFRvZ2dsZWRDb2x1bW4iLCJtYXAiLCJjb2wiLCJuYW1lIiwiYWN0aXZlIiwiYnVpbGRDb2x1bW5zIiwiY29sdW1ucyIsImZyb21JbmRleCIsInRvSW5kZXgiLCJ3aXRoTW92ZWRDb2x1bW4iLCJjb2x1bW5Ub01vdmUiLCJzcGxpY2UiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBb0NhQTs7O2VBQUFBOzs7cUVBaENZOzs7Ozs7QUFnQ2xCLE1BQU1BLGdCQUFnQixDQUFDQyxPQUFpQkM7SUFDN0MsT0FBUUEsT0FBT0MsSUFBSTtRQUNqQixLQUFLO1lBQVU7Z0JBQ2IsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsTUFBTSxFQUFFLEdBQUdKLE9BQU9LLE9BQU87Z0JBRXhELE1BQU1DLG9CQUFvQlAsTUFBTVEsR0FBRyxDQUFDLENBQUNDO29CQUNuQyxJQUFJQSxJQUFJQyxJQUFJLEtBQUtMLFFBQVE7d0JBQ3ZCLE9BQU87NEJBQ0wsR0FBR0ksR0FBRzs0QkFDTkUsUUFBUSxDQUFDRixJQUFJRSxNQUFNO3dCQUNyQjtvQkFDRjtvQkFFQSxPQUFPRjtnQkFDVDtnQkFFQSxPQUFPRyxJQUFBQSxxQkFBWSxFQUFDO29CQUNsQlQ7b0JBQ0FDO29CQUNBUyxTQUFTTjtnQkFDWDtZQUNGO1FBQ0EsS0FBSztZQUFRO2dCQUNYLE1BQU0sRUFBRUosU0FBUyxFQUFFQyxVQUFVLEVBQUVVLFNBQVMsRUFBRUMsT0FBTyxFQUFFLEdBQUdkLE9BQU9LLE9BQU87Z0JBRXBFLE1BQU1VLGtCQUFrQjt1QkFBSWhCO2lCQUFNO2dCQUNsQyxNQUFNLENBQUNpQixhQUFhLEdBQUdELGdCQUFnQkUsTUFBTSxDQUFDSixXQUFXO2dCQUN6REUsZ0JBQWdCRSxNQUFNLENBQUNILFNBQVMsR0FBR0U7Z0JBRW5DLE9BQU9MLElBQUFBLHFCQUFZLEVBQUM7b0JBQ2xCVDtvQkFDQUM7b0JBQ0FTLFNBQVNHO2dCQUNYO1lBQ0Y7UUFDQSxLQUFLO1lBQU87Z0JBQ1YsTUFBTSxFQUFFYixTQUFTLEVBQUVDLFVBQVUsRUFBRVMsT0FBTyxFQUFFLEdBQUdaLE9BQU9LLE9BQU87Z0JBRXpELE9BQU9NLElBQUFBLHFCQUFZLEVBQUM7b0JBQ2xCVDtvQkFDQUM7b0JBQ0FTO2dCQUNGO1lBQ0Y7UUFDQTtZQUNFLE9BQU9iO0lBQ1g7QUFDRiJ9