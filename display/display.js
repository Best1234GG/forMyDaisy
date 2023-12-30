document.addEventListener("DOMContentLoaded", function() {
  var duration = 15000;

  var scrollPerMillisecond = window.innerHeight / duration;

    function scrollStep(timestamp) {
      if (!start) start = timestamp;
        var elapsed = timestamp - start;

        var newPosition = Math.min(scrollPerMillisecond * elapsed, document.body.scrollHeight - window.innerHeight);
      

        window.scrollTo(0, newPosition);
      
        if (newPosition < document.body.scrollHeight - window.innerHeight) {
          requestAnimationFrame(scrollStep);
          }
      }
      

        var start;
        requestAnimationFrame(scrollStep);
    });
