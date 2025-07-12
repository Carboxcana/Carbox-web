document.addEventListener('DOMContentLoaded', function() {

    try {
        // --- INICIALIZÁCIA SWIPER SLIDEROV ---
        if (typeof Swiper !== 'undefined') {
            if (document.querySelector('.hero-swiper')) {
                new Swiper('.hero-swiper', {
                    loop: true,
                    effect: 'fade',
                    fadeEffect: { crossFade: true },
                    autoplay: { delay: 4000, disableOnInteraction: false },
                    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
                });
            }

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

    } catch (e) {
        console.error("Chyba v hlavnom skripte:", e);
    }
});