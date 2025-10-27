document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    console.log("functionP.js cargado y listo");

    const checkReady = setInterval(() => {
      const carouselContainer = document.querySelector(".carousel-container");
      const slides = document.querySelectorAll(".carousel-slide");

      if (carouselContainer && slides.length > 0) {
        clearInterval(checkReady);
        iniciarFunciones();
      }
    }, 300);

    function iniciarFunciones() {
      console.log("Iniciando scripts...");

      /* ======CARRUSEL DEL BANNER ====== */
      const carouselContainer = document.querySelector(".carousel-container");
      const slides = document.querySelectorAll(".carousel-slide");
      const totalSlides = slides.length;
      const nextBtn = document.querySelector(".next-btn");
      const prevBtn = document.querySelector(".prev-btn");
      const dotsContainer = document.querySelector(".carousel-dots");

      let currentSlide = 1;
      let autoSlideInterval;
      const slideWidth = 100;

      const firstClone = slides[0].cloneNode(true);
      const lastClone = slides[totalSlides - 1].cloneNode(true);
      firstClone.id = "first-clone";
      lastClone.id = "last-clone";

      carouselContainer.appendChild(firstClone);
      carouselContainer.insertBefore(lastClone, slides[0]);

      const allSlides = document.querySelectorAll(".carousel-slide");
      carouselContainer.style.transform = `translateX(-${
        slideWidth * currentSlide
      }vw)`;

      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
          clearInterval(autoSlideInterval);
          showSlide(i + 1);
          startAutoSlide();
        });
        dotsContainer.appendChild(dot);
      }

      const dots = dotsContainer.querySelectorAll(".dot");

      function toggleButtons(disabled) {
        nextBtn.disabled = disabled;
        prevBtn.disabled = disabled;
        dots.forEach(
          (dot) => (dot.style.pointerEvents = disabled ? "none" : "auto")
        );
      }

      function showSlide(index) {
        toggleButtons(true);
          if (index < 0) {
            index = 0;
          } else if (index >= allSlides.length) {
            index = allSlides.length - 1;
          }//evita slide . h oinesoistentes

        currentSlide = index;
        carouselContainer.style.transition = "transform 0.5s ease";
        carouselContainer.style.transform = `translateX(-${
          slideWidth * currentSlide
        }vw)`;
        updateDots();
      }

      function changeSlide(dir) {
        clearInterval(autoSlideInterval);
        showSlide(currentSlide + dir);
        startAutoSlide();
      }

      carouselContainer.addEventListener("transitionend", () => {
        const current = allSlides[currentSlide];
        if (current.id === "first-clone") {
          carouselContainer.style.transition = "none";
          currentSlide = 1;
          carouselContainer.style.transform = `translateX(-${slideWidth * currentSlide}vw)`;
        }
        if (current.id === "last-clone") {
          carouselContainer.style.transition = "none";
          currentSlide = totalSlides;
          carouselContainer.style.transform = `translateX(-${slideWidth * currentSlide}vw)`;
        }
        toggleButtons(false);
      });

      function updateDots() {
        dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === currentSlide - 1);
        });
      }

      function startAutoSlide() {
        autoSlideInterval = setInterval(() => changeSlide(1), 10000);
      }

      showSlide(1);
      startAutoSlide();

      nextBtn.addEventListener("click", () => changeSlide(1));
      prevBtn.addEventListener("click", () => changeSlide(-1));

      // NEWS AND ANNOUNCEMENTS
      const isDesktop = () => window.innerWidth > 600;
      document.querySelectorAll(".news-card").forEach((card) => {
        if (isDesktop()) {
          card.addEventListener(
            "pointerenter",
            () => card.classList.add("flipped"),
            { passive: true }
          );
          card.addEventListener(
            "pointerleave",
            () => card.classList.remove("flipped"),
            { passive: true }
          );
        }
        card.addEventListener("click", () => card.classList.toggle("flipped"));
      });
    }
  });
});
