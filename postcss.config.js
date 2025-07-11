export default {
  plugins: {
    tailwindcss: {}, /* enables tailwind processing it reads tailwind.config.js file and genrate all utility classes */
    autoprefixer: {},  /* this plugin adds vendor prefixes to CSS rules for better browser support. */
  },
}

/* When you run npm run build, Vite uses PostCSS to process your CSS */
/* it ensures Tailwind generates the correct classes and Your CSS works across multiple browsers */
