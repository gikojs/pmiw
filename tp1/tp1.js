let fondo = [];
let caminata = [];
let mesas = [];
let clientes = [];

let spriteFon = 0;
let spriteCam = 0;

let x = 25;

//variables para la escena 0
let areaX1 = 300;
let areaY1 = 180;
let pos1 = false;

let areaX2 = 200;
let areaY2 = 180;
let pos2 = false;

let estado = 0;

function setup() {
  createCanvas(800, 600);

  //carga de imagenes
  for (let i=0; i<3; i++) {
    fondo[i] = loadImage("/data/fondos/fondo" + nf(i, 2) + ".png");
    console.log("/data/fondos/fondo" + nf(i, 2) + ".png CARGADO");
  }

  for (let i=0; i<6; i++) {
    caminata[i] = loadImage("/data/caminata/" + nf(i, 3) + ".png");
    console.log("/data/caminata/" + nf(i, 3) + ".png CARGADO");
  }

  for (let i=0; i<4; i++) {
    mesas[i] = loadImage("/data/mesas/"+ nf(i, 2) + ".png");
    console.log("/data/mesas/"+ nf(i, 2) + ".png CARGADO");
  }
  
  for (let i=0; i<2; i++) {
    clientes[i] = loadImage("/data/clientes/"+ nf(i, 4) + ".png");
    console.log("/data/clientes/"+ nf(i, 4) + ".png CARGADO");
  }
}

function draw() {
  background(220);


  if (estado===0) {

    image(fondo[spriteFon], 0, -80, width, 700);

    image(caminata[5], 450, -50, 500, 700);

    //rectangulos que marcan a donde arrastrar
    rect(510, 220, 30, 60);
    rect(565, 220, 30, 60);

    if (pos1) {
      areaX1 = mouseX - 25;
      areaY1 = mouseY - 30;
    } else if (pos2) {
      areaX2 = mouseX - 15;
      areaY2 = mouseY - 30;
    } else {
    }

    fill(252, 3, 3);
    rect(areaX1, areaY1, 30, 60);
    fill(252, 3, 3);
    rect(areaX2, areaY2, 30, 60);

    //la distancia ayuda a que no sea en los pixeles exactos
    let dist1 = dist(areaX1, areaY1, 510, 220);
    let dist2 = dist(areaX2, areaY2, 565, 220);

    if (dist1 < 15 && dist2 < 15 && !pos1 && !pos2) { // si cumple el lugar y si se solto el bloque
      estado=1;
      //1
      areaX1 = 510;
      areaY1 = 220;
      //2
      areaX2 = 565;
      areaY2 = 220;
      //para caminata
      x = 300;
    } else {
    }
    
  } else if (estado===1) {
    image(fondo[spriteFon], 0, -80, width, 700);
    x += 10;
    caminar(); //llamar funcion para que se haga el cambio
    image(caminata[spriteCam], x, -50, 500, 700);
    cambio();
    
  } else if (estado===2) {
    image(fondo[spriteFon], 0, -80, width, 700);
    
    image(mesas[0], 100, -10, 400, 600);
    image(mesas[3], 120, -10, 400, 600);
    image(clientes[1], 120, 0, 400, 600);
      
    x += 10;
    caminar(); //llamar funcion para que se haga el cambio
    image(caminata[spriteCam], x, -50, 500, 700);
    cambio();
    
  } else if (estado==3) {
    image(fondo[spriteFon], 0, -80, width, 700);
    
    image(mesas[3], 120, -10, 400, 600);
    image(mesas[1], 100, -10, 400, 600);
    image(clientes[0], 120, -10, 400, 600);
    image(mesas[2], 100, -10, 400, 600);
    
    x += 10;
    caminar(); //llamar funcion para que se haga el cambio
    image(caminata[spriteCam], x, -50, 500, 700);
    cambio();
  }
}


function caminar() {

  //floor redondea el resultado de frameCount y el modulo lo divide por la cantidad de sprites
  spriteCam = floor(frameCount/5)%5;
}

function mousePressed() {
  
  console.log(mouseX, mouseY);
  
  if (pos1) {
    pos1 = false; //soltar
  } else {
    //area definida
    if (mouseX > areaX1 && mouseX < areaX1 + 30 && mouseY > areaY1 && mouseY < areaY1 + 60) {
      pos1 = true;
    }
  }

  if (pos2) {
    pos2 = false; //soltar
  } else {
    //area definida
    if (mouseX > areaX2 && mouseX < areaX2 + 30 && mouseY > areaY2 && mouseY < areaY2 + 60) {
      pos2 = true;
    }
  }
}

function cambio() {
  //cambio de escena
  if (x>width+500) {
    x = -300;
    estado++;
    spriteFon++;

    //se pasa el fondo
    if (spriteFon >= fondo.length) {
      spriteFon=0;
      estado=0;
      console.log("vuelve a 0");
    }

    console.log("escena ", estado, " cargada");
    console.log("fondo ", spriteFon, " cargada");
  }
  
}
