

btnModo.addEventListener('click', (e) => {
    var btnModo = document.getElementById('btnModo')
    var elemBody = document.getElementById('elemBody')

    if (btnModo.value == `-Dark Mode-`) {
        btnModo.value = "-Light Mode-"
        elemBody.classList.toggle("modoClaro")
    } else {
        btnModo.value = "-Dark Mode-"
        elemBody.classList.toggle("modoClaro")
    }
});

window.addEventListener("load", ()=>{

    let puntos = document.getElementById("main-punto")
    const puntoIntermitente = () =>{

        setTimeout(mostrarHora, 1000)
    }    

    puntoIntermitente()

})







