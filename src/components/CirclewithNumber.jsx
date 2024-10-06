import React, { useState } from "react";

const CircleWithNumber = ({ count }) => {
  // Increment the count by 1
  const incrementedCount = count + 1;

  // Circle styles
  const circleStyle = {
    width: "20px",  // Increased size for better visibility
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#4CAF50",
    margin: "5px 5px 0px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "10px",
    color: "white",
    fontWeight: "bold",
  };

  return (
    // Display the incremented count inside the circle
    <div style={circleStyle}>
      {incrementedCount}
    </div>
  );
};

export default CircleWithNumber;
