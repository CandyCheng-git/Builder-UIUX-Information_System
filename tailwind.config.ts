import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./index.html",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          white: "rgb(255, 255, 255)",
          teal: "rgb(0, 128, 128)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Dashboard specific colors
        dashboard: {
          text: {
            primary: "rgb(17, 24, 39)",
            secondary: "rgb(71, 85, 105)",
            muted: "rgb(148, 163, 184)",
          },
          border: {
            light: "rgb(229, 231, 235)",
          },
          status: {
            green: "rgb(22, 163, 74)",
            amber: "rgb(245, 158, 11)",
            red: "rgb(239, 68, 68)",
          },
          overlay: "rgba(241, 245, 249, 0.5)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      spacing: {
        "section-bottom": "48px",
        "heading-bottom": "32px",
        "card-spacing": "24px",
        "element-spacing": "16px",
        "small-spacing": "8px",
      },
      fontSize: {
        "heading-large": ["30px", { lineHeight: "36px", fontWeight: "700" }],
        "heading-medium": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "heading-small": ["18px", { lineHeight: "28px", fontWeight: "700" }],
        "body-large": ["18px", { lineHeight: "28px" }],
        "body-small": ["14px", { lineHeight: "20px" }],
        "body-tiny": ["12px", { lineHeight: "16px", fontWeight: "500" }],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
