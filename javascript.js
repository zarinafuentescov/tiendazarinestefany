function sendMail() {
    var link = "mailto:zarinafuentescov@gmail.com" +
        "?cc=arinafuentescov@gmail.com" +
        "&subject=" + encodeURIComponent("Tienda Zarinestefany") +
        "&body=" + encodeURIComponent(document.getElementById('observaciones').value);

    window.location.href = link;
}