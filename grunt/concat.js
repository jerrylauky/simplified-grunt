module.exports = {
  plugins: {
    options: {
      stripBanners: {
        block: true
      },
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
      separator: ';\n'
    },
    src: ['bower_components/angular-cookies/angular-cookies.min.js',
      'bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'bower_components/angular-resource/angular-resource.min.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'bower_components/angular-translate/angular-translate.min.js',
      'bower_components/angular-translate-storage-local/angular-translate-storage-local.min.js',
      'bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js',
      'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
      'bower_components/angular-ui-sortable/sortable.min.js',
      'bower_components/angular-file-upload/dist/angular-file-upload.min.js',
      'bower_components/jquery-ui/jquery-ui.min.js',
      'bower_components/bowser/bowser.min.js',
      'bower_components/numeral/min/numeral.min.js',
      'bower_components/spin.js/spin.min.js',
      'bower_components/angular-spinner/angular-spinner.min.js',
      'bower_components/jquery-toggles/toggles.min.js',
      'bower_components/moment/moment.min.js',
      'bower_components/angular-click-outside/clickoutside.directive.min.js',
      'js/libs/datetime-picker-custom.js',
      'bower_components/angular-sanitize/angular-sanitize.min.js',
      'bower_components/ng-csv/build/ng-csv.min.js',
      'bower_components/ngDraggable/ngDraggable.min.js',
      'bower_components/angularjs-nvd3-directives/dist/angularjs-nvd3-directives.min.js',
      'bower_components/angularjs-dropdown-multiselect/src/angularjs-dropdown-multiselect.min.js',
      'bower_components/bootstrap-ui-datetime-picker/dist/datetime-picker.unmangled.min.js',
      'bower_components/angular-cache/dist/angular-cache.min.js'
    ],
    dest: 'js/minified/plugins.min.js'
  },
  css: {
    options: {
      stripBanners: {
        block: true
      },
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
      separator: ';\n'
    },
    src: ['css/bootstrap.rebased.min.css',
      'bower_components/jquery-toggles/css/toggles-full.min.css',
      'css/kendo.custom.min.css'
    ],
    dest: 'css/core.min.css'
  },
  core: {
    options: {
      stripBanners: {
        block: true
      },
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
      separator: ';\n'
    },
    src: ['bower_components/jquery/dist/jquery.min.js',
      'bower_components/bootstrap/dist/js/bootstrap.min.js',
      'bower_components/angular/angular.min.js',
      'bower_components/lodash/lodash.min.js',
      'js/libs/kendo.custom.min.js',
      'bower_components/kendo-ui/js/kendo.angular.min.js'
    ],
    dest: 'js/minified/core.min.js'
  }
};