// lenis 
const lenis = new Lenis({
    smooth: false,
    duration: 1.2,
})

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);