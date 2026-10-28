import "i18next";

// Make t() return plain strings (not string | null) so it can be used
// directly in JSX attributes like alt, placeholder and aria-label.
declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}
