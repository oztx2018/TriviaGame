var panel = $("#quiz");

var questions = [{
  question: "Inside which HTML element do we put the JavaScript?",
  answers: ["javascript", "js", "script", "scripting",],
  correctAnswer: "script"
}, {
  question: "Where is the correct place to insert a JavaScript? ",
  answers: ["Both the head section and the body section are correct", "The body section", "The head section",],
  correctAnswer: "Both the head section and the body section are correct"
}, {
  question: "An external JavaScript must contain the script tag",
  answers: ["True", "False",],
  correctAnswer: "False"
}, {
  question: "How do you write a conditional statement for executing some statements only if \"i\" is equal to 5?",
  answers: ["if i==5 then", "if (i==5)", "if i=5 then", "if i=5",],
  correctAnswer: "if (i==5)"
}, {
  question: "How do you write a conditional statement for executing some statements only if \"i\" is NOT equal to 5?",
  answers: ["if (i != 5)", "if =! 5 then", "if (i <> 5)", "if <>5"],
  correctAnswer: "if (i != 5)"
}, {
  question: "How can you add a comment in a JavaScript?",
  answers: ["//This is a comment", " 'This is a comment", "<!--This is a comment-->", "#This is a comment",],
  correctAnswer: "//This is a comment"
}, {
  question: "What is the correct JavaScript syntax to insert a comment that has more than one line?",
  answers: ["/*This comment has more than one line*/", "//This comment has more than one line//", " ##This comment has##more than one line",],
  correctAnswer: "/*This comment has more than one line*/"
}, ];

var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#main").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#main h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};


$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
