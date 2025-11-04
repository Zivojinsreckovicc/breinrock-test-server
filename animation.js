document.addEventListener("DOMContentLoaded", function() {
    let counters = document.querySelectorAll('.counter');
    let countersSection = document.querySelector('#counters');
    let countersStarted = false;

    if (!countersSection || counters.length === 0) return;

    function animateCounters() {
        counters.forEach(counter => {
            let target = +counter.getAttribute('data-target');
            let count = 0;
            let increment = target / 100; // Increased speed (was 200)
            
            function updateCounter() {
                count += increment;
                if (count < target) {
                    counter.textContent = Math.ceil(count);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            }
            
            updateCounter();
        });
    }

    function checkViewport() {
        if (!countersSection) return;
        let rect = countersSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && !countersStarted) {
            countersStarted = true;
            animateCounters();
        }
    }

    window.addEventListener('scroll', checkViewport);
    checkViewport(); // Trigger the check on load
});






//COLABS ANIMATIONS
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#colabs .colabs-imgs img');
    const text = document.querySelectorAll('#colabs .colabs-content');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'animate' class to trigger animation
                text.forEach(element => element.classList.add('animate'));
                images.forEach(image => image.classList.add('animate'));
                // Optionally stop observing after the animation has started
                // observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    // Observe each image individually
    images.forEach(image => {
        observer.observe(image);
    });

    // Also observe the text
    text.forEach(element => {
        observer.observe(element);
    });
});

//COLABS ANIMATIONS END
//MISSION 
document.addEventListener("DOMContentLoaded", function () {
    const missionElement = document.querySelector("#mission");
    if (!missionElement) return;

    const missionSection = document.querySelector(".missionwrapper");
    const missionContentP = document.querySelector(".missioncontent p");
    const missionContentH2 = document.querySelector(".missioncontent h2");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (missionSection) missionSection.classList.add("animate");
                if (missionContentP) missionContentP.classList.add("animate");
                if (missionContentH2) missionContentH2.classList.add("animate");
                observer.unobserve(entry.target); // Unobserve after animation starts
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is in the viewport
    });

    observer.observe(missionElement);
});

//MISSION END

//BENEFITS
document.addEventListener('DOMContentLoaded', function () {
    const benefitsSection = document.querySelector('#breinrockbenefits');
    if (!benefitsSection) return;

    const benefitItems = benefitsSection.querySelectorAll('.half');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                benefitItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate-benefit');
                    }, index * 200); // Add delay for staggered animations
                });
                observer.unobserve(benefitsSection); // Stop observing after animation
            }
        });
    }, { threshold: 0.3 });

    observer.observe(benefitsSection);
});

//BENEFITS END
//ROCK AND PAY
document.addEventListener("DOMContentLoaded", function() {
    const prepaidSection = document.querySelector("#prepaidcards");
    if (!prepaidSection) return;

    const cardImage = document.querySelector(".cards-left");
    const rightContent = document.querySelector(".cards-right");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (cardImage) cardImage.classList.add("animate");
                if (rightContent) rightContent.classList.add("animate");
            }
        });
    }, {
        threshold: 0.5 /* Trigger when 50% of the section is visible */
    });

    observer.observe(prepaidSection);
});

//ROCK AND PAY END

//BAAS SECTION ANIMATION
document.addEventListener("DOMContentLoaded", function() {
    const baasSection = document.querySelector("#baas");
    if (!baasSection) return;

    const cardImage = baasSection.querySelector(".cards-left");
    const rightContent = baasSection.querySelector(".cards-right");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (cardImage) cardImage.classList.add("animate");
                if (rightContent) rightContent.classList.add("animate");
            }
        });
    }, {
        threshold: 0.5 /* Trigger when 50% of the section is visible */
    });

    observer.observe(baasSection);
});
//BAAS SECTION ANIMATION END

    



//CONTACT
// Function to check if element is in viewport
function isInViewport(element) {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Add scroll event listener to check for visibility
  document.addEventListener('scroll', function() {
    const contactWrapper = document.querySelector('.contactwrapper');
    const contactBtn = document.querySelector('.contactbutton');
    
    if (contactWrapper && isInViewport(contactWrapper)) {
      contactWrapper.classList.add('in-view');
      if (contactBtn) {
        contactBtn.classList.add('in-view');
      }
    }
  });
//CONTACT END

// Wait for DOM to be ready before setting up contact expand button
document.addEventListener('DOMContentLoaded', function() {
    const contactExpandBtn = document.getElementById('contactexpand');
    if (contactExpandBtn) {
        contactExpandBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const formContainer = document.querySelector('.contactform-container');
            const contactButton = document.getElementById('contactexpand');
            
            // Check if the form is currently hidden or visible
            if (formContainer && !formContainer.classList.contains('open')) {
                // Expand the form with animation
                formContainer.classList.add('open');
                
                // Hide the contact button after form is shown
                if (contactButton) contactButton.style.display = 'none';
            }
        });
    }
});


