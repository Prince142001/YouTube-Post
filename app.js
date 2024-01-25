var swiper = new Swiper(".post-slide", {
  slidesPerView: "auto",
  spaceBetween: 15,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

let aboutPost = document.querySelector(".about-post");
aboutPost.addEventListener("click", () => {
  let moreContent = document.querySelector(".about-post .more-content");
  let computedStyle = window.getComputedStyle(moreContent);

  if (computedStyle.getPropertyValue("display") === "none") {
    moreContent.style.display = "inline"; // Use "block" instead of "inline"
    aboutPost.style.border = "0.1px solid #52525b";
    aboutPost.style.backgroundColor = "#cbd5e1";

    // Reset border and background color after 1 second
    setTimeout(() => {
      aboutPost.style.border = "0.1px solid white";
      aboutPost.style.backgroundColor = "initial";
    }, 500);
  } else {
    moreContent.style.display = "none";
    aboutPost.style.border = "0.1px solid #52525b";
    aboutPost.style.backgroundColor = "#cbd5e1";
    setTimeout(() => {
      aboutPost.style.border = "0.1px solid white";
      aboutPost.style.backgroundColor = "initial";
    }, 500);
  }
});

let postImages = document.querySelectorAll(".swiper-slide img");

postImages.forEach((postImage) => {
  postImage.addEventListener("click", () => {
    let computedStyle = window.getComputedStyle(postImage);

    if (computedStyle.getPropertyValue("object-fit") === "cover") {
      postImage.style.objectFit = "contain";
      // postImage.style.transition = "object-fit 3s linear";
    } else {
      postImage.style.objectFit = "cover";
    }
  });
});
