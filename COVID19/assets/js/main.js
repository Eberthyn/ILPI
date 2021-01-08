$(window).on('resize', function() {
  var win = $(this);
  if (win.width() < 980) {

    $('#sidebar').addClass('esconder');
    $("#content").addClass("col-md-12");
    $("#content").removeClass("col-md-10");

  } else {
    $('#sidebar').removeClass('esconder');
    $("#content").removeClass("col-md-12");
    $("#content").addClass("col-md-10");
  }
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
    $('#quiz').addClass('flipped');
  };

  function unflip() {
    $('#quiz').removeClass('flipped');
  };


  function flip2() {
    $('#quiz2').addClass('flipped');
  };

  function unflip2() {
    $('#quiz2').removeClass('flipped');
  };


  function flip3() {
    $('#quiz3').addClass('flipped');
  };

  function unflip3() {
    $('#quiz3').removeClass('flipped');
  };


  /*Altera Icone do Acordeão*/
  
  //$("#collapseAula1").hide();
  $("#collapseAula2").hide();
  $("#collapseAula3").hide();
  $("#collapseAula4").hide();//esconde a aula 4
  $(".step:last-child .line").hide();//esconde a linha da aula 4


  $(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
  
      var links = this.el.find('.link');
  
      links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
    }
  
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el;
      $this = $(this),
      $next = $this.next();
  
      $next.slideToggle();
      $this.parent().toggleClass('open');
      
      if (!e.data.multiple) {
        $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
      };
      
      
      if ($(".step:last-child .contentMenu").hasClass("open")) {
        $(".step:last-child .line").show();
      } else {
        $(".step:last-child .line").hide();
      }
    }
  
    var accordion = new Accordion($('#accordion'), false);
    $(".step:last-child .line").hide();

  });

  
  /* Navegação flip card com touch*/
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

			

	 