
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


let dropDown = document.querySelector(".drop-down");
let dropDownList = document.querySelector(".drop-list");

dropDown.addEventListener("click", function () {
  dropDownList.classList.toggle("active");
});
