let estado = 0;

//conexiones de nodos

/*let sig_a = [ //error
//ejemplo, a donde lleva el nodo de origen
  1,      // Nodo 0 → Nodo 1+
  3,      // Nodo 1 → Nodo 3
  5,      // Nodo 2 → Nodo 5
  -1,     // Nodo 3 → final
  -1,     // Nodo 4 → final
  -1,     // Nodo 5 → final
  -1      // Nodo 6 → final
];

let siguienteB = [
  2,      // Nodo 0 → Nodo 2
  4,      // Nodo 1 → Nodo 4
  6,      // Nodo 2 → Nodo 6
  -1,     // Nodo 3 → final
  -1,     // Nodo 4 → final
  -1,     // Nodo 5 → final
  -1      // Nodo 6 → final
];*/

//botones

let btn_a = {
  x: 200,
  y: 350,
  ancho: 250,
  alto: 50,
};

let btn_b = {
  x: 200,
  y: 450,
  ancho: 250,
  alto: 50,
};

let btn_inicio = {
  x: 400,
  y: 300,
  ancho: 250,
  alto: 50,
};

let btncolor = 0;
let btncolor2 = 0;

let btn_inciof = false;

let btn_creditos = {
  x: 400,
  y: 400,
  ancho: 250,
  alto: 50,
};

let btn_creditosf = false;

let puntos = 0;

// complementos multimedia
let textos;
let t_cargados = false; //cuando los textos terminen de cargar pasra a true

let sonido1;
let s_cargados = false;
