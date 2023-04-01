import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./components/form";
 import SingleNote from "./pages/singlenote";
function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    getNotes();
  }, []);
  let getNotes = async () => {
    const response = await fetch(`/api/notes/`);
    const data = await response.json();
    console.log(data);
    setImages(data);
  };

  return (
    <Routes>
       <Route path="/" element={<Form />} />
        {/* <Route path="/" element={<AllNotes images={images} term={term} setTerm={setTerm} />} /> */}
        <Route path="/note/:id" element={<SingleNote />} />
      </Routes>
    
  );
}

export default App;
