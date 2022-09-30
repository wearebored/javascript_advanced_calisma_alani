// getHours() => Get the hour (0-23)

// getMinutes() => Get the minute (0-59)

// getSeconds() => Get the second (0-59)
// let saat = new Date().getHours();
// let dakika = new Date().getMinutes();
// let saniye = new Date().getSeconds();
setInterval(()=>{
let saat = new Date().getHours();
let dakika = new Date().getMinutes();
let saniye = new Date().getSeconds();

// document.querySelector(".saat").innerHTML = saat;
// document.querySelector(".dakika").innerHTML = dakika;
// document.querySelector(".saniye").innerHTML = saniye;
if(saat<10){
    document.querySelector(".saat").innerHTML ="0"+ saat;
}
else{
    document.querySelector(".saat").innerHTML = saat;
}
if (dakika < 10) {
  document.querySelector(".dakika").innerHTML = "0" + dakika;
} else {
  document.querySelector(".dakika").innerHTML = dakika;
}
if (saniye < 10) {
  document.querySelector(".saniye").innerHTML = "0" + saniye;
} else {
  document.querySelector(".saniye").innerHTML = saniye;
}
if(saat>12){
    document.querySelector(".gece").innerHTML="PM"
}
else{
    document.querySelector(".gece").innerHTML = "AM";
}


},1000)
// let saat = new Date().getHours();
// console.log(saat);
// let dakika =new Date().getMinutes()
// let saniye = new Date().getSeconds();

// document.querySelector(".saat").innerHTML = saat;
// document.querySelector(".dakika").innerHTML=dakika
// document.querySelector(".saniye").innerHTML=saniye