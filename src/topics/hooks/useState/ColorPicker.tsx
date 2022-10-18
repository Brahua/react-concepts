import React, { useState } from "react";

export const colorNames = [
  "Aquamarine",
  "BlueViolet",
  "Chartreuse",
  "CornflowerBlue",
  "Thistle",
  "SpringGreen",
  "SaddleBrown",
  "PapayaWhip",
  "MistyRose",
];

type ColorPickerProps = {
  colorNames: string[];
};

/**
 * Update Function Component State
 */
const ColorPicker = () => {
  return (
    <div className="container">
      <p></p>
      <div className="container__buttons"></div>
    </div>
  );
};

/**
 * Initialize State
 */
const ColorPickerRefactor = ({ colorNames }: ColorPickerProps) => {
  return (
    <div className="container">
      <p></p>
      <div className="container__buttons"></div>
    </div>
  );
};

/**
 * Use State Setter Outside of JSX
 */

const ColorPickerInput = ({ colorNames }: ColorPickerProps) => {
  return (
    <div className="container">
      <p></p>
      <div className="container__buttons"></div>
    </div>
  );
};

export default ColorPicker;
