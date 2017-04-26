/**
 *
 * Requirements
 *
 */
require('./assets/scss/main.scss')

/**
 *
 * Config
 *
 */
const $ = require('jquery');
const host = 'localhost';
const port = 8080;
const socket = require("socket.io-client")(`${host}:${port}`);

/**
 *
 *
 *
 * Client
 *
 *
 *
 */
class Client {

  /**
   * [compileCode description]
   * @return {[type]} [description]
   */
  compileCode(){
    $('#send').on('click', function(){
      socket.emit('source code', {
         language : $('.lang').val(),
         code     : $('.code').val(),
         stdin    : $('.stdin').val(),
       });
    });
  }

}

let client = new Client();
client.compileCode();
