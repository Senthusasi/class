const time=new Date();

if(time<12){
    document.write("goodmorning\n\n")
}
else if(time>=12 && time<15){
    document.write("goodafternoon\n\n");
}
else if(time>=15 && time<19){
    document.write("goodevening\n\n");
}
else{
    document.write("goodnight\n\n")
}
document.write(`${time.getHours()} hr :${time.getMinutes()} min : ${time.getSeconds()} sec : ${time.getMilliseconds()} milisec`);


