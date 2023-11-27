// Hero Section Btn Group
const heroBtn = document.querySelectorAll(".hero_slider_btn ul li a");

heroBtn.forEach((heroBtns) => {
  heroBtns.addEventListener("click", () => {
    removeActiveClasses();
    heroBtns.classList.add("active");
  });
});

function removeActiveClasses() {
  heroBtn.forEach((heroBtns) => {
    heroBtns.classList.remove("active");
  });
}

// Search pagination
const pagiNav = document.querySelectorAll(".pagination ul li a");

pagiNav.forEach((pagiNavs) => {
  pagiNavs.addEventListener("click", () => {
    removeActiveClassesp();
    pagiNavs.classList.add("active");
  });
});

function removeActiveClassesp() {
  pagiNav.forEach((pagiNavs) => {
    pagiNavs.classList.remove("active");
  });
}

// winScroll
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// language filter
let language = document.querySelectorAll(".language");
let flag = document.querySelector(".flag");
let english = document.querySelector(".en");
let arabic = document.querySelector(".ar");
let languageBtn = document.querySelector(".language-btn");
let languageDrop = document.querySelector(".language-drop");

languageBtn.addEventListener("click", function () {
  languageDrop.classList.toggle("active");
});

language.forEach((lan) =>
  lan.addEventListener("click", function () {
    language.forEach((lan) => lan.classList.remove("active"));
    lan.classList.add("active");
  })
);
english.addEventListener("click", function () {
  flag.src = "assets/img/Flag.png";
});

arabic.addEventListener("click", function () {
  flag.src = "assets/img/flag-2.png";
});

