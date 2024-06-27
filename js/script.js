document.addEventListener("DOMContentLoaded", function() {
 gsap.registerPlugin(ScrollTrigger);

 gsap.fromTo(".gen_cont", 
     {
         marginBottom: "0",
         opacity: 1
     }, 
     {
       marginBottom: "-150px",
         duration: 6,
         scrollTrigger: {
             trigger: ".gen_cont",
             start: "top 15%",
             end: "bottom center",
             scrub: true
         }
     }
 );
 gsap.fromTo(".gen_cont", 
    {
        opacity: 1
    }, 
    {
        opacity: 0,
        duration: 16,
        scrollTrigger: {
            trigger: ".gen_cont",
            start: "bottom 75%", 
            end: "bottom top",
            scrub: true
        }
    }
);


//  gsap.fromTo(" h1", 
//   {
//    top: "58%",
//    fontSize: "85px",
//    position: "absolute"
//   }, 
//   {
//     top: "1.2%",
//    fontSize: "22px",
//    position: "fixed",
//    zIndex: 17000,
//       duration: 6,
//       scrollTrigger: {
//           trigger: " h1",
//           start: "top 35%",
//           end: "top top",
//           scrub: true
//       }
//   }
// );
// Function to apply the GSAP animation based on device width
// Function to apply the GSAP animation based on device width
function applyGSAPAnimation() {
    if (window.matchMedia("(max-width: 450px)").matches) {
      gsap.fromTo("h1", 
        {
          top: "61%",
          fontSize: "22px",
          position: "absolute"
        }, 
        {
          top: "1.2%",
          fontSize: "22px",
          position: "fixed",
          zIndex: 17000,
          duration: 6,
          scrollTrigger: {
            trigger: "h1",
            start: "top 35%",
            end: "top top",
            scrub: true
          }
        }
      );
    } else if (window.matchMedia("(max-width: 600px)").matches) {
      gsap.fromTo("h1", 
        {
          top: "74%",
          fontSize: "29px",
          position: "absolute"
        }, 
        {
          top: "1.2%",
          fontSize: "22px",
          position: "fixed",
          zIndex: 17000,
          duration: 6,
          scrollTrigger: {
            trigger: "h1",
            start: "top 35%",
            end: "top top",
            scrub: true
          }
        }
      );
    } else if (window.matchMedia("(max-width: 800px)").matches) {
      gsap.fromTo("h1", 
        {
          top: "43%",
          fontSize: "29px",
          position: "absolute"
        }, 
        {
          top: "1.2%",
          fontSize: "22px",
          position: "fixed",
          zIndex: 17000,
          duration: 6,
          scrollTrigger: {
            trigger: "h1",
            start: "top 35%",
            end: "top top",
            scrub: true
          }
        }
      );
    } else if (window.matchMedia("(max-width: 1000px)").matches) {
      gsap.fromTo("h1", 
        {
          top: "58%",
          fontSize: "46px",
          position: "absolute"
        }, 
        {
          top: "1.2%",
          fontSize: "22px",
          position: "fixed",
          zIndex: 17000,
          duration: 6,
          scrollTrigger: {
            trigger: "h1",
            start: "top 35%",
            end: "top top",
            scrub: true
          }
        }
      );
    } else if (window.matchMedia("(max-width: 1200px)").matches) {
      gsap.fromTo("h1", 
        {
          top: "58%",
          fontSize: "64px",
          position: "absolute"
        }, 
        {
          top: "1.2%",
          fontSize: "22px",
          position: "fixed",
          zIndex: 17000,
          duration: 6,
          scrollTrigger: {
            trigger: "h1",
            start: "top 35%",
            end: "top top",
            scrub: true
          }
        }
      );
    } else {
      gsap.fromTo("h1", 
        {
          top: "58%",
          fontSize: "85px",
          position: "absolute"
        }, 
        {
          top: "1.2%",
          fontSize: "22px",
          position: "fixed",
          zIndex: 17000,
          duration: 6,
          scrollTrigger: {
            trigger: "h1",
            start: "top 35%",
            end: "top top",
            scrub: true
          }
        }
      );
    }
  }
  
  // Call the function initially
  applyGSAPAnimation();
  
  // Add an event listener to call the function when the window is resized
  window.addEventListener("resize", applyGSAPAnimation);
  
// 



 gsap.fromTo(".skills", 
     {
         marginTop: "0"
     }, 
     {
         marginTop: "-120px",
         duration: 6,
         scrollTrigger: {
             trigger: ".skills",
             start: "top bottom",
             end: "bottom center",
             scrub: true
         }
     }
 );
});