const quizList = [];

class Question {
    constructor(text, choices, correctAnswer, reason) {
        this.text = text;
        this.choices = choices;
        this.correctAnswer = correctAnswer;
        this.reason = reason;
    }

    checkAnswer(userAnswer) {
        return userAnswer === this.correctAnswer;
    }

    toString() {
        return `${this.text} ${this.choices.join(", ")}`;
    }

    getReason() {
        return this.reason;
    }
}

function quizGame() {

}

function quizChoice(choice) {
    if (choice == 'Genre') {
        let lobby = document.getElementById("lobby");
        let genreScreen = document.getElementById("genreScreen");

        lobby.style.visibility = "hidden";
        genreScreen.style.visibility = "visible";
    }

    if (choice == 'BasketBall') {
        if (quizList.length == 0) {
            for(let e = 0; e = quizList.length; e++) {
                quizList.pop();
            }
        }
        else {
            quizList.push(
                new Question(
                    "Who is the first and only unanimous MVP?",
                    ["Shaquille O'Neal", "Lebron James", "Stephen Curry", "Michael Jordan"],
                    2,
                    "Stephen Curry is the first and only unanimous regular season MVP. Despite Michael Jordan and Lebron James being among the greatest players of all time, they never won the award unanimously. Shaquille O'Neal was one vote shy of winning it unanimously in 2000."
                )
            );
            quizList.push(
                new Question(
                    "Who has scored the most 50-point games after turning 30 years old?",
                    ["Lebron James", "Michael Jordan", "Kobe Bryant", "Stephen Curry"],
                    3,
                    "Despite Lebron holding the scoring record, he has only scored 50 points 4 times after turning 30. Michael Jordan had 6. Stephen Curry leads with more than both."
                )
            );
            quizList.push(
                new Question(
                    "Which NBA player has the most Olympic gold medals?",
                    ["Kevin Durant", "Lebron James", "Larry Bird", "Michael Jordan"],
                    0,
                    "Kevin Durant won his 4th Olympic gold medal at the 2024 Paris Olympics — more than any other NBA player."
                )
            );
            quizGame();
        }

    }

    else if (choice == 'OSU') {
        if (quizList.length == 0){
            for(let e = 0; e = quizList.length; e++) {
                quizList.pop();
            }
        }
        else {
            quizList.push(
                new Question(
                    "Who is the current #1 player on the global leaderboards OSU! as of 4/26/2025?",
                    ["Mrekk", "Xootynator", "BTMC", "Cloutiful"],
                    1,
                    "Mrekk is the current number 1 osu player with a gap of 3,500 performance points aka pp."
                )
            );
            quizGame();
        }
    }

}

function checkAllAnswers() {
    let score = 0;
    let total = 0;
    for (let i = 0; i <= quizChoice.length; i++) {
        total += 1;
        quizList[i].checkAnswer()
    }
    let 
    return ;
}
