/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        ringA: {
          '0%, 4%': { 
            strokeDasharray: '0 660',
            strokeWidth: '20',
            strokeDashoffset: '-330'
          },
          '12%': {
            strokeDasharray: '60 600',
            strokeWidth: '30',
            strokeDashoffset: '-335'
          },
          '32%': {
            strokeDasharray: '60 600',
            strokeWidth: '30',
            strokeDashoffset: '-595'
          },
          '40%, 54%': {
            strokeDasharray: '0 660',
            strokeWidth: '20',
            strokeDashoffset: '-660'
          },
          '62%': {
            strokeDasharray: '60 600',
            strokeWidth: '30',
            strokeDashoffset: '-665'
          },
          '82%': {
            strokeDasharray: '60 600',
            strokeWidth: '30',
            strokeDashoffset: '-925'
          },
          '90%, 100%': {
            strokeDasharray: '0 660',
            strokeWidth: '20',
            strokeDashoffset: '-990'
          },
        },
        ringB: {
          '0%, 12%': {
            strokeDasharray: '0 220',
            strokeWidth: '20',
            strokeDashoffset: '-110'
          },
          '20%': {
            strokeDasharray: '20 200',
            strokeWidth: '30',
            strokeDashoffset: '-115'
          },
          '40%': {
            strokeDasharray: '20 200',
            strokeWidth: '30',
            strokeDashoffset: '-195'
          },
          '48%, 62%': {
            strokeDasharray: '0 220',
            strokeWidth: '20',
            strokeDashoffset: '-220'
          },
          '70%': {
            strokeDasharray: '20 200',
            strokeWidth: '30',
            strokeDashoffset: '-225'
          },
          '90%': {
            strokeDasharray: '20 200',
            strokeWidth: '30',
            strokeDashoffset: '-305'
          },
          '98%, 100%': {
            strokeDasharray: '0 220',
            strokeWidth: '20',
            strokeDashoffset: '-330'
          },
        },
        ringC: {
          '0%': {
            strokeDasharray: '0 440',
            strokeWidth: '20',
            strokeDashoffset: '0'
          },
          '8%': {
            strokeDasharray: '40 400',
            strokeWidth: '30',
            strokeDashoffset: '-5'
          },
          '28%': {
            strokeDasharray: '40 400',
            strokeWidth: '30',
            strokeDashoffset: '-175'
          },
          '36%, 58%': {
            strokeDasharray: '0 440',
            strokeWidth: '20',
            strokeDashoffset: '-220'
          },
          '66%': {
            strokeDasharray: '40 400',
            strokeWidth: '30',
            strokeDashoffset: '-225'
          },
          '86%': {
            strokeDasharray: '40 400',
            strokeWidth: '30',
            strokeDashoffset: '-395'
          },
          '94%, 100%': {
            strokeDasharray: '0 440',
            strokeWidth: '20',
            strokeDashoffset: '-440'
          },
        },
        ringD: {
          '0%, 8%': {
            strokeDasharray: '0 440',
            strokeWidth: '20',
            strokeDashoffset: '0'
          },
          '16%': {
            strokeDasharray: '40 400',
            strokeWidth: '30',
            strokeDashoffset: '-5'
          },
          '36%': {
            strokeDasharray: '40 400',
            strokeWidth: '30',
            strokeDashoffset: '-175'
          },
          '44%, 50%': {
            strokeDasharray: '0 440',
            strokeWidth: '20',
            strokeDashoffset: '-220'
          },
          '58%': {
            strokeDasharray: '40 400',
            strokeWidth: '30',
            strokeDashoffset: '-225'
          },
          '78%': {
            strokeDasharray: '40 400',
            strokeWidth: '30',
            strokeDashoffset: '-395'
          },
          '86%, 100%': {
            strokeDasharray: '0 440',
            strokeWidth: '20',
            strokeDashoffset: '-440'
          },
        },
      },
    },
  },
  plugins: [],
};
