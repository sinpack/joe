import slugify from 'slugify';

// Configure slugify to handle Greek and other non-Latin characters
export function createSlug(title: string): string {
  return slugify(title, {
    replacement: '-', // Character to replace spaces with
    remove: undefined, // Remove characters (null, undefined, or regex)
    lower: true, // Convert to lower case
    strict: false, // Strip special characters except replacement
    locale: 'en', // Set locale for special character handling
  });
}
