/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-bright": "#1a1a1a",
        "surface-variant": "#111111",
        "on-secondary": "#680200",
        "on-tertiary": "#002a77",
        "secondary": "#ffb4a8",
        "on-tertiary-fixed": "#00174a",
        "inverse-on-surface": "#303030",
        "primary-fixed": "#ffdad4",
        "inverse-primary": "#c00500",
        "on-primary": "#680200",
        "surface-container-low": "#0a0a0a",
        "tertiary-fixed-dim": "#b4c5ff",
        "secondary-fixed": "#ffdad4",
        "surface-container-lowest": "#000000",
        "surface-container": "#080808",
        "tertiary-fixed": "#dbe1ff",
        "on-secondary-fixed-variant": "#8e1208",
        "on-primary-fixed": "#410100",
        "on-tertiary-fixed-variant": "#003ea7",
        "surface-tint": "#ffb4a8",
        "on-secondary-container": "#ff9a8a",
        "secondary-fixed-dim": "#ffb4a8",
        "on-surface-variant": "#e9bcb5",
        "error": "#ffb4ab",
        "primary-fixed-dim": "#ffb4a8",
        "tertiary": "#b4c5ff",
        "surface-container-highest": "#1f1f1f",
        "on-surface": "#ffffff",
        "tertiary-container": "#0163ff",
        "surface-container-high": "#141414",
        "on-tertiary-container": "#f4f4ff",
        "error-container": "#93000a",
        "surface": "#000000",
        "primary-container": "#e10600",
        "on-secondary-fixed": "#410100",
        "inverse-surface": "#e2e2e2",
        "secondary-container": "#8e1208",
        "on-error-container": "#ffdad6",
        "on-primary-container": "#fff2f0",
        "on-primary-fixed-variant": "#930300",
        "background": "#000000",
        "on-background": "#ffffff",
        "primary": "#ffb4a8",
        "on-error": "#690005",
        "outline-variant": "#5e3f3a",
        "surface-dim": "#000000",
        "outline": "#af8781"
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Manrope", "sans-serif"],
        "label": ["Manrope", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },
      boxShadow: {
        'red-glow': '0 0 40px -5px rgba(225, 6, 0, 0.4)',
        'red-glow-hover': '0 0 30px -15px rgba(225, 6, 0, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
