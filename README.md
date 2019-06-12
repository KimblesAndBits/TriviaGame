# TriviaGame
A trivia game with questions about NBC's The Office

# Problem:
Create a trivia game that shows only one question until the player answers it or their time runs out.
If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

The scenario is similar for wrong answers and time-outs.


If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.


On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game.

# Solution:
I ask if they want to play then update the page accordingly. I use an array of object that each hold a question, the answer, three wrong answers and whether or not the question has been used. I then randomly pick a number and check if the question at that index was used. If it has been used a new random number is chosen. If not I display the question and the answers are randomly placed by one of the four checkboxes. The timer then starts. If the timer runs out they get a question wrong. Whether they guess right or wrong their score is updated accordingly. In every case the timer stops, the right answer is displayed and a new question is randomly chosen and the timer is reset and restarted. Once all the questions have been asked and answered it displays the score and can be reset.


