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
    
    getQuestion() {
        return this.text;
    }
    /*
    toString() {
        return `${this.text} ${this.choices.join(", ")}`;
    }
    */
    getReason() {
        return this.reason;
    }
}

function main() {

}

function quizGame(list) {
    let quizList = list;
    let question = document.getElementById("question");

    question.innerHTML = quizList[0].toString;


// this goes at or near the end to calculate the answers you got, right/total; ex) 14/16
    let answerTotal = checkAllAnswers(list);
}

function quizChoice(choice) {
    let quizList = [];

    if (choice == 'Genre') {
        let lobby = document.getElementById("lobby");
        let genreScreen = document.getElementById("genreScreen");

        lobby.style.visibility = "hidden";
        genreScreen.style.visibility = "visible";
    }

    if (choice == 'BasketBall') {
        fillQuestions(choice);
        
        let genreScreen = document.getElementById("genreScreen");
        let gameScreen = document.getElementById("quizGame");
        genreScreen.style.visibility = "hidden";
        gameScreen.style.visibility = "visible";

        quizGame(quizList);

    }

    else if (choice == 'osu!') {
        if (quizList.length == 0){
            for(let e = 0; e = quizList.length; e++) {
                quizList.pop();
            }
        }
        quizList.push(
            new Question(
                "Who is the current #1 player on the global leaderboards OSU! as of 4/26/2025?",
                ["Mrekk", "Xootynator", "BTMC", "Cloutiful"],
                1,
                "Mrekk is the current number 1 osu player with a gap of 3,500 performance points aka pp."
            )
        );
        let genreScreen = document.getElementById("genreScreen");
        let quizGame = document.getElementById("quizGame");
        genreScreen.style.visibility = "hidden";
        quizGame.style.visibility = "visible";

        quizGame(quizList);
    }

}

function fillQuestions(choice) {
    let list = [];
    if (choice == 'basketball') {
        list.push(
            new Question(
                "Who is the first and only unanimous MVP?",
                ["Shaquille O'Neal", "Lebron James", "Stephen Curry", "Michael Jordan"],
                2,
                "Stephen Curry is the first and only unanimous regular season MVP. Despite Michael Jordan and Lebron James being among the greatest players of all time, they never won the award unanimously. Shaquille O'Neal was one vote shy of winning it unanimously in 2000."
            )
        );
        list.push(
            new Question(
                "Who has scored the most 50-point games after turning 30 years old?",
                ["Lebron James", "Michael Jordan", "Kobe Bryant", "Stephen Curry"],
                3,
                "Despite Lebron holding the scoring record, he has only scored 50 points 4 times after turning 30. Michael Jordan had 6. Stephen Curry leads with more than both."
            )
        );
        list.push(
            new Question(
                "Which NBA player has the most Olympic gold medals?",
                ["Kevin Durant", "Lebron James", "Larry Bird", "Michael Jordan"],
                0,
                "Kevin Durant won his 4th Olympic gold medal at the 2024 Paris Olympics — more than any other NBA player."
            )
        );
    }

    return ;
} 

function checkAllAnswers(list) {
    let list = this.list;
    let score = 0;
    let questionNum = 0;
    for (let i = 0; i >= quizChoice.length; i++) {
        questionNum += 1;
        if (list[i].checkAnswer()) {
            score += 1;
        }
    }
    let total = score + "/" + questionNum;
    return total;
}
