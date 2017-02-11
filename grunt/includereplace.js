module.exports = {
  js: {
    options: {
      globals: {
        jsScripts: '<%= getScriptTagFromFiles(scripts.prod.js, getCurrentUnixTimeStamp())%>'
      }
    },
    src: '<%= scripts.shared.index.original %>',
    dest: './',
    expand: true,
    cwd: './'
  },
  css: {
    options: {
      globals: {
        cssScripts: '<%= getScriptTagFromFiles(scripts.prod.css, getCurrentUnixTimeStamp())%>'
      }
    },
    src: '<%= scripts.shared.index.original %>',
    dest: './',
    expand: true,
    cwd: './'
  }
};