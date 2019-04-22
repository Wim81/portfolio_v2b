<?php


?>

<!DOCTYPE html>
<html lang="en">

<head>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-87946343-2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-87946343-2');
    </script>


    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
        Wim Verpoorten - Web Developer
    </title>
    <meta name="description" content="Portfolio site van Wim Verpoorten, Web Developer." />

    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@wim81">
    <meta name="twitter:title" content="Wim Verpoorten Web Developer">
    <meta name="twitter:description" content="Wim Verpoorten Web Developer">
    <meta name="twitter:creator" content="@wim81">
    <!-- deze nog herbekijken -->
    <meta name="twitter:image" content="http://www.wimverpoorten.com/images/portfolio/01_logo_full.jpg">

    <meta property="og:title" content="Wim Verpoorten Web Developer" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="http://www.wimverpoorten.com/" />
    <!-- deze nog herbekijken -->
    <meta property="og:image" content="http://www.wimverpoorten.com/images/portfolio/01_logo_full.png" />
    <meta property="og:description" content="Wim Verpoorten, Web Developer" />
    <meta property="og:site_name" content="Wim Verpoorten Web Developer" />
    <meta property="fb:admins" content="100003341137131" />

    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>

<body>

<div class="main_area">

    <div class="bg_animation"></div>
    <div class="bg_border bg_border_1 reset_links"></div>
    <div class="bg_border bg_border_2 reset_links"></div>

    <div class="main_text">

        <div class="main_text_1">
            <div class="main_text_1a">
                Wim
            </div>
            <div class="main_text_1b">
                Verpoorten
            </div>
        </div>
        <div class="main_text_2">
            <div class="main_text_2a">
                Web
            </div>
            <div class="main_text_2b">
                Developer
            </div>
        </div>

    </div>  <!--  einde main text  -->

    <!-- ach, let's have a logo, shall we? -->
    <img src="images/logo_gradient1.png" class="logo">

</div>  <!--  einde main area  -->

<nav>

    <!--  work link  -->
    <svg version="1.1" id="link_work" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 147.2 77.4" style="enable-background:new 0 0 147.2 77.4;" xml:space="preserve">

        <a class="nav nav_work" xlink:href="#">
            <polygon id="link_work_shape" points="13.5,0 2.2,42.3 125.3,75.3 145.5,0 "/>
            <text id="nav_work_text" x="58" y="40">work</text>
            <div class="whiteline" id="whiteline_work"></div>
        </a>

    </svg>

    <!--  contact link  -->
    <svg version="1.1" id="link_contact" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 147.2 77.4" style="enable-background:new 0 0 147.2 77.4;" xml:space="preserve">

        <a class="nav nav_contact" xlink:href="#">
            <polygon id="link_contact_shape" points="134.2,77.3 145.5,35 22.4,2 2.2,77.3 "/>
            <text id="nav_contact_text" x="48" y="50">contact</text>
            <div class="whiteline" id="whiteline_contact"></div>
        </a>

    </svg>

    <!--  about link 1 (mobile)  -->
    <svg version="1.1" id="link_about1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 138.5 93.5" style="enable-background:new 0 0 138.5 93.5;" xml:space="preserve">
        <a class="nav nav_about1" xlink:href="#">
            <rect x="7.2" y="16.8" transform="matrix(0.9659 0.2588 -0.2588 0.9659 14.4481 -16.244)" id="link_about1_shape" width="123.5" height="59.8"/>
            <text id="nav_about1_text" x="38" y="56">about</text>
        </a>
    </svg>

    <!--  about link 2 (desktop)  -->
    <svg version="1.1" id="link_about2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 91.8 77.4" style="enable-background:new 0 0 91.8 77.4;" xml:space="preserve">
        <a class="nav nav_about2" xlink:href="#">
            <polygon id="link_about2_shape" points="91.9,-0.1 13.2,-0.1 1.9,42.2 91.9,66.4 "/>
            <text id="nav_about2_text" x="20" y="40">about</text>
        </a>

    </svg>

</nav>

<!--  backgrounds for separate divs (for animation purposes)  -->
<div class="div_background work_background">
    <div class="div_bg_inner work_bg_inner"></div>
</div>
<div class="div_background contact_background">
    <div class="div_bg_inner contact_bg_inner"></div>
</div>
<div class="div_background about_background">
    <div class="div_bg_inner about_bg_inner"></div>
</div>
<!--  end of backgrounds -->

