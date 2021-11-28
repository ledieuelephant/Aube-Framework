// Import files and modules
var express = require("express");
var router = express.Router();
var Controllers = require("../app/controllers")

// Routes
router.get("/", function(req,res){
    res.render("todos", {name : "Aube"})
})

module.exports = router;