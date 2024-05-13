const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// Get the default Metro config
const defaultConfig = getDefaultConfig(__dirname);

// Merge your existing configuration settings into the default config
const customConfig = {
  /* your existing config settings */
};

// Merge the default config with your custom config
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// Apply withNativeWind transformation
const finalConfig = withNativeWind(mergedConfig, {input: './global.css'});

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
module.exports = finalConfig;
