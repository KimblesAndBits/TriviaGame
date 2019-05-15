$(document).ready(function () {
    const questionList = [
        {
            question: "What race was on Stanley's card during diversity day?",
            answer: "Black",
            wrongAnswers: ["Asian", "Woman", "Jewish"],
            used: false
        },
        {
            question: "What is the name of the individual responsible for diversity day training?",
            answer: "Mr. Brown",
            wrongAnswers: ["Mr. Pink", "Mrs. Beesley", "Cpt. Crunch"],
            used: false
        },
        {
            question: "What is Erin's first name?",
            answer: "Kelly",
            wrongAnswers: ["Erin", "Joyce", "Pand"],
            used: false
        },
        {
            question: "Which of Dunder-Mifflin's founders committed suicide?",
            answer: "Robert Dunder",
            wrongAnswers: ["Robert Mifflin", "Robert Downey Jr.", "Robert California"],
            used: false
        },
        {
            question: "What restaurant was Pam banned from?",
            answer: "Chili's",
            wrongAnswers: ["Applebee's", "McDonald's", "Arby's"],
            used: false
        },
        {
            question: "Who is Michael's favorite actress?",
            answer: "Meryl Streep",
            wrongAnswers: ["Jenna Fischer", "Laura Dern", "Betty White"],
            used: false
        },
        {
            question: "What is the name of the book that Michael Scott plans to write?",
            answer: "Somehow I Manage",
            wrongAnswers: ["Brain Manage", "Splash Manage", "Manage Control"],
            used: false
        },
        {
            question: "What is printed on Michael's coffee mug??",
            answer: "World's Best Boss",
            wrongAnswers: ["World's Best Dad", "World's Worst Rug", "World's Coffee Mug"],
            used: false
        },
        {
            question: "What is the name of the security guard?",
            answer: "Hank",
            wrongAnswers: ["Robert", "James", "Hunk"],
            used: false
        },
        {
            question: "What is the name of the company owned by Bob Vance?",
            answer: "Vance Refrigeration",
            wrongAnswers: ["Vance HVAC", "Vance Family Paper", "Bob's Cereal Shack"],
            used: false
        }
    ];

    var rightAnswer = "";

    var correctGuesses = 0, missedGuesses = 0, timeLeft = 10, usedQuestions = 0, currentQuestion = 0;

    var gameState = confirm("Would you like to play Kevin's Famous Trivia: Some Webpages Still Know How The Offie Trivia is Done?");

    function timer() {
        timeLeft--;
        $(".timer h5").text(timeLeft);
        if (timeLeft === 0) {
            missedGuesses++;
            alert("You ran out of time!");
            renderQuestion();
            timeLeft = 10;
        };
    };

    function renderQuestion() {
        if (usedQuestions < questionList.length) {
            do {
                var questionListIdx = currentQuestion = Math.floor(Math.random() * questionList.length);
            } while (questionList[questionListIdx].used)
            $(".timer h5").text(10);
            rightAnswer = questionList[questionListIdx].answer;
            usedQuestions++;
            var radioButtonIdx = Math.floor((Math.random() * 4) + 1);
            questionList[questionListIdx].used = true;
            $(".question-row h4").text(questionList[questionListIdx].question);
            $(`#answer-${radioButtonIdx}`).text(questionList[questionListIdx].answer);
            $(`#answer-${radioButtonIdx}-button`).attr("value", questionList[questionListIdx].answer);
            $(`#answer-${radioButtonIdx}-button`).prop("checked", false);
            for (var i = 0; i <= 2; i++) {
                radioButtonIdx++;
                if (radioButtonIdx === 5) {
                    radioButtonIdx = 1;
                }
                $(`#answer-${radioButtonIdx}`).text(questionList[questionListIdx].wrongAnswers[i]);
                $(`#answer-${radioButtonIdx}-button`).attr("value", questionList[questionListIdx].wrongAnswers[i]);
                $(`#answer-${radioButtonIdx}-button`).prop("checked", false);
            }
        } else {
            $(".content-wrapper").html("<h1>");
            $(".content-wrapper h1").text(`You got ${correctGuesses} right! You missed ${missedGuesses}.`);
            $(".content-wrapper").append("<button id='reset'>RESET");
        }
    };

    if (gameState) {
        renderQuestion();
        var questionTimer = setInterval(timer, 1000);
        $("input:radio").click(function () {
            var choice = $("input[name='answer']:checked").val();
            if (choice === questionList[currentQuestion].answer) {
                clearInterval(questionTimer);
                timeLeft = 10;
                alert("You got it right!");
                correctGuesses++;
                renderQuestion();
                if (usedQuestions < questionList.length) {
                    questionTimer = setInterval(timer, 1000);
                };
            } else {
                clearInterval(questionTimer);
                timeLeft = 10;
                alert(`Actually the answer is "${rightAnswer}."`);
                missedGuesses++;
                renderQuestion();
                if (usedQuestions < questionList.length) {
                    questionTimer = setInterval(timer, 1000);
                };
            }
        });

    } else {
        $(".content-wrapper").html("<h1>");
        $(".content-wrapper h1").text("Toby, you are the silent killer. Go back to the annex.");
        $(".content-wrapper").append("<button id='reset'>RESET");
    };

    $(document.body).on("click", "#reset", function () {
        location.reload();
    });
});