import React from "react";
import ReactDOM from "react-dom";
// import 'antd/dist/antd.css';
import "./index.css";

import {
  JSXElement,
  JSXLikeJavascriptExpressions,
  JSXElementAttributes,
  JSXNestedElements,
  JSXClassnames,
  JSXSelfClosingTags,
  JSXVariableAttributes,
  JSXEventListeners,
  JSXTernaryOperator,
  JSXSimpleConditional,
  JSXMapElements,
  JSXInBackground,
} from "./topics/JSX";

import { ClassComponent, FunctionalComponent } from "./topics/components";

import {
  ColorPicker,
  QuizNavbar
} from "./topics/hooks/useState";

import { FizzBuzzApp } from "./mini-projects"

const colorNames = [
  "Aquamarine",
  "BlueViolet",
  "Chartreuse",
  "CornflowerBlue",
  "Thistle",
  "SpringGreen",
  "SaddleBrown",
  "PapayaWhip",
  "MistyRose",
];

/**
 * ReactDOM.render() es la forma más común de renderizar JSX.
 * Toma una expresión JSX, crea un árbol correspondiente de nodos DOM y agrega ese árbol al DOM.
 * Esa es la forma de hacer que aparezca una expresión JSX en la pantalla.
 *
 * ReactDOM.render(<App />, document.getElementById("root"));
 */

/**
 * Una cosa especial sobre `ReactDOM.render()` es que *solo actualiza los elementos DOM que han cambiado*.
 * Eso significa que si renderizas exactamente lo mismo dos veces seguidas, el segundo renderizado no hará nada
 * React logra esto gracias a algo llamado Virtual DOM.
 */

/**
 * A partir de la versión 18 de React, se usa la API `ReactDOM.createRoot()` para renderizar en el DOM.
 * Por detrás, se encarga de hacer lo mismo que `ReactDOM.render()` pero mas eficiente y considerando ciertos aspectos de concurrencia.
 * https://medium.com/frontend-canteen/createroot-vs-reactdom-render-a-tiny-mistake-in-react18-official-documentation-d8725d8d3a4c
 */

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <PhoneNumberField />
// );

ReactDOM.render(<QuizNavbar questions={Array(5)}/>, document.getElementById("root"));

/**
 * En resumen, esto es lo que sucede cuando intentas actualizar el DOM en React:

  1. Todo el DOM virtual se actualiza.
  2. El DOM virtual se compara con el aspecto que tenía antes de actualizarlo. React descubre qué objetos han cambiado.
  3. Los objetos modificados, y solo los objetos modificados, se actualizan en el DOM *real .*
  4. Los cambios en el DOM real hacen que la pantalla cambie.
 */
