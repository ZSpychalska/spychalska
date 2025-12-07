// zmienne const

const btnNavOpen = document.querySelector(".navMobile__button");
const nav = document.querySelector(".nav");
const navElements = document.querySelectorAll(".nav__menu-element");
const btnNavClose = document.querySelector(".navMobile__button__close");

const projectsBox = document.querySelector(".projects__box");

const reviewsMenuArrows = document.querySelectorAll(".reviewsMenu__arrow");
const reviewsBox = document.querySelector(".reviewsBox");
const rewiewsMenuElementsBox = document.querySelector(".reviewsMenu__elements");

const formBtn = document.querySelectorAll(".contact-form__button")[0];
const formInputs = document.querySelectorAll(".contact-form__input");
const formAlerts = document.querySelectorAll(".contact-form__alert");
const formAccept = document.querySelector(".contact-infoBox");
const formAcceptClose = document.querySelector(".contact-info__close");

const faqElements = document.querySelectorAll(".faq-element");
const faqButtons = document.querySelectorAll(".faq-element-box");

const sectionTitle = document.querySelectorAll(".section_title");

// tablice

const project = {
  id: ["0", "1"],
  name: ["Kamieniarstwo", "Weterynaria"],
  img: ["dist/img/page1.png", "dist/img/page2.png"],
  alt: ["kamieniarstwo Jacek Spychalski", "gabinet weterynaryjny pionavet"],
  link: ["https://kamieniarstwospychalski.pl/", "https://pionavet.pl/"],
};

const review = {
  id: ["0", "1", "3", "4"],
  name: ["Basia", "Adam", "Kasia", "Olek"],
  text: [
    "Super!",
    "Polecam!",
    "awkdnaokwnoawn fawfoiwajfawf awjfiaojwfoijwa  aiwjfioajwfoijawm",
    "Woooooooooooooow ndwanawd iaiwjd w wwia",
  ],
};

// nawigacja

const openNav = () => {
  nav.style.right = 0;
};

const closeNav = () => {
  nav.style.right = "-200px";
};

btnNavOpen.addEventListener("click", openNav);
btnNavClose.addEventListener("click", closeNav);

navElements.forEach((e) => {
  e.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        closeNav();
      }, 300);
    }
  });
});

const clickOutsideNav = (e) => {
  if (
    e.target.classList.contains("nav__menu-element") ||
    e.target.classList.contains("navMobile__button__close") ||
    e.target.classList.contains("nav") ||
    e.target.classList.contains("navMobile__button") ||
    e.target.classList.contains("navMobile__button__close-element") ||
    e.target.classList.contains("navMobile__button-element")
  ) {
    return;
  } else {
    if (window.innerWidth <= 768) {
      closeNav();
    } else {
      return;
    }
  }
};

// projekty

const createNewProject = (pn) => {
  const newA = document.createElement("a");
  newA.classList.add("project");
  newA.setAttribute("href", project.link[pn]);
  newA.setAttribute("target", "_blank");

  const newImg = document.createElement("img");
  newImg.setAttribute("src", project.img[pn]);
  newImg.setAttribute("alt", project.alt[pn]);
  newImg.classList.add("project__img");

  const newTitle = document.createElement("p");
  newTitle.textContent = project.name[pn];
  newTitle.classList.add("project__title");

  const newBtn = document.createElement("div");
  newBtn.classList.add("project__btn");

  const newBtn_element1 = document.createElement("i");
  newBtn_element1.classList.add("fa-solid");
  newBtn_element1.classList.add("fa-arrow-right");
  newBtn_element1.classList.add("project__btn-arrow");

  const newBtn_element2 = document.createElement("div");
  newBtn_element2.classList.add("triangle__project-btn");

  const newBtn_element3 = document.createElement("div");
  newBtn_element3.classList.add("triangle__project-btn__2");

  newBtn.appendChild(newBtn_element1);
  newBtn.appendChild(newBtn_element2);
  newBtn.appendChild(newBtn_element3);

  newA.appendChild(newImg);
  newA.appendChild(newTitle);
  newA.appendChild(newBtn);

  projectsBox.appendChild(newA);
};

for (let i = 0; i < project.id.length; i++) {
  createNewProject(i);
}

// opinie

const createNewReview = (rn) => {
  const newArticle = document.createElement("article");
  newArticle.classList.add("review");

  const newNameBox = document.createElement("div");
  newNameBox.classList.add("review__name-box");

  const newName = document.createElement("p");
  newName.classList.add("review__name");
  newName.textContent = review.name[rn];

  const newText = document.createElement("div");
  newText.classList.add("review__text");
  newText.textContent = review.text[rn];

  const newElementMenu = document.createElement("div");
  newElementMenu.classList.add("reviewsMenu__element");

  newNameBox.appendChild(newName);

  newArticle.appendChild(newNameBox);
  newArticle.appendChild(newText);

  reviewsBox.appendChild(newArticle);

  rewiewsMenuElementsBox.appendChild(newElementMenu);
};

