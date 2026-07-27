document.addEventListener('DOMContentLoaded', function() {
    // List of names to cycle through
    const names = ['Phylip Genty', 'Adefunsho', 'Toluwani'];
    let currentNameIndex = 0;
    let text = names[currentNameIndex];
    
    const typedElement = document.getElementById('typed-name');
    const typeSpeed = 85;
    const deleteSpeed = 50;
    const pauseAfterTyped = 2000;
    const pauseAfterDeleted = 800;
    
    let index = 0;
    let isDeleting = false;
    let timeoutId = null;

    function typeWriter() {
        // If deleting, remove characters
        if (isDeleting) {
            typedElement.textContent = text.substring(0, index - 1);
            index--;
            
            if (index === 0) {
                // Finished erasing — move to next name
                isDeleting = false;
                // Cycle to the next name
                currentNameIndex = (currentNameIndex + 1) % names.length;
                text = names[currentNameIndex];
                // Reset index (already 0)
                // Pause before typing next name
                timeoutId = setTimeout(typeWriter, pauseAfterDeleted);
            } else {
                // Continue deleting
                timeoutId = setTimeout(typeWriter, deleteSpeed);
            }
            return;
        }

        // If typing, add characters
        if (index < text.length) {
            typedElement.textContent = text.substring(0, index + 1);
            index++;
            timeoutId = setTimeout(typeWriter, typeSpeed);
        } else {
            // We've typed everything — pause, then start deleting
            timeoutId = setTimeout(() => {
                isDeleting = true;
                typeWriter();
            }, pauseAfterTyped);
        }
    }

    // Start the typewriter loop
    typeWriter();
});

// ========== BACK TO TOP BUTTON ==========
const backToTop = document.getElementById('backToTop');

// Show/hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Smooth scroll to top when clicked
backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== FLOATING CTA BUTTON ==========
const floatingCta = document.getElementById('floatingCta');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        floatingCta.classList.add('show');
    } else {
        floatingCta.classList.remove('show');
    }
});