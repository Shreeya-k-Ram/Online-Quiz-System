const express = require("express");
const router = express.Router();

const {
    getQuestions,
    createQuestion
} = require("../controllers/questionController");

router.get("/questions", getQuestions);

router.post("/questions", createQuestion);

module.exports = router;

const {
    getQuestions,
    createQuestion,
    updateQuestion,
    deleteQuestion
} = require("../controllers/questionController");

router.put("/questions/:id", updateQuestion);

router.delete("/questions/:id", deleteQuestion);