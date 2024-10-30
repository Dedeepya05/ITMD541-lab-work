(function() {
    // Update the main headline in the hero section
    const mainHeadline = document.querySelector('#hero h1');
    if (mainHeadline) {
        mainHeadline.textContent = "Supercharge Your Brand with Stellar Marketing";
    }

    // Update the subheadline text in the hero section with styled emphasis
    const subHeadline = document.querySelector('#hero p');
    if (subHeadline) {
        subHeadline.innerHTML = "Leverage innovative strategies from Stellar Marketing to make your business <strong><em>shine</em></strong> and <strong><em>succeed</em></strong>.";
    }

    // Set a new background image for the hero section using an image from Picsum
    const heroBanner = document.getElementById('hero');
    if (heroBanner) {
        heroBanner.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
    }

    // Match the navbar background color to the footer's background color dynamically
    const navBar = document.querySelector('header');
    const pageFooter = document.querySelector('footer');
    if (navBar && pageFooter) {
        navBar.style.backgroundColor = window.getComputedStyle(pageFooter).backgroundColor;
    }

    // Remove the "Get Started" button from the hero section if it exists
    const heroCTA = document.querySelector('#hero a');
    if (heroCTA) {
        heroCTA.remove();
    }

    // Create and add a new full-width section with a CTA button below the hero section
    const ctaSection = document.createElement('section');
    ctaSection.style.backgroundColor = "#6495ed";
    ctaSection.style.margin = "-3rem 0 3rem 0";
    ctaSection.style.padding = "32px 0";
    ctaSection.style.width = "100%";
    ctaSection.style.textAlign = "center";

    const learnMoreButton = document.createElement('button');
    learnMoreButton.textContent = "Schedule a Consultation Today";
    learnMoreButton.style.backgroundColor = "white";
    learnMoreButton.style.color = "#6495ed";
    learnMoreButton.style.padding = "10px 20px";
    learnMoreButton.style.border = "4px solid #6495ed";
    learnMoreButton.style.fontSize = "1rem";
    learnMoreButton.style.borderRadius = "5px";
    learnMoreButton.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.1)";

    // Add a click event to the button that shows an alert message
    learnMoreButton.addEventListener("click", () => {
        alert("Thank you for your interest in Stellar Marketing!");
    });

    ctaSection.appendChild(learnMoreButton);
    heroBanner.insertAdjacentElement('afterend', ctaSection);

    // Update all service icons to have the color #6495ed for consistency
    const serviceIcons = document.querySelectorAll('#services .material-symbols-outlined');
    serviceIcons.forEach(serviceIcon => {
        serviceIcon.style.color = "#6495ed";
    });

    // Replace the "Digital Marketing" icon with the 'Ads Click' icon
    const adsClickIcon = document.querySelector('#services .material-symbols-outlined[data-icon="digital"]');
    if (adsClickIcon) {
        adsClickIcon.textContent = "ads_click";
    }

    // Adjust layout for the specialized marketing solutions to display 4 columns on large screens (>= 1024px)
    const styleTag = document.createElement("style");
    styleTag.textContent = `
        @media (min-width: 1024px) {
            #solutions .grid-cols-1.md\\:grid-cols-2 {
                grid-template-columns: repeat(4, 1fr);
            }
        }
    `;
    document.head.appendChild(styleTag);

    // Update the Musicians' image with a new one from Picsum
    const musicianImg = document.querySelector('#solutions img[alt="Musicians"]');
    if (musicianImg) {
        musicianImg.src = "https://picsum.photos/id/453/400/300";
    }

    // Prevent the contact form from submitting to a broken URL and validate input
    const contactFormElement = document.querySelector('#contact form');
    if (contactFormElement) {
        contactFormElement.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the default form submission behavior

            const userName = document.querySelector('#name').value.trim();
            const userEmail = document.querySelector('#email').value.trim();

            // Validate that both name and email are provided
            if (userName && userEmail) {
                alert(`Thank you, ${userName}! We will be in touch with you shortly at ${userEmail}.`);
            } else {
                alert("Please provide both a name and an email.");
            }
        });
    }
})();
