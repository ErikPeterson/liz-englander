module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
       
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'app/sass',
                    src: ['main.scss'],
                    dest: 'dist/css',
                    ext: '.css'
                }]
            } 
        },
        copy: {
            images: {
                files: [{
                    expand: true,
                    cwd: 'app/images',
                    src: ['**/*'],
                    dest: 'dist/images'
                }]
            },
            js: {
                files: [{
                    expand: true,
                    cwd: 'app/js',
                    src: ['main.js'],
                    dest: 'dist/js'
                }
                ]
            }
        },
        watch: {
            js: {
                options: {livereload: true},
                files: ['app/js/main.js'],
                tasks: ['copy:js']
            },
            css: {
                options: {livereload: true},
                files: ['app/sass/**/*.scss'],
                tasks: ['sass']
            },
            html: {
                options: {livereload: true},
                files: ['app/**/*.html'],
                tasks: ['processhtml:dist']
            }
        },
        processhtml: {
            dist: {
                options:{
                    includeBase: 'app/partials',
                    recursive: true
                },
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: ['*.html', 'work/**/*.html'],
                    dest: 'dist'
                }]
            }
        },
        connect: {
            server: {
                options: {
                    livereload: true,
                    debug: true,
                    base: 'dist',
                    open: true
                }
            }
        }

    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task
    grunt.registerTask('default', ['sass:dist', 'processhtml:dist', 'copy']);
    grunt.registerTask('serve', ['connect:server', 'watch']);
};

