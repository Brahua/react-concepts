const JSXNestedElements = () => {
  /**
   * Puede anidar elementos JSX dentro de otros elementos JSX, como en HTML.
   * Si una expresión JSX ocupa más de una línea, debe envolver la expresión JSX de varias líneas entre paréntesis.
   * ¡La primera etiqueta de apertura y la etiqueta de cierre final de una expresión JSX deben pertenecer al mismo elemento JSX!
   */
  const theExample = (
    <>
      <a href="https://www.example.com">
        <h1> Click me! </h1>
      </a>
      <p> Algun parrafo </p>
    </>
  );
  return theExample;
};

export default JSXNestedElements;