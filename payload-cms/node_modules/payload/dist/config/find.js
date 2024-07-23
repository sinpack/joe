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
const _findup = /*#__PURE__*/ _interop_require_default(require("find-up"));
const _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * Returns the source and output paths from the nearest tsconfig.json file.
 * If no tsconfig.json file is found, returns the current working directory.
 * @returns An object containing the source and output paths.
 */ const getTSConfigPaths = ()=>{
    const tsConfigPath = _findup.default.sync('tsconfig.json');
    if (!tsConfigPath) {
        return {
            outPath: process.cwd(),
            srcPath: process.cwd()
        };
    }
    try {
        // Read the file as a string and remove trailing commas
        const rawTsConfig = _fs.default.readFileSync(tsConfigPath, 'utf-8').replace(/,\s*\]/g, ']').replace(/,\s*\}/g, '}');
        const tsConfig = JSON.parse(rawTsConfig);
        const srcPath = tsConfig.compilerOptions?.rootDir || process.cwd();
        const outPath = tsConfig.compilerOptions?.outDir || process.cwd();
        return {
            outPath,
            srcPath
        };
    } catch (error) {
        console.error(`Error parsing tsconfig.json: ${error}`) // Do not throw the error, as we can still continue with the other config path finding methods
        ;
        return {
            outPath: process.cwd(),
            srcPath: process.cwd()
        };
    }
};
/**
 * Searches for a Payload configuration file.
 * @returns The absolute path to the Payload configuration file.
 * @throws An error if no configuration file is found.
 */ const findConfig = ()=>{
    // If the developer has specified a config path,
    // format it if relative and use it directly if absolute
    if (process.env.PAYLOAD_CONFIG_PATH) {
        if (_path.default.isAbsolute(process.env.PAYLOAD_CONFIG_PATH)) {
            return process.env.PAYLOAD_CONFIG_PATH;
        }
        return _path.default.resolve(process.cwd(), process.env.PAYLOAD_CONFIG_PATH);
    }
    const { outPath, srcPath } = getTSConfigPaths();
    const searchPaths = process.env.NODE_ENV === 'production' ? [
        outPath,
        srcPath
    ] : [
        srcPath
    ];
    // eslint-disable-next-line no-restricted-syntax
    for (const searchPath of searchPaths){
        const configPath = _findup.default.sync((dir)=>{
            const tsPath = _path.default.join(dir, 'payload.config.ts');
            const hasTS = _findup.default.sync.exists(tsPath);
            if (hasTS) {
                return tsPath;
            }
            const jsPath = _path.default.join(dir, 'payload.config.js');
            const hasJS = _findup.default.sync.exists(jsPath);
            if (hasJS) {
                return jsPath;
            }
            return undefined;
        }, {
            cwd: searchPath
        });
        if (configPath) {
            return configPath;
        }
    }
    // If no config file is found in the directories defined by tsconfig.json,
    // try searching in the 'src' and 'dist' directory as a last resort, as they are most commonly used
    if (process.env.NODE_ENV === 'production') {
        const distConfigPath = _findup.default.sync([
            'payload.config.js',
            'payload.config.ts'
        ], {
            cwd: _path.default.resolve(process.cwd(), 'dist')
        });
        if (distConfigPath) return distConfigPath;
    } else {
        const srcConfigPath = _findup.default.sync([
            'payload.config.js',
            'payload.config.ts'
        ], {
            cwd: _path.default.resolve(process.cwd(), 'src')
        });
        if (srcConfigPath) return srcConfigPath;
    }
    throw new Error('Error: cannot find Payload config. Please create a configuration file located at the root of your current working directory called "payload.config.js" or "payload.config.ts".');
};
const _default = findConfig;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvZmluZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmluZFVwIGZyb20gJ2ZpbmQtdXAnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHNvdXJjZSBhbmQgb3V0cHV0IHBhdGhzIGZyb20gdGhlIG5lYXJlc3QgdHNjb25maWcuanNvbiBmaWxlLlxuICogSWYgbm8gdHNjb25maWcuanNvbiBmaWxlIGlzIGZvdW5kLCByZXR1cm5zIHRoZSBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5LlxuICogQHJldHVybnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHNvdXJjZSBhbmQgb3V0cHV0IHBhdGhzLlxuICovXG5jb25zdCBnZXRUU0NvbmZpZ1BhdGhzID0gKCk6IHsgb3V0UGF0aDogc3RyaW5nOyBzcmNQYXRoOiBzdHJpbmcgfSA9PiB7XG4gIGNvbnN0IHRzQ29uZmlnUGF0aCA9IGZpbmRVcC5zeW5jKCd0c2NvbmZpZy5qc29uJylcblxuICBpZiAoIXRzQ29uZmlnUGF0aCkge1xuICAgIHJldHVybiB7IG91dFBhdGg6IHByb2Nlc3MuY3dkKCksIHNyY1BhdGg6IHByb2Nlc3MuY3dkKCkgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBSZWFkIHRoZSBmaWxlIGFzIGEgc3RyaW5nIGFuZCByZW1vdmUgdHJhaWxpbmcgY29tbWFzXG4gICAgY29uc3QgcmF3VHNDb25maWcgPSBmc1xuICAgICAgLnJlYWRGaWxlU3luYyh0c0NvbmZpZ1BhdGgsICd1dGYtOCcpXG4gICAgICAucmVwbGFjZSgvLFxccypcXF0vZywgJ10nKVxuICAgICAgLnJlcGxhY2UoLyxcXHMqXFx9L2csICd9JylcblxuICAgIGNvbnN0IHRzQ29uZmlnID0gSlNPTi5wYXJzZShyYXdUc0NvbmZpZylcblxuICAgIGNvbnN0IHNyY1BhdGggPSB0c0NvbmZpZy5jb21waWxlck9wdGlvbnM/LnJvb3REaXIgfHwgcHJvY2Vzcy5jd2QoKVxuICAgIGNvbnN0IG91dFBhdGggPSB0c0NvbmZpZy5jb21waWxlck9wdGlvbnM/Lm91dERpciB8fCBwcm9jZXNzLmN3ZCgpXG5cbiAgICByZXR1cm4geyBvdXRQYXRoLCBzcmNQYXRoIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBFcnJvciBwYXJzaW5nIHRzY29uZmlnLmpzb246ICR7ZXJyb3J9YCkgLy8gRG8gbm90IHRocm93IHRoZSBlcnJvciwgYXMgd2UgY2FuIHN0aWxsIGNvbnRpbnVlIHdpdGggdGhlIG90aGVyIGNvbmZpZyBwYXRoIGZpbmRpbmcgbWV0aG9kc1xuICAgIHJldHVybiB7IG91dFBhdGg6IHByb2Nlc3MuY3dkKCksIHNyY1BhdGg6IHByb2Nlc3MuY3dkKCkgfVxuICB9XG59XG5cbi8qKlxuICogU2VhcmNoZXMgZm9yIGEgUGF5bG9hZCBjb25maWd1cmF0aW9uIGZpbGUuXG4gKiBAcmV0dXJucyBUaGUgYWJzb2x1dGUgcGF0aCB0byB0aGUgUGF5bG9hZCBjb25maWd1cmF0aW9uIGZpbGUuXG4gKiBAdGhyb3dzIEFuIGVycm9yIGlmIG5vIGNvbmZpZ3VyYXRpb24gZmlsZSBpcyBmb3VuZC5cbiAqL1xuY29uc3QgZmluZENvbmZpZyA9ICgpOiBzdHJpbmcgPT4ge1xuICAvLyBJZiB0aGUgZGV2ZWxvcGVyIGhhcyBzcGVjaWZpZWQgYSBjb25maWcgcGF0aCxcbiAgLy8gZm9ybWF0IGl0IGlmIHJlbGF0aXZlIGFuZCB1c2UgaXQgZGlyZWN0bHkgaWYgYWJzb2x1dGVcbiAgaWYgKHByb2Nlc3MuZW52LlBBWUxPQURfQ09ORklHX1BBVEgpIHtcbiAgICBpZiAocGF0aC5pc0Fic29sdXRlKHByb2Nlc3MuZW52LlBBWUxPQURfQ09ORklHX1BBVEgpKSB7XG4gICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuUEFZTE9BRF9DT05GSUdfUEFUSFxuICAgIH1cblxuICAgIHJldHVybiBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgcHJvY2Vzcy5lbnYuUEFZTE9BRF9DT05GSUdfUEFUSClcbiAgfVxuXG4gIGNvbnN0IHsgb3V0UGF0aCwgc3JjUGF0aCB9ID0gZ2V0VFNDb25maWdQYXRocygpXG5cbiAgY29uc3Qgc2VhcmNoUGF0aHMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gW291dFBhdGgsIHNyY1BhdGhdIDogW3NyY1BhdGhdXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gIGZvciAoY29uc3Qgc2VhcmNoUGF0aCBvZiBzZWFyY2hQYXRocykge1xuICAgIGNvbnN0IGNvbmZpZ1BhdGggPSBmaW5kVXAuc3luYyhcbiAgICAgIChkaXIpID0+IHtcbiAgICAgICAgY29uc3QgdHNQYXRoID0gcGF0aC5qb2luKGRpciwgJ3BheWxvYWQuY29uZmlnLnRzJylcbiAgICAgICAgY29uc3QgaGFzVFMgPSBmaW5kVXAuc3luYy5leGlzdHModHNQYXRoKVxuXG4gICAgICAgIGlmIChoYXNUUykge1xuICAgICAgICAgIHJldHVybiB0c1BhdGhcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGpzUGF0aCA9IHBhdGguam9pbihkaXIsICdwYXlsb2FkLmNvbmZpZy5qcycpXG4gICAgICAgIGNvbnN0IGhhc0pTID0gZmluZFVwLnN5bmMuZXhpc3RzKGpzUGF0aClcblxuICAgICAgICBpZiAoaGFzSlMpIHtcbiAgICAgICAgICByZXR1cm4ganNQYXRoXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgeyBjd2Q6IHNlYXJjaFBhdGggfSxcbiAgICApXG5cbiAgICBpZiAoY29uZmlnUGF0aCkge1xuICAgICAgcmV0dXJuIGNvbmZpZ1BhdGhcbiAgICB9XG4gIH1cblxuICAvLyBJZiBubyBjb25maWcgZmlsZSBpcyBmb3VuZCBpbiB0aGUgZGlyZWN0b3JpZXMgZGVmaW5lZCBieSB0c2NvbmZpZy5qc29uLFxuICAvLyB0cnkgc2VhcmNoaW5nIGluIHRoZSAnc3JjJyBhbmQgJ2Rpc3QnIGRpcmVjdG9yeSBhcyBhIGxhc3QgcmVzb3J0LCBhcyB0aGV5IGFyZSBtb3N0IGNvbW1vbmx5IHVzZWRcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBkaXN0Q29uZmlnUGF0aCA9IGZpbmRVcC5zeW5jKFsncGF5bG9hZC5jb25maWcuanMnLCAncGF5bG9hZC5jb25maWcudHMnXSwge1xuICAgICAgY3dkOiBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ2Rpc3QnKSxcbiAgICB9KVxuXG4gICAgaWYgKGRpc3RDb25maWdQYXRoKSByZXR1cm4gZGlzdENvbmZpZ1BhdGhcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzcmNDb25maWdQYXRoID0gZmluZFVwLnN5bmMoWydwYXlsb2FkLmNvbmZpZy5qcycsICdwYXlsb2FkLmNvbmZpZy50cyddLCB7XG4gICAgICBjd2Q6IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjJyksXG4gICAgfSlcblxuICAgIGlmIChzcmNDb25maWdQYXRoKSByZXR1cm4gc3JjQ29uZmlnUGF0aFxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICdFcnJvcjogY2Fubm90IGZpbmQgUGF5bG9hZCBjb25maWcuIFBsZWFzZSBjcmVhdGUgYSBjb25maWd1cmF0aW9uIGZpbGUgbG9jYXRlZCBhdCB0aGUgcm9vdCBvZiB5b3VyIGN1cnJlbnQgd29ya2luZyBkaXJlY3RvcnkgY2FsbGVkIFwicGF5bG9hZC5jb25maWcuanNcIiBvciBcInBheWxvYWQuY29uZmlnLnRzXCIuJyxcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmaW5kQ29uZmlnXG4iXSwibmFtZXMiOlsiZ2V0VFNDb25maWdQYXRocyIsInRzQ29uZmlnUGF0aCIsImZpbmRVcCIsInN5bmMiLCJvdXRQYXRoIiwicHJvY2VzcyIsImN3ZCIsInNyY1BhdGgiLCJyYXdUc0NvbmZpZyIsImZzIiwicmVhZEZpbGVTeW5jIiwicmVwbGFjZSIsInRzQ29uZmlnIiwiSlNPTiIsInBhcnNlIiwiY29tcGlsZXJPcHRpb25zIiwicm9vdERpciIsIm91dERpciIsImVycm9yIiwiY29uc29sZSIsImZpbmRDb25maWciLCJlbnYiLCJQQVlMT0FEX0NPTkZJR19QQVRIIiwicGF0aCIsImlzQWJzb2x1dGUiLCJyZXNvbHZlIiwic2VhcmNoUGF0aHMiLCJOT0RFX0VOViIsInNlYXJjaFBhdGgiLCJjb25maWdQYXRoIiwiZGlyIiwidHNQYXRoIiwiam9pbiIsImhhc1RTIiwiZXhpc3RzIiwianNQYXRoIiwiaGFzSlMiLCJ1bmRlZmluZWQiLCJkaXN0Q29uZmlnUGF0aCIsInNyY0NvbmZpZ1BhdGgiLCJFcnJvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBd0dBOzs7ZUFBQTs7OytEQXhHbUI7MkRBQ0o7NkRBQ0U7Ozs7OztBQUVqQjs7OztDQUlDLEdBQ0QsTUFBTUEsbUJBQW1CO0lBQ3ZCLE1BQU1DLGVBQWVDLGVBQU0sQ0FBQ0MsSUFBSSxDQUFDO0lBRWpDLElBQUksQ0FBQ0YsY0FBYztRQUNqQixPQUFPO1lBQUVHLFNBQVNDLFFBQVFDLEdBQUc7WUFBSUMsU0FBU0YsUUFBUUMsR0FBRztRQUFHO0lBQzFEO0lBRUEsSUFBSTtRQUNGLHVEQUF1RDtRQUN2RCxNQUFNRSxjQUFjQyxXQUFFLENBQ25CQyxZQUFZLENBQUNULGNBQWMsU0FDM0JVLE9BQU8sQ0FBQyxXQUFXLEtBQ25CQSxPQUFPLENBQUMsV0FBVztRQUV0QixNQUFNQyxXQUFXQyxLQUFLQyxLQUFLLENBQUNOO1FBRTVCLE1BQU1ELFVBQVVLLFNBQVNHLGVBQWUsRUFBRUMsV0FBV1gsUUFBUUMsR0FB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