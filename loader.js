
var video = document.getElementById("loaderVideo");
video.pause();


var tll = gsap.timeline();

    tll.to("#logoContainer", {
      duration: 1,
      delay:0.7,
      y: "-100%", 
      opacity: 0,
      ease: "back.in(1.7)",
      onComplete: function() {
        document.getElementById("logoContainer").style.visibility = 'hidden';
      }
    });


    tll.from("#loaderVideo ",{
      delay:-0.35, 
      onComplete: function() {
        var video = document.getElementById("loaderVideo");
        video.play();
      }
    } ); 

    tll.from("#loaderVideo ", {
      opacity: 0,
    }, ); 

  
    video.onended = function() {
      gsap.to("#loader", {
        duration: 1,
        y: "-100%", // Move loader up
        opacity: 0,
        onComplete: function() {
          // Hide the loader and show the main content
          document.getElementById("loader").style.display = 'none';
          document.getElementById("main").style.display = 'block';

          // Animate the main content
          gsap.from("#main", {
            duration: 0.5,
            y: "-10%",
            opacity: 0
          },);
        }
      });
    }; 