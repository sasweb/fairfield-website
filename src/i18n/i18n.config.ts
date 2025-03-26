export const LANGUAGES = ['de', 'en'] as const;

// the build fails if the type is defined in @types
export type Locale = (typeof LANGUAGES)[number];

export const defaultLocale: Locale = 'de';
