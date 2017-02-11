module.exports = {
  options: {
    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
    shorthandCompacting: false,
    roundingPrecision: -1,
    rebase: true,
    rebaseTo: './css'
  },
  target: {
    files: {
      'css/style.min.css': ['css/style.css']
    }
  }
};