$(function () {
  const galleryContainer = $("#gallery-container");
  const lightbox = $("#lightbox");
  const lightboxImg = $("#lightbox img");
  let currentIndex = 0;
  const totalImages = 1000;

  // Dynamically generate gallery images with animation delay
  for (let i = 0; i < totalImages; i++) {
    const id = 106 + i;
    const delay = i * 50; // Staggered animation delay
    const image = $(`
    <div class="col-6 col-md-4 col-lg-3">
      <img src="https://picsum.photos/id/${id}/400/300" alt="Image ${
      i + 1
    }" class="img-fluid gallery-img" data-index="${i}" style="animation-delay:${delay}ms" />
    </div>
  `);
    galleryContainer.append(image);
  }

  // Open lightbox on image click
  $(document).on("click", ".gallery-img", function () {
    currentIndex = parseInt($(this).attr("data-index"));
    showImage(currentIndex);
    lightbox.addClass("active");
  });

  // Show image by index
  function showImage(index) {
    const img = $(`.gallery-img[data-index="${index}"]`);
    const src = img.attr("src");
    const alt = img.attr("alt");
    lightboxImg.attr("src", src);
    lightboxImg.attr("alt", alt);
  }

  // Navigation buttons
  $(".prev").click(function () {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
  });

  $(".next").click(function () {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  });

  // Close lightbox
  $(".close-btn").click(function () {
    lightbox.removeClass("active");
  });

  // Close lightbox on outside click
  lightbox.click(function (e) {
    if (e.target === this) {
      lightbox.removeClass("active");
    }
  });

  // Keyboard navigation
  $(document).keydown(function (e) {
    if (!lightbox.hasClass("active")) return;

    switch (e.key) {
      case "Escape":
        lightbox.removeClass("active");
        break;
      case "ArrowLeft":
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
        break;
      case "ArrowRight":
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
        break;
    }
  });
});

// Touch swipe support for mobile
let startX = 0;

$("#lightbox").on("touchstart", function (e) {
  startX = e.originalEvent.touches[0].clientX;
});

$("#lightbox").on("touchend", function (e) {
  let endX = e.originalEvent.changedTouches[0].clientX;
  let deltaX = endX - startX;

  if (Math.abs(deltaX) > 50) {
    if (deltaX > 0) showPrev();
    else showNext();
  }
});
