module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: ['outline-none', 'rounded-xl'],
    },
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
      screens: {
        sm: '1536px',
      },
    },
    minWidth: {
      auto: 'auto',
      400: '400px',
      300: '300px',
      250: '250px',
      200: '200px',
      125: '125px',
      75: '75px',
      full: '100%',
    },
    minHeight: {
      auto: 'auto',
      full: '100%',
      '80vh': '80vh',
      '60vh': '60vh',
    },
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
      },
      screens: {
        xs: '380px',
      },
      spacing: {
        120: '30rem',
        '5vw': '5vw',
        '5.5vw': '5.5vw',
        '6vw': '6vw',
      },
      zIndex: {
        '-10': '-10',
      },
      height: {
        '60vw': '60vw',
        '80vh': '80vh',
      },
      maxWidth: {
        '8xl': '1920px',
        layout: '2460px',
        half: '50%',
        '2/3': '66.6667%',
        15: '15rem',
      },
      colors: {
        primary: 'var(--primary)',
        'primary-2': 'var(--primary-2)',
        'primary-3': 'var(--primary-3)',
        'ed-grey': '#ede9e3',
        secondary: 'var(--secondary)',
        'secondary-2': 'var(--secondary-2)',
        'secondary-3': 'var(--secondary-3)',
        hover: 'var(--hover)',
        'hover-1': 'var(--hover-1)',
        'hover-2': 'var(--hover-2)',
        'accents-0': 'var(--accents-0)',
        'accents-1': 'var(--accents-1)',
        'accents-2': 'var(--accents-2)',
        'accents-3': 'var(--accents-3)',
        'accents-4': 'var(--accents-4)',
        'accents-5': 'var(--accents-5)',
        'accents-6': 'var(--accents-6)',
        'accents-7': 'var(--accents-7)',
        'accents-8': 'var(--accents-8)',
        'accents-9': 'var(--accents-9)',
        violet: 'var(--violet)',
        'violet-light': 'var(--violet-light)',
        pink: 'var(--pink)',
        cyan: 'var(--cyan)',
        blue: 'var(--blue)',
        green: 'var(--green)',
        red: 'var(--red)',
        yellow: 'var(--yellow)',
        beige: 'var(--beige)',
        lightGrey: 'var(--lightGrey)',
        grey: 'var(--grey)',
      },
      textColor: {
        base: 'var(--text-base)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      boxShadow: {
        'outline-normal': '0 0 0 2px var(--accents-2)',
        magical:
          'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
        button: '0 0 10px -5px rgba(0, 0, 0, 1)',
      },
      lineHeight: {
        'extra-loose': '2.2',
      },
      fontSize: {
        '2xs': '.65rem',
      },
      scale: {
        120: '1.2',
      },
      backgroundImage: {
        yellowUnderline:
          'linear-gradient(to top, hsla(60, 100.00%, 67.65%, 1.00), hsla(60, 100.00%, 67.65%, 1.00) 40%, transparent 40%, transparent)',
      },
    },
  },
  variants: {
    extend: {
      translate: ['responsive', 'hover', 'focus', 'group-hover'],
      display: ['responsive', 'hover', 'focus', 'group-hover'],
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
}