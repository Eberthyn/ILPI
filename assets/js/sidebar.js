// Recolhe menu para tablets e smartphones//
$(window).on('resize', function () {
    var win = $(this);
    if (win.width() < 980) {
  
      $('#sidebar').addClass('esconder');
      $("#sidebarButton").addClass("open");
      $("#content").addClass("col-md-12");
      $("#content").removeClass("col-md-10");
  
    } else {
      $('#sidebar').removeClass('esconder');
      $("#sidebarButton").removeClass("open");
      $("#content").removeClass("col-md-12");
      $("#content").addClass("col-md-10");
    }
    
  });
  
  /*Collapse Sidebar*/
  $(".toggle-sidebar").click(function () {
    $("#sidebar").toggleClass("esconder");
    $("#content").toggleClass("col-md-12 col-md-10");
    $("#sidebarButton").toggleClass("open");
  
    return false;
  });