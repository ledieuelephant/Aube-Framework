// Import modules
const mongoose = require("mongoose")
const express = require("express");
const app = express();
const path = require("path")
const fs = require("fs")
const config = require("./config.json")
const web = require("./routes/web")
const api = require("./routes/api");
const serveFavicon = require("serve-favicon");
mongoose.connect(config.MONGODB_ADDRESS)

// Route names
app.use("/", web)
app.use("/api", api)

// Template react init
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Auto import controllers
const controllerFolder = __dirname+"/controllers";
const controllerFile = __dirname+"/app/controllers.js";

fs.readdir(controllerFolder, (err, files) => {
    let controllerFileText = "try {\n";
    let endText = "\n\tmodule.exports = {";
    let close = "\n\t}\n} catch (e)  {}";
    files.forEach(file => {
        controllerFileText += `\tvar ${file.replace(".js", "")} = require('../controllers/${file}')\n`
        endText += `\n \t\t${file.replace(".js", "")},`
    })
    let totalText = controllerFileText+endText+close;
    fs.writeFile(controllerFile, totalText, err => {
        if (err) {
            console.log("Update of controllers")
        }
    })
})

app.use("/css", express.static('public/css'));
app.use("/images", express.static("public/images"));
app.use(serveFavicon(__dirname + "/public/images/favicon.png"));


// Port
app.listen(4000)