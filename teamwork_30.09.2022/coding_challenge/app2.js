console.log("object");

let given_array = [10, 5, 2, 7, 8, 7, 2, 4, 5];

let k = 3;
// boş bir veri listesi oluşturulacak
let veri = [];
let döngü_sayısı = given_array.length - (k - 1);
// for döngüsü oluşturulacak
for (let i = 0; i < döngü_sayısı; i++) {
    veri.push(Math.max.apply(Math, given_array.slice(0 + i, k + i)));
//   // give listesinden 0 ile 3.index arasındaki sayıları al,
//   let secilen_liste = given_array.slice(0 + i, k + i);
//   console.log(secilen_liste);
//   // alınan listedeki en büyük eleman seçilecek
//   let enbüyük = Math.max.apply(Math, secilen_liste);
//   console.log(enbüyük);
//   // en büyük değer boş listeye yazılacak
//   veri.push(enbüyük);
}
console.log(veri);
// give listesinden 0 ile 3.index arasındaki sayıları al,
// alınan listedeki en büyük eleman seçilecek
// en büyük değer boş listeye yazılacak
// give listesinden 1 ile 4.index arasındaki sayıları al,
// alınan listedeki en büyük eleman seçilecek
// en büyük değer boş listeye yazılacak
// give listesinden 2 ile 5.index arasındaki sayıları al,
// alınan listedeki en büyük eleman seçilecek
// en büyük değer boş listeye yazılacak
// give listesinden 3 ile 6.index arasındaki sayıları al,
// alınan listedeki en büyük eleman seçilecek
// en büyük değer boş listeye yazılacak
