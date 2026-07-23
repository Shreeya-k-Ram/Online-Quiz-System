const db = require("../config/db");

// Get all questions
const getAllQuestions = (callback) => {
    const sql = "SELECT * FROM questions";
    db.query(sql, callback);
};

// Add a new question
const addQuestion = (question, callback) => {
    const sql = `
        INSERT INTO questions
        (question, option1, option2, option3, option4, correct_answer)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            question.question,
            question.option1,
            question.option2,
            question.option3,
            question.option4,
            question.correct_answer
        ],
        callback
    );
};

module.exports = {
    getAllQuestions,
    addQuestion
};