





const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.90 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.to(".azul-logo", { y: "0%", duration: 1, stagger: 0.90 });

tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");



// 


var scroll = window.requestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback,
            1000 / 60)
    };


//  This will look all elements on class show on scroll and returned them as a array
var elementsToShow = document.querySelectorAll('.show-on-scroll');
function loop(){
    elementsToShow.forEach(function(element){
        if (isElementInViewport(element)){
            element.classList.add('is-visible');
        }else{
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}

loop();

function isElementInViewport (el) {

    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}