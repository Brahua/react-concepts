const JSXEventListeners = () => {
  /**
   * Los elementos JSX pueden tener detectores de eventos, al igual que los elementos HTML.
   * Programar en React significa trabajar constantemente con detectores de eventos.
   */
  function makeDoggy(e: any) {
    e.target.setAttribute(
      "src",
      "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg"
    );
    e.target.setAttribute("alt", "doggy");
  }

  const kitty = (
    <img
      src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
      alt="kitty"
      height={200}
      width={200}
      onClick={makeDoggy}
    />
  );

  return kitty;
};

export default JSXEventListeners;