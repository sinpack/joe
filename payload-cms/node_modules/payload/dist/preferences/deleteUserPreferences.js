"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "deleteUserPreferences", {
    enumerable: true,
    get: function() {
        return deleteUserPreferences;
    }
});
const deleteUserPreferences = async ({ collectionConfig, ids, payload, req })=>{
    if (collectionConfig.auth) {
        await payload.db.deleteMany({
            collection: 'payload-preferences',
            req,
            where: {
                and: [
                    {
                        'user.value': {
                            in: ids
                        }
                    },
                    {
                        'user.relationTo': {
                            equals: collectionConfig.slug
                        }
                    }
                ]
            }
        });
    }
    await payload.db.deleteMany({
        collection: 'payload-preferences',
        req,
        where: {
            key: {
                in: ids.map((id)=>`collection-${collectionConfig.slug}-${id}`)
            }
        }
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmVmZXJlbmNlcy9kZWxldGVVc2VyUHJlZmVyZW5jZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJ1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uL2V4cHJlc3MvdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFBheWxvYWQgfSBmcm9tICcuLi9pbmRleCdcblxudHlwZSBBcmdzID0ge1xuICBjb2xsZWN0aW9uQ29uZmlnOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnXG4gIC8qKlxuICAgKiBVc2VyIElEcyB0byBkZWxldGVcbiAgICovXG4gIGlkczogKG51bWJlciB8IHN0cmluZylbXVxuICBwYXlsb2FkOiBQYXlsb2FkXG4gIHJlcTogUGF5bG9hZFJlcXVlc3Rcbn1cbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyUHJlZmVyZW5jZXMgPSBhc3luYyAoeyBjb2xsZWN0aW9uQ29uZmlnLCBpZHMsIHBheWxvYWQsIHJlcSB9OiBBcmdzKSA9PiB7XG4gIGlmIChjb2xsZWN0aW9uQ29uZmlnLmF1dGgpIHtcbiAgICBhd2FpdCBwYXlsb2FkLmRiLmRlbGV0ZU1hbnkoe1xuICAgICAgY29sbGVjdGlvbjogJ3BheWxvYWQtcHJlZmVyZW5jZXMnLFxuICAgICAgcmVxLFxuICAgICAgd2hlcmU6IHtcbiAgICAgICAgYW5kOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3VzZXIudmFsdWUnOiB7IGluOiBpZHMgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICd1c2VyLnJlbGF0aW9uVG8nOiB7IGVxdWFsczogY29sbGVjdGlvbkNvbmZpZy5zbHVnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSlcbiAgfVxuICBhd2FpdCBwYXlsb2FkLmRiLmRlbGV0ZU1hbnkoe1xuICAgIGNvbGxlY3Rpb246ICdwYXlsb2FkLXByZWZlcmVuY2VzJyxcbiAgICByZXEsXG4gICAgd2hlcmU6IHtcbiAgICAgIGtleTogeyBpbjogaWRzLm1hcCgoaWQpID0+IGBjb2xsZWN0aW9uLSR7Y29sbGVjdGlvbkNvbmZpZy5zbHVnfS0ke2lkfWApIH0sXG4gICAgfSxcbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJkZWxldGVVc2VyUHJlZmVyZW5jZXMiLCJjb2xsZWN0aW9uQ29uZmlnIiwiaWRzIiwicGF5bG9hZCIsInJlcSIsImF1dGgiLCJkYiIsImRlbGV0ZU1hbnkiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJhbmQiLCJpbiIsImVxdWFscyIsInNsdWciLCJrZXkiLCJtYXAiLCJpZCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiOzs7OytCQWFhQTs7O2VBQUFBOzs7QUFBTixNQUFNQSx3QkFBd0IsT0FBTyxFQUFFQyxnQkFBZ0IsRUFBRUMsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLEdBQUcsRUFBUTtJQUN2RixJQUFJSCxpQkFBaUJJLElBQUksRUFBRTtRQUN6QixNQUFNRixRQUFRRyxFQUFFLENBQUNDLFVBQVUsQ0FBQztZQUMxQkMsWUFBWTtZQUNaSjtZQUNBSyxPQUFPO2dCQUNMQyxLQUFLO29CQUNIO3dCQUNFLGNBQWM7NEJBQUVDLElBQUlUO3dCQUFJO29CQUMxQjtvQkFDQTt3QkFDRSxtQkFBbUI7NEJBQUVVLFFBQVFYLGlCQUFpQlksSUFBSTt3QkFBQztvQkFDckQ7aUJBQ0Q7WUFDSDtRQUNGO0lBQ0Y7SUFDQSxNQUFNVixRQUFRRyxFQUFFLENBQUNDLFVBQVUsQ0FBQztRQUMxQkMsWUFBWTtRQUNaSjtRQUNBSyxPQUFPO1lBQ0xLLEtBQUs7Z0JBQUVILElBQUlULElBQUlhLEdBQUcsQ0FBQyxDQUFDQyxLQUFPLENBQUMsV0FBVyxFQUFFZixpQkFBaUJZLElBQUksQ0FBQyxDQUFDLEVBQUVHLEdBQUcsQ0FBQztZQUFFO1FBQzFFO0lBQ0Y7QUFDRiJ9