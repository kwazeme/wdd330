const question = "What is Superman's real name?"
const answer = prompt(question);
alert(`You answered ${answer}`);

// Add answer to HTML and replay link.
let html = document.querySelector(".answer");
html.innerHTML = `<center>You answered <b>${answer}</b>
<br /><a href="/wdd330/week2/quiz/index.html">Click to Play Again</a></center>`;
