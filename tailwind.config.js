/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        },
        animation: {
          marquee: 'marquee 10s linear infinite',
        },
      },
      extend: {
        keyframes: {
          bgBlur: {
            '0%': {
              background: 'radial-gradient(circle at 20% 20%, #FF8C00 0%, transparent 50%)',
              transform: 'scale(1)',
            },
            '50%': {
              background: 'radial-gradient(circle at 80% 80%, #FF8C00 0%, transparent 60%)',
              transform: 'scale(1.1)',
            },
            '100%': {
              background: 'radial-gradient(circle at 20% 20%, #FF8C00 0%, transparent 50%)',
              transform: 'scale(1)',
            },
          },
        },
        animation: {
          bgBlur: 'bgBlur 15s ease-in-out infinite',
        },
      },
      
    },
    plugins: [],
  }
  