const reviewsMenu = (e) => {
  let activeElementNow = document.querySelectorAll(
    ".reviewsMenu__element--active"
  ).length;
  let reviewActive = document.querySelector(".review--active");
  let reviewLeft = document.querySelector(".review--left");
  let reviewRight = document.querySelector(".review--right");

  reviewActive.classList.remove("review--active");
  reviewLeft.classList.remove("review--left");
  reviewRight.classList.remove("review--right");

  if (e.target.classList.contains("reviewsMenu__arrow")) {
    if (Array.from(reviewsMenuArrows).indexOf(e.target) == 0) {
      if (activeElementNow == 1) {
        reviewsMenuElements.forEach((e) => {
          e.classList.add("reviewsMenu__element--active");
        });
        reviewsList[reviewsList.length - 1].classList.add("review--active");
        reviewsList[0].classList.add("review--right");
        reviewsList[reviewsList.length - 2].classList.add("review--left");
      } else {
        reviewsMenuElements[activeElementNow - 1].classList.remove(
          "reviewsMenu__element--active"
        );
        reviewsList[activeElementNow - 2].classList.add("review--active");
        reviewsList[activeElementNow - 1].classList.add("review--right");
        if (activeElementNow == 2) {
          reviewsList[reviewsList.length - 1].classList.add("review--left");
        } else {
          reviewsList[activeElementNow - 3].classList.add("review--left");
        }
      }
    } else {
      if (activeElementNow == reviewsMenuElements.length) {
        reviewsMenuElements.forEach((e) => {
          e.classList.remove("reviewsMenu__element--active");
        });

        reviewsMenuElements[0].classList.add("reviewsMenu__element--active");
        reviewsList[0].classList.add("review--active");
        reviewsList[reviewsList.length - 1].classList.add("review--left");
        reviewsList[1].classList.add("review--right");
      } else {
        reviewsMenuElements[activeElementNow].classList.add(
          "reviewsMenu__element--active"
        );

        reviewsList[activeElementNow].classList.add("review--active");
        reviewsList[activeElementNow - 1].classList.add("review--left");

        if (activeElementNow == reviewsMenuElements.length - 1) {
          reviewsList[0].classList.add("review--right");
        } else {
          reviewsList[activeElementNow + 1].classList.add("review--right");
        }
      }
    }
  } else {
    const selectedElement = Array.from(reviewsMenuElements).indexOf(e.target);

    if (activeElementNow - 1 < selectedElement) {
      // większe
      for (let i = activeElementNow; i <= selectedElement; i++) {
        reviewsMenuElements[i].classList.add("reviewsMenu__element--active");
      }
      reviewsList[selectedElement].classList.add("review--active");
      reviewsList[selectedElement - 1].classList.add("review--left");

      if (selectedElement == reviewsList.length - 1) {
        reviewsList[0].classList.add("review--right");
      } else {
        reviewsList[selectedElement + 1].classList.add("review--right");
      }
    } else if (activeElementNow - 1 > selectedElement) {
      // mniejsze
      for (let i = selectedElement + 1; i < activeElementNow; i++) {
        reviewsMenuElements[i].classList.remove("reviewsMenu__element--active");
      }

      reviewsList[selectedElement].classList.add("review--active");
      reviewsList[selectedElement + 1].classList.add("review--right");

      if (selectedElement == 0) {
        reviewsList[reviewsList.length - 1].classList.add("review--left");
      } else {
        reviewsList[selectedElement - 1].classList.add("review--left");
      }
    } else {
      reviewActive.classList.add("review--active");
      reviewLeft.classList.add("review--left");
      reviewRight.classList.add("review--right");
    }
  }
};

for (let i = 0; i < review.id.length; i++) {
  createNewReview(i);
}

const reviewsMenuElements = document.querySelectorAll(".reviewsMenu__element");
const reviewsList = document.querySelectorAll(".review");

reviewsList[0].classList.add("review--active");
reviewsMenuElements[0].classList.add("reviewsMenu__element--active");
reviewsList[reviewsList.length - 1].classList.add("review--left");
reviewsList[1].classList.add("review--right");

reviewsMenuArrows.forEach((e) => {
  e.addEventListener("click", reviewsMenu);
});

reviewsMenuElements.forEach((e) => {
  e.addEventListener("click", reviewsMenu);
});

// sprawdzanie formularz

