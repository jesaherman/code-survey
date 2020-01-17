$(document).ready(function() {
  $("form#language-survey").submit(function(event){
    var nature = parseInt($("select#nature").val());
    var travel = parseInt($("select#travel").val());
    var animal = parseInt($("select#animal").val());
    var water = parseInt($("select#water").val());
    var freeTime = parseInt($("select#freetime").val());
    var result = add(nature, travel, animal, water, freeTime);
    $("output").text(result);
  
    event.preventDefault();
  });
});