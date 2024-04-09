console.log("roronoa zoro", ml5.version);
var clasificasao_de_som_de_one_piece;
function preload(){
  clasificasao_de_som_de_one_piece = ml5.soundClassifier('SpeechCommands18w');
}

function setup() {
  createCanvas(400, 400);
  clasificasao_de_som_de_one_piece.classify(obterResultado);
}

function obterResultado(error, resultado){
if(error){
console.error(error);
}
console.log(resultado[0].label, resultado[0].confidence);
}

function draw() {
  background(1);
}