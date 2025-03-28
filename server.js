const express = require("express");
const app = express();
const PORT = 3000;

// Sample anime quiz questions
const quizData = {
  response_code: 0,
  results: [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Anime",
      question: "What is Naruto's signature move?",
      correct_answer: "Rasengan",
      incorrect_answers: ["Chidori", "Fireball Jutsu", "Shadow Clone Jutsu"]
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Anime",
      question: "Who is the main protagonist of Solo Leveling?",
      correct_answer: "Sung Jin-Woo",
      incorrect_answers: ["Go Gun-Hee", "Cha Hae-In", "Baek Yoonho"]
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Anime",
      question: "Who is the creator of the Dragon Balls?",
      correct_answer: "Kami",
      incorrect_answers: ["King Kai", "Piccolo", "Shenron"]
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Anime",
      question: "What is the real name of 'Fullmetal Alchemist'?",
      correct_answer: "Edward Elric",
      incorrect_answers: ["Alphonse Elric", "Roy Mustang", "Scar"]
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Anime",
      question: "Who is known as the 'Colossal Titan' in Attack on Titan?",
      correct_answer: "Bertholdt Hoover",
      incorrect_answers: ["Reiner Braun", "Eren Yeager", "Annie Leonhart"]
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Anime",
      question: "What is the name of the detective in Monster?",
      correct_answer: "Heinrich Lunge",
      incorrect_answers: ["Kenzo Tenma", "Johan Liebert", "Eva Heinemann"]
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Anime",
      question: "What is Light Yagami's alias in Death Note?",
      correct_answer: "Kira",
      incorrect_answers: ["L", "Ryuk", "Misa"]
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Anime",
      question: "What is the name of the elite school in Classroom of the Elite?",
      correct_answer: "Advanced Nurturing High School",
      incorrect_answers: ["Hope's Peak Academy", "U.A. High School", "Honnouji Academy"]
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Anime",
      question: "Who is Anya's adoptive father in Spy x Family?",
      correct_answer: "Loid Forger",
      incorrect_answers: ["Yor Forger", "Damian Desmond", "Franky Franklin"]
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Anime",
      question: "Who is the strongest sorcerer in Jujutsu Kaisen?",
      correct_answer: "Gojo Satoru",
      incorrect_answers: ["Itadori Yuji", "Sukuna", "Megumi Fushiguro"]
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Entertainment: Anime",
      question: "What is the name of Gon Freecss' best friend in Hunter x Hunter?",
      correct_answer: "Killua Zoldyck",
      incorrect_answers: ["Leorio", "Kurapika", "Hisoka"]
    }
  ]
};

// API route
app.get("/api/questions", (req, res) => {
  res.json(quizData);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
