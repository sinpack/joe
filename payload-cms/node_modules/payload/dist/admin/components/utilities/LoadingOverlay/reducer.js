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
    defaultLoadingOverlayState: function() {
        return defaultLoadingOverlayState;
    },
    reducer: function() {
        return reducer;
    }
});
const defaultLoadingOverlayState = {
    isLoading: false,
    loaders: [],
    loadingText: '',
    overlayType: null
};
const reducer = (state, action)=>{
    const loadersCopy = [
        ...state.loaders
    ];
    const { key = 'user', loadingText, type = 'fullscreen' } = action.payload;
    if (action.type === 'add') {
        loadersCopy.push({
            key,
            loadingText,
            type
        });
    } else if (action.type === 'remove') {
        const index = loadersCopy.findIndex((item)=>item.key === key && item.type === type);
        loadersCopy.splice(index, 1);
    }
    const nextLoader = loadersCopy?.length > 0 ? loadersCopy[loadersCopy.length - 1] : null;
    return {
        isLoading: Boolean(nextLoader),
        loaders: loadersCopy,
        loadingText: nextLoader?.loadingText || state?.loadingText,
        overlayType: nextLoader?.type || state?.overlayType
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9Mb2FkaW5nT3ZlcmxheS9yZWR1Y2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQWN0aW9uLCBTdGF0ZSB9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9hZGluZ092ZXJsYXlTdGF0ZSA9IHtcbiAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgbG9hZGVyczogW10sXG4gIGxvYWRpbmdUZXh0OiAnJyxcbiAgb3ZlcmxheVR5cGU6IG51bGwsXG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlOiBTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pOiBTdGF0ZSA9PiB7XG4gIGNvbnN0IGxvYWRlcnNDb3B5ID0gWy4uLnN0YXRlLmxvYWRlcnNdXG4gIGNvbnN0IHsga2V5ID0gJ3VzZXInLCBsb2FkaW5nVGV4dCwgdHlwZSA9ICdmdWxsc2NyZWVuJyB9ID0gYWN0aW9uLnBheWxvYWRcblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdhZGQnKSB7XG4gICAgbG9hZGVyc0NvcHkucHVzaCh7IGtleSwgbG9hZGluZ1RleHQsIHR5cGUgfSlcbiAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ3JlbW92ZScpIHtcbiAgICBjb25zdCBpbmRleCA9IGxvYWRlcnNDb3B5LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGtleSAmJiBpdGVtLnR5cGUgPT09IHR5cGUpXG4gICAgbG9hZGVyc0NvcHkuc3BsaWNlKGluZGV4LCAxKVxuICB9XG5cbiAgY29uc3QgbmV4dExvYWRlciA9IGxvYWRlcnNDb3B5Py5sZW5ndGggPiAwID8gbG9hZGVyc0NvcHlbbG9hZGVyc0NvcHkubGVuZ3RoIC0gMV0gOiBudWxsXG5cbiAgcmV0dXJuIHtcbiAgICBpc0xvYWRpbmc6IEJvb2xlYW4obmV4dExvYWRlciksXG4gICAgbG9hZGVyczogbG9hZGVyc0NvcHksXG4gICAgbG9hZGluZ1RleHQ6IG5leHRMb2FkZXI/LmxvYWRpbmdUZXh0IHx8IHN0YXRlPy5sb2FkaW5nVGV4dCxcbiAgICBvdmVybGF5VHlwZTogbmV4dExvYWRlcj8udHlwZSB8fCBzdGF0ZT8ub3ZlcmxheVR5cGUsXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJkZWZhdWx0TG9hZGluZ092ZXJsYXlTdGF0ZSIsInJlZHVjZXIiLCJpc0xvYWRpbmciLCJsb2FkZXJzIiwibG9hZGluZ1RleHQiLCJvdmVybGF5VHlwZSIsInN0YXRlIiwiYWN0aW9uIiwibG9hZGVyc0NvcHkiLCJrZXkiLCJ0eXBlIiwicGF5bG9hZCIsInB1c2giLCJpbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJuZXh0TG9hZGVyIiwibGVuZ3RoIiwiQm9vbGVhbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUVhQSwwQkFBMEI7ZUFBMUJBOztJQU9BQyxPQUFPO2VBQVBBOzs7QUFQTixNQUFNRCw2QkFBNkI7SUFDeENFLFdBQVc7SUFDWEMsU0FBUyxFQUFFO0lBQ1hDLGFBQWE7SUFDYkMsYUFBYTtBQUNmO0FBRU8sTUFBTUosVUFBVSxDQUFDSyxPQUFjQztJQUNwQyxNQUFNQyxjQUFjO1dBQUlGLE1BQU1ILE9BQU87S0FBQztJQUN0QyxNQUFNLEVBQUVNLE1BQU0sTUFBTSxFQUFFTCxXQUFXLEVBQUVNLE9BQU8sWUFBWSxFQUFFLEdBQUdILE9BQU9JLE9BQU87SUFFekUsSUFBSUosT0FBT0csSUFBSSxLQUFLLE9BQU87UUFDekJGLFlBQVlJLElBQUksQ0FBQztZQUFFSDtZQUFLTDtZQUFhTTtRQUFLO0lBQzVDLE9BQU8sSUFBSUgsT0FBT0csSUFBSSxLQUFLLFVBQVU7UUFDbkMsTUFBTUcsUUFBUUwsWUFBWU0sU0FBUyxDQUFDLENBQUNDLE9BQVNBLEtBQUtOLEdBQUcsS0FBS0EsT0FBT00sS0FBS0wsSUFBSSxLQUFLQTtRQUNoRkYsWUFBWVEsTUFBTSxDQUFDSCxPQUFPO0lBQzVCO0lBRUEsTUFBTUksYUFBYVQsYUFBYVUsU0FBUyxJQUFJVixXQUFXLENBQUNBLFlBQVlVLE1BQU0sR0FBRyxFQUFFLEdBQUc7SUFFbkYsT0FBTztRQUNMaEIsV0FBV2lCLFFBQVFGO1FBQ25CZCxTQUFTSztRQUNUSixhQUFhYSxZQUFZYixlQUFlRSxPQUFPRjtRQUMvQ0MsYUFBYVksWUFBWVAsUUFBUUosT0FBT0Q7SUFDMUM7QUFDRiJ9