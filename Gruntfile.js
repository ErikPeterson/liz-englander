module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
       
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'app/scss',
                    src: ['main.scss'],
                    dest: 'dist/css',
                    ext: '.css'
                }]
            } 
        },
        copy: {
            html: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: ['**/*.html'],
                    dest: 'dist/'
                }]
            },
            images : {
                files: [{
                    expand: true,
                    cwd: 'app/images',
                    src: ['**/*'],
                    dest: 'dist/images'
                }]
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            css: {
                files: ['app/css/scss/**/*.scss'],
                tasks: ['sass']
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
                    src: ['*.html', 'work/**/*.html']
                    dest: 'dist'
                }]
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

    // Default task
    grunt.registerTask('default', ['sass:dist']);
};

