// Shared theme gradient mappings
export const themeGradients = {
  starscape:
    "linear-gradient(135deg, var(--starscape-start) 0%, var(--starscape-mid) 50%, var(--starscape-end) 100%)",
  cityscape: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
  forestscape: "linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)",
  evershade:
    "linear-gradient(135deg, var(--evershade-start) 0%, var(--evershade-mid) 50%, var(--evershade-end) 100%)",
  horizons: "linear-gradient(135deg, var(--horizons-start) 0%, var(--horizons-mid) 50%, var(--horizons-end) 100%)",
  default: "linear-gradient(135deg, var(--accent-bg), var(--glow-color))",
} as const;

export type ThemeType = keyof typeof themeGradients;

export function getThemeGradient(theme?: string, customGradient?: string): string {
  if (theme === "custom") {
    return customGradient || themeGradients.default;
  }
  
  return themeGradients[theme as ThemeType] || themeGradients.default;
}