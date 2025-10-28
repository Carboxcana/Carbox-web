document.addEventListener('DOMContentLoaded', function() {

    // --- INICIALIZÁCIA SWIPER SLIDEROV ---
    
    // Inicializácia pre hlavný banner na úvodnej stránke
    if (document.querySelector('.hero-swiper')) {
        new Swiper('.hero-swiper', {
            loop: true,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            autoplay: { delay: 4000, disableOnInteraction: false },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        });
    }

    // NOVÉ: Inicializácia pre galériu dielne
    if (document.querySelector('.workshop-swiper')) {
        new Swiper('.workshop-swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 16,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30
                }
            }
        });
    }

    // Inicializácia pre galérie na podstránkach (ak existujú)
    if (document.querySelector('.gallery-swiper')) {
        new Swiper('.gallery-swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: { delay: 4000, disableOnInteraction: false },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 }
            }
        });
    }

    // NOVÉ: Inicializácia GLightbox pre zväčšovanie obrázkov
    if (typeof GLightbox !== 'undefined') {
        const lightbox = GLightbox({
            selector: '.glightbox',
            loop: true,
            touchNavigation: true
        });
    }

    // --- LOGIKA PRE MOBILNÉ MENU ---
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('menu-open');
        });
        mobileMenu.addEventListener('click', function(event) {
            if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON') {
                mobileMenu.classList.remove('menu-open');
            }
        });
    }

    // --- ZIMNÁ AKCIA POP-UP ---
    const winterPopup = document.getElementById('winter-popup');
    if (winterPopup) {
        // Skontroluj, či už bol pop-up zobrazený v tejto session
        const popupShown = sessionStorage.getItem('winterPopupShown');
        
        if (!popupShown) {
            setTimeout(function() {
                winterPopup.classList.add('show');
                sessionStorage.setItem('winterPopupShown', 'true');
            }, 2000);
        }
        
        // Zatvorenie pop-upu kliknutím mimo obsahu
        winterPopup.addEventListener('click', function(e) {
            if (e.target === winterPopup) {
                closeWinterPopup();
            }
        });
    }

});

// Globálna funkcia pre zatvorenie pop-upu
function closeWinterPopup() {
    const winterPopup = document.getElementById('winter-popup');
    if (winterPopup) {
        winterPopup.classList.remove('show');
    }
}
