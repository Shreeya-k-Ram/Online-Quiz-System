const db = require("../config/db");
const submitQuiz = (req, res) => {

    const { answers } = req.body;
    let score = 0;

    db.query("SELECT * FROM questions", (err, questions) => {
        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        questions.forEach((question) => {
            if (
                answers[question.id] === question.correct_answer
            ) {
                score++;
            }

        });

        res.json({
            totalQuestions: questions.length,
            score: score
        });

    });

};

module.exports = {
    submitQuiz
};