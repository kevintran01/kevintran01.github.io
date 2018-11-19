$(document).ready(function () {
    $("#go").click(function () {
        let carWidth = $('#horse1').width();
        let raceTrackWidth = $(window).width() - carWidth;

        let raceTime1 = Math.floor((Math.random() * 5000) + 1);
        let raceTime2 = Math.floor((Math.random() * 5000) + 1);

        let isComplete = false;

        let place = "First!";

        $('#test').animate({

            left: raceTrackWidth

        }, raceTime1, function () {

        })
    });
});
