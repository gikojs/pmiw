let fondo = [];
let caminata = [];
let mesas = [];
let clientes = [];
let burbujas = [];

let spriteFon = 0;
let spriteCam = 0;

let x = 25;
let contador = 0;
let contadorp = 0;
let volver= false;
let btn= false;

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

  for (let i=0; i<8; i++) {
    caminata[i] = loadImage("/data/caminata/" + nf(i, 3) + ".png");
    console.log("/data/caminata/" + nf(i, 3) + ".png CARGADO");
  }

  for (let i=0; i<6; i++) {
    mesas[i] = loadImage("/data/mesas/"+ nf(i, 2) + ".png");
    console.log("/data/mesas/"+ nf(i, 2) + ".png CARGADO");
  }

  for (let i=0; i<6; i++) {
    clientes[i] = loadImage("/data/clientes/"+ nf(i, 4) + ".png");
    console.log("/data/clientes/"+ nf(i, 4) + ".png CARGADO");
  }

  for (let i=0; i<4; i++) {
    burbujas[i] = loadImage("/data/burbujas/b"+ nf(i, 2) + ".png");
    console.log("/data/clientes/"+ nf(i, 2) + ".png CARGADO");
  }
}

function draw() {
  background(220);

  if (estado===0) {

    image(fondo[spriteFon], 0, -80, width, 700);

    image(caminata[5], 450, -50, 500, 700);

    //rectangulos que marcan a donde arrastrar;
    rect(510, 220, 30, 60);
    image(mesas[4], 480, 170, 90, 120);
    rect(565, 220, 30, 60);
    image(mesas[5], 535, 180, 90, 120);

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
    image(mesas[4], areaX1-30, areaY1-50, 90, 120);
    fill(252, 3, 3);
    rect(areaX2, areaY2, 30, 60);
    image(mesas[5], areaX2-30, areaY2-35, 90, 120);


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

    x += 10;

    image(fondo[spriteFon], 0, -80, width, 700);
    caminar(); //llamar funcion para que se haga el cambio
    image(caminata[spriteCam], x, -50, 500, 700);
    //postres avanzando con el personaje
    image(mesas[5], x+400, areaY2-35, 90, 120);
    image(mesas[4], x+350, areaY1-50, 90, 120);
    cambio();
  } else if (estado===2) {

    image(fondo[spriteFon], 0, -80, width, 700);

    image(mesas[0], 100, -10, 400, 600);
    image(mesas[3], 120, -10, 400, 600);
    //funcion de las burbujas de espera
    contadorp++
    burbuja(paciencia(contadorp), 10, 10);

    //mostrar la imagem del postre hasta que se complete el pedido
    if (contadorp<70) {
      image(mesas[4], 124, 30, 90, 90);
    } else {
    }

    //detenersee en la mesa
    if (x<90) {
      image(clientes[1], 120, 0, 400, 600);
      x += 10;
      caminar();
      image(caminata[spriteCam], x, -50, 500, 700);
    } else if (contador<100) {
      x=300;
      contador++;
      image(clientes[3], 120, 0, 400, 600);
      image(caminata[6], x, -50, 500, 700);
    } else {
      //al terminar la espera
      x+=10;
      caminar();
      image(clientes[5], 120, 0, 400, 600);
      image(mesas[4], 200, 180, 120, 120);
      image(caminata[spriteCam], x, -50, 500, 700);
      contadorp=0;
    }

    cambio();
  } else if (estado==3) {

    image(fondo[spriteFon], 0, -80, width, 700);

    image(mesas[3], 120, -10, 400, 600);
    image(mesas[1], 100, -10, 400, 600);

    contadorp++
    burbuja(paciencia(contadorp), 10, 10);

    //mostrar la imagem del postre hasta que se complete el pedido
    if (contadorp<70) {
      image(mesas[5], 124, 30, 70, 90);
    } else {
    }

    //detenersee en la mesa
    if (x<90) {
      image(clientes[0], 120, -10, 400, 600);
      image(mesas[2], 100, -10, 400, 600);
      x += 10;
      caminar();
      image(caminata[spriteCam], x, -50, 500, 700);
    } else if (contador<100) {
      x=300;
      contador++;
      image(clientes[2], 120, -10, 400, 600);
      image(mesas[2], 100, -10, 400, 600);
      image(caminata[6], x, -50, 500, 700);
    } else {
      //al terminar la espera
      image(clientes[4], 120, -10, 400, 600);
      image(mesas[2], 100, -10, 400, 600);
      image(mesas[5], 200, 180, 120, 120);
      image(caminata[7], x, -50, 500, 700);

      contadorp=0;
      btn = true;
      estado = 4;
    }

    cambio();
  } else if (estado === 4) {

    image(fondo[fondo.length - 1], 0, -80, width, 700);
    
    image(mesas[3], 120, -10, 400, 600);
    image(mesas[1], 100, -10, 400, 600);
    image(clientes[4], 120, -10, 400, 600);
    image(mesas[2], 100, -10, 400, 600);
    image(mesas[5], 200, 180, 90, 120);
    image(caminata[7], x, -50, 500, 700);

    fill(255);
    rect(650, 500, 120, 50);

    fill(0);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("volver", 710, 525);
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

  reiniciar();
}


function reiniciar() {
  if (mouseX > 650 && mouseX < 770 && mouseY > 500 && mouseY < 550) {

    spriteFon = 0;
    estado = 0;
    contador = 0;
    x = 25;

    areaX1 = 300;
    areaY1 = 180;

    areaX2 = 200;
    areaY2 = 180;

    pos1 = false;
    pos2 = false;

    btn = false;

    console.log("vuelve a 0");
  }
}

function cambio() {
  //cambio de escena
  if (x>width+500) {
    estado++;
    spriteFon++;
    contador=0;

    //se pasa el fondo
    if (spriteFon >= fondo.length) {
      btn=true;

      console.log("vuelve a 0");

      return;
    }

    x = -300;

    console.log("escena ", estado, " cargada");
    console.log("fondo ", spriteFon, " cargada");
  }
}

function paciencia(contadorp) {
  return 100-contadorp;
}

function burbuja(paciencia, x, y) {
  if (paciencia > 80) {
    image(burbujas[0], x, y, 600, 600);
  } else if (paciencia > 50) {
    image(burbujas[1], x, y, 600, 600);
  } else  if (paciencia > 30) {
    image(burbujas[2], x, y, 600, 600);
  } else {
    image(burbujas[3], x, y, 600, 600);
  }
}
