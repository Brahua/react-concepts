const JSXTernaryOperator = () => {
  /**
   * Hay una forma más compacta de escribir condicionales en JSX: el *operador ternario* .
   * El operador ternario funciona de la misma manera en React que en JavaScript normal. Sin embargo, aparece en React sorprendentemente a menudo.
   */

  function coinToss() {
    return Math.random() < 0.5 ? "heads" : "tails";
  }

  const pics = {
    kitty: "https://content.codecademy.com/courses/React/react_photo-kitty.jpg",
    doggy:
      "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg",
  };

  const img = <img src={pics[coinToss() === "heads" ? "kitty" : "doggy"]} />;
  return img;
};
 
export default JSXTernaryOperator;