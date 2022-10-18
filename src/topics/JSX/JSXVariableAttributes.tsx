const JSXVariableAttributes = () => {
  /**
   * Las propiedades de los objetos también se utilizan a menudo para establecer atributos
   */
  const pictures = {
    panda: "http://bit.ly/1Tqltv5",
    owl: "http://bit.ly/1XGtkM3",
    owlCat: "http://bit.ly/1Upbczi",
  };

  const panda = <img src={pictures.panda} alt="Lazy Panda" />;
  const owl = <img src={pictures.owl} alt="Unimpressed Owl" />;
  const owlCat = <img src={pictures.owlCat} alt="Ghastly Abomination" />;

  return (
    <div>
      {panda}
      {owl}
      {owlCat}
    </div>
  );
};

export default JSXVariableAttributes;
