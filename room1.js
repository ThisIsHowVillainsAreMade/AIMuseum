// SCROLL REVEAL ANIMATION
function scrollReveal() {
  // Declaring a reveal point 100px from top & bottom of the window
  const revealPoint = 70;
  // Declaring all pictures as element to be revealed
  const revealElements = document.querySelectorAll(".background");

  // Loop on all cards, to check if the top or the bottom of the element is inside the reveal area. If this is the case, the active class will be added to the element.
  for (let i = 0; i < revealElements.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = revealElements[i].getBoundingClientRect().top;
    const revealBottom = revealElements[i].getBoundingClientRect().bottom;
    if (revealTop < windowHeight - revealPoint && revealBottom > revealPoint) {
      revealElements[i].classList.add("active");
    } else {
      revealElements[i].classList.remove("active");
    }
  }
}

// Add an event listener to detect scrolling on page, launching the scroll reveal function.
window.addEventListener("scroll", scrollReveal);

// CREATE CARDS
const column1 = document.querySelector(".column1");
const column2 = document.querySelector(".column2");
const column3 = document.querySelector(".column3");
const column4 = document.querySelector(".column4");

const column1Array = [
  {
    // card1
    h2: "Lorem Ipsum",
    image: "./images/r1_img_1.png",
    height: "14rem",
  },
  {
    // card2
    h2: "Lorem Ipsum",
    image: "./images/r1_img_2.png",
    height: "19rem",
  },
  {
    // card3
    h2: "Lorem Ipsum",
    image: "./images/r1_img_3.png",
    height: "31rem",
  },
  {
    // card4
    h2: "Lorem Ipsum",
    image: "./images/r1_img_4.png",
    height: "23rem",
  },
  {
    // card5
    h2: "Lorem Ipsum",
    image: "./images/r1_img_5.png",
    height: "18rem",
  },
  {
    // card6
    h2: "Lorem Ipsum",
    image: "./images/r1_img_6.png",
    height: "29rem",
  },
  {
    // card7
    h2: "Lorem Ipsum",
    image: "./images/r1_img_7.png",
    height: "22rem",
  },
  {
    // card8
    h2: "Lorem Ipsum",
    image: "./images/r1_img_8.png",
    height: "16rem",
  },
  {
    // card9
    h2: "Lorem Ipsum",
    image: "./images/r1_img_9.png",
    height: "23rem",
  },
];

const column2Array = [
  {
    // card10
    h2: "Lorem Ipsum",
    image: "./images/r1_img_10.png",
    height: "19rem",
  },
  {
    // card11
    h2: "Lorem Ipsum",
    image: "./images/r1_img_11.png",
    height: "17rem",
  },
  {
    // card12
    h2: "Lorem Ipsum",
    image: "./images/r1_img_12.png",
    height: "19rem",
  },
  {
    // card13
    h2: "Lorem Ipsum",
    image: "./images/r1_img_13.png",
    height: "28rem",
  },
  {
    // card14
    h2: "Lorem Ipsum",
    image: "./images/r1_img_14.png",
    height: "19rem",
  },
  {
    // card15
    h2: "Lorem Ipsum",
    image: "./images/r1_img_15.png",
    height: "30rem",
  },
  {
    // card16
    h2: "Lorem Ipsum",
    image: "./images/r1_img_16.png",
    height: "16rem",
  },
  {
    // card17
    h2: "Lorem Ipsum",
    image: "./images/r1_img_1.png",
    height: "19rem",
  },
  {
    // card18
    h2: "Lorem Ipsum",
    image: "./images/r1_img_2.png",
    height: "28rem",
  },
];

const column3Array = [
  {
    // card19
    h2: "Lorem Ipsum",
    image: "./images/r1_img_3.png",
    height: "25rem",
  },
  {
    // card20
    h2: "Lorem Ipsum",
    image: "./images/r1_img_4.png",
    height: "21rem",
  },
  {
    // card21
    h2: "Lorem Ipsum",
    image: "./images/r1_img_5.png",
    height: "19rem",
  },
  {
    // card22
    h2: "Lorem Ipsum",
    image: "./images/r1_img_6.png",
    height: "21rem",
  },
  {
    // card23
    h2: "Lorem Ipsum",
    image: "./images/r1_img_7.png",
    height: "25rem",
  },
  {
    // card24
    h2: "Lorem Ipsum",
    image: "./images/r1_img_8.png",
    height: "17rem",
  },
  {
    // card25
    h2: "Lorem Ipsum",
    image: "./images/r1_img_9.png",
    height: "24rem",
  },
  {
    // card26
    h2: "Lorem Ipsum",
    image: "./images/r1_img_10.png",
    height: "24rem",
  },
  {
    // card27
    h2: "Lorem Ipsum",
    image: "./images/r1_img_11.png",
    height: "19rem",
  },
];

const column4Array = [
  {
    // card28
    h2: "Lorem Ipsum",
    image: "./images/r1_img_12.png",
    height: "19rem",
  },
  {
    // card29
    h2: "Lorem Ipsum",
    image: "./images/r1_img_13.png",
    height: "32rem",
  },
  {
    // card30
    h2: "Lorem Ipsum",
    image: "./images/r1_img_14.png",
    height: "25rem",
  },
  {
    // card31
    h2: "Lorem Ipsum",
    image: "./images/r1_img_15.png",
    height: "18rem",
  },
  {
    // card32
    h2: "Lorem Ipsum",
    image: "./images/r1_img_16.png",
    height: "19rem",
  },
  {
    // card33
    h2: "Lorem Ipsum",
    image: "./images/r1_img_1.png",
    height: "18rem",
  },
  {
    // card34
    h2: "Lorem Ipsum",
    image: "./images/r1_img_2.png",
    height: "28rem",
  },
  {
    // card35
    h2: "Lorem Ipsum",
    image: "./images/r1_img_3.png",
    height: "20rem",
  },
  {
    // card36
    h2: "Lorem Ipsum",
    image: "./images/r1_img_4.png",
    height: "16rem",
  },
];

function createCard(column, image, h2, height) {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.style.height = height;
  column.appendChild(newCard);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${image})`;
  cardImg.classList.add("background");
  newCard.appendChild(cardImg);

  cardTitle = document.createElement("h2");
  cardTitle.classList.add("title-s");
  cardTitle.innerHTML = h2;
  cardImg.appendChild(cardTitle);
}

for (let i = 0; i < column1Array.length; i++) {
  createCard(
    column1,
    column1Array[i].image,
    column1Array[i].h2,
    column1Array[i].height
  );
}

for (let i = 0; i < column2Array.length; i++) {
  createCard(
    column2,
    column2Array[i].image,
    column2Array[i].h2,
    column2Array[i].height
  );
}

for (let i = 0; i < column3Array.length; i++) {
  createCard(
    column3,
    column3Array[i].image,
    column3Array[i].h2,
    column3Array[i].height
  );
}

for (let i = 0; i < column4Array.length; i++) {
  createCard(
    column4,
    column4Array[i].image,
    column4Array[i].h2,
    column4Array[i].height
  );
}

// SMOOTH SCROLL ANIMATION
// const body = document.body,
//   jsScroll = document.getElementsByClassName("js-scroll")[0],
//   height = jsScroll.getBoundingClientRect().height - 1,
//   speed = 0.05;

// var offset = 0;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll() {
//   offset += (window.pageYOffset - offset) * speed;

//   var scroll = "translateY(-" + offset + "px) translateZ(0)";
//   jsScroll.style.transform = scroll;

//   raf = requestAnimationFrame(smoothScroll);
// }
// smoothScroll();
