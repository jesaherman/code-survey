// Back-end

var add = function(nature, travel, animal, water, freeTime) {
  return nature + travel + animal + water + freeTime;
};

// Front-end

$(document).ready(function() {
  $("form#languageSurvey").submit(function(event){
    
    var nature = parseInt($("select#nature").val());
    var travel = parseInt($("select#travel").val());
    var animal = parseInt($("select#animal").val());
    var water = parseInt($("select#water").val());
    var freeTime = parseInt($("select#freetime").val());
   
    var result = add(nature, travel, animal, water, freeTime);
    
    if (result <=7) {
      $("#ruby").show(1000);
      $("#csharp").hide();
      $("#python").hide();
    } else if (result === 8) {
      $("#csharp").show(1000);
      $("#ruby").hide();
      $("#python").hide();
    } else if (result >=9) {
      $("#python").show(1000);
      $("#csharp").hide();
      $("#ruby").hide(); 
    } 

    event.preventDefault();
    
  });
}); 