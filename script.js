let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");          //Responsável pela renderização (desenhar e definir cor)
let box = 32;

function criarBG(){
    context.fillStyle = "#A8B8EE";
    context.fillRect(0,0,16 * box, 16 * box);
}

criarBG();