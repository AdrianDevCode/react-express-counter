let express = require("express");
let router = express.Router();

let counter = 0;

router.get("/", (req, res, next)=>{
    res.json({counter:counter});
});

router.post("/add", (req, res, next) => {
    counter += 1;
    res.json({counter:counter});
});

router.post("/subtract", (req, res, next) => {
    counter -= 1;
    res.json({counter:counter});
});


module.exports = router;

