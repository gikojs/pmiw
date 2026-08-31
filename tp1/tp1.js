let fondo = [];
let caminata = [];
let spriteFon = 0;
let spriteCam = 0;

//deltaTime
let x = 25;
let vel = 0.05;

let estado = 0;

async function setup() {
  createCanvas(800, 800);

  //carga de imagenes
  for (let i=0; i<3; i++) {
    fondo[i] = loadImage("/data/fondos/fondo" + nf(i, 2) + ".png");
    console.log("/data/fondos/fondo" + nf(i, 2) + ".png CARGADO");
  }

  for (let i=0; i<6; i++) {
    caminata[i] = loadImage("/data/caminata/" + nf(i, 3) + ".png");
    console.log("/data/caminata/" + nf(i, 3) + ".png CARGADO");
  }
}

function draw() {
  background(220);

//movimiento de x
  x += 5;

  if (x>width+30) {
    x = -25;
    if (spriteFon < 3) {
      spriteFon++;
    } else {
      spriteFon = 0;
    }
  }
  
  image(fondo[spriteFon], 0, 0, width, 700);

  caminar(); //llamar funcion para que se haga el cambio
  image(caminata[spriteCam], x, 50, 500, 700);
}

function caminar() {
  
  //floor redondea el resultado de frameCount y el modulo lo divide por la cantidad de sprites
  spriteCam = floor(frameCount/5)%5;
}
