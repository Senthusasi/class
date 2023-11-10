
const year= prompt("Enter the  year:");

if (number % 4==0) 
{
    console.log("Leap year");   
}
else if(number % 100!=0){
    console.log("leap year")
}
else if(number % 400==0){
    console.log("leap year")
}
else
{
    console.log("not a leap year");
}