//Alumnas: Anahi Leonardo y Valentina Chavez
//video: https://www.youtube.com/watch?v=2DEx-tBH0JY

function setup() {
  createCanvas(800, 450);

  loadJSON('textos.json', t_completos);
  musica = loadSound('data/musica.mp3', s_completos);

  menu = loadImage('data/menu.jpg');
  img0 = loadImage('data/1.jpg');
  img1 = loadImage('data/2.jpg');
  img2 = loadImage('data/3.jpg');
  img3 = loadImage('data/4.jpg');
  img4 = loadImage('data/5.jpg');
  img5 = loadImage('data/9.jpg');
  img6 = loadImage('data/10.jpg');
  img7 = loadImage('data/11.jpg');
  img8 = loadImage('data/12.jpg');
  img9 = loadImage('data/13.jpg');
  img10 = loadImage('data/14.jpg');
  img11 = loadImage('data/15.jpg');
  img12 = loadImage('data/16.jpg');
  img13 = loadImage('data/17.jpg');
  img14 = loadImage('data/18.jpg');
  img15 = loadImage('data/19.jpg');
  img16 = loadImage('data/20.jpg');
  img17 = loadImage('data/21.jpg');
  img18 = loadImage('data/22.jpg');
  img19 = loadImage('data/23.jpg');

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
      userStartAudio(); // Función nativa de p5 para desbloquear el audio del navegador

      if (musica) {
        musica.loop();
      }
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
      } else if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
        estado = 0;
      }
    } else if (nodo == 2) {
      if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
        nodo = 3;
      } else if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
        nodo = 1;
      }
    } else if (nodo == 3) {
      if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
        nodo = 4;
      } else if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
        nodo = 2;
      }
    } else if (nodo == 4) { //primera desiciom
      if (btnarea(btn_a.x, btn_a.y, btn_a.ancho, btn_a.alto)) {
        nodo = 6;
      } else if (btnarea(btn_b.x, btn_b.y, btn_b.ancho, btn_b.alto)) {
        nodo = 5;
      }
    } else if (nodo == 5) {
      if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
        nodo = 7;
      }
    } else if (nodo == 6) {
      if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
        nodo = 13;
      } else if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
        nodo = 4;
      }
    } else if (nodo == 7) {
      if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
        nodo = 8;
      } else if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
        nodo = 5;
      }
    } else if (nodo == 8) {
      if (btnarea(btn_a.x, btn_a.y, btn_a.ancho, btn_a.alto)) {
        nodo = 12;
      } else if (btnarea(btn_b.x, btn_b.y, btn_b.ancho, btn_b.alto)) {
        nodo = 9;
      }
    } else if (nodo == 9) {
      if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
        nodo = 10;
      }
    } else if (nodo == 10) {
      if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
        nodo = 11;
      } else if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
        nodo = 9;
      }
    } else if (nodo == 11) {
      if (btnarea(btn_volver.x, btn_volver.y, btn_volver.ancho, btn_volver.alto)) {
        estado = 0;
      }
    } else if (nodo == 12) {
      if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
        nodo = 19;
        nodo12 = true;
      }
    } else if (nodo == 13) {
      if (btnarea(btn_a.x, btn_a.y, btn_a.ancho, btn_a.alto)) {
        nodo = 14;
      } else if (btnarea(btn_b.x, btn_b.y, btn_b.ancho, btn_b.alto)) {
        nodo = 16;
      }
    } else if (nodo == 14) {
      if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
        nodo = 15;
      }
    } else if (nodo == 15) {
      if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
        nodo = 19;
        nodo15 = true;
      } else if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
        nodo = 14;
      }
    } else if (nodo == 16) {
      if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
        nodo = 17;
      }
    } else if (nodo == 17) {
      if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
        nodo = 18;
      } else if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
        nodo = 16;
      }
    } else if (nodo == 18) {
      if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
        nodo = 19;
        nodo18 = true;
      } else if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
        nodo = 17;
      }
    } else if (nodo == 19) {
      if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
        nodo = 20;
      } else if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
        if (nodo12 == true) {
          nodo = 12;
          nodo12 = false;
        } else if (nodo15 == true) {
          nodo = 15;
          nodo15 = false;
        } else if (nodo18 == true) {
          nodo = 18;
          nodo18 = false;
        }
      }
    } else if (nodo == 20) {
      if (btnarea(btn_a.x, btn_a.y, btn_a.ancho, btn_a.alto)) {
        nodo = 21;
      } else if (btnarea(btn_b.x, btn_b.y, btn_b.ancho, btn_b.alto)) {
        nodo = 24;
      }
    } else if (nodo == 21) {
      if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
        nodo = 22;
      }
    } else if (nodo == 22) {
      if (btnarea(btn_a.x, btn_a.y, btn_a.ancho, btn_a.alto)) {
        nodo = 24;
      } else if (btnarea(btn_b.x, btn_b.y, btn_b.ancho, btn_b.alto)) {
        nodo = 23;
      }
    } else if (nodo == 23) {
      if (btnarea(btn_volver.x, btn_volver.y, btn_volver.ancho, btn_volver.alto)) {
        estado = 0;
      }
    } else if (nodo == 24) {
      if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
        nodo = 25;
      }
    } else if (nodo == 25) {
      if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
        nodo = 26;
      } else if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
        nodo = 24;
      }
    } else if (nodo == 26) {
      if (btnarea(btn_a.x, btn_a.y, btn_a.ancho, btn_a.alto)) {
        nodo = 27;
      } else if (btnarea(btn_b.x, btn_b.y, btn_b.ancho, btn_b.alto)) {
        nodo = 28;
      }
    } else if (nodo == 27) {
      if (btnarea(btn_volver.x, btn_volver.y, btn_volver.ancho, btn_volver.alto)) {
        estado = 0;
      }
    } else if (nodo == 28) {
      if (btnarea(btn_volver.x, btn_volver.y, btn_volver.ancho, btn_volver.alto)) {
        estado = 0;
      }
    }
  }
}
