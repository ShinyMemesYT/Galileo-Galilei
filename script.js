var q1 = "He invented the 30x zoom telescope, the compass, the thermometer and the pendulum clock.";
var q2 = "That all objects in the universe rotate around the Sun and not Earth..";
var q3 = "He started out studying medicine.";

$(document).ready(function () {
    $("#q1").click(function () {
        $(this).text(q1);
    });
    $("#q2").click(function () {
        $(this).text(q2);
    });
    $("#q3").click(function () {
        $(this).text(q3);
    });
    console.log("running");
    $(".facts").click(function () {
        console.log("clicked");
        $(this).css("background-color", "white");
    });
    $("#revealall").click(function () {
        $(".facts").each(function () {
            $(this).css("background-color", "white");
        });
    });
    $(".maintext").each(function () {
        var dashes = "";
        for (i = 0; i <= $(this).text().length; i++) {
            dashes = dashes + "-";
        }
        $(this).html($(this).html() + "<br>" + dashes);
    });
});