<div class="sectiondiv section_work">
    <div class="sectiondiv_inner section_work_inner">

        <img src="images/logo_white1.png" class="logo">

        <div class="top_row">
            <div class="page_title" id="page_title_work">Work</div>
            <p class="exit_p exit_work"></p>
        </div>

        <div class="content_work">

            <!--  WEBSITES  -->
            <div class="content_work_group">

                <div class="work_title_wrapper">
                    <div class="work_title work_title_1 content_work_element">Websites</div>
                </div>

                <a href="http://www.bauweraertsjef.be" target="_blank" class="work_item content_work_element" id="work_item_1" data-image-col='images/work/preview_1_bauweraertsjef.jpg', data-image-bw='images/work/preview_1_bauweraertsjef_bw.jpg'>
                    <div class="work_item_label" id="work_item_label_1">
                        <h2>Bauweraerts Jef</h2>
                        <p>website for a client who provides septic services</p>
                    </div>
                    <div class="work_item_link" id="work_item_link_1">view</div>
                </a>

                <a href="https://www.inheremusic.com" target="_blank" class="work_item content_work_element" id="work_item_2" data-image-col='images/work/preview_2_inhere.jpg', data-image-bw='images/work/preview_2_inhere_bw.jpg'>
                    <div class="work_item_label" id="work_item_label_2">
                        <h2>Website InHere</h2>
                        <p>wordpress website for my musical project</p>
                    </div>
                    <div class="work_item_link" id="work_item_link_2">view</div>
                </a>

            </div>

            <!--  APPS  -->
            <div class="content_work_group">

                <div class="work_title_wrapper">
                    <div class="work_title work_title_2 content_work_element">Apps</div>
                </div>

                <a href="http://www.wimverpoorten.com/hangman/" target="_blank" class="work_item content_work_element" id="work_item_3" data-image-col='images/work/preview_3_hangman.jpg', data-image-bw='images/work/preview_3_hangman_bw.jpg'>
                    <div class="work_item_label" id="work_item_label_3">
                        <h2>Hangman</h2>
                        <p>android game made with phonegap</p>
                    </div>
                    <div class="work_item_link" id="work_item_link_3">view</div>
                </a>

                <a href="https://play.google.com/store/apps/details?id=com.verpoorten.wim.factcalculator" target="_blank" class="work_item content_work_element" id="work_item_6" data-image-col='images/work/preview_6_factcalculator.jpg', data-image-bw='images/work/preview_6_factcalculator_bw.jpg'>
                    <div class="work_item_label" id="work_item_label_6">
                        <h2>Fact Calculator</h2>
                        <p>native android app using an api</p>
                    </div>
                    <div class="work_item_link" id="work_item_link_6">view</div>
                </a>

            </div>

            <!--  FUN  -->
            <div class="content_work_group">

                <div class="work_title_wrapper">
                    <div class="work_title work_title_3 content_work_element">Fun</div>
                </div>

                <a href="https://www.smashingmagazine.com/2016/11/christmas-wallpaper-calendars-2016/#christmas-invaders" target="_blank" class="work_item content_work_element" id="work_item_4" data-image-col='images/work/preview_4_christmasinvaders.jpg', data-image-bw='images/work/preview_4_christmasinvaders_bw.jpg'>
                    <div class="work_item_label" id="work_item_label_4">
                        <h2>Christmas Invaders</h2>
                        <p>wallpaper for smashing magazine competition</p>
                    </div>
                    <div class="work_item_link" id="work_item_link_4">view</div>
                </a>

                <a href="http://www.wimverpoorten.com/googledoodle/" target="_blank" class="work_item content_work_element" id="work_item_5" data-image-col='images/work/preview_5_googledoodle.jpg', data-image-bw='images/work/preview_5_googledoodle_bw.jpg'>
                    <div class="work_item_label" id="work_item_label_5">
                        <h2>Google Doodle</h2>
                        <p>google doodle celebrating the woodstock festival</p>
                    </div>
                    <div class="work_item_link" id="work_item_link_5">view</div>
                </a>

            </div>

        </div>

    </div>

</div>

