function mult() {
 num1=prompt("Enter your 1st num")
 num2=prompt("Enter your 2nd num")
 document.write(num1*num2)
}
function div() {
    num1=prompt("Enter your 1st num")
    num2=prompt("Enter your 2nd num")
    document.write(num1/num2)
   }
   function subs() {
    num1=prompt("Enter your 1st num")
    num2=prompt("Enter your 2nd num")
    document.write( num1-num2)
   }
   function Add() {
    let num1 = parseFloat(prompt("Enter your 1st number"));
    let num2 = parseFloat(prompt("Enter your 2nd number"));

    if (!isNaN(num1) && !isNaN(num2)) {
        document.write("Result of addition: " + (num1 + num2));
    } else {
        document.write("Invalid input. Please enter valid numbers.");
    }
}

      