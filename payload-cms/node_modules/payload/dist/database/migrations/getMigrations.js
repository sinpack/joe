"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getMigrations", {
    enumerable: true,
    get: function() {
        return getMigrations;
    }
});
async function getMigrations({ payload }) {
    const migrationQuery = await payload.find({
        collection: 'payload-migrations',
        limit: 0,
        sort: '-name',
        where: {
            batch: {
                not_equals: -1
            }
        }
    });
    const existingMigrations = migrationQuery.docs;
    // Get the highest batch number from existing migrations
    const latestBatch = Number(existingMigrations?.[0]?.batch) || 0;
    return {
        existingMigrations,
        latestBatch
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zL2dldE1pZ3JhdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4nXG5pbXBvcnQgdHlwZSB7IE1pZ3JhdGlvbkRhdGEgfSBmcm9tICcuLi90eXBlcydcblxuLyoqXG4gKiBHZXRzIGFsbCBleGlzdGluZyBtaWdyYXRpb25zIGZyb20gdGhlIGRhdGFiYXNlLCBleGNsdWRpbmcgdGhlIGRldiBtaWdyYXRpb25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1pZ3JhdGlvbnMoe1xuICBwYXlsb2FkLFxufToge1xuICBwYXlsb2FkOiBQYXlsb2FkXG59KTogUHJvbWlzZTx7IGV4aXN0aW5nTWlncmF0aW9uczogTWlncmF0aW9uRGF0YVtdOyBsYXRlc3RCYXRjaDogbnVtYmVyIH0+IHtcbiAgY29uc3QgbWlncmF0aW9uUXVlcnkgPSBhd2FpdCBwYXlsb2FkLmZpbmQoe1xuICAgIGNvbGxlY3Rpb246ICdwYXlsb2FkLW1pZ3JhdGlvbnMnLFxuICAgIGxpbWl0OiAwLFxuICAgIHNvcnQ6ICctbmFtZScsXG4gICAgd2hlcmU6IHtcbiAgICAgIGJhdGNoOiB7XG4gICAgICAgIG5vdF9lcXVhbHM6IC0xLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuXG4gIGNvbnN0IGV4aXN0aW5nTWlncmF0aW9ucyA9IG1pZ3JhdGlvblF1ZXJ5LmRvY3MgYXMgdW5rbm93biBhcyBNaWdyYXRpb25EYXRhW11cblxuICAvLyBHZXQgdGhlIGhpZ2hlc3QgYmF0Y2ggbnVtYmVyIGZyb20gZXhpc3RpbmcgbWlncmF0aW9uc1xuICBjb25zdCBsYXRlc3RCYXRjaCA9IE51bWJlcihleGlzdGluZ01pZ3JhdGlvbnM/LlswXT8uYmF0Y2gpIHx8IDBcblxuICByZXR1cm4ge1xuICAgIGV4aXN0aW5nTWlncmF0aW9ucyxcbiAgICBsYXRlc3RCYXRjaCxcbiAgfVxufVxuIl0sIm5hbWVzIjpbImdldE1pZ3JhdGlvbnMiLCJwYXlsb2FkIiwibWlncmF0aW9uUXVlcnkiLCJmaW5kIiwiY29sbGVjdGlvbiIsImxpbWl0Iiwic29ydCIsIndoZXJlIiwiYmF0Y2giLCJub3RfZXF1YWxzIiwiZXhpc3RpbmdNaWdyYXRpb25zIiwiZG9jcyIsImxhdGVzdEJhdGNoIiwiTnVtYmVyIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBTXNCQTs7O2VBQUFBOzs7QUFBZixlQUFlQSxjQUFjLEVBQ2xDQyxPQUFPLEVBR1I7SUFDQyxNQUFNQyxpQkFBaUIsTUFBTUQsUUFBUUUsSUFBSSxDQUFDO1FBQ3hDQyxZQUFZO1FBQ1pDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxPQUFPO1lBQ0xDLE9BQU87Z0JBQ0xDLFlBQVksQ0FBQztZQUNmO1FBQ0Y7SUFDRjtJQUVBLE1BQU1DLHFCQUFxQlIsZUFBZVMsSUFBSTtJQUU5Qyx3REFBd0Q7SUFDeEQsTUFBTUMsY0FBY0MsT0FBT0gsb0JBQW9CLENBQUMsRUFBRSxFQUFFRixVQUFVO0lBRTlELE9BQU87UUFDTEU7UUFDQUU7SUFDRjtBQUNGIn0=