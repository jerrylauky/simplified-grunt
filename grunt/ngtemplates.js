module.exports = {
  oscarApp: {
    src: 'views/**/**.html',
    dest: 'scripts/js/app.templates.js',
    options: {
      htmlmin: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        minifyCSS: true,
        minifyJS: {
          mangle: false,
          compress: true
        },
        removeComments: true,
        preserveLineBreaks: true,
        conservativeCollapse: true
      }
    }
  }
};