import React from "react";
const JSXLikeJavascriptExpressions = () => {
  /**
   * Los elementos JSX se tratan como *expresiones* JavaScript.
   * Pueden ir a cualquier lugar al que puedan ir las expresiones de JavaScript.
   * Eso significa que un elemento JSX se puede guardar en una variable, pasar a una función, almacenar en un objeto o matriz... lo que sea.
   */
  const myTeam = {
    center: <li>Benzo Walli</li>,
    powerForward: <li>Rasha Loa</li>,
    smallForward: <li>Tayshaun Dasmoto</li>,
    shootingGuard: <li>Colmar Cumberbatch</li>,
    pointGuard: <li>Femi Billon</li>,
  };
  return myTeam;
};

export default JSXLikeJavascriptExpressions;