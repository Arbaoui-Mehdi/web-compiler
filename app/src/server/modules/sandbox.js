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
class Sandbox{

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
  constructor(timeout_value, path,folder, vm_name, compiler_name, file_name,code, output_command,languageName, e_arguments, stdin_data){

    this.timeout_value   = timeout_value;
    this.path            = path;
    this.folder          = folder;
    this.vm_name         = vm_name;
    this.compiler_name   = compiler_name;
    this.file_name       = file_name;
    this.code            = code;
    this.output_command  = output_command;
    this.langName        = languageName;
    this.extra_arguments = e_arguments;
    this.stdin_data      = stdin_data;

  }

  /**
   * [run Function that first prepares the Docker environment and then executes the Docker sandbox ]
   * @param  {[type]} success [description]
   * @return {[type]}         [description]
   */
  run(success){

    let sandbox = new Sandbox(
      this.timeout_value,
      this.path,
      this.folder,
      this.vm_name,
      this.compiler_name,
      this.file_name,
      this.code,
      this.output_command,
      this.langName,
      this.extra_arguments,
      this.stdin_data
    );

    this.prepare(function(e){
      sandbox.execute(success);
    })

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
  prepare(success){

    const exec     = require('child_process').exec;
    const fs       = require('fs');

    let path       = this.path;
    let folder     = this.folder;
    let file_name  = this.file_name;
    let code       = this.code;
    let stdin_data = this.stdin_data;

    // Command to Execute
    // Example: mkdir /temp/5eb3cca437727a17965e && cp /Payload/* /temp/5eb3cca437727a17965e && chmod 777 /temp/5eb3cca437727a17965e
    let command = `mkdir ${path}${folder} && cp ${path}payload/* ${path}${folder} && chmod 777 ${path}${folder}`;

    //
    // Executing command
    exec(command, function(st){

      let file_path = `${path}${folder}/${file_name}`;

      //
      //
      // Adding File to the created folder
      fs.writeFile(file_path, code,function(err){

          //
          //
          if (err){
            console.log(err);
          }

          //
          //
          else {

            //
            //
            exec(`chmod 777 ${file_path}`);

            //
            //
            fs.writeFile(path + folder+"/inputFile", stdin_data, function(err){
              if (err){
                console.log(err);
              }
              else {
                console.log("Input file was saved!");
                success();
              }
            });


          }

      });

    })

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
  execute(success){

    //
    //
    const exec = require('child_process').exec;
    const fs   = require('fs');
    let myC  = 0; //variable to enforce the timeout_value

    //
    //
    let path            = this.path;
    let folder          = this.folder;
    let file_name       = this.file_name;
    let code            = this.code;
    let stdin_data      = this.stdin_data;
    let timeout_value   = this.timeout_value;
    let vm_name         = this.vm_name;
    let compiler_name   = this.compiler_name;
    let output_command  = this.output_command;
    let extra_arguments = this.extra_arguments;
    let langName        = this.langName;

    // Command to run on the container
    // /var/www/html/web-compiler/app/src/server/DockerTimeout.sh 5s -u mysql -e 'NODE_PATH=/usr/local/lib/node_modules'
    // -i -t -v  "/var/www/html/web-compiler/app/src/server/temp/e2ae1f6b25e828c90d77":/usercode virtual_machine /usercode/script.sh python file.py
    let command = `${path}DockerTimeout.sh ${timeout_value}s  -i -t -v "${path}${folder}":/usercode ${vm_name} /usercode/script.sh ${compiler_name} ${file_name} ${output_command} ${extra_arguments}`;

    //
    //
    // Execute the Docker, This is done ASYNCHRONOUSLY
    exec(command);

    //
    //
    // Check for File named "completed" after every 1 second
    let intid = setInterval(function(){

      //
      //
      myC = myC + 1;

      //
      //
      //
      fs.readFile(path + folder + '/completed', 'utf8', function(err, data) {

        //
        //
        //
        // if file is not available yet and the file interval is not yet up carry on
        if (err && myC < timeout_value){
          console.log(err);
          return;
        }

        //
        //
        //
        // if file is found simply display a message and proceed
        else if (myC < timeout_value) {
          console.log("DONE")

          //
          //check for possible errors
          fs.readFile(path + folder + '/errors', 'utf8', function(err2, data2){
            if(!data2) data2=""
            console.log("Error file: ")
            console.log(data2)

            console.log("Main File")
            console.log(data)

            let lines = data.toString().split('*-COMPILEBOX::ENDOFOUTPUT-*')
            data =lines[0]
            let time = lines[1]

            console.log("Time: ")
            console.log(time)

            success(data,time,data2)

          });

        }

        //
        //
        //
        // if time is up. Save an error message to the data variable
        else {

          //
          // Since the time is up, we take the partial output and return it.
          fs.readFile(path + folder + '/logfile.txt', 'utf8', function(err, data){
            if (!data) data = "";
            data += "\nExecution Timed Out";
            console.log("Timed Out: "+folder+" "+langName)
            fs.readFile(path + folder + '/errors', 'utf8', function(err2, data2){
              if(!data2) data2=""

              let lines = data.toString().split('*---*')
              data=lines[0]
              let time=lines[1]

              console.log("Time: ")
              console.log(time)

              success(data,data2)
            });
          });

        }

        //
        //
        //
        // now remove the temporary directory
        console.log("ATTEMPTING TO REMOVE: " + path+folder);
        console.log("------------------------------")
        exec("rm -r " + path+folder);

        clearInterval(intid);

      });

    }, 1000);

  }
}

export { Sandbox };
