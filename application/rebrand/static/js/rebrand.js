;(function($) {
  "use strict";

  var tabNavSelector = ".activity-navigation .tabs",
      tabContentClass = "tab-content",
      $tabContentCol;

  var switchTab = function( currentContentSel ) {
    var currentContentSel = currentContentSel || $( tabNavSelector ).find( ".current" ).data( "tab-section");

    // make correct tab current
    $( tabNavSelector )
      .find('a')
      .removeClass("current")
      .filter('[data-tab-section="'+ currentContentSel +'"]')
        .addClass('current');

    // show correct content
    $tabContentCol
      .hide()
      .filter("#" + currentContentSel )
        .show();

    // still needs to update hash
    // plus ARIA
  };

  $(function() {

    // close all but current tab or value of hash
    $tabContentCol = $( "." + tabContentClass );
    var currentContent = (window.location.hash) ? window.location.hash.substring(1) : undefined;
    switchTab(currentContent);

    // bind event handler
    $( tabNavSelector ).on('click', "a", function(){
      switchTab( $(this).data("tab-section") );
      return false;
    });
  });

}(jQuery));
