const JSXSimpleConditional = () => {
  /**
   * '&&' funciona mejor en condicionales que a veces realizarán una acción, pero otras veces no harán nada en absoluto.
   */
  const baby = false;
  const age = 20;
  const tasty = (
    <ul>
      <li>Applesauce</li>
      {!baby && <li>Pizza</li>}
      {age > 15 && <li>Brussels Sprouts</li>}
      {age > 20 && <li>Oysters</li>}
      {age > 25 && <li>Grappa</li>}
    </ul>
  );
  return tasty;
};

export default JSXSimpleConditional;