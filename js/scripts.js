
$(document).ready(function() {
  $("form#numConverter").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#txt").val());
    var numberOutput = toRoman(userInput);
    $("#result").text(numberOutput);

});
});



function = toRomanNumeral(num){
  var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"]
  var result = "";

  for (var i=0, i<decimals.length -1 , i++){
    while(num%decimal[i] < num){
      result =  result + roman[i]
      num = num - decimal[i]
    }
  }
  return result;

}
