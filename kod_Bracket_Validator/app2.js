const kontrolcü = (e) => {
  const ifade_girdi = ayırıcı(e);
  let ifade = ifade_girdi;
  let ifader_topla = "";
  let a = ifade.indexOf("[]");
  let b = ifade.indexOf("()");
  let c = ifade.indexOf("{}");
  while (a > -1 || b > -1 || c > -1) {
    if (a >= 0) {
      for (let i = -1; a > i; i) {
        console.log(ifade);
        ifader_topla += ifade.slice(0, a);
        ifader_topla += ifade.slice(a + 2);
        ifade = ifader_topla;
        ifader_topla = "";
        a = ifade.indexOf("[]");
        b = ifade.indexOf("()");
        c = ifade.indexOf("{}");
      }
    } else if (b >= 0) {
      for (let i = -1; b > i; i) {
        console.log(ifade);
        ifader_topla += ifade.slice(0, b);
        ifader_topla += ifade.slice(b + 2);
        ifade = ifader_topla;
        ifader_topla = "";
        a = ifade.indexOf("[]");
        b = ifade.indexOf("()");
        c = ifade.indexOf("{}");
      }
    } else if (c >= 0) {
      for (let i = -1; c > i; i) {
        console.log(ifade);
        ifader_topla += ifade.slice(0, c);
        ifader_topla += ifade.slice(c + 2);
        ifade = ifader_topla;
        ifader_topla = "";
        a = ifade.indexOf("[]");
        b = ifade.indexOf("()");
        c = ifade.indexOf("{}");
      }
    }
  }
  if (ifade == "") {
    console.log(`${ifade_girdi} doğru yazılmıştır.`);
  } else {
    console.log(`${ifade_girdi} hatalı yazılmıştır.`);
  }
};

function ayırıcı(a) {
  let veri = "";
  let isaret = ["(", "{", "[", ")", "}", "]"];
  for (i of a) {
    for (c of isaret) {
      if (i == c) {
        veri += i;
      }
    }
  }
  return veri;
}

kontrolcü("([]{[asdsa]})[asd]asd{asd{asasd}()}");
