
/* global module: true */
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        copy: {
            "jquery": {
                src: [ "node_modules/jquery/dist/jquery.js" ],
                dest: "lib/jquery/jquery.js"
            },
            "syntax": {
                src: [ "node_modules/syntax/lib/syntax.browser.js" ],
                dest: "lib/syntax/syntax.js"
            },
            "swiper": {
                src: [ "node_modules/swiper/dist/js/swiper.js" ],
                dest: "lib/swiper/swiper.js"
            },
            "swiper-css": {
                src: [ "node_modules/swiper/dist/css/swiper.css" ],
                dest: "lib/swiper/swiper.css"
            },
            "normalize.css": {
                src: [ "node_modules/normalize.css/normalize.css" ],
                dest: "lib/normalize/normalize.css"
            },
            "font-awesome-css": {
                src: [ "node_modules/font-awesome/css/font-awesome.css" ],
                dest: "lib/font-awesome/font-awesome.css",
                options: {
                    process: function (content /*, srcpath */) {
                        return content.replace(/\.\.\/fonts\//g, "");
                    }
                }
            },
            "font-awesome-fonts": {
                files: [{
                    expand: true, flatten: false, cwd: "node_modules/font-awesome/fonts",
                    src: "fontawesome-webfont.*",
                    dest: "lib/font-awesome/"
                }]
            },
            "gridless": {
                src: [ "node_modules/gridless/predef/eg12.css" ],
                dest: "lib/gridless/eg12.css"
            },
            "combinumerals": {
                files: [
                    { expand: true, flatten: false, cwd: "node_modules/combinumerals",
                      src: "CombiNumeralsLtd.*", dest: "lib/combinumerals/" }
                ]
            },
            "bootstrap": {
                files: [
                    { expand: true, flatten: true, cwd: "node_modules/bootstrap/dist",
                      src: "js/bootstrap.js", dest: "lib/bootstrap/" },
                    { expand: true, flatten: true, cwd: "node_modules/bootstrap/dist",
                      src: "css/bootstrap.css", dest: "lib/bootstrap/" },
                    { expand: true, flatten: true, cwd: "node_modules/bootstrap/dist",
                      src: "css/bootstrap-theme.css", dest: "lib/bootstrap/" }
                ]
            },
            "typopro": {
                files: [
                    { expand: true, flatten: false, cwd: "node_modules/typopro-web/web",
                      src: "TypoPRO-OpenSans/**", dest: "lib/typopro/" },
                    { expand: true, flatten: false, cwd: "node_modules/typopro-web/web",
                      src: "TypoPRO-DejaVu/**", dest: "lib/typopro/" },
                    { expand: true, flatten: false, cwd: "node_modules/typopro-web/web",
                      src: "TypoPRO-Journal/**", dest: "lib/typopro/" }
                ]
            }
        },
        clean: {
            clean:     [ "lib" ],
            distclean: [ "node_modules" ]
        }
    });

    grunt.registerTask("default", [ "copy" ]);
};

