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
async function initAdmin(ctx) {
    if (!ctx.config.admin.disable) {
        if (process.env.NODE_ENV === 'production') {
            ctx.express.use(ctx.config.routes.admin, await ctx.config.admin.bundler.serve(ctx));
        } else {
            ctx.express.use(ctx.config.routes.admin, await ctx.config.admin.bundler.dev(ctx));
        }
    }
}
const _default = initAdmin;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHByZXNzL2FkbWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUGF5bG9hZCB9IGZyb20gJy4uL3BheWxvYWQnXG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRBZG1pbihjdHg6IFBheWxvYWQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKCFjdHguY29uZmlnLmFkbWluLmRpc2FibGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY3R4LmV4cHJlc3MudXNlKGN0eC5jb25maWcucm91dGVzLmFkbWluLCBhd2FpdCBjdHguY29uZmlnLmFkbWluLmJ1bmRsZXIuc2VydmUoY3R4KSlcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LmV4cHJlc3MudXNlKGN0eC5jb25maWcucm91dGVzLmFkbWluLCBhd2FpdCBjdHguY29uZmlnLmFkbWluLmJ1bmRsZXIuZGV2KGN0eCkpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRBZG1pblxuIl0sIm5hbWVzIjpbImluaXRBZG1pbiIsImN0eCIsImNvbmZpZyIsImFkbWluIiwiZGlzYWJsZSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImV4cHJlc3MiLCJ1c2UiLCJyb3V0ZXMiLCJidW5kbGVyIiwic2VydmUiLCJkZXYiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFZQTs7O2VBQUE7OztBQVZBLGVBQWVBLFVBQVVDLEdBQVk7SUFDbkMsSUFBSSxDQUFDQSxJQUFJQyxNQUFNLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxFQUFFO1FBQzdCLElBQUlDLFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUSxLQUFLLGNBQWM7WUFDekNOLElBQUlPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixJQUFJQyxNQUFNLENBQUNRLE1BQU0sQ0FBQ1AsS0FBSyxFQUFFLE1BQU1GLElBQUlDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDUSxPQUFPLENBQUNDLEtBQUssQ0FBQ1g7UUFDaEYsT0FBTztZQUNMQSxJQUFJTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsSUFBSUMsTUFBTSxDQUFDUSxNQUFNLENBQUNQLEtBQUssRUFBRSxNQUFNRixJQUFJQyxNQUFNLENBQUNDLEtBQUssQ0FBQ1EsT0FBTyxDQUFDRSxHQUFHLENBQUNaO1FBQzlFO0lBQ0Y7QUFDRjtNQUVBLFdBQWVEIn0=