(function($){
  $(function(){

    $('.button-collapse').sideNav();

    $('.modal-trigger').leanModal({
      ready: function() { $("body").addClass("modal-open"); },
      complete: function() { $("body").removeClass("modal-open"); }
    });

    $('.scrollspy').scrollSpy();

  }); // end of document ready
})(jQuery); // end of jQuery name space

