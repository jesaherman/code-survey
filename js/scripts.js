// Back-end

var add = function(nature, travel, animal, water, freeTime) {
  return nature + travel + animal + water + freeTime;
};

// Front-end

$(document).ready(function() {
  $("form#languageSurvey").click(function(event){
    event.preventDefault();
    var nature = parseInt($("select#nature").val());
    var travel = parseInt($("select#travel").val());
    var animal = parseInt($("select#animal").val());
    var water = parseInt($("select#water").val());
    var freeTime = parseInt($("select#freetime").val());
    
    var result = add(nature, travel, animal, water, freeTime);
    
    // $("output").append
    
    alert(result);



    // $(#ruby).show();
    // $(#csharp).show();
    // $(#python).show();
    
  });
});