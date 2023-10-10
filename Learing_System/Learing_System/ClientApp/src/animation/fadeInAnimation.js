import { useEffect } from "react";
function fadeInAnimation(elements) {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    elements.forEach((element) => {
        observer.observe(element);
    });

    return () => {
        elements.forEach((element) => {
            observer.unobserve(element);
        });
    };
}

export default fadeInAnimation;