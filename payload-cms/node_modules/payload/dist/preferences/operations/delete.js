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
const _defaultAccess = /*#__PURE__*/ _interop_require_default(require("../../auth/defaultAccess"));
const _executeAccess = /*#__PURE__*/ _interop_require_default(require("../../auth/executeAccess"));
const _NotFound = /*#__PURE__*/ _interop_require_default(require("../../errors/NotFound"));
const _UnathorizedError = /*#__PURE__*/ _interop_require_default(require("../../errors/UnathorizedError"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function deleteOperation(args) {
    const { key, overrideAccess, req: { payload }, req, user } = args;
    if (!user) {
        throw new _UnathorizedError.default(req.t);
    }
    if (!overrideAccess) {
        await (0, _executeAccess.default)({
            req
        }, _defaultAccess.default);
    }
    const where = {
        and: [
            {
                key: {
                    equals: key
                }
            },
            {
                'user.value': {
                    equals: user.id
                }
            },
            {
                'user.relationTo': {
                    equals: user.collection
                }
            }
        ]
    };
    const result = await payload.delete({
        collection: 'payload-preferences',
        depth: 0,
        user,
        where
    });
    if (result.docs.length === 1) {
        return result.docs[0];
    }
    throw new _NotFound.default();
}
const _default = deleteOperation;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmVmZXJlbmNlcy9vcGVyYXRpb25zL2RlbGV0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IERvY3VtZW50LCBXaGVyZSB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQcmVmZXJlbmNlUmVxdWVzdCB9IGZyb20gJy4uL3R5cGVzJ1xuXG5pbXBvcnQgZGVmYXVsdEFjY2VzcyBmcm9tICcuLi8uLi9hdXRoL2RlZmF1bHRBY2Nlc3MnXG5pbXBvcnQgZXhlY3V0ZUFjY2VzcyBmcm9tICcuLi8uLi9hdXRoL2V4ZWN1dGVBY2Nlc3MnXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vLi4vZXJyb3JzL05vdEZvdW5kJ1xuaW1wb3J0IFVuYXV0aG9yaXplZEVycm9yIGZyb20gJy4uLy4uL2Vycm9ycy9VbmF0aG9yaXplZEVycm9yJ1xuXG5hc3luYyBmdW5jdGlvbiBkZWxldGVPcGVyYXRpb24oYXJnczogUHJlZmVyZW5jZVJlcXVlc3QpOiBQcm9taXNlPERvY3VtZW50PiB7XG4gIGNvbnN0IHtcbiAgICBrZXksXG4gICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgcmVxOiB7IHBheWxvYWQgfSxcbiAgICByZXEsXG4gICAgdXNlcixcbiAgfSA9IGFyZ3NcblxuICBpZiAoIXVzZXIpIHtcbiAgICB0aHJvdyBuZXcgVW5hdXRob3JpemVkRXJyb3IocmVxLnQpXG4gIH1cblxuICBpZiAoIW92ZXJyaWRlQWNjZXNzKSB7XG4gICAgYXdhaXQgZXhlY3V0ZUFjY2Vzcyh7IHJlcSB9LCBkZWZhdWx0QWNjZXNzKVxuICB9XG5cbiAgY29uc3Qgd2hlcmU6IFdoZXJlID0ge1xuICAgIGFuZDogW1xuICAgICAgeyBrZXk6IHsgZXF1YWxzOiBrZXkgfSB9LFxuICAgICAgeyAndXNlci52YWx1ZSc6IHsgZXF1YWxzOiB1c2VyLmlkIH0gfSxcbiAgICAgIHsgJ3VzZXIucmVsYXRpb25Ubyc6IHsgZXF1YWxzOiB1c2VyLmNvbGxlY3Rpb24gfSB9LFxuICAgIF0sXG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBwYXlsb2FkLmRlbGV0ZSh7XG4gICAgY29sbGVjdGlvbjogJ3BheWxvYWQtcHJlZmVyZW5jZXMnLFxuICAgIGRlcHRoOiAwLFxuICAgIHVzZXIsXG4gICAgd2hlcmUsXG4gIH0pXG5cbiAgaWYgKHJlc3VsdC5kb2NzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiByZXN1bHQuZG9jc1swXVxuICB9XG4gIHRocm93IG5ldyBOb3RGb3VuZCgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZU9wZXJhdGlvblxuIl0sIm5hbWVzIjpbImRlbGV0ZU9wZXJhdGlvbiIsImFyZ3MiLCJrZXkiLCJvdmVycmlkZUFjY2VzcyIsInJlcSIsInBheWxvYWQiLCJ1c2VyIiwiVW5hdXRob3JpemVkRXJyb3IiLCJ0IiwiZXhlY3V0ZUFjY2VzcyIsImRlZmF1bHRBY2Nlc3MiLCJ3aGVyZSIsImFuZCIsImVxdWFscyIsImlkIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImRlbGV0ZSIsImRlcHRoIiwiZG9jcyIsImxlbmd0aCIsIk5vdEZvdW5kIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQThDQTs7O2VBQUE7OztzRUEzQzBCO3NFQUNBO2lFQUNMO3lFQUNTOzs7Ozs7QUFFOUIsZUFBZUEsZ0JBQWdCQyxJQUF1QjtJQUNwRCxNQUFNLEVBQ0pDLEdBQUcsRUFDSEMsY0FBYyxFQUNkQyxLQUFLLEVBQUVDLE9BQU8sRUFBRSxFQUNoQkQsR0FBRyxFQUNIRSxJQUFJLEVBQ0wsR0FBR0w7SUFFSixJQUFJLENBQUNLLE1BQU07UUFDVCxNQUFNLElBQUlDLHlCQUFpQixDQUFDSCxJQUFJSSxDQUFDO0lBQ25DO0lBRUEsSUFBSSxDQUFDTCxnQkFBZ0I7UUFDbkIsTUFBTU0sSUFBQUEsc0JBQWEsRUFBQztZQUFFTDtRQUFJLEdBQUdNLHNCQUFhO0lBQzVDO0lBRUEsTUFBTUMsUUFBZTtRQUNuQkMsS0FBSztZQUNIO2dCQUFFVixLQUFLO29CQUFFVyxRQUFRWDtnQkFBSTtZQUFFO1lBQ3ZCO2dCQUFFLGNBQWM7b0JBQUVXLFFBQVFQLEtBQUtRLEVBQUU7Z0JBQUM7WUFBRTtZQUNwQztnQkFBRSxtQkFBbUI7b0JBQUVELFFBQVFQLEtBQUtTLFVBQVU7Z0JBQUM7WUFBRTtTQUNsRDtJQUNIO0lBRUEsTUFBTUMsU0FBUyxNQUFNWCxRQUFRWSxNQUFNLENBQUM7UUFDbENGLFlBQVk7UUFDWkcsT0FBTztRQUNQWjtRQUNBSztJQUNGO0lBRUEsSUFBSUssT0FBT0csSUFBSSxDQUFDQyxNQUFNLEtBQUssR0FBRztRQUM1QixPQUFPSixPQUFPRyxJQUFJLENBQUMsRUFBRTtJQUN2QjtJQUNBLE1BQU0sSUFBSUUsaUJBQVE7QUFDcEI7TUFFQSxXQUFlckIifQ==