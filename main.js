class Reveal {
    constructor (element) {
        this.holder = document.querySelector(element)
        this.image = document.querySelector(`${element} img`)
        this.animateIn()
    }

    animateIn() {
        this.holderIn = gsap.timeline()
        this.holderIn.set(this.holder, {
            autoAlpha: 1
        })
        this.holderIn.fromTo(this.holder, {
            height: "0%",
            y: "-150%"
        }, {
            delay: 0,
            duration: 3,
            ease: 'expo.out',
            stagger: {
                amount: 0.2,
                axis: 'x'
            },
            scale: 1,
            height: "100%",
            y: "0%"
        })

        this.imageIn = gsap.timeline()
        this.imageIn.set(this.image, {
            autoAlpha: 1
        })
        this.imageIn.fromTo(this.image, {
            scale: 1.2,
            y: "150%"
        }, {
            delay: 0,
            duration: 3,
            ease: 'expo.out',
            stagger: {
                amount: 0.2,
                axis: 'x'
            },
            scale: 1,
            y: "0%"
        })
    }
}


new Reveal('.home__section__figure')