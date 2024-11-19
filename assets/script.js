    // Animasi Ketikan
    const overlayText = "Hai👋, welcome to my website portfolio!";
    let index = 0;

    function typeOverlayText() {
      const typingElement = document.getElementById("overlay-typing");
      
      if (index < overlayText.length) {
        typingElement.textContent += overlayText.charAt(index);
        index++;
        setTimeout(typeOverlayText, 100);
      } else {
        setTimeout(() => {
          document.getElementById("overlay").style.display = "none";
          document.getElementById("main-content").classList.remove("hidden");
        }, 1000);
      }
    }

    window.onload = typeOverlayText;

    //overlayy animasi ketikan end

//buat slide down up portofolioku
    const portfolioLink = document.getElementById('portfolio-link');

    portfolioLink.addEventListener('click', function (e) {
      e.preventDefault();

      portfolioLink.classList.add('show');

      setTimeout(() => {
        portfolioLink.classList.remove('show');
        document.querySelector('#hero').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 500);
    });

//buat sembunyikan navbar 
    document.getElementById("nav-toggle").addEventListener("click", function () {
      const navContent = document.getElementById("nav-content");
      navContent.classList.toggle("hidden");

        if (!navContent.classList.contains("hidden")) {
        navContent.querySelectorAll('.slide-down').forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("show");
          }, index * 100);
        });
      } else {
        navContent.querySelectorAll('.slide-down').forEach(item => {
          item.classList.remove("show");
        });
      }
    });
//end sembunyikan navbar
//auto scrolling
document.querySelectorAll('#nav-content a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetID = this.getAttribute('href');
      const targetSection = document.querySelector(targetID);

      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
//end auto scrolling
//mulai animasi ketikan
const texts = [
    "Hai👋, welcome to my website portfolio!.",
    "Nice To Meet You😊.",
    "Can I Help You?🤔."
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deleteSpeed = 50;
  const pauseDuration = 1000;

  function type() {
    const typingText = document.getElementById("typing-text");
    const currentText = texts[textIndex];

    if (isDeleting) {
      typingText.textContent = currentText.substring(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(type, deleteSpeed);
      }
    } else {
      typingText.textContent = currentText.substring(0, charIndex++);
      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, pauseDuration);
      } else {
        setTimeout(type, typingSpeed);
      }
    }
  }

  // Mulai animasi mengetik
  type();

  //galery
  const galleryData = [
      { src: 'assets/unipress.jpg', title: 'PT Unipress' },
      { src: 'assets/Java Script Basic.jpg', title: 'Training Java Script Basic' },
      { src: 'assets/Project Aplikasi Berbasis Mobile.jpg', title: 'Mobile application project' },
      { src: 'assets/STTI Sony Sugema.jpg', title: 'STTI Sony Sugema' },
      { src: 'assets/Rapat Sosialisasi Senat.jpg', title: 'Senate outreach meeting' },
      { src: 'assets/B Teknologi.jpg', title: 'Kampus B Teknologi' },
      { src: 'assets/Makan Bersama Kampus B Teknologi.jpg', title: 'Dining event with Campus B Technology' },
      { src: 'assets/Fitnes Karawang.jpg', title: 'Fitnes Karawang' },
      { src: 'assets/Alumni MA Nihayatul Amal.jpg', title: 'Alumni MA Nihayatul Amal' },
      { src: 'assets/Pelatihan Bersama BLK.jpg', title: 'Training With BLK' },
      { src: 'assets/Wisuda Madrasah Aliyah.jpg', title: 'Wisuda Madrasah Aliyah' },
      { src: 'assets/Camp Gunung Putri.jpg', title: 'Camp Gunung Putri' },
      { src: 'assets/paranggombong.jpg', title: 'Camp Paranggombong' },
      { src: 'assets/Kebun Teh Lembang.jpg', title: 'Lembang Tea Garden' }
    ];

    const galleryContainer = document.getElementById('gallery-container');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('close-btn');

    galleryData.forEach(item => {
      const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item', 'relative');

      galleryItem.innerHTML = `
        <img src="${item.src}" alt="${item.title}" class="w-full h-auto rounded-lg shadow-lg cursor-pointer">
        <div class="title">${item.title}</div>
      `;

      galleryItem.querySelector('img').addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.src = item.src;
      });

      galleryContainer.appendChild(galleryItem);
    });

    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
//end galery

//Expertise js
function animateLogo(element) {
      if (element.classList.contains('small-logo')) {
        element.classList.add('fast-rotate');
      } else {
        element.classList.add('bouncing');
      }
      
      setTimeout(() => {
        element.classList.remove('fast-rotate');
        element.classList.remove('bouncing');
      }, 5000);
    }
//end Expertise