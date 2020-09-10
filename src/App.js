import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import PhotoSet from "./components/PhotoSet";
function App() {
  const [photoBody, setPhotoBody] = useState("base");
  const onBodyChange = (value) => {
    setPhotoBody(value);
  };
  return (
    <div className="App">
      <Navigation onBodyChange={onBodyChange} />
      <PhotoSet typeName={photoBody} />
    </div>
  );
}

export default App;
