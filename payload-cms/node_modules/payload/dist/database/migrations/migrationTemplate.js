"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "migrationTemplate", {
    enumerable: true,
    get: function() {
        return migrationTemplate;
    }
});
const migrationTemplate = `
import {
  MigrateUpArgs,
  MigrateDownArgs,
} from "@payloadcms/db-mongodb";

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  // Migration code
};

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  // Migration code
};
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zL21pZ3JhdGlvblRlbXBsYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBtaWdyYXRpb25UZW1wbGF0ZSA9IGBcbmltcG9ydCB7XG4gIE1pZ3JhdGVVcEFyZ3MsXG4gIE1pZ3JhdGVEb3duQXJncyxcbn0gZnJvbSBcIkBwYXlsb2FkY21zL2RiLW1vbmdvZGJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwKHsgcGF5bG9hZCwgcmVxIH06IE1pZ3JhdGVVcEFyZ3MpOiBQcm9taXNlPHZvaWQ+IHtcbiAgLy8gTWlncmF0aW9uIGNvZGVcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkb3duKHsgcGF5bG9hZCwgcmVxIH06IE1pZ3JhdGVEb3duQXJncyk6IFByb21pc2U8dm9pZD4ge1xuICAvLyBNaWdyYXRpb24gY29kZVxufTtcbmBcbiJdLCJuYW1lcyI6WyJtaWdyYXRpb25UZW1wbGF0ZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6Ijs7OzsrQkFBYUE7OztlQUFBQTs7O0FBQU4sTUFBTUEsb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhbEMsQ0FBQyJ9