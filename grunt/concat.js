module.exports = {
  plugins: {
    options: {
      stripBanners: {
        block: true
      },
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
      separator: ';\n'
    },
    src: [],
    dest: 'scripts/js/plugins.min.js'
  },
  css: {
    options: {
      stripBanners: {
        block: true
      },
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
      separator: ';\n'
    },
    src: [],
    dest: 'scripts/css/core.min.css'
  },
  core: {
    options: {
      stripBanners: {
        block: true
      },
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
      separator: ';\n'
    },
    src: [
      'bower_components/angular/angular.min.js'
    ],
    dest: 'scripts/js/core.min.js'
  }
};