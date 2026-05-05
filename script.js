// P1 Vibes - Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar scroll effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Scrolled state
            navbar.classList.add('bg-primary/95', 'backdrop-blur-md', 'shadow-xl', 'border-b', 'border-gray-800');
            navbar.classList.remove('bg-transparent', 'py-2');
        } else {
            // Top state
            navbar.classList.remove('bg-primary/95', 'backdrop-blur-md', 'shadow-xl', 'border-b', 'border-gray-800');
            navbar.classList.add('bg-transparent');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Toggle icon
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('ri-close-line');
                icon.classList.add('ri-menu-4-line');
            } else {
                icon.classList.remove('ri-menu-4-line');
                icon.classList.add('ri-close-line');
            }
        });
    }

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('ri-close-line');
            icon.classList.add('ri-menu-4-line');
        });
    });
});

// 3. Modal Functionality (Global Scope to be called inline)
function toggleModal(modalID) {
    const modal = document.getElementById(modalID);
    if (modal) {
        if (modal.classList.contains('hidden')) {
            // Show modal
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        } else {
            // Hide modal
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    }
}
