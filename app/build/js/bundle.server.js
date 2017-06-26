/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/***
 *      /$$$$$$                                    /$$ /$$
 *     /$$__  $$                                  |__/| $$
 *    | $$  \__/  /$$$$$$  /$$$$$$/$$$$   /$$$$$$  /$$| $$  /$$$$$$   /$$$$$$   /$$$$$$$
 *    | $$       /$$__  $$| $$_  $$_  $$ /$$__  $$| $$| $$ /$$__  $$ /$$__  $$ /$$_____/
 *    | $$      | $$  \ $$| $$ \ $$ \ $$| $$  \ $$| $$| $$| $$$$$$$$| $$  \__/|  $$$$$$
 *    | $$    $$| $$  | $$| $$ | $$ | $$| $$  | $$| $$| $$| $$_____/| $$       \____  $$
 *    |  $$$$$$/|  $$$$$$/| $$ | $$ | $$| $$$$$$$/| $$| $$|  $$$$$$$| $$       /$$$$$$$/
 *     \______/  \______/ |__/ |__/ |__/| $$____/ |__/|__/ \_______/|__/      |_______/
 *                                      | $$
 *                                      | $$
 *                                      |__/
 */
/**
 * [0][compiler/interpretor]
 * [1][file name]
 * [2][command to invoke the compiled program]
 * [3][language name]
 * [4][additional arguments/flags for compilers]
 */
var compilers = [["python", "file.py", "", "Python", ""], ["\'gcc -o /usercode/a.out\'", "file.c", "/usercode/a.out", "C", ""], ["assembler", "file.asm", "/usercode/file", "Assembly", "/usercode/file"]];

exports.compilers = compilers;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/***
 *      /$$$$$$
 *     /$$__  $$
 *    | $$  \__/  /$$$$$$   /$$$$$$  /$$    /$$ /$$$$$$   /$$$$$$
 *    |  $$$$$$  /$$__  $$ /$$__  $$|  $$  /$$//$$__  $$ /$$__  $$
 *     \____  $$| $$$$$$$$| $$  \__/ \  $$/$$/| $$$$$$$$| $$  \__/
 *     /$$  \ $$| $$_____/| $$        \  $$$/ | $$_____/| $$
 *    |  $$$$$$/|  $$$$$$$| $$         \  $/  |  $$$$$$$| $$
 *     \______/  \_______/|__/          \_/    \_______/|__/
 *
 *
 *
 */
/**
 *
 *  Requirements
 *
 */
var express = __webpack_require__(8);
var app = express();
var http = __webpack_require__(9).Server(app);
var io = __webpack_require__(10).listen(http);
var port = 8080;

/**
 *
 * Server Class
 *
 */

var Server = function () {
  function Server() {
    _classCallCheck(this, Server);
  }

  _createClass(Server, [{
    key: 'serverListen',


    /**
     * [serverListen description]
     * @param  {[type]} port [description]
     * @return {[type]}      [description]
     */
    value: function serverListen(port) {
      http.listen(port, function (res, error) {
        console.log('Listening at ' + port);
      });
    }
  }]);

  return Server;
}();

/**
 * Init
 */


var server = new Server();
server.serverListen(port);

/**
 * Exports
 */
exports.io = io;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***
 *      /$$$$$$  /$$$$$$$  /$$$$$$$
 *     /$$__  $$| $$__  $$| $$__  $$
 *    | $$  \ $$| $$  \ $$| $$  \ $$
 *    | $$$$$$$$| $$$$$$$/| $$$$$$$/
 *    | $$__  $$| $$____/ | $$____/
 *    | $$  | $$| $$      | $$
 *    | $$  | $$| $$      | $$
 *    |__/  |__/|__/      |__/
 *
 *
 *
 */
__webpack_require__(1);
__webpack_require__(5);
__webpack_require__(0);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _server = __webpack_require__(1);

var _sandbox = __webpack_require__(6);

