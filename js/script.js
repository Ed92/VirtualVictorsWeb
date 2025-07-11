// Add smooth scrolling behavior to navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Optional: Add fade-in animations to sections as they appear in the viewport
const sections = document.querySelectorAll('section');

const options = {
    root: null,
    threshold: 0.25,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Fade-in class for animation
document.styleSheets[0].insertRule(`
    section.fade-in {
        opacity: 1;
        transform: translateY(0);
        transition: all 1s ease-in-out;
    }
`, document.styleSheets[0].cssRules.length);

document.styleSheets[0].insertRule(`
    section {
        opacity: 0;
        transform: translateY(50px);
        transition: all 1s ease-in-out;
    }
`, document.styleSheets[0].cssRules.length);

// Add this inside a <script> tag at the bottom of the page or in a separate JS file

function createCoin() {
    const coin = document.createElement('div');
    coin.classList.add('coin');
    
    // Randomize the starting position but keep it within bounds of the container
    const randomX = Math.floor(Math.random() * 20); // Random x-axis movement
    const randomY = Math.floor(Math.random() * 20); // Random y-axis movement
    coin.style.left = `${randomX}px`;  // Set the left position
    coin.style.bottom = `${randomY}px`;  // Set the bottom position
    console.log('Creating coin at:', randomX, randomY);
    // Append the coin to the container
    document.getElementById('coin-container').appendChild(coin);
    
    // Remove the coin after animation completes (1s)
    setTimeout(() => {
        coin.remove();
    }, 1000);
}

// Trigger coin animation every 0.5s (you can adjust the frequency)
setInterval(createCoin, 500);

