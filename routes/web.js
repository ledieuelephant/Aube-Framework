// Import files and modules
var express = require("express");
var router = express.Router();

// Routes
router.get("/", function(req,res){
    res.render("documentation")
})

module.exports = router;