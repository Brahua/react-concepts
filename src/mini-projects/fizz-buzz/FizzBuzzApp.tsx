import React, { useState } from "react";
// import { Button } from 'antd';
// import 'antd/dist/antd.css';
/**
 * https://www.atlassian.com/es/agile/project-management/user-stories
 * Historias de Usuario
 *
 * “Como [perfil]”: ¿para quién desarrollamos esto? No solo buscamos un puesto, buscamos el perfil de la persona. Max. Nuestro equipo debería comprender quién es Max. Con suerte hemos entrevistado a muchos Max. Comprendemos cómo trabaja esa persona, cómo piensa y cómo se siente. Sentimos empatía por Max.
 * “Quiere”: aquí describimos su intención, no las funciones que usan. ¿Qué es lo que están intentando lograr realmente? Esta descripción debería realizarse con independencia de las implementaciones; si describes algún elemento de la IU y no el objetivo del usuario, estás cometiendo un error.
 * “Para”: ¿cómo encaja su deseo inmediato de hacer algo en la perspectiva general? ¿Cuál es el beneficio general que intentan lograr? ¿Cuál es el gran problema que debe resolverse?
 */

/**
 * https://samuelcasanova.com/2017/11/criterios-de-aceptacion/
 * Criterios de Aceptación
 *
 * "Dado [situación o contexto]": un usuario que aún no se ha identificado en el sistema
 * "Cuando [acción]": intenta acceder a alguna funcionalidad de la parte privada
 * "Entonces [resultado]": se le redirige automáticamente a la página de login para que pueda identificarse
 */

/**
 * Como usuario de la aplicación
 * Quiero poder ingresar un número en un campo de texto
 * Para saber si es múltiplo de 3, 5 o ambos.
 *
 * Criterios de Aceptación:
 * ------------------------
 * Dado que el usuario no ingresa ningún número en el campo de texto
 * Cuando el usuario presiona el botón "Comprobar"
 * Entonces se muestra el mensaje "No ingresaste ningún número" en pantalla
 *
 * Dado que el usuario ingresa un valor inválido en el campo de texto
 * Cuando el usuario presiona el botón "Comprobar"
 * Entonces se muestra el mensaje "Formato inválido" en la pantalla.
 *
 * Dado que el usuario ingresa un número en el campo de texto
 * Cuando el usuario presiona el botón "Comprobar"
 * Entonces se muestra el mensaje "Fizz" en la pantalla, si el número es múltiplo de 3.
 *
 * Dado que el usuario ingresa un número en el campo de texto
 * Cuando el usuario presiona el botón "Comprobar"
 * Entonces se muestra el mensaje "Buzz" en la pantalla, si el número es múltiplo de 5.
 *
 * Dado que el usuario ingresa un número en el campo de texto
 * Cuando el usuario presiona el botón "Comprobar"
 * Entonces se muestra el mensaje "FizzBuzz" en la pantalla, si el número es múltiplo de 3 y 5.
 *
 * Dado que el usuario ingresa un número en el campo de texto
 * Cuando el usuario presiona el botón "Comprobar"
 * Entonces se muestra el mensaje "No es múltiplo de 3 ni de 5" en la pantalla, si el número no es múltiplo de 3 ni de 5.
 */
const FizzBuzzApp = () => {
  return (
    <div>
      <h1>New App</h1>
    </div>
  );
};

export default FizzBuzzApp;
