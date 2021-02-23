var checagem = localStorage.getItem("progresso");

$(document).ready(function () {
  console.log('1', checagem);


  if (checagem == "true") {
    $("#progressCheck1").prop("checked", true);
    console.log("checado");
  } else {
    $("#progressCheck1").prop("checked", false);
  }
});


$(window).scroll(function () {

  if ($(window).scrollTop() + $(window).height() === $(document).height()) {
    console.log("esconde!");

  } else {
    console.log("normal");
    $(".navbar").addClass("fixed-top");
  }


  if ($(window).scrollTop() === 0) {
    console.log("zero");
    $(".navbar").removeClass("fixed-top");
    $("#row-main").css("padding-top", "0%");


  } else {
    console.log("nao zero");
    $(".navbar").addClass("fixed-top");
    $("#row-main").css("padding-top", ($('#menuSuperior').css("height")));
    $(".stepContainer").css("padding-bottom", ($('#menuSuperior').css("height")));
  }

});

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


//testes

//testes

/*Progress Check AULA1*/
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

/*Progress Check AULA2*/
$("#progressCheck5").change(function () {
  if (this.checked) {
    $("#topico4").addClass("visited");
  } else {
    $("#topico4").removeClass("visited");
  }
});

$("#progressCheck6").change(function () {
  if (this.checked) {
    $("#topico5").addClass("visited");
  } else {
    $("#topico5").removeClass("visited");
  }
});

$("#progressCheck7").change(function () {
  if (this.checked) {
    $("#topico6").addClass("visited");
  } else {
    $("#topico6").removeClass("visited");
  }
});

$("#progressCheck8").change(function () {
  if (this.checked) {
    $("#topico7").addClass("visited");
  } else {
    $("#topico7").removeClass("visited");
  }
});

$("#progressCheck9").change(function () {
  if (this.checked) {
    $("#topico8").addClass("visited");
  } else {
    $("#topico8").removeClass("visited");
  }
});

/*Progresso Conclusão Aula2*/
$("#progressCheck9").change(function () {
  if (this.checked) {
    $("#aula2").addClass("completed");
  } else {
    $("#aula2").removeClass("completed");
  }
});

/*Progress Check AULA3*/
$("#progressCheck10").change(function () {
  if (this.checked) {
    $("#topico9").addClass("visited");
  } else {
    $("#topico9").removeClass("visited");
  }
});

$("#progressCheck11").change(function () {
  if (this.checked) {
    $("#topico10").addClass("visited");
  } else {
    $("#topico10").removeClass("visited");
  }
});

$("#progressCheck12").change(function () {
  if (this.checked) {
    $("#topico11").addClass("visited");
  } else {
    $("#topico11").removeClass("visited");
  }
});

/*Progresso Conclusão Aula3*/
$("#progressCheck12").change(function () {
  if (this.checked) {
    $("#aula3").addClass("completed");
  } else {
    $("#aula3").removeClass("completed");
  }
});

/*Progress Check AULA4*/
$("#progressCheck13").change(function () {
  if (this.checked) {
    $("#topico12").addClass("visited");
  } else {
    $("#topico12").removeClass("visited");
  }
});

$("#progressCheck14").change(function () {
  if (this.checked) {
    $("#topico13").addClass("visited");
  } else {
    $("#topico13").removeClass("visited");
  }
});

$("#progressCheck15").change(function () {
  if (this.checked) {
    $("#topico14").addClass("visited");
  } else {
    $("#topico14").removeClass("visited");
  }
});

$("#progressCheck16").change(function () {
  if (this.checked) {
    $("#topico15").addClass("visited");
  } else {
    $("#topico15").removeClass("visited");
  }
});

$("#progressCheck17").change(function () {
  if (this.checked) {
    $("#topico16").addClass("visited");
  } else {
    $("#topico16").removeClass("visited");
  }
});

/*Progresso Conclusão Aula4*/
$("#progressCheck17").change(function () {
  if (this.checked) {
    $("#aula4").addClass("completed");
  } else {
    $("#aula4").removeClass("completed");
  }
});

/*Progress Check AULA5*/
$("#progressCheck18").change(function () {
  if (this.checked) {
    $("#topico17").addClass("visited");
  } else {
    $("#topico17").removeClass("visited");
  }
});

$("#progressCheck19").change(function () {
  if (this.checked) {
    $("#topico18").addClass("visited");
  } else {
    $("#topico18").removeClass("visited");
  }
});

$("#progressCheck20").change(function () {
  if (this.checked) {
    $("#topico19").addClass("visited");
  } else {
    $("#topico19").removeClass("visited");
  }
});

$("#progressCheck21").change(function () {
  if (this.checked) {
    $("#topico20").addClass("visited");
  } else {
    $("#topico20").removeClass("visited");
  }
});

/*Progresso Conclusão Aula5*/
$("#progressCheck21").change(function () {
  if (this.checked) {
    $("#aula5").addClass("completed");
  } else {
    $("#aula5").removeClass("completed");
  }
});

/*Salva progresso no local storage*/
function saveProgress() {
  var progresso = $("#progressCheck1");
  if (progresso.prop("checked") == true) {
    localStorage.setItem("progresso", "true");
  } else {
    localStorage.setItem("progresso", "false");
  }
}

/*Flip Card*/
function flipFase1() {
  $('#fase1').addClass('flipped');
};

function unflipFase1() {
  $('#fase1').removeClass('flipped');
};

function flipFase2() {
  $('#fase2').addClass('flipped');
};

function unflipFase2() {
  $('#fase2').removeClass('flipped');
};

function flipFase3() {
  $('#fase3').addClass('flipped');
};

function unflipFase3() {
  $('#fase3').removeClass('flipped');
};

function flipFase4() {
  $('#fase4').addClass('flipped');
};

function unflipFase4() {
  $('#fase4').removeClass('flipped');
};

/**/

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

$(function () {
  console.log('2');
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    var links = this.el.find('.link');

    links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown);
  }

  Accordion.prototype.dropdown = function (e) {
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
  if ($(".step:last-child .contentMenu").hasClass("open")) {
    $(".step:last-child .line").show();
  } else {
    $(".step:last-child .line").hide();
  }

});

//deixa a atual aberta...
$(".contentMenu.open .submenu").show();
$(".step:last-child .line").hide();


/* Navegação flip card com touch*/
$(".carousel").carousel({
  interval: false,
  pause: true
});


$('.carousel .carousel-inner').on('dragstart', 'a', function () {
  return false;

});

// Adiciona suavidade na rolagem da ancoragem 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

