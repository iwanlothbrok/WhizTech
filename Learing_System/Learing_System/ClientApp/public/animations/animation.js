const observer = new IntersectionObserver((e) => {
    e.forEach((et) => {
        if (e.isIntersecting) {
            e.target.classList.add('show')
        } else {
            e.target.classList.remove('show')
        }
    })
})

const hiddenEl = document.querySelectorAll('.hidden');
hiddenEl.forEach((el) => observer.observe(el))
