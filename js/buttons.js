var audio = document.getElementById('cancion');
var indiceCanciones = 0;
var canciones = [
    { title: "The Fall - Half alive", src: "audio/halfalive-the fall.mp3", portada:"img/the_fall.jpg"},
    {title: "Enemy - Imagine dragons", src: "audio/imagine dragons - Enemy.mp3", portada:"img/enemy.jpg"},
    {title: "Limbo - Freddie dredd", src: "audio/Freddie Dredd - limbo.mp3", portada:"img/limbo.jpg"},
    {title: "Cradles - Sub Urban", src: "audio/Sub Urban - Cradles.mp3", portada:"img/cradles.jpg"},
    {title: "Dissolve - Absofacto", src: "audio/Absofacto - Dissolve.mp3", portada:"img/dissolve.jpg"}
];

var portada = document.getElementById('portada');
var titulo = document.getElementById('titulo');

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}

function nextSong() {
    indiceCanciones = (indiceCanciones + 1) % canciones.length;
    changeSong(indiceCanciones);
}

function previousSong() {
    indiceCanciones = (indiceCanciones - 1 + canciones.length) % canciones.length;
    changeSong(indiceCanciones);
}

function changeSong(indiceCanciones) {
    audio.src = canciones[indiceCanciones].src;
    portada.src = canciones[indiceCanciones].portada;
    titulo.innerText = canciones[indiceCanciones].title;
    audio.play();
}