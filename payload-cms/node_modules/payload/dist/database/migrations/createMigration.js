/* eslint-disable no-restricted-syntax, no-await-in-loop */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createMigration", {
    enumerable: true,
    get: function() {
        return createMigration;
    }
});
const _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
const _migrationTemplate = require("./migrationTemplate");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const createMigration = async function createMigration({ migrationName, payload }) {
    const dir = payload.db.migrationDir;
    if (!_fs.default.existsSync(dir)) {
        _fs.default.mkdirSync(dir);
    }
    const [yyymmdd, hhmmss] = new Date().toISOString().split('T');
    const formattedDate = yyymmdd.replace(/\D/g, '');
    const formattedTime = hhmmss.split('.')[0].replace(/\D/g, '');
    const timestamp = `${formattedDate}_${formattedTime}`;
    const formattedName = migrationName.replace(/\W/g, '_');
    const fileName = `${timestamp}_${formattedName}.ts`;
    const filePath = `${dir}/${fileName}`;
    _fs.default.writeFileSync(filePath, _migrationTemplate.migrationTemplate);
    payload.logger.info({
        msg: `Migration created at ${filePath}`
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zL2NyZWF0ZU1pZ3JhdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCwgbm8tYXdhaXQtaW4tbG9vcCAqL1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuXG5pbXBvcnQgdHlwZSB7IENyZWF0ZU1pZ3JhdGlvbiB9IGZyb20gJy4uL3R5cGVzJ1xuXG5pbXBvcnQgeyBtaWdyYXRpb25UZW1wbGF0ZSB9IGZyb20gJy4vbWlncmF0aW9uVGVtcGxhdGUnXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNaWdyYXRpb246IENyZWF0ZU1pZ3JhdGlvbiA9IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU1pZ3JhdGlvbih7XG4gIG1pZ3JhdGlvbk5hbWUsXG4gIHBheWxvYWQsXG59KSB7XG4gIGNvbnN0IGRpciA9IHBheWxvYWQuZGIubWlncmF0aW9uRGlyXG4gIGlmICghZnMuZXhpc3RzU3luYyhkaXIpKSB7XG4gICAgZnMubWtkaXJTeW5jKGRpcilcbiAgfVxuXG4gIGNvbnN0IFt5eXltbWRkLCBoaG1tc3NdID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylcbiAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IHl5eW1tZGQucmVwbGFjZSgvXFxEL2csICcnKVxuICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gaGhtbXNzLnNwbGl0KCcuJylbMF0ucmVwbGFjZSgvXFxEL2csICcnKVxuXG4gIGNvbnN0IHRpbWVzdGFtcCA9IGAke2Zvcm1hdHRlZERhdGV9XyR7Zm9ybWF0dGVkVGltZX1gXG5cbiAgY29uc3QgZm9ybWF0dGVkTmFtZSA9IG1pZ3JhdGlvbk5hbWUucmVwbGFjZSgvXFxXL2csICdfJylcbiAgY29uc3QgZmlsZU5hbWUgPSBgJHt0aW1lc3RhbXB9XyR7Zm9ybWF0dGVkTmFtZX0udHNgXG4gIGNvbnN0IGZpbGVQYXRoID0gYCR7ZGlyfS8ke2ZpbGVOYW1lfWBcbiAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgbWlncmF0aW9uVGVtcGxhdGUpXG4gIHBheWxvYWQubG9nZ2VyLmluZm8oeyBtc2c6IGBNaWdyYXRpb24gY3JlYXRlZCBhdCAke2ZpbGVQYXRofWAgfSlcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVNaWdyYXRpb24iLCJtaWdyYXRpb25OYW1lIiwicGF5bG9hZCIsImRpciIsImRiIiwibWlncmF0aW9uRGlyIiwiZnMiLCJleGlzdHNTeW5jIiwibWtkaXJTeW5jIiwieXl5bW1kZCIsImhobW1zcyIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwiZm9ybWF0dGVkRGF0ZSIsInJlcGxhY2UiLCJmb3JtYXR0ZWRUaW1lIiwidGltZXN0YW1wIiwiZm9ybWF0dGVkTmFtZSIsImZpbGVOYW1lIiwiZmlsZVBhdGgiLCJ3cml0ZUZpbGVTeW5jIiwibWlncmF0aW9uVGVtcGxhdGUiLCJsb2dnZXIiLCJpbmZvIiwibXNnIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEOzs7OytCQU81Q0E7OztlQUFBQTs7OzJEQU5FO21DQUltQjs7Ozs7O0FBRTNCLE1BQU1BLGtCQUFtQyxlQUFlQSxnQkFBZ0IsRUFDN0VDLGFBQWEsRUFDYkMsT0FBTyxFQUNSO0lBQ0MsTUFBTUMsTUFBTUQsUUFBUUUsRUFBRSxDQUFDQyxZQUFZO0lBQ25DLElBQUksQ0FBQ0MsV0FBRSxDQUFDQyxVQUFVLENBQUNKLE1BQU07UUFDdkJHLFdBQUUsQ0FBQ0UsU0FBUyxDQUFDTDtJQUNmO0lBRUEsTUFBTSxDQUFDTSxTQUFTQyxPQUFPLEdBQUcsSUFBSUMsT0FBT0MsV0FBVyxHQUFHQyxLQUFLLENBQUM7SUFDekQsTUFBTUMsZ0JBQWdCTCxRQUFRTSxPQUFPLENBQUMsT0FBTztJQUM3QyxNQUFNQyxnQkFBZ0JOLE9BQU9HLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDRSxPQUFPLENBQUMsT0FBTztJQUUxRCxNQUFNRSxZQUFZLENBQUMsRUFBRUgsY0FBYyxDQUFDLEVBQUVFLGNBQWMsQ0FBQztJQUVyRCxNQUFNRSxnQkFBZ0JqQixjQUFjYyxPQUFPLENBQUMsT0FBTztJQUNuRCxNQUFNSSxXQUFXLENBQUMsRUFBRUYsVUFBVSxDQUFDLEVBQUVDLGNBQWMsR0FBRyxDQUFDO0lBQ25ELE1BQU1FLFdBQVcsQ0FBQyxFQUFFakIsSUFBSSxDQUFDLEVBQUVnQixTQUFTLENBQUM7SUFDckNiLFdBQUUsQ0FBQ2UsYUFBYSxDQUFDRCxVQUFVRSxvQ0FBaUI7SUFDNUNwQixRQUFRcUIsTUFBTSxDQUFDQyxJQUFJLENBQUM7UUFBRUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFTCxTQUFTLENBQUM7SUFBQztBQUNoRSJ9