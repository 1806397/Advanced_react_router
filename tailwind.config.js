/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono,monospace',
    },
    safelist: [
      'animate-[fade-in_1s_ease-in-out]',
      'animate-[fade-in-down_1s_ease-in-out]',
    ],
    extend: {
      keyframes: {
        rise: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      colors: {
        pizza: '#123456',
      },
      height: {
        screen: '100dvh',
      },
      animation: {
        'slow-rise': 'rise 1s ease',
      },
    },
  },
  plugins: [],
};
