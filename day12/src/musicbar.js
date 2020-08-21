const start = document.querySelector(".js-start"),
  input = document.querySelector("input");

const likebtn = document.querySelector(".setbtn-like"),
  heart = document.querySelector(".fa-heart"),
  num = document.querySelector(".js-number");

function handleChange() {
  const value = input.value;
  const minTrans = Math.floor(value / 60),
    secTrans = Math.floor(value % 60);
  start.innerText = `${minTrans}:${secTrans < 10 ? `0${secTrans}` : secTrans}`;
}

function handleClick() {
  if (num.innerText === "212 971") {
    heart.style.color = "red";
    num.style.color = "black";
    num.innerText = "212 972";
  } else if (num.innerText === "212 972") {
    heart.style.color = "black";
    num.style.color = "#c1bec3";
    num.innerText = "212 971";
  }
}

input.addEventListener("input", handleChange);
likebtn.addEventListener("click", handleClick);
