const JSXSelfClosingTags = () => {
  /**
   * La mayoría de los elementos HTML utilizan dos etiquetas: una etiqueta de apertura ( <div>) y una etiqueta de cierre ( </div>).
   * Sin embargo, algunos elementos HTML como <img>y <input>usan solo una etiqueta.
   * La etiqueta que pertenece a un elemento de etiqueta única no es una etiqueta de apertura ni una etiqueta de cierre; es una etiqueta de cierre automático.
   */
  const profile = (
    <div>
      <h1>I AM JENKINS</h1>
      <img src="images/jenkins.png" />
      <article>
        I LIKE TO SIT
        <br />
        JENKINS IS MY NAME
        <br />
        THANKS HA LOT
      </article>
    </div>
  );
  return profile;
};

export default JSXSelfClosingTags;