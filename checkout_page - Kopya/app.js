// let tax = 18;
// let shi = 15;

window.onload = function () {
  // localStorage.setItem("tax",tax)
  // localStorage.setItem("shi",shi)

  loadprod();
  totaller();
  let satıs = document.querySelector(".satıs");
  satıs.onclick = function (e) {
    if (e.target.innerText == "+") {
      e.path[1].querySelector("p").innerText++;

      prod(e);
      totaller();
    } else if (e.target.innerText == "-") {
      if (e.path[1].querySelector("p").innerText > 1) {
        e.path[1].querySelector("p").innerText--;
        prod(e);
        totaller();
      } else if (e.path[1].querySelector("p").innerText == 1) {
        let uyar = confirm("Ürünü sepetten çıkarmak istiyormusunuz?");
        if (uyar) {
          e.path[1].parentElement.parentElement.parentElement.remove();
          totaller();
        }
      }
    } else if (e.target.innerText == "Remove") {
      let uyar = confirm("Ürünü sepetten çıkarmak istiyormusunuz?");
      if (uyar) {
        e.path[1].parentElement.parentElement.remove();
        totaller();
      }
    }
  };
};

const prod = function (e) {
  let fiyatlar = e.path[1].parentElement.parentElement;
  let toplam_fiyat = fiyatlar.querySelector(".prod span").innerText;
  let esya_fiy = fiyatlar.querySelector(".fiyat p").innerText;
  let no_indirim = fiyatlar.querySelector(".fiyat span").innerText;
  let adet = e.path[1].querySelector("p").innerText;
  fiyatlar.querySelector(".prod span").innerText = (
    esya_fiy.slice(1) * adet
  ).toFixed(2);
  fiyatlar.querySelector(".fiyat span").innerText = `$${(
    esya_fiy.slice(1) * 1.1
  ).toFixed(2)}`;
};
const loadprod = function (e) {
  let fiyatlar = document.querySelectorAll(".fiyatlar");

  for (i of fiyatlar) {
    let toplam_fiyat = i.querySelector(".prod span").innerText;
    let esya_fiy = i.querySelector(".fiyat p").innerText;
    let no_indirim = i.querySelector(".fiyat span").innerText;
    let adet = i.querySelector(".ekle_cıkar p").innerText;
    i.querySelector(".prod span").innerText = (
      esya_fiy.slice(1) * adet
    ).toFixed(2);
    i.querySelector(".fiyat span").innerText = `$${(
      esya_fiy.slice(1) * 1.1
    ).toFixed(2)}`;
  }
};
const totaller = function () {
  let subtotal = document.querySelector(".subtotal span");
  let tax = document.querySelector(".tax span");
  let shipping = document.querySelector(".shipping span");
  let totals = document.querySelector(".totals span");
  let prod = document.querySelectorAll(".prod span");

  let prod_total = 0;
  for (i of prod) {
    prod_total += Number(i.innerText);
  }
  document.querySelector(".subtotal span").textContent = `$${prod_total.toFixed(
    2
  )}`;
  document.querySelector(".tax span").textContent = `$${(
    prod_total * 0.18
  ).toFixed(2)}`;

  document.querySelector(
    ".shipping span"
  ).textContent = `$${localStorage.getItem("shi")}`;

  document.querySelector(".totals span").textContent = `$${(
    +subtotal.textContent.slice(1) +
    +tax.textContent.slice(1) +
    +shipping.textContent.slice(1)
  ).toFixed(2)}`;
};
