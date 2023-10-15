
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'itim': ['Itim', 'Arial', 'sans-serif'],
      },
      width: {
        '98': '27rem',
        '100': '29rem',
        '105': '25rem',
        '128': '38rem',
      },
      height: {
        '95': '20rem',
        '98': '21.5rem',
        '100': '27rem',
      },
      spacing: {
        '70': '24rem',
      },
      scale: {
        '125': '1.18',
      },
      screens: {
        'phone': '640px',
        'col-min': '1019px',
        'col-box': '1110px',
        'minpc': '1116px',
        'minpc2': '1172px',
      }
    },
  },
  plugins: [],
}
