module.exports = function (api) {
  api.cache(true)

  const presets = [
    ['@babel/preset-env', {
      'modules': false,
      'targets': 'ie >= 8',
      'useBuiltIns': 'entry'
    }]
  ]
  const plugins = [
    '@babel/plugin-transform-arrow-functions',
    ['@babel/plugin-transform-runtime', {
      'corejs': 2
    }]
  ]

  return {
    presets,
    plugins
  }
}
