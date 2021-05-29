function addNumbers() {
  var n1 = document.getElementById("num1").value;
  var n2 = document.getElementById("num2").value;
  var n3 = document.getElementById("num3").value;
     
  let numbers = [n1, n2, n3]

  let sortednumbers = numbers.sort((a, b) => a - b);
  return sortednumbers  
}
