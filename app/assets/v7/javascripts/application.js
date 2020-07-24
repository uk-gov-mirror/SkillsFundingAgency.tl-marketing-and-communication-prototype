/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}



$("#tl-find-button--search").click(function () {
    event.preventDefault();
    var route = $("#tl-qualifications option:selected").text();
    $('.tl-next--container').addClass('tl-next--container--active');
    $('.tl-results-box').removeClass('tl-results-box--active');
    $("li:contains('" + route + "')").closest('.tl-results-box').addClass('tl-results-box--active');
});



$(".tl-nav--hamburger").click(function () {
    event.stopPropagation();
    if ($("#tl-nav").hasClass("active")) {
        $("#tl-nav").removeClass("active");
        $("body").removeClass("navopen");
        $("#tl-nav--hamburger").attr("aria-expanded", "false");
    }
    else {
        $("#tl-nav").addClass("active");
        $("#tl-nav--hamburger").attr("aria-expanded", "true");
        $("body").addClass("navopen");
    }
});

$(document).on('click', function () {
    var target = event.target;
    var parent = target.parentElement;
    var modalcontent = $(".tl-modal--content")

    if ($(target).is(".tl-link--modal")) {
        event.preventDefault();
        $(target).next(".tl-modal").addClass('active');
        $("body").addClass('modal-open');
        event.stopImmediatePropagation()
    }
    else if ($("body").hasClass("modal-open") && !$(target).is(modalcontent) && !modalcontent.has(target).length > 0 || $(target).is(".tl-modal--close")) {
        event.preventDefault();
        $('.tl-modal').removeClass('active');
        $("body").removeClass('modal-open');
    }
});


