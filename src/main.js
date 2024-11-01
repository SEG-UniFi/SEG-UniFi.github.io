
// background gradient
 window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY; // Current scroll position
      const docHeight = document.body.scrollHeight - window.innerHeight; // Total scrollable height
      const scrollPercent = scrollTop / docHeight; // Scroll progress (0 to 1)

      // Calculate color based on scroll
     const startColor = []; 
     const endColor = [208, 139, 88];  
      const currentColor = startColor.map((start, i) =>
        Math.round(start + (endColor[i] - start) * scrollPercent)
      );
      // Apply dynamic gradient
      document.body.style.background = `linear-gradient(to bottom, rgb(${currentColor.join(',')}), #fff)`;}
 )
// index page counter animation
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter');
    let hasAnimated = false; // To prevent multiple animations

    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.1 // Trigger when 10% of the section is visible
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
                        increment = 10000; // Increment by 100k for 1,040,985
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
