//carga de complementos
function t_completos(datos) {
  textos = datos;
  console.log("textos cargados");
}

function s_completos(datos) {
  s_cargados = true; //cuando se carguen los datos pasa a true
  console.log("sonidos cargados");
}

//pantalla especiales

function p_inicio() {
  rectMode(CENTER, CENTER);
  textAlign(CENTER, CENTER);
  image(menu, 0, 0, width, height);

  fill(225);
  textSize(50);
  text("titulo", 100, 120);

  textSize(25);
  //btn Inicio

  if (btnarea(btn_inicio.x, btn_inicio.y, btn_inicio.ancho, btn_inicio.alto)) {
    fill(170, 80, 232);
  } else {
    fill(225);
  }
  rect(btn_inicio.x, btn_inicio.y, btn_inicio.ancho, btn_inicio.alto);

  fill(0);
  text("INICIAR", btn_inicio.x, btn_inicio.y );

  //btn creditos

  if (btnarea(btn_creditos.x, btn_creditos.y, btn_creditos.ancho, btn_creditos.alto)) {
    fill(170, 80, 232);
  } else {
    fill(225);
  }
  rect(btn_creditos.x, btn_creditos.y, btn_creditos.ancho, btn_creditos.alto);

  fill(0);
  text("CREDITOS", btn_creditos.x, btn_creditos.y);
}

function btnarea(x_, y_, ancho_, alto_) {
  if (mouseX > x_ - ancho_ / 2 && mouseX < x_ + ancho_ / 2 && mouseY > y_ - alto_ / 2 && mouseY < y_ + alto_ / 2) {
    return true;
  } else {
    return false;
  }
}

function p_creditos() {
  background(225);

  fill(0);
  textSize(50);
  text("titulo", width/2, 120);

  rectMode(CENTER, CENTER);
  textAlign(CENTER, CENTER);

  textSize(25);

  //btn
  if (btnarea(btn_volver.x, btn_volver.y, btn_volver.ancho, btn_volver.alto)) {
    fill(170, 80, 232);
  } else {
    fill(225);
  }
  rect(btn_volver.x, btn_volver.y, btn_volver.ancho, btn_volver.alto);

  fill(0);
  text("VOLVER", btn_volver.x, btn_volver.y);
  contador_c = 450;

  text("Titulo de la aventura", width/2, contador_c);
}

