// CREATE CARDS
const column1 = document.querySelector(".column1");
const column2 = document.querySelector(".column2");
const column3 = document.querySelector(".column3");
const column4 = document.querySelector(".column4");

const columnArray = [
  {
    // card1
    colonne: 1,
    h2: "Lorem ipsum dolor sit am1",
    image: "./images/r1_img_1.png",
    height: "14rem",
    content:
      "1.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card2
    colonne: 1,
    h2: "Lorem Ipsum2",
    image: "./images/r1_img_2.png",
    height: "19rem",
    content:
      "2.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card3
    colonne: 1,
    h2: "Lorem Ipsum3",
    image: "./images/r1_img_3.png",
    height: "31rem",
    content:
      "3.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card4
    colonne: 1,
    h2: "Lorem Ipsum4",
    image: "./images/r1_img_4.png",
    height: "23rem",
    content:
      "4.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card5
    colonne: 1,
    h2: "Lorem Ipsum5",
    image: "./images/r1_img_5.png",
    height: "18rem",
    content:
      "5.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card6
    colonne: 1,
    h2: "Lorem Ipsum6",
    image: "./images/r1_img_6.png",
    height: "29rem",
    content:
      "6.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card7
    colonne: 1,
    h2: "Lorem Ipsum7",
    image: "./images/r1_img_7.png",
    height: "22rem",
    content:
      "7.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card8
    colonne: 1,
    h2: "Lorem Ipsum8",
    image: "./images/r1_img_8.png",
    height: "16rem",
    content:
      "8.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card9
    colonne: 1,
    h2: "Lorem Ipsum9",
    image: "./images/r1_img_9.png",
    height: "23rem",
    content:
      "9.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card10
    colonne: 2,
    h2: "Lorem Ipsum10",
    image: "./images/r1_img_10.png",
    height: "19rem",
    content:
      "10.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card11
    colonne: 2,
    h2: "Lorem Ipsum11",
    image: "./images/r1_img_11.png",
    height: "17rem",
    content:
      "11.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card12
    colonne: 2,
    h2: "Lorem Ipsum12",
    image: "./images/r1_img_12.png",
    height: "19rem",
    content:
      "12.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card13
    colonne: 2,
    h2: "Lorem Ipsum13",
    image: "./images/r1_img_13.png",
    height: "28rem",
    content:
      "13.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card14
    colonne: 2,
    h2: "Lorem Ipsum14",
    image: "./images/r1_img_14.png",
    height: "19rem",
    content:
      "14.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card15
    colonne: 2,
    h2: "Lorem Ipsum15",
    image: "./images/r1_img_15.png",
    height: "30rem",
    content:
      "15.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card16
    colonne: 2,
    h2: "Lorem Ipsum16",
    image: "./images/r1_img_16.png",
    height: "16rem",
    content:
      "16.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card17
    colonne: 2,
    h2: "Lorem Ipsum17",
    image: "./images/r1_img_1.png",
    height: "19rem",
    content:
      "17.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card18
    colonne: 2,
    h2: "Lorem Ipsum18",
    image: "./images/r1_img_2.png",
    height: "28rem",
    content:
      "18.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card19
    colonne: 3,
    h2: "Lorem Ipsum19",
    image: "./images/r1_img_3.png",
    height: "25rem",
    content:
      "19.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card20
    colonne: 3,
    h2: "Lorem Ipsum20",
    image: "./images/r1_img_4.png",
    height: "21rem",
    content:
      "20.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card21
    colonne: 3,
    h2: "Lorem Ipsum21",
    image: "./images/r1_img_5.png",
    height: "19rem",
    content:
      "21.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card22
    colonne: 3,
    h2: "Lorem Ipsum22",
    image: "./images/r1_img_6.png",
    height: "21rem",
    content:
      "22.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card23
    colonne: 3,
    h2: "Lorem Ipsum23",
    image: "./images/r1_img_7.png",
    height: "25rem",
    content:
      "23.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card24
    colonne: 3,
    h2: "Lorem Ipsum24",
    image: "./images/r1_img_8.png",
    height: "17rem",
    content:
      "24.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card25
    colonne: 3,
    h2: "Lorem Ipsum25",
    image: "./images/r1_img_9.png",
    height: "24rem",
    content:
      "25.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card26
    colonne: 3,
    h2: "Lorem Ipsum26",
    image: "./images/r1_img_10.png",
    height: "24rem",
    content:
      "26.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card27
    colonne: 3,
    h2: "Lorem Ipsum27",
    image: "./images/r1_img_11.png",
    height: "19rem",
    content:
      "27.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card28
    colonne: 4,
    h2: "Lorem Ipsum28",
    image: "./images/r1_img_12.png",
    height: "19rem",
    content:
      "28.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card29
    colonne: 4,
    h2: "Lorem Ipsum29",
    image: "./images/r1_img_13.png",
    height: "32rem",
    content:
      "29.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card30
    colonne: 4,
    h2: "Lorem Ipsum30",
    image: "./images/r1_img_14.png",
    height: "25rem",
    content:
      "30.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card31
    colonne: 4,
    h2: "Lorem Ipsum31",
    image: "./images/r1_img_15.png",
    height: "18rem",
    content:
      "31.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card32
    colonne: 4,
    h2: "Lorem Ipsum32",
    image: "./images/r1_img_16.png",
    height: "19rem",
    content:
      "32.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card33
    colonne: 4,
    h2: "Lorem Ipsum33",
    image: "./images/r1_img_1.png",
    height: "18rem",
    content:
      "33.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card34
    colonne: 4,
    h2: "Lorem Ipsum34",
    image: "./images/r1_img_2.png",
    height: "28rem",
    content:
      "34.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card35
    colonne: 4,
    h2: "Lorem Ipsum35",
    image: "./images/r1_img_3.png",
    height: "20rem",
    content:
      "35.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    // card36
    colonne: 4,
    h2: "Lorem Ipsum36",
    image: "./images/r1_img_4.png",
    height: "16rem",
    content:
      "36.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

function createCard(column, image, h2, height) {
  if (column === 1) {
    selectedColumn = column1;
  } else if (column === 2) {
    selectedColumn = column2;
  } else if (column === 3) {
    selectedColumn = column3;
  } else {
    selectedColumn = column4;
  }
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.style.height = height;
  selectedColumn.appendChild(newCard);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${image})`;
  cardImg.classList.add("background");
  newCard.appendChild(cardImg);

  cardTitle = document.createElement("h2");
  cardTitle.classList.add("title-s");
  cardTitle.innerHTML = h2;
  cardImg.appendChild(cardTitle);
}

for (let i = 0; i < columnArray.length; i++) {
  createCard(
    columnArray[i].colonne,
    columnArray[i].image,
    columnArray[i].h2,
    columnArray[i].height
  );
}

// OPEN MODAL
const cards = document.querySelectorAll(".card");
const modal = document.querySelector(".rOne-modal");
const modalBackground = document.querySelector(".rOne-modal-background");
const modalBody = document.querySelector(".rOne-modal-body");
const modalTitle = document.querySelector(".rOne-modal-title");
const modalContent = document.querySelector(".rOne-modal-content");
const modalCloseButton = document.querySelector(".rOne-modal-closebutton");
const overlay = document.querySelector(".rOne-overlay");
const body = document.querySelector(".rOne");

// cards.onclick = function () {
//   modal.classList.add("modal-open");
//   modalBody.classList.add("modal-open");
// };

cards.forEach(function (card) {
  card.addEventListener("click", function (event) {
    modal.classList.add("modal-open");
    modalBody.classList.add("modal-open");
    overlay.classList.add("display-overlay");
    body.classList.add("no-scroll");
    console.log(event);
    console.log(event.srcElement.parentNode);
    // const url = event.srcElement.parentNode.style.backgroundImage;
    // modalBackground.style.backgroundImage = url;
    const title = event.srcElement.innerHTML;
    modalTitle.innerHTML = title;
    // chercher l'élément dans le tableau qui contient le titre
    const selectedObject = columnArray.find(
      (arrayElement) => arrayElement.h2 === title
    );
    modalBackground.style.backgroundImage = `url(${selectedObject.image})`;
    modalContent.innerHTML = selectedObject.content;
    console.log(selectedObject);
  });
});

modalCloseButton.addEventListener("click", function () {
  modal.classList.remove("modal-open");
  modal.classList.remove("modal-open");
  overlay.classList.remove("display-overlay");
  body.classList.remove("no-scroll");
});
