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
const _sanitizefilename = /*#__PURE__*/ _interop_require_default(require("sanitize-filename"));
const _docWithFilenameExists = /*#__PURE__*/ _interop_require_default(require("./docWithFilenameExists"));
const _fileExists = /*#__PURE__*/ _interop_require_default(require("./fileExists"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const incrementName = (name)=>{
    const extension = name.split('.').pop();
    const baseFilename = (0, _sanitizefilename.default)(name.substring(0, name.lastIndexOf('.')) || name);
    let incrementedName = baseFilename;
    const regex = /(.*)-(\d+)$/;
    const found = baseFilename.match(regex);
    if (found === null) {
        incrementedName += '-1';
    } else {
        const matchedName = found[1];
        const matchedNumber = found[2];
        const incremented = Number(matchedNumber) + 1;
        incrementedName = `${matchedName}-${incremented}`;
    }
    return `${incrementedName}.${extension}`;
};
async function getSafeFileName({ collectionSlug, desiredFilename, req, staticPath }) {
    let modifiedFilename = desiredFilename;
    // eslint-disable-next-line no-await-in-loop
    while(await (0, _docWithFilenameExists.default)({
        collectionSlug,
        filename: modifiedFilename,
        path: staticPath,
        req
    }) || await (0, _fileExists.default)(`${staticPath}/${modifiedFilename}`)){
        modifiedFilename = incrementName(modifiedFilename);
    }
    return modifiedFilename;
}
const _default = getSafeFileName;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGxvYWRzL2dldFNhZmVGaWxlbmFtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2FuaXRpemUgZnJvbSAnc2FuaXRpemUtZmlsZW5hbWUnXG5cbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi9leHByZXNzL3R5cGVzJ1xuXG5pbXBvcnQgZG9jV2l0aEZpbGVuYW1lRXhpc3RzIGZyb20gJy4vZG9jV2l0aEZpbGVuYW1lRXhpc3RzJ1xuaW1wb3J0IGZpbGVFeGlzdHMgZnJvbSAnLi9maWxlRXhpc3RzJ1xuXG5jb25zdCBpbmNyZW1lbnROYW1lID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICBjb25zdCBleHRlbnNpb24gPSBuYW1lLnNwbGl0KCcuJykucG9wKClcbiAgY29uc3QgYmFzZUZpbGVuYW1lID0gc2FuaXRpemUobmFtZS5zdWJzdHJpbmcoMCwgbmFtZS5sYXN0SW5kZXhPZignLicpKSB8fCBuYW1lKVxuICBsZXQgaW5jcmVtZW50ZWROYW1lID0gYmFzZUZpbGVuYW1lXG4gIGNvbnN0IHJlZ2V4ID0gLyguKiktKFxcZCspJC9cbiAgY29uc3QgZm91bmQgPSBiYXNlRmlsZW5hbWUubWF0Y2gocmVnZXgpXG4gIGlmIChmb3VuZCA9PT0gbnVsbCkge1xuICAgIGluY3JlbWVudGVkTmFtZSArPSAnLTEnXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbWF0Y2hlZE5hbWUgPSBmb3VuZFsxXVxuICAgIGNvbnN0IG1hdGNoZWROdW1iZXIgPSBmb3VuZFsyXVxuICAgIGNvbnN0IGluY3JlbWVudGVkID0gTnVtYmVyKG1hdGNoZWROdW1iZXIpICsgMVxuICAgIGluY3JlbWVudGVkTmFtZSA9IGAke21hdGNoZWROYW1lfS0ke2luY3JlbWVudGVkfWBcbiAgfVxuICByZXR1cm4gYCR7aW5jcmVtZW50ZWROYW1lfS4ke2V4dGVuc2lvbn1gXG59XG5cbnR5cGUgQXJncyA9IHtcbiAgY29sbGVjdGlvblNsdWc6IHN0cmluZ1xuICBkZXNpcmVkRmlsZW5hbWU6IHN0cmluZ1xuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIHN0YXRpY1BhdGg6IHN0cmluZ1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRTYWZlRmlsZU5hbWUoe1xuICBjb2xsZWN0aW9uU2x1ZyxcbiAgZGVzaXJlZEZpbGVuYW1lLFxuICByZXEsXG4gIHN0YXRpY1BhdGgsXG59OiBBcmdzKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgbGV0IG1vZGlmaWVkRmlsZW5hbWUgPSBkZXNpcmVkRmlsZW5hbWVcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICB3aGlsZSAoXG4gICAgKGF3YWl0IGRvY1dpdGhGaWxlbmFtZUV4aXN0cyh7XG4gICAgICBjb2xsZWN0aW9uU2x1ZyxcbiAgICAgIGZpbGVuYW1lOiBtb2RpZmllZEZpbGVuYW1lLFxuICAgICAgcGF0aDogc3RhdGljUGF0aCxcbiAgICAgIHJlcSxcbiAgICB9KSkgfHxcbiAgICAoYXdhaXQgZmlsZUV4aXN0cyhgJHtzdGF0aWNQYXRofS8ke21vZGlmaWVkRmlsZW5hbWV9YCkpXG4gICkge1xuICAgIG1vZGlmaWVkRmlsZW5hbWUgPSBpbmNyZW1lbnROYW1lKG1vZGlmaWVkRmlsZW5hbWUpXG4gIH1cbiAgcmV0dXJuIG1vZGlmaWVkRmlsZW5hbWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0U2FmZUZpbGVOYW1lXG4iXSwibmFtZXMiOlsiaW5jcmVtZW50TmFtZSIsIm5hbWUiLCJleHRlbnNpb24iLCJzcGxpdCIsInBvcCIsImJhc2VGaWxlbmFtZSIsInNhbml0aXplIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJpbmNyZW1lbnRlZE5hbWUiLCJyZWdleCIsImZvdW5kIiwibWF0Y2giLCJtYXRjaGVkTmFtZSIsIm1hdGNoZWROdW1iZXIiLCJpbmNyZW1lbnRlZCIsIk51bWJlciIsImdldFNhZmVGaWxlTmFtZSIsImNvbGxlY3Rpb25TbHVnIiwiZGVzaXJlZEZpbGVuYW1lIiwicmVxIiwic3RhdGljUGF0aCIsIm1vZGlmaWVkRmlsZW5hbWUiLCJkb2NXaXRoRmlsZW5hbWVFeGlzdHMiLCJmaWxlbmFtZSIsInBhdGgiLCJmaWxlRXhpc3RzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQXNEQTs7O2VBQUE7Ozt5RUF0RHFCOzhFQUlhO21FQUNYOzs7Ozs7QUFFdkIsTUFBTUEsZ0JBQWdCLENBQUNDO0lBQ3JCLE1BQU1DLFlBQVlELEtBQUtFLEtBQUssQ0FBQyxLQUFLQyxHQUFHO0lBQ3JDLE1BQU1DLGVBQWVDLElBQUFBLHlCQUFRLEVBQUNMLEtBQUtNLFNBQVMsQ0FBQyxHQUFHTixLQUFLTyxXQUFXLENBQUMsU0FBU1A7SUFDMUUsSUFBSVEsa0JBQWtCSjtJQUN0QixNQUFNSyxRQUFRO0lBQ2QsTUFBTUMsUUFBUU4sYUFBYU8sS0FBSyxDQUFDRjtJQUNqQyxJQUFJQyxVQUFVLE1BQU07UUFDbEJGLG1CQUFtQjtJQUNyQixPQUFPO1FBQ0wsTUFBTUksY0FBY0YsS0FBSyxDQUFDLEVBQUU7UUFDNUIsTUFBTUcsZ0JBQWdCSCxLQUFLLENBQUMsRUFBRTtRQUM5QixNQUFNSSxjQUFjQyxPQUFPRixpQkFBaUI7UUFDNUNMLGtCQUFrQixDQUFDLEVBQUVJLFlBQVksQ0FBQyxFQUFFRSxZQUFZLENBQUM7SUFDbkQ7SUFDQSxPQUFPLENBQUMsRUFBRU4sZ0JBQWdCLENBQUMsRUFBRVAsVUFBVSxDQUFDO0FBQzFDO0FBU0EsZUFBZWUsZ0JBQWdCLEVBQzdCQyxjQUFjLEVBQ2RDLGVBQWUsRUFDZkMsR0FBRyxFQUNIQyxVQUFVLEVBQ0w7SUFDTCxJQUFJQyxtQkFBbUJIO0lBRXZCLDRDQUE0QztJQUM1QyxNQUNFLEFBQUMsTUFBTUksSUFBQUEsOEJBQXFCLEVBQUM7UUFDM0JMO1FBQ0FNLFVBQVVGO1FBQ1ZHLE1BQU1KO1FBQ05EO0lBQ0YsTUFDQyxNQUFNTSxJQUFBQSxtQkFBVSxFQUFDLENBQUMsRUFBRUwsV0FBVyxDQUFDLEVBQUVDLGlCQUFpQixDQUFDLEVBQ3JEO1FBQ0FBLG1CQUFtQnRCLGNBQWNzQjtJQUNuQztJQUNBLE9BQU9BO0FBQ1Q7TUFFQSxXQUFlTCJ9