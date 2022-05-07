const quiz = [
  { name: "Superman",realName: "Clark Kent" },
  { name: "Wonder Woman",realName: "Diana Prince" },
  { name: "Batman",realName: "Druce Wayne" },
];

const game = {
  start(quiz){
      this.questions = [...quiz];
      this.score = 0;
      // main game loop
      for(const question of this.questions){
      this.question = question;
      this.ask();
      }
      // end of main game loop
      this.gameOver();
  },
  ask(){
      const question = `What is ${this.question.name}'s real name?`;
      const response =  prompt(question);
      this.check(response);
  },
  check(response){
      const answer = this.question.realName;
       response
      if(response.toLowerCase() === answer.toLowerCase()){
      alert('Correct!');
      this.score++;
      } else {
      alert(`Wrong! The correct answer was ${answer}`);
      }
  },
  gameOver(){
      alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
      // Add answer to HTML and replay link.
      let html = document.querySelector(".answer");
      html.innerHTML = `<center>You scored <b>${this.score} point${this.score > 1 ? "s":" "}</b>
      <br /><a href="/wdd330/week3/quiz3/index.html">Click to Play Again</a></center>`;
  }
}

game.start(quiz);




