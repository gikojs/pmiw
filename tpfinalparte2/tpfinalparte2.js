let creditosY = 0;

let sonido = 0;
let sganar = 0;
let sperder = 0;
let s_cargados = false;

let prota;
let protaimg;
let fondo;

let izq = false;
let der = false;

let estado = 0;

let puntos = 0;

class btn {
  constructor(x, y, ancho, alto, texto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;
  }
  
  dibujar() {
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    textSize(22);
    
    fill(50);
    rect(this.x, this.y, this.ancho, this.alto);
    fill(255);
    text(this.texto, this.x, this.y);
  }
  
  uso(px, py) {
    return ( px > this.x - this.ancho/2 && px < this.x + this.ancho/2 && py > this.y - this.alto/2 && py < this.y + this.alto/2);
    
  }
}

let btnvolver = new btn(400, 300, 180, 55, "voler a jugar");
let btnsalir = new btn(400, 360, 180, 55, "salir");

let btninicio = new btn(400, 200, 180, 55, "jugar");
let btnreglas = new btn(400, 270, 180, 55, "reglas");
let btncreditos = new btn(400, 340, 180, 55, "creditos");
let btnmenu = new btn(400, 340, 180, 55, "volver");

class protagonista {
  constructor(x, y, tam, vel, imagen) {
    this.x = x;
    this.y = y;
    this.tam = tam;
    this.vel = vel;
    this.img = imagen;
  }

  mover() {
    if (izq) {
      this.x -= this.vel;
    }

    if (der) {
      this.x += this.vel;
    }

    // límites
    if (this.x < 0) {
      this.x = 0;
    }

    if (this.x > width - this.tam) {
      this.x = width - this.tam;
    }
  }

  dibujar() {
  image(this.img, this.x, this.y, this.tam, this.tam);
  }
}

class objeto {
  constructor(x, y, tam, vel, imagen) {
    this.x = x;
    this.y = y;
    this.tam = tam;
    this.vel = vel;
    this.img = imagen;
  }

  caida() {
    this.y += this.vel;

    if (this.y > height) {
      puntos--;

      if (sperder.isLoaded()) {
        sperder.play();
      }

      this.y = -30;
      this.x = random(this.tam/2, width-this.tam/2);
    }
  }

  dibujar() {
    image(this.img, this.x - this.tam/2, this.y - this.tam/2, this.tam, this.tam);
  }
}

let obj = [];
let img = [];
let fondos = [];

class pantalla {

  dibujar(estado) {
    if (estado == 2) {
    image(fondos[2], 0, 0, width, height);
    
    } else if (estado == 3) {
      image(fondos[3], 0, 0, width, height);
      
    } else if (estado == 4 || estado == 5) {
    image(fondos[1], 0, 0, width, height);
    }
    
    textAlign(CENTER, CENTER);
    fill(0);

    if (estado == 2) { // ganar
    
      textSize(50);
      fill(255);
      text("GANASTE", 400, 40);
    
      textSize(20);
      text("Pudiste terminar de arreglarte!", 400, 250);
    
      btnvolver.dibujar();
      btnsalir.dibujar();

    } else if (estado == 3) {  // perder
      textSize(50);
      fill(255);
      text("PERDISTE", 400, 40);
      textSize(30);
      text("no pudiste terminar de arreglarte!", 400, 250);
    
      btnvolver.dibujar();
     btnsalir.dibujar();

    } else if (estado == 4) { // reglas
      fill(255);
      textSize(40);
      text("REGLAS", 400, 65);

      textSize(22);
      text("Tu objetivo es conseguir 10 puntos.", 400, 130);
      text("Usá las flechas izquierda y derecha", 400, 180);
      text("para mover a la protagonissta.", 400, 215);
      text("Atrapa los objetos para sumar puntos.", 400, 260);
      text("Si dejás caer demasiados, perdés.", 400, 295);
    
      btnmenu.dibujar();

    } else if (estado == 5) {// créditos
      fill(255);
      textSize(20);
    
      text("Sobreviviendo al UPD", width/2, creditosY);
      text("Trabajo Practico Final", width/2, creditosY-50);
      text("Etapa 2", width/2, creditosY-100);
      text("Hecho por:", width/2, creditosY-150);
      text("Anahí Leonardo", width/2, creditosY-200);
      text("Valentina Chavez", width/2, creditosY-250);
      text("Comision 3", width/2, creditosY-300);
  text("Año 2026", width/2, creditosY-350);

  creditosY = creditosY + 1;
    
    btnmenu.dibujar();
    }
  }
}

let pjuego = new pantalla();

function s_completos(datos) {
  s_cargados = true; //cuando se carguen los datos pasa a true
  console.log("sonidos cargados");
}

