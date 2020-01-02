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
    $("#start").remove();
    start()
});


function restart() {
    score = 0;
    start()
    $("#playerNumber").html(score)

}

function start() {

        var minNumber = 19; 
        var randomNumber = Math.floor(Math.random() * (121) + minNumber); 
        $('#mainNumber').html(randomNumber);
        console.log(randomNumber);

        var rGem = Math.floor(Math.random() * (20) + 1); 
        var gGem = Math.floor(Math.random() * (20) + 1);
        var yGem = Math.floor(Math.random() * (20) + 1);
        if (rGem == 1 || gGem == 1 || yGem == 1) {
            var bGem = Math.floor(Math.random() * (20) + 1);
        } else {
            var bGem =1;
        };


        $("#greenGem").on("click", function() {
            score = score + gGem;
            console.log(score);
            $("#playerNumber").html(score)
            check()

        });

        $("#redGem").on("click", function() {
            score = score + rGem;
            console.log(score);
            $("#playerNumber").html(score)
            check()

        });
        $("#blueGem").on("click", function() {
            score = score + bGem;
            console.log(score);
            $("#playerNumber").html(score)
            check()

        });
        $("#yellowGem").on("click", function() {
            score = score + yGem;
            console.log(score);
            $("#playerNumber").html(score)
            check()

        });
function check (){
    if (randomNumber == score) {
        win++;
        $("#wins").html(win);
        restart()
        
    }
    else if (randomNumber < score) {
        loss++;
        $("#losses").html(loss);
        restart()
        
    }
};
};
})