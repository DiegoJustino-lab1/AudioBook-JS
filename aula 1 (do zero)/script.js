const botaoPlayPause = document.getElementById("play-pause");
const botaoProximo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");
const audio = document.getElementById("audio-capitulo");
const nomeCapitulo= document.getElementById("capitulo");
let taTocando= false;
const quantidadeCapitulos= 30;
let capitulo=1;

function tocarFaixa(){
    audio.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
    audio.play();
    taTocando=true;
}

function pausarFaixa(){
    audio.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    audio.pause();
    taTocando=false;
}

function tocarOuPauseFaixa(){
    if(taTocando===true){
        pausarFaixa();
    }else{
        tocarFaixa();
    }
}

function proximoCapitulo(){
    if(capitulo=== quantidadeCapitulos){
    capitulo =1;
    }else{
        capitulo += 1;
    }
    audio.src ="books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerHTML = "Capítulo " + capitulo;
    tocarFaixa();
    taTocando=true;
}

function anteriorCapitulo(){
    if(capitulo===1){
        capitulo=quantidadeCapitulos;
    }else{
        capitulo -=1;
    }
    audio.src ="books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerHTML = "Capítulo " + capitulo;
    tocarFaixa();
    taTocando=true;
}

botaoPlayPause.addEventListener('click', tocarOuPauseFaixa);
botaoProximo.addEventListener('click', proximoCapitulo);
botaoCapituloAnterior.addEventListener('click', anteriorCapitulo);
audio.addEventListener("ended", proximoCapitulo);
