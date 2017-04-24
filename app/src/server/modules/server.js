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
const express = require('express');
const app     = express();
const http    = require('http').Server(app);
const io      = require('socket.io').listen(http);
const port    = 8080;

/**
 *
 * Server Class
 *
 */
class Server {

  /**
   * [serverListen description]
   * @param  {[type]} port [description]
   * @return {[type]}      [description]
   */
  serverListen(port){
    http.listen(port, function(res, error){
      console.log(`Listening at ${port}`);
    });
  }

}

/**
 * Init
 */
let server = new Server();
server.serverListen(port);

/**
 * Exports
 */
export { io };
