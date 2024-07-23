/* eslint-disable import/no-dynamic-require */ /* eslint-disable global-require */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
const _logger = /*#__PURE__*/ _interop_require_default(require("../utilities/logger"));
const _clientFiles = require("./clientFiles");
const _find = /*#__PURE__*/ _interop_require_default(require("./find"));
const _validate = /*#__PURE__*/ _interop_require_default(require("./validate"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const loadConfig = async (logger)=>{
    const localLogger = logger ?? (0, _logger.default)();
    const configPath = (0, _find.default)();
    _clientFiles.clientFiles.forEach((ext)=>{
        require.extensions[ext] = ()=>null;
    });
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const configPromise = require(configPath);
    let config = await configPromise;
    if (config.default) config = await config.default;
    if (process.env.NODE_ENV !== 'production') {
        config = await (0, _validate.default)(config, localLogger);
    }
    return {
        ...config,
        paths: {
            config: configPath,
            configDir: _path.default.dirname(configPath),
            rawConfig: configPath
        }
    };
};
const _default = loadConfig;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvbG9hZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZHluYW1pYy1yZXF1aXJlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBnbG9iYWwtcmVxdWlyZSAqL1xuaW1wb3J0IHR5cGUgcGlubyBmcm9tICdwaW5vJ1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZENvbmZpZyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbGl0aWVzL2xvZ2dlcidcbmltcG9ydCB7IGNsaWVudEZpbGVzIH0gZnJvbSAnLi9jbGllbnRGaWxlcydcbmltcG9ydCBmaW5kQ29uZmlnIGZyb20gJy4vZmluZCdcbmltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlJ1xuXG5jb25zdCBsb2FkQ29uZmlnID0gYXN5bmMgKGxvZ2dlcj86IHBpbm8uTG9nZ2VyKTogUHJvbWlzZTxTYW5pdGl6ZWRDb25maWc+ID0+IHtcbiAgY29uc3QgbG9jYWxMb2dnZXIgPSBsb2dnZXIgPz8gTG9nZ2VyKClcblxuICBjb25zdCBjb25maWdQYXRoID0gZmluZENvbmZpZygpXG5cbiAgY2xpZW50RmlsZXMuZm9yRWFjaCgoZXh0KSA9PiB7XG4gICAgcmVxdWlyZS5leHRlbnNpb25zW2V4dF0gPSAoKSA9PiBudWxsXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXNcbiAgY29uc3QgY29uZmlnUHJvbWlzZSA9IHJlcXVpcmUoY29uZmlnUGF0aClcblxuICBsZXQgY29uZmlnID0gYXdhaXQgY29uZmlnUHJvbWlzZVxuXG4gIGlmIChjb25maWcuZGVmYXVsdCkgY29uZmlnID0gYXdhaXQgY29uZmlnLmRlZmF1bHRcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbmZpZyA9IGF3YWl0IHZhbGlkYXRlKGNvbmZpZywgbG9jYWxMb2dnZXIpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLmNvbmZpZyxcbiAgICBwYXRoczoge1xuICAgICAgY29uZmlnOiBjb25maWdQYXRoLFxuICAgICAgY29uZmlnRGlyOiBwYXRoLmRpcm5hbWUoY29uZmlnUGF0aCksXG4gICAgICByYXdDb25maWc6IGNvbmZpZ1BhdGgsXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29uZmlnXG4iXSwibmFtZXMiOlsibG9hZENvbmZpZyIsImxvZ2dlciIsImxvY2FsTG9nZ2VyIiwiTG9nZ2VyIiwiY29uZmlnUGF0aCIsImZpbmRDb25maWciLCJjbGllbnRGaWxlcyIsImZvckVhY2giLCJleHQiLCJyZXF1aXJlIiwiZXh0ZW5zaW9ucyIsImNvbmZpZ1Byb21pc2UiLCJjb25maWciLCJkZWZhdWx0IiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwidmFsaWRhdGUiLCJwYXRocyIsImNvbmZpZ0RpciIsInBhdGgiLCJkaXJuYW1lIiwicmF3Q29uZmlnIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUEsNENBQTRDLEdBQzVDLGlDQUFpQzs7OzsrQkEyQ2pDOzs7ZUFBQTs7OzZEQXZDaUI7K0RBSUU7NkJBQ1M7NkRBQ0w7aUVBQ0Y7Ozs7OztBQUVyQixNQUFNQSxhQUFhLE9BQU9DO0lBQ3hCLE1BQU1DLGNBQWNELFVBQVVFLElBQUFBLGVBQU07SUFFcEMsTUFBTUMsYUFBYUMsSUFBQUEsYUFBVTtJQUU3QkMsd0JBQVcsQ0FBQ0MsT0FBTyxDQUFDLENBQUNDO1FBQ25CQyxRQUFRQyxVQUFVLENBQUNGLElBQUksR0FBRyxJQUFNO0lBQ2xDO0lBRUEsOERBQThEO0lBQzlELE1BQU1HLGdCQUFnQkYsUUFBUUw7SUFFOUIsSUFBSVEsU0FBUyxNQUFNRDtJQUVuQixJQUFJQyxPQUFPQyxPQUFPLEVBQUVELFNBQVMsTUFBTUEsT0FBT0MsT0FBTztJQUVqRCxJQUFJQyxRQUFRQyxHQUFHLENBQUNDLFFBQVEsS0FBSyxjQUFjO1FBQ3pDSixTQUFTLE1BQU1LLElBQUFBLGlCQUFRLEVBQUNMLFFBQVFWO0lBQ2xDO0lBRUEsT0FBTztRQUNMLEdBQUdVLE1BQU07UUFDVE0sT0FBTztZQUNMTixRQUFRUjtZQUNSZSxXQUFXQyxhQUFJLENBQUNDLE9BQU8sQ0FBQ2pCO1lBQ3hCa0IsV0FBV2xCO1FBQ2I7SUFDRjtBQUNGO01BRUEsV0FBZUoifQ==