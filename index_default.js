var menue = false;

function menu() {

    if (menue == true) {
        document.getElementById("menue").style.display = "none";
        menue = false;
    } else {
        menue = true;
        document.getElementById("menue").style.display = "block";
    }
}

function modal() {
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "assets/sound/release.ogg")
    etiquetaAudio.play()
}

function modal_hide() {
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "assets/sound/modal_hide.ogg")
    etiquetaAudio.play()
}

function snes_pop() {
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "assets/sound/snes_pop.ogg")
    etiquetaAudio.play()
}