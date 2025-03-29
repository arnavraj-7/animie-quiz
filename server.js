const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Anime Quiz Questions API
const questions = {
  response_code: 0,
  results: [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Japanese Anime & Manga",
      question: "Who is the creator of Naruto?",
      correct_answer: "Masashi Kishimoto",
      incorrect_answers: ["Eiichiro Oda", "Tite Kubo", "Akira Toriyama"]
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Japanese Anime & Manga",
      question: "What is the name of the protagonist in Solo Leveling?",
      correct_answer: "Sung Jin-Woo",
      incorrect_answers: ["Go Gun-Hee", "Baek Yoon-Ho", "Hwang Dong-Su"]
    }
  ]
};

// Define the root route
app.get("/", (req, res) => {
  res.send("Welcome to the Anime Quiz API! Visit /api/questions for quiz data.");
});

// Define the API route
app.get("/api/questions", (req, res) => {
  res.json(questions);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
