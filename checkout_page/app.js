const satıs = document.querySelector(".satıs");
// const adet = document.querySelector(konum).textContent
// const adet = document.querySelector(".ekle_cıkar >div p").textContent

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
  let space_index = ana_fiyatlar.textContent.indexOf(" ");

  console.log(ana_fiyatlar.textContent);
  carp_fiyat.textContent = (
    konumlar.textContent * ana_fiyatlar.textContent.slice(1, space_index - 1)
  ).toFixed(2);
};
