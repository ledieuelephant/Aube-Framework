#!/usr/bin/env node
const fs = require("fs")

const [,, ...args] = process.argv;

if (args[0] == "controller") {
    var filename = __dirname+`/controllers/${args[1]}Controller.js`
    var file = `class ${args[1]}Controller {} \n module.exports = ${args[1]}Controller`
    fs.writeFile(filename, file, err => {
        if (err) throw err;
        console.log("Le controller a bien été créer")
    })
}

else if (args[0] == "model"){
    var filename = __dirname+`/models/${args[1]}.js`
    var data = `const mongoose = require("mongoose") \n\nconst ${args[1]} = mongoose.model("${args[1]}", {\n \t name : String\n})\n\n module.exports = ${args[1]}`
    fs.writeFile(filename, data, err => {
        if (err) throw err;
        console.log("Le model a bien été créer")
    })

    args.forEach(arg => {
        if (arg == "-c"){
            var filename = __dirname+`/controllers/${args[1]}Controller.js`
            var file = `const ${args[1]} = require("../models/${args[1]}") \n\nclass ${args[1]}Controller {} \n module.exports = ${args[1]}Controller`
            fs.writeFile(filename, file, err => {
                if (err) throw err;
                console.log("Le controller a bien été créer")
            })
        }
    })
}