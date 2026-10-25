module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'loader-slide-up': 'loaderSlideUp 0.9s cubic-bezier(0.76, 0, 0.24, 1) forwards',
        'hero-slide-up': 'heroSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-name': 'fadeInName 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        loaderSlideUp: {
          '0%':   { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        heroSlideUp: {
          '0%':   { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInName: {
          '0%':   { opacity: '0', letterSpacing: '0.3em', transform: 'translateY(12px)' },
          '100%': { opacity: '1', letterSpacing: '0.08em', transform: 'translateY(0)' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
