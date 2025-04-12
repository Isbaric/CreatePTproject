public class question {
    String text;
    String[] choices;
    int correctAnswer;

    public Question(String text, String[] choices, int correctAnswer)
    {
        this.text = text;
        this.choices = choices;
        this.correctAnswer = correctAnswer;
    }

    public boolean checkAnswer(int userAnswer) {
        
    }
}