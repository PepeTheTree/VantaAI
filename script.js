// Optimized VantaAI Website JavaScript - Performance Focused

// Configuration for performance
const CONFIG = {
    ENABLE_PARTICLES: window.innerWidth > 768, // Disable on mobile
    PARTICLE_COUNT: window.innerWidth > 1200 ? 20 : 10,
    NEURAL_NODES: window.innerWidth > 1200 ? 30 : 15,
    ANIMATION_FPS: 30, // Limit FPS
    MEMORY_FRAGMENTS_INTERVAL: 5000 // Less frequent
};

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized boot sequence
function showBootSequence() {
    const loadingScreen = document.getElementById('loading-screen');
    const bootContainer = document.querySelector('.boot-sequence');
    const progressBar = document.querySelector('.boot-progress-bar');

    if (!loadingScreen) return;

    const bootMessages = [
        'Initializing VantaAI...',
        'Loading neural cores...',
        'Activating local processing...',
        'Establishing privacy protocols...',
        'VantaAI ready.'
    ];

    let messageIndex = 0;

    function showNextMessage() {
        if (messageIndex < bootMessages.length) {
            const line = document.createElement('div');
            line.className = 'boot-line';
            line.textContent = `> ${bootMessages[messageIndex]}`;
            bootContainer.appendChild(line);

            const progress = ((messageIndex + 1) / bootMessages.length) * 100;
            progressBar.style.width = progress + '%';

            messageIndex++;
            setTimeout(showNextMessage, 200); // Faster boot
        } else {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    initializeOptimizedEffects();
                }, 300);
            }, 500);
        }
    }

    setTimeout(showNextMessage, 300);
}

// Optimized neural canvas with reduced complexity
function initOptimizedNeuralCanvas() {
    if (!CONFIG.ENABLE_PARTICLES) return;

    const canvas = document.getElementById('neural-canvas');
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    const neurons = [];
    const connections = [];

    // Fewer neurons for better performance
    for (let i = 0; i < CONFIG.NEURAL_NODES; i++) {
        neurons.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 1,
            vy: (Math.random() - 0.5) * 1,
            size: Math.random() * 2 + 1
        });
    }

    // Fewer connections
    for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
            if (Math.random() < 0.05) { // Reduced connection probability
                connections.push({ from: i, to: j });
            }
        }
    }

    let lastTime = 0;
    const targetFPS = CONFIG.ANIMATION_FPS;
    const interval = 1000 / targetFPS;

    function animateNeural(currentTime) {
        if (currentTime - lastTime < interval) {
            requestAnimationFrame(animateNeural);
            return;
        }

        lastTime = currentTime;

        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        // Draw connections with reduced alpha
        ctx.strokeStyle = 'rgba(169, 77, 240, 0.05)';
        ctx.lineWidth = 1;

        connections.forEach(conn => {
            const from = neurons[conn.from];
            const to = neurons[conn.to];
            const distance = Math.sqrt((to.x - from.x) ** 2 + (to.y - from.y) ** 2);

            if (distance < 150) { // Reduced connection distance
                ctx.globalAlpha = (150 - distance) / 150 * 0.3;
                ctx.beginPath();
                ctx.moveTo(from.x, from.y);
                ctx.lineTo(to.x, to.y);
                ctx.stroke();
            }
        });

        // Draw neurons
        neurons.forEach(neuron => {
            neuron.x += neuron.vx;
            neuron.y += neuron.vy;

            if (neuron.x < 0 || neuron.x > window.innerWidth) neuron.vx *= -1;
            if (neuron.y < 0 || neuron.y > window.innerHeight) neuron.vy *= -1;

            ctx.globalAlpha = 0.4;
            ctx.fillStyle = '#a94df0';
            ctx.beginPath();
            ctx.arc(neuron.x, neuron.y, neuron.size, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(animateNeural);
    }

    requestAnimationFrame(animateNeural);
}

// Optimized particle system
function initOptimizedParticles() {
    if (!CONFIG.ENABLE_PARTICLES) return;

    const container = document.querySelector('.particles');
    if (!container) return;

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        container.appendChild(particle);

        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 6000);
    }

    setInterval(createParticle, 1000); // Less frequent
}

// Optimized memory fragments
function createOptimizedMemoryFragments() {
    const fragments = [
        'processing locally...',
        'learning patterns...',
        'building memories...',
        'evolving traits...'
    ];

    function createFragment() {
        const fragment = document.createElement('div');
        fragment.className = 'memory-fragment';
        fragment.textContent = fragments[Math.floor(Math.random() * fragments.length)];
        fragment.style.top = Math.random() * 100 + '%';
        fragment.style.left = '-200px';
        document.body.appendChild(fragment);

        setTimeout(() => {
            if (fragment.parentNode) {
                fragment.remove();
            }
        }, 15000);
    }

    setInterval(createFragment, CONFIG.MEMORY_FRAGMENTS_INTERVAL);
}

// Initialize optimized effects
function initializeOptimizedEffects() {
    initOptimizedNeuralCanvas();
    initOptimizedParticles();
    createOptimizedMemoryFragments();
}

// Main initialization with performance focus
document.addEventListener('DOMContentLoaded', function () {
    // Disable animations on low-end devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        CONFIG.ENABLE_PARTICLES = false;
        CONFIG.NEURAL_NODES = 10;
    }

    showBootSequence();

    // Essential functionality only
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(otherItem => otherItem.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // Optimized scroll handler
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    const scrollHandler = throttle(() => {
        const scrollTop = window.pageYOffset;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    }, 100);

    window.addEventListener('scroll', scrollHandler, { passive: true });

    // Optimized resize handler
    const resizeHandler = debounce(() => {
        const canvas = document.getElementById('neural-canvas');
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }, 250);

    window.addEventListener('resize', resizeHandler, { passive: true });

    // Simple typing animation
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        const messages = [
            "Local AI processing...",
            "Privacy-first design...",
            "Emotional intelligence...",
            "Your data stays private..."
        ];

        let messageIndex = 0;

        function typeMessage() {
            typingElement.textContent = messages[messageIndex];
            messageIndex = (messageIndex + 1) % messages.length;
        }

        typeMessage();
        setInterval(typeMessage, 3000);
    }

    // Email modal (simplified)
    window.showEmailModal = function () {
        const modal = document.querySelector('.modal-overlay');
        if (modal) {
            modal.classList.add('active');
            setTimeout(() => modal.classList.add('show'), 10);
        }
    };

    window.hideEmailModal = function () {
        const modal = document.querySelector('.modal-overlay');
        if (modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.classList.remove('active'), 300);
        }
    };
});
