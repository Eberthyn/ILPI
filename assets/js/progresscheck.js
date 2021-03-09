
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
  $("#progressCheck26").change(function () {
    if (this.checked) {
      $("#topico4").addClass("visited");
    } else {
      $("#topico4").removeClass("visited");
    }
  });
  
  $("#progressCheck5").change(function () {
    if (this.checked) {
      $("#topico25").addClass("visited");
    } else {
      $("#topico25").removeClass("visited");
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
  
  /*Progress Check AULA6*/
  $("#progressCheck22").change(function () {
    if (this.checked) {
      $("#topico21").addClass("visited");
    } else {
      $("#topico21").removeClass("visited");
    }
  });
  
  $("#progressCheck23").change(function () {
    if (this.checked) {
      $("#topico22").addClass("visited");
    } else {
      $("#topico22").removeClass("visited");
    }
  });
  
  $("#progressCheck24").change(function () {
    if (this.checked) {
      $("#topico23").addClass("visited");
    } else {
      $("#topico23").removeClass("visited");
    }
  });
  
  $("#progressCheck25").change(function () {
    if (this.checked) {
      $("#topico24").addClass("visited");
    } else {
      $("#topico24").removeClass("visited");
    }
  });
  
  /*Progresso Conclusão Aula6*/
  $("#progressCheck25").change(function () {
    if (this.checked) {
      $("#aula6").addClass("completed");
    } else {
      $("#aula6").removeClass("completed");
    }
  });

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

  /*Salva progresso no local storage*/
function saveProgress() {
    var progresso = $("#progressCheck1");
    if (progresso.prop("checked") == true) {
      localStorage.setItem("progresso", "true");
    } else {
      localStorage.setItem("progresso", "false");
    }
  }