  //$("#collapseAula1").hide();
  $("#collapseAula2").hide();
  $("#collapseAula3").hide();
  $("#collapseAula4").hide();//esconde a aula 4
  $(".step:last-child .line").hide();//esconde a linha da aula 4

  $(".aula1").click(function () {

    $("#collapseAula1").toggle(80, "linear", function () {
      // Animation complete.
    });
  });

  $(".aula2").click(function () {
    $("#collapseAula2").toggle(80, "linear", function () {
      // Animation complete.
    });
  });

  $(".aula3").click(function () {
    $("#collapseAula3").toggle(80, "linear", function () {
      // Animation complete.
    });
  });

  $(".aula4").click(function () {
    $("#collapseAula4").toggle(80, "linear", function () {
      // Animation complete.
    });
    $(".step:last-child .line").toggle();
  });

     /*Collapse Sidebar*/
     $(".toggle-sidebar").click(function () {
      $("#sidebar").toggleClass("esconder");
      $("#content").toggleClass("col-md-12 col-md-10");
      
      return false;
    });

  /*Progress Check*/
  $("#progressCheck1").change(function () {
    if (this.checked) {
      $("#topico0").addClass("visited");
    } else {
      $("#topico0").removeClass("visited");
    }
  });

  $("#progressCheck2").change(function () {
    if (this.checked) {
      $("#topico1").addClass("visited");
    } else {
      $("#topico1").removeClass("visited");
    }
  });

  $("#progressCheck3").change(function () {
    if (this.checked) {
      $("#topico2").addClass("visited");
    } else {
      $("#topico2").removeClass("visited");
    }
  });

  $("#progressCheck4").change(function () {
    if (this.checked) {
      $("#topico3").addClass("visited");
    } else {
      $("#topico3").removeClass("visited");
    }
  });

  /*Progresso Conclusão Aula1*/
  $("#progressCheck4").change(function () {
    if (this.checked) {
      $("#aula1").addClass("completed");
    } else {
      $("#aula1").removeClass("completed");
    }
  });

 /*Salva progresso no local storage*/
  function saveProgress(){
    var progresso = $("#progressCheck1");
    if (progresso.prop("checked") == true) {
      localStorage.setItem("progresso", "true");
    } else {
      localStorage.setItem("progresso", "false");
    }
  }
    $(document).ready(function () {
      var checagem = localStorage.getItem("progresso");
      if (checagem == "true") {
        $("#progressCheck1").prop("checked") == true;
      } else {
        $("#progressCheck1").prop("checked") == false;
      }
    });

  /*Flip Card*/
  function flip() {
    $('#quiz').toggleClass('flipped');
  };

  /*Altera Icone do Acordeão
  function tradeIcon(){
    $('.fas').toggleClass('fa-caret-down fa-caret-up');
  }*/
  
  $(".carousel").carousel({
    interval: false,
    pause: true
  });
  
  $( ".carousel .carousel-inner" ).swipe( {
    swipeLeft: function ( event, direction, distance, duration, fingerCount ) {
      this.parent( ).carousel( 'next' );
    },
    swipeRight: function ( ) {
      this.parent( ).carousel( 'prev' );
    },
    threshold: 0,
    tap: function(event, target) {
      // get the location: in my case the target is my link
      window.location = $(this).find('.carousel-item.active a').attr('href');
    },
    excludedElements:"label, button, input, select, textarea, .noSwipe"
  });
  
  $('.carousel .carousel-inner').on('dragstart', 'a', function () {
    return false;
 

 
  
});

			

	 