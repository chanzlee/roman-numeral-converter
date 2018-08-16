
$(document).ready(function() {
  $("form#numConverter").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#txt").val();
    var numberOutput = romanConverter(userInput);


    $("#result").text(numberOutput);
  });
});

var romanConverter = function (num){
  var numbers = [1, 5, 10, 50, 100, 500, 1000];
  var romans = ["I", "V", "X", "L", "C", "D", "M"];





});
