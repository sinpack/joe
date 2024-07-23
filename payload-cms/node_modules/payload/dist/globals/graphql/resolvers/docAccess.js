"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "docAccessResolver", {
    enumerable: true,
    get: function() {
        return docAccessResolver;
    }
});
const _isolateObjectProperty = /*#__PURE__*/ _interop_require_default(require("../../../utilities/isolateObjectProperty"));
const _docAccess = require("../../operations/docAccess");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function docAccessResolver(global) {
    async function resolver(_, context) {
        return (0, _docAccess.docAccess)({
            globalConfig: global,
            req: (0, _isolateObjectProperty.default)(context.req, 'transactionID')
        });
    }
    return resolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL2dyYXBocWwvcmVzb2x2ZXJzL2RvY0FjY2Vzcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IENvbGxlY3Rpb25QZXJtaXNzaW9uLCBHbG9iYWxQZXJtaXNzaW9uIH0gZnJvbSAnLi4vLi4vLi4vYXV0aCdcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnXG5cbmltcG9ydCBpc29sYXRlT2JqZWN0UHJvcGVydHkgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2lzb2xhdGVPYmplY3RQcm9wZXJ0eSdcbmltcG9ydCB7IGRvY0FjY2VzcyB9IGZyb20gJy4uLy4uL29wZXJhdGlvbnMvZG9jQWNjZXNzJ1xuXG5leHBvcnQgdHlwZSBSZXNvbHZlciA9IChcbiAgXzogdW5rbm93bixcbiAgY29udGV4dDoge1xuICAgIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgICByZXM6IFJlc3BvbnNlXG4gIH0sXG4pID0+IFByb21pc2U8Q29sbGVjdGlvblBlcm1pc3Npb24gfCBHbG9iYWxQZXJtaXNzaW9uPlxuXG5leHBvcnQgZnVuY3Rpb24gZG9jQWNjZXNzUmVzb2x2ZXIoZ2xvYmFsOiBTYW5pdGl6ZWRHbG9iYWxDb25maWcpOiBSZXNvbHZlciB7XG4gIGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVyKF8sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gZG9jQWNjZXNzKHtcbiAgICAgIGdsb2JhbENvbmZpZzogZ2xvYmFsLFxuICAgICAgcmVxOiBpc29sYXRlT2JqZWN0UHJvcGVydHk8UGF5bG9hZFJlcXVlc3Q+KGNvbnRleHQucmVxLCAndHJhbnNhY3Rpb25JRCcpLFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gcmVzb2x2ZXJcbn1cbiJdLCJuYW1lcyI6WyJkb2NBY2Nlc3NSZXNvbHZlciIsImdsb2JhbCIsInJlc29sdmVyIiwiXyIsImNvbnRleHQiLCJkb2NBY2Nlc3MiLCJnbG9iYWxDb25maWciLCJyZXEiLCJpc29sYXRlT2JqZWN0UHJvcGVydHkiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFlZ0JBOzs7ZUFBQUE7Ozs4RUFYa0I7MkJBQ1I7Ozs7OztBQVVuQixTQUFTQSxrQkFBa0JDLE1BQTZCO0lBQzdELGVBQWVDLFNBQVNDLENBQUMsRUFBRUMsT0FBTztRQUNoQyxPQUFPQyxJQUFBQSxvQkFBUyxFQUFDO1lBQ2ZDLGNBQWNMO1lBQ2RNLEtBQUtDLElBQUFBLDhCQUFxQixFQUFpQkosUUFBUUcsR0FBRyxFQUFFO1FBQzFEO0lBQ0Y7SUFFQSxPQUFPTDtBQUNUIn0=