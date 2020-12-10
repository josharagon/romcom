// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = {};
var title = document.querySelector('.cover-title');
var image = document.querySelector('.cover-image');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');


// Add your event listeners here 👇
window.addEventListener('load', helper);
randomCoverButton.addEventListener('click', helper);
console.log(title.innerText);


// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomTitle() {
  var index = getRandomIndex(titles);
  return titles[index];
}

function getRandomImage() {
  var index = getRandomIndex(covers);
  return covers[index];
}

function getRandomTagline() {
  var index = getRandomIndex(descriptors);
  var index2 = getRandomIndex(descriptors);
  if (index === index2) {
    index2 = getRandomIndex(descriptors)
  }
  return descriptors[index];
}

function helper() {
  title.innerText = getRandomTitle();
  image.src = getRandomImage();
  tagline1.innerText = getRandomTagline();
  tagline2.innerText = getRandomTagline();
  currentCover = new Cover(image.src, title.innerText, tagline1.innerText, tagline2.innerText);
}
