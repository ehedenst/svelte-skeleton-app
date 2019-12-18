const productionPlugins = !process.env.ROLLUP_WATCH
  ? [
      require('@fullhuman/postcss-purgecss')({
        content: ['./src/**/*.html', './src/**/*.svelte'],
        whitelistPatterns: [/svelte-/],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
      })
    ]
  : [];

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-preset-env'),
    ...productionPlugins
  ]
};
