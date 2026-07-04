import animate from 'tailwindcss-animate';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted-hsl))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        ink: '#07111f',
        panel: '#0d1b2e',
        line: '#1e3656',
        cyan: '#36d7e8',
        teal: '#2dd4bf',
        green: '#5ee08d',
        amber: '#f1bd5c',
        violet: '#b9a7ff',
        rose: '#f0a0bd',
        slateText: '#9fb4d1'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif']
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 8px)',
        '2xl': 'calc(var(--radius) + 14px)',
        '3xl': 'calc(var(--radius) + 22px)'
      },
      boxShadow: {
        glow: '0 0 40px rgba(54, 215, 232, 0.16)',
        premium: '0 28px 90px rgba(0, 0, 0, 0.36)'
      }
    }
  },
  plugins: [animate]
};

