module.exports = function(grunt) {
    var javascripts = 'js/script.js',
        stylesheets = 'app/sass/styles.scss',
        images = 'img/*.{png,jpg,gif}';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        // Javascript Tasks
        // ---------------------------------------------

        jshint: {
            dev: ['Gruntfile.js', javascripts]
        },

        uglify: {
            scripts: {
                src: javascripts,
                dest: 'js/scripts.min.js',
                separator: ';'
            }
        },


        // CSS Tasks
        // ---------------------------------------------

        sass: {
            dev: {
                options: {
                    lineNumbers: true,
                    style: 'expanded'
                },
                files: {
                    'css/styles.css': stylesheets
                }
            },
            dist: {
                options: {
                    style: 'compressed',
                    quiet: true
                },
                files: {
                    'css/styles.min.css': stylesheets
                }
            }
        },


        // Image Tasks
        // ---------------------------------------------

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['*.{jpg,gif,png}'],
                    dest: 'img'
                }]
            }
        },

        // Misc Tasks
        // ---------------------------------------------

        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: javascripts,
                tasks: [
                    'concat:scripts',
                    'jshint',
                    'uglify:scripts'
                ]
            },
            sass: {
                files: 'app/sass/**/*{.scss, .sass}',
                tasks: ['sass'],
                options: {
                    livereload: false
                }
            },
            css: {
                files: 'css/*.css',
                tasks: ''
            },
            images: {
                files: images,
                tasks: [
                    'imagemin'
                ]
            }
        }
    });

    
    grunt.registerTask('default', ['watch']);

    grunt.registerTask('build', [
        'imagemin',
        'sass',
        'concat',
        'jshint',
        'uglify'
    ]);
};