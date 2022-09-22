const satıs = document.querySelector(".satıs");
let shi = 15;
let ürünler = {
  ürün1: 55,
  ürün2: 44,
  ürün3: 22,
  ürün4: 33,
  ürün5: 11,
};
window.onload = function (e) {
  
  localStorage.setItem("ürünler", ürünler);
  localStorage.setItem("shi", shi);

  let eleman_say =
    e.target.doctype.nextSibling.children[1].children[1].children[1].children;

  for (i of eleman_say) {
    let bosluk = i.className.indexOf(" ");
    if (i.className.indexOf("ürün") == 0) {
      document.querySelector(
        `.${i.className.slice(0, bosluk)} .fiyat p`
      ).textContent = `$${ürünler[i.className.slice(0, bosluk)]}`;
      document.querySelector(
        `.${i.className.slice(0, bosluk)} span`
      ).textContent = `$${(ürünler[i.className.slice(0, bosluk)] * 1.1).toFixed(
        2
      )}`;
    } else if (i.className.indexOf("total") == 0) {
      let prod = 0;

      for (i of eleman_say) {
        if (i.className.indexOf("ürün") == 0) {
          let fiyat =
            i.children[1].children[0].children[1].children[0].innerText;
          let adet =
            i.children[1].children[1].children[0].children[1].innerText;
          if (fiyat.slice(0, 1) == "$") {
            let bosluk = i.className.indexOf(" ");
            prod += Number(fiyat.slice(1) * adet);
            document.querySelector(
              `.${i.className.slice(0, bosluk)} .ekle_cıkar span`
            ).textContent = `${Number(fiyat.slice(1) * adet)}`;
          }
        }
      }
      const sub = document.querySelector(`.${i.className} .subtotal span`);
      const tax = document.querySelector(`.${i.className} .tax span`);
      const ship = document.querySelector(`.${i.className} .shipping span`);
      const tot = document.querySelector(`.${i.className} .totals span`);
      sub.textContent = `$${prod.toFixed(2)}`;
      tax.textContent = `$${(prod * 0.18).toFixed(2)}`;
      ship.textContent = `$${shi}`;
      tot.textContent = `$${(
        Number(prod) +
        Number(prod * 0.18) +
        Number(shi)
      ).toFixed(2)}`;
    }
  }
};

satıs.onclick = function (e) {
  let adet = e.path[1].children[1].innerText;
  let konum = "." + e.path[2].classList[1];
  let konumlar = document.querySelector(`${konum} div p`);

  let tik = e.path[0].innerText;
  let eleman_say =
    e.view.document.children[0].children[1].children[1].children[1].children;

  if (tik == "-") {
    if (adet > 1) {
      konumlar.innerText--;
    } else if (adet == 1) {
      let bosluk = e.path[4].className.indexOf(" ");
      let conf = confirm("Ürünü listeden kaldırmak istiyormusunuz?");
      if (conf) {
        document
          .querySelector(`.${e.path[4].className.slice(0, bosluk)}`)
          .remove();
      }
    }
  } else if (tik == "+") {
    konumlar.innerText++;
  } else if (tik == "Remove") {
    let bosluk = e.path[3].className.indexOf(" ");
    let conf = confirm("Ürünü listeden kaldırmak istiyormusunuz?");
    if (conf) {
      document
        .querySelector(`.${e.path[3].className.slice(0, bosluk)}`)
        .remove();
    }
  }

  const prod2 = function (a) {
    return document.querySelector(a).innerText;
  };

  for (i of eleman_say) {
    let bosluk = i.className.indexOf(" ");
    if (i.className.indexOf("ürün") == 0) {
      document.querySelector(
        `.${i.className.slice(0, bosluk)} .fiyat p`
      ).textContent = `$${ürünler[i.className.slice(0, bosluk)]}`;
      document.querySelector(
        `.${i.className.slice(0, bosluk)} span`
      ).textContent = `$${(ürünler[i.className.slice(0, bosluk)] * 1.1).toFixed(
        2
      )}`;
    } else if (i.className.indexOf("total") == 0) {
      let prod = 0;

      for (i of eleman_say) {
        if (i.className.indexOf("ürün") == 0) {
          let fiyat =
            i.children[1].children[0].children[1].children[0].innerText;
          let adet =
            i.children[1].children[1].children[0].children[1].innerText;
          if (fiyat.slice(0, 1) == "$") {
            let bosluk = i.className.indexOf(" ");
            prod += Number(fiyat.slice(1) * adet);
            document.querySelector(
              `.${i.className.slice(0, bosluk)} .ekle_cıkar span`
            ).textContent = `${Number(fiyat.slice(1) * adet)}`;
          }
        }
      }
      const sub = document.querySelector(`.${i.className} .subtotal span`);
      const tax = document.querySelector(`.${i.className} .tax span`);
      const ship = document.querySelector(`.${i.className} .shipping span`);
      const tot = document.querySelector(`.${i.className} .totals span`);
      sub.textContent = `$${prod.toFixed(2)}`;
      tax.textContent = `$${(prod * 0.18).toFixed(2)}`;
      ship.textContent = `$${shi}`;
      tot.textContent = `$${(
        Number(prod) +
        Number(prod * 0.18) +
        Number(shi)
      ).toFixed(2)}`;
    }
  }
};
