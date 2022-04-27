// Add more questions by adding an array
const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batmam's real name?", "Bruce Wayne"]
];
// create and initialse a score
let score = 0;
// Create the for-of loop to ask and evaluate the answer.
for (const [question,answer] of quiz) {
    const response = prompt(question);

    if (response === answer) {
        alert("Correct!");
        score++  
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
        
    }
    
}
// const question = "What is Superman's real name?"
// const answer = prompt(question);
// alert(`You answered ${answer}`);

// Add answer to HTML and replay link.
let html = document.querySelector(".answer");
html.innerHTML = `<center>You scored <b>${score} point${score > 1 ? "s":" "}</b>
<br /><a href="/wdd330/week2/quiz2/index.html">Click to Play Again</a></center>`;
