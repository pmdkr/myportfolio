/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#4F46E5',
          secondary: '#6366F1',
          background: '#FFFFFF',
          surface: '#F9FAFB',
          textPrimary: '#1F2937',
          textSecondary: '#4B5563',
          border: '#E5E7EB',
        },
        dark: {
          primary: '#6366F1',
          secondary: '#4F46E5',
          background: '#1F2937',
          surface: '#374151',
          textPrimary: '#F9FAFB',
          textSecondary: '#D1D5DB',
          border: '#4B5563',
        },
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|text|border)-(light|dark)-(primary|secondary|background|surface|textPrimary|textSecondary|border)/,
    },
  ],
  plugins: [require("daisyui")],
};