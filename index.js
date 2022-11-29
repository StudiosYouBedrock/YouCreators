var es = false;
var en = false;

function lenguage_es() {

    document.getElementById("es_lang").style.display = "block";
    document.getElementById("en_lang").style.display = "none";
    es = true;
    if (es == true) {
        document.getElementById("splash_lang").style.display = "none";
    } else {
        document.getElementById("splash_lang").style.display = "block";
    }
}