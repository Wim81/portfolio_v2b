/*  javascript file portfolio v2  */

$(document).ready(function() {


    /* work link hover effect */

    $("#link_work_shape").hover(function() {
        $("#link_work_shape").css({fill: "#e7e7e7", transition: "0.5s"});
        $("#link_work_shape").css({stroke: "#084E96", transition: "0.5s"});
        if($(window).width() < 640) {
            $("#link_work_shape").css({strokeWidth: "1.6px", transition: "0s"});
        } else {
            $("#link_work_shape").css({strokeWidth: "0.8px", transition: "0s"});
        }
        $("#nav_work_text").css({fill: "#084E96", transition: "0.5s"});
        $("#whiteline_work").hide("0.5s");
    }, function() {
    });


    /* contact link hover effect */

    $("#link_contact_shape").hover(function() {
        $("#link_contact_shape").css({fill: "#e7e7e7", transition: "0.5s"});
        $("#link_contact_shape").css({stroke: "#9b0408", transition: "0.5s"});
        if($(window).width() < 640) {
            $("#link_contact_shape").css({strokeWidth: "1.6px", transition: "0s"});
        } else {
            $("#link_contact_shape").css({strokeWidth: "0.8px", transition: "0s"});
        }
        $("#nav_contact_text").css({fill: "#9b0408", transition: "0.5s"});
        $("#whiteline_contact").hide("0.5s");
    }, function() {
    });


    /* about link 1 hover effect */

    $("#link_about1_shape").hover(function() {
        $("#link_about1_shape").css({fill: "#084E96", transition: "0.5s"});
        $("#link_about1_shape").css({stroke: "#e7e7e7", transition: "0.5s"});
        $("#link_about1_shape").css({strokeWidth: "2.6px", transition: "0.5s"});
        $("#nav_about1_text").css({fill: "#e7e7e7", transition: "0.5s"});
    }, function() {}
    );


    /* about link 2 hover effect */

    $("#link_about2_shape").hover(function() {
        $("#link_about2_shape").css({fill: "#084E96", transition: "0.5s"});
        $("#link_about2_shape").css({stroke: "#e7e7e7", transition: "0.5s"});
        $("#link_about2_shape").css({strokeWidth: "0px", transition: "0.5s"});
        $("#nav_about2_text").css({fill: "#e7e7e7", transition: "0.5s"});
    }, function() {
    });


    /* send link hover effect */

    $("#link_send_shape").hover(function() {
        $("#link_send_shape").css({fill: "#9b0408", transition: "0.5s"});
        $("#link_send_shape").css({stroke: "#e7e7e7", transition: "0.5s"});
        if($(window).width() < 640) {
            $("#link_send_shape").css({strokeWidth: "1.6px", transition: "0s"});
        } else {
            $("#link_send_shape").css({strokeWidth: "0.8px", transition: "0s"});
        }
        $("#button_send_text").css({fill: "#e7e7e7", transition: "0.5s"});
        $("#redline_send").hide("0.5s");
    }, function() {
    });

    /* resetten wanneer terug weg van link */

    $(".reset_links").hover(function() {

        /* work link reset */

        console.log("this is happening!!!");   /* probeer op de css de transition te zetten!!! */
        $("#link_work_shape").css({fill: "#084E96", transition: "0.5s"});
        $("#link_work_shape").css({stroke: "#084E96", transition: "0.5s"});
        $("#link_work_shape").css({strokeWidth: "0px", transition: "0.5s"});
        $("#nav_work_text").css({fill: "#e7e7e7", transition: "0.5s"});
        $("#whiteline_work").show("1s");

        /* contact link reset */

        $("#link_contact_shape").css({fill: "#9b0408", transition: "0.5s"});
        $("#link_contact_shape").css({stroke: "#9b0408", transition: "0.5s"});
        $("#link_contact_shape").css({strokeWidth: "0px", transition: "0.5s"});
        $("#nav_contact_text").css({fill: "#e7e7e7", transition: "0.5s"});
        $("#whiteline_contact").show("1s");

        /* about link 1 reset */

        $("#link_about1_shape").css({fill: "#e7e7e7", transition: "0.5s"});
        $("#link_about1_shape").css({stroke: "#084E96", transition: "0.5s"});
        $("#link_about1_shape").css({strokeWidth: "2.6px", transition: "0.5s"});
        $("#nav_about1_text").css({fill: "#084E96", transition: "0.5s"});

        /* about link 2 reset */

        $("#link_about2_shape").css({fill: "#e7e7e7", transition: "0.5s"});
        $("#link_about2_shape").css({stroke: "#084E96", transition: "0.5s"});
        $("#link_about2_shape").css({strokeWidth: "1.2px", transition: "0.5s"});
        $("#nav_about2_text").css({fill: "#084E96", transition: "0.5s"});

        /* send button reset */

        $("#link_send_shape").css({fill: "#e7e7e7", transition: "0.5s"});
        $("#link_send_shape").css({stroke: "#e7e7e7", transition: "0.5s"});
        $("#link_send_shape").css({strokeWidth: "0px", transition: "0.5s"});
        $("#button_send_text").css({fill: "#9b0408", transition: "0.5s"});
        $("#redline_send").show("1s");

    }, function() {
    });


    /*  overgang naar work section  */

    $("#link_work_shape").click(function() {
        $("#link_work").css({zIndex: "20"});
        $("#link_work_shape").css({fill: "#084E96", transition: "3s"});
        $("#link_work_shape").css({stroke: "#084E96", transition: "3s"});
        $("#link_work_shape").css({strokeWidth: "0px", transition: "3s"});
        $("#nav_work_text").css({fill: "#e7e7e7", transition: "3s"});
        $(".section_work").delay(1500).queue(function (next) {
            $(this).css({bottom: "0vh", transition: "3s"});
            next();
        });
        $("#link_work").delay(1500).queue(function (next) {
            $(this).css({top: "100vh", transition: "3s"});
            next();
        });
    });

    $(".nav_work").click(function() {
        $("#link_work").css({zIndex: "20"});
        $("#link_work_shape").css({fill: "#084E96", transition: "3s"});
        $("#link_work_shape").css({stroke: "#084E96", transition: "3s"});
        $("#link_work_shape").css({strokeWidth: "0px", transition: "3s"});
        $("#nav_work_text").css({fill: "#e7e7e7", transition: "3s"});
        $(".section_work").delay(1500).queue(function (next) {
            $(this).css({bottom: "0vh", transition: "3s"});
            next();
         });
        $("#link_work").delay(1500).queue(function (next) {
            $(this).css({top: "100vh", transition: "3s"});
            next();
        });
    });


    /*  overgang naar contact section  */

    $("#link_contact_shape").click(function() {
        $("#link_contact").css({zIndex: "20"});
        $("#link_contact_shape").css({fill: "#9b0408", transition: "3s"});
        $("#link_contact_shape").css({stroke: "#9b0408", transition: "3s"});
        $("#link_contact_shape").css({strokeWidth: "0px", transition: "3s"});
        $("#nav_contact_text").css({fill: "#e7e7e7", transition: "3s"});
        $(".section_contact").delay(1500).queue(function (next) {
            $(this).css({top: "0vh", transition: "3s"});
            next();
        });
        $("#link_contact").delay(1500).queue(function (next) {
            $(this).css({bottom: "100vh", transition: "3s"});
            next();
        });
    });

    $(".nav_contact").click(function() {
        $("#link_contact").css({zIndex: "20"});
        $("#link_contact_shape").css({fill: "#9b0408", transition: "3s"});
        $("#link_contact_shape").css({stroke: "#9b0408", transition: "3s"});
        $("#link_contact_shape").css({strokeWidth: "0px", transition: "3s"});
        $("#nav_contact_text").css({fill: "#e7e7e7", transition: "3s"});
        $(".section_contact").delay(1500).queue(function (next) {
            $(this).css({top: "0vh", transition: "3s"});
            next();
        });
        $("#link_contact").delay(1500).queue(function (next) {
            $(this).css({bottom: "100vh", transition: "3s"});
            next();
        });
    });


    /*  overgang naar about section (mobile)  */

    $("#link_about1_shape").click(function() {
        $("#link_about1").css({zIndex: "20"});
        $(".section_about").css({zIndex: "30"});
        $("#link_about1_shape").css({fill: "#e7e7e7", transition: "3s"});
        $("#link_about1_shape").css({stroke: "#084E96", transition: "3s"});
        $("#link_about1_shape").css({strokeWidth: "2.6px", transition: "3s"});
        $("#nav_about1_text").css({fill: "#084E96", transition: "3s"});
        $(".section_about").delay(1500).queue(function (next) {
            $(this).css({left: "0vh", transition: "3s"});
            next();
        });
        $("#link_about1").delay(1500).queue(function (next) {
            $(this).css({right: "100vw", transition: "3s"});
            next();
        });
        $(".section_about").delay(2500).queue(function (next) {
            $(this).css({borderLeft: "0px solid transparent", transition: "0.5s"});
            next();
        });
    });

    $(".nav_about1").click(function() {
        $("#link_about1").css({zIndex: "20"});
        $(".section_about").css({zIndex: "30"});
        $("#link_about1_shape").css({fill: "#e7e7e7", transition: "3s"});
        $("#link_about1_shape").css({stroke: "#084E96", transition: "3s"});
        $("#link_about1_shape").css({strokeWidth: "2.6px", transition: "3s"});
        $("#nav_about1_text").css({fill: "#084E96", transition: "3s"});
        $(".section_about").delay(1500).queue(function (next) {
            $(this).css({left: "0vh", transition: "3s"});
            next();
        });
        $("#link_about1").delay(1500).queue(function (next) {
            $(this).css({right: "100vw", transition: "3s"});
            next();
        });
        $(".section_about").delay(2500).queue(function (next) {
            $(this).css({borderLeft: "0px solid transparent", transition: "0.5s"});
            next();
        });
    });


    /*  overgang naar about section (desktop)  */

    $("#link_about2_shape").click(function() {
        $("#link_about2").css({zIndex: "20"});
        $(".section_about").css({zIndex: "30"});
        $("#link_about2_shape").css({fill: "#e7e7e7", transition: "3s"});
        $("#link_about2_shape").css({stroke: "#084E96", transition: "3s"});
        $("#link_about2_shape").css({strokeWidth: "1.2px", transition: "3s"});
        $("#nav_about2_text").css({fill: "#084E96", transition: "3s"});
        $(".section_about").delay(1500).queue(function (next) {
            $(this).css({left: "0vh", transition: "3s"});
            next();
        });
        $("#link_about2").delay(1500).queue(function (next) {
            $(this).css({right: "100vw", transition: "3s"});
            next();
        });
        $(".section_about").delay(2500).queue(function (next) {
            $(this).css({borderLeft: "0px solid transparent", transition: "0.5s"});
            next();
        });
    });

    $(".nav_about2").click(function() {
        $("#link_about2").css({zIndex: "20"});
        $(".section_about").css({zIndex: "30"});
        $("#link_about2_shape").css({fill: "#e7e7e7", transition: "3s"});
        $("#link_about2_shape").css({stroke: "#084E96", transition: "3s"});
        $("#link_about2_shape").css({strokeWidth: "1.2px", transition: "3s"});
        $("#nav_about2_text").css({fill: "#084E96", transition: "3s"});
        $(".section_about").delay(1500).queue(function (next) {
            $(this).css({left: "0vh", transition: "3s"});
            next();
        });
        $("#link_about2").delay(1500).queue(function (next) {
            $(this).css({right: "100vw", transition: "3s"});
            next();
        });
        $(".section_about").delay(2500).queue(function (next) {
            $(this).css({borderLeft: "0px solid transparent", transition: "0.5s"});
            next();
        });
    });


    /*  overgang van work section terug naar home page  */

    $(".exit_work").click(function() {
        $("#whiteline_work").show();
        $(".section_work").delay(0).queue(function (next) {
            $(this).css({bottom: "100vh", transition: "3s"});
            next();
        });
        $("#link_work").delay(0).queue(function (next) {
            if($(window).width() < 640) {
                $(this).css({top: "-3px", transition: "3s"});
            } else {
                $(this).css({top: "-40px", transition: "3s"});
            }
            next();
        });

        $("#link_work").delay(1000).queue(function (next) {
            $(this).css("z-index", "0");
            next();
        });
    });


    /*  overgang van contact section terug naar home page  */

    $(".exit_contact").click(function() {
        $("#whiteline_contact").show();
        $(".section_contact").delay(0).queue(function (next) {
            $(this).css({top: "100vh", transition: "3s"});
            next();
        });
        $("#link_contact").delay(0).queue(function (next) {
            if($(window).width() < 640) {
                $(this).css({bottom: "-3px", transition: "3s"});
            } else {
                $(this).css({bottom: "-40px", transition: "3s"});
            }
            next();
        });

        $("#link_contact").delay(3000).queue(function (next) {
            $(this).css("z-index", "0");
            next();
        });
        setTimeout(function() { $('#name').val(''); }, 3000);
        setTimeout(function() { $('#email').val(''); }, 3000);
        setTimeout(function() { $('#message').val(''); }, 3000);
    });


    /*  overgang van about section terug naar home page  */

    $(".exit_about").click(function() {
        $(".section_about").delay(0).queue(function (next) {
            $(this).css({left: "100vw", transition: "3s"});
            next();
        });

        if($(window).width() < 640) {
            $("#link_about1").delay(1000).queue(function (next) {
                $(this).css("z-index", "0");
                next();
            });
        } else {
            $("#link_about2").delay(0).queue(function (next) {
                $(this).css({right: "-3px", transition: "3s"});
                next();
            });
            $("#link_about2").delay(1000).queue(function (next) {
                $(this).css("z-index", "0");
                next();
            });
        }
        $(".section_about").delay(100).queue(function (next) {
            $(this).css({borderLeft: "2px solid #084E96", transition: "0.5s"});
            next();
        });
    });


    /*  hover effect work item 1  */

    $("#work_item_1").hover(function() {
        $("#work_item_1").css({backgroundImage: "url('images/work/preview_1_bauweraertsjef.jpg')", cursor: "pointer"});
        $("#work_item_label_1").css({height: "45%", clipPath: "polygon(0 0, 100% 0, 100% 58%, 0 58%)", backgroundColor: "rgba(231, 231, 231, 0.7)", color: "#084e96"});
        $("#work_item_link_1").css({opacity: "1"});
        $("#work_item_1 p").hide(1000);

    }, function() {
        $("#work_item_1").css({backgroundImage: "url('images/work/preview_1_bauweraertsjef_bw.jpg')",cursor: "auto"});
        $("#work_item_label_1").css({height: "100%", clipPath: "polygon(0 0, 100% 0, 100% 58%, 0 42%)", backgroundColor: "rgba(8, 78, 150, 0.7)", color: "#e7e7e7"});
        $("#work_item_link_1").css({opacity: "0"});
        $("#work_item_1 p").show(1000);
    });

    /*  hover effect work item 2  */

    $("#work_item_2").hover(function() {
        $("#work_item_2").css({backgroundImage: "url('images/work/preview_2_danysstyle.jpg')", cursor: "pointer"});
        $("#work_item_label_2").css({height: "30%", clipPath: "polygon(0 0, 100% 0, 100% 58%, 0 58%)", backgroundColor: "rgba(231, 231, 231, 0.7)", color: "#084e96"});
        $("#work_item_link_2").css({opacity: "1"});
        $("#work_item_2 p").hide(1000);

    }, function() {
        $("#work_item_2").css({backgroundImage: "url('images/work/preview_2_danysstyle_bw.jpg')", cursor: "auto"});
        $("#work_item_label_2").css({height: "100%", clipPath: "polygon(0 0, 100% 0, 100% 58%, 0 42%)", backgroundColor: "rgba(8, 78, 150, 0.7)", color: "#e7e7e7"});
        $("#work_item_link_2").css({opacity: "0"});
        $("#work_item_2 p").show(1000);
    });

    /*  hover effect work item 3  */

    $("#work_item_3").hover(function() {
        $("#work_item_3").css({backgroundImage: "url('images/work/preview_3_hangman.jpg')", cursor: "pointer"});
        $("#work_item_label_3").css({height: "30%", clipPath: "polygon(0 0, 100% 0, 100% 58%, 0 58%)", backgroundColor: "rgba(231, 231, 231, 0.7)", color: "#084e96"});
        $("#work_item_link_3").css({opacity: "1"});
        $("#work_item_3 p").hide(1000);

    }, function() {
        $("#work_item_3").css({backgroundImage: "url('images/work/preview_3_hangman_bw.jpg')", cursor: "auto"});
        $("#work_item_label_3").css({height: "100%", clipPath: "polygon(0 0, 100% 0, 100% 58%, 0 42%)", backgroundColor: "rgba(8, 78, 150, 0.7)", color: "#e7e7e7"});
        $("#work_item_link_3").css({opacity: "0"});
        $("#work_item_3 p").show(1000);
    });

    /*  hover effect work item 4  */

    $("#work_item_4").hover(function() {
        $("#work_item_4").css({backgroundImage: "url('images/work/preview_4_christmasinvaders.jpg')", cursor: "pointer"});
        $("#work_item_label_4").css({height: "45%", clipPath: "polygon(0 0, 100% 0, 100% 58%, 0 58%)", backgroundColor: "rgba(231, 231, 231, 0.7)", color: "#084e96"});
        $("#work_item_link_4").css({opacity: "1"});
        $("#work_item_4 p").hide(1000);

    }, function() {
        $("#work_item_4").css({backgroundImage: "url('images/work/preview_4_christmasinvaders_bw.jpg')", cursor: "auto"});
        $("#work_item_label_4").css({height: "100%", clipPath: "polygon(0 0, 100% 0, 100% 58%, 0 42%)", backgroundColor: "rgba(8, 78, 150, 0.7)", color: "#e7e7e7"});
        $("#work_item_link_4").css({opacity: "0"});
        $("#work_item_4 p").show(1000);
    });

    /*  hover effect work item 5  */

    $("#work_item_5").hover(function() {
        $("#work_item_5").css({backgroundImage: "url('images/work/preview_5_404.jpg')", cursor: "pointer"});
        $("#work_item_label_5").css({height: "30%", clipPath: "polygon(0 0, 100% 0, 100% 58%, 0 58%)", backgroundColor: "rgba(231, 231, 231, 0.7)", color: "#084e96"});
        $("#work_item_link_5").css({opacity: "1"});
        $("#work_item_5 p").hide(1000);

    }, function() {
        $("#work_item_5").css({backgroundImage: "url('images/work/preview_5_404_bw.jpg')", cursor: "auto"});
        $("#work_item_label_5").css({height: "100%", clipPath: "polygon(0 0, 100% 0, 100% 58%, 0 42%)", backgroundColor: "rgba(8, 78, 150, 0.7)", color: "#e7e7e7"});
        $("#work_item_link_5").css({opacity: "0"});
        $("#work_item_5 p").show(1000);
    });


    /*  scrollbar about  */

    $(".content_about").niceScroll({
        cursorcolor:"#084E96",
        cursorwidth:"8px",
        cursorborder: "0px solid #084E96",
        cursorborderradius: "0px",
        cursorfixedheight: 100,
        autohidemode: "leave",
        cursoropacitymin: 0.2,
        cursoropacitymax: 0.7,
        background: "transparent",
        enablemousewheel: true,
        enablekeyboard: true,
        smoothscroll: true,
    });

    /*  scrollbar contact  */

    $(".contact_form").niceScroll({
        cursorcolor:"#e7e7e7",
        cursorwidth:"8px",
        cursorborder: "0px solid #e7e7e7",
        cursorborderradius: "0px",
        cursorfixedheight: 100,
        autohidemode: "leave",
        cursoropacitymin: 0.2,
        cursoropacitymax: 0.7,
        background: "transparent",
        enablemousewheel: true,
        enablekeyboard: true,
        smoothscroll: true,
    });

    /*  scrollbar work  */

    $(".content_work").niceScroll({
        cursorcolor:"#e7e7e7",
        cursorwidth:"8px",
        cursorborder: "0px solid #e7e7e7",
        cursorborderradius: "0px",
        cursorfixedheight: 100,
        autohidemode: "leave",
        cursoropacitymin: 0.2,
        cursoropacitymax: 0.7,
        background: "transparent",
        enablemousewheel: true,
        enablekeyboard: true,
        smoothscroll: true,
    });


    /*  submit form using the send button  */

    $( "#link_send" ).click(function() {
        $( ".contact_form" ).submit();
    });


    /* automated age completion */

    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }


    $("#my_age").html(getAge("October 15, 1981 01:00:00"));

});
