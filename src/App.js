import React, { useState } from "react";
import Canvas from "./components/Canvas";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [shapes, setShapes] = useState([]);
  const [selectedType, setSelectedType] = useState("circle");
  const [selectedColor, setSelectedColor] = useState("#3498db");
  const [selectedSize, setSelectedSize] = useState(40);

  const addShape = (x, y) => {
    const newShape = {
      id: Date.now(),
      type: selectedType,
      color: selectedColor,
      size: selectedSize,
      x,
      y,
    };
    setShapes([...shapes, newShape]);
  };

  const updateShapePosition = (id, x, y) => {
    setShapes((prevShapes) =>
      prevShapes.map((shape) => (shape.id === id ? { ...shape, x, y } : shape))
    );
  };

  const clearShapes = () => setShapes([]);

  return (
    <div className="app">
      <Sidebar
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        clearShapes={clearShapes}
      />
      <Canvas
        shapes={shapes}
        addShape={addShape}
        updateShapePosition={updateShapePosition}
      />
    </div>
  );
};

export default App;
