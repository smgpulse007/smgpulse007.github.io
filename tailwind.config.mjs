export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#07111f',
        panel: '#0d1b2e',
        line: '#1e3656',
        cyan: '#36d7e8',
        teal: '#2dd4bf',
        green: '#5ee08d',
        slateText: '#9fb4d1'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 40px rgba(54, 215, 232, 0.16)'
      }
    }
  },
  plugins: []
};

