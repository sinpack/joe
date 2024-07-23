"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "timestamp", {
    enumerable: true,
    get: function() {
        return timestamp;
    }
});
const timestamp = (label)=>{
    if (!process.env.PAYLOAD_TIME) process.env.PAYLOAD_TIME = String(new Date().getTime());
    const now = new Date();
    console.log(`[${now.getTime() - Number(process.env.PAYLOAD_TIME)}ms] ${label}`);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdGltZXN0YW1wLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0aW1lc3RhbXAgPSAobGFiZWwpID0+IHtcbiAgaWYgKCFwcm9jZXNzLmVudi5QQVlMT0FEX1RJTUUpIHByb2Nlc3MuZW52LlBBWUxPQURfVElNRSA9IFN0cmluZyhuZXcgRGF0ZSgpLmdldFRpbWUoKSlcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxuICBjb25zb2xlLmxvZyhgWyR7bm93LmdldFRpbWUoKSAtIE51bWJlcihwcm9jZXNzLmVudi5QQVlMT0FEX1RJTUUpfW1zXSAke2xhYmVsfWApXG59XG4iXSwibmFtZXMiOlsidGltZXN0YW1wIiwibGFiZWwiLCJwcm9jZXNzIiwiZW52IiwiUEFZTE9BRF9USU1FIiwiU3RyaW5nIiwiRGF0ZSIsImdldFRpbWUiLCJub3ciLCJjb25zb2xlIiwibG9nIiwiTnVtYmVyIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQUFhQTs7O2VBQUFBOzs7QUFBTixNQUFNQSxZQUFZLENBQUNDO0lBQ3hCLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxZQUFZLEVBQUVGLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxHQUFHQyxPQUFPLElBQUlDLE9BQU9DLE9BQU87SUFDbkYsTUFBTUMsTUFBTSxJQUFJRjtJQUNoQkcsUUFBUUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFRixJQUFJRCxPQUFPLEtBQUtJLE9BQU9ULFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxFQUFFLElBQUksRUFBRUgsTUFBTSxDQUFDO0FBQ2hGIn0=