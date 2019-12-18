module.exports = function(api) {
  api.cache.forever();
  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ];
  const plugins = ['@babel/plugin-proposal-class-properties'];
  return { presets, plugins };
};
