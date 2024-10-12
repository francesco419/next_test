import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '300': '64rem'
      },
      width: {
        '128': '32rem',
        '1500': '1500px'
      },
      flexGrow: {
        2: '2',
        1: '1'
      },
      transitionProperty: {
        multiple: 'width , height , backgroundColor , border-radius',
        width: 'width',
        spacing: 'margin, padding'
      },
      minWidth: {
        '123': '32rem',
        '1500': '1500px'
      }
    }
  },
  plugins: []
};
export default config;
