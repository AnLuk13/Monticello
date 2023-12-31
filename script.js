$(document).ready(() => {
  $(".slider").slick({
    dots: true,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
  });

  $(".slider2").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: `<svg style="
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1000;
      left: -25px;
      cursor: pointer"  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>`,
    nextArrow: `<svg style="
      position: absolute; 
      top: 50%; 
      transform: translateY(-50%);
      z-index: 1000;
      right: -25px;
      cursor: pointer" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></>`,
  });

  $(function () {
    var $panorama = $(".panorama");
    var left = $panorama.offset().left;
    var top = $panorama.offset().top;
    var width = $panorama.width();
    var height = $panorama.height();

    $(".panorama").mousemove(function (e) {
      var offsetX = e.pageX - left;
      var offsetY = e.pageY - top;
      var percentageX = (offsetX / width) * 100;
      var percentageY = (offsetY / height) * 100;

      $panorama.css(
        "background-position",
        percentageX + "% " + percentageY + "%"
      );
    });
  });

  const location = { lat: 40.681455, lng: -73.899147 };
  const $mapSelector = $("#map");
  const map = new google.maps.Map($mapSelector.get(0), {
    zoom: 15,
    center: location,
    draggable: false,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
});
