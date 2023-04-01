import "./App.css";
import { Routes, Route } from "react-router-dom";
import Form from "./components/form";
 import SingleNote from "./pages/singlenote";
function App() {
  
  return (
    <Routes>
       <Route path="/" element={<Form />} />
        {/* <Route path="/" element={<AllNotes images={images} term={term} setTerm={setTerm} />} /> */}
        <Route path="/note/:id" element={<SingleNote />} />
      </Routes>
    
  );
}

export default App;
