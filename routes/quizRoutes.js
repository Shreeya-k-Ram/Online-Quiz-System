const express = require("express");
const router = express.Router();

const {
    getQuestions,
    createQuestion
} = require("../controllers/questionController");

router.get("/questions", getQuestions);

router.post("/questions", createQuestion);

module.exports = router;
