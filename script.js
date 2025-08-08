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
            slidesPerView: 1, // Na mobiloch sa zobrazí 1 fotka
            spaceBetween: 16,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // Zmena počtu fotiek podľa veľkosti obrazovky
            breakpoints: {
                640: { // pre tablety
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1024: { // pre desktopy
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
            selector: '.glightbox', // Hľadá všetky odkazy s touto triedou
            loop: true, // Umožní prechádzať galériou dookola
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

    // --- LOGIKA PRE OBJEDNÁVKOVÝ MODÁL ---
    const modal = document.getElementById('booking-modal');
    const closeModalBtn = document.querySelector('.modal-close-button');
    const openModalBtns = [
        document.getElementById('open-booking-modal-desktop'),
        document.getElementById('open-booking-modal-mobile'),
        document.getElementById('open-booking-modal-cta') 
    ];

    function openModal() {
        if (modal) modal.classList.add('modal-visible');
    }
    function closeModal() {
        if (modal) modal.classList.remove('modal-visible');
    }

    openModalBtns.forEach(btn => {
        if (btn) btn.addEventListener('click', openModal);
    });
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                closeModal();
            }
        });
    }
});