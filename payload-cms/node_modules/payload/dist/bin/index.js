/* eslint-disable @typescript-eslint/no-floating-promises */ /* eslint-disable @typescript-eslint/no-var-requires */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _register = /*#__PURE__*/ _interop_require_default(require("@swc/register"));
const _dotenv = /*#__PURE__*/ _interop_require_default(require("dotenv"));
const _findup = /*#__PURE__*/ _interop_require_default(require("find-up"));
const _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
const _gettsconfig = require("get-tsconfig");
const _minimist = /*#__PURE__*/ _interop_require_default(require("minimist"));
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
const _generateGraphQLSchema = require("./generateGraphQLSchema");
const _generateTypes = require("./generateTypes");
const _migrate = require("./migrate");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
loadEnv();
const tsConfig = (0, _gettsconfig.getTsconfig)();
const swcOptions = {
    ignore: [
        /.*[\\/]node_modules[\\/].*/
    ],
    jsc: {
        baseUrl: _path.default.resolve(),
        parser: {
            syntax: 'typescript',
            tsx: true
        },
        paths: undefined
    },
    module: {
        type: 'commonjs'
    },
    sourceMaps: 'inline'
};
if (tsConfig?.config?.compilerOptions?.paths) {
    swcOptions.jsc.paths = tsConfig.config.compilerOptions.paths;
    if (tsConfig?.config?.compilerOptions?.baseUrl) {
        swcOptions.jsc.baseUrl = _path.default.resolve(tsConfig.config.compilerOptions.baseUrl);
    }
}
// Allow disabling SWC for debugging
if (process.env.DISABLE_SWC !== 'true') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error - bad @swc/register types
    (0, _register.default)(swcOptions);
}
const { build } = require('./build');
const args = (0, _minimist.default)(process.argv.slice(2));
const scriptIndex = args._.findIndex((x)=>x === 'build');
const script = scriptIndex === -1 ? args._[0] : args._[scriptIndex];
if (script) {
    if (script.startsWith('migrate')) {
        (0, _migrate.migrate)(args).then(()=>process.exit(0));
    } else {
        switch(script.toLowerCase()){
            case 'build':
                {
                    build();
                    break;
                }
            case 'generate:types':
                {
                    (0, _generateTypes.generateTypes)();
                    break;
                }
            case 'generate:graphqlschema':
                {
                    (0, _generateGraphQLSchema.generateGraphQLSchema)();
                    break;
                }
            default:
                console.log(`Unknown script "${script}".`);
                break;
        }
    }
} else {
    console.error('No payload script specified. Did you mean to run `payload migrate`?');
}
/**
 * Try to find user's .env and load it
 */ function loadEnv() {
    const envPath = _findup.default.sync('.env');
    if (envPath) {
        _dotenv.default.config({
            path: envPath
        });
    } else {
        const cwdPath = _path.default.resolve(process.cwd(), '.env');
        if (_fs.default.existsSync(cwdPath)) {
            _dotenv.default.config({
                path: cwdPath
            });
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iaW4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzICovXG5pbXBvcnQgc3djUmVnaXN0ZXIgZnJvbSAnQHN3Yy9yZWdpc3RlcidcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52J1xuaW1wb3J0IGZpbmRVcCBmcm9tICdmaW5kLXVwJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHsgZ2V0VHNjb25maWcgYXMgZ2V0VFNjb25maWcgfSBmcm9tICdnZXQtdHNjb25maWcnXG5pbXBvcnQgbWluaW1pc3QgZnJvbSAnbWluaW1pc3QnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5pbXBvcnQgeyBnZW5lcmF0ZUdyYXBoUUxTY2hlbWEgfSBmcm9tICcuL2dlbmVyYXRlR3JhcGhRTFNjaGVtYSdcbmltcG9ydCB7IGdlbmVyYXRlVHlwZXMgfSBmcm9tICcuL2dlbmVyYXRlVHlwZXMnXG5pbXBvcnQgeyBtaWdyYXRlIH0gZnJvbSAnLi9taWdyYXRlJ1xuXG5sb2FkRW52KClcblxuY29uc3QgdHNDb25maWcgPSBnZXRUU2NvbmZpZygpXG5cbmNvbnN0IHN3Y09wdGlvbnMgPSB7XG4gIGlnbm9yZTogW1xuICAgIC8uKltcXFxcL11ub2RlX21vZHVsZXNbXFxcXC9dLiovLCAvLyBwYXJzZSBldmVyeXRoaW5nIGJlc2lkZXMgZmlsZXMgd2l0aGluIG5vZGVfbW9kdWxlc1xuICBdLFxuICBqc2M6IHtcbiAgICBiYXNlVXJsOiBwYXRoLnJlc29sdmUoKSxcbiAgICBwYXJzZXI6IHtcbiAgICAgIHN5bnRheDogJ3R5cGVzY3JpcHQnLFxuICAgICAgdHN4OiB0cnVlLFxuICAgIH0sXG4gICAgcGF0aHM6IHVuZGVmaW5lZCxcbiAgfSxcbiAgbW9kdWxlOiB7XG4gICAgdHlwZTogJ2NvbW1vbmpzJyxcbiAgfSxcbiAgc291cmNlTWFwczogJ2lubGluZScsXG59XG5cbmlmICh0c0NvbmZpZz8uY29uZmlnPy5jb21waWxlck9wdGlvbnM/LnBhdGhzKSB7XG4gIHN3Y09wdGlvbnMuanNjLnBhdGhzID0gdHNDb25maWcuY29uZmlnLmNvbXBpbGVyT3B0aW9ucy5wYXRoc1xuXG4gIGlmICh0c0NvbmZpZz8uY29uZmlnPy5jb21waWxlck9wdGlvbnM/LmJhc2VVcmwpIHtcbiAgICBzd2NPcHRpb25zLmpzYy5iYXNlVXJsID0gcGF0aC5yZXNvbHZlKHRzQ29uZmlnLmNvbmZpZy5jb21waWxlck9wdGlvbnMuYmFzZVVybClcbiAgfVxufVxuXG4vLyBBbGxvdyBkaXNhYmxpbmcgU1dDIGZvciBkZWJ1Z2dpbmdcbmlmIChwcm9jZXNzLmVudi5ESVNBQkxFX1NXQyAhPT0gJ3RydWUnKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIGJhZCBAc3djL3JlZ2lzdGVyIHR5cGVzXG4gIHN3Y1JlZ2lzdGVyKHN3Y09wdGlvbnMpXG59XG5cbmNvbnN0IHsgYnVpbGQgfSA9IHJlcXVpcmUoJy4vYnVpbGQnKVxuXG5jb25zdCBhcmdzID0gbWluaW1pc3QocHJvY2Vzcy5hcmd2LnNsaWNlKDIpKVxuXG5jb25zdCBzY3JpcHRJbmRleCA9IGFyZ3MuXy5maW5kSW5kZXgoKHgpID0+IHggPT09ICdidWlsZCcpXG5cbmNvbnN0IHNjcmlwdCA9IHNjcmlwdEluZGV4ID09PSAtMSA/IGFyZ3MuX1swXSA6IGFyZ3MuX1tzY3JpcHRJbmRleF1cbmlmIChzY3JpcHQpIHtcbiAgaWYgKHNjcmlwdC5zdGFydHNXaXRoKCdtaWdyYXRlJykpIHtcbiAgICBtaWdyYXRlKGFyZ3MpLnRoZW4oKCkgPT4gcHJvY2Vzcy5leGl0KDApKVxuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoc2NyaXB0LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGNhc2UgJ2J1aWxkJzoge1xuICAgICAgICBidWlsZCgpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ2dlbmVyYXRlOnR5cGVzJzoge1xuICAgICAgICBnZW5lcmF0ZVR5cGVzKClcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSAnZ2VuZXJhdGU6Z3JhcGhxbHNjaGVtYSc6IHtcbiAgICAgICAgZ2VuZXJhdGVHcmFwaFFMU2NoZW1hKClcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5sb2coYFVua25vd24gc2NyaXB0IFwiJHtzY3JpcHR9XCIuYClcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbn0gZWxzZSB7XG4gIGNvbnNvbGUuZXJyb3IoJ05vIHBheWxvYWQgc2NyaXB0IHNwZWNpZmllZC4gRGlkIHlvdSBtZWFuIHRvIHJ1biBgcGF5bG9hZCBtaWdyYXRlYD8nKVxufVxuXG4vKipcbiAqIFRyeSB0byBmaW5kIHVzZXIncyAuZW52IGFuZCBsb2FkIGl0XG4gKi9cbmZ1bmN0aW9uIGxvYWRFbnYoKSB7XG4gIGNvbnN0IGVudlBhdGggPSBmaW5kVXAuc3luYygnLmVudicpXG5cbiAgaWYgKGVudlBhdGgpIHtcbiAgICBkb3RlbnYuY29uZmlnKHsgcGF0aDogZW52UGF0aCB9KVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGN3ZFBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJy5lbnYnKVxuICAgIGlmIChmcy5leGlzdHNTeW5jKGN3ZFBhdGgpKSB7XG4gICAgICBkb3RlbnYuY29uZmlnKHtcbiAgICAgICAgcGF0aDogY3dkUGF0aCxcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsibG9hZEVudiIsInRzQ29uZmlnIiwiZ2V0VFNjb25maWciLCJzd2NPcHRpb25zIiwiaWdub3JlIiwianNjIiwiYmFzZVVybCIsInBhdGgiLCJyZXNvbHZlIiwicGFyc2VyIiwic3ludGF4IiwidHN4IiwicGF0aHMiLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJ0eXBlIiwic291cmNlTWFwcyIsImNvbmZpZyIsImNvbXBpbGVyT3B0aW9ucyIsInByb2Nlc3MiLCJlbnYiLCJESVNBQkxFX1NXQyIsInN3Y1JlZ2lzdGVyIiwiYnVpbGQiLCJyZXF1aXJlIiwiYXJncyIsIm1pbmltaXN0IiwiYXJndiIsInNsaWNlIiwic2NyaXB0SW5kZXgiLCJfIiwiZmluZEluZGV4IiwieCIsInNjcmlwdCIsInN0YXJ0c1dpdGgiLCJtaWdyYXRlIiwidGhlbiIsImV4aXQiLCJ0b0xvd2VyQ2FzZSIsImdlbmVyYXRlVHlwZXMiLCJnZW5lcmF0ZUdyYXBoUUxTY2hlbWEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJlbnZQYXRoIiwiZmluZFVwIiwic3luYyIsImRvdGVudiIsImN3ZFBhdGgiLCJjd2QiLCJmcyIsImV4aXN0c1N5bmMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBLDBEQUEwRCxHQUMxRCxxREFBcUQ7Ozs7aUVBQzdCOytEQUNMOytEQUNBOzJEQUNKOzZCQUM0QjtpRUFDdEI7NkRBQ0o7dUNBRXFCOytCQUNSO3lCQUNOOzs7Ozs7QUFFeEJBO0FBRUEsTUFBTUMsV0FBV0MsSUFBQUEsd0JBQVc7QUFFNUIsTUFBTUMsYUFBYTtJQUNqQkMsUUFBUTtRQUNOO0tBQ0Q7SUFDREMsS0FBSztRQUNIQyxTQUFTQyxhQUFJLENBQUNDLE9BQU87UUFDckJDLFFBQVE7WUFDTkMsUUFBUTtZQUNSQyxLQUFLO1FBQ1A7UUFDQUMsT0FBT0M7SUFDVDtJQUNBQyxRQUFRO1FBQ05DLE1BQU07SUFDUjtJQUNBQyxZQUFZO0FBQ2Q7QUFFQSxJQUFJZixVQUFVZ0IsUUFBUUMsaUJBQWlCTixPQUFPO0lBQzVDVCxXQUFXRSxHQUFHLENBQUNPLEtBQUssR0FBR1gsU0FBU2dCLE1BQU0sQ0FBQ0MsZUFBZSxDQUFDTixLQUFLO0lBRTVELElBQUlYLFVBQVVnQixRQUFRQyxpQkFBaUJaLFNBQVM7UUFDOUNILFdBQVdFLEdBQUcsQ0FBQ0MsT0FBTyxHQUFHQyxhQUFJLENBQUNDLE9BQU8sQ0FBQ1AsU0FBU2dCLE1BQU0sQ0FBQ0MsZUFBZSxDQUFDWixPQUFPO0lBQy9FO0FBQ0Y7QUFFQSxvQ0FBb0M7QUFDcEMsSUFBSWEsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEtBQUssUUFBUTtJQUN0Qyw2REFBNkQ7SUFDN0QsNkNBQTZDO0lBQzdDQyxJQUFBQSxpQkFBVyxFQUFDbkI7QUFDZDtBQUVBLE1BQU0sRUFBRW9CLEtBQUssRUFBRSxHQUFHQyxRQUFRO0FBRTFCLE1BQU1DLE9BQU9DLElBQUFBLGlCQUFRLEVBQUNQLFFBQVFRLElBQUksQ0FBQ0MsS0FBSyxDQUFDO0FBRXpDLE1BQU1DLGNBQWNKLEtBQUtLLENBQUMsQ0FBQ0MsU0FBUyxDQUFDLENBQUNDLElBQU1BLE1BQU07QUFFbEQsTUFBTUMsU0FBU0osZ0JBQWdCLENBQUMsSUFBSUosS0FBS0ssQ0FBQyxDQUFDLEVBQUUsR0FBR0wsS0FBS0ssQ0FBQyxDQUFDRCxZQUFZO0FBQ25FLElBQUlJLFFBQVE7SUFDVixJQUFJQSxPQUFPQyxVQUFVLENBQUMsWUFBWTtRQUNoQ0MsSUFBQUEsZ0JBQU8sRUFBQ1YsTUFBTVcsSUFBSSxDQUFDLElBQU1qQixRQUFRa0IsSUFBSSxDQUFDO0lBQ3hDLE9BQU87UUFDTCxPQUFRSixPQUFPSyxXQUFXO1lBQ3hCLEtBQUs7Z0JBQVM7b0JBQ1pmO29CQUNBO2dCQUNGO1lBRUEsS0FBSztnQkFBa0I7b0JBQ3JCZ0IsSUFBQUEsNEJBQWE7b0JBQ2I7Z0JBQ0Y7WUFFQSxLQUFLO2dCQUEwQjtvQkFDN0JDLElBQUFBLDRDQUFxQjtvQkFDckI7Z0JBQ0Y7WUFFQTtnQkFDRUMsUUFBUUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVULE9BQU8sRUFBRSxDQUFDO2dCQUN6QztRQUNKO0lBQ0Y7QUFDRixPQUFPO0lBQ0xRLFFBQVFFLEtBQUssQ0FBQztBQUNoQjtBQUVBOztDQUVDLEdBQ0QsU0FBUzNDO0lBQ1AsTUFBTTRDLFVBQVVDLGVBQU0sQ0FBQ0MsSUFBSSxDQUFDO0lBRTVCLElBQUlGLFNBQVM7UUFDWEcsZUFBTSxDQUFDOUIsTUFBTSxDQUFDO1lBQUVWLE1BQU1xQztRQUFRO0lBQ2hDLE9BQU87UUFDTCxNQUFNSSxVQUFVekMsYUFBSSxDQUFDQyxPQUFPLENBQUNXLFFBQVE4QixHQUFHLElBQUk7UUFDNUMsSUFBSUMsV0FBRSxDQUFDQyxVQUFVLENBQUNILFVBQVU7WUFDMUJELGVBQU0sQ0FBQzlCLE1BQU0sQ0FBQztnQkFDWlYsTUFBTXlDO1lBQ1I7UUFDRjtJQUNGO0FBQ0YifQ==