//carga de complementos
function t_completos(datos) {
  textos = datos;
  t_cargados = true; //cuando se carguen los datos pasa a true
  console.log("textos cargados");
}

function s_completos(datos) {
  s_cargados = true; //cuando se carguen los datos pasa a true
  console.log("sonidos cargados");
}

//pantalla especiales

function p_inicio() {
  fill(200);
  textSize(50);
  text("titulo", width/2, 120);
  
  rectMode(CENTER, CENTER); 
  textAlign(CENTER, CENTER);
  
  textSize(25);
 
  //btn Inicio
  fill(btncolor); 
  rect(btn_inicio.x, btn_inicio.y, btn_inicio.ancho, btn_inicio.alto);
  fill(0);
  text("INICIAR", btn_inicio.x, btn_inicio.y );

  //btn creditos
  fill(btncolor2);
  rect(btn_creditos.x, btn_creditos.y, btn_creditos.ancho, btn_creditos.alto);
  fill(0);
  text("CREDITOS", btn_creditos.x, btn_creditos.y);
  /*carga de multimedia
  if (t_cargados) {
    text(textos[0].titulo, width/2, 200);
    text(textos[0].boton1, width/2, 300);
    text(textos[0].boton2, width/2, 400);
  } else {
    console.log("cargando textos");
  }*/
}

function btnarea(x_, y_, ancho_, alto_) {
  if (mouseX > x_ - ancho_ / 2 && mouseX < x_ + ancho_ / 2 && mouseY > y_ - alto_ / 2 && mouseY < y_ + alto_ / 2) {
    return true;
  } else {
    return false;
  }
}

function p_creditos() {
  fill(225);
  textSize(20);
  text("titulo", width/2, 140);
}
