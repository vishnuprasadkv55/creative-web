Polymer({
    is: 'content-item',
  
    observers:['observeScroll(scrollPosition)'],
    properties: {
    },
    attached: function() {
      var faders = document.querySelectorAll('.reveal-text');
      var appearOptions = {
        root: null, // relative to document viewport 
        rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
        threshold: 1.0 // visible amount of item shown in relation to root
      };
      var appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
        entries.forEach(function(entry) {
          if(entry.isIntersecting){
            entry.target.classList.add(entry.target.parentElement.id + '-appear');
          } else{
            entry.target.classList.remove(entry.target.parentElement.id + '-appear');
          }
        });
      },appearOptions);
    
faders.forEach(function(fader){
  appearOnScroll.observe(fader);
});
    },
  });
  