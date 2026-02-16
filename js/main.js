/*****************************************************************************************
 * Nombre del programa: Dibujo de Rectángulo Ajustable con Canvas
 * Autor: Gabriel Trejo Pérez
 * Fecha: 16/02/26
 * Materia: Graficación / Programación Web
 *
 * Descripción:
 * El canvas se ajusta al 50% del ancho y alto de la ventana.
 * El rectángulo dibujado puede modificarse fácilmente cambiando
 * sus variables de posición y tamaño.
 *
 *****************************************************************************************/


// Obtiene el elemento <canvas> del documento HTML
var canvas = document.getElementById("lienzo");


// Ajusta el tamaño del canvas al 50% del ancho y alto de la pantalla
canvas.width = window.innerWidth * 0.5;
canvas.height = window.innerHeight * 0.5;


// Obtiene el contexto de renderizado en 2D
var ctx = canvas.getContext("2d");


// =============================
// 🔹 VARIABLES CONFIGURABLES
// =============================

// Posición del rectángulo
var posX = 50;   // Distancia desde la izquierda
var posY = 50;   // Distancia desde arriba

// Tamaño del rectángulo
var anchoRect = 200;
var altoRect = 150;


// Define el color de relleno
ctx.fillStyle = "rgb(140, 0, 255)";


// Dibuja el rectángulo con valores personalizados
ctx.fillRect(posX, posY, anchoRect, altoRect);