//header
// Vanilla JavaScript
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var logo = document.querySelector('.logomain');

    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
        logo.src = "imgs/logo.png"; // Change logo to black version
    } else {
        header.classList.remove('header-scrolled');
        logo.src = "imgs/logo.png"; // Change back to the original logo
    }
});





//ABOUT US

    // Function to check if element is in the viewport (fully contained)
    function isInViewport(element) {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to check if the section is partially in the viewport
    function isPartiallyInViewport(element) {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Animate the section when it comes into view
    document.addEventListener('scroll', function () {
        const licencesSection = document.getElementById('licences');
        if (licencesSection && isInViewport(licencesSection)) {
            licencesSection.classList.add('in-view');
        }
    });

    // Add 'in-view' class when it enters the viewport
    function handleScroll() {
        const experienceSection = document.getElementById('experience');
        if (experienceSection && isPartiallyInViewport(experienceSection)) {
            experienceSection.classList.add('in-view');
            // Remove event listener after the animation triggers to prevent repeated checks
            window.removeEventListener('scroll', handleScroll);
        }
    }

    // Listen for the scroll event and trigger animation
    window.addEventListener('scroll', handleScroll);

    // Trigger the animation if the section is already in view when the page loads
    document.addEventListener('DOMContentLoaded', handleScroll);


    //PRODUCTS
    document.addEventListener('DOMContentLoaded', function () {
        const section = document.querySelector('#corporateaccounts');
        if (!section) return;
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add animation classes
                    section.classList.add('in-view');
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        });
    
        // Start observing the section
        observer.observe(section);
    });

    
    document.addEventListener('DOMContentLoaded', function () {
        const foreignExchangeSection = document.querySelector('#foreignexchange');
        if (!foreignExchangeSection) return;
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add animation class
                    foreignExchangeSection.classList.add('in-view');
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        });
    
        // Start observing the section
        observer.observe(foreignExchangeSection);
    });

    // Digital Assets Section Animation
    document.addEventListener('DOMContentLoaded', function () {
        const digitalAssetsSection = document.querySelector('#digitalassets');
        if (!digitalAssetsSection) return;
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add animation class
                    digitalAssetsSection.classList.add('in-view');
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        });
    
        // Start observing the section
        observer.observe(digitalAssetsSection);
    });
    


    //CONTACT WRAPPER ANIMATION


    document.addEventListener("DOMContentLoaded", function () {
        const contactWrapper = document.querySelector(".contactwrapper");
        if (!contactWrapper) return;

        const particleContainer = document.createElement("div");
        particleContainer.className = "particles-container";
        contactWrapper.appendChild(particleContainer);
    
        const particleCount = 100; // Number of particles
    
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.className = "particle";
    
            // Random particle size between 2px and 8px
            const size = Math.random() * 6 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
    
            // Random initial position within the container
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
    
            // Random movement directions
            const xMovement = (Math.random() - 0.5) * 10; // -5vw to +5vw
            const yMovement = (Math.random() - 0.5) * 10; // -5vh to +5vh
            particle.style.setProperty("--x-movement", `${xMovement}vw`);
            particle.style.setProperty("--y-movement", `${yMovement}vh`);
    
            // Much faster animation duration for increased speed
            particle.style.animationDuration = `${Math.random() * 3 + 2}s`; // 2-5 seconds range
    
            particleContainer.appendChild(particle);
        }
    
        console.log("Particles created and appended to container with maximum speed.");
    });

    

    //DINAMIC SETTING OF THE PARTICLE HEIGHT

      //TEAM MEMBERS ANIMATION 
      document.addEventListener("DOMContentLoaded", () => {
        const teamRows = document.querySelectorAll(".team-row div");
        const observerOptions = {
            root: null,
            threshold: 0.1,
        };
    
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animated");
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
    
        teamRows.forEach((row) => observer.observe(row));
    });
    
    
//TEAM MEMBERS ANIMATION END    

//HEADER ON PHONES EXPANDED BACKGROUND

    document.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('header'); // Select the header
        const navbarCollapse = document.querySelector('.navbar-collapse'); // Select the collapsible menu

        // Only add listeners if both elements exist
        if (header && navbarCollapse) {
            // Add the class when the menu is shown
            navbarCollapse.addEventListener('show.bs.collapse', () => {
                header.classList.add('menu-expanded');
            });

            // Remove the class when the menu is hidden
            navbarCollapse.addEventListener('hide.bs.collapse', () => {
                header.classList.remove('menu-expanded');
            });
        }
    });
