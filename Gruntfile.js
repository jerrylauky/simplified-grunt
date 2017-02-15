// data to be used in each grunt task
var data = {
    LIVERELOAD_PORT: 12345,
    SERVER_DEV_PORT: 9000,
    SERVER_TEST_PORT: 9001,

    scripts: {
        prod: {
            js: [
                'scripts/js/core.min.js',
                'scripts/js/app.min.js'
            ],
            css: [
                'scripts/css/core.min.css',
                'scripts/css/style.min.css'
            ]
        },
        shared: {
            index: {
                original: 'index.html',
                placeholder: 'index.placeholder.html'
            }
        }
    }, 

    filesToHTML: function (files, version) {
        var fileListEmpty = !files || !files.length;

        if (fileListEmpty)
            return '';

        return files.reduce(function (sum, value, next, stack) {
            if (next === 1)
                sum = fileToHTML(sum, version);

            return sum + '\n    ' + fileToHTML(value, version);
        });
    },

    getCurrentUnixTimeStamp: function () {
        return Date.now();
    }
};

var fileToHTML = function (path, version) {
    var html = {
        'js': '<script defer src="{path}"></script>',
        'css': '<link rel="stylesheet" href="{path}">'
    },
    ext = getFileExtension(path)[0] || '';

    if (version)
        path += '?v=' + version;

    return html[ext] ? html[ext].replace('{path}', path) : '';
};

var getFileExtension = function (path) {
    return (/[.]/.exec(path)) ? /[^.]+$/.exec(path) : null;
};

module.exports = function (grunt) {
    var path = require('path'), options = {
        // load all config files in grunt/*.js
        configPath: path.join(process.cwd(), 'grunt'),

        // load project configs, grunt.initConfig()
        init: true,

        data: data,

        // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
        loadGruntTasks: {
            pattern: 'grunt-*',
            config: require('./package.json'),
            scope: ['devDependencies', 'dependencies']
        }
    };

    require('load-grunt-config')(grunt, options);

    // Task(s) goes below.

    // Default task for CHEF to build release
    grunt.registerTask('default', ['prod']);

    // reset
    grunt.registerTask('reset', 'Reset App', ['shell:resetRepo']);

    // cleanup
    grunt.registerTask('cleanup', 'Clean Up', ['copy:undo', 'clean', 'copy:make']);
    grunt.registerTask('cleanup:dev', 'Clean Up Development', ['copy:undo', 'clean']);

    // compression
    grunt.registerTask('compress', 'Compress files', ['cssmin', 'ngtemplates', 'uglify', 'concat', 'includereplace']);

    // build
    grunt.registerTask('build', 'Build App', ['auto_install', 'sass', 'compress']);
    grunt.registerTask('build:dev', 'Build App Development', ['sass']);
    grunt.registerTask('build:quick', 'Build App with only preprocessors and compressors', ['sass', 'compress']);

    // For dev
    grunt.registerTask('dev', ['cleanup:dev', 'build:dev', 'connect:devserver', 'watch:app']);

    // In production
    grunt.registerTask('prod', 'Production Build', function () {
        // 1.  copy original code from backup file and remove backup file
        // 2.  clean build
        // 3.  copy and install files
        // 4.  copy the index html placeholder file as well
        // 5.  compile scss to css
        // 6.  uglify & compress css files
        // 7.  uglify & compress & concat html files
        // 8.  uglify & compress js files
        // 9.  concat all files
        // 10. include css and js files
        // 11. copy app files to dist/

        grunt.task.run(['cleanup', 'build', 'copy:app']);
    });

    // For testing, run to see if prod task works
    grunt.registerTask('prod:quick', 'Automation Produnction Build Quick', ['cleanup', 'build:quick']);
};
