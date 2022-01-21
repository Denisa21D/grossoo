(function($) {
    "use strict";

    $(document).ready(function() {
        $('.star-rating').each(function() {     
            if  ($(this).find('.star-o-container').length > 0) {
                var width = $(this).width();
                $(this).find('.star-container').html('').append('<div>                                              <i class="fa fa-star"></i>                                              <i class="fa fa-star"></i>                                              <i class="fa fa-star"></i>                                              <i class="fa fa-star"></i>                                              <i class="fa fa-star"></i>                                          </div>');           
            }
        });

        if($('#clients_carousel .owl-carousel').length) {
            $('#clients_carousel .owl-carousel').owlCarousel({
                loop:true,
                margin:0,
                nav:false,
                items:1,
                dots:true
            });
        }
        if($('#home_slider_2 .owl-carousel').length) {
            $('#home_slider_2 .owl-carousel').owlCarousel({
                loop:true,
                margin:0,
                nav:false,
                items:1,
                dots:true
            });
        }
        if($('#home_slider_3 .owl-carousel').length) {
            $('#home_slider_3 .owl-carousel').owlCarousel({
                loop:true,
                margin:0,
                nav:true,
                items:1,
                dots:true,
                navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
            });
        }
        if($('#home_slider_4 .owl-carousel').length) {
            $('#home_slider_4 .owl-carousel').owlCarousel({
                loop:true,
                margin:0,
                nav:false,
                items:1,
                dots:false
            });
        }
    });
    
    //category collapse
    $('.category-widget-btn').on('click', function (e) {
        var $this = $(this),
        parent= $this.closest('li');

        if (parent.hasClass('open')) {
            parent.find('ul').slideUp(400, function() {
                parent.removeClass('open');
            });
        } else {
            parent.find('ul').slideDown(400, function() {
                parent.addClass('open');
            });
        }

        e.preventDefault();
    });

    if ($.fn.noUiSlider) {
        $('#price-range').noUiSlider({
            range: [0, 2000],
            start: [250, 1800],
            handles: 2,
            connect: true,
            serialization: {
                to: [ $('#price-range-low'), $('#price-range-high') ]
                }
            });
    }
                    
    if ($.fn.selectbox) {
        $('.selectbox').selectbox({
            effect: "fade"
        });
    }

    $('.normal-selectbox a').on('click', function() {

        var $this = $(this),
        parent= $this.closest('.dropdown-color');

        if (parent.parent().hasClass("custom-selectbox1")) {                

            parent.find('.dropdown-menu > li > a').each(function() {
                $(this).removeClass('active');
            });

            $this.addClass('active');

        } else {
            parent.find('.dropdown-toggle').html($this.html()); 
        }           

    });

    
    
    if ( typeof Swiper === 'function' ) {
        var productGalleryCarousel = new Swiper('.product-gallery-carousel', {
            pagination: '',
            nextButton: '',
            prevButton: '',
            slidesPerView: 4,
            spaceBetween: 10,
            breakpoints: {
                1200: {
                    spaceBetween: 10
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                580: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10
                }
            }
        });
    }

    if ($.fn.zoom) {
        $('.product-zoom-container').zoom({
            touch: false,            
        });
    }
    
    if ($.fn.elevateZoom) {
        
        $('#product-zoom').elevateZoom({
            responsive: true, 
            zoomType: 'inner',
            cursor: "crosshair",
            borderSize: 1,
            borderColour: '#e7e7e7',
            lensSize : 180,
            lensBorder: 4,
            lensOpacity: 1,
            lensColour: 'rgba(255, 255, 255, 0.18)'
        });
    }

    $('.count-wrapper > .count-plus').on('click', function() {
        var count = $(this).parent().find('.product-count').val();
        count++;
        $(this).parent().find('.product-count').val(count);
    });
                
    $('.count-wrapper > .count-min').on('click', function() {
        var count = $(this).parent().find('.product-count').val();
        if (count > 0)
        {
            count--;
            $(this).parent().find('.product-count').val(count);
        }                   
    });


    if ($.isFunction($.fn.magnificPopup)) {

        $('.btn-popup').magnificPopup({
            type: 'inline',

            fixedContentPos: true,
            closeBtnInside: false,
            closeOnContentClick: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'mfp-demo-options mfp-fade',
            callbacks: {
                open: function() {
                    $('html').addClass('lightbox-opened');
                    if ( typeof Swiper === 'function' ) {
                            var productGalleryCarousel = new Swiper('.zoom-anim-dialog .product-gallery-carousel', {
                                pagination: '',
                                nextButton: '',
                                prevButton: '',
                                slidesPerView: 4,
                                spaceBetween: 10,
                                breakpoints: {
                                    1200: {
                                        spaceBetween: 10
                                    },
                                    992: {
                                        slidesPerView: 3,
                                        spaceBetween: 10
                                    },
                                    580: {
                                        slidesPerView: 3,
                                        spaceBetween: 10
                                    },
                                    320: {
                                        slidesPerView: 2,
                                        spaceBetween: 10
                                    }
                                }
                            });
                        }
                    setTimeout(function() {
                        $(window).trigger('scroll');
                        
                    }, 1000);
                },
                close: function() {
                    $('html').removeClass('lightbox-opened');
                }
            }
        });

    }

    $(document).on('shown.bs.modal', function() {
        
        if ($.fn.zoom) {

            if ($('.modal-content .product-zoom-container > .zoomImg').length == 0) {
                $('.modal-content .product-zoom-container').zoom({
                    touch: false,            
                });
            }
        }        

        if ( typeof Swiper === 'function' ) {
            var productGalleryCarousel = new Swiper('.modal-content .product-gallery-carousel', {
                pagination: '',
                nextButton: '',
                prevButton: '',
                slidesPerView: 4,
                spaceBetween: 10,
                breakpoints: {
                    1200: {
                        spaceBetween: 10
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    580: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    }
                }
            });
        }
    });         
                
})( jQuery)