(function ($) {
  "use strict";

  // menu
  $(".siteBar-btn").click(function () {
    $(".mobile-menu").toggleClass("siteBar");
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $(".header-area").addClass("fixed-header");
    } else {
      $(".header-area").removeClass("fixed-header");
    }
  });

  // owlCarousel
  $(".spt_slider").owlCarousel({
    loop: true,
    center:true,
    margin: 0,
    items: 4,
    smartSpeed: 500,
    navText: [
      '<i class="fal fa-long-arrow-left"></i>',
      '<i class="fal fa-long-arrow-right"></i>',
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      767: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });

  function CLBkFunc(event) {
    let url = location.href;
    let lists = document.querySelectorAll(".hero_slider_btn li a");
    lists.forEach((elm) => {
      if (url === elm.href) {
        elm.classList.add("active");
      } else {
        elm.classList.remove("active");
      }
    });
  }

  // owlCarousel
  $(".hero_wrp").owlCarousel({
    loop: true,
    onChanged: CLBkFunc,
    margin: 0,
    items: 1,
    nav: true,
    dots: false,
    URLhashListener: true,
    startPosition: "URLHash",
    smartSpeed: 1250,
    center: true,
    autoplay: false,   
  }); 

  function SliderGoToNext() {
    let nxtBtn = document.querySelector('.hero_wrp .owl-nav .owl-next')
    if (nxtBtn) { 
      setInterval(() => {
        nxtBtn.click() 
      }, 4000);
    }
  }
   SliderGoToNext()



  // owlCarousel
  $(".cs_solid_slider").owlCarousel({
    loop: true,
    smartSpeed: 750,
    margin: 30,
    items: 3,
    navText: [
      '<i class="fal fa-long-arrow-left"></i>',
      '<i class="fal fa-long-arrow-right"></i>',
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // owlCarousel
  $(".think_slider").owlCarousel({
    loop: true,
    smartSpeed: 750,
    margin: 20,
    items: 3,
    navText: [
      '<i class="fal fa-long-arrow-left"></i>',
      '<i class="fal fa-long-arrow-right"></i>',
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 5,
    navText: [
      '<i class="fal fa-long-arrow-left"></i>',
      '<i class="fal fa-long-arrow-right"></i>',
    ],
    center:true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      767: {
        items: 3,
      },
      992: {
        items: 5,
      },
    },
  });
 



  if ($(".theStickyMenu")) { 
    jQuery(function($){
        var topMenuHeight = $(".theStickyMenu").outerHeight();
        $(".theStickyMenu").menuScroll(topMenuHeight);
    });

    // COPY THE FOLLOWING FUNCTION INTO ANY SCRIPTS
    jQuery.fn.extend({
        menuScroll: function(offset) {
            // Declare all global variables
            var topMenu = this;
            var topOffset = offset ? offset : 0;
            var menuItems = $(topMenu).find("a");
            var lastId;
        
            // Save all menu items into scrollItems array
            var scrollItems = $(menuItems).map(function() {
                var item = $($(this).attr("href"));
                if (item.length) {
                    return item;
                }
            });

            // When the menu item is clicked, get the #id from the href value, then scroll to the #id element
            $(topMenu).on("click", "a", function(e){
                var href = $(this).attr("href");
                
                var offsetTop = href === "#" ? 0 : $(href).offset().top-topOffset;

                $('html, body').stop().animate({ 
                    scrollTop: offsetTop
                }, 300);
                e.preventDefault();

            });
            
            // When page is scrolled
            $(window).scroll(function(){
                var nm = $("html").scrollTop();
                var nw = $("body").scrollTop();
                var fromTop = (nm > nw ? nm : nw)+topOffset;

                
                // When the page pass one #id section, return all passed sections to scrollItems and save them into new array current
                var current = $(scrollItems).map(function(){
                    if ($(this).offset().top <= fromTop)
                    return this;
                });
                
                // Get the most recent passed section from current array
                current = current[current.length-1];
                var id = current && current.length ? current[0].id : "";
                if (lastId !== id) {
                    lastId = id;
                    // Set/remove active class
                    $(menuItems)
                    .parent().removeClass("active")
                    .end().filter("[href='#"+id+"']").parent().addClass("active");
                }      

            });
        }
    });
}



window.addEventListener('load', () => {

    let Header = document.querySelector('.header-area')
    let cover_area = document.querySelector('.cover_area')  
    let sectionMenu = document.querySelector('.extra_link')
    let headerMenu = document.querySelectorAll('.menu_cont div#v-pills-tab button')

    if (headerMenu) { 
        headerMenu.forEach(btn => {
            btn.addEventListener('mouseover', (e) => { 
                headerMenu.forEach(btns => {
                    btns.classList.remove('active')
                });
                btn.click()
            })
        });   
    }

    if (sectionMenu) { 
        window.addEventListener('scroll', () => {  
            if ( Header.clientHeight+cover_area.clientHeight - 50 < window.scrollY) {
                sectionMenu.classList.add('sticky')
                sectionMenu.style.top = Header.clientHeight+"px";
            }else{
                sectionMenu.classList.remove('sticky')
                sectionMenu.style.top = "0px";
            }
        })  
    }
})



  /* <!-- Initialize Swiper --> */
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true, 
    
   onAny(eventName, ...args) {
 
    const activations = () => {
      let preActiveItms = document.querySelectorAll('.mySwiper .swiper-slide') 
      preActiveItms.forEach(itm => {
        if (itm.classList.contains('prevOfprev')) {
          itm.classList.remove('prevOfprev') 
        }else if (itm.classList.contains('nxtOfNxt')) { 
          itm.classList.remove('nxtOfNxt')
        }
      })
      let previtm = document.querySelector('.mySwiper .swiper-slide-prev').previousElementSibling
      let nextItm = document.querySelector('.mySwiper .swiper-slide-next').nextElementSibling 

      console.log(previtm,nextItm)

      // previtm.classList.add('prevOfprev')
      // nextItm.classList.add('nxtOfNxt')
    }
 
     if (eventName == "slideChange") {
      activations()
     }
     if (eventName == "init") {
      activations() 
     } 
  },
    slidesPerView: "auto", 
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    // },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  }); 
  let silders = document.querySelectorAll("a.swiper-slide");

  silders.forEach((slider) =>
    slider.addEventListener("click", function (e) {
      if (!slider.classList.contains("swiper-slide-active")) {
        e.preventDefault();
      }
    })
  );







})(jQuery);
