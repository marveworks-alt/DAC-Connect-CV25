/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        sun: '#FFC845', // Sun Sweet Yellow
        navy: '#002147', // Midnight Navy
        gold: '#D4AF37',
        ink: '#0B0B0B',
      },
      borderRadius: {
        DEFAULT: '8px',
      },
      boxShadow: {
        glow: '0 0 16px rgba(255, 200, 69, 0.45)',
      },
      fontFamily: {
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'crest-watermark': "url('/branding/bca-crest.png')",
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        torchGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 0px rgba(255,200,69,0.0))' },
          '50%': { filter: 'drop-shadow(0 0 14px rgba(255,200,69,0.9))' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.2s linear infinite',
        torch: 'torchGlow 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
