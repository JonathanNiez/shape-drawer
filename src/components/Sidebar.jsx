import React from "react";

const Sidebar = ({
  selectedType,
  setSelectedType,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  clearShapes,
}) => {
  return (
    <div style={styles.sidebar}>
      <h2>Tools</h2>

      <div style={styles.section}>
        <label>Shape:</label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="circle">Circle</option>
          <option value="square">Square</option>
          <option value="triangle">Triangle</option>
        </select>
      </div>

      <div style={styles.section}>
        <label>Color:</label>
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        />
      </div>

      <div style={styles.section}>
        <label>Size:</label>
        <input
          type="range"
          min="10"
          max="100"
          value={selectedSize}
          onChange={(e) => setSelectedSize(Number(e.target.value))}
        />
        <span>{selectedSize}px</span>
      </div>

      <button onClick={clearShapes} style={styles.clearButton}>
        Clear All
      </button>
    </div>
  );
};

const styles = {
  sidebar: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "200px",
    height: "100vh",
    background: "#fff",
    borderRight: "1px solid #ddd",
    padding: "20px",
    boxSizing: "border-box",
    fontFamily: "sans-serif",
    zIndex: 10,
  },
  section: {
    marginBottom: "20px",
  },
  clearButton: {
    padding: "8px 12px",
    background: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Sidebar;
