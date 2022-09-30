console.log("object");

let given_array = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;

// given array listesinin ilk 3 elemanı seçilecek
// seçilen listenin en büyük sayısı alınacak
// alınan sayı boş bir listeye yazılacak
// given array listesinin 1-3 indeks arası  elemanı seçilecek
// seçilen listenin en büyük sayısı alınacak
// alınan sayı boş bir listeye yazılacak
// given array listesinin 2-4 indeks arası  elemanı seçilecek
// seçilen listenin en büyük sayısı alınacak
// alınan sayı boş bir listeye yazılacak
// given array listesinin 3-5 indeks arası  elemanı seçilecek
// seçilen listenin en büyük sayısı alınacak
// alınan sayı boş bir listeye yazılacak

// alınan elemanları koymak için boş liste oluşturulacak
// eleman sayısı -2 defa işlem tekrarlanacak.
// -------------------------------------------------------------------------------
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// alınan elemanları koymak için boş liste oluşturulacak
let sonuc = [];
// eleman sayısı -2 defa işlem tekrarlanacak.
let tekrar_sayısı = given_array.length - k+1;

console.log(tekrar_sayısı);
for (let i = 0; i < tekrar_sayısı; i++) {
  // given array listesinin ilk 3 (0,3) elemanı seçilecek
  let secilen = given_array.slice(0 + i, k + i);

  // seçilen listenin en büyük sayısı alınacak(https://code.replyfeed.com/sorular/3523/javascript-dizi-deki-en-buyuk-ve-en-kucuk-sayiyi-bulma)
  let en_buyuk = Math.max.apply(Math, secilen);
  // alınan sayı boş bir listeye yazılacak
  sonuc.push(en_buyuk);
  // sonuc.push(Math.max.apply(Math, given_array.slice(0 + i, 3 + i)));
}
console.log(sonuc);
// given array listesinin ilk 3 (0,3) elemanı seçilecek
// seçilen listenin en büyük sayısı alınacak(https://code.replyfeed.com/sorular/3523/javascript-dizi-deki-en-buyuk-ve-en-kucuk-sayiyi-bulma)
// alınan sayı boş bir listeye yazılacak
// given array listesinin 1-3 indeks arası  elemanı seçilecek
// seçilen listenin en büyük sayısı alınacak
// alınan sayı boş bir listeye yazılacak
// given array listesinin 2-4 indeks arası  elemanı seçilecek
// seçilen listenin en büyük sayısı alınacak
// alınan sayı boş bir listeye yazılacak
// given array listesinin 3-5 indeks arası  elemanı seçilecek
// seçilen listenin en büyük sayısı alınacak
// alınan sayı boş bir listeye yazılacak
