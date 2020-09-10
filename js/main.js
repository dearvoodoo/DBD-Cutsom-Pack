﻿$( document ).ready(function() {
    console.log( "ready!" );
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

jQuery(function ($) {
    var container = $(".imgsBA");
    var iBefore = $(".imgsBA #before");

    function comparePos(e) {
        e.preventDefault();
        var mLeft = e.pageX ? e.pageX : e.touches[0].pageX;
        var cLeft = container.offset().left;
        var w = container.width();
        var pos = (mLeft - cLeft) / w * 100;
        iBefore.css({
            width: pos + "%"
        });
    }

    container.on('mousemove', comparePos);
    container.on('touchstart', comparePos);
    container.on('touchmove', comparePos);
});

jQuery(function ($) {
    var container = $(".imgsDC");
    var iBefore = $(".imgsDC #before");

    function comparePos(e) {
        e.preventDefault();
        var mLeft = e.pageX ? e.pageX : e.touches[0].pageX;
        var cLeft = container.offset().left;
        var w = container.width();
        var pos = (mLeft - cLeft) / w * 100;
        iBefore.css({
            width: pos + "%"
        });
    }

    container.on('mousemove', comparePos);
    container.on('touchstart', comparePos);
    container.on('touchmove', comparePos);
});

jQuery(function ($) {
    var container = $(".imgsFE");
    var iBefore = $(".imgsFE #before");

    function comparePos(e) {
        e.preventDefault();
        var mLeft = e.pageX ? e.pageX : e.touches[0].pageX;
        var cLeft = container.offset().left;
        var w = container.width();
        var pos = (mLeft - cLeft) / w * 100;
        iBefore.css({
            width: pos + "%"
        });
    }

    container.on('mousemove', comparePos);
    container.on('touchstart', comparePos);
    container.on('touchmove', comparePos);
});