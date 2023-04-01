import "./App.css";
import { Routes, Route } from "react-router-dom";
import Form from "./components/form";
import Stats from "./pages/stats";

function App() {
  
  return (
    <Routes>
       <Route path="/" element={<Form />} />
       <Route path="/stats" element={<Stats />} />
        {/* <Route path="/" element={<AllNotes images={images} term={term} setTerm={setTerm} />} /> */}
        {/* <Route path="/note/:id" element={<SingleNote />} /> */}
      </Routes>
    
  );
}

export default App;
