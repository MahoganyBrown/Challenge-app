function addNumbers() {
  var n1 = document.getElementById("num1").value;
  var n2 = document.getElementById("num2").value;
  var n3 = document.getElementById("num3").value;
     
  
  var numArray = [n1, n2, n3];
  numArray.sort(function(a, b) {
  return a - b;

});

  console.log(numArray);
  

  
