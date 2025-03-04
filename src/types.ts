export interface UseTitleOptions {
  defaultTitle?: string; // Default title if no title is provided
  prefix?: string; // Prefix to prepend to the title
  suffix?: string; // Suffix to append to the title
  separator?: string; // Separator between title and prefix/suffix (default: ' - ')
  template?: string; // Template for dynamic titles (e.g., "{page} - {appName}")
}
