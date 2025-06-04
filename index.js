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
