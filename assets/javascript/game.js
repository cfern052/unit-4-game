$(document).ready(function () {
    $("#wins").text("Wins: ");
    $("#losses").text("Losses: ");
     var wins = "Wins: " + wins;
     var losses = "losses: " + losses;
    var randomNum = "";
    var total = 0;


      var startReset = function () {
    $(".total").empty();
    $(".crystals").empty();
    
    randomNum = Math.floor(Math.random() * 102) + 19;
    $(".random").html(randomNum);

    for (i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 12);
        console.log(random);

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        
        $(".crystals").append(crystal);
    }
     }

      startReset();


        $(document).on("click", ".crystal", function () {

            var num = parseInt($(this).attr('data-random'));
    $(".total").html(total + num);
            total += num;

            if (total > randomNum) {
                alert("You have lost. Try again!")
                losses + 1;
                $("#losses").html("losses: " + losses);
               total=0; 
                
                 startReset();

                

            }
            else if (total === randomNum) {
                alert("You have won!");
                wins + 1;
                $("#win").html("Wins: " + wins);
                 total=0;  
                 startReset();
            };

        });
    })


    // var crystalValues=[];    
    // var randNum = $("<randNum>");

    // for (var i = 0; i==rand; i++) {
    // var rand=Math.floor(Math.random()*121)+19;
    // randNum=rand;

    // console.log(randNum)


// }
