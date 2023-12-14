const router = require("express").Router()


// routes will bw here....
router.get("/", (req, res) => {
    res.send("Welcome to the Todo App!")
});


module.exports = router