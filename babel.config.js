module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // Relación entre babel y tsconfig.json
            '@app': './app',
            '@assets': './assets',
          },
        },
      ],
    ],
  };
};