function historia() {

  rectMode(CENTER, CENTER);
  textAlign(CENTER, CENTER);

  if (nodo == 1 ) {
    image(img0, 0, 0, width, height);

    fill(0);
    rect(550, height/2, 300, 400);

    if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
      fill(170, 80, 232);
    } else {
      fill(225);
    }
    rect(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto);

    if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto);

    push(); // Guarda
    textAlign(CENTER, BOTTOM);
    fill(250);

    text(textos[0].titulo, 550, 70, 260, 490);
    pop();

    textSize(20);
    fill(0);
    text(textos[0].boton1, btn_ant.x, btn_ant.y);

    fill(0);
    text(textos[0].boton2, btn_sig.x, btn_sig.y);
  } else if (nodo == 2) {
    image(img1, 0, 0, width, height);
    fill(0);
    rect(400, 400, 800, 200);

    if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
      fill(170, 80, 232);
    } else {
      fill(225);
    }
    rect(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto);

    if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto);

    push(); // Guarda
    textAlign(CENTER, BOTTOM);
    fill(250);

    text(textos[1].titulo, width/2, 200, 390, 430);
    pop();

    textSize(20);
    fill(0);
    text(textos[1].boton1, btn_ant.x, btn_ant.y);

    fill(0);
    text(textos[1].boton2, btn_sig.x, btn_sig.y);
  } else if (nodo == 3) {
    image(img2, 0, 0, width, height);
    fill(0);
    rect(400, 400, 800, 200);

    if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
      fill(170, 80, 232);
    } else {
      fill(225);
    }
    rect(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto);

    if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto);

    push(); // Guarda
    textAlign(CENTER, BOTTOM);
    fill(250);

    text(textos[2].titulo, width/2, 200, 390, 430);
    pop();

    textSize(20);
    fill(0);
    text(textos[2].boton1, btn_ant.x, btn_ant.y);

    fill(0);
    text(textos[2].boton2, btn_sig.x, btn_sig.y);
  } else if (nodo == 4) { //primera decision
    image(img2, 0, 0, width, height);
    fill(0);
    rect(400, 400, 800, 200);

    if (btnarea(btn_a.x, btn_a.y, btn_a.ancho+50, btn_a.alto)) {
      fill(170, 80, 232);
    } else {
      fill(225);
    }
    rect(btn_a.x, btn_a.y, btn_a.ancho+50, btn_a.alto);

    if (btnarea(btn_b.x, btn_b.y, btn_b.ancho+50, btn_b.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_b.x, btn_b.y, btn_b.ancho+50, btn_b.alto);

    push(); // Guarda
    textAlign(CENTER, BOTTOM);
    fill(250);

    text(textos[3].titulo, width/2, 150, 390, 430);
    pop();

    textSize(15);
    fill(0);
    text(textos[3].boton1, btn_a.x, btn_a.y);

    fill(0);
    text(textos[3].boton2, btn_b.x, btn_b.y);
  } else if (nodo == 5) { //arreglarse poco
    image(img11, 0, 0, width, height);
    fill(0);
    rect(400, 400, 800, 200);

    if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto);

    push(); // Guarda
    textAlign(CENTER, BOTTOM);
    fill(250);

    text(textos[4].titulo, width/2, 180, 390, 430);
    pop();

    fill(0);
    text(textos[4].boton2, btn_sig.x, btn_sig.y);
  } else if (nodo == 6) { //arreglarse bien
    image(img4, 0, 0, width, height);
    fill(0);
    rect(400, 400, 800, 200);

    if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
      fill(170, 80, 232);
    } else {
      fill(225);
    }
    rect(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto);

    if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto);

    push(); // Guarda
    textAlign(CENTER, BOTTOM);
    fill(250);

    text(textos[5].titulo, width/2, 190, 390, 430);
    pop();

    textSize(20);
    fill(0);
    text(textos[5].boton1, btn_ant.x, btn_ant.y);

    fill(0);
    text(textos[5].boton2, btn_sig.x, btn_sig.y);
  } else if (nodo == 7) {
    image(img12, 0, 0, width, height);
    fill(0);
    rect(400, 400, 800, 200);

    if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
      fill(170, 80, 232);
    } else {
      fill(225);
    }
    rect(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto);

    if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto);

    push(); // Guarda
    textAlign(CENTER, BOTTOM);
    fill(250);

    text(textos[6].titulo, width/2, 190, 390, 430);
    pop();

    textSize(20);
    fill(0);
    text(textos[6].boton1, btn_ant.x, btn_ant.y);

    fill(0);
    text(textos[6].boton2, btn_sig.x, btn_sig.y);
  } else if (nodo == 8) { //segunda decision
    image(img6, 0, 0, width, height);
    fill(0);
    rect(400, 400, 800, 200);

    if (btnarea(btn_a.x, btn_a.y, btn_a.ancho+50, btn_a.alto)) {
      fill(170, 80, 232);
    } else {
      fill(225);
    }
    rect(btn_a.x, btn_a.y, btn_a.ancho+50, btn_a.alto);

    if (btnarea(btn_b.x, btn_b.y, btn_b.ancho+50, btn_b.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_b.x, btn_b.y, btn_b.ancho+50, btn_b.alto);

    push(); // Guarda
    textAlign(CENTER, BOTTOM);
    textSize(20);
    fill(250);

    text(textos[7].titulo, width/2, 220, 500, 430);
    pop();

    textSize(15);
    fill(0);
    text(textos[7].boton1, btn_a.x, btn_a.y);

    fill(0);
    text(textos[7].boton2, btn_b.x, btn_b.y);
  } else if (nodo == 9) {
    image(img6, 0, 0, width, height);
    fill(0);
    rect(400, 400, 800, 200);

    if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto);

    push(); // Guarda
    textAlign(CENTER, BOTTOM);
    fill(250);

    text(textos[8].titulo, width/2, 190, 390, 430);
    pop();

    textSize(20);
    fill(0);
    text(textos[8].boton1, btn_ant.x, btn_ant.y);

    fill(0);
    text(textos[8].boton2, btn_sig.x, btn_sig.y);
  } else if (nodo == 10) {
    image(img6, 0, 0, width, height);
    fill(0);
    rect(400, 400, 800, 200);

    if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
      fill(170, 80, 232);
    } else {
      fill(225);
    }
    rect(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto);

    if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto);

    push(); // Guarda
    textAlign(CENTER, BOTTOM);
    fill(250);

    text(textos[9].titulo, width/2, 190, 390, 430);
    pop();

    textSize(20);
    fill(0);
    text(textos[9].boton1, btn_ant.x, btn_ant.y);

    fill(0);
    text(textos[9].boton2, btn_sig.x, btn_sig.y);
  } else if (nodo == 11) { //final hospital
    image(img7, 0, 0, width, height);
    fill(0);
    rect(400, 400, 800, 200);

    if (btnarea(btn_volver.x, btn_volver.y, btn_volver.ancho, btn_volver.alto)) {
      fill(170, 80, 232);
    } else {
      fill(225);
    }
    rect(btn_volver.x, btn_volver.y, btn_volver.ancho, btn_volver.alto);

    push(); // Guarda
    textAlign(CENTER, BOTTOM);
    fill(250);

    text(textos[10].titulo, 400, 215, 390, 430);
    pop();

    textSize(20);
    fill(0);
    text(textos[10].boton1, btn_volver.x, btn_volver.y);
  } else if (nodo == 12) {
    image(img8, 0, 0, width, height);
    fill(0);
    rect(400, 400, 800, 200);

    if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto);

    push(); // Guarda
    textAlign(CENTER, BOTTOM);
    fill(250);

    text(textos[11].titulo, width/2, 190, 390, 430);
    pop();

    textSize(20);

    fill(0);
    text(textos[11].boton2, btn_sig.x, btn_sig.y);
  } else if (nodo == 13) { //decisiom maquillaje
    image(img4, 0, 0, width, height);
    fill(0);
    rect(400, 400, 800, 200);

    if (btnarea(btn_a.x, btn_a.y, btn_a.ancho+50, btn_a.alto)) {
      fill(170, 80, 232);
    } else {
      fill(225);
    }
    rect(btn_a.x, btn_a.y, btn_a.ancho+50, btn_a.alto);

    if (btnarea(btn_b.x, btn_b.y, btn_b.ancho+50, btn_b.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_b.x, btn_b.y, btn_b.ancho+50, btn_b.alto);

    push(); // Guarda
    textAlign(CENTER, BOTTOM);
    textSize(20);
    fill(250);

    text(textos[12].titulo, width/2, 210, 500, 430);
    pop();

    textSize(15);
    fill(0);
    text(textos[12].boton1, btn_a.x, btn_a.y);

    fill(0);
    text(textos[12].boton2, btn_b.x, btn_b.y);
  } else if (nodo == 14) { //maquillaje tardado
    image(img9, 0, 0, width, height);
    fill(0);
    rect(400, 400, 800, 200);

    if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto);

    push(); // Guarda
    textAlign(CENTER, BOTTOM);
    fill(250);

    text(textos[13].titulo, width/2, 180, 390, 430);
    pop();

    textSize(20);

    fill(0);
    text(textos[13].boton2, btn_sig.x, btn_sig.y);
  } else if (nodo == 15) {
    image(img5, 0, 0, width, height);
    fill(0);
    rect(400, 400, 800, 200);

    if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto);

    if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto);

    push(); // Guarda
    textAlign(CENTER, BOTTOM);
    fill(250);

    text(textos[14].titulo, width/2, 220, 390, 430);
    pop();

    textSize(20);

    fill(0);
    text(textos[14].boton1, btn_ant.x, btn_ant.y);

    fill(0);
    text(textos[14].boton2, btn_sig.x, btn_sig.y);
  } else if (nodo == 16) { //maquillaje rapido
    image(img3, 0, 0, width, height);
    fill(0);
    rect(400, 400, 800, 200);

    if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto);

    push(); // Guarda
    textAlign(CENTER, BOTTOM);
    fill(250);

    text(textos[15].titulo, width/2, 195, 390, 430);
    pop();

    textSize(20);

    fill(0);
    text(textos[15].boton2, btn_sig.x, btn_sig.y);
  } else if (nodo == 17) { //maquillaje rapido
    image(img11, 0, 0, width, height);
    fill(0);
    rect(400, 400, 800, 200);

    if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto);

    if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto);

    push(); // Guarda
    textAlign(CENTER, BOTTOM);
    fill(250);

    text(textos[16].titulo, width/2, 190, 390, 430);
    pop();

    textSize(20);

    fill(0);
    text(textos[16].boton1, btn_ant.x, btn_ant.y);

    fill(0);
    text(textos[16].boton2, btn_sig.x, btn_sig.y);
  } else if (nodo == 18) { //maquillaje rapido
    image(img12, 0, 0, width, height);
    fill(0);
    rect(400, 400, 800, 200);

    if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto);

    if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto);

    push(); // Guarda
    textAlign(CENTER, BOTTOM);
    fill(250);

    text(textos[17].titulo, width/2, 200, 390, 430);
    pop();

    textSize(20);

    fill(0);
    text(textos[17].boton1, btn_ant.x, btn_ant.y);

    fill(0);
    text(textos[17].boton2, btn_sig.x, btn_sig.y);
  } else if (nodo == 19) {
    image(img13, 0, 0, width, height);
    fill(0);
    rect(400, 400, 800, 200);

    if (btnarea(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_ant.x, btn_ant.y, btn_ant.ancho, btn_ant.alto);

    if (btnarea(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_sig.x, btn_sig.y, btn_sig.ancho, btn_sig.alto);

    push(); // Guarda
    textAlign(CENTER, BOTTOM);
    fill(250);

    text(textos[18].titulo, width/2, 180, 390, 430);
    pop();

    textSize(20);

    fill(0);
    text(textos[18].boton1, btn_ant.x, btn_ant.y);

    fill(0);
    text(textos[18].boton2, btn_sig.x, btn_sig.y);
  } else if (nodo == 20) { //desicion boliche
    image(img13, 0, 0, width, height);
    fill(0);
    rect(400, 400, 800, 200);

    if (btnarea(btn_a.x, btn_b.y, btn_b.ancho, btn_b.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_a.x, btn_a.y, btn_a.ancho, btn_a.alto);

    if (btnarea(btn_b.x, btn_b.y, btn_b.ancho, btn_b.alto)) {
      fill(170, 80, 232); // Morado al pasar el mouse
    } else {
      fill(225); // Gris por defecto
    }
    rect(btn_b.x, btn_b.y, btn_b.ancho, btn_b.alto);

    push(); // Guarda
    textAlign(CENTER, BOTTOM);
    fill(250);

    text(textos[19].titulo, width/2, 180, 390, 430);
    pop();

    textSize(20);

    fill(0);
    text(textos[19].boton1, btn_ant.x, btn_ant.y);

    fill(0);
    text(textos[19].boton2, btn_sig.x, btn_sig.y);
  } else if (nodo == 21) {
  }
}
