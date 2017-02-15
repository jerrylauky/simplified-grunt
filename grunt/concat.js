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
    src: [
      'bower_components/bootstrap/dist/css/bootstrap.min.css'
    ],
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
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/bootstrap/dist/js/bootstrap.min.js',
      'bower_components/angular/angular.min.js',
      'bower_components/angular-bootstrap/ui-bootstrap.min.js'
    ],
    dest: 'scripts/js/core.min.js'
  }
};