function setup() {
  createCanvas(800, 400);
  
  img[0] = loadImage("data/plancha.png");
  img[1] = loadImage("data/labial.png");
  img[2] = loadImage("data/rubor.png");
  
  fondos[0] = loadImage("data/menu.jpg");
  fondos[1] = loadImage("data/fondo.png")
  fondos[2] = loadImage("data/ganar.jpg")
  fondos[3] = loadImage("data/perder.jpg")
  
  protaimg = loadImage("data/prota.png");
  
  prota = new protagonista(400, 300, 120, 8, protaimg);
  
  sonido = loadSound('data/musica.mp3', s_completos);
  sganar = loadSound('data/ganar.mp3');
  sperder = loadSound('data/perder.mp3');
  
  obj.push(new objeto(100, -30, 30, 2, img[0]));
  obj.push(new objeto(300, -100, 40, 4, img[1]));
  obj.push(new objeto(500, -200, 25, 3, img[2]));
}

function draw() {
  background(200);
  
  if (estado == 0) {
    inicio();
    
  } else if (estado == 1) {
    image(fondos[1], 0, 0, width, height);
    prota.mover();
    prota.dibujar();
  
    colision();
  
    for (let objeto of obj) {
      objeto.caida();
      objeto.dibujar();
    }
  
    textAlign(LEFT, BASELINE);
    textSize(30);
    fill(255);
    text("Puntos: " + puntos, 20, 35);
  
    if (puntos <= -1) {
      estado = 3;
      
      if(s_cargados && sonido.isPlaying()) {
        sonido.stop();
      }
    }

    if (puntos >= 10) {
      estado = 2;
    }
  } else {
    pjuego.dibujar(estado);
  }
}

// funciones de movimiento
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    izq = true;
  }

  if (keyCode === RIGHT_ARROW) {
    der = true;
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    izq = false;
  }

  if (keyCode === RIGHT_ARROW) {
    der = false;
  }
}

function colision() {

  for (let objeto of obj) {
    if ( objeto.x + objeto.tam/2 > prota.x && objeto.x - objeto.tam/2 < prota.x + prota.tam && objeto.y + objeto.tam/2 > prota.y && objeto.y - objeto.tam/2 < prota.y + prota.tam) {
      
      puntos++;
      
      if (sganar.isLoaded()) {
        sganar.play();
      }
      
      objeto.y = -30 //reestablecer el circulo
      objeto.x = random(objeto.tam/2, width - objeto.tam/2);
    }
  }
} 

function reiniciar() {
  puntos = 0;
  prota.x = 400;
  izq = false;
  der = false;
  creditosY = 0;
  
  for (let objeto of obj) {
    objeto.y = random (-300, -30);
    objeto.x = random (objeto.tam/2, width - objeto.tam/2);
  }
  
  estado = 1;
}


function mousePressed() {
  if (estado == 0) {
    if (btninicio.uso(mouseX, mouseY)) {     
      reiniciar();
      
      if (s_cargados && !sonido.isPlaying()) { //ver si ya se esta funcionando el sonido
        sonido.loop();
      }
      
    } else if (btnreglas.uso(mouseX, mouseY)) {
      estado = 4;
      if (s_cargados && sonido.isPlaying()) { //ver si ya se esta funcionando el sonido
        sonido.stop();
      }

    } else if (btncreditos.uso(mouseX, mouseY)) {
      estado = 5;
      if (s_cargados && sonido.isPlaying()) { //ver si ya se esta funcionando el sonido
        sonido.stop();
      }
    }

  } else if (estado == 2 || estado == 3) {

    if (btnvolver.uso(mouseX, mouseY)) {
      reiniciar();
      if (s_cargados && !sonido.isPlaying()) { //ver si ya se esta funcionando el sonido
        sonido.loop();
      }

    } else if (btnsalir.uso(mouseX, mouseY)) {
      estado = 0;
      
      if (s_cargados && sonido.isPlaying()) { //ver si ya se esta funcionando el sonido
        sonido.stop();
      }
    }

  } else if (estado == 4 || estado == 5) {

    if (btnmenu.uso(mouseX, mouseY)) {
      estado = 0;
      
      if (s_cargados && sonido.isPlaying()) {//ver si ya se esta funcionando el sonido
        sonido.stop();
      }
    }
  }
}

function inicio() {
  image(fondos[0], 0, 0, width, height);
  
  textAlign(CENTER, CENTER);  
  textSize(50);
  fill(255);
  text("Arreglate rapido!!", 400, 100);
  
  btninicio.dibujar();
  btnreglas.dibujar();
  btncreditos.dibujar();
}
