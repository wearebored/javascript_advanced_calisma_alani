console.log("object");

// saat dakika saniyeyi tanımla
// verilerin yazılacağı konumları belirle
// saat dakika saniyeyi belirlenen konumlara yazdır
// işlemlerin tekrarlanmasını sağla

// let saat = new Date().getHours();
// let dakika = new Date().getMinutes();
// let saniye = new Date().getSeconds();

// document.querySelector(".saat").innerHTML = saat;

// document.querySelector(".dakika").innerHTML = dakika;

// document.querySelector(".saniye").innerHTML = saniye;

//
//

//
// işlemlerin tekrarlanmasını sağla
setInterval(() => {
  // saat dakika saniyeyi tanımla
  let saat = new Date().getHours();
  let dakika = new Date().getMinutes();
  let saniye = new Date().getSeconds();
  if (saat < 10) {
    // verilerin yazılacağı konumları belirle
    // saat dakika saniyeyi belirlenen konumlara yazdır
    document.querySelector(".saat").innerHTML = "0" + saat;
  } else {
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
}, 1000);
