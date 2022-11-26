class Settings {
  constructor() {
    this.settingDom = document.querySelector(".setting");
    this.quizDom = document.querySelector(".quiz");
    this.categoryDom = document.querySelector("#category");
    this.nQuestionDom = document.querySelector("#nQuestions");
    this.startBtn = document.querySelector("#startBtn");
    this.difficulty = [
      document.querySelector("#easy"),
      document.querySelector("#medium"),
      document.querySelector("#hard"),
    ];

    this.startBtn.addEventListener("click", this.startQuizApp);
  }
  startQuizApp = async () => {
    try {
      const amount = this.getAmount();
      const categoryId = this.categoryDom.value;
      const difficulty = this.getDifficulty();

      const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}`;
      let result = await this.fetchData(url);
      console.log(result);
      this.toggleElement();
    } catch (err) {
      console.log(err);
    }
  };

  toggleElement = () => {
    this.quizDom.style.display = "block";
    this.settingDom.style.display = "none";
  };

  getAmount = () => {
    const amount = this.nQuestionDom.value;

    amount > 0 && amount < 20 ? amount : alert("please enter questions");
  };

  fetchData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return data.result;
      });
  };

  getDifficulty = () => {
    const difficulty = this.difficulty.filter((el) => el.checked);
    if (difficulty.length === 1) {
      return difficulty[0].id;
    } else {
      alert("please select difficult");
    }
  };
}

export default Settings;
