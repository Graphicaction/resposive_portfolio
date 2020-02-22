var projectsBlock = document.getElementById("projects");
var contentsBlock = document.getElementById("contents");
function codeQuiz() {
    projectsBlock.style.display = "none";
    contentsBlock.style.display = "block";
    $(".screen").attr("src", "assets/images/codeQuizScreen.png");
   // setting body text of card like title and links 
    $(".title").text("Coding Quiz");
    $(".text1").attr("href","https://github.com/Graphicaction/codeQuiz");
    $(".text2").attr("href","https://graphicaction.github.io/codeQuiz/");

}

function weatherApi() {
    projectsBlock.style.display = "none";
    contentsBlock.style.display = "block";
    $(".screen").attr("src", "assets/images/weatherScreen.png");
   // setting body text of card like title and links 
    $(".title").text("Weather App");
    $(".text1").attr("href","https://github.com/Graphicaction/weatherApi");
    $(".text2").attr("href","https://graphicaction.github.io/weatherApi/");

}

function project1() {
    projectsBlock.style.display = "none";
    contentsBlock.style.display = "block";
    $(".screen").attr("src", "assets/images/docDietScreen.png");
   // setting body text of card like title and links 
    $(".title").text("My Doctor and Diet");
    $(".text1").attr("href","https://github.com/Finch23/Project1");
    $(".text2").attr("href","https://finch23.github.io/Project1/");
}


   