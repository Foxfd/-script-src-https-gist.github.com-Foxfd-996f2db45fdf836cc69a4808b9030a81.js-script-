// script.js
document.addEventListener("DOMContentLoaded", () => {
    const fadeIns = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    });

    fadeIns.forEach(section => {
        observer.observe(section);
    });
});
