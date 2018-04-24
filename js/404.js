/* 404 return link hover effect */

$("#link_404_shape").hover(function() {
    $("#link_404_shape").css({fill: "#e7e7e7", transition: "3s"});
    $("#link_404_shape").css({stroke: "#9b0408", transition: "3s"});
    if($(window).width() < 640) {
        $("#link_404_shape").css({strokeWidth: "1.6px", transition: "0s"});
    } else {
        $("#link_404_shape").css({strokeWidth: "0.8px", transition: "0s"});
    }
    $("#nav_404_text").css({fill: "#9b0408", transition: "3s"});
    $("#whiteline_404").hide("1s");
}, function() {
});

/* resetten wanneer terug weg van link */

$(".reset_links").hover(function() {

    /* 404 return link reset */

    $("#link_404_shape").css({fill: "#9b0408", transition: "3s"});
    $("#link_404_shape").css({stroke: "#9b0408", transition: "3s"});
    $("#link_404_shape").css({strokeWidth: "0px", transition: "0s"});
    $("#nav_404_text").css({fill: "#e7e7e7", transition: "3s"});
    $("#whiteline_404").show("1s");

}, function() {
});

