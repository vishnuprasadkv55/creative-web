Polymer({
    is: 'navigation-bar',


    properties: {

    },

    attached: function () {

        this.prevScrollpos = window.pageYOffset;

        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (this.prevScrollpos > currentScrollPos) {
                document.getElementById("fixed-nav-bar").style.top = "0";
            } else {
                document.getElementById("fixed-nav-bar").style.top = "-3em";
            }
            this.prevScrollpos = currentScrollPos;
        }
    }
});
