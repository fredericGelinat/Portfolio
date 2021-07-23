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
