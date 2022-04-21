/** Command-line tool to generate Markov text. */

const fs = require("fs");
const markov = require("./markov")
const axios = require("axios");
const process = require("process");

function generateText(text){
    let machine = new markov.MarkovMachine(text);
    console.log(machine.makeText)
}

function makeText(path){
    fs.readFile(path,"utf8", (err,data)=>{
        if (err){
            console.log(err)
            process.exit(1)
        } else{
            generateText(data);
        }
    });
}

async function URLtest(url){
    try{
        let resp = await axios.get(url);
        generateText(resp.data)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

let [method,path] = process.argv[2];
if (method.indexOf("http") == -1){
    URLtest(path);
} else{
    makeText(path);
};
