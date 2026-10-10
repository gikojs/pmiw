function setup() {
  createCanvas(800, 450);

  loadJSON('textos.json', t_completos);

  menu = loadImage('data/menu.jpg');
  img1 = loadImage('data/2.jpg');
  img2 = loadImage('data/3.jpg');
  img3 = loadImage('data/4.jpg');
  img4 = loadImage('data/5.jpg');

  estado = 0;
  btncolor = color(222);
  btncolor2 = color(222);
}

function draw() {
  background(200);

  if (estado == 0) {
    p_inicio();
  } else if (estado == 1) {
    p_creditos();
  } else if (estado == 2) {
    historia();
  }
}

function mousePressed() {
  console.log(mouseX, mouseY);

  if ( estado == 0 ) {
    if (btnarea(btn_inicio.x, btn_inicio.y, btn_inicio.ancho, btn_inicio.alto)) {
      nodo = 1;
      estado=2;
    } else if (btnarea(btn_creditos.x, btn_creditos.y, btn_creditos.ancho, btn_creditos.alto)) {
      estado = 1;
    }
  } else if ( estado == 1 ) {
    if (btnarea(btn_volver.x, btn_volver.y, btn_volver.ancho, btn_volver.alto)) {
      estado=0;
    }
  } else if ( estado == 2 ) {
    if (nodo == 1) {
      if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
        nodo = 2;
      }
    } else if (nodo == 2) {
      if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
        nodo = 3;
      } else if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
        nodo = 1;
      }
    } else if (nodo == 3) {
      if (btnarea(btn_a.x, btn_a.y, btn_a.ancho, btn_a.alto)) {
        nodo = 4;
      } else if (btnarea(btn_b.x, btn_b.y, btn_b.ancho, btn_b.alto)) {
        nodo = 5;
      }
    }
  }
}
