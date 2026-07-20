const express = require("express");
const app = express();
const quizRoutes = require("./routes/quizRoutes");
const PORT = 3000;

app.use(express.json());
app.use("/api", quizRoutes);

app.get("/", (req, res) => {
    res.send("Online Quiz System API Running");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
