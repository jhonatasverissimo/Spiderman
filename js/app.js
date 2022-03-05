document.addEventListener('DOMContentLoaded', () => {
    let tl = new TimelineMax();

    tl.fromTo('.bg-loader', 1, { width: '100%' }, { width: '0%', delay: 5, ease: Expo.easeInOut })

    tl.fromTo('.logo', 0.7, { y: -50, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.5')

    tl.fromTo('.nav-list', 0.7, { y: -50, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.5')

    tl.fromTo('.nav-social', 0.7, { y: -50, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.5')

    tl.fromTo('.bx', 0.7, { y: -50, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.5')


})