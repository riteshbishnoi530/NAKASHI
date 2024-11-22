// =================navbar====================
const navmenu = () => {
    document.getElementById("mobile_view").classList.toggle("max-lg:top-0");
    document.getElementById("mobile_view").classList.toggle("max-lg:left-0");
    document.getElementById("nav_line_1").classList.toggle("rotate-45");
    document.getElementById("nav_line_2").classList.toggle("-rotate-45");
    document.getElementById("nav_line_2").classList.toggle("translate-y-[6px]");
    document.getElementById("nav_line_1").classList.toggle("w-full");
    document.body.classList.toggle("overflow-hidden");
  };

  // ===================roadmap- gsap===========
  gsap.fromTo(
    "#star",
    {
      rotate: 0,
   
    },
    {
      rotate: 360,
  
      duration: 50,
      repeat: -1,
      ease: "linear",
    }
  );

  // ============== team-slider==========
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    adaptiveHeight: true,
    centerMode: true,
     variableWidth: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // =============video-play===============
  document
  .getElementById("play-video")
  .addEventListener("click", function () {
    const videoDiv = document.querySelector(".video");
    const videoURL = "https://www.youtube.com/embed/pge4IvwQFA8?start=138";

    videoDiv.innerHTML = `
      <iframe width="100%" height="100%" src="${videoURL}" 
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" allowfullscreen>
      </iframe>`;
  });


// ==============character
  $('.slider-2').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1.5,
    adaptiveHeight: true,
    prevArrow: $('.prev-arrow'),
      nextArrow: $('.next-arrow'),
  });

  // ===============accordion==========
  const radioButtons = document.querySelectorAll('input[name="accordion"]');

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        radioButtons.forEach(rb => {
            const icon = document.querySelector(`#icon${rb.id.replace('item', '')}`);
            if (rb.checked) {
                icon.style.transform = 'rotate(180deg)';
                icon.style.fill = 'blue';
            } else {
                icon.style.transform = 'rotate(0deg)';
                icon.style.fill = 'white';
            }
        });
    });
});
document.querySelector('input[name="accordion"]:checked').dispatchEvent(new Event('change'));

// ==========back to top=============
const backTop = document.querySelector(".back-to-top");
backTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });