import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Systems Engineer",
          "ML Engineer",
          "Data Scientist intern"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  );
}

export default Type;