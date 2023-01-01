"use strict";

const servicesTabs = document.querySelectorAll(".services-item");
const servicesContent = document.querySelectorAll(".services-info");

servicesTabs.forEach((item) => {
  item.addEventListener("click", () => {
    let currentTab = item;
    let tabId = currentTab.getAttribute("data-tab");
    let currentContent = document.querySelector(tabId);

    servicesTabs.forEach((item) => {
      item.classList.remove("services-item-active");
    });

    servicesContent.forEach((item) => {
      item.classList.remove("services-info-active");
    });

    currentTab.classList.add("services-item-active");
    currentContent.classList.add("services-info-active");
  });
});

const workTabs = document.querySelectorAll(".work-filter-link");
const workContent = document.querySelectorAll(".work-item");
const workTabAll = document.querySelector(".work-tab-all");

workTabAll.addEventListener("click", hiddenItemsRemove);

function showButton() {
  if (workTabAll.classList.contains("work-filter-link-active")) {
    loadBtn.classList.add("button-load-more-active");
  } else {
    loadBtn.classList.remove("button-load-more-active");
  }
}

workTabs.forEach((item) => {
  item.addEventListener("click", () => {
    let currentTab = item;
    let tabId = currentTab.getAttribute("data-tab");
    let currentContent = document.querySelectorAll(tabId);

    workTabs.forEach((item) => {
      item.classList.remove("work-filter-link-active");
    });

    workContent.forEach((item) => {
      item.classList.remove("work-item-active");
    });

    currentTab.classList.add("work-filter-link-active");
    currentContent.forEach((item) => {
      item.classList.add("work-item-active");
    });

    showButton();
  });
});

const loadBtn = document.querySelector(".button-load-more");
const workList = document.querySelector(".work-list");
const workItemMore = document.querySelectorAll(".work-item-more");

function hiddenItemsRemove() {
  workItemMore.forEach((item) => {
    item.remove();
  });
}

hiddenItemsRemove();

loadBtn.addEventListener("click", load);

function load() {
  workItemMore.forEach((item) => {
    item.classList.add("work-item-active");
    workList.append(item);
  });

  loadBtn.classList.remove("button-load-more-active");
}

const reviewsContent = document.querySelectorAll(".reviews-content");
const buttonsArrow = document.querySelectorAll(".reviews-button");
const slideImages = document.querySelectorAll(".reviews-slide-item");

let currentIndex = 0;

function updatePagination() {
  slideImages.forEach((image) => {
    image.classList.remove("reviews-slide-item-active");
  });

  slideImages[currentIndex].classList.add("reviews-slide-item-active");

  reviewsContent.forEach((content) => {
    content.classList.remove("reviews-content-active");
  });

  let currentImg = slideImages[currentIndex].getAttribute("data-slide");
  let currentContent = document.querySelector(currentImg);
  currentContent.classList.add("reviews-content-active");
}

buttonsArrow.forEach((button) => button.addEventListener("click", scroll));

function scroll(event) {
  if (event.target.classList.contains("reviews-button-next")) {
    if (currentIndex < slideImages.length - 1) {
      currentIndex += 1;
    } else {
      currentIndex = 0;
    }
  }

  if (event.target.classList.contains("reviews-button-prev")) {
    if (currentIndex != 0) {
      currentIndex -= 1;
    } else {
      currentIndex = slideImages.length - 1;
    }
  }

  updatePagination();
}

slideImages.forEach((image) => {
  image.addEventListener("click", () => {
    currentIndex = [...slideImages].findIndex((item) => item === image);

    updatePagination();
  });
});
