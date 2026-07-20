const express = require("express");
const router = express.Router();

router.get("/questions", (req, res) => {
    res.json({
        message: "Questions API is working"
    });
});

module.exports = router;
