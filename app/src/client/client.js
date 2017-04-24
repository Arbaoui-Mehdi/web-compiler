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
const host = '172.16.128.129';
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
      console.log($('.stdin').val());
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
