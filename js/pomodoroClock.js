$(document).ready(function () {
    var buzzer = $("#buzzer")[0];
    var buzzer1 = $("#buzzer1")[0];
    var count = parseInt($("#num").html());
    var breakTime = parseInt($("#breakNum").html());
    $("#reset").hide();

    $("#start").click(function () {
        var counter = setInterval(timer, 1000);
        count *= 60;
        breakTime*=60;

        function timer() {
            $("#start, #minus5Session, #add5Session, #minus5Break, " +
                "#add5Break, #breakNum, #title, #title1").hide();
            $("#timeType").show();
            $("#timeType").html("Session Time: ").css({
                fontSize: "50px",
            });

            count -= 1;
            if (count === 0) {
                buzzer.play();
                clearInterval(counter);
                var startBreak = setInterval(breakTimer, 1000);
                $("#num").hide();
            }

            if (count % 60 >= 10) {
                $("#num").html(Math.floor(count / 60) + ":" + count % 60).css({
                    fontSize: "50px"
                });
            }
            else {
                $("#num").html(Math.floor(count / 60) + ":" + "0" + count % 60).css({
                    fontSize: "50px"
                });
            }


            function breakTimer() {
                $("#timeType").html("Break Time: ");
                $("#breakNum").show();
                $("#timeType").show();
                breakTime -= 1;
                if (breakTime === 0) {
                    clearInterval(startBreak);
                    buzzer1.play();
                    $("#reset").show();
                    $("#breakNum, #timeType").hide();
                }
                if (breakTime % 60 >= 10) {
                    $("#breakNum").html(Math.floor(breakTime / 60) + ":" + breakTime % 60).css({
                        fontSize: "50px"
                    });
                }
                else {
                    $("#breakNum").html(Math.floor(breakTime / 60) + ":" + "0" + breakTime % 60).css({
                        fontSize: "50px"
                    });
                }
            }
        }
    });

    $("#reset").click(function () {
        count = 25;
        breakTime = 25;

        $("#num").html(count);
        $("#breakNum").html(breakTime);
        $("#start, #minus5Session, #add5Session, #minus5Break, #add5Break, #breakNum, #num, #title, #title1").show();
        $("#reset, #timeType").hide();
    });

    $('#minus5Session').click(function () {
        if (count > 1) {
            count -= 1; //short for count = count - 5
            $("#num").html(count);
        }
    });
    $('#add5Session').click(function () {
        count += 1; //short for count = count + 5
        $("#num").html(count);
    });
    $("#minus5Break").click(function () {
        if (breakTime > 1) {
            breakTime -= 1; //short for breakTime = breakTime - 5
            $("#breakNum").html(breakTime);
        }
    });
    $("#add5Break").click(function () {
        breakTime += 1;
        $("#breakNum").html(breakTime);
    })
});