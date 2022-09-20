const button = document.querySelector(".button");
const giriş = document.querySelector(".giriş");
const liste = document.querySelector(".liste ul");
let total = 0;
let complated = 0;

button.onclick = function () {
  const veri = {
    id: new Date().getTime(),
    complet: false,
    text: giriş.value,
  };

  const { id, complet, text } = veri;
  const li = document.createElement("li");
  li.setAttribute("id", id);

  // complet && li.classList.add("checked");

  const okIcon = document.createElement("i");
  okIcon.setAttribute("class", "fas fa-check");
  li.appendChild(okIcon);
  console.log(okIcon);
  //? todo basligi icin bir p elementi ve yazi dugumu olusturarak li'ye bagla
  const p = document.createElement("p");
  const pTextNode = document.createTextNode(text);
  p.appendChild(pTextNode);
  li.appendChild(p);

  //? delete ikonu olustur ve li elementine bagla
  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fas fa-trash");
  li.appendChild(deleteIcon);

  //? meydana gelen li elementini ul'ye child olarak ata
  liste.appendChild(li);

  liste.onclick = function (e) {
    console.log(e);
    if (e.target.classList[1] === "fa-check") {
      e.path[1].remove();
      console.log(e.path[1]);
    }
    console.log(e.target);
  };
};
