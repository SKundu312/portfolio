import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
		<Typewriter
			options={{
        strings: [
          "FullStack Developer",
          "UI UX Designer"
        ],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
  );
}

export default Type;
