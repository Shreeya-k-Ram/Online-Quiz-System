const express = require("express");
const router = express.Router();

const {
    submitQuiz
} = require("../controllers/resultController");

router.post("/submit", submitQuiz);

module.exports = router;