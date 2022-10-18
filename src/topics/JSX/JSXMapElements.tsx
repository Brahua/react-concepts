const JSXMapElements = () => {
  /**
   * Si desea crear una lista de elementos JSX, a menudo .map() es su mejor opción
   */
  const people = ["Rowe", "Prevost", "Gare"];
  const peopleLis = people.map((person) => (
    // expression goes here:
    <li>{person}</li>
  ));
  /**
   * Las keys ayudan a React a identificar qué elementos han cambiado, se agregaron o se eliminaron.
   * Se deben dar claves a los elementos dentro de la matriz para darles una identidad estable
   */
  const todos = [
    {
      id: 1,
      text: "Take out the trash",
    },
    {
      id: 2,
      text: "Grocery shopping",
    },
  ];

  /**
   * Cuando no tiene ID estables para los elementos representados, puede usar el índice de elementos como clave como último recurso
   *  */
  const todoItems = todos.map((todo, index) => (
    // Hacer esto solo si los items no tienen IDs estables.
    <li key={index}>{todo.text}</li>
  ));
};

export default JSXMapElements;
