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
    Payload: function() {
        return Payload;
    },
    default: function() {
        return _default;
    },
    getPayload: function() {
        return _payload.getPayload;
    }
});
const _initHTTP = require("./initHTTP");
const _payload = require("./payload");
require('isomorphic-fetch');
class Payload extends _payload.BasePayload {
    async init(options) {
        const payload = await (0, _initHTTP.initHTTP)(options);
        Object.assign(this, payload);
        if (!options.disableOnInit) {
            if (typeof options.onInit === 'function') await options.onInit(this);
            if (typeof this.config.onInit === 'function') await this.config.onInit(this);
        }
        return payload;
    }
}
const payload = new Payload();
const _default = payload;
module.exports = payload;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFR5cGVXaXRoSUQgfSBmcm9tICcuL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgSW5pdE9wdGlvbnMgfSBmcm9tICcuL2NvbmZpZy90eXBlcydcbmltcG9ydCB0eXBlIHsgQmFzZURhdGFiYXNlQWRhcHRlciB9IGZyb20gJy4vZGF0YWJhc2UvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi9leHByZXNzL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBUeXBlV2l0aElEIGFzIEdsb2JhbFR5cGVXaXRoSUQgfSBmcm9tICcuL2dsb2JhbHMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkIGFzIExvY2FsUGF5bG9hZCB9IGZyb20gJy4vcGF5bG9hZCdcblxuaW1wb3J0IHsgaW5pdEhUVFAgfSBmcm9tICcuL2luaXRIVFRQJ1xuaW1wb3J0IHsgQmFzZVBheWxvYWQgfSBmcm9tICcuL3BheWxvYWQnXG5cbmV4cG9ydCB7IGdldFBheWxvYWQgfSBmcm9tICcuL3BheWxvYWQnXG5cbnJlcXVpcmUoJ2lzb21vcnBoaWMtZmV0Y2gnKVxuXG5leHBvcnQgY2xhc3MgUGF5bG9hZCBleHRlbmRzIEJhc2VQYXlsb2FkPEdlbmVyYXRlZFR5cGVzPiB7XG4gIGFzeW5jIGluaXQob3B0aW9uczogSW5pdE9wdGlvbnMpOiBQcm9taXNlPExvY2FsUGF5bG9hZD4ge1xuICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCBpbml0SFRUUChvcHRpb25zKVxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgcGF5bG9hZClcblxuICAgIGlmICghb3B0aW9ucy5kaXNhYmxlT25Jbml0KSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25Jbml0ID09PSAnZnVuY3Rpb24nKSBhd2FpdCBvcHRpb25zLm9uSW5pdCh0aGlzKVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5vbkluaXQgPT09ICdmdW5jdGlvbicpIGF3YWl0IHRoaXMuY29uZmlnLm9uSW5pdCh0aGlzKVxuICAgIH1cblxuICAgIHJldHVybiBwYXlsb2FkXG4gIH1cbn1cblxuY29uc3QgcGF5bG9hZCA9IG5ldyBQYXlsb2FkKClcblxuZXhwb3J0IGRlZmF1bHQgcGF5bG9hZFxubW9kdWxlLmV4cG9ydHMgPSBwYXlsb2FkXG5cbnR5cGUgR2VuZXJhdGVkVHlwZXMgPSB7XG4gIGNvbGxlY3Rpb25zOiB7XG4gICAgW3NsdWc6IG51bWJlciB8IHN0cmluZyB8IHN5bWJvbF06IFR5cGVXaXRoSUQgJiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICB9XG4gIGdsb2JhbHM6IHtcbiAgICBbc2x1ZzogbnVtYmVyIHwgc3RyaW5nIHwgc3ltYm9sXTogR2xvYmFsVHlwZVdpdGhJRCAmIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIH1cbn1cblxudHlwZSBEYXRhYmFzZUFkYXB0ZXIgPSBCYXNlRGF0YWJhc2VBZGFwdGVyXG5cbmV4cG9ydCB0eXBlIHsgRGF0YWJhc2VBZGFwdGVyLCBHZW5lcmF0ZWRUeXBlcywgUmVxdWVzdENvbnRleHQgfVxuIl0sIm5hbWVzIjpbIlBheWxvYWQiLCJnZXRQYXlsb2FkIiwicmVxdWlyZSIsIkJhc2VQYXlsb2FkIiwiaW5pdCIsIm9wdGlvbnMiLCJwYXlsb2FkIiwiaW5pdEhUVFAiLCJPYmplY3QiLCJhc3NpZ24iLCJkaXNhYmxlT25Jbml0Iiwib25Jbml0IiwiY29uZmlnIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQWNhQSxPQUFPO2VBQVBBOztJQWdCYixPQUFzQjtlQUF0Qjs7SUFwQlNDLFVBQVU7ZUFBVkEsbUJBQVU7OzswQkFITTt5QkFDRztBQUk1QkMsUUFBUTtBQUVELE1BQU1GLGdCQUFnQkcsb0JBQVc7SUFDdEMsTUFBTUMsS0FBS0MsT0FBb0IsRUFBeUI7UUFDdEQsTUFBTUMsVUFBVSxNQUFNQyxJQUFBQSxrQkFBUSxFQUFDRjtRQUMvQkcsT0FBT0MsTUFBTSxDQUFDLElBQUksRUFBRUg7UUFFcEIsSUFBSSxDQUFDRCxRQUFRSyxhQUFhLEVBQUU7WUFDMUIsSUFBSSxPQUFPTCxRQUFRTSxNQUFNLEtBQUssWUFBWSxNQUFNTixRQUFRTSxNQUFNLENBQUMsSUFBSTtZQUNuRSxJQUFJLE9BQU8sSUFBSSxDQUFDQyxNQUFNLENBQUNELE1BQU0sS0FBSyxZQUFZLE1BQU0sSUFBSSxDQUFDQyxNQUFNLENBQUNELE1BQU0sQ0FBQyxJQUFJO1FBQzdFO1FBRUEsT0FBT0w7SUFDVDtBQUNGO0FBRUEsTUFBTUEsVUFBVSxJQUFJTjtNQUVwQixXQUFlTTtBQUNmTyxPQUFPQyxPQUFPLEdBQUdSIn0=