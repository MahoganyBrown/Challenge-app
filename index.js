function addNumbers() {
  var n1 = document.getElementById("num1").value;
  var n2 = document.getElementById("num2").value;
  var n3 = document.getElementById("num3").value;
}   

function ascNumbers() { 
let numbers = [n1, n2 , n3];
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(numbers);
  
  window.alert(console.log(numbers);)

    
  



  

  
