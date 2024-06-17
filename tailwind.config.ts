import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        orange: '#eca441',
        orangeLight: '#E0C59850',
        green: '#50AA72',
      },
      textColor: {
        dark: '#111827',
        orange: '#eca441',
        orangeLight: '#E0C59850',
      },
      fontFamily: {
        inter: ['inter'],
      },

      minHeight: {
        '95': '95vh',
        '85': '85vh',
        '75': '75vh',
      },
    },
  },
  plugins: [],
};
export default config;
