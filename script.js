// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Random color shifts for particles
function randomColorShift() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        const colors = ['#ff00ff', '#00ffff', '#ff0080', '#0080ff', '#80ff00'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = randomColor;
        particle.style.boxShadow = `0 0 10px ${randomColor}`;
    });
}

// Interactive hover effects for particles
function addMouseInteraction() {
    document.addEventListener('mousemove', function(e) {
        const particles = document.querySelectorAll('.particle');
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        particles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            const particleX = rect.left + rect.width / 2;
            const particleY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt(
                Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2)
            );
            
            if (distance < 100) {
                particle.style.transform = `scale(${1 + (100 - distance) / 200})`;
            } else {
                particle.style.transform = 'scale(1)';
            }
        });
    });
}

// Smooth scrolling for any internal links (if you add them later)
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add typing effect to subtitle (optional enhancement)
function addTypingEffect() {
    const subtitle = document.querySelector('.subtitle');
    const originalText = subtitle.textContent;
    let index = 0;
    
    subtitle.textContent = '';
    
    function typeText() {
        if (index < originalText.length) {
            subtitle.textContent += originalText.charAt(index);
            index++;
            setTimeout(typeText, 50);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeText, 1000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    addMouseInteraction();
    addSmoothScrolling();
    
    // Optional: Uncomment the line below to add typing effect
    // addTypingEffect();
    
    // Change particle colors every 5 seconds
    setInterval(randomColorShift, 5000);
    
    // Add some sparkle to feature items on hover
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.5)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
});

// Optional: Add a loading animation
function showLoadingAnimation() {
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    // Fade in the content
    setTimeout(() => {
        container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
}

// Optional: Call loading animation
// showLoadingAnimation();