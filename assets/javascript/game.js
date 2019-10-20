$(document).ready(function () {
    // Selects a random number, which should be between 19 - 120
    var randomNum = Math.floor(Math.random() * 101 + 19)
    
    // shows this random number to HTML corresponding position.
    $("#randomNumber").text(randomNum);

    // Sets up random numbers for each crystal, which should be between 1 - 12
    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)

    // shows the number of wins
    var wins = 0;

    // shows the number of losses
    var losses = 0;

    // shows the number of userScore
    var userScore = 0;

    $("#winCounter").text(wins);
    $("#lossCounter").text(losses);
    $("#scoreCounter").text(userScore);


    //resets the game
    function reset() {
        randomNum = Math.floor(Math.random() * 101 + 19);
        
        $('#randomNumber').text(randomNum);

        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        userScore = 0;
        $("#scoreCounter").text(userScore);
    }
    
    //adds the wins to the userTotal
    function winCount() {
        wins++;
        $("#winCounter").text(wins);
        reset();
    }

    //addes the losses to the userTotal
    function lossCount() {
        losses++;
        $("#lossCounter").text(losses);
        reset()
    }


    //sets up click for crystals
    $("#btn1").on("click", function () {
        userScore += num1;
        
        $("#scoreCounter").text(userScore);
        //sets win/lose conditions
        if (userScore == randomNum) {
            winCount();
        }
        else if (userScore > randomNum) {
            lossCount();
        }
    })
    $("#btn2").on("click", function () {
        userScore += num2;
        
        $("#scoreCounter").text(userScore);
        if (userScore == randomNum) {
            winCount();
        }
        else if (userScore > randomNum) {
            lossCount();
        }
    })
    $("#btn3").on("click", function () {
        userScore += num3;
        
        $("#scoreCounter").text(userScore);
        //sets win/lose conditions
        if (userScore == randomNum) {
            winCount();
        }
        else if (userScore > randomNum) {
            lossCount();
        }
    })
    $("#btn4").on("click", function () {
        userScore += num4;
        
        $("#scoreCounter").text(userScore);

        if (userScore == randomNum) {
            winCount();
        }
        else if (userScore > randomNum) {
            lossCount();
        }
    });
});


