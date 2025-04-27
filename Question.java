public class question {
    String text;
    String[] choices;
    int correctAnswer;
    String reason;

    public Question(String text, String[] choices, int correctAnswer, String reason)
    {
        this.text = text;
        this.choices = choices;
        this.correctAnswer = correctAnswer;
        // I added this so if the answer is wrong the user can get an explanation on why its wrong. or it can just say it anyway.
        this.reason = reason;
    }

    public boolean checkAnswer(int userAnswer) {
        return userAnwer == correctAnwer;
    }

    public String() {
        return text + " " + choices;
    }

    public reasonString() {
        return reason;
    }

}