// VantaAI Website JavaScript

// Global variables
let scene, camera, renderer, globe, nodes = [], connections = [];
let neuralCanvas, neuralCtx;
let loadingComplete = false;

// Boot sequence messages
const bootMessages = [
    'Initializing VantaAI neural substrate...',
    'Loading emotional memory cores...',
    'Calibrating sentiment analysis engines...',
    'Establishing local GPU connections...',
    'Activating Vulkan compute shaders...',
    'Loading personality trait vectors...',
    'Initializing autonomous decision trees...',
    'Configuring privacy-first protocols...',
    'Synchronizing memory drift algorithms...',
    'Neural pathways established.',
    'Emotional awareness: ONLINE',
    'Local processing: ACTIVE',
    'VantaAI ready for interaction.'
];

// Memory fragments
const memoryFragments = [
    'remembering your favorite color...',
    'analyzing emotional patterns...',
    'storing conversation context...',
    'learning from interactions...',
    'building personal memories...',
    'evolving personality traits...',
    'processing sentiment data...',
    'updating behavioral models...',
    'strengthening neural pathways...',
    'calibrating emotional responses...'
];

// Loading Screen and Boot Sequence
function showBootSequence() {
    const loadingScreen = document.getElementById('loading-screen');
    const bootContainer = document.querySelector('.boot-sequence');
    const progressBar = document.querySelector('.boot-progress-bar');

    if (!loadingScreen) return;

    let messageIndex = 0;

    function showNextMessage() {
        if (messageIndex < bootMessages.length) {
            const line = document.createElement('div');
            line.className = 'boot-line';
            line.textContent = `> ${bootMessages[messageIndex]}`;
            line.style.animationDelay = '0s';
            bootContainer.appendChild(line);

            // Update progress bar
            const progress = ((messageIndex + 1) / bootMessages.length) * 100;
            progressBar.style.width = progress + '%';

            messageIndex++;

            // Scroll to bottom
            bootContainer.scrollTop = bootContainer.scrollHeight;

            setTimeout(showNextMessage, Math.random() * 300 + 100);
        } else {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    loadingComplete = true;
                    initializeBackgroundEffects();
                }, 500);
            }, 1000);
        }
    }

    setTimeout(showNextMessage, 500);
}

// Network Map Globe functionality
function initNetworkGlobe() {
    const container = document.getElementById('network-globe');
    if (!container) {
        console.warn('Network globe container not found');
        return;
    }

    // Check if Three.js is loaded
    if (typeof THREE === 'undefined') {
        console.error('Three.js not loaded');
        return;
    }

    try {
        // Scene setup
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        // Create globe
        const geometry = new THREE.SphereGeometry(2, 32, 32);
        const material = new THREE.MeshBasicMaterial({
            color: 0x1a1a2e,
            wireframe: true,
            transparent: true,
            opacity: 0.3
        });
        globe = new THREE.Mesh(geometry, material);
        scene.add(globe);

        // Generate nodes
        for (let i = 0; i < 100; i++) {
            const nodeGeometry = new THREE.SphereGeometry(0.02, 8, 8);
            const nodeMaterial = new THREE.MeshBasicMaterial({
                color: Math.random() > 0.5 ? 0xa94df0 : 0x00ff00
            });
            const node = new THREE.Mesh(nodeGeometry, nodeMaterial);

            // Position on globe surface
            const phi = Math.acos(-1 + (2 * i) / 100);
            const theta = Math.sqrt(100 * Math.PI) * phi;

            node.position.x = 2 * Math.cos(theta) * Math.sin(phi);
            node.position.y = 2 * Math.sin(theta) * Math.sin(phi);
            node.position.z = 2 * Math.cos(phi);

            scene.add(node);
            nodes.push(node);
        }

        camera.position.z = 5;

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);

            if (globe) {
                globe.rotation.y += 0.005;
                nodes.forEach(node => {
                    node.rotation.y += 0.01;
                });
            }

            renderer.render(scene, camera);
        } animate();

        // Handle resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

    } catch (error) {
        console.error('Error initializing network globe:', error);
    }
}

