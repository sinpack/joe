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
    baseBlockFields: function() {
        return _baseBlockFields.baseBlockFields;
    },
    baseIDField: function() {
        return _baseIDField.baseIDField;
    },
    buildConfig: function() {
        return _build.buildConfig;
    },
    defaults: function() {
        return _defaults.defaults;
    },
    sanitizeConfig: function() {
        return _sanitize.sanitizeConfig;
    },
    sanitizeFields: function() {
        return _sanitize1.sanitizeFields;
    }
});
const _build = require("./dist/config/build");
_export_star(require("./dist/config/types"), exports);
const _defaults = require("./dist/config/defaults");
const _sanitize = require("./dist/config/sanitize");
const _baseBlockFields = require("./dist/fields/baseFields/baseBlockFields");
const _baseIDField = require("./dist/fields/baseFields/baseIDField");
const _sanitize1 = require("./dist/fields/config/sanitize");
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHBvcnRzL2NvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBidWlsZENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9idWlsZCdcbmV4cG9ydCAqIGZyb20gJy4uL2NvbmZpZy90eXBlcydcblxuZXhwb3J0IHsgdHlwZSBGaWVsZFR5cGVzIH0gZnJvbSAnLi4vYWRtaW4vY29tcG9uZW50cy9mb3Jtcy9maWVsZC10eXBlcydcbmV4cG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi4vY29uZmlnL2RlZmF1bHRzJ1xuZXhwb3J0IHsgc2FuaXRpemVDb25maWcgfSBmcm9tICcuLi9jb25maWcvc2FuaXRpemUnXG5leHBvcnQgeyBiYXNlQmxvY2tGaWVsZHMgfSBmcm9tICcuLi9maWVsZHMvYmFzZUZpZWxkcy9iYXNlQmxvY2tGaWVsZHMnXG5leHBvcnQgeyBiYXNlSURGaWVsZCB9IGZyb20gJy4uL2ZpZWxkcy9iYXNlRmllbGRzL2Jhc2VJREZpZWxkJ1xuZXhwb3J0IHsgc2FuaXRpemVGaWVsZHMgfSBmcm9tICcuLi9maWVsZHMvY29uZmlnL3Nhbml0aXplJ1xuIl0sIm5hbWVzIjpbImJhc2VCbG9ja0ZpZWxkcyIsImJhc2VJREZpZWxkIiwiYnVpbGRDb25maWciLCJkZWZhdWx0cyIsInNhbml0aXplQ29uZmlnIiwic2FuaXRpemVGaWVsZHMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQU1TQSxlQUFlO2VBQWZBLGdDQUFlOztJQUNmQyxXQUFXO2VBQVhBLHdCQUFXOztJQVBYQyxXQUFXO2VBQVhBLGtCQUFXOztJQUlYQyxRQUFRO2VBQVJBLGtCQUFROztJQUNSQyxjQUFjO2VBQWRBLHdCQUFjOztJQUdkQyxjQUFjO2VBQWRBLHlCQUFjOzs7dUJBUks7cUJBQ2Q7MEJBR1c7MEJBQ007aUNBQ0M7NkJBQ0o7MkJBQ0cifQ==