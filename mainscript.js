jQuery(document).ready(function($) {
    "use strict";
    
    // Subdropdown functionality - allow link to work on desktop, dropdown on mobile
    $('.dropdown-submenu a.dropdown-toggle').on("click", function(e) {
        var $submenu = $(this).next('ul');
        var isMobile = window.innerWidth <= 991.98;
        
        if (isMobile) {
            // On mobile, toggle the submenu and prevent navigation
            $submenu.toggleClass('show');
            e.stopPropagation();
            e.preventDefault();
        }
        // On desktop, don't prevent default - let the link navigate
        // Hover behavior is handled by CSS (.dropdown-submenu:hover .dropdown-menu)
    });
    
    // Close submenu when clicking outside on mobile
    $(document).on('click', function(e) {
        if (window.innerWidth <= 991.98) {
            if (!$(e.target).closest('.dropdown-submenu').length) {
                $('.dropdown-submenu .dropdown-menu').removeClass('show');
            }
        }
    });
    
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});




    // TEAM CAROUSEL HOOK
    $('#team-carousel').owlCarousel({
      loop: true,
      center: false, // No centering for team carousel
      items: 4, // 4 items on larger screens
      margin: 10,
      autoplay: true,
      dots: true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
  });



  