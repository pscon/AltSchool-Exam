import React from "react";
import "../Styles/Home.css";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  const imgSrc =
    "data:image/png;base64,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";
  return (
    <>
      <section className="homePage">
        <h3 className="h3header"> AltSchool Africa</h3>
        <img src={imgSrc} alt=" alt logo" />

        <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white">
          Hi, my name is EKUNOLA PAUL
        </h2>

        <h2 className="text-xl sm:text-4xl font-bold text-white">
          I am a
          <span style={{ color: "red" }}>
            <Typewriter
              loop={3}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={100}
              delaySpeed={1000}
              words={[
                " Software Engineer",
                " Frontend Developer.",
                " Software Developer.",
              ]}
            />
          </span>
        </h2>
        <div style={{ marginTop: "20px" }}>
          <p>
            Setup a custom counter hook with increment, decrement, reset,
            setValue functions with a valid UI and Implement a combination of
            states with a useReducer that implements a counter with the four
            evident features in the custom hook - increment, decrement, reset,
            setValue. Implement a page for the custom hook, useReducer, 404, and
            a page to test error boundary and good SEO.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
