const JSXClassnames = () => {
  /**
   * La gramática en JSX es casi la misma que en HTML, pero hay diferencias sutiles a tener en cuenta.
   * Probablemente el más frecuente de estos involucra la palabra class.
   */
  const h2 = <h2 className="big">Hey</h2>;
  return h2;
};

export default JSXClassnames;