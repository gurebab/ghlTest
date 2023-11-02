$(document).ready(function(){
    // select box open
    $(".select_wrap").click(function () {
        $(this).toggleClass("act");
        $(this).find(".select_list li").click(function () {
            $(this).parent().siblings("p").text($(this).text());
        });
    });

    // input switch toggle
    $('.switch_input').click(function () {
        if ($(this).is(':checked')) {
            $(this).siblings("span").text("ON").addClass("act");
        } else {
            $(this).siblings("span").text("OFF").removeClass("act");
        }
    });

    // calendar select
    $(".select_date .selected").click(function(){
        $(this).parent(".select_date").find('.calendar').toggleClass("act");
    });

    // tab, tab in tab act
    $(".tab li, .tab_in_tab li").click(function () {
        $(this).parent().children().removeClass("act");
        $(this).addClass("act");
    });

    $(".tab li").click(function () {
        const content = $(".tab_content");
        const idx = $(this).index();
        
        content.hide();
        content.eq(idx).show();
    });

    $(".tab_in_tab li").click(function () {
        const content = $(".tab_in_tab_content");
        const idx = $(this).index();

        content.hide();
        content.eq(idx).show();
    });

    // page list number 
    $(".list_num li").click(function () {
        $(this).parent().children().removeClass("act");
        $(this).addClass("act");
        if ($(".list_num li.num_arrow").hasClass("act")) {
            $(".list_num li.num_arrow").removeClass("act");
        }
    });

    // header menu - 2 depth open
    $(".nav > li").click(function () {
        $(".nav > li").removeClass("act");
        $(this).addClass("act");
    });

    $("header nav .nav li .nav_2depth li").click(function () {
        $("header nav .nav li .nav_2depth li").removeClass("act");
        $(this).addClass("act");
    });

    // wing banner
    $(".wing_banner .menu").click(function(){
        $(this).parent().find(".accordion").toggleClass("act");
    });
});