'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
          scripts: {
            files: ['**/*.js', '**/*.min.js','**/*.css','**/*.min.css'],
            tasks: ['uglify','cssmin'],
            options: {
              spawn: false,
            },
          },
        },
        // responsive_images: {
        //     options: {
        //       engine: 'gm'
        //       sizes: [{
        //         name: 'small',
        //         width: '30%',
        //         suffix: '_small',
        //         quality: 20
        //       }, {
        //         name: 'large',
        //         upscale:true,
        //         width: '50%',
        //         suffix: '_large',
        //         quality: 40
        //       }]
        //     }
        //     files: [{
        //       expand: true,
        //       cwd: ['views/images/**/*.{jpg,png}'],
        //       src: ['views/images/**/*.{jpg,png}'],
        //       dest: 'dest/'
        //     }]
        //   }
        // },
        imagemin: {
           dynamic: {
              files: [{
                 expand: true,
                 cwd: 'views/images/',
                 src: ['**/*.{jpg,png}'],
                 dest: 'views/images/dest/'
            }]
          }
        },
        uglify: {
           options: {
               manage: false
            },
            target:{
            files: {
               'views/js/main.min.js': ['views/js/main.js'],
            }
          }
        },
        cssmin: {
         target: {
            files: [{
                expand: true,
                cwd: 'views/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'views/css/',
                ext:  '.min.css'
            }]
          }
        }
        
      });

      grunt.loadNpmTasks('grunt-contrib-jshint');
      grunt.loadNpmTasks('grunt-contrib-watch');
      // grunt.loadNpmTasks('grunt-responsive-images');
      grunt.loadNpmTasks('grunt-contrib-imagemin');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-cssmin');
      grunt.registerTask('default',['imagemin','uglify','cssmin']);
    };



