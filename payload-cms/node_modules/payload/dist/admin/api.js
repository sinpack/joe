"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "requests", {
    enumerable: true,
    get: function() {
        return requests;
    }
});
const _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const requests = {
    delete: (url, options = {
        headers: {}
    })=>{
        const headers = options && options.headers ? {
            ...options.headers
        } : {};
        const formattedOptions = {
            ...options,
            credentials: 'include',
            headers: {
                ...headers
            },
            method: 'delete'
        };
        return fetch(url, formattedOptions);
    },
    get: (url, options = {
        headers: {}
    })=>{
        let query = '';
        if (options.params) {
            query = _qs.default.stringify(options.params, {
                addQueryPrefix: true
            });
        }
        return fetch(`${url}${query}`, {
            credentials: 'include',
            ...options
        });
    },
    patch: (url, options = {
        headers: {}
    })=>{
        const headers = options && options.headers ? {
            ...options.headers
        } : {};
        const formattedOptions = {
            ...options,
            credentials: 'include',
            headers: {
                ...headers
            },
            method: 'PATCH'
        };
        return fetch(url, formattedOptions);
    },
    post: (url, options = {
        headers: {}
    })=>{
        const headers = options && options.headers ? {
            ...options.headers
        } : {};
        const formattedOptions = {
            ...options,
            credentials: 'include',
            headers: {
                ...headers
            },
            method: 'post'
        };
        return fetch(`${url}`, formattedOptions);
    },
    put: (url, options = {
        headers: {}
    })=>{
        const headers = options && options.headers ? {
            ...options.headers
        } : {};
        const formattedOptions = {
            ...options,
            credentials: 'include',
            headers: {
                ...headers
            },
            method: 'put'
        };
        return fetch(url, formattedOptions);
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZG1pbi9hcGkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzIGZyb20gJ3FzJ1xuXG50eXBlIEdldE9wdGlvbnMgPSBSZXF1ZXN0SW5pdCAmIHtcbiAgcGFyYW1zPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RzID0ge1xuICBkZWxldGU6ICh1cmw6IHN0cmluZywgb3B0aW9uczogUmVxdWVzdEluaXQgPSB7IGhlYWRlcnM6IHt9IH0pOiBQcm9taXNlPFJlc3BvbnNlPiA9PiB7XG4gICAgY29uc3QgaGVhZGVycyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5oZWFkZXJzID8geyAuLi5vcHRpb25zLmhlYWRlcnMgfSA6IHt9XG5cbiAgICBjb25zdCBmb3JtYXR0ZWRPcHRpb25zOiBSZXF1ZXN0SW5pdCA9IHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAuLi5oZWFkZXJzLFxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXG4gICAgfVxuXG4gICAgcmV0dXJuIGZldGNoKHVybCwgZm9ybWF0dGVkT3B0aW9ucylcbiAgfSxcblxuICBnZXQ6ICh1cmw6IHN0cmluZywgb3B0aW9uczogR2V0T3B0aW9ucyA9IHsgaGVhZGVyczoge30gfSk6IFByb21pc2U8UmVzcG9uc2U+ID0+IHtcbiAgICBsZXQgcXVlcnkgPSAnJ1xuICAgIGlmIChvcHRpb25zLnBhcmFtcykge1xuICAgICAgcXVlcnkgPSBxcy5zdHJpbmdpZnkob3B0aW9ucy5wYXJhbXMsIHsgYWRkUXVlcnlQcmVmaXg6IHRydWUgfSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoKGAke3VybH0ke3F1ZXJ5fWAsIHtcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0pXG4gIH0sXG5cbiAgcGF0Y2g6ICh1cmw6IHN0cmluZywgb3B0aW9uczogUmVxdWVzdEluaXQgPSB7IGhlYWRlcnM6IHt9IH0pOiBQcm9taXNlPFJlc3BvbnNlPiA9PiB7XG4gICAgY29uc3QgaGVhZGVycyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5oZWFkZXJzID8geyAuLi5vcHRpb25zLmhlYWRlcnMgfSA6IHt9XG5cbiAgICBjb25zdCBmb3JtYXR0ZWRPcHRpb25zOiBSZXF1ZXN0SW5pdCA9IHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAuLi5oZWFkZXJzLFxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICB9XG5cbiAgICByZXR1cm4gZmV0Y2godXJsLCBmb3JtYXR0ZWRPcHRpb25zKVxuICB9LFxuXG4gIHBvc3Q6ICh1cmw6IHN0cmluZywgb3B0aW9uczogUmVxdWVzdEluaXQgPSB7IGhlYWRlcnM6IHt9IH0pOiBQcm9taXNlPFJlc3BvbnNlPiA9PiB7XG4gICAgY29uc3QgaGVhZGVycyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5oZWFkZXJzID8geyAuLi5vcHRpb25zLmhlYWRlcnMgfSA6IHt9XG5cbiAgICBjb25zdCBmb3JtYXR0ZWRPcHRpb25zOiBSZXF1ZXN0SW5pdCA9IHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAuLi5oZWFkZXJzLFxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIH1cblxuICAgIHJldHVybiBmZXRjaChgJHt1cmx9YCwgZm9ybWF0dGVkT3B0aW9ucylcbiAgfSxcblxuICBwdXQ6ICh1cmw6IHN0cmluZywgb3B0aW9uczogUmVxdWVzdEluaXQgPSB7IGhlYWRlcnM6IHt9IH0pOiBQcm9taXNlPFJlc3BvbnNlPiA9PiB7XG4gICAgY29uc3QgaGVhZGVycyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5oZWFkZXJzID8geyAuLi5vcHRpb25zLmhlYWRlcnMgfSA6IHt9XG5cbiAgICBjb25zdCBmb3JtYXR0ZWRPcHRpb25zOiBSZXF1ZXN0SW5pdCA9IHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAuLi5oZWFkZXJzLFxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgfVxuXG4gICAgcmV0dXJuIGZldGNoKHVybCwgZm9ybWF0dGVkT3B0aW9ucylcbiAgfSxcbn1cbiJdLCJuYW1lcyI6WyJyZXF1ZXN0cyIsImRlbGV0ZSIsInVybCIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiZm9ybWF0dGVkT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwibWV0aG9kIiwiZmV0Y2giLCJnZXQiLCJxdWVyeSIsInBhcmFtcyIsInFzIiwic3RyaW5naWZ5IiwiYWRkUXVlcnlQcmVmaXgiLCJwYXRjaCIsInBvc3QiLCJwdXQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBTWFBOzs7ZUFBQUE7OzsyREFORTs7Ozs7O0FBTVIsTUFBTUEsV0FBVztJQUN0QkMsUUFBUSxDQUFDQyxLQUFhQyxVQUF1QjtRQUFFQyxTQUFTLENBQUM7SUFBRSxDQUFDO1FBQzFELE1BQU1BLFVBQVVELFdBQVdBLFFBQVFDLE9BQU8sR0FBRztZQUFFLEdBQUdELFFBQVFDLE9BQU87UUFBQyxJQUFJLENBQUM7UUFFdkUsTUFBTUMsbUJBQWdDO1lBQ3BDLEdBQUdGLE9BQU87WUFDVkcsYUFBYTtZQUNiRixTQUFTO2dCQUNQLEdBQUdBLE9BQU87WUFDWjtZQUNBRyxRQUFRO1FBQ1Y7UUFFQSxPQUFPQyxNQUFNTixLQUFLRztJQUNwQjtJQUVBSSxLQUFLLENBQUNQLEtBQWFDLFVBQXNCO1FBQUVDLFNBQVMsQ0FBQztJQUFFLENBQUM7UUFDdEQsSUFBSU0sUUFBUTtRQUNaLElBQUlQLFFBQVFRLE1BQU0sRUFBRTtZQUNsQkQsUUFBUUUsV0FBRSxDQUFDQyxTQUFTLENBQUNWLFFBQVFRLE1BQU0sRUFBRTtnQkFBRUcsZ0JBQWdCO1lBQUs7UUFDOUQ7UUFDQSxPQUFPTixNQUFNLENBQUMsRUFBRU4sSUFBSSxFQUFFUSxNQUFNLENBQUMsRUFBRTtZQUM3QkosYUFBYTtZQUNiLEdBQUdILE9BQU87UUFDWjtJQUNGO0lBRUFZLE9BQU8sQ0FBQ2IsS0FBYUMsVUFBdUI7UUFBRUMsU0FBUyxDQUFDO0lBQUUsQ0FBQztRQUN6RCxNQUFNQSxVQUFVRCxXQUFXQSxRQUFRQyxPQUFPLEdBQUc7WUFBRSxHQUFHRCxRQUFRQyxPQUFPO1FBQUMsSUFBSSxDQUFDO1FBRXZFLE1BQU1DLG1CQUFnQztZQUNwQyxHQUFHRixPQUFPO1lBQ1ZHLGFBQWE7WUFDYkYsU0FBUztnQkFDUCxHQUFHQSxPQUFPO1lBQ1o7WUFDQUcsUUFBUTtRQUNWO1FBRUEsT0FBT0MsTUFBTU4sS0FBS0c7SUFDcEI7SUFFQVcsTUFBTSxDQUFDZCxLQUFhQyxVQUF1QjtRQUFFQyxTQUFTLENBQUM7SUFBRSxDQUFDO1FBQ3hELE1BQU1BLFVBQVVELFdBQVdBLFFBQVFDLE9BQU8sR0FBRztZQUFFLEdBQUdELFFBQVFDLE9BQU87UUFBQyxJQUFJLENBQUM7UUFFdkUsTUFBTUMsbUJBQWdDO1lBQ3BDLEdBQUdGLE9BQU87WUFDVkcsYUFBYTtZQUNiRixTQUFTO2dCQUNQLEdBQUdBLE9BQU87WUFDWjtZQUNBRyxRQUFRO1FBQ1Y7UUFFQSxPQUFPQyxNQUFNLENBQUMsRUFBRU4sSUFBSSxDQUFDLEVBQUVHO0lBQ3pCO0lBRUFZLEtBQUssQ0FBQ2YsS0FBYUMsVUFBdUI7UUFBRUMsU0FBUyxDQUFDO0lBQUUsQ0FBQztRQUN2RCxNQUFNQSxVQUFVRCxXQUFXQSxRQUFRQyxPQUFPLEdBQUc7WUFBRSxHQUFHRCxRQUFRQyxPQUFPO1FBQUMsSUFBSSxDQUFDO1FBRXZFLE1BQU1DLG1CQUFnQztZQUNwQyxHQUFHRixPQUFPO1lBQ1ZHLGFBQWE7WUFDYkYsU0FBUztnQkFDUCxHQUFHQSxPQUFPO1lBQ1o7WUFDQUcsUUFBUTtRQUNWO1FBRUEsT0FBT0MsTUFBTU4sS0FBS0c7SUFDcEI7QUFDRiJ9