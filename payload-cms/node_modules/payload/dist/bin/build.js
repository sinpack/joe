"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "build", {
    enumerable: true,
    get: function() {
        return build;
    }
});
const _load = /*#__PURE__*/ _interop_require_default(require("../config/load"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const build = async ()=>{
    const config = await (0, _load.default)() // Will throw its own error if it fails
    ;
    await config.admin.bundler.build(config);
};
// when build.js is launched directly
if (module.id === require.main.id) {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    build();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW4vYnVpbGQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvYWRDb25maWcgZnJvbSAnLi4vY29uZmlnL2xvYWQnXG5cbmV4cG9ydCBjb25zdCBidWlsZCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgY29uc3QgY29uZmlnID0gYXdhaXQgbG9hZENvbmZpZygpIC8vIFdpbGwgdGhyb3cgaXRzIG93biBlcnJvciBpZiBpdCBmYWlsc1xuXG4gIGF3YWl0IGNvbmZpZy5hZG1pbi5idW5kbGVyLmJ1aWxkKGNvbmZpZylcbn1cblxuLy8gd2hlbiBidWlsZC5qcyBpcyBsYXVuY2hlZCBkaXJlY3RseVxuaWYgKG1vZHVsZS5pZCA9PT0gcmVxdWlyZS5tYWluLmlkKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgYnVpbGQoKVxufVxuIl0sIm5hbWVzIjpbImJ1aWxkIiwiY29uZmlnIiwibG9hZENvbmZpZyIsImFkbWluIiwiYnVuZGxlciIsIm1vZHVsZSIsImlkIiwicmVxdWlyZSIsIm1haW4iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFFYUE7OztlQUFBQTs7OzZEQUZVOzs7Ozs7QUFFaEIsTUFBTUEsUUFBUTtJQUNuQixNQUFNQyxTQUFTLE1BQU1DLElBQUFBLGFBQVUsSUFBRyx1Q0FBdUM7O0lBRXpFLE1BQU1ELE9BQU9FLEtBQUssQ0FBQ0MsT0FBTyxDQUFDSixLQUFLLENBQUNDO0FBQ25DO0FBRUEscUNBQXFDO0FBQ3JDLElBQUlJLE9BQU9DLEVBQUUsS0FBS0MsUUFBUUMsSUFBSSxDQUFDRixFQUFFLEVBQUU7SUFDakMsbUVBQW1FO0lBQ25FTjtBQUNGIn0=