// Neural Network Canvas
function initNeuralCanvas() {
    neuralCanvas = document.getElementById('neural-canvas');
    if (!neuralCanvas) {
        console.warn('Neural canvas element not found');
        return;
    }

    try {
        neuralCanvas.width = window.innerWidth;
        neuralCanvas.height = window.innerHeight;
        neuralCtx = neuralCanvas.getContext('2d');

        const neurons = [];
        const connections = [];    // Generate fewer nodes for better performance
        for (let i = 0; i < 50; i++) {
            neurons.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 3 + 1,
                pulse: Math.random() * Math.PI * 2
            });
        }

        // Create connections
        for (let i = 0; i < neurons.length; i++) {
            for (let j = i + 1; j < neurons.length; j++) {
                if (Math.random() < 0.1) {
                    connections.push({ from: i, to: j, strength: Math.random() });
                }
            }
        }

        function animateNeural() {
            neuralCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            // Update and draw connections
            neuralCtx.strokeStyle = 'rgba(169, 77, 240, 0.1)';
            neuralCtx.lineWidth = 1;

            connections.forEach(conn => {
                const from = neurons[conn.from];
                const to = neurons[conn.to];
                const distance = Math.sqrt((to.x - from.x) ** 2 + (to.y - from.y) ** 2);

                if (distance < 200) {
                    neuralCtx.beginPath();
                    neuralCtx.moveTo(from.x, from.y);
                    neuralCtx.lineTo(to.x, to.y);
                    neuralCtx.globalAlpha = (200 - distance) / 200 * conn.strength;
                    neuralCtx.stroke();
                }
            });

            // Update and draw neurons
            neurons.forEach(neuron => {
                neuron.x += neuron.vx;
                neuron.y += neuron.vy;
                neuron.pulse += 0.1;

                // Bounce off edges
                if (neuron.x < 0 || neuron.x > window.innerWidth) neuron.vx *= -1;
                if (neuron.y < 0 || neuron.y > window.innerHeight) neuron.vy *= -1;

                // Draw neuron
                const alpha = (Math.sin(neuron.pulse) + 1) / 2 * 0.8 + 0.2;
                neuralCtx.globalAlpha = alpha;
                neuralCtx.fillStyle = '#a94df0';
                neuralCtx.beginPath();
                neuralCtx.arc(neuron.x, neuron.y, neuron.size, 0, Math.PI * 2);
                neuralCtx.fill();
            });

            neuralCtx.globalAlpha = 1;
            requestAnimationFrame(animateNeural);
        } animateNeural();

        // Handle resize
        window.addEventListener('resize', () => {
            neuralCanvas.width = window.innerWidth;
            neuralCanvas.height = window.innerHeight;
        });

    } catch (error) {
        console.error('Error initializing neural canvas:', error);
    }
}

// Network toggle functionality
function initNetworkToggle() {
    const networkToggle = document.querySelector('.network-toggle');
    const networkContainer = document.querySelector('.network-map-container');
    const closeBtn = document.querySelector('.network-close');

    if (networkToggle && networkContainer) {
        networkToggle.addEventListener('click', () => {
            networkContainer.classList.add('active');
            setTimeout(() => networkContainer.classList.add('show'), 10);
            if (!scene) {
                initNetworkGlobe();
            }
        });
    }

    if (closeBtn && networkContainer) {
        closeBtn.addEventListener('click', () => {
            networkContainer.classList.remove('show');
            setTimeout(() => networkContainer.classList.remove('active'), 300);
        });
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && networkContainer && networkContainer.classList.contains('active')) {
            networkContainer.classList.remove('show');
            setTimeout(() => networkContainer.classList.remove('active'), 300);
        }
    });
}

// Memory fragments animation
function createMemoryFragments() {
    function createFragment() {
        const fragment = document.createElement('div');
        fragment.className = 'memory-fragment';
        fragment.textContent = memoryFragments[Math.floor(Math.random() * memoryFragments.length)];
        fragment.style.top = Math.random() * 100 + '%';
        fragment.style.left = '-200px';
        fragment.style.animationDelay = '0s';
        document.body.appendChild(fragment);

        setTimeout(() => {
            if (fragment.parentNode) {
                fragment.remove();
            }
        }, 20000);
    }

    setInterval(createFragment, 3000);
}

// Particle system
function initParticleSystem() {
    const particleContainer = document.querySelector('.particles');
    if (!particleContainer) return;

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
        particleContainer.appendChild(particle);

        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 10000);
    }

    setInterval(createParticle, 500);
}

// Background effects initialization
function initializeBackgroundEffects() {
    initNeuralCanvas();
    createMemoryFragments();
    initParticleSystem();
    initNetworkToggle();
}

