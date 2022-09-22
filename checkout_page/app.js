const satıs = document.querySelector(".satıs");
// const adet = document.querySelector(konum).textContent
// const adet = document.querySelector(".ekle_cıkar >div p").textContent
let ürünler = {
  ürün1: 55,
  ürün2: 44,
  ürün3: 22,
  ürün4:33
};
window.onload = function (e) {
  let eleman_say =
    e.target.doctype.nextSibling.children[1].children[1].children[1].children;
  for (i of eleman_say) {
    console.log(i);
    if (i.className.indexOf("ürün") == 0) {
      let bosluk = i.className.indexOf(" ");
      console.log(i.className.slice(0, bosluk));
      document.querySelector(
        `.${i.className.slice(0, bosluk)} .fiyat p`
      ).textContent = `$${ürünler[i.className.slice(0, bosluk)]}`;
      document.querySelector(
        `.${i.className.slice(0, bosluk)} span`
      ).textContent = `$${(ürünler[i.className.slice(0, bosluk)] * 1.1).toFixed(
        2
      )}`;
    }
  }

  console.log(
    e.target.doctype.nextSibling.children[1].children[1].children[1].children
  );
};
// console.log(adet);
satıs.onclick = function (e) {
  let adet = e.path[1].children[1].innerText;
  let konum = "." + e.path[2].classList[1];
  let konumlar = document.querySelector(`${konum} div p`);
  let carp_fiyat = document.querySelector(`${konum} .prod span`);
  let tik = e.path[0].innerText;
  let ana_fiyat =
    "." +
    e.path[3].firstChild.parentElement.children[0].lastElementChild
      .classList[1];
  let ana_fiyatlar = document.querySelector(ana_fiyat);

  //   let dene =
  //     e.path[3].attributes[0].ownerElement.childNodes[1].children[1].firstChild
  //       .textContent;
  console.log(e);
  if (tik == "-") {
    if (adet > 1) {
      konumlar.innerText--;
    } else if (adet == 1) {
      console.log("satırı sil uyarısı");
    }
  } else if (tik == "+") {
    konumlar.innerText++;
  } else if (tik == "Remove") {
    console.log("satırı sil uyarısı");
  }
  // let space_index = ana_fiyatlar.textContent.indexOf(" ");

  // console.log(ana_fiyatlar.textContent);
  // carp_fiyat.textContent = (
  //   konumlar.textContent * ana_fiyatlar.textContent.slice(1, space_index - 1)
  // ).toFixed(2);
  const prod2 = function (a) {
    return document.querySelector(a).innerText;
  };
  // let ab = document.querySelector(".fiyat1").innerText;
  // console.log(ab);
  // for(i of [a,b,c]){

  // }
};
