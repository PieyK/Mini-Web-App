var prompts = [
    "Wie heißen Sie?",
    "Wann sind Sie geboren?",
    "Woher kommen Sie?",
    "Wo wohnen Sie?",
    "Lieblingsfilm",
    "Chai oder Mocha?"
];

var answers = [];
var currentPrompt = 0;

var nextPrompt = function () {
    if (currentPrompt != 0) {
        answers.push($("input").val());
    }
    if (currentPrompt < prompts.length) {
        $(".prompt").html(prompts[currentPrompt] + "<br>" + '<input type="text">');
        currentPrompt = currentPrompt + 1;
    } else {
        //$(".prompt").html("Alle geantwortet!");
        showFinal();
    }
};

var showFinal = function () {
    for (var i = 0; i < answers.length; i++) {
        $(".prompt").html("Hier ist  <span class='fill'>" + answers[0] + "</span>" + " geboren in <span class='fill'>" + answers[1] + "</span>" + "," + " kommt aus <span class='fill'>" +
            answers[2] + "</span>" + "," + " wohnt in <span class='fill'>" + answers[3] + "</span>" + "." + " Lieblingsfilm ist <span class='fill'>" + answers[4] + "</span>" +
            " und mag <span class='fill'>" + answers[5] + "</span>" + "gern" + ".");
        $("button").hide();
    }
};

$("button").click(function () {
    nextPrompt();
});

nextPrompt();