var _compilers = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/***
 *      /$$$$$$                        /$$               /$$
 *     /$$__  $$                      | $$              |__/
 *    | $$  \__/  /$$$$$$  /$$$$$$$  /$$$$$$    /$$$$$$  /$$ /$$$$$$$   /$$$$$$   /$$$$$$
 *    | $$       /$$__  $$| $$__  $$|_  $$_/   |____  $$| $$| $$__  $$ /$$__  $$ /$$__  $$
 *    | $$      | $$  \ $$| $$  \ $$  | $$      /$$$$$$$| $$| $$  \ $$| $$$$$$$$| $$  \__/
 *    | $$    $$| $$  | $$| $$  | $$  | $$ /$$ /$$__  $$| $$| $$  | $$| $$_____/| $$
 *    |  $$$$$$/|  $$$$$$/| $$  | $$  |  $$$$/|  $$$$$$$| $$| $$  | $$|  $$$$$$$| $$
 *     \______/  \______/ |__/  |__/   \___/   \_______/|__/|__/  |__/ \_______/|__/
 *
 *
 *
 */
/**
 *
 *  Requirements
 *
 */
var crypto = __webpack_require__(7);

var Container = function () {
  function Container() {
    _classCallCheck(this, Container);
  }

  _createClass(Container, [{
    key: 'socketConnection',


    /**
     * [socketConnection description]
     * @return {[type]} [description]
     */
    value: function socketConnection() {

      //
      // Container Config
      var timeout_val = 5;
      var path = '/Applications/MAMP/htdocs/web-compiler/app/src/server/';
      var vm_name = 'web_compiler';

      /**
       * [description]
       * @param  {[type]} socket [description]
       * @return {[type]}        [description]
       */
      _server.io.on('connection', function (socket) {
        socket.on('source code', function (data) {

          //
          // Data
          var language = data.language;
          var stdin = data.stdin;

          //
          //
          var folder = 'temp/' + container.random_char(10);

          //
          // Command to Run
          var compiler_name = _compilers.compilers[language][0];
          var file = _compilers.compilers[language][1];
          var output_command = _compilers.compilers[language][2];
          var language_name = _compilers.compilers[language][3];
          var compiler_args = _compilers.compilers[language][4];

          //
          //
          var sandbox = new _sandbox.Sandbox(timeout_val, path, folder, vm_name, compiler_name, file, data.code, output_command, language_name, compiler_args, stdin);

          //
          // data will contain the output of the compiled/interpreted code
          // the result maybe normal program output, list of error messages or a Timeout error
          sandbox.run(function (data) {});
        });
      });
    }

    /**
     * [random Create random bytes from a given size]
     * @param  {[string]} size [description]
     * @return {[type]}      [description]
     */

  }, {
    key: 'random_char',
    value: function random_char(size) {
      return crypto.randomBytes(size).toString('hex');
    }
  }]);

  return Container;
}();

var container = new Container();
container.socketConnection();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/***
 *      /$$$$$$                            /$$ /$$
 *     /$$__  $$                          | $$| $$
 *    | $$  \__/  /$$$$$$  /$$$$$$$   /$$$$$$$| $$$$$$$   /$$$$$$  /$$   /$$
 *    |  $$$$$$  |____  $$| $$__  $$ /$$__  $$| $$__  $$ /$$__  $$|  $$ /$$/
 *     \____  $$  /$$$$$$$| $$  \ $$| $$  | $$| $$  \ $$| $$  \ $$ \  $$$$/
 *     /$$  \ $$ /$$__  $$| $$  | $$| $$  | $$| $$  | $$| $$  | $$  >$$  $$
 *    |  $$$$$$/|  $$$$$$$| $$  | $$|  $$$$$$$| $$$$$$$/|  $$$$$$/ /$$/\  $$
 *     \______/  \_______/|__/  |__/ \_______/|_______/  \______/ |__/  \__/
 *
 *
 *
 */
