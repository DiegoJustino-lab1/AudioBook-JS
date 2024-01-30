const botaoPlayPause = document.getElementById("play-pause");
const botaoProximo = document.getElementById("proximo");
const audio = document.getElementById("audio-capitulo");
const nomeCapitulo= document.getElementById("capitulo");
let taTocando= false;
let capitulo=1;

function tocarFaixa(){
    audio.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
    audio.play();
    taTocando=true;
}

botaoPlayPause.addEventListener("click", tocarOuPauseFaixa);
botaoProximo.addEventListener("click", proximoCapitulo);
botaoCapituloAnterior.addEventListener("click", anteriorCapitulo);
audio.addEventListener("ended", proximoCapitulo);

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
    if(capitulo< quantidadeCapitulos){
    capitulo +=1;
    }else{
        capitulo = 1;
    }
    audio.src ="book/dom-casmurro//" + capitulo + ".mp3";
    nomeCapitulo.innerHTML = "Capítulo " + capitulo;
    tocarFaixa();
}

function anteriorCapitulo(){
    if(capitulo==1){
        capitulo
    }else{
        capitulo -=1;
    }
    audio.src ="book/dom-casmurro//" + capitulo + ".mp3";
    nomeCapitulo.innerHTML = "Capítulo " + capitulo;
    tocarFaixa();
}