function setup() {
  createCanvas(800, 450);

  loadJSON('textos.json', t_completos);

  estado = 0;
  btncolor = color(222);
  btncolor2 = color(222);
}


function draw() {
  background(200);

  if (estado == 0) {
    p_inicio();
    if (btn_inciof == true) {
      estado++;
    } else if (btn_creditosf == true) {
      p_creditos();
    }
  } else if (estado == 1) {
  }
}

function mousePressed() {
  console.log(mouseX, mouseY);

  if ( estado == 0 ) {
    if (btnarea(btn_inicio.x, btn_inicio.y, btn_inicio.ancho, btn_inicio.alto)) {
      btncolor = color(170, 80, 232); // El color cambiará a morado
      btn_iniciof = true;
    } else if (btnarea(btn_creditos.x, btn_creditos.y, btn_creditos.ancho, btn_creditos.alto)) {
      btncolor2 = color(170, 80, 232); // El color cambiará a morado
      btn_creditosf = true;
    }
  } else if ( estado == 1 ) {
  } else if ( estado == 2 ) {
  } else if ( estado == 3 ) {
  } else if ( estado == 4 ) {
  } else if ( estado == 5 ) {
  } else if ( estado == 6 ) {
  } else if ( estado == 7 ) {
  } else if ( estado == 8 ) {
  } else if ( estado == 9 ) {
  } else if ( estado == 10 ) {
  } else if ( estado == 11 ) {
  }
}
