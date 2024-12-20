
// background gradient
 window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY; // Current scroll position
      const docHeight = document.body.scrollHeight - window.innerHeight; // Total scrollable height
      const scrollPercent = scrollTop / docHeight; // Scroll progress (0 to 1)

      // Calculate color based on scroll
     const startColor = [254,248,240]; 
     const endColor = [208, 139, 88];  
      const currentColor = startColor.map((start, i) =>
        Math.round(start + (endColor[i] - start) * scrollPercent)
      );
      // Apply dynamic gradient
     document.body.style.background = `linear-gradient(to bottom, rgb(${currentColor.join(',')}), #e9e4e4)`;}
 )



// index page counter animation
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter');
    let hasAnimated = false; // To prevent multiple animations

    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.2 // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true; // Prevent further animations
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    let count = 0; // Start from 0
                    let increment;

                    // Determine increment based on the target value
                    if (target === 1040985) {
                        increment = 9999; // Increment by 9999 for 1,040,985
                    } else {
                        increment = Math.ceil(target / 250); // Default increment for others
                    }

                    const updateCount = () => {
                        if (count < target) {
                            // Ensure we don't exceed the target
                            count = Math.min(count + increment, target);
                            counter.innerText = count.toLocaleString(); // Format the number
                            setTimeout(updateCount, 20); // Update every 20ms
                        } else {
                            //Add plus to each case
                            if (target === 400) {
                                counter.innerText = '400+'; 
                            } else if (target === 1040985) {
                                counter.innerText = '1 040 985+'; 
                            } else if (target === 450){
                                counter.innerText = "450+";
                            }
                        }
                    };

                    updateCount();
                });
            }
        });
    }, observerOptions);

    observer.observe(document.getElementById('why-unify')); // Observe the section
});


// text transition
document.addEventListener("DOMContentLoaded", () => {
    const offset = 200
    const textElements = document.querySelectorAll("h1, h2, h3, p, span, li");

    const showTextOnScroll = () => {
        textElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            if (isVisible) {
                el.classList.add("text-visible");
            }
        });
    };

    window.addEventListener("scroll", showTextOnScroll);
    showTextOnScroll(); // Initial call to show elements in view on load
});
// smooth scrolling code
document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetUrl = link.getAttribute("href");

        // Check if the link is the one that should go to a new page
        if (targetUrl === "about.html"){ // Replace with the specific URL or ID
            // Navigate directly to the new page
            event.preventDefault();
            window.location.href = targetUrl;
        } else if (targetUrl === "price.html"){
            // Navigate directly to the new page
            event.preventDefault();
            window.location.href = targetUrl;
        }else if (targetUrl === "index.html") {
            // Navigate directly to the new page
            event.preventDefault();
            window.location.href = targetUrl;
        } else if (targetUrl === "price.html") {
            // Navigate directly to the new page
            event.preventDefault();
            window.location.href = targetUrl;
        } else if (targetUrl === "index.html#learn-more") {
            // Navigate directly to the new page
            event.preventDefault();
            window.location.href = targetUrl;
        }else {
            // Use scrollIntoView for all other links
            event.preventDefault();
            const targetId = targetUrl.substring(1); // Get the ID from href
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            } else {
                console.warn(`Element with ID ${targetId} not found.`);
            }
        }
    });
});


// navbar
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        const span = document.getElementById('current-page'); // Selects the span inside the navbar

        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            if (span) {
                span.classList.add('scroll-span');
            }
        } else {
            navbar.classList.remove('scrolled');
            if (span) {
                span.classList.remove('scroll-span');
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Scroll event to add the scrolled class to hamburger
    window.addEventListener('scroll', () => {
        const hamburger = document.querySelector('.hamburger');

        // If scrolled more than 50px, add the scrolled class
        if (window.scrollY > 50) {
            hamburger.classList.add('scrolled');
        } else {
            hamburger.classList.remove('scrolled');
        }
    });

    // Hamburger menu toggle (existing code)
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("header__menu");
    const body = document.body;

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
        hamburger.classList.toggle("open");

        // Disable navbar transitions when menu is open
        if (menu.classList.contains("active")) {
            body.classList.add("menu-open"); // Add a class to body when menu is open
        } else {
            body.classList.remove("menu-open"); // Remove the class when menu is closed
        }
    });
});


// price page slider

