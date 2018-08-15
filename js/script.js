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

    function showWorkSection() {
        $("#link_work").css({zIndex: "20"});
        $("#link_work_shape").css({fill: "#084E96", transition: "3s"});
        $("#link_work_shape").css({stroke: "#084E96", transition: "3s"});
        $("#link_work_shape").css({strokeWidth: "0px", transition: "3s"});
        $("#nav_work_text").css({fill: "#e7e7e7", transition: "3s"});

        $(".work_background").delay(1000).queue(function (next) {
            $(this).css({height: "100vh", transition: "3s"});
            next();
        });

        $("#link_work").delay(1000).queue(function (next) {
            $(this).css({top: "100vh", transition: "3s"});
            next();
        });

        $(".section_work").delay(2000).queue(function (next) {
            $(this).css({display: "block"});
            next();
        });

        $(".section_work_inner").delay(4000).queue(function (next) {
            $(this).css({opacity: "1", transition: "1s"});
            next();
        });
    }

    $("#link_work_shape").click(showWorkSection);
    $(".nav_work").click(showWorkSection);


    /*  overgang naar contact section  */

    function showContactSection() {
        $("#link_contact").css({zIndex: "20"});
        $("#link_contact_shape").css({fill: "#9b0408", transition: "3s"});
        $("#link_contact_shape").css({stroke: "#9b0408", transition: "3s"});
        $("#link_contact_shape").css({strokeWidth: "0px", transition: "3s"});
        $("#nav_contact_text").css({fill: "#e7e7e7", transition: "3s"});

        $(".contact_background").delay(1500).queue(function (next) {
            $(this).css({height: "100vh", transition: "3s"});
            next();
        });

        $("#link_contact").delay(1500).queue(function (next) {
            if($(window).width() < 640) {
                $(this).css({bottom: "calc(100vh + 65px)", transition: "3s"});
            } else {
                $(this).css({bottom: "calc(100vh + 145px)", transition: "3s"});
            }
            next();
        });

        $(".section_contact").delay(3000).queue(function (next) {
            $(this).css({display: "block"});
            next();
        });

        $(".section_contact_inner").delay(4000).queue(function (next) {
            $(this).css({opacity: "1", transition: "1s"});
            next();
        });
    }

    $("#link_contact_shape").click(showContactSection);
    $(".nav_contact").click(showContactSection);


    /*  overgang naar about section (mobile)  */

    function showAboutSection1() {
        $("#link_about1").css({zIndex: "20"});
        $("#link_about1_shape").css({fill: "#e7e7e7", transition: "3s"});
        $("#link_about1_shape").css({stroke: "#084E96", transition: "3s"});
        $("#link_about1_shape").css({strokeWidth: "2.6px", transition: "3s"});
        $("#nav_about1_text").css({fill: "#084E96", transition: "3s"});

        $(".about_background").delay(1500).queue(function (next) {
            $(this).css({width: "100vw", transition: "3s"});
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

        $(".section_about").delay(2000).queue(function (next) {
            $(this).css({display: "block"});
            next();
        });

        $(".section_about_inner").delay(4000).queue(function (next) {
            $(this).css({opacity: "1", transition: "1s"});
            next();
        });
    }

    $("#link_about1_shape").click(showAboutSection1);
    $(".nav_about1").click(showAboutSection1);


    /*  overgang naar about section (desktop)  */

    function showAboutSection2() {
        $("#link_about2").css({zIndex: "20"});
        $("#link_about2_shape").css({fill: "#e7e7e7", transition: "3s"});
        $("#link_about2_shape").css({stroke: "#084E96", transition: "3s"});
        $("#link_about2_shape").css({strokeWidth: "1.2px", transition: "3s"});
        $("#nav_about2_text").css({fill: "#084E96", transition: "3s"});

        $(".about_background").delay(1500).queue(function (next) {
            $(this).css({borderLeft: "2px solid #084e96", transition: "0s"});
            $(this).css({width: "100vw", transition: "3s"});
            next();
        });

        $("#link_about2").delay(1500).queue(function (next) {
            $(this).css({right: "100vw", transition: "3s"});
            next();
        });

        $(".section_about").delay(2000).queue(function (next) {
            $(this).css({display: "block"});
            next();
        });


         $(".section_about").delay(2500).queue(function (next) {
            $(this).css({borderLeft: "0px solid transparent", transition: "0.5s"});
            next();
         });

        $(".section_about_inner").delay(5000).queue(function (next) {
            $(this).css({opacity: "1", transition: "1s"});
            next();
        });
    }

    $("#link_about2_shape").click(showAboutSection2);
    $(".nav_about2").click(showAboutSection2);


    /*  overgang van work section terug naar home page  */

    $(".exit_work").click(function() {
        $("#whiteline_work").show();

        $(".section_work_inner").delay(0).queue(function (next) {
            $(this).css({opacity: "0", transition: "1s"});
            next();
        });

        $(".section_work").delay(1000).queue(function (next) {
            $(this).css({display: "none"});
            next();
        });

        $(".work_background").delay(1000).queue(function (next) {
            $(this).css({height: "0vh", transition: "3s"});
            next();
        });

        $("#link_work").delay(1000).queue(function (next) {
            if($(window).width() < 640) {
                $(this).css({top: "-3px", transition: "3s"});
            } else {
                $(this).css({top: "-40px", transition: "3s"});
            }
            next();
        });

        $("#link_work").delay(2000).queue(function (next) {
            $(this).css("z-index", "0");
            next();
        });
    });


    /*  overgang van contact section terug naar home page  */

    $(".exit_contact").click(function() {
        $("#whiteline_contact").show();

        $(".section_contact_inner").delay(0).queue(function (next) {
            $(this).css({opacity: "0", transition: "1s"});
            next();
        });

        $(".section_contact").delay(1000).queue(function (next) {
            $(this).css({display: "none"});
            next();
        });

        $(".contact_background").delay(1000).queue(function (next) {
            $(this).css({height: "0vh", transition: "3s"});
            next();
        });

        $("#link_contact").delay(1000).queue(function (next) {
            if($(window).width() < 640) {
                $(this).css({bottom: "65px", transition: "3s"});
            } else {
                $(this).css({bottom: "145px", transition: "3s"});
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

        $(".section_about_inner").delay(0).queue(function (next) {
            $(this).css({opacity: "0", transition: "1s"});
            next();
        });

        $(".section_about").delay(1000).queue(function (next) {
            $(this).css({display: "none"});
            next();
        });

        $(".about_background").delay(1000).queue(function (next) {
            $(this).css({width: "0vw", transition: "3s"});
            next();
        });

        if($(window).width() < 640) {
            $("#link_about1").delay(2000).queue(function (next) {
                $(this).css("z-index", "0");
                next();
            });
        } else {
            $("#link_about2").delay(1000).queue(function (next) {
                $(this).css({right: "-3px", transition: "3s"});
                next();
            });
            $("#link_about2").delay(2000).queue(function (next) {
                $(this).css("z-index", "0");
                next();
            });
        }

        $(".about_background").delay(2000).queue(function (next) {
            $(this).css({borderLeft: "0px solid #084E96", transition: "0.5s"});
            next();
        });

    });


    /*  hover effect work items  */

    function workItemHoverEffectIn() {
        var bg_image = $(this).attr('data-image-col');
        var label = "#" + $(this).find('.work_item_label').attr('id');
        var link = "#" + $(this).find('.work_item_link').attr('id');

        $(this).css({backgroundImage: "url(" + bg_image + ")", cursor: "pointer"});
        $(label).css({height: "45%", clipPath: "polygon(0 0, 100% 0, 100% 58%, 0 58%)", backgroundColor: "rgba(231, 231, 231, 0.7)", color: "#084e96"});
        $(link).css({opacity: "1"});
        $(label).children("p").hide(1000);
    }

    function workItemHoverEffectOut() {
        var bg_image_bw = $(this).attr('data-image-bw');
        var label = "#" + $(this).find('.work_item_label').attr('id');
        var link = "#" + $(this).find('.work_item_link').attr('id');

        $(this).css({backgroundImage: "url(" + bg_image_bw + ")",cursor: "auto"});
        $(label).css({height: "100%", clipPath: "polygon(0 0, 100% 0, 100% 58%, 0 42%)", backgroundColor: "rgba(8, 78, 150, 0.7)", color: "#e7e7e7"});
        $(link).css({opacity: "0"});
        $(label).children("p").show(1000);
    }

    $(".work_item").hover(workItemHoverEffectIn, workItemHoverEffectOut);


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


    /* text fix if mobile */
    function checkAboutText() {
        if(window.innerWidth < 1000) {
            $("#skill_ref").html("Just below the picture,");
        } else {
            $("#skill_ref").html("On the right,");
        }
    }
    checkAboutText();
    $( window ).resize(function() {checkAboutText();});

});


/*  scrollbars  */

var timer2;

function initiateNiceScroll() {
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
}

$(document).ready(function() {
    clearTimeout(timer2);
    timer2 = setTimeout(initiateNiceScroll, 1000);
    clearTimeout(timer);
    timer = setTimeout(niceScrollOnResize, 2000);
});


/* re-position custom scrollbars on resize */

var timer;
function niceScrollOnResize() {
    $(".content_work").css('overflow-x','scroll');
    $(".content_work").getNiceScroll().resize();
    $(".content_work").css('overflow-x','hidden');

    $(".contact_form").css('overflow-x','scroll');
    $(".contact_form").getNiceScroll().resize();
    $(".contact_form").css('overflow-x','hidden');

    $(".content_about").css('overflow-x','scroll');
    $(".content_about").getNiceScroll().resize();
    $(".content_about").css('overflow-x','hidden');
}

$( window ).resize(function() {
    clearTimeout(timer);
    timer = setTimeout(niceScrollOnResize, 1000);
});

/*  fix mobile scrollbar issue  */

$(".content_work").on('touchstart', function() {
    $(this).css('overflow-x','scroll');
    $(this).getNiceScroll().resize();
    $(this).css('overflow-x','hidden');
});

$(".contact_form").on('touchstart', function() {
    $(this).css('overflow-x','scroll');
    $(this).getNiceScroll().resize();
    $(this).css('overflow-x','hidden');
});

$(".content_about").on('touchstart', function() {
    $(this).css('overflow-x','scroll');
    $(this).getNiceScroll().resize();
    $(this).css('overflow-x','hidden');
});