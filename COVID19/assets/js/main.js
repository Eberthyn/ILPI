  $("#collapseAula1").show();
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

/*Flip Card*/
$(document).ready(function () {
function flip(event) {
    var element = event.currentTarget;
    if (element.className === "card") {
      if (element.style.transform == "rotateY(180deg)") {
        element.style.transform = "rotateY(0deg)";
      }
      else {
        element.style.transform = "rotateY(180deg)";
      }
    }
  }
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
  



