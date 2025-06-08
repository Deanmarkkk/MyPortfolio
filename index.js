const btn = document.getElementById("backToTop");

window.onscroll = function () {
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
} else {
    btn.style.display = "none";
}
};

btn.onclick = function () {
window.scrollTo({ top: 0, behavior: "smooth" });
};

const projectBtn = document.querySelector('.proj');

function projectButton() {
    if (projectBtn) {
        alert('Ongoing palang')
    }
}

const btnSubmit = document.querySelector('.btnSubmit');
function submitBtn() {
    if (btnSubmit) {
        alert('Joke lang, di ko pa alam dito banda.')
    }
}

const skillImage = document.querySelector('.skill-img');
const popUp = document.querySelector('.skill-txt-border');

skillImage.addEventListener('click', () => {
popUp.style.display = popUp.style.display === 'block' ? 'none' : 'block'
})