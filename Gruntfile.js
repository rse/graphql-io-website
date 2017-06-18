
/* global module: true */
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-bower-install-simple");

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        "bower-install-simple": {
            options: {
                color:       true,
                directory:   "bower_components"
            },
            "prod": {
                options: {
                    production: true
                }
            }
        },
        copy: {
            "jquery": {
                src: [ "bower_components/jquery/dist/jquery.js" ],
                dest: "lib/jquery/jquery.js"
            },
            "swiper": {
                src: [ "bower_components/swiper/dist/js/swiper.js" ],
                dest: "lib/swiper/swiper.js"
            },
            "swiper-css": {
                src: [ "bower_components/swiper/dist/css/swiper.css" ],
                dest: "lib/swiper/swiper.css"
            },
            "swiper-plugins": {
                files: [{
                    expand: true, flatten: true, filter: "isFile",
                    src: "bower_components/swiper/dist/js/swiper.jquery.js",
                    dest: "lib/swiper/"
                }]
            },
            "normalize.css": {
                src: [ "bower_components/normalize.css/normalize.css" ],
                dest: "lib/normalize/normalize.css"
            },
            "font-awesome-css": {
                src: [ "bower_components/font-awesome/css/font-awesome.css" ],
                dest: "lib/font-awesome/font-awesome.css",
                options: {
                    process: function (content /*, srcpath */) {
                        return content.replace(/\.\.\/fonts\//g, "");
                    }
                }
            },
            "font-awesome-fonts": {
                files: [{
                    expand: true, flatten: false, cwd: "bower_components/font-awesome/fonts",
                    src: "fontawesome-webfont.*",
                    dest: "lib/font-awesome/"
                }]
            },
            "gridless": {
                src: [ "bower_components/gridless/predef/eg12.css" ],
                dest: "lib/gridless/eg12.css"
            },
            "combinumerals": {
                files: [
                    { expand: true, flatten: false, cwd: "bower_components/combinumerals",
                      src: "CombiNumeralsLtd.*", dest: "lib/combinumerals/" }
                ]
            },
            "bootstrap": {
                files: [
                    { expand: true, flatten: true, cwd: "bower_components/bootstrap/dist",
                      src: "js/bootstrap.js", dest: "lib/bootstrap/" },
                    { expand: true, flatten: true, cwd: "bower_components/bootstrap/dist",
                      src: "css/bootstrap.css", dest: "lib/bootstrap/" },
                    { expand: true, flatten: true, cwd: "bower_components/bootstrap/dist",
                      src: "css/bootstrap-theme.css", dest: "lib/bootstrap/" }
                ]
            },
            "typopro": {
                files: [
                    { expand: true, flatten: false, cwd: "bower_components/typopro-web/web",
                      src: "TypoPRO-OpenSans/**", dest: "lib/typopro/" },
                    { expand: true, flatten: false, cwd: "bower_components/typopro-web/web",
                      src: "TypoPRO-DejaVu/**", dest: "lib/typopro/" },
                    { expand: true, flatten: false, cwd: "bower_components/typopro-web/web",
                      src: "TypoPRO-Journal/**", dest: "lib/typopro/" }
                ]
            }
        },
        clean: {
            clean:     [ "lib" ],
            distclean: [ "node_modules", "bower_components" ]
        }
    });

    grunt.registerTask("default", [ "bower-install-simple", "copy" ]);
};

