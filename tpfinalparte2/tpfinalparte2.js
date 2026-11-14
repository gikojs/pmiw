let izq = false;
let der = false;

let estado = 0;

let ganar = false;
let perder = false;
let reglas = false;
let creditos = false;

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
let btnsalir = new btn(400, 400, 180, 55, "salir");

let btninicio = new btn(400, 250, 180, 55, "jugar");
let btnreglas = new btn(400, 320, 180, 55, "reglas");
let btncreditos = new btn(400, 390, 180, 55, "creditos");

let prota = {
  x:400,
  y:375,
  tam:50,
  vel:5,

  mover: function() {

  if (izq) {
    this.x -= this.vel;
  }

  if (der) {
    this.x += this.vel;
  }

  //limites
  if (this.x < 0) {
    this.x = 0;
  }

  if (this.x > width - this.tam) {
    this.x = width - this.tam;
  }
},

  dibujar: function() {
  square(this.x, this.y, this.tam);
}

}

class objeto {
  constructor(x, y, tam, vel, color) {
  this.x = x;
  this.y = y;
  this.tam = tam;
  this.vel = vel;
  this.color = color;
  }

  caida() {
  this.y += this.vel;
  
  if (this.y > height) {
    puntos--; //retar 1 ppunto cuando llega abajo
    this.y = -30;
    this.x = random(this.tam/2, width-this.tam/2);
  }
  }

  dibujar() {
    fill(this.color);
    circle(this.x, this.y, this.tam);
  }

}

let obj = []

function setup() {
  createCanvas(800, 450);
  
  obj.push(new objeto(100, -30, 30, 2, "red"));
  obj.push(new objeto(300, -100, 40, 4, "blue"));
  obj.push(new objeto(500, -200, 25, 3, "green"));
}

function draw() {
  background(200);
  
  if (estado == 0) {
    inicio();
  } else if (estado == 1) {
    prota.mover();
    prota.dibujar();
  
    colision();
  
    for (let objeto of obj) {
      objeto.caida();
      objeto.dibujar();
    }
  
    textAlign(LEFT, BASELINE);
    textSize(30);
    fill(0);
    text("Puntos: " + puntos, 20, 35);
  
    if (puntos == -1) {
      estado = 3;
    }

    if (puntos == 10) {
      estado = 2;
    }
  } else if (estado == 2) {
    ganar = true;
    pantalla();
  } else if (estado == 3) {
    perder = true;
    pantalla();
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
      
      objeto.y = -30 //reestablecer el circulo
      objeto.x = random(objeto.tam/2, width - objeto.tam/2);
    }
  }
} 

function pantalla() {
  background(225);
  
  if ( ganar == true) {
    rectMode (CENTER);
    textAlign(CENTER, CENTER);

    textSize(50);
    text("GANASTE", 400, 200);
    
    textSize(30);
    text("Pudiste terminar de arreglarte!", 400, 230);
    
    btnvolver.dibujar();
    btnsalir.dibujar();
        
  } else if ( perder == true) {
    rectMode (CENTER);
    textAlign(CENTER, CENTER);

    textSize(50);
    
    fill(0);
    text("PERDISTE", 400, 200);
    textSize(30);
    text("no pudiste terminar de arreglarte!", 400, 230);
    
    btnvolver.dibujar();
    btnsalir.dibujar(); 
    
  } else if ( reglas == true ) {
    rectMode (CENTER);
    textAlign(CENTER, CENTER);

    textSize(50);
    text("INSTRUCCIONES", 100, 200);
    
  } else if ( creditos == true ) {
    rectMode (CENTER);
    textAlign(CENTER, CENTER);

    textSize(50);
    text("INSTRUCCIONES", 100, 200);
  }
}

function mousePressed() {
  
  //psntalla de inicio
  if (estado == 0) {
    if (btninicio.uso(mouseX, mouseY)) {
      estado = 1;
    }
  }
   //perdiste true
  if (estado == 3) {
    if (btnvolver.uso(mouseX, mouseY)) {
      puntos = 0;
      perder = false;
      ganar = false; 
      
      prota.x = 400;
      
      for (let objeto of obj) {
        objeto.y = random(-300, -30);
        objeto.x = random(objeto.tam/2, width - objeto.tam/2);
      }
      
      estado = 1;
    }
    if (btnsalir.uso(mouseX, mouseY)) {
      estado = 0;
    }
  }
  
  //ganar true
  if (estado == 2) {
    if (btnvolver.uso(mouseX, mouseY)) {
      puntos = 0;
      perder = false;
      ganar = false; 
      
      prota.x = 400;
      
      for (let objeto of obj) {
        objeto.y = random(-300, -30);
        objeto.x = random(objeto.tam/2, width - objeto.tam/2);
      }
      
      estado = 1;
    }
    if (btnsalir.uso(mouseX, mouseY)) {
      estado = 0;
    }
  }
}

function inicio() {
  background(225);
  
  textAlign(CENTER, CENTER);  
  textSize(50)
  fill(0)
  text("Arreglate rapido!!", 400, 100);
  
  btninicio.dibujar();
  btnreglas.dibujar();
  btncreditos.dibujar();
}
