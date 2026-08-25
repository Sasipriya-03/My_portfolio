/* =====================================================
   SASIPRIYA PORTFOLIO JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");


menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("show");


    const icon = menuBtn.querySelector("i");


    if (navbar.classList.contains("show")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    }

    else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});



/* =====================================================
   CLOSE MENU
===================================================== */

const navLinks =
    document.querySelectorAll(".navbar a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");


        const icon =
            menuBtn.querySelector("i");


        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;


        const sectionHeight =
            section.clientHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});



/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");


    const icon =
        themeBtn.querySelector("i");


    if (
        document.body.classList.contains("light-mode")
    ) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");


        localStorage.setItem(
            "theme",
            "light"
        );

    }

    else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");


        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});



/* =====================================================
   LOAD SAVED THEME
===================================================== */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light-mode");


    const icon =
        themeBtn.querySelector("i");


    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

}



/* =====================================================
   BACK TO TOP
===================================================== */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    }

    else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name")
            .value.trim();


        const email =
            document.getElementById("email")
            .value.trim();


        const subject =
            document.getElementById("subject")
            .value.trim();


        const message =
            document.getElementById("message")
            .value.trim();


        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {

            alert(
                "Please fill in all fields."
            );

            return;

        }


        const mailSubject =
            encodeURIComponent(subject);


        const mailBody =
            encodeURIComponent(

                `Hello Sasipriya,

Name: ${name}

Email: ${email}

Message:

${message}`

            );


        window.location.href =
            `mailto:sasijeevitha16@gmail.com?subject=${mailSubject}&body=${mailBody}`;


        contactForm.reset();

    }
);



/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();



/* =====================================================
   SCROLL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(

        ".about-card, " +
        ".skill-box, " +
        ".timeline-item, " +
        ".project-card, " +
        ".cert-card, " +
        ".education-card"

    );


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";


                    entry.target.style.transform =
                        "translateY(0)";


                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {

            threshold: 0.12

        }

    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";


    revealObserver.observe(element);

});
