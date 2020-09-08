﻿$( document ).ready(function() {
    console.log( "ready!" );
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});