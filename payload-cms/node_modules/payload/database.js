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
    BaseDatabaseAdapter: function() {
        return _types.BaseDatabaseAdapter;
    },
    BeginTransaction: function() {
        return _types.BeginTransaction;
    },
    CommitTransaction: function() {
        return _types.CommitTransaction;
    },
    Connect: function() {
        return _types.Connect;
    },
    Count: function() {
        return _types.Count;
    },
    CountArgs: function() {
        return _types.CountArgs;
    },
    Create: function() {
        return _types.Create;
    },
    CreateArgs: function() {
        return _types.CreateArgs;
    },
    CreateGlobal: function() {
        return _types.CreateGlobal;
    },
    CreateGlobalArgs: function() {
        return _types.CreateGlobalArgs;
    },
    CreateGlobalVersion: function() {
        return _types.CreateGlobalVersion;
    },
    CreateGlobalVersionArgs: function() {
        return _types.CreateGlobalVersionArgs;
    },
    CreateMigration: function() {
        return _types.CreateMigration;
    },
    CreateVersion: function() {
        return _types.CreateVersion;
    },
    CreateVersionArgs: function() {
        return _types.CreateVersionArgs;
    },
    DBIdentifierName: function() {
        return _types.DBIdentifierName;
    },
    DeleteMany: function() {
        return _types.DeleteMany;
    },
    DeleteManyArgs: function() {
        return _types.DeleteManyArgs;
    },
    DeleteOne: function() {
        return _types.DeleteOne;
    },
    DeleteOneArgs: function() {
        return _types.DeleteOneArgs;
    },
    DeleteVersions: function() {
        return _types.DeleteVersions;
    },
    DeleteVersionsArgs: function() {
        return _types.DeleteVersionsArgs;
    },
    Destroy: function() {
        return _types.Destroy;
    },
    EntityPolicies: function() {
        return _types1.EntityPolicies;
    },
    Find: function() {
        return _types.Find;
    },
    FindArgs: function() {
        return _types.FindArgs;
    },
    FindGlobal: function() {
        return _types.FindGlobal;
    },
    FindGlobalArgs: function() {
        return _types.FindGlobalArgs;
    },
    FindGlobalVersions: function() {
        return _types.FindGlobalVersions;
    },
    FindGlobalVersionsArgs: function() {
        return _types.FindGlobalVersionsArgs;
    },
    FindOne: function() {
        return _types.FindOne;
    },
    FindOneArgs: function() {
        return _types.FindOneArgs;
    },
    FindVersions: function() {
        return _types.FindVersions;
    },
    FindVersionsArgs: function() {
        return _types.FindVersionsArgs;
    },
    Init: function() {
        return _types.Init;
    },
    Migration: function() {
        return _types.Migration;
    },
    MigrationData: function() {
        return _types.MigrationData;
    },
    PaginatedDocs: function() {
        return _types.PaginatedDocs;
    },
    PathToQuery: function() {
        return _types1.PathToQuery;
    },
    QueryDrafts: function() {
        return _types.QueryDrafts;
    },
    QueryDraftsArgs: function() {
        return _types.QueryDraftsArgs;
    },
    RollbackTransaction: function() {
        return _types.RollbackTransaction;
    },
    Transaction: function() {
        return _types.Transaction;
    },
    TypeWithVersion: function() {
        return _types.TypeWithVersion;
    },
    UpdateGlobal: function() {
        return _types.UpdateGlobal;
    },
    UpdateGlobalArgs: function() {
        return _types.UpdateGlobalArgs;
    },
    UpdateGlobalVersion: function() {
        return _types.UpdateGlobalVersion;
    },
    UpdateGlobalVersionArgs: function() {
        return _types.UpdateGlobalVersionArgs;
    },
    UpdateOne: function() {
        return _types.UpdateOne;
    },
    UpdateOneArgs: function() {
        return _types.UpdateOneArgs;
    },
    UpdateVersion: function() {
        return _types.UpdateVersion;
    },
    UpdateVersionArgs: function() {
        return _types.UpdateVersionArgs;
    },
    combineQueries: function() {
        return _combineQueries.combineQueries;
    },
    createDatabaseAdapter: function() {
        return _createDatabaseAdapter.createDatabaseAdapter;
    },
    createMigration: function() {
        return _createMigration.createMigration;
    },
    flattenWhereToOperators: function() {
        return _flattenWhereToOperators.default;
    },
    getLocalizedPaths: function() {
        return _getLocalizedPaths.getLocalizedPaths;
    },
    getMigrations: function() {
        return _getMigrations.getMigrations;
    },
    migrate: function() {
        return _migrate.migrate;
    },
    migrateDown: function() {
        return _migrateDown.migrateDown;
    },
    migrateRefresh: function() {
        return _migrateRefresh.migrateRefresh;
    },
    migrateReset: function() {
        return _migrateReset.migrateReset;
    },
    migrateStatus: function() {
        return _migrateStatus.migrateStatus;
    },
    migrationTemplate: function() {
        return _migrationTemplate.migrationTemplate;
    },
    migrationsCollection: function() {
        return _migrationsCollection.migrationsCollection;
    },
    readMigrationFiles: function() {
        return _readMigrationFiles.readMigrationFiles;
    },
    validateQueryPaths: function() {
        return _validateQueryPaths.validateQueryPaths;
    },
    validateSearchParam: function() {
        return _validateSearchParams.validateSearchParam;
    }
});
const _types = require("./dist/database/types");
const _types1 = _export_star(require("./dist/database/queryValidation/types"), exports);
const _combineQueries = require("./dist/database/combineQueries");
const _createDatabaseAdapter = require("./dist/database/createDatabaseAdapter");
const _flattenWhereToOperators = /*#__PURE__*/ _interop_require_default(require("./dist/database/flattenWhereToOperators"));
const _getLocalizedPaths = require("./dist/database/getLocalizedPaths");
const _createMigration = require("./dist/database/migrations/createMigration");
const _getMigrations = require("./dist/database/migrations/getMigrations");
const _migrate = require("./dist/database/migrations/migrate");
const _migrateDown = require("./dist/database/migrations/migrateDown");
const _migrateRefresh = require("./dist/database/migrations/migrateRefresh");
const _migrateReset = require("./dist/database/migrations/migrateReset");
const _migrateStatus = require("./dist/database/migrations/migrateStatus");
const _migrationTemplate = require("./dist/database/migrations/migrationTemplate");
const _migrationsCollection = require("./dist/database/migrations/migrationsCollection");
const _readMigrationFiles = require("./dist/database/migrations/readMigrationFiles");
const _validateQueryPaths = require("./dist/database/queryValidation/validateQueryPaths");
const _validateSearchParams = require("./dist/database/queryValidation/validateSearchParams");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHBvcnRzL2RhdGFiYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7XG4gIEJhc2VEYXRhYmFzZUFkYXB0ZXIsXG4gIEJlZ2luVHJhbnNhY3Rpb24sXG4gIENvbW1pdFRyYW5zYWN0aW9uLFxuICBDb25uZWN0LFxuICBDb3VudCxcbiAgQ291bnRBcmdzLFxuICBDcmVhdGUsXG4gIENyZWF0ZUFyZ3MsXG4gIENyZWF0ZUdsb2JhbCxcbiAgQ3JlYXRlR2xvYmFsQXJncyxcbiAgQ3JlYXRlR2xvYmFsVmVyc2lvbixcbiAgQ3JlYXRlR2xvYmFsVmVyc2lvbkFyZ3MsXG4gIENyZWF0ZU1pZ3JhdGlvbixcbiAgQ3JlYXRlVmVyc2lvbixcbiAgQ3JlYXRlVmVyc2lvbkFyZ3MsXG4gIERCSWRlbnRpZmllck5hbWUsXG4gIERlbGV0ZU1hbnksXG4gIERlbGV0ZU1hbnlBcmdzLFxuICBEZWxldGVPbmUsXG4gIERlbGV0ZU9uZUFyZ3MsXG4gIERlbGV0ZVZlcnNpb25zLFxuICBEZWxldGVWZXJzaW9uc0FyZ3MsXG4gIERlc3Ryb3ksXG4gIEZpbmQsXG4gIEZpbmRBcmdzLFxuICBGaW5kR2xvYmFsLFxuICBGaW5kR2xvYmFsQXJncyxcbiAgRmluZEdsb2JhbFZlcnNpb25zLFxuICBGaW5kR2xvYmFsVmVyc2lvbnNBcmdzLFxuICBGaW5kT25lLFxuICBGaW5kT25lQXJncyxcbiAgRmluZFZlcnNpb25zLFxuICBGaW5kVmVyc2lvbnNBcmdzLFxuICBJbml0LFxuICBNaWdyYXRpb24sXG4gIE1pZ3JhdGlvbkRhdGEsXG4gIFBhZ2luYXRlZERvY3MsXG4gIFF1ZXJ5RHJhZnRzLFxuICBRdWVyeURyYWZ0c0FyZ3MsXG4gIFJvbGxiYWNrVHJhbnNhY3Rpb24sXG4gIFRyYW5zYWN0aW9uLFxuICBUeXBlV2l0aFZlcnNpb24sXG4gIFVwZGF0ZUdsb2JhbCxcbiAgVXBkYXRlR2xvYmFsQXJncyxcbiAgVXBkYXRlR2xvYmFsVmVyc2lvbixcbiAgVXBkYXRlR2xvYmFsVmVyc2lvbkFyZ3MsXG4gIFVwZGF0ZU9uZSxcbiAgVXBkYXRlT25lQXJncyxcbiAgVXBkYXRlVmVyc2lvbixcbiAgVXBkYXRlVmVyc2lvbkFyZ3MsXG59IGZyb20gJy4uL2RhdGFiYXNlL3R5cGVzJ1xuXG5leHBvcnQgKiBmcm9tICcuLi9kYXRhYmFzZS9xdWVyeVZhbGlkYXRpb24vdHlwZXMnXG5cbmV4cG9ydCB7IGNvbWJpbmVRdWVyaWVzIH0gZnJvbSAnLi4vZGF0YWJhc2UvY29tYmluZVF1ZXJpZXMnXG5cbmV4cG9ydCB7IGNyZWF0ZURhdGFiYXNlQWRhcHRlciB9IGZyb20gJy4uL2RhdGFiYXNlL2NyZWF0ZURhdGFiYXNlQWRhcHRlcidcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBmbGF0dGVuV2hlcmVUb09wZXJhdG9ycyB9IGZyb20gJy4uL2RhdGFiYXNlL2ZsYXR0ZW5XaGVyZVRvT3BlcmF0b3JzJ1xuXG5leHBvcnQgeyBnZXRMb2NhbGl6ZWRQYXRocyB9IGZyb20gJy4uL2RhdGFiYXNlL2dldExvY2FsaXplZFBhdGhzJ1xuXG5leHBvcnQgeyBjcmVhdGVNaWdyYXRpb24gfSBmcm9tICcuLi9kYXRhYmFzZS9taWdyYXRpb25zL2NyZWF0ZU1pZ3JhdGlvbidcblxuZXhwb3J0IHsgZ2V0TWlncmF0aW9ucyB9IGZyb20gJy4uL2RhdGFiYXNlL21pZ3JhdGlvbnMvZ2V0TWlncmF0aW9ucydcblxuZXhwb3J0IHsgbWlncmF0ZSB9IGZyb20gJy4uL2RhdGFiYXNlL21pZ3JhdGlvbnMvbWlncmF0ZSdcblxuZXhwb3J0IHsgbWlncmF0ZURvd24gfSBmcm9tICcuLi9kYXRhYmFzZS9taWdyYXRpb25zL21pZ3JhdGVEb3duJ1xuXG5leHBvcnQgeyBtaWdyYXRlUmVmcmVzaCB9IGZyb20gJy4uL2RhdGFiYXNlL21pZ3JhdGlvbnMvbWlncmF0ZVJlZnJlc2gnXG5cbmV4cG9ydCB7IG1pZ3JhdGVSZXNldCB9IGZyb20gJy4uL2RhdGFiYXNlL21pZ3JhdGlvbnMvbWlncmF0ZVJlc2V0J1xuXG5leHBvcnQgeyBtaWdyYXRlU3RhdHVzIH0gZnJvbSAnLi4vZGF0YWJhc2UvbWlncmF0aW9ucy9taWdyYXRlU3RhdHVzJ1xuXG5leHBvcnQgeyBtaWdyYXRpb25UZW1wbGF0ZSB9IGZyb20gJy4uL2RhdGFiYXNlL21pZ3JhdGlvbnMvbWlncmF0aW9uVGVtcGxhdGUnXG5cbmV4cG9ydCB7IG1pZ3JhdGlvbnNDb2xsZWN0aW9uIH0gZnJvbSAnLi4vZGF0YWJhc2UvbWlncmF0aW9ucy9taWdyYXRpb25zQ29sbGVjdGlvbidcblxuZXhwb3J0IHsgcmVhZE1pZ3JhdGlvbkZpbGVzIH0gZnJvbSAnLi4vZGF0YWJhc2UvbWlncmF0aW9ucy9yZWFkTWlncmF0aW9uRmlsZXMnXG5cbmV4cG9ydCB7IEVudGl0eVBvbGljaWVzLCBQYXRoVG9RdWVyeSB9IGZyb20gJy4uL2RhdGFiYXNlL3F1ZXJ5VmFsaWRhdGlvbi90eXBlcydcblxuZXhwb3J0IHsgdmFsaWRhdGVRdWVyeVBhdGhzIH0gZnJvbSAnLi4vZGF0YWJhc2UvcXVlcnlWYWxpZGF0aW9uL3ZhbGlkYXRlUXVlcnlQYXRocydcblxuZXhwb3J0IHsgdmFsaWRhdGVTZWFyY2hQYXJhbSB9IGZyb20gJy4uL2RhdGFiYXNlL3F1ZXJ5VmFsaWRhdGlvbi92YWxpZGF0ZVNlYXJjaFBhcmFtcydcbiJdLCJuYW1lcyI6WyJCYXNlRGF0YWJhc2VBZGFwdGVyIiwiQmVnaW5UcmFuc2FjdGlvbiIsIkNvbW1pdFRyYW5zYWN0aW9uIiwiQ29ubmVjdCIsIkNvdW50IiwiQ291bnRBcmdzIiwiQ3JlYXRlIiwiQ3JlYXRlQXJncyIsIkNyZWF0ZUdsb2JhbCIsIkNyZWF0ZUdsb2JhbEFyZ3MiLCJDcmVhdGVHbG9iYWxWZXJzaW9uIiwiQ3JlYXRlR2xvYmFsVmVyc2lvbkFyZ3MiLCJDcmVhdGVNaWdyYXRpb24iLCJDcmVhdGVWZXJzaW9uIiwiQ3JlYXRlVmVyc2lvbkFyZ3MiLCJEQklkZW50aWZpZXJOYW1lIiwiRGVsZXRlTWFueSIsIkRlbGV0ZU1hbnlBcmdzIiwiRGVsZXRlT25lIiwiRGVsZXRlT25lQXJncyIsIkRlbGV0ZVZlcnNpb25zIiwiRGVsZXRlVmVyc2lvbnNBcmdzIiwiRGVzdHJveSIsIkVudGl0eVBvbGljaWVzIiwiRmluZCIsIkZpbmRBcmdzIiwiRmluZEdsb2JhbCIsIkZpbmRHbG9iYWxBcmdzIiwiRmluZEdsb2JhbFZlcnNpb25zIiwiRmluZEdsb2JhbFZlcnNpb25zQXJncyIsIkZpbmRPbmUiLCJGaW5kT25lQXJncyIsIkZpbmRWZXJzaW9ucyIsIkZpbmRWZXJzaW9uc0FyZ3MiLCJJbml0IiwiTWlncmF0aW9uIiwiTWlncmF0aW9uRGF0YSIsIlBhZ2luYXRlZERvY3MiLCJQYXRoVG9RdWVyeSIsIlF1ZXJ5RHJhZnRzIiwiUXVlcnlEcmFmdHNBcmdzIiwiUm9sbGJhY2tUcmFuc2FjdGlvbiIsIlRyYW5zYWN0aW9uIiwiVHlwZVdpdGhWZXJzaW9uIiwiVXBkYXRlR2xvYmFsIiwiVXBkYXRlR2xvYmFsQXJncyIsIlVwZGF0ZUdsb2JhbFZlcnNpb24iLCJVcGRhdGVHbG9iYWxWZXJzaW9uQXJncyIsIlVwZGF0ZU9uZSIsIlVwZGF0ZU9uZUFyZ3MiLCJVcGRhdGVWZXJzaW9uIiwiVXBkYXRlVmVyc2lvbkFyZ3MiLCJjb21iaW5lUXVlcmllcyIsImNyZWF0ZURhdGFiYXNlQWRhcHRlciIsImNyZWF0ZU1pZ3JhdGlvbiIsImZsYXR0ZW5XaGVyZVRvT3BlcmF0b3JzIiwiZ2V0TG9jYWxpemVkUGF0aHMiLCJnZXRNaWdyYXRpb25zIiwibWlncmF0ZSIsIm1pZ3JhdGVEb3duIiwibWlncmF0ZVJlZnJlc2giLCJtaWdyYXRlUmVzZXQiLCJtaWdyYXRlU3RhdHVzIiwibWlncmF0aW9uVGVtcGxhdGUiLCJtaWdyYXRpb25zQ29sbGVjdGlvbiIsInJlYWRNaWdyYXRpb25GaWxlcyIsInZhbGlkYXRlUXVlcnlQYXRocyIsInZhbGlkYXRlU2VhcmNoUGFyYW0iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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