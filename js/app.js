const image = document.getElementById("productImg");
const btn = document.getElementsByClassName("btn");

btn[0].addEventListener("click", function () {
  image.src = "./img/acropora-muricata.jpeg";
});
btn[1].addEventListener("click", function () {
  image.src = "./img/coral-fragment.jpg";
});
btn[2].addEventListener("click", function () {
  image.src = "./img/coral-spider.jpeg";
});
