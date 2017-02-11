module.exports = function (grunt, options) {
  return {
    options: {
      livereload: options.LIVERELOAD_PORT
    },

    sass: {
      files: ['./assets/**/*.scss'],
      tasks: ['sass']
    },
    app: {
      files: ['./components/**/*.js', './index.html', './assets/**/*.scss'],
      tasks: ['sass']
    }
  };
};