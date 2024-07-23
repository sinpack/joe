"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unlinkTempFiles", {
    enumerable: true,
    get: function() {
        return unlinkTempFiles;
    }
});
const _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
const _util = require("util");
const _mapAsync = require("../utilities/mapAsync");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const unlinkFile = (0, _util.promisify)(_fs.default.unlink);
const unlinkTempFiles = async ({ collectionConfig, config, req })=>{
    if (config.upload?.useTempFiles && collectionConfig.upload) {
        const { files } = req;
        const fileArray = Array.isArray(files) ? files : [
            files
        ];
        await (0, _mapAsync.mapAsync)(fileArray, async ({ file })=>{
            // Still need this check because this will not be populated if using local API
            if (file?.tempFilePath) {
                await unlinkFile(file.tempFilePath);
            }
        });
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGxvYWRzL3VubGlua1RlbXBGaWxlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgeyBwcm9taXNpZnkgfSBmcm9tICd1dGlsJ1xuXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi9leHByZXNzL3R5cGVzJ1xuXG5pbXBvcnQgeyBtYXBBc3luYyB9IGZyb20gJy4uL3V0aWxpdGllcy9tYXBBc3luYydcblxuY29uc3QgdW5saW5rRmlsZSA9IHByb21pc2lmeShmcy51bmxpbmspXG5cbnR5cGUgQXJncyA9IHtcbiAgY29sbGVjdGlvbkNvbmZpZzogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xuICBjb25maWc6IFNhbml0aXplZENvbmZpZ1xuICByZXE6IFBheWxvYWRSZXF1ZXN0XG59XG4vKipcbiAqIFJlbW92ZSB0ZW1wIGZpbGVzIGlmIGVuYWJsZWQsIGFzIGV4cHJlc3MtZmlsZXVwbG9hZCBkb2VzIG5vdCBkbyB0aGlzIGF1dG9tYXRpY2FsbHlcbiAqL1xuZXhwb3J0IGNvbnN0IHVubGlua1RlbXBGaWxlczogKGFyZ3M6IEFyZ3MpID0+IFByb21pc2U8dm9pZD4gPSBhc3luYyAoe1xuICBjb2xsZWN0aW9uQ29uZmlnLFxuICBjb25maWcsXG4gIHJlcSxcbn0pID0+IHtcbiAgaWYgKGNvbmZpZy51cGxvYWQ/LnVzZVRlbXBGaWxlcyAmJiBjb2xsZWN0aW9uQ29uZmlnLnVwbG9hZCkge1xuICAgIGNvbnN0IHsgZmlsZXMgfSA9IHJlcVxuICAgIGNvbnN0IGZpbGVBcnJheSA9IEFycmF5LmlzQXJyYXkoZmlsZXMpID8gZmlsZXMgOiBbZmlsZXNdXG4gICAgYXdhaXQgbWFwQXN5bmMoZmlsZUFycmF5LCBhc3luYyAoeyBmaWxlIH0pID0+IHtcbiAgICAgIC8vIFN0aWxsIG5lZWQgdGhpcyBjaGVjayBiZWNhdXNlIHRoaXMgd2lsbCBub3QgYmUgcG9wdWxhdGVkIGlmIHVzaW5nIGxvY2FsIEFQSVxuICAgICAgaWYgKGZpbGU/LnRlbXBGaWxlUGF0aCkge1xuICAgICAgICBhd2FpdCB1bmxpbmtGaWxlKGZpbGUudGVtcEZpbGVQYXRoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ1bmxpbmtUZW1wRmlsZXMiLCJ1bmxpbmtGaWxlIiwicHJvbWlzaWZ5IiwiZnMiLCJ1bmxpbmsiLCJjb2xsZWN0aW9uQ29uZmlnIiwiY29uZmlnIiwicmVxIiwidXBsb2FkIiwidXNlVGVtcEZpbGVzIiwiZmlsZXMiLCJmaWxlQXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJtYXBBc3luYyIsImZpbGUiLCJ0ZW1wRmlsZVBhdGgiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBbUJhQTs7O2VBQUFBOzs7MkRBbkJFO3NCQUNXOzBCQU1EOzs7Ozs7QUFFekIsTUFBTUMsYUFBYUMsSUFBQUEsZUFBUyxFQUFDQyxXQUFFLENBQUNDLE1BQU07QUFVL0IsTUFBTUosa0JBQWlELE9BQU8sRUFDbkVLLGdCQUFnQixFQUNoQkMsTUFBTSxFQUNOQyxHQUFHLEVBQ0o7SUFDQyxJQUFJRCxPQUFPRSxNQUFNLEVBQUVDLGdCQUFnQkosaUJBQWlCRyxNQUFNLEVBQUU7UUFDMUQsTUFBTSxFQUFFRSxLQUFLLEVBQUUsR0FBR0g7UUFDbEIsTUFBTUksWUFBWUMsTUFBTUMsT0FBTyxDQUFDSCxTQUFTQSxRQUFRO1lBQUNBO1NBQU07UUFDeEQsTUFBTUksSUFBQUEsa0JBQVEsRUFBQ0gsV0FBVyxPQUFPLEVBQUVJLElBQUksRUFBRTtZQUN2Qyw4RUFBOEU7WUFDOUUsSUFBSUEsTUFBTUMsY0FBYztnQkFDdEIsTUFBTWYsV0FBV2MsS0FBS0MsWUFBWTtZQUNwQztRQUNGO0lBQ0Y7QUFDRiJ9