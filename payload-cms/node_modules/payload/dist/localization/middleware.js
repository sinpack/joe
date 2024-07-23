/**
 * sets request locale
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return localizationMiddleware;
    }
});
function localizationMiddleware(req, res, next) {
    const localization = req.payload.config.localization;
    if (!localization) {
        next();
        return;
    }
    const validLocales = [
        ...localization.localeCodes,
        'all'
    ];
    const validFallbackLocales = [
        ...localization.localeCodes,
        'null'
    ];
    let requestedLocale = req.query.locale || localization.defaultLocale;
    let requestedFallbackLocale = req.query['fallback-locale'];
    if (req.body) {
        if (req.body.locale) requestedLocale = req.body.locale;
        if (req.body['fallback-locale']) {
            requestedFallbackLocale = req.body['fallback-locale'];
        }
    }
    if (requestedFallbackLocale === 'none') requestedFallbackLocale = 'null';
    if (requestedLocale === '*' || requestedLocale === 'all') {
        requestedLocale = 'all';
    }
    req.fallbackLocale = validFallbackLocales.find((locale)=>locale === requestedFallbackLocale);
    req.locale = validLocales.find((locale)=>locale === requestedLocale);
    if (!req.fallbackLocale) {
        req.fallbackLocale = localization.locales.find(({ code })=>req.locale === code)?.fallbackLocale || localization.defaultLocale;
    }
    next();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbGl6YXRpb24vbWlkZGxld2FyZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHNldHMgcmVxdWVzdCBsb2NhbGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9jYWxpemF0aW9uTWlkZGxld2FyZShyZXEsIHJlcywgbmV4dCkge1xuICBjb25zdCBsb2NhbGl6YXRpb24gPSByZXEucGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uXG4gIGlmICghbG9jYWxpemF0aW9uKSB7XG4gICAgbmV4dCgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB2YWxpZExvY2FsZXMgPSBbLi4ubG9jYWxpemF0aW9uLmxvY2FsZUNvZGVzLCAnYWxsJ11cbiAgY29uc3QgdmFsaWRGYWxsYmFja0xvY2FsZXMgPSBbLi4ubG9jYWxpemF0aW9uLmxvY2FsZUNvZGVzLCAnbnVsbCddXG5cbiAgbGV0IHJlcXVlc3RlZExvY2FsZSA9IHJlcS5xdWVyeS5sb2NhbGUgfHwgbG9jYWxpemF0aW9uLmRlZmF1bHRMb2NhbGVcbiAgbGV0IHJlcXVlc3RlZEZhbGxiYWNrTG9jYWxlID0gcmVxLnF1ZXJ5WydmYWxsYmFjay1sb2NhbGUnXVxuXG4gIGlmIChyZXEuYm9keSkge1xuICAgIGlmIChyZXEuYm9keS5sb2NhbGUpIHJlcXVlc3RlZExvY2FsZSA9IHJlcS5ib2R5LmxvY2FsZVxuICAgIGlmIChyZXEuYm9keVsnZmFsbGJhY2stbG9jYWxlJ10pIHtcbiAgICAgIHJlcXVlc3RlZEZhbGxiYWNrTG9jYWxlID0gcmVxLmJvZHlbJ2ZhbGxiYWNrLWxvY2FsZSddXG4gICAgfVxuICB9XG5cbiAgaWYgKHJlcXVlc3RlZEZhbGxiYWNrTG9jYWxlID09PSAnbm9uZScpIHJlcXVlc3RlZEZhbGxiYWNrTG9jYWxlID0gJ251bGwnXG4gIGlmIChyZXF1ZXN0ZWRMb2NhbGUgPT09ICcqJyB8fCByZXF1ZXN0ZWRMb2NhbGUgPT09ICdhbGwnKSB7XG4gICAgcmVxdWVzdGVkTG9jYWxlID0gJ2FsbCdcbiAgfVxuICByZXEuZmFsbGJhY2tMb2NhbGUgPSB2YWxpZEZhbGxiYWNrTG9jYWxlcy5maW5kKChsb2NhbGUpID0+IGxvY2FsZSA9PT0gcmVxdWVzdGVkRmFsbGJhY2tMb2NhbGUpXG5cbiAgcmVxLmxvY2FsZSA9IHZhbGlkTG9jYWxlcy5maW5kKChsb2NhbGUpID0+IGxvY2FsZSA9PT0gcmVxdWVzdGVkTG9jYWxlKVxuXG4gIGlmICghcmVxLmZhbGxiYWNrTG9jYWxlKSB7XG4gICAgcmVxLmZhbGxiYWNrTG9jYWxlID1cbiAgICAgIGxvY2FsaXphdGlvbi5sb2NhbGVzLmZpbmQoKHsgY29kZSB9KSA9PiByZXEubG9jYWxlID09PSBjb2RlKT8uZmFsbGJhY2tMb2NhbGUgfHxcbiAgICAgIGxvY2FsaXphdGlvbi5kZWZhdWx0TG9jYWxlXG4gIH1cbiAgbmV4dCgpXG59XG4iXSwibmFtZXMiOlsibG9jYWxpemF0aW9uTWlkZGxld2FyZSIsInJlcSIsInJlcyIsIm5leHQiLCJsb2NhbGl6YXRpb24iLCJwYXlsb2FkIiwiY29uZmlnIiwidmFsaWRMb2NhbGVzIiwibG9jYWxlQ29kZXMiLCJ2YWxpZEZhbGxiYWNrTG9jYWxlcyIsInJlcXVlc3RlZExvY2FsZSIsInF1ZXJ5IiwibG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsInJlcXVlc3RlZEZhbGxiYWNrTG9jYWxlIiwiYm9keSIsImZhbGxiYWNrTG9jYWxlIiwiZmluZCIsImxvY2FsZXMiLCJjb2RlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQzs7OzsrQkFDRDs7O2VBQXdCQTs7O0FBQVQsU0FBU0EsdUJBQXVCQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsSUFBSTtJQUMzRCxNQUFNQyxlQUFlSCxJQUFJSSxPQUFPLENBQUNDLE1BQU0sQ0FBQ0YsWUFBWTtJQUNwRCxJQUFJLENBQUNBLGNBQWM7UUFDakJEO1FBQ0E7SUFDRjtJQUVBLE1BQU1JLGVBQWU7V0FBSUgsYUFBYUksV0FBVztRQUFFO0tBQU07SUFDekQsTUFBTUMsdUJBQXVCO1dBQUlMLGFBQWFJLFdBQVc7UUFBRTtLQUFPO0lBRWxFLElBQUlFLGtCQUFrQlQsSUFBSVUsS0FBSyxDQUFDQyxNQUFNLElBQUlSLGFBQWFTLGFBQWE7SUFDcEUsSUFBSUMsMEJBQTBCYixJQUFJVSxLQUFLLENBQUMsa0JBQWtCO0lBRTFELElBQUlWLElBQUljLElBQUksRUFBRTtRQUNaLElBQUlkLElBQUljLElBQUksQ0FBQ0gsTUFBTSxFQUFFRixrQkFBa0JULElBQUljLElBQUksQ0FBQ0gsTUFBTTtRQUN0RCxJQUFJWCxJQUFJYyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDL0JELDBCQUEwQmIsSUFBSWMsSUFBSSxDQUFDLGtCQUFrQjtRQUN2RDtJQUNGO0lBRUEsSUFBSUQsNEJBQTRCLFFBQVFBLDBCQUEwQjtJQUNsRSxJQUFJSixvQkFBb0IsT0FBT0Esb0JBQW9CLE9BQU87UUFDeERBLGtCQUFrQjtJQUNwQjtJQUNBVCxJQUFJZSxjQUFjLEdBQUdQLHFCQUFxQlEsSUFBSSxDQUFDLENBQUNMLFNBQVdBLFdBQVdFO0lBRXRFYixJQUFJVyxNQUFNLEdBQUdMLGFBQWFVLElBQUksQ0FBQyxDQUFDTCxTQUFXQSxXQUFXRjtJQUV0RCxJQUFJLENBQUNULElBQUllLGNBQWMsRUFBRTtRQUN2QmYsSUFBSWUsY0FBYyxHQUNoQlosYUFBYWMsT0FBTyxDQUFDRCxJQUFJLENBQUMsQ0FBQyxFQUFFRSxJQUFJLEVBQUUsR0FBS2xCLElBQUlXLE1BQU0sS0FBS08sT0FBT0gsa0JBQzlEWixhQUFhUyxhQUFhO0lBQzlCO0lBQ0FWO0FBQ0YifQ==