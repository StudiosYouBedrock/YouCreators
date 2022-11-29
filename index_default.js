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