var Sandbox = function () {

  /**
   * [constructor This constructor stores all the arguments needed to prepare and execute a Docker Sandbox]
   * @param  {[type]} timeout_value  [The Time_out limit for code execution in Docker]
   * @param  {[type]} path           [The current working directory where the current API folder is kept]
   * @param  {[type]} folder         [The name of the folder that would be mounted/shared with Docker container, this will be concatenated with path]
   * @param  {[type]} vm_name        [The TAG of the Docker VM that we wish to execute]
   * @param  {[type]} compiler_name  [The compiler/interpretor to use for carrying out the translation]
   * @param  {[type]} file_name      [The file_name to which source code will be written]
   * @param  {[type]} code           [The actual code]
   * @param  {[type]} output_command [Used in case of compilers only, to execute the object code, send " " in case of interpretors]
   * @param  {[type]} languageName   [description]
   * @param  {[type]} e_arguments    [description]
   * @param  {[type]} stdin_data     [description]
   * @return {[type]}                [description]
   */
  function Sandbox(timeout_value, path, folder, vm_name, compiler_name, file_name, code, output_command, languageName, e_arguments, stdin_data) {
    _classCallCheck(this, Sandbox);

    this.timeout_value = timeout_value;
    this.path = path;
    this.folder = folder;
    this.vm_name = vm_name;
    this.compiler_name = compiler_name;
    this.file_name = file_name;
    this.code = code;
    this.output_command = output_command;
    this.langName = languageName;
    this.extra_arguments = e_arguments;
    this.stdin_data = stdin_data;
  }

  /**
   * [run Function that first prepares the Docker environment and then executes the Docker sandbox ]
   * @param  {[type]} success [description]
   * @return {[type]}         [description]
   */


  _createClass(Sandbox, [{
    key: 'run',
    value: function run(success) {

      var sandbox = new Sandbox(this.timeout_value, this.path, this.folder, this.vm_name, this.compiler_name, this.file_name, this.code, this.output_command, this.langName, this.extra_arguments, this.stdin_data);

      this.prepare(function (e) {
        sandbox.execute(success);
      });
    }

    /**
     *
     * @description Function that creates a directory with the
     * folder name already provided through constructor
     * and then copies contents of folder named Payload to the
     * created folder, this newly created folder will be mounted
     * on the Docker Container. A file with the name specified in
     * file_name variable of this class is created and all the
     * code written in 'code' variable of this class is copied into this file.
     * Summary: This function produces a folder that contains the source
     * file and 2 scripts, this folder is mounted to our
     * Docker container when we run it.
     *
     * @param  {[type]} success [description]
     * @return {[type]}         [description]
     */

  }, {
    key: 'prepare',
    value: function prepare(success) {

      var exec = __webpack_require__(2).exec;
      var fs = __webpack_require__(3);

      var path = this.path;
      var folder = this.folder;
      var file_name = this.file_name;
      var code = this.code;
      var stdin_data = this.stdin_data;

      // Command to Execute
      // Example: mkdir /temp/5eb3cca437727a17965e && cp /Payload/* /temp/5eb3cca437727a17965e && chmod 777 /temp/5eb3cca437727a17965e
      var command = 'mkdir ' + path + folder + ' && cp ' + path + 'payload/* ' + path + folder + ' && chmod 777 ' + path + folder;

      //
      // Executing command
      exec(command, function (st) {

        var file_path = '' + path + folder + '/' + file_name;

        //
        //
        // Adding File to the created folder
        fs.writeFile(file_path, code, function (err) {

          //
          //
          if (err) {
            console.log(err);
          }

          //
          //
          else {

              //
              //
              exec('chmod 777 ' + file_path);

              //
              //
              fs.writeFile(path + folder + "/inputFile", stdin_data, function (err) {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Input file was saved!");
                  success();
                }
              });
            }
        });
      });
    }

    /**
     * @precondition prepare() has successfully completed
     *
     * @description This function takes the newly created folder prepared by
     * DockerSandbox.prepare() and spawns a Docker container
     * with the folder mounted inside the container with
     * the name '/usercode/' and calls the script.sh file present in that folder
     * to carry out the compilation. The Sandbox is spawned
     * ASYNCHRONOUSLY and is supervised for a timeout limit specified in timeout_limit
     * variable in this class. This function keeps checking for the
     * file "Completed" until the file is created by script.sh or the timeout occurs
     * In case of timeout an error message is returned back, otherwise
     * the contents of the file (which could be the program output or log of
     * compilation error) is returned. In the end the function deletes
     * the temporary folder and exits
     * Summary: Run the Docker container and execute script.sh inside it.
     * Return the output generated and delete the mounted folder
     *
     * @param  {[type]} success [description]
     * @return {[type]}         [description]
     */

  }, {
    key: 'execute',
    value: function execute(success) {

      //
      //
      var exec = __webpack_require__(2).exec;
      var fs = __webpack_require__(3);
      var myC = 0; //variable to enforce the timeout_value

      //
      //
      var path = this.path;
      var folder = this.folder;
      var file_name = this.file_name;
      var code = this.code;
      var stdin_data = this.stdin_data;
      var timeout_value = this.timeout_value;
      var vm_name = this.vm_name;
      var compiler_name = this.compiler_name;
      var output_command = this.output_command;
      var extra_arguments = this.extra_arguments;
      var langName = this.langName;

      // Command to run on the container
      // /var/www/html/web-compiler/app/src/server/DockerTimeout.sh 5s -u mysql -e 'NODE_PATH=/usr/local/lib/node_modules'
      // -i -t -v  "/var/www/html/web-compiler/app/src/server/temp/e2ae1f6b25e828c90d77":/usercode virtual_machine /usercode/script.sh python file.py
      var command = path + 'DockerTimeout.sh ' + timeout_value + 's  -i -t -v "' + path + folder + '":/usercode ' + vm_name + ' /usercode/script.sh ' + compiler_name + ' ' + file_name + ' ' + output_command + ' ' + extra_arguments;

      //
      //
      // Execute the Docker, This is done ASYNCHRONOUSLY
      exec(command);

      //
      //
      // Check for File named "completed" after every 1 second
      var intid = setInterval(function () {

        //
        //
        myC = myC + 1;

        //
        //
        //
        fs.readFile(path + folder + '/completed', 'utf8', function (err, data) {

          //
          //
          //
          // if file is not available yet and the file interval is not yet up carry on
          if (err && myC < timeout_value) {
            console.log(err);
            return;
          }

          //
          //
          //
          // if file is found simply display a message and proceed
          else if (myC < timeout_value) {
              console.log("DONE");

              //
              //check for possible errors
              fs.readFile(path + folder + '/errors', 'utf8', function (err2, data2) {
                if (!data2) data2 = "";
                console.log("Error file: ");
                console.log(data2);

                console.log("Main File");
                console.log(data);

                var lines = data.toString().split('*-COMPILEBOX::ENDOFOUTPUT-*');
                data = lines[0];
                var time = lines[1];

                console.log("Time: ");
                console.log(time);

                success(data, time, data2);
              });
            }

            //
            //
            //
            // if time is up. Save an error message to the data variable
            else {

                //
                // Since the time is up, we take the partial output and return it.
                fs.readFile(path + folder + '/logfile.txt', 'utf8', function (err, data) {
                  if (!data) data = "";
                  data += "\nExecution Timed Out";
                  console.log("Timed Out: " + folder + " " + langName);
                  fs.readFile(path + folder + '/errors', 'utf8', function (err2, data2) {
                    if (!data2) data2 = "";

                    var lines = data.toString().split('*---*');
                    data = lines[0];
                    var time = lines[1];

                    console.log("Time: ");
                    console.log(time);

                    success(data, data2);
                  });
                });
              }

          //
          //
          //
          // now remove the temporary directory
          console.log("ATTEMPTING TO REMOVE: " + path + folder);
          console.log("------------------------------");
          exec("rm -r " + path + folder);

          clearInterval(intid);
        });
      }, 1000);
    }
  }]);

  return Sandbox;
}();

exports.Sandbox = Sandbox;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.server.js.map