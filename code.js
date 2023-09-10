window.addEventListener('load', function() {
  document.addEventListener('keydown', mostrarInformacionTecla)
})

function mostrarInformacionTecla(event) {
    const showKey = document.querySelector('.key')
    showKey.innerHTML = event.key

    if(event.key == " "){
        showKey.innerHTML = "Space"
    }

    console.log(event)
}

