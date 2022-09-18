let score = 10;
let number = Number((Math.random() * 100).toFixed());
console.log(number);

const inpt = document.querySelector("input");
const button = document.querySelector(".check-btn");
const again = document.querySelector(".again-btn");
const yazı = document.querySelector(".msg");
console.log(button);
window.onload = function () {
  inpt.focus();
};
button.onclick = function () {
  if (inpt.value=="") {
    yazı.textContent = "Please enter a number";
  } else if (Number(inpt.value) > 100) {
    yazı.textContent = `${inpt.value} Sayısı 100'den Büyük.`;
    score -= 1;
  } else if (Number(inpt.value) < number) {
    yazı.textContent = `${inpt.value} Sayısından Büyük.`;
    score -= 1;
  } else if (Number(inpt.value) > number) {
    yazı.textContent = `${inpt.value} Sayısından Küçük.`;

    score -= 1;
  } else if (Number(inpt.value) === number) {
    yazı.textContent = "Kazandınız.";
    document.querySelector(".top-score").textContent = score;
    button.disabled = true;
    document.querySelector("body").style.background = "green";
    document.querySelector(".secret-number").textContent = number;
    inpt.disabled = true;
  }
  document.querySelector(".score").textContent = score;
  if (!score) {
    yazı.textContent = "Kaybettin.";
    button.disabled = true;
    document.querySelector("body").style.background = "red";
    document.querySelector(".secret-number").textContent = number;
    inpt.disabled = true;
  }
  inpt.value = "";
  inpt.focus();
};
again.onclick = function () {
  document.querySelector(".secret-number").textContent = "?";
  score = 10;
  document.querySelector(".score").textContent = score;
  inpt.value = "";
  document.querySelector(".top-score").textContent = 0;
  yazı.textContent = "Starting..";
  inpt.disabled = false;
  button.disabled = false;
  document.querySelector("body").style.background = "#2d3436";
  inpt.focus();
  number = Math.round(Math.random() * 100);
  console.log(number);
};
inpt.onkeyup = function (tuş) {
  if (tuş.code === "Enter") {
    button.onclick();
  }
};