// Main initialization
document.addEventListener('DOMContentLoaded', function () {
    console.log('VantaAI website loaded successfully');

    // Start boot sequence
    showBootSequence();

    // Initialize network toggle immediately (don't wait for boot sequence)
    initNetworkToggle();

    // FAQ functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });    // Navbar hide/show on scroll (throttled for performance)
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    let scrollTimeout;

    window.addEventListener('scroll', () => {
        if (scrollTimeout) return;

        scrollTimeout = setTimeout(() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                navbar.classList.add('hidden');
            } else {
                // Scrolling up
                navbar.classList.remove('hidden');
            }

            lastScrollTop = scrollTop;
            scrollTimeout = null;
        }, 10); // Throttle to every 10ms
    }, { passive: true });

    // Typing animation
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        const messages = [
            "Understanding your emotions...",
            "Learning your preferences...",
            "Building memories together...",
            "Evolving with you...",
            "Processing locally...",
            "No data leaves your device...",
            "Emotional intelligence active..."
        ];

        let messageIndex = 0;
        let charIndex = 0;
        let isTyping = true;

        function typeMessage() {
            const currentMessage = messages[messageIndex];

            if (isTyping) {
                if (charIndex < currentMessage.length) {
                    typingElement.textContent += currentMessage.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeMessage, 50);
                } else {
                    isTyping = false;
                    setTimeout(typeMessage, 2000);
                }
            } else {
                if (charIndex > 0) {
                    typingElement.textContent = currentMessage.substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(typeMessage, 30);
                } else {
                    isTyping = true;
                    messageIndex = (messageIndex + 1) % messages.length;
                    setTimeout(typeMessage, 500);
                }
            }
        }

        typeMessage();
    }

    // Feature hover effects
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const glow = item.querySelector('.feature-glow');
            if (glow) {
                glow.style.opacity = '1';
            }
        });

        item.addEventListener('mouseleave', () => {
            const glow = item.querySelector('.feature-glow');
            if (glow) {
                glow.style.opacity = '0';
            }
        });
    });

    // Email modal functionality
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

    // Close modal when clicking outside
    document.addEventListener('click', (e) => {
        const modal = document.querySelector('.modal-overlay');
        if (modal && e.target === modal) {
            hideEmailModal();
        }
    });

    // Form submission
    const emailForm = document.getElementById('email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const submitBtn = document.querySelector('.submit-btn');
            const successMessage = document.querySelector('.success-message');
            const errorMessage = document.querySelector('.error-message');

            submitBtn.disabled = true;
            submitBtn.textContent = 'Joining...';

            // Simulate API call
            setTimeout(() => {
                if (email && email.includes('@')) {
                    successMessage.style.display = 'block';
                    errorMessage.style.display = 'none';
                    emailForm.style.display = 'none';
                } else {
                    errorMessage.style.display = 'block';
                    errorMessage.textContent = 'Please enter a valid email address.';
                }

                submitBtn.disabled = false;
                submitBtn.textContent = 'Join Waitlist';
            }, 1500);
        });
    }

    // Network stats animation
    function animateNetworkStats() {
        const statValues = document.querySelectorAll('.stat-value');

        statValues.forEach(stat => {
            const finalValue = parseInt(stat.textContent);
            const increment = finalValue / 100;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= finalValue) {
                    current = finalValue;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current).toLocaleString();
            }, 50);
        });
    }

    // Initialize stats animation when network map is opened
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('network-toggle')) {
            setTimeout(animateNetworkStats, 500);
        }
    });

    // Advanced glitch effect on title
    const title = document.querySelector('h1');
    if (title) {
        title.addEventListener('mouseenter', () => {
            title.style.animation = 'glitch 0.3s ease-in-out';
        });

        title.addEventListener('animationend', () => {
            title.style.animation = '';
        });
    }

    // Konami code easter egg
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);

        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }

        if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
            // Easter egg activated
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = '';
            }, 3000);
        }
    });
});

// Additional utility functions
function updateNetworkStats() {
    const stats = {
        nodes: Math.floor(Math.random() * 1000) + 500,
        connections: Math.floor(Math.random() * 5000) + 2000,
        uptime: Math.floor(Math.random() * 99) + 1
    };

    document.querySelector('[data-stat="nodes"]').textContent = stats.nodes.toLocaleString();
    document.querySelector('[data-stat="connections"]').textContent = stats.connections.toLocaleString();
    document.querySelector('[data-stat="uptime"]').textContent = stats.uptime + '%';
}

// Performance monitoring
function initPerformanceMonitoring() {
    let frameCount = 0;
    let lastTime = performance.now();

    function measureFPS() {
        frameCount++;
        const currentTime = performance.now();

        if (currentTime >= lastTime + 1000) {
            const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            console.log(`FPS: ${fps}`);
            frameCount = 0;
            lastTime = currentTime;
        }

        requestAnimationFrame(measureFPS);
    }

    measureFPS();
}

// Initialize performance monitoring in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    initPerformanceMonitoring();
}
