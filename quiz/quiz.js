class Quiz {
  constructor(quizElement, amount, question) {
    this.quizElement = quizElement;
    this.currentElement = document.querySelector(".current");
    this.totalElement = document.querySelector(".total");
    this.finalElement = document.querySelector(".final");
    this.nextBtn = document.querySelector("#next");
    this.totalAmount = amount;
    this.answeredAmount = 0;
  }
}

export default Quiz;
