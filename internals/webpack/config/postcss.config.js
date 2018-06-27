module.exports = () => {
  return {
    plugins: [
      require('precss')({}),
      require('postcss-cssnext')({ browsers: ['> 0.05%', 'IE 9'], cascade: false })
    ]
  }
};