const formCheck = (input) => {
  const inputId = Array.from(formInputs).indexOf(input.target);
  const inputTarget = input.target;

  input.target.addEventListener("keyup", () => {
    if (inputTarget.value == "") {
      formAlerts[inputId].textContent = "Pole nie może być puste";
      inputTarget.classList.add("contact-form__input--error");
    } else {
      formAlerts[inputId].textContent = "";
      inputTarget.classList.remove("contact-form__input--error");

      if (inputId == 1) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(inputTarget.value)) {
          inputTarget.classList.remove("contact-form__input--error");
        } else {
          formAlerts[inputId].textContent = "Wpisz poprawny adres email";
          inputTarget.classList.add("contact-form__input--error");
        }
      }
    }

    if (
      formInputs[0].value == "" ||
      formInputs[1].value == "" ||
      formInputs[1].classList.contains("contact-form__input--error")
    ) {
      formBtn.disabled = true;
    } else {
      formBtn.disabled = false;
    }
  });
};

formInputs.forEach((e) => {
  e.addEventListener("click", formCheck);
});

// FAQ

const openFAQ = (btn) => {
  btnNumber = Array.from(faqButtons).indexOf(btn.target);

  if (faqElements[btnNumber].classList.contains("faq-element--active")) {
    faqElements[btnNumber].classList.remove("faq-element--active");
  } else {
    faqElements.forEach((e) => {
      e.classList.remove("faq-element--active");
    });

    faqElements[btnNumber].classList.add("faq-element--active");
  }

  setTimeout(() => {
    faqElements[btnNumber].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, 300);
};

faqElements.forEach((e) => {
  e.addEventListener("click", openFAQ);
});

// stópka data

const footerDate = () => {
  const footer = document.querySelector(".footer__data");

  const date = new Date();
  const year = date.getFullYear();

  footer.textContent = year;
};

document.addEventListener("DOMContentLoaded", function () {
  const formTextarea = document.querySelector(".contact-form__message");
  if (formTextarea) {
    function autoResize() {
      this.style.height = "80px";
      this.style.height = this.scrollHeight + "px";
    }
    formTextarea.style.height = "80px";
    formTextarea.style.height = formTextarea.scrollHeight + "px";
    formTextarea.addEventListener("input", autoResize, false);
  }

  const urlParams = new URLSearchParams(window.location.search);
  const status = urlParams.get("status");

  if (status == "sukces") {
    formAccept.style.display = "block";

    document.documentElement.style.overflowY = "hidden";

    const scrollPosition = window.scrollY;
    formAccept.style.top = `${scrollPosition}px`;

    formAcceptClose.addEventListener("click", () => {
      formAccept.style.display = "none";
      document.documentElement.style.overflowY = "auto";
    });

    history.replaceState(null, "", window.location.pathname);
  }

  document.getElementById("header").style.marginTop = `${
    document.querySelector(".navBox").offsetHeight
  }px`;
});

// nawigacja dalej

const navStart = document
  .getElementById("skills")
  .getBoundingClientRect().bottom;
const navAboutme = document
  .getElementById("aboutme")
  .getBoundingClientRect().bottom;
const navProjects = document
  .getElementById("projects")
  .getBoundingClientRect().bottom;
const navReviews = document
  .getElementById("reviews")
  .getBoundingClientRect().bottom;
const navContact = document
  .getElementById("contact")
  .getBoundingClientRect().bottom;

document.addEventListener("scroll", function () {
  let scrollNowTop = window.scrollY;
  let scrollNowBottom = window.scrollY + window.innerHeight;
  let scrollNowMiddle = (scrollNowBottom + scrollNowTop) / 2;

  if (scrollNowMiddle < navStart) {
    navElements[0].classList.add("nav__menu-element__active");
    navElements[1].classList.remove("nav__menu-element__active");
  } else if (scrollNowMiddle > navStart && scrollNowMiddle <= navAboutme) {
    navElements[0].classList.remove("nav__menu-element__active");
    navElements[1].classList.add("nav__menu-element__active");
    navElements[2].classList.remove("nav__menu-element__active");

    sectionTitle[0].classList.add("section_title--active");
  } else if (scrollNowMiddle > navAboutme && scrollNowMiddle <= navProjects) {
    navElements[1].classList.remove("nav__menu-element__active");
    navElements[2].classList.add("nav__menu-element__active");
    navElements[3].classList.remove("nav__menu-element__active");

    sectionTitle[1].classList.add("section_title--active");
  } else if (scrollNowMiddle > navProjects && scrollNowMiddle <= navReviews) {
    navElements[2].classList.remove("nav__menu-element__active");
    navElements[3].classList.add("nav__menu-element__active");
    navElements[4].classList.remove("nav__menu-element__active");

    sectionTitle[2].classList.add("section_title--active");
  } else if (scrollNowMiddle > navReviews && scrollNowMiddle <= navContact) {
    navElements[3].classList.remove("nav__menu-element__active");
    navElements[4].classList.add("nav__menu-element__active");

    sectionTitle[3].classList.add("section_title--active");
  }
});

footerDate();
window.addEventListener("click", clickOutsideNav);
