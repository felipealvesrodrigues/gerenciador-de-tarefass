const container = document.getElementById('container')
const registerBtn = document.getElementById('register')
const loginBtn = document.getElementById('login') 

registerBtn.addEventListener('click', () => {
    container.classList.add('active')
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active')
})


/* GSAP */
const tl = gsap.timeline({})

/* fall towards center */
tl.fromTo(
    '.container',
    {
        y: -800,
        scaleX: .2,
        scaleY: .5,
        opacity: 0
    },
    {
        y: 0,
        scaleX: .2,
        scaleY: .5,
        opacity: 1,
        duration: .8,
        ease: 'power3.out'
    }, '-=0.3'
)

/* Expand verticaly */
tl.to (
    '.container',
    {
        scaleY: 1,
        duration: .4,
        ease: 'power3.out'
    }
)

/* Expand horizontally */
tl.to(
    '.container',
    {
        scaleX: 1,
        duration: .7,
        ease: 'power3.out'
    },'-=0.2'
)

/* animate form */
gsap.defaults({opacity: 0, y: -60, ease: 'power2.out', duration: .4})
gsap.from('.login_title', {delay:1.3})
gsap.from('.login_form > *:not(.login_title)', {delay: 1.5, stagger: .2})
