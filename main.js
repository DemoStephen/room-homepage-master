const showSideBar = document.querySelector("[data-showSideBar]");
const sideBar = document.querySelector("[data-sideBar]");
const hideSideBar = document.querySelector("[data-hideSideBar]");
showSideBar.addEventListener("click", (event) => {
  sideBar.classList.remove("d-none");
});
hideSideBar.addEventListener("click", (event) => {
  sideBar.classList.add("d-none");
});

const fwdChangeImage = document.querySelector("[data-fwdChangeImage]");
const bwdChangeImage = document.querySelector("[data-bwdChangeImage]");
const changeBg = document.querySelector("[data-changeBg]");
const h1Element = document.querySelector("[data-h1Element]");
const pElement = document.querySelector("[data-pElement]");

const data = [
  {
    url: "./assets/images/desktop-image-hero-1.jpg",
    url2: "./assets/images/mobile-image-hero-1.jpg",
    h1: "Discover innovative ways to decorate",
    p: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    url: "./assets/images/desktop-image-hero-2.jpg",
    url2: "./assets/images/mobile-image-hero-2.jpg",
    h1: "We are available all across the globe",
    p: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    url: "./assets/images/desktop-image-hero-3.jpg",
    url2: "./assets/images/mobile-image-hero-3.jpg",
    h1: "Manufactured with the best materials",
    p: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

function setChange() {
  h1Element.innerText = `${data[value].h1}`;
  pElement.innerText = `${data[value].p}`;
  changeBg.setAttribute(
    "style",
    `--bgImgDesk: url('${data[value].url}'); --bgImgMobile: url('${data[value].url2}`
  );
}
let value = 0;
fwdChangeImage.addEventListener("click", (event) => {
  event.preventDefault();
  if (value === 2) {
    changeBg.style.backgroundImage = data[value];
    return (value = 2);
  }
  value++;
  setChange();
});
bwdChangeImage.addEventListener("click", (event) => {
  event.preventDefault();
  if (value === 0) {
    changeBg.style.backgroundImage = data[value];
    return (value = 0);
  }
  value--;
  setChange();
});
