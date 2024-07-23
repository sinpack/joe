"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return registerFirstUserHandler;
    }
});
const _registerFirstUser = /*#__PURE__*/ _interop_require_default(require("../operations/registerFirstUser"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function registerFirstUserHandler(req, res, next) {
    try {
        const firstUser = await (0, _registerFirstUser.default)({
            collection: req.collection,
            data: req.body,
            req,
            res
        });
        return res.status(201).json(firstUser);
    } catch (error) {
        return next(error);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy9yZWdpc3RlckZpcnN0VXNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRGdW5jdGlvbiwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcydcblxuaW1wb3J0IHJlZ2lzdGVyRmlyc3RVc2VyIGZyb20gJy4uL29wZXJhdGlvbnMvcmVnaXN0ZXJGaXJzdFVzZXInXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyRmlyc3RVc2VySGFuZGxlcihcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdCxcbiAgcmVzOiBSZXNwb25zZSxcbiAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmaXJzdFVzZXIgPSBhd2FpdCByZWdpc3RlckZpcnN0VXNlcih7XG4gICAgICBjb2xsZWN0aW9uOiByZXEuY29sbGVjdGlvbixcbiAgICAgIGRhdGE6IHJlcS5ib2R5LFxuICAgICAgcmVxLFxuICAgICAgcmVzLFxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oZmlyc3RVc2VyKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXh0KGVycm9yKVxuICB9XG59XG4iXSwibmFtZXMiOlsicmVnaXN0ZXJGaXJzdFVzZXJIYW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImZpcnN0VXNlciIsInJlZ2lzdGVyRmlyc3RVc2VyIiwiY29sbGVjdGlvbiIsImRhdGEiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBTUE7OztlQUE4QkE7OzswRUFGQTs7Ozs7O0FBRWYsZUFBZUEseUJBQzVCQyxHQUFtQixFQUNuQkMsR0FBYSxFQUNiQyxJQUFrQjtJQUVsQixJQUFJO1FBQ0YsTUFBTUMsWUFBWSxNQUFNQyxJQUFBQSwwQkFBaUIsRUFBQztZQUN4Q0MsWUFBWUwsSUFBSUssVUFBVTtZQUMxQkMsTUFBTU4sSUFBSU8sSUFBSTtZQUNkUDtZQUNBQztRQUNGO1FBRUEsT0FBT0EsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ047SUFDOUIsRUFBRSxPQUFPTyxPQUFPO1FBQ2QsT0FBT1IsS0FBS1E7SUFDZDtBQUNGIn0=