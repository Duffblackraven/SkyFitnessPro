import type { Config } from "tailwindcss";

const config: Config = {
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
        "dark-gradient": "linear-gradient(152.61deg, rgb(21, 23, 32) 37.863%,rgb(30, 33, 46) 90.141%)",

      },
      fontSize: {
        'min': ['16px', {
          lineHeight: '110%',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'sm': ['18px', {
          lineHeight: '110%',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'base': ['24px', {
          lineHeight: '110%',
          letterSpacing: '0',
          fontWeight: '400',
        }],
        'lg': ['32px', {
          lineHeight: '110%',
          letterSpacing: '0',
          fontWeight: '500',
        }],
        'xl': ['40px', {
          lineHeight: '110%',
          letterSpacing: '0',
          fontWeight: '600',
        }],
        '2xl': ['60px', {
          lineHeight: '100%',
          letterSpacing: '0',
          fontWeight: '500',
        }],
        '3xl': ['75px', {
          lineHeight: '135%',
          letterSpacing: '0',
          fontWeight: '500',
        }],
      },  
      colors: {
        'bright-green': '#BCEC30',
        'bright-green-hov': '#C6FF00',
        'txt-gr':'#999999',
        'light-grey':'#F7F7F7',
        'dark-grey':'#E9ECED',
        'input-progress': '#00C1FF',
      },
      boxShadow: {
        'base': '0px 4px 67px -12px rgba(0, 0, 0, 0.13)',
      },
      borderRadius: {
        DEFAULT: '30px',
        'large': '46px',
        'small': '28px',
      },
      gridTemplateColumns: {
        'card': 'repeat(auto-fit, minmax(343px, 360px))',
      },
      padding: {
        "left":"calc(50% - 1160px/2)",
        "right":"calc(50% - 1160px/2)"
      }
    },
  },
  plugins: [],
};
export default config;
