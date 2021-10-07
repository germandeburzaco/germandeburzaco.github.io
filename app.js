




btnModo.addEventListener('click', (e) => {
    var btnModo = document.getElementById('btnModo')
    var elemBody = document.getElementById('elemBody')

    if (btnModo.value == "Dark Mode") {
        btnModo.value = "Light Mode"
        elemBody.classList.toggle("modoClaro")
    } else {
        btnModo.value = "Dark Mode"
        elemBody.classList.toggle("modoClaro")
    }
});

document.addEventListener('click', function (event) {
    if (!event.target.closest('.cardPais')) return;

    // Log the clicked element in the console
    console.log(event.target.parentNode.childNodes[3].innerHTML);
    abrirPaisDetalle(event.target.parentNode.childNodes[3].innerHTML)
}, false);

function abrirPaisDetalle(pais) {
    window.open("detalle.html?name=" + pais, "_self");        
}







