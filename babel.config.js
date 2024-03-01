module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null, // Optional, depending on your needs
          whitelist: null, // Optional, depending on your needs
          safe: false, // Optional, depending on your needs
          allowUndefined: true, // Optional, depending on your needs
        },
      ],
    ],
  };
};
