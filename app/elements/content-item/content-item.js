Polymer({
    is: 'content-item',
  
  
    properties: {
        
    },
    attached: function() {
        var me = this;
        var div = me.$$("#divToShowHide");
  //Take the current position (vertical position from top) of your div in the variable
  var pos = me.$$("#divToShowHide").offsetTop;
  //Now when scroll event trigger do following
  window.onscroll = function () {
   var windowpos = document.documentElement.scrollTop;
   //Now if you scroll more than 100 pixels vertically change the class to AfterScroll
   // I am taking 100px scroll, you can take whatever you need
   if (windowpos >= 900) {
    me.$$("#divToShowHide").classList.add("AfterScroll");
   }
   //If scroll is less than 100px, remove the class AfterScroll so that your content will be hidden again 
   if (windowpos >= 1800) {
    me.$$("#divToShowHide").classList.remove("AfterScroll");
   }
   if (windowpos < 900) {
    me.$$("#divToShowHide").classList.remove("AfterScroll");
   }
   //Note: If you want the content should be shown always once you scroll and do not want to hide it again when go to top agian, no need to write the else part
 };
    }
  });
  