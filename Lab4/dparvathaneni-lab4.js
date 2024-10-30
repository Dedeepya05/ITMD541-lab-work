(function() {
    // Update the main headline in the hero section
    const mainHeadline = document.querySelector('#hero h1');
    if (mainHeadline) {
        mainHeadline.textContent = "Supercharge Your Brand with Stellar Marketing";
    }

    // Update the subheadline text in the hero section
    const subHeadline = document.querySelector('#hero p');
    if (subHeadline) {
        subHeadline.innerHTML = "Leverage innovative strategies from Stellar Marketing to make your business <strong><em>shine</em></strong> and <strong><em>succeed</em></strong>.";
    }

    // Set a new background image for the hero section
    const heroBanner = document.getElementById('hero');
    if (heroBanner) {
        heroBanner.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
    }

    // Match navbar background color to footer color
    const navBar = document.querySelector('header');
    const pageFooter = document.querySelector('footer');
    if (navBar && pageFooter) {
        navBar.style.backgroundColor = window.getComputedStyle(pageFooter).backgroundColor;
    }

    // Remove the "Get Started" button from the hero section
    const heroCTA = document.querySelector('#hero a');
    if (heroCTA) {
        heroCTA.remove();
    }

    // Add a new full-width section with a call-to-action button below the hero
    const ctaSection = document.createElement('section');
    ctaSection.style.backgroundColor = "#6495ed";
    ctaSection.style.margin = "-3rem 0 3rem 0"
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
    learnMoreButton.addEventListener("click", () => {
        alert("Thank You for your interest in Stellar Marketing!");
    });

    ctaSection.appendChild(learnMoreButton);
    heroBanner.insertAdjacentElement('afterend', ctaSection);

    // Update icon colors in the Services section to #6495ed
    const serviceIcons = document.querySelectorAll('#services .material-symbols-outlined');
    serviceIcons.forEach(serviceIcon => {
        serviceIcon.style.color = "#6495ed";
    });

    // Replace the "Digital Marketing" icon with 'Ads Click'
    const adsClickIcon = document.querySelector('#services .material-symbols-outlined[data-icon="digital"]');
    if (adsClickIcon) {
        adsClickIcon.textContent = "ads_click";
    }

    // Adjust layout for specialized marketing solutions at >= 1024px to 4 columns
    const styleTag = document.createElement("style");
    styleTag.textContent = `
        @media (min-width: 1024px) {
            #solutions .grid-cols-1.md\\:grid-cols-2 {
                grid-template-columns: repeat(4, 1fr);
            }
        }
    `;
    document.head.appendChild(styleTag);

    // Update the Musicians image in the specialized marketing solutions section
    const musicianImg = document.querySelector('#solutions img[alt="Musicians"]');
    if (musicianImg) {
        musicianImg.src = "https://picsum.photos/id/453/400/300";
    }

    // Prevent the form submission to the broken URL and validate input
    const contactFormElement = document.querySelector('#contact form');
    if (contactFormElement) {
        contactFormElement.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission to contact.html

            const userName = document.querySelector('#name').value.trim();
            const userEmail = document.querySelector('#email').value.trim();

            if (userName && userEmail) {
                alert(Thank you, ${userName}! We will be in touch with you shortly at ${userEmail}.);
            } else {
                alert("Please provide a name and email.");
            }
        });
    }
})();