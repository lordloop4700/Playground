const { FinduserId } = require("./viewfinddb")
const express = require('express')
const router = express.Router()

router

.get("/index", function(req, res){
    res.render("index.ejs", { test: "fucking js" });
})

module.exports = router;