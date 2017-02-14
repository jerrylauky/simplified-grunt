module.exports = {
  options: {
    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
    sourceMap: true,
    mangle: false,
    compress: {
      drop_console: true
    }
  },
  dist: {
    files: {
      'scripts/js/app.min.js': ['app.js', 'scripts/js/app.templates.js']
    }
  },
  components: {
    files: [{
      expand: true,
      cwd: 'components/',
      src: ['**/*.js'],
      dest: 'scripts/js',
      rename: function (dest, src) {
        var directories = src.split('/');
        return dest + '/' + directories[0] + '.min.js';
      }
    }]
  }
};