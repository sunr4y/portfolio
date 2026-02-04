tailwind.config = {
  theme: {
    extend: {
      colors: {
        background: 'hsl(0 0% 4%)',
        foreground: 'hsl(0 0% 90%)',
        card: 'hsl(0 0% 7%)',
        'card-foreground': 'hsl(0 0% 90%)',
        primary: { DEFAULT: '#326EC6', foreground: 'hsl(0 0% 4%)' },
        secondary: { DEFAULT: 'hsl(0 0% 12%)', foreground: 'hsl(0 0% 90%)' },
        muted: { DEFAULT: 'hsl(0 0% 15%)', foreground: 'hsl(0 0% 55%)' },
        accent: { DEFAULT: '#32b8c6', foreground: 'hsl(0 0% 4%)' },
        accent2: '#326EC6',
        border: 'hsl(0 0% 18%)',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};
