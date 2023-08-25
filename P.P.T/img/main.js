let JogadorEscolha = 0;
let JogadorPontos = 0;
let ComputadorEscolha = 0;
let ComputadorPontos = 0;
let ganhador = -1;

function jogar (Escolha) {
    JogadorEscolha = Escolha;
    ComputadorEscolha = Mathf.floor(Math.random() * (3 - 1 + 1)) + 1; 

    /* 
    EMPATE = 0;
    JOGADOR = 1;
    COMPUTADOR = 2;
    */

    if (JogadorEscolha == 1 && ComputadorEscolha == 1) {
        ganhador = 0;
    } 
    else if (JogadorEscolha == 1 && ComputadorEscolha == 2) {
        ganhador = 2;
    }
    else if (JogadorEscolha == 1 && ComputadorEscolha == 3 ) {
        ganhador = 1;
    }
    else if (JogadorEscolha == 2 && ComputadorEscolha == 1 ) {
        ganhador = 1;
    }
    else if (JogadorEscolha == 2 && ComputadorEscolha == 2 ) {
        ganhador = 0;
    }
    else if (JogadorEscolha == 2 && ComputadorEscolha == 3 ) {
        ganhador = 2;
    }
    else if (JogadorEscolha == 3 && ComputadorEscolha == 1 ) {
        ganhador = 2
    }
    else if (JogadorEscolha == 3 && ComputadorEscolha == 2 ) {
        ganhador = 1;
    }
    else if (JogadorEscolha == 3 && ComputadorEscolha == 3 ) {
        ganhador = 0;
    }

    document.getElementById('JogadorEscolha1').classList.remove('selecionado');
    document.getElementById('JogadorEscolha2').classList.remove('selecionado');
    document.getElementById('JogadorEscolha3').classList.remove('selecionado');
    document.getElementById('ComputadorEscolha1').classList.remove('selecionado');
    document.getElementById('ComputadorEscolha2').classList.remove('selecionado');
    document.getElementById('ComputadorEscolha3').classList.remove('selecionado');

    document.getElementById('JogadorEscolha'+JogadorEscolha).classList.add('selecionado');
    document.getElementById('ComputadorEscolha'+ComputadorEscolha).classList.add('selecionado');

    if (ganhador == 0 ) {
        document.getElementById('mensagem').innerHTML = "EMPATE"
    }
    else if (ganhador == 1 ) {
        document.getElementById('mensagem').innerHTML = "GABRIEL GANHOU!";JogadorPontos++;
    }
    else if (ganhador == 2 ) {
        document.getElementById('mensagem').innerHTML = "COMPUTADOR GANHOU";ComputadorPontos++;
    }

    document.getElementById('JogadorPontos').innerHTML = JogadorPontos; 
    document.getElementById('ComputadorPontos').innerHTML = ComputadorPontos;   
}