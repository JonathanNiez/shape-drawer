import React from "react";

const Shape = ({ type, x, y, size, color, onMouseDown }) => {
  switch (type) {
    case "circle":
      return (
        <circle
          cx={x + size / 2}
          cy={y + size / 2}
          r={size / 2}
          fill={color}
          onMouseDown={onMouseDown}
          style={{ cursor: "grab" }}
        />
      );

    case "square":
      return (
        <rect
          x={x}
          y={y}
          width={size}
          height={size}
          fill={color}
          onMouseDown={onMouseDown}
          style={{ cursor: "grab" }}
        />
      );

    case "triangle":
      const points = `
        ${x + size / 2},${y} 
        ${x},${y + size} 
        ${x + size},${y + size}
      `;
      return (
        <polygon
          points={points}
          fill={color}
          onMouseDown={onMouseDown}
          style={{ cursor: "grab" }}
        />
      );

    default:
      return null;
  }
};

export default Shape;
