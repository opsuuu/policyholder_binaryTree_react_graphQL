export default {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE.ENV === "production" ? { cssnano: {} } : {}),
  },
};
