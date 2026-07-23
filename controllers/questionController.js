const questionModel = require("../models/questionModel");

// Get all questions
const getQuestions = (req, res) => {
    questionModel.getAllQuestions((err, results) => {
        if (err) {
            return res.status(500).json({ message: "Database Error" });
        }

        res.status(200).json(results);
    });
};

// Add question
const createQuestion = (req, res) => {
    questionModel.addQuestion(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Failed to add question" });
        }

        res.status(201).json({
            message: "Question added successfully"
        });
    });
};

// Update Question
const updateQuestion = (req, res) => {
    const id = req.params.id;

    questionModel.updateQuestion(id, req.body, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Failed to update question"
            });
        }

        res.json({
            message: "Question updated successfully"
        });
    });
};

// Delete Question
const deleteQuestion = (req, res) => {
    const id = req.params.id;

    questionModel.deleteQuestion(id, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Failed to delete question"
            });
        }

        res.json({
            message: "Question deleted successfully"
        });
    });
};

module.exports = {
    getQuestions,
    createQuestion,
    updateQuestion,
    deleteQuestion
};