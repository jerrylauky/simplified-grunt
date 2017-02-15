module.exports = {
  app: {
    files: [{
      expand: true,
      src: [
        // app files
        './bower_components/**',
        './node_modules/**',
        './scripts/**',
        './assets/**',
        'index.html',
        'app.js',
        'package.json',

        // excluding backups, generated files, test files, config files
        '!./**/*.bak',
        '!./**/*.map',
        '!./**/*.gzip',
        '!./**/*.md',
        '!./bower_components/**/test/**',
        '!./bower_components/**/tests/**',
        '!./bower_components/**/testing/**',
        '!./bower_components/**/example/**',
        '!./bower_components/**/less/**',
        '!./bower_components/**/scss/**',
        '!./bower_components/**/docs/**',
        '!./bower_components/**/*.bower.json',
        '!./bower_components/**/*bower.json',
        '!./bower_components/**/*.package.json',
        '!./bower_components/**/*package.json',
        '!./bower_components/**/*.yml',
        '!./bower_components/**/gruntfile.js',
        '!./bower_components/**/Gruntfile.js',
        '!./bower_components/**/karma.conf.js',
        '!./bower_components/**/composer.json',
        '!./bower_components/**/*.log',
        '!./node_modules/**/test/**',
        '!./node_modules/**/tests/**',
        '!./node_modules/**/testing/**',
        '!./node_modules/**/example/**',
        '!./node_modules/**/less/**',
        '!./node_modules/**/scss/**',
        '!./node_modules/**/docs/**',
        '!./node_modules/**/*.bower.json',
        '!./node_modules/**/*bower.json',
        '!./node_modules/**/*.package.json',
        '!./node_modules/**/*package.json',
        '!./node_modules/**/*.yml',
        '!./node_modules/**/gruntfile.js',
        '!./node_modules/**/Gruntfile.js',
        '!./node_modules/**/karma.conf.js',
        '!./node_modules/**/composer.json',
        '!./node_modules/**/*.log',
      ],
      dest: 'dist/'
    }]
  },
  make: {
    files: [{
        expand: true,
        src: './<%= scripts.shared.index.original %>',
        dest: '.',
        rename: function (dest, src) {
          return src + '.bak';
        }
      },
      {
        expand: true,
        src: './<%= scripts.shared.index.placeholder %>',
        dest: '.',
        rename: function (dest, src) {
          return dest + '/<%= scripts.shared.index.original %>';
        }
      }
    ]
  },
  undo: {
    files: [{
      expand: true,
      src: './<%= scripts.shared.index.original %>.bak',
      dest: '.',
      rename: function (dest, src) {
        return dest + '/<%= scripts.shared.index.original %>';
      }
    }]
  }
};