//
// animate scroll to a section of the page
//
var animateScrollToSection = function() {
  var config = {
    animateDuration: 500,
    animateTarget: "html, body",
    clickTarget: ".jump-link",
    defaultTopOffset: 80
  };

  var animateScroll = function(toAnimate) {
    var customOffset = $(toAnimate).data("offset") || config.defaultTopOffset;
    $(config.animateTarget).animate({
      scrollTop: $($.attr(toAnimate, "href")).offset().top - customOffset
    }, config.animateDuration);
  };

  var init = function() {
    $(config.clickTarget).click(function(e){
      e.preventDefault();
      animateScroll(this);
      if ($(window).width() < 768) {
        $('.navbar-toggle').click()
      }
    });
  };

  return {
    config: config,
    init: init
  };
}();


$(document).ready(function(){
	animateScrollToSection.init();
  $.stellar();
});