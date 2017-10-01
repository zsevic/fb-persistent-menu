#!/usr/bin/env node

const argv = require('yargs').argv;
const lib = require('../lib');
const accessToken = process.env.access_token;

if(argv.json){
    try{
        let data=JSON.parse(argv.json);
        lib.addPersistentMenu(accessToken,data);
    }catch(e){
        console.log(`JSON is not well formatted!`);
    }
}else{
    console.log(`There are no settings`);
}
