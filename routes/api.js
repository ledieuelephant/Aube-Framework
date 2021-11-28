var express = require("express")
var router = express.Router();
var Controllers = require("../app/controllers")

router.get("/", function(req,res){
    res.send("coucou")
})

module.exports = router;