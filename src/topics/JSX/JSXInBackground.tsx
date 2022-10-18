import React from "react";

const JSXInBackground = () => {
  /**
   * ¡Puede escribir código React sin usar JSX en absoluto!
   */
  const newH1 = React.createElement(
    "h1",
    { id: "newH1", className: "someClass" },
    "Hello new world"
  );
  return newH1;
};

export default JSXInBackground;