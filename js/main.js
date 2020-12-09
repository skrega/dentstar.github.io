$(function (){

  $('.header__menu-btn').on('click', function(){
    $(this).toggleClass('open');
    $('.header__content').toggleClass('open');
  });

  $('.communication__btn-inner').on('click', function(){
    $(this).toggleClass('open');
    $('.communication__btn').toggleClass('open');
    $('.background').toggleClass('open');
  });

  $('.close__btn').on('click', function(){
    $('.communication__btn-inner').removeClass('open');
    $('.communication__btn').removeClass('open'); 
    $('.background').removeClass('open');
  });

  $('.hide__btn').on('click', function(){
    $('.communication__btn-inner').addClass('hidden');
    $('.communication__btn').addClass('hidden');
    $('.background').removeClass('open');
  });

  $('.services__items').slick({
    arrows: false,
    infinite: false,
    variableWidth: true,
    responsive: [
      {
          breakpoint: 100000,
          settings: "unslick"
      },
      {
        breakpoint: 1371,
        settings: {               
          slidesToScroll: 1,
          slidesToShow: 4,
        }
  
      },
      {
        breakpoint: 1201,
        settings: {               
          slidesToScroll: 1,
          slidesToShow: 3,
        }
  
      },
      {
        breakpoint: 951,
        settings: {               
          slidesToScroll: 1,
          slidesToShow: 2,
        }
  
      },
      {
        breakpoint: 630,
        settings: {               
          slidesToScroll: 1,
          slidesToShow: 1,
        }
  
      },
    ]
  });

    $(window).scroll(function(){
      var $sections = $('section');
      $sections.each(function(i,el){
      var top  = $(el).offset().top-100;
      var bottom = top +$(el).height();
      var scroll = $(window).scrollTop();
      var id = $(el).attr('id');
      if( scroll > top && scroll < bottom){
        $('a.active').removeClass('active');
        $('a[href="#'+id+'"]').addClass('active');
      }
       })
    });

    $('[data-fancybox]').fancybox({
      btnTpl: {
        smallBtn:
        '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.08983 5.99973L11.7742 1.31567C12.0753 1.01461 12.0753 0.526841 11.7742 0.225789C11.4732 -0.0752629 10.9854 -0.0752629 10.6844 0.225789L6 4.90986L1.31561 0.225789C1.01457 -0.0752629 0.526817 -0.0752629 0.225779 0.225789C-0.0752596 0.526841 -0.0752596 1.01461 0.225779 1.31567L4.91017 5.99973L0.225779 10.6843C-0.0752596 10.9854 -0.0752596 11.4732 0.225779 11.7742C0.526817 12.0753 1.01457 12.0753 1.31561 11.7742L6 7.08961L10.6844 11.7742C10.835 11.9249 11.0322 11.9999 11.2293 11.9999C11.4264 11.9999 11.6236 11.9246 11.7742 11.7742C12.0753 11.4732 12.0753 10.9854 11.7742 10.6843L7.08983 5.99973Z" fill="white"/></svg>' +
        "</button>",
      }
     
    })
    new WOW().init();
})

function initMap() {
  // The location of Uluru
  const uluru = {
    lat: 43.802842232927226,
    lng: 131.94303209620634
  };
 
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: uluru,
      disableDefaultUI: false,
      //scaleControl: false,
      zoomControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      styles: [{
              "featureType": "all",
              "elementType": "all",
              "stylers": [{
                  "hue": "#008eff"
              }]
          },
          {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [{
                  "visibility": "off"
              }]
          },
          {
              "featureType": "road",
              "elementType": "all",
              "stylers": [{
                      "saturation": "0"
                  },
                  {
                      "lightness": "0"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [{
                  "visibility": "off"
              }]
          },
          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [{
                      "visibility": "simplified"
                  },
                  {
                      "saturation": "-60"
                  },
                  {
                      "lightness": "-20"
                  }
              ]
          }
      ]
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: {
      lat: 43.802842232927226,
      lng: 131.94303209620634
    },
      map: map,
      icon: 'images/map-mapmarker.svg',
  });

  google.maps.event.addDomListener(window, 'resize', function() {
    map.panTo(myLatlng);
  }); 

}  
