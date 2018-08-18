$(function() {
  $(document).ready(function(){
    //  Check is Mobile
    function isMobile() {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return true;
      }
      return false;
    }

    if (isMobile()) {
      $('body').addClass('isMobile');
    }

    /* GRID ROTATOR ----------------------------------*/
    $(function() {
      $('#ri-grid').gridrotator({
        rows		: 7,
        columns		: 10,
        // animType	: 'fadeInOut',
        animSpeed	: 1000,
        interval	: 2000,
        step		: 3,
        w1400       : {
          rows    : 8,
          columns : 8
        },
        w1200       : {
          rows    : 8,
          columns : 7
        },
        w1024       : {
          rows    : 8,
          columns : 6
        },
        w768        : {
          rows    : 12,
          columns : 5
        },
        w480        : {
          rows    : 8,
          columns : 4
        },
        w320		: {
          rows	: 8,
          columns	: 3
        },
        w240		: {
          rows	: 8,
          columns	: 2
        }
      });
    });

    /* COUNTDOWN -------------------------------------*/
    var austDay = new Date();
    austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
    $('#defaultCountdown').countdown({
      until: austDay,
      format: 'wdHMS'
    });
    $('#year').text(austDay.getFullYear());

    /* BACKGROUND SLIDESHOW ----------------------------------*/
    // if($("#supersized-loader").length > 0) {
    //     $.supersized({
    //         // Functionality
    //         slide_interval          :   3000,		// Length between transitions
    //         transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
    //         transition_speed		:	700,		// Speed of transition
    //         // Components
    //         slide_links				:	'blank',	// Individual links for each slide (Options: false, 'number', 'name', 'blank')
    //         slides 					:  	[			// Slideshow Images
    //             {image : 'img/s1.jpg'},
    //             {image : 'img/s2.jpg'},
    //             {image : 'img/s3.jpg'},
    //             {image : 'img/s4.jpg'},
    //             {image : 'img/s5.jpg'}
    //         ]
    //     });
    // }

    /* SECTION SLIDE ---------------------------------*/
    if(isMobile() == false){
      $('#md-sections').ulslide({
        effect: {
          type: 'slide', // slide or fade
          axis: 'y',     // x, y
          distance: 0   // Distance between frames
        },
        duration: 500,
        autoslide: false,
        height: 'auto',
        width: '100%',
        mousewheel: true,
        direction: 'f',
        nextButton: '#arrow-next',
        prevButton: '#arrow-prev',
        pager: "#md-pager .md-page"
      });
    }

    /* VALIDATE SUBSCRIBE FORM ----------------------------------*/
    if($("#md-subscribe-form").length > 0) {
      // Validate the contact form
      $('#md-subscribe-form').validate({
        // Add requirements to each of the fields
        rules: {
          email: {
            required: true,
            email: true
          }
        },

        // Specify what error messages to display
        // when the user does something horrid
        messages: {
          email: {
            required: "Please enter your email.",
            email: "Please enter a valid email."
          }
        },

        // Use Ajax to send everything to processForm.php
        /*
        submitHandler: function(form) {
          $(form).ajaxSubmit({
            success: function(responseText, statusText, xhr, $form) {
              $("#notify-content").slideUp(600, function() {
                $("#notify-content").html(responseText).slideDown(600);
              });
            }
          });
          return false;
        }
        */
      });
    }

    /* VALIDATE MESSAGE FORM ----------------------------------*/
    if($("#md-message-form").length > 0) {
      // Validate the contact form
      $('#md-message-form').validate({
        // Add requirements to each of the fields
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          email: {
            required: true,
            email: true
          },
          message: {
            required: true,
            minlength: 10
          }
        },

        // Specify what error messages to display
        // when the user does something horrid
        messages: {
          name: {
            required: "Please enter your name.",
            minlength: $.format("At least {0} characters required.")
          },
          email: {
            required: "Please enter your email.",
            email: "Please enter a valid email."
          },
          message: {
            required: "Please enter a message.",
            minlength: $.format("At least {0} characters required.")
          }
        },

        /*
        // Use Ajax to send everything to processForm.php
        submitHandler: function(form) {
          $(form).ajaxSubmit({
            success: function(responseText, statusText, xhr, $form) {
              $("#message-content").slideUp(600, function() {
                $("#message-content").html(responseText).slideDown(600);
              });
            }
          });
          return false;
        }
        */
      });
    }

    /* VALIDATE DOMAIN SALE FORM ----------------------------------*/
    if($("#md-domain-form").length > 0) {
      // Validate the contact form
      $('#md-domain-form').validate({
        // Add requirements to each of the fields
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          email: {
            required: true,
            email: true
          },
          bid: {
            required: true,
            digits: true
          },
          /*
          captcha: {
            required: true,
            range: [24, 24]
          }
          */
        },

        // Specify what error messages to display
        // when the user does something horrid
        messages: {
          name: {
            required: "Please enter your name.",
            minlength: $.format("At least {0} characters required.")
          },
          email: {
            required: "Please enter your email.",
            email: "Please enter a valid email."
          },
          bid: {
            required: "Please enter your bid.",
            digits: "Please enter only digits."
          },
          captcha: {
            required: "Please enter a number.",
            digits: "Please enter only digits."
          }
        },

        /*
        // Use Ajax to send everything to processForm.php
        submitHandler: function(form) {
          $(form).ajaxSubmit({
            success: function(responseText, statusText, xhr, $form) {
              $("#md-domain-content").slideUp(600, function() {
                $("#md-domain-content").html(responseText).slideDown(600);
              });
            },
            error: function(jqXHR, textStatus, errorThrown) {
              $("#md-domain-content .message").html(jqXHR.responseText);
            }
          });
          return false;
        }
        */
      });
    }

    /* RESIZE FUNCTION ----------------------------------*/
    function pageResize() {
      var panelHeight = $(window).height(),
        panelWidth = $(window).width();
      $("#md-comingsoon, #md-sections").height(panelHeight);
      // Center md-content
      $('.md-content').each(function(){
        var _parent = $(this).parent(),
          _self = $(this);
        _parent.show();
        mtop = (_parent.height() - _self.height() - 20)/2;
        if (mtop > 0)
          _self.css({'margin-top': mtop})
        else
          _self.css({'margin-top': 0})
      });

      if($mdBgImage.size() > 0) {
        var width = parseInt($mdBgImage.data("defW")),
          height = parseInt($mdBgImage.data("defH"));
        if(height > 0 && panelHeight > 0) {
          if (((width / height) > (panelWidth / panelHeight))) {
            var left = panelWidth - (panelHeight / height) * width;
            $mdBgImage.css({width: "auto", height: panelHeight + "px"});
            if(left < 0) {
              $mdBgImage.css({left: (left/2) + "px", top: 0 });
            } else {
              $mdBgImage.css({left: 0, top: 0 });
            }
          } else {
            var top = panelHeight - (panelWidth / width) * height;
            $mdBgImage.css({width: panelWidth + "px", height: "auto"});
            if(top < 0) {
              $mdBgImage.css({top: (top/2) + "px", left: 0 });
            } else {
              $mdBgImage.css({left: 0, top: 0 });
            }
          }
        }
      }
    }
    $(window).resize(function() {
      pageResize();
    });
    function getImgSize(imgSrc) {
      var newImg = new Image();
      newImg.src = imgSrc;
      return {height: newImg.height, width: newImg.width};
    }
    var $mdBgImage = $(".md-bg-image img");
    if($mdBgImage.size() > 0) {
      var size = $mdBgImage.size(),
        i = 0;
      $mdBgImage.each(function() {
        $(this).load(function() {
          if(!$(this).data('defW')) {
            i++;
            var dimensions = getImgSize($(this).attr("src"));
            $(this).data({
              'defW': dimensions.width,
              'defH': dimensions.height
            });
            if(i == size) pageReady();
          }
        });
        if(this.complete) {
          $(this).load();
        }
      });

    }
    pageResize();
    function pageReady() {
      pageResize();
    }
  });
});