<div class="sectiondiv section_contact">

    <div id="form-messages"></div>

    <div class="sectiondiv_inner section_contact_inner reset_links">

        <img src="images/logo_white1.png" class="logo">

        <div class="top_row">
            <div class="page_title" id="page_title_contact">Contact</div>
            <p class="exit_p exit_contact"></p>
        </div>

        <div class="content_contact_wrapper">
            <div class="content_contact">

                <form class="contact_form" action ="ajax/mailer.php" method="post">

                    <p id="contact_intro">Got a question? Want a website? Worried about global warming? I like hearing from you, so just drop me a message....</p>

                    <input type="text" placeholder="name" class="form_item" id="name" name="name">
                    <input type="text" placeholder="email" class="form_item" id="email" name="email">
                    <textarea placeholder="your message" class="form_item" id="message" name="message"></textarea>
                    <button type="submit" name="submit" id="submit_form" value="submit" class="hidden">send awaaay</button>

                </form>
            </div>  <!--  einde contact inner section  -->

        </div>  <!--  einde van de wrapper  -->

    </div>



    <!-- <label for="submit_form" tabindex="0"> label om te testen </label> -->
        <!--  send link  -->
        <svg version="1.1" id="link_send" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 147.2 77.4" style="enable-background:new 0 0 147.2 77.4;" xml:space="preserve">
            <a class="nav button_send" xlink:href="#">
                <polygon id="link_send_shape" points="134.2,77.3 145.5,35 22.4,2 2.2,77.3 "/>
                <text id="button_send_text" x="60" y="50">send</text>
                <div class="whiteline" id="redline_send"></div>
            </a>
        </svg>


</div>

<div class="sectiondiv section_about">
    <div class="sectiondiv_inner section_about_inner">

        <img src="images/logo_blue1.png" class="logo">

        <div class="top_row top_row_about">
            <div class="page_title" id="page_title_about">About</div>
            <p class="exit_p exit_about"></p>
        </div>

        <div class="content_about_wrapper">
            <div class="content_about">

                <div id="about_text_1" class="about_item">
                    <p>Hi, I’m Wim, and I am a web developer, currently working for <a href="https://www.ivalue.be/" target="_blank" id="ivalue_link">iValue</a> in Antwerp, a web agency which focuses on online presence, digital performance & marketing.</p>
                    <br>
                    <p>I am <span id="my_age"></span> years old, and I live in Turnhout, Belgium. Before becoming a web developer, I have worked for Novartis for 12 years, initially in a customer service role, before moving into a business support role and eventually becoming a business planning analyst & sales analyst.</p>
                    <br>
                    <p>I had a good time there, but I knew I wanted to spend my energy on other things, so in 2015 I went back to school at Thomas More Hogeschool in Mechelen. In 2018, I graduated as a bachelor in Interactive Multimedia Design, option Web Development.</p>
                    <br>
                    <p>My main interest is in front-end development, which is what I focus on primarily in my current job as well, but my skill set also extends into back-end development, mobile development and web design. <span id="skill_ref">On the right,</span> you can see a short summary of my most relevant skills.</p>

                </div>

                <img src="images/bg_image_blue_on_white_v2.png" class="about_item" id="about_image">

                <div id="about_text_2" class="about_item">
                    <ul>
                        <li>HTML5 / CSS3 / Sass</li>
                        <li>Bootstrap / Gulp / Git</li>
                        <li>Javascript / jQuery</li>
                        <li>WordPress & Drupal theming</li>
                        <li>PHP / Laravel</li>
                        <li>Java / Android</li>
                        <li>Photoshop / Illustrator</li>
                        <li>User Experience / Usability</li>
                    </ul>
                    <br>
                    <p>This site contains a couple of projects which I managed to finish in between my busy study & work schedule. These can be found in the work section. I just love producing projects on the side, so I will be adding more examples of my work as time passes by.</p>
                    <br>
                    <p>If you want to get in touch, please head over to the contact section and leave me a message. Alternative ways of contacting me or finding more information on my work & mindset can be found at the bottom of this section. I am always looking forward to meeting new, interesting people!</p>

                    <div class="about_external_links">
                        <a href="https://github.com/Wim81" class="ext_github" target="_blank" tooltip="GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://codepen.io/wim81/" class="ext_codepen" target="_blank" tooltip="CodePen">
                            <i class="fab fa-codepen"></i>
                        </a>
                        <a href="https://medium.com/@wimverpoorten" class="ext_medium" target="_blank" tooltip="Medium">
                            <i class="fab fa-medium"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/wimverpoortenwebdeveloper/" class="ext_linkedin" target="_blank" tooltip="LinkedIn">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>

                </div>

            </div>  <!--  einde about inner section  -->
        </div>  <!--  einde van de wrapper  -->
</div>  <!--  einde about section  -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://code.jquery.com/color/jquery.color.plus-names-2.1.2.min.js"></script>
<script src="js/script.js"></script>
<script src="js/app.js"></script>
<script src="js/jquery.nicescroll.min.js"></script>
<script src="js/jquery.touchSwipe.min.js"></script>

</body>

</html>