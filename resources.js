

window.addEventListener("load", () => {
    var iconoLight = document.getElementsByClassName("fas")
       

    iconoLight[0].addEventListener('click', (e) => {
       
        var btnModo = document.getElementById('btnModo')
        var elemBody = document.getElementById('elemBody')

        if (btnModo.value == `-Dark Mode-`) {
            btnModo.value = "-Light Mode-"
            elemBody.classList.toggle("modoClaro")
            iconoLight[0].classList.toggle("fa-sun")
            iconoLight[0].classList.toggle("fa-moon")
        } else {
            btnModo.value = "-Dark Mode-"
            elemBody.classList.toggle("modoClaro")
            iconoLight[0].classList.toggle("fa-sun")
            iconoLight[0].classList.toggle("fa-moon")
        }
    });

})







