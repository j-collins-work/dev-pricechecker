var main = function() {
    
    var AWS = require("aws-sdk");

    AWS.config.loadFromPath('../config.json');

    $('.menu').animate({
        left: -$('.menu').width()
    }, 0);

    var $scrollBack = 0;

    $('#inline-button').click(function() {

            $scrollBack = $("body").scrollTop();

            $('.menu').animate({
                left: "0px"
            }, 200);

            $('body').animate({
                left: $('.menu').width(),
                scrollTop: 0
            }, 200);

            $('#button').animate({
                left: $('.menu').width()
            }, 200);

            $('#button').addClass('icon-close');
            $('#button').removeClass('icon-menu');
            $('html').css("overflow", "hidden");
    });

    $('#button').click(function() {
        if ($(this).hasClass('icon-menu')) {

            $scrollBack = $("body").scrollTop();

            $('.menu').animate({
                left: "0px"
            }, 200);

            $('body').animate({
                left: $('.menu').width(),
                scrollTop: 0
            }, 200);

            $('#button').animate({
                left: $('.menu').width()
            }, 200);

            $('#button').addClass('icon-close');
            $('#button').removeClass('icon-menu');
            $('html').css("overflow", "hidden");

        }  else if ($(this).hasClass('icon-close')) {

            $('.menu').animate({
                left: -$('.menu').width()
            }, 200);

            $('body').animate({
                left: "0px",
                scrollTop: $scrollBack
            }, 200);

            $('#button').animate({
                left: "0px"
            }, 200);

            $('#button').addClass('icon-menu');
            $('#button').removeClass('icon-close');
            $('.group-title').removeClass('current');
            $('.item').removeClass('current');
            $('.items-container').hide(200);
            $('.desc').hide(200);
            $('.group-title .arrow').html("&#10148;")
            $('.item .arrow').html("&#8594;");
            $('.menu').scrollTop(0);
            $('html').css("overflow-y", "scroll");
        }
    });


    /*
    $('body').on("swipe", function() {
        
    });
    */
    
    $('.group-title').click(function() {
        if (!$(this).hasClass('current')) {
            $('.items-container').hide(200);
            $('.group-title').removeClass('current');
            $('.item').removeClass('current');
            $('.desc').hide(200);
            $('.group-title .arrow').html("&#10148;")
            $('.item .arrow').html("&#8594;");

            $(this).parent().addClass('current');
            $(this).addClass('current');
            $(this).parent().find('.items-container').show(200);
            $('.arrow', this).html("&#9660;");
        } else {
            $('.items-container').hide(200);
            $('.group-title').removeClass('current');
            $('.item').removeClass('current');
            $('.desc').hide(200);
            $('.group-title .arrow').html("&#10148;")
            $('.item .arrow').html("&#8594;");
        }
        
    });

    $('.item').click(function() {
        if (!$(this).hasClass('current')) {
            $('.item').removeClass('current');
            $('.desc').hide(200);
            $('.item .arrow').html("&#8594;");

            $(this).addClass('current');
            $(this).find('.desc').show(200);
            $('.arrow', this).html("&#8595;")
        } else {
            $('.item').removeClass('current');
            $('.desc').hide(200);
            $('.item .arrow').html("&#8594;");
        }
    });
};


$(document).ready(main);
