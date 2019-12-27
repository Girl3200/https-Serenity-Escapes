// Custom slide show
function mySlideShow() {
    // get slide show div
    const slides = document.getElementById("slides");
  
  /*
      Use setTimeout function to add classes to the main slideshow
      element every two seconds that shift it to the left.
      Using CSS to animate the transition each time.
    */
    setTimeout(function() {
        slides.classList.add("slideshow-shift-1");
    }, 2000);     
    setTimeout(function() {
      slides.classList.add("slideshow-shift-2");
  }, 4000);  
  setTimeout(function() {
      slides.classList.add("slideshow-shift-3");
  }, 6000);  
  setTimeout(function() {
      slides.classList.add("slideshow-shift-4");
  }, 8000);  
  setTimeout(function() {
      slides.classList.add("slideshow-shift-5");
  }, 10000);  
  setTimeout(function() {
      slides.classList.add("slideshow-shift-6");
  }, 12000);  
  setTimeout(function() {
      slides.classList.add("slideshow-shift-7");
  }, 14000);  
  setTimeout(function() {
      slides.classList.add("slideshow-shift-8");
  }, 16000); 
  
  // At the end, we remove all the classes to reset the slideshow
  setTimeout(function() {
      slides.classList.remove(
        "slideshow-shift-1", 
        "slideshow-shift-2",
        "slideshow-shift-3" ,
        "slideshow-shift-4", 
        "slideshow-shift-5",
        "slideshow-shift-6", 
        "slideshow-shift-7", 
        "slideshow-shift-8"
    );
  // And then call it again to restart it
    mySlideShow();
  }, 16000);
  // Close main mySlideShow function
  }
  // Start custom slide show on page load
  mySlideShow();
