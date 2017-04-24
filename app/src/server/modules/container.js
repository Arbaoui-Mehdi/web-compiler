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
const crypto  = require('crypto');
import { io }        from './server';
import { Sandbox }   from './sandbox';
import { compilers } from './compilers';

class Container {


  /**
   * [socketConnection description]
   * @return {[type]} [description]
   */
  socketConnection(){

    //
    // Container Config
    let timeout_val = 5;
    let path        = '/var/www/html/web-compiler/app/src/server/';
    let vm_name     = 'web_compiler';

    /**
     * [description]
     * @param  {[type]} socket [description]
     * @return {[type]}        [description]
     */
    io.on('connection', function (socket) {
      socket.on('source code', function (data) {

        //
        // Data
        let language = data.language;
        let stdin    = data.stdin;

        //
        //
        let folder = 'temp/' + container.random_char(10);

        //
        // Command to Run
        let compiler_name  = compilers[language][0];
        let file           = compilers[language][1];
        let output_command = compilers[language][2];
        let language_name  = compilers[language][3];
        let compiler_args  = compilers[language][4];

        //
        //
        let sandbox  = new Sandbox(
          timeout_val,
          path,
          folder,
          vm_name,
          compiler_name,
          file,
          data.code,
          output_command,
          language_name,
          compiler_args,
          stdin
        );

        //
        // data will contain the output of the compiled/interpreted code
        // the result maybe normal program output, list of error messages or a Timeout error
        sandbox.run(function(data){});


      });
    });
  }

  /**
   * [random Create random bytes from a given size]
   * @param  {[string]} size [description]
   * @return {[type]}      [description]
   */
  random_char(size){
    return crypto.randomBytes(size).toString('hex');
  }


}

let container = new Container();
container.socketConnection();
