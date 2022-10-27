import React, { useState } from "react";

type ColorPickerProps = {
  colorNames: string[];
  defaultColor?: string;
};


const ColorPicker = () => {
  // Update Function Component State
  const [color, setColor] = useState<string>();

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <p>The color is {color}</p>
      <div className="container__buttons">
        <button onClick={() => setColor("Aquamarine")}>Aquamarine</button>
        <button onClick={() => setColor("BlueViolet")}>BlueViolet</button>
        <button onClick={() => setColor("Chartreuse")}>Chartreuse</button>
      </div>
    </div>
  );
};


const ColorPickerRefactor = ({ colorNames }: ColorPickerProps) => {
  // Initialize State
  const [color, setColor] = useState<string>("PapayaWhip"); 

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <p>The color is {color}</p>
      <div className="container__buttons">
        {/* Iterate elements */}
        {colorNames.map((colorName) => (
          <button key={colorName} onClick={() => setColor(colorName)}>
            {colorName}
          </button>
        ))}
      </div>
    </div>
  );
};

/**
 * Use State Setter Outside of JSX
 */

const ColorPickerInput = (props: ColorPickerProps) => {
  const { colorNames, defaultColor = "Aquamarine" } = props;

  const [color, setColor] = useState<string>(defaultColor); 

  const handleChange = (event: any) => {
    const { target } = event; // Destructuracion de objetos
    const { value } = target;
    setColor(value);
  }

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <label htmlFor="phone-input"> Color: {color} </label>
      <input id="phone-input" className="container__input" value={color} onChange={handleChange}/>
      <div className="container__buttons">
        {/* Iterate elements */}
        {colorNames.map((colorName) => (
          <button key={colorName} onClick={() => setColor(colorName)}>
            {colorName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPickerInput;
