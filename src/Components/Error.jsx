import React, { useState } from "react";

export default function TestError() {
  const [errorText, setErrorText] = useState("");

  function handleError(e) {
    if (e.target.value.toUpperCase() === "BOMB") {
      setErrorText("BOMB");
    }
  }
  if (errorText === "BOMB") {
    throw new Error("Error Boundary. Checked.");
  }
  return (
    <div className="test-error">
      <input
        onChange={handleError}
        type="text"
        placeholder="Enter bomb to check error boundary"
      />
    </div>
  );
}
