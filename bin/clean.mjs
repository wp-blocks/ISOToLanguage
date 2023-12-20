//!/usr/bin/env node
import fs from 'fs'

//check if the directory exists
if (!fs.existsSync("./lib")) {
    console.log("Directory not found... skipping");
    process.exit(0);
}

fs.rmdirSync("./lib", {recursive: true});
