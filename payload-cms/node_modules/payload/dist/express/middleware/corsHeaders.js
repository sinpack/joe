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
const _default = (config)=>(req, res, next)=>{
        if (config.cors) {
            res.header('Access-Control-Allow-Methods', 'PUT, PATCH, POST, GET, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Encoding, x-apollo-tracing');
            if (config.cors === '*') {
                res.setHeader('Access-Control-Allow-Origin', '*');
            } else if (Array.isArray(config.cors) && config.cors.indexOf(req.headers.origin) > -1) {
                res.header('Access-Control-Allow-Credentials', 'true');
                res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
            }
        }
        next();
    };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHByZXNzL21pZGRsZXdhcmUvY29yc0hlYWRlcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnXG5cbmV4cG9ydCBkZWZhdWx0IChjb25maWc6IFNhbml0aXplZENvbmZpZykgPT4gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIGlmIChjb25maWcuY29ycykge1xuICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnUFVULCBQQVRDSCwgUE9TVCwgR0VULCBERUxFVEUsIE9QVElPTlMnKVxuICAgIHJlcy5oZWFkZXIoXG4gICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsXG4gICAgICAnT3JpZ2luLCBYLVJlcXVlc3RlZC1XaXRoLCBDb250ZW50LVR5cGUsIEFjY2VwdCwgQXV0aG9yaXphdGlvbiwgQ29udGVudC1FbmNvZGluZywgeC1hcG9sbG8tdHJhY2luZycsXG4gICAgKVxuXG4gICAgaWYgKGNvbmZpZy5jb3JzID09PSAnKicpIHtcbiAgICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY29uZmlnLmNvcnMpICYmIGNvbmZpZy5jb3JzLmluZGV4T2YocmVxLmhlYWRlcnMub3JpZ2luKSA+IC0xKSB7XG4gICAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscycsICd0cnVlJylcbiAgICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsIHJlcS5oZWFkZXJzLm9yaWdpbilcbiAgICB9XG4gIH1cblxuICBuZXh0KClcbn1cbiJdLCJuYW1lcyI6WyJjb25maWciLCJyZXEiLCJyZXMiLCJuZXh0IiwiY29ycyIsImhlYWRlciIsInNldEhlYWRlciIsIkFycmF5IiwiaXNBcnJheSIsImluZGV4T2YiLCJoZWFkZXJzIiwib3JpZ2luIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBSUE7OztlQUFBOzs7TUFBQSxXQUFlLENBQUNBLFNBQTRCLENBQUNDLEtBQWNDLEtBQWVDO1FBQ3hFLElBQUlILE9BQU9JLElBQUksRUFBRTtZQUNmRixJQUFJRyxNQUFNLENBQUMsZ0NBQWdDO1lBQzNDSCxJQUFJRyxNQUFNLENBQ1IsZ0NBQ0E7WUFHRixJQUFJTCxPQUFPSSxJQUFJLEtBQUssS0FBSztnQkFDdkJGLElBQUlJLFNBQVMsQ0FBQywrQkFBK0I7WUFDL0MsT0FBTyxJQUFJQyxNQUFNQyxPQUFPLENBQUNSLE9BQU9JLElBQUksS0FBS0osT0FBT0ksSUFBSSxDQUFDSyxPQUFPLENBQUNSLElBQUlTLE9BQU8sQ0FBQ0MsTUFBTSxJQUFJLENBQUMsR0FBRztnQkFDckZULElBQUlHLE1BQU0sQ0FBQyxvQ0FBb0M7Z0JBQy9DSCxJQUFJSSxTQUFTLENBQUMsK0JBQStCTCxJQUFJUyxPQUFPLENBQUNDLE1BQU07WUFDakU7UUFDRjtRQUVBUjtJQUNGIn0=