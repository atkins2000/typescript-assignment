import {index} from "./index";

function start(){
    const myArgs = process.argv;
    const newIndex = new index();
    const readline = require('readline');
    if(myArgs[2]){
        //file system
        const fs = require('fs');
        const rl = readline.createInterface({
            input: fs.createReadStream(`${myArgs[2]}`)
        });
        rl.on('line', (line: string) => {                       //async await syntax
            //console.log(line);
            newIndex.getReq(line);
        });
    }
    else{
        //command line
        const rl = readline.createInterface(process.stdin);
        const word = "exit";
        rl.on('line', function(line: string) {
            if(line !== word){
                //console.log(line);
                newIndex.getReq(line);
            }else{
                rl.close()
            }
        }).on('close', function() {
        console.log('Closed');
        process.exit(0);
        });
    }
}

start();

