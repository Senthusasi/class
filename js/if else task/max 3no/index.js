var num1,num2, num3;
num1= prompt("Enter the first number:");
num2=prompt("Enter second number:");
num3=prompt("Enter third number:")
if (num1 > num2) {
    document.write("num2 is not maximum num1 ");   
}
else if(num1 > num3){
    document.write("num1 is max otherwise num3");
}
else if(num1 > num2){
    document.write("num1 is not max ");
}
else if(num2 > num3){
    Document.write("num2 is max")
}
else(num2 > num1)
{
    document.write("both the numbers are equal.");
}