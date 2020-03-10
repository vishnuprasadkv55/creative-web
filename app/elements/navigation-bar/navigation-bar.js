Polymer({
  is: 'navigation-bar',


  properties: {
    hidePhoneNav: {
      type: Boolean,
      value: false,
    }
  },

  attached: function () {

    this.prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (this.prevScrollpos > currentScrollPos) {
        document.getElementById('fixed-nav-bar').style.top = '0';
      } else {
        document.getElementById('fixed-nav-bar').style.top = '-3em';
      }
      this.prevScrollpos = currentScrollPos;
    }
  },
  hideAndSeekProp: function (value) {
    if (value) {
      document.getElementById('content-items').style.overflow = 'auto';

      document.getElementById('content-items').style.zIndex = 1;
      document.getElementById('fixed-nav-bar').style.zIndex = 2;
    } else {
      document.getElementById('content-items').style.overflow = '';
      document.getElementById('content-items').style.zIndex = '';
      document.getElementById('fixed-nav-bar').style.zIndex = '';
    }
  },
  closeAll: function () {

    document.getElementById('toggle1').checked = false;
    document.getElementById('toggle2').checked = false;
    document.getElementById('toggle3').checked = false;
    this.set('hidePhoneNav', false);
    this.set('hideHomeNav', false);
    this.set('hideAccessorieseNav', false);
  },
  showPhoneSubnav: function (e) {
    var value = e.target.checked;
    this.closeAll();
    document.getElementById('toggle1').checked = value ? true : false;
    this.set('hidePhoneNav', value);
    this.hideAndSeekProp(this.hidePhoneNav);
  },
  showHomeSubnav: function (e) {
    var value = e.target.checked;
    this.closeAll();
    document.getElementById('toggle2').checked = value ? true : false;
    this.set('hideHomeNav', value);
    this.hideAndSeekProp(this.hideHomeNav);
  },
  showAccessoriesSubnav: function (e) {
    var value = e.target.checked;
    this.closeAll();
    document.getElementById('toggle3').checked = value ? true : false;
    this.set('hideAccessorieseNav', value);
    this.hideAndSeekProp(this.hideAccessorieseNav);
  }
});
