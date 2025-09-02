import React, { useState } from "react";
import Shape from "./Shape";

const Canvas = ({ shapes, addShape, updateShapePosition }) => {
  const [draggedId, setDraggedId] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  //my brain
  const handleCanvasClick = (e) => {
    if (e.target.tagName === "svg") {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      addShape(x, y);
    }
  };

  const handleMouseDown = (id, e) => {
    e.stopPropagation();
    setDraggedId(id);
    const rect = e.target.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e) => {
    if (draggedId != null) {
      const canvas = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - canvas.left - offset.x;
      const y = e.clientY - canvas.top - offset.y;
      updateShapePosition(draggedId, x, y);
    }
  };

  const handleMouseUp = () => {
    setDraggedId(null);
  };

  return (
    <svg
      width="100%"
      height="100vh"
      style={{ background: "#f9f9f9", cursor: "crosshair" }}
      onClick={handleCanvasClick}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {shapes.map((shape) => (
        <Shape
          key={shape.id}
          {...shape}
          onMouseDown={(e) => handleMouseDown(shape.id, e)}
        />
      ))}
    </svg>
  );
};

export default Canvas;
