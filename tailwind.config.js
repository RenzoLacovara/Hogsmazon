module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      princ: "var(--color-principal)",
      principald: "var(--color-principal-d)",
      secundario: "var(--color-secundario)",
      secundariod: "var(--color-secundario-d)",
      detalle: "var(--color-detalle)",
    },
    fontFamily: {
      font1: ["Harry Potter", "sans-serif"],
      font2: ["Amazon Ember Display", "sans-serif"],
      font3: ["Red Hat Display", "sans-serif"],
    },

    extend: {
      backgroundImage: {
        mapa: "url('../public/imagenes/mapa.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
