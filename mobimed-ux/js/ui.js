var Mobimed = {};

$(window).load(function ()
{
  $("body").toggleClass("loaded");

  $(".animate").bind("inview", function (event, isInView)
  {
    if (isInView) {
      var animate = $(this).attr("data-animation");
      var speedDuration = $(this).attr("data-duration");
      var $t = $(this);

      setTimeout(
        function ()
        {
          $t.addClass(animate + " animated");
        },

        speedDuration
      );
    }

    /* else {
    var $t = $(this);
    var animate = $(this).attr('data-animation');

    $t.removeClass(animate + ' animated');

}
*/
  });
});

Mobimed.date = function ()
{
  $('[data-toggle="datepicker"]').datepicker();
};
Mobimed.option = function ()
{
  $(".gender-options .option").click(function (event)
  {
    $(this).addClass("active").siblings().removeClass("active");
  });
};
Mobimed.tel = function ()
{
  var input = document.querySelector("#phone");
  if (input != null) {
    window.intlTelInput(input, {
      // any initialisation options go here
    });
  }
};
Mobimed.mainBanner = function ()
{
  if ($("body").hasClass("rtl")) {
    $(".banner__slider").slick({
      fade: true,
      autoplay: true,
      rtl: true,
    });
  } else {
    $(".banner__slider").slick({
      fade: true,
      autoplay: true,
      rtl: false,
    });
  }
};
Mobimed.partners = function ()
{
  if ($("body").hasClass("rtl")) {
    $(".partners-slider").slick({
      slidesToShow: 3,
      autoplay: true,
      rtl: true,
    });
  } else {
    $(".partners-slider").slick({
      slidesToShow: 3,
      autoplay: true,
      rtl: false,
    });
  }
};
Mobimed.wow = function ()
{
  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box)
    {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });
  wow.init();
};
Mobimed.dropdwnslide = function ()
{
  $("a[data-slide]").click(function (e)
  {
    e.preventDefault();
    e.stopPropagation();

    $("#drop-slide").carousel($(this).data("slide"));
    $("#drop-slide1").carousel($(this).data("slide"));
    $("#drop-slide2").carousel($(this).data("slide"));
    $("#drop-slide3").carousel($(this).data("slide"));
  });
};
Mobimed.sidemenu = function ()
{
  $(".ico-sidemenu").click(function ()
  {
    $(".menu").toggleClass("active");
    $(".overlay").toggleClass("active");
  });
};
Mobimed.doctorslider = function ()
{
  if ($("body").hasClass("rtl")) {
    $(".doctor__slide").each(function ()
    {
      var sliderId = $(this).attr("id");

      var sliderdoc = $("#" + sliderId + " .doctors-times").lightSlider({
        item: 3,
        pager: false,
        controls: false,
        rtl: true,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              item: 2,
              slideMove: 1,
            },
          },
        ],
      });
      $("#" + sliderId + " .lSPrev").click(function ()
      {
        sliderdoc.goToNextSlide();
      });
      $("#" + sliderId + " .lSNext").click(function ()
      {
        sliderdoc.goToPrevSlide();
      });
    });
  } else {
    $(".doctor__slide").each(function ()
    {
      var sliderId = $(this).attr("id");

      var sliderdoc = $("#" + sliderId + " .doctors-times").lightSlider({
        item: 3,
        pager: false,
        controls: false,
        rtl: false,

        responsive: [
          {
            breakpoint: 480,
            settings: {
              item: 2,
              slideMove: 1,
            },
          },
        ],
      });
      $("#" + sliderId + " .lSPrev").click(function ()
      {
        sliderdoc.goToPrevSlide();
      });
      $("#" + sliderId + " .lSNext").click(function ()
      {
        sliderdoc.goToNextSlide();
      });
    });
  }

};

Mobimed.gallery = function ()
{
  $("#Clinicgallery").lightGallery();
};
Mobimed.filter = function ()
{
  $(".menu__Filters .title__menu").click(function ()
  {
    $(".menu__Filters ul").toggleClass("active");
  });
};
Mobimed.timeslider = function ()
{
  if ($("body").hasClass("rtl")) {
    var slider = $(".bookdetail .slider-time").lightSlider({
      item: 3,
      pager: false,
      controls: false,
      rtl: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            item: 2,
            slideMove: 1,
          },
        },
      ],
    });
    $("bookdetail .lSPrev").click(function ()
    {
      slider.goToNextSlide();
    });
    $("bookdetail .lSNext").click(function ()
    {
      slider.goToPrevSlide();
    });
  } else {
    var slider = $(".bookdetail .slider-time").lightSlider({
      item: 3,
      pager: false,
      controls: false,
      rtl: false,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            item: 2,
            slideMove: 1,
          },
        },
      ],
    });
    $("bookdetail .lSPrev").click(function ()
    {
      slider.goToPrevSlide();
    });
    $("bookdetail .lSNext").click(function ()
    {
      slider.goToNextSlide();
    });
  }
};
Mobimed.searchmobile = function ()
{
  $(".search__block__mobile .btn-search").click(function ()
  {
    $(".searchMobile").toggleClass("open");
  });
  $(".close-search").click(function ()
  {
    $(".searchMobile").removeClass("open");
  });
};
Mobimed.chat = function ()
{
  $(".doctors .chats li").click(function ()
  {
    $(".appear-chat").addClass("enable");
  });
};
Mobimed.initialize = function ()
{
  Mobimed.mainBanner();
  Mobimed.date();
  Mobimed.option();
  Mobimed.tel();
  Mobimed.partners();
  Mobimed.wow();
  Mobimed.dropdwnslide();
  Mobimed.sidemenu();
  Mobimed.doctorslider();
  Mobimed.gallery();
  Mobimed.timeslider();
  Mobimed.filter();
  Mobimed.searchmobile();
  Mobimed.chat();
  $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e)
  {
    Mobimed.doctorslider();
  })
};

jQuery(document).ready(function ()
{
  Mobimed.initialize();
  // var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
  //   removeItemButton: true,
  //   maxItemCount: Infinity,
  //   searchResultLimit: 5,
  //   renderChoiceLimit: 5
  // });

});
$(".sp-plus").on("click", function ()
{
  var quantityid = $(this).parent().attr("id");
  // var sliderdoc = $("#" + sliderId + " .doctors-times");
  var oldVal = $("#" + quantityid + " .quntity-input").val();
  var newVal = parseInt($("#" + quantityid + " .quntity-input").val(), 10) + 1;
  $("#" + quantityid + " .quntity-input").val(newVal);
});

$(".sp-minus").on("click", function ()
{
  var quantityid = $(this).parent().attr("id");

  var oldVal = $("#" + quantityid + " .quntity-input").val();
  var newVal = parseInt($("#" + quantityid + " .quntity-input").val(), 10) - 1;
  $("#" + quantityid + " .quntity-input").val(newVal);
});
$(".wrap-search input").focus(function ()
{
  $(".search-dropdown").toggle();
});
