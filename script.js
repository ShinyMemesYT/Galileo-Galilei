var q1 = "He invented, The Geometric Compass, Galileo's Thermoscope, Pendulum Clock and The First Microscopes.";
var q2 = "He was an Italian polymath.";
var q3 = "Speed and velocity, Gravity and free fall, The principle of relativity, Inertia and Projectile motion";

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
        $(this).animate({
            backgroundColor: jQuery.Color("white")
        }, "slow");
    });
    $("#revealall").click(function () {
        $(".facts").each(function () {
            $(this).animate({
                backgroundColor: jQuery.Color("white")
            }, "slow");
        });
    });
    $(".maintext").each(function () {
        gg
        var dashes = "";
        for (i = 0; i <= $(this).text().length; i++) {
            dashes = dashes + "-";
        }
        $(this).html($(this).html() + "<br>" + dashes);
    });
});
