$(document).ready(function() {
var win = 0
var loss = 0
var randomNumber 
var score = 0
var bGem 
var yGem
var gGem
var rGem

$("#start").on("click", function() {
    $("#start").addClass("hide");
    $("#restart").addClass("hide");
    start()
});
$("#restart").on("click", function() {
    $("#restart").addClass("hide");
    $("#statusImage").attr("src", "assets/images/bluegem.png");
    start()
});

function restart() {
    $(".letter").addClass("disappear");
    $("#restart").removeClass("hide");
    $("#letter-display").addClass("hide");

}

function start() {

        var minNumber = 19; 
        var randomNumber = Math.floor(Math.random() * (121) + minNumber); 
        $('#mainNumber').html(randomNumber);
        console.log(randomNumber);

        var rGem = Math.floor(Math.random() * (20) + 1); 
        var gGem = Math.floor(Math.random() * (20) + 1);
        var yGem = Math.floor(Math.random() * (20) + 1);
        var bGem = Math.floor(Math.random() * (20) + 1);


        $("#greenGem").on("click", function() {
            score = score + gGem;
            console.log(score);
            $("#playerNumber").html(score)

        });

        $("#redGem").on("click", function() {
            score = score + rGem;
            console.log(score);
            $("#playerNumber").html(score)

        });
        $("#blueGem").on("click", function() {
            score = score + bGem;
            console.log(score);
            $("#playerNumber").html(score)

        });
        $("#yellowGem").on("click", function() {
            score = score + yGem;
            console.log(score);
            $("#playerNumber").html(score)

        });
}
})