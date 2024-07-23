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
    authDefaults: function() {
        return authDefaults;
    },
    defaults: function() {
        return defaults;
    }
});
const _defaultAccess = /*#__PURE__*/ _interop_require_default(require("../../auth/defaultAccess"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const defaults = {
    access: {
        create: _defaultAccess.default,
        delete: _defaultAccess.default,
        read: _defaultAccess.default,
        unlock: _defaultAccess.default,
        update: _defaultAccess.default
    },
    admin: {
        components: {},
        enableRichTextLink: true,
        enableRichTextRelationship: true,
        pagination: {
            defaultLimit: 10,
            limits: [
                5,
                10,
                25,
                50,
                100
            ]
        },
        useAsTitle: 'id'
    },
    auth: false,
    custom: {},
    endpoints: [],
    fields: [],
    hooks: {
        afterChange: [],
        afterDelete: [],
        afterForgotPassword: [],
        afterLogin: [],
        afterLogout: [],
        afterMe: [],
        afterOperation: [],
        afterRead: [],
        afterRefresh: [],
        beforeChange: [],
        beforeDelete: [],
        beforeLogin: [],
        beforeOperation: [],
        beforeRead: [],
        beforeValidate: [],
        me: [],
        refresh: []
    },
    timestamps: true,
    upload: false,
    versions: false
};
const authDefaults = {
    cookies: {
        sameSite: 'Lax',
        secure: false
    },
    forgotPassword: {},
    lockTime: 600000,
    maxLoginAttempts: 5,
    tokenExpiration: 7200,
    verify: false
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9jb25maWcvZGVmYXVsdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlZmF1bHRBY2Nlc3MgZnJvbSAnLi4vLi4vYXV0aC9kZWZhdWx0QWNjZXNzJ1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdHMgPSB7XG4gIGFjY2Vzczoge1xuICAgIGNyZWF0ZTogZGVmYXVsdEFjY2VzcyxcbiAgICBkZWxldGU6IGRlZmF1bHRBY2Nlc3MsXG4gICAgcmVhZDogZGVmYXVsdEFjY2VzcyxcbiAgICB1bmxvY2s6IGRlZmF1bHRBY2Nlc3MsXG4gICAgdXBkYXRlOiBkZWZhdWx0QWNjZXNzLFxuICB9LFxuICBhZG1pbjoge1xuICAgIGNvbXBvbmVudHM6IHt9LFxuICAgIGVuYWJsZVJpY2hUZXh0TGluazogdHJ1ZSxcbiAgICBlbmFibGVSaWNoVGV4dFJlbGF0aW9uc2hpcDogdHJ1ZSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBkZWZhdWx0TGltaXQ6IDEwLFxuICAgICAgbGltaXRzOiBbNSwgMTAsIDI1LCA1MCwgMTAwXSxcbiAgICB9LFxuICAgIHVzZUFzVGl0bGU6ICdpZCcsXG4gIH0sXG4gIGF1dGg6IGZhbHNlLFxuICBjdXN0b206IHt9LFxuICBlbmRwb2ludHM6IFtdLFxuICBmaWVsZHM6IFtdLFxuICBob29rczoge1xuICAgIGFmdGVyQ2hhbmdlOiBbXSxcbiAgICBhZnRlckRlbGV0ZTogW10sXG4gICAgYWZ0ZXJGb3Jnb3RQYXNzd29yZDogW10sXG4gICAgYWZ0ZXJMb2dpbjogW10sXG4gICAgYWZ0ZXJMb2dvdXQ6IFtdLFxuICAgIGFmdGVyTWU6IFtdLFxuICAgIGFmdGVyT3BlcmF0aW9uOiBbXSxcbiAgICBhZnRlclJlYWQ6IFtdLFxuICAgIGFmdGVyUmVmcmVzaDogW10sXG4gICAgYmVmb3JlQ2hhbmdlOiBbXSxcbiAgICBiZWZvcmVEZWxldGU6IFtdLFxuICAgIGJlZm9yZUxvZ2luOiBbXSxcbiAgICBiZWZvcmVPcGVyYXRpb246IFtdLFxuICAgIGJlZm9yZVJlYWQ6IFtdLFxuICAgIGJlZm9yZVZhbGlkYXRlOiBbXSxcbiAgICBtZTogW10sXG4gICAgcmVmcmVzaDogW10sXG4gIH0sXG4gIHRpbWVzdGFtcHM6IHRydWUsXG4gIHVwbG9hZDogZmFsc2UsXG4gIHZlcnNpb25zOiBmYWxzZSxcbn1cblxuZXhwb3J0IGNvbnN0IGF1dGhEZWZhdWx0cyA9IHtcbiAgY29va2llczoge1xuICAgIHNhbWVTaXRlOiAnTGF4JyxcbiAgICBzZWN1cmU6IGZhbHNlLFxuICB9LFxuICBmb3Jnb3RQYXNzd29yZDoge30sXG4gIGxvY2tUaW1lOiA2MDAwMDAsIC8vIDEwIG1pbnV0ZXNcbiAgbWF4TG9naW5BdHRlbXB0czogNSxcbiAgdG9rZW5FeHBpcmF0aW9uOiA3MjAwLFxuICB2ZXJpZnk6IGZhbHNlLFxufVxuIl0sIm5hbWVzIjpbImF1dGhEZWZhdWx0cyIsImRlZmF1bHRzIiwiYWNjZXNzIiwiY3JlYXRlIiwiZGVmYXVsdEFjY2VzcyIsImRlbGV0ZSIsInJlYWQiLCJ1bmxvY2siLCJ1cGRhdGUiLCJhZG1pbiIsImNvbXBvbmVudHMiLCJlbmFibGVSaWNoVGV4dExpbmsiLCJlbmFibGVSaWNoVGV4dFJlbGF0aW9uc2hpcCIsInBhZ2luYXRpb24iLCJkZWZhdWx0TGltaXQiLCJsaW1pdHMiLCJ1c2VBc1RpdGxlIiwiYXV0aCIsImN1c3RvbSIsImVuZHBvaW50cyIsImZpZWxkcyIsImhvb2tzIiwiYWZ0ZXJDaGFuZ2UiLCJhZnRlckRlbGV0ZSIsImFmdGVyRm9yZ290UGFzc3dvcmQiLCJhZnRlckxvZ2luIiwiYWZ0ZXJMb2dvdXQiLCJhZnRlck1lIiwiYWZ0ZXJPcGVyYXRpb24iLCJhZnRlclJlYWQiLCJhZnRlclJlZnJlc2giLCJiZWZvcmVDaGFuZ2UiLCJiZWZvcmVEZWxldGUiLCJiZWZvcmVMb2dpbiIsImJlZm9yZU9wZXJhdGlvbiIsImJlZm9yZVJlYWQiLCJiZWZvcmVWYWxpZGF0ZSIsIm1lIiwicmVmcmVzaCIsInRpbWVzdGFtcHMiLCJ1cGxvYWQiLCJ2ZXJzaW9ucyIsImNvb2tpZXMiLCJzYW1lU2l0ZSIsInNlY3VyZSIsImZvcmdvdFBhc3N3b3JkIiwibG9ja1RpbWUiLCJtYXhMb2dpbkF0dGVtcHRzIiwidG9rZW5FeHBpcmF0aW9uIiwidmVyaWZ5Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBZ0RhQSxZQUFZO2VBQVpBOztJQTlDQUMsUUFBUTtlQUFSQTs7O3NFQUZhOzs7Ozs7QUFFbkIsTUFBTUEsV0FBVztJQUN0QkMsUUFBUTtRQUNOQyxRQUFRQyxzQkFBYTtRQUNyQkMsUUFBUUQsc0JBQWE7UUFDckJFLE1BQU1GLHNCQUFhO1FBQ25CRyxRQUFRSCxzQkFBYTtRQUNyQkksUUFBUUosc0JBQWE7SUFDdkI7SUFDQUssT0FBTztRQUNMQyxZQUFZLENBQUM7UUFDYkMsb0JBQW9CO1FBQ3BCQyw0QkFBNEI7UUFDNUJDLFlBQVk7WUFDVkMsY0FBYztZQUNkQyxRQUFRO2dCQUFDO2dCQUFHO2dCQUFJO2dCQUFJO2dCQUFJO2FBQUk7UUFDOUI7UUFDQUMsWUFBWTtJQUNkO0lBQ0FDLE1BQU07SUFDTkMsUUFBUSxDQUFDO0lBQ1RDLFdBQVcsRUFBRTtJQUNiQyxRQUFRLEVBQUU7SUFDVkMsT0FBTztRQUNMQyxhQUFhLEVBQUU7UUFDZkMsYUFBYSxFQUFFO1FBQ2ZDLHFCQUFxQixFQUFFO1FBQ3ZCQyxZQUFZLEVBQUU7UUFDZEMsYUFBYSxFQUFFO1FBQ2ZDLFNBQVMsRUFBRTtRQUNYQyxnQkFBZ0IsRUFBRTtRQUNsQkMsV0FBVyxFQUFFO1FBQ2JDLGNBQWMsRUFBRTtRQUNoQkMsY0FBYyxFQUFFO1FBQ2hCQyxjQUFjLEVBQUU7UUFDaEJDLGFBQWEsRUFBRTtRQUNmQyxpQkFBaUIsRUFBRTtRQUNuQkMsWUFBWSxFQUFFO1FBQ2RDLGdCQUFnQixFQUFFO1FBQ2xCQyxJQUFJLEVBQUU7UUFDTkMsU0FBUyxFQUFFO0lBQ2I7SUFDQUMsWUFBWTtJQUNaQyxRQUFRO0lBQ1JDLFVBQVU7QUFDWjtBQUVPLE1BQU16QyxlQUFlO0lBQzFCMEMsU0FBUztRQUNQQyxVQUFVO1FBQ1ZDLFFBQVE7SUFDVjtJQUNBQyxnQkFBZ0IsQ0FBQztJQUNqQkMsVUFBVTtJQUNWQyxrQkFBa0I7SUFDbEJDLGlCQUFpQjtJQUNqQkMsUUFBUTtBQUNWIn0=