export type SupportedLocale = 'sv' | 'en';
export const locales: Record<SupportedLocale, Record<string, string>> = {
  sv: {
    // Toast messages
    'toast.close': 'Stäng meddelande',

    // Spinner messages
    'spinner.loading': 'Laddar',

    // Dropdown messages
    'dropdown.show_all': 'Visa alla',
    'dropdown.clear': 'Rensa val',
    'dropdown.no_options': 'Inga alternativ tillgängliga',
  },
  en: {
    // Toast messages
    'toast.close': 'Close message',

    // Spinner messages
    'spinner.loading': 'Loading',

    // Dropdown messages
    'dropdown.show_all': 'Show all',
    'dropdown.clear': 'Clear selection',
    'dropdown.no_options': 'No options available',
  },
} as const;
