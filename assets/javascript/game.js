$(document).ready(function() {
var win = 0
var loss = 0
var randomNumber 
var score = 0
var bGem = 0
var yGem = 0
var gGem = 0
var rGem = 0


$("#start").on("click", function() {
    $("#start").remove();
    start()
});


function restart() {
    score = 0;
    $("#playerNumber").html(score);
    start()
};

function start() {
    

        var minNumber = 19; 
        randomNumber = Math.floor(Math.random() * (121) + minNumber); 
        $('#mainNumber').html(randomNumber);
        console.log(randomNumber);

        rGem = Math.floor(Math.random() * (20) + 1); 
        gGem = Math.floor(Math.random() * (20) + 1);
        yGem = Math.floor(Math.random() * (20) + 1);
        if (rGem == 1 || gGem == 1 || yGem == 1) {
            bGem = Math.floor(Math.random() * (20) + 1);
        } else {
            bGem = 1;
        };
};

        $("#greenGem").on("click", function() {
            score = score + gGem;
            console.log(score);
            $("#playerNumber").html(score);
            check();

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
    else if (score > randomNumber) {
        loss++;
        $("#losses").html(loss);
        restart()   
    } 
};

});