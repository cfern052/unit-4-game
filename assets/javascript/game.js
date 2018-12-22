$(document).ready(function () {
    $("#wins").text("Wins: ");
    $("#losses").text("Losses: ");
    var wins = 0;
    var losses = 0;
    var randomNum = "";
    var previous = 0;
   
   
//  var start = function () {
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
    //}

// Start();

// var reset= function(){
    $(".crystal").on("click", function () {

        var num = parseInt($(this).attr('data-random'));

        previous += num;

        if (previous > randomNum) {
            alert("You have lost. Try again!")
            losses + 1;
            $("#losses").html("losses: " + losses);
                
        
            
            // $(".random").html(randomNum);

        }
        else if (previous === randomNum) {
            alert("You have won!");
            wins + 1;
            $("#win").html("Wins: " + wins);
            // $(".random").html(randomNum);
        };
    
    });
})

    // var crystalValues=[];    
    // var randNum = $("<randNum>");

    // for (var i = 0; i==rand; i++) {
    // var rand=Math.floor(Math.random()*121)+19;
    // randNum=rand;

    // console.log(randNum)


// })
