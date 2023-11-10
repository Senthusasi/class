
const number= prompt("Enter the  number:");

if (number % 5==0) {
    document.write("number is divisible by 5");   
}
else if(number % 11==0){
    document.write("number is divisible by 11");
}
else if((number % 5==0)&&(number % 11==0)) {
    document.write("number is divisible by both");
}
else
{
    document.write("not divisible by both");
}