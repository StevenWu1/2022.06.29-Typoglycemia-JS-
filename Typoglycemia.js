////////////////////////////////////////////////////////////
// Survey state

let inProgress = true;
let currentQuestionIndex = 0;
let currentQuestionDisplayed = false;
let printPastTime = 0;

////////////////////////////////////////////////////////////
// Top-level initialization code

document.getElementById("submitAnswer").addEventListener("click", submitAnswer);

////////////////////////////////////////////////////////////
// Event handlers

function drawCanvas() {
  changeTypo2();
  contained = document.getElementById("container");
  changeAnswerChoice();
  page = contained.children[0];
  header = contained.children[1];
  question = contained.children[2];
  actualQuestion = contained.children[3];
  page.textContent = "Page " + (currentQuestionIndex + 1) + " / 10";
  header.textContent = tasks[currentQuestionIndex].typoSentence;
  question.textContent = "Question " + (currentQuestionIndex + 1);
  actualQuestion.textContent = tasks[currentQuestionIndex].question;
}

function changeAnswerChoice() {
  answerValueYes = document.getElementById("yes");
  questionChoiceYes = contained.children[5];
  answerValueYes.value = tasks[currentQuestionIndex].answers[0];
  questionChoiceYes.textContent = tasks[currentQuestionIndex].answers[0];

  answerValueNo = document.getElementById("no");
  questionChoiceNo = contained.children[8];
  answerValueNo.value = tasks[currentQuestionIndex].answers[1];
  questionChoiceNo.textContent = tasks[currentQuestionIndex].answers[1];
}

let beginTimer = Date.now();
let timer = [beginTimer];
let time = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let pastTime = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function submitAnswer() {
  if (printPastTime < 1) {
    returnTime();
    console.log("Last Test Results: ", pastTime);
    printPastTime++;
  }
  if (inProgress) {
    const radioOptions = document.getElementsByName("radioOption");
    let answer;
    for (const radioOption of radioOptions) {
      if (radioOption.checked) {
        answer = radioOption.value;
      }
    }
    console.log(`Answer selected: ${answer}`);
    taskAnswer =
      tasks[currentQuestionIndex].answers[
        tasks[currentQuestionIndex].correctAnswer
      ];
    if (answer === taskAnswer) {
      currentQuestionIndex = currentQuestionIndex + 1;
      currentTime = Date.now();
      timer.push(currentTime);
      time[currentQuestionIndex - 1] =
        (timer[currentQuestionIndex] - timer[currentQuestionIndex - 1]) / 1000;
    }
    drawCanvas();
    if (currentQuestionIndex + 1 === tasks.length) {
      inputDatabase();
      console.log(time);
      inProgress = false;
    }
  }
}

function inputDatabase() {
  localStorage.setItem("Time1", time[0]);
  localStorage.setItem("Time2", time[1]);
  localStorage.setItem("Time3", time[2]);
  localStorage.setItem("Time4", time[3]);
  localStorage.setItem("Time5", time[4]);
  localStorage.setItem("Time6", time[5]);
  localStorage.setItem("Time7", time[6]);
  localStorage.setItem("Time8", time[7]);
  localStorage.setItem("Time9", time[8]);
  localStorage.setItem("Time10", time[9]);
}

function returnTime() {
  // time1 = localStorage.getItem("Time1");
  // time2 = localStorage.getItem("Time2");
  // time3 = localStorage.getItem("Time3");
  // time4 = localStorage.getItem("Time4");
  // time5 = localStorage.getItem("Time5");
  // time6 = localStorage.getItem("Time6");
  // time7 = localStorage.getItem("Time7");
  // time8 = localStorage.getItem("Time8");
  // time9 = localStorage.getItem("Time9");
  // time10 = localStorage.getItem("Time10");
  pastTime[0] = localStorage.getItem("Time1");
  pastTime[1] = localStorage.getItem("Time2");
  pastTime[2] = localStorage.getItem("Time3");
  pastTime[3] = localStorage.getItem("Time4");
  pastTime[4] = localStorage.getItem("Time5");
  pastTime[5] = localStorage.getItem("Time6");
  pastTime[6] = localStorage.getItem("Time7");
  pastTime[7] = localStorage.getItem("Time8");
  pastTime[8] = localStorage.getItem("Time9");
  pastTime[9] = localStorage.getItem("Time10");
}
