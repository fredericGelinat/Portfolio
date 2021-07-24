const btnMenu = document.querySelector('.btnRondMenu');
const nav = document.querySelector('.navGauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector(".contLigne");

btnMenu.addEventListener('click', () => {
    ligne.classList.toggle('active')
    nav.classList.toggle("menuVisible")
})


if(window.matchMedia("(max-width:1300px)")) {

    allItemNav.forEach(item => {
        item.addEventListener("click", () => {
            nav.classList.toggle('menuVisible')
            ligne.classList.toggle('active');
        })
        
    })
}
// animation écriture
const txtAnim = document.querySelector(".txtAnimation");

let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20
} )

typewriter
.pauseFor(1800)
.changeDelay(20)
.typeString('Moi c\'est <span style="color: #BF7D2C;"> Timinik </span> !')
.pauseFor(300)
.typeString('<strong> Auteur</strong> !')
.pauseFor(1000)
.deleteChars(9)
.typeString('<span style="color: #BF7D2C;"> Peintre </span> <span style= color: #fff; > numérique !</span>')
.pauseFor(1000)
.deleteChars(22)
.typeString('<span style="color: #fff;"> Dev </span><span style= "color:#fff ;">Web</span><span style= "color:#fff ;" > junior !</span>') 
.start()

// Animation Contact

const input_fields = document.querySelectorAll('input');

for(let i = 0; i < input_fields.length; i++) {

    let field = input_fields[i];

    field.addEventListener('input', (e) => {
        if(e.target.value !== ''){
            e.target.parentNode.classList.add('animation')
        } else if (e.target.value == ''){
            e.target.parentNode.classList.remove('animation')
        }
    })

}

// anim GSAP + SCROLL MAGIC */

const navbar = document.querySelector(".navGauche");

const titre = document.querySelector('h1');
const btn = document.querySelectorAll('.btn-acc')
const btnMedias = document.querySelectorAll('.media')
const btnRondAccueil = document.querySelector('.btnRond')
const TL1 = gsap.timeline({paused: true});

TL1
.to(navbar, {left: '0px', ease: Power3.easeOut, duration: 0.6})
.from(titre, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4})
.staggerFrom(btn, 1, {opacity: 0}, 0.2, '-=0.30')
.staggerFrom(btnMedias, 1, {opacity: 0}, 0.2, '-=0.75')
.from(btnRondAccueil, {y: -50, opacity:0, ease: Power3.easeOut, duration: 0.4}, '-=1')


// .to(navbar, {left: '0px', duration: 0.6})
 window.addEventListener('load', () =>{
     TL1.play();
 })

 const presentationContainer = document.querySelector('.presentation')
const titrePres = document.querySelector('.titrePres');
const presGauche = document.querySelector('.presGauche')
const listePres = document.querySelectorAll('.itemList')

const tlpres = new TimelineMax();

tlpres
.from(titrePres, {y: -200, opacity: 0, duration: 0.6})
.from(presGauche, {y:-20, opacity: 0, duration: 0.6}, '-=0.1')
.staggerFrom(listePres, 1, {opacity: 0}, 0.2, '-=0.2')

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: presentationContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(tlpres)
// .addIndicators()
.addTo(controller)

// Anim portfolio

const portfolioContainer = document.querySelector('.portfolio')
const titrePortfolio = document.querySelector('.titrePort')
const itemPortfolio = document.querySelectorAll('.vague1')

const tlPortfolio = new TimelineMax();

tlPortfolio
.from(titrePortfolio, {y: -50, opacity: 0, duration: 0.5})
.staggerFrom(itemPortfolio, 1, {opacity: 0}, 0.2, '-=0.5')

const scene2 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(tlPortfolio)
// .addIndicators()
.addTo(controller)

// Vague 2 

const itemPortfolio2 = document.querySelectorAll('.vague2')

const tlPortfolio2 = new TimelineMax();

tlPortfolio2
.staggerFrom(itemPortfolio2, 1, {opacity: 0}, 0.2, '-=0.5')

const scene3 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio,
    triggerHook: 0.2,
    reverse: false
})
.setTween(tlPortfolio2)
// .addIndicators()
.addTo(controller)

// Vague 3

const itemPortfolio3 = document.querySelectorAll('.vague3')

const tlPortfolio3 = new TimelineMax();

tlPortfolio3
.staggerFrom(itemPortfolio3, 1, {opacity: 0}, 0.2, '-=0.5')

const scene4 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio2,
    triggerHook: 0.2,
    reverse: false
})
.setTween(tlPortfolio3)
// .addIndicators()
.addTo(controller)

// Animation range

const sectionComp = document.querySelector('.sectionRange');
const titreComp = document.querySelector('.titrePhrasesFetiche');
const allLabel = document.querySelectorAll('.labelSkill')
const allPourcent = document.querySelectorAll('.numberSkill')
const allBarres = document.querySelectorAll('.barreSkill')
const allShadowBarres = document.querySelectorAll('.barreGrise')

const tlCompetences = new TimelineMax();

tlCompetences
.from(titreComp, {opacity: 0, duration: 0.6})
.staggerFrom(allLabel, 0.5, {y: -50, opacity:0}, 0.1, '-=0.5')
.staggerFrom(allPourcent, 0.5, {y: -10, opacity:0}, 0.1, '-=1')
.staggerFrom(allShadowBarres, 0.5, {y: -10, opacity:0}, 0.1, '-=1')
.staggerFrom(allBarres, 0.5, {y: -10, opacity:0}, 0.1, '-=1')

const scene5 = new ScrollMagic.Scene({
    triggerElement: sectionComp,
    reverse: false
})
.setTween(tlCompetences)
.addTo(controller);