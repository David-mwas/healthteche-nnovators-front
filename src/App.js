import "./App.css";
import { Routes, Route } from "react-router-dom";
import Form from "./components/form";
import AllNotes from "./components/allNotes";
import Stats from "./pages/stats";
import Chart from "./pages/feedbackstats";
import SingleNote from "./pages/singlenote";
import SingleFeed from "./pages/singlefeed";

function App() {
  
  return (
    <Routes>
       <Route path="/" element={<Form />} />
       <Route path="/stats" element={<Stats />} />
       <Route path="/notes" element={<Chart />} />
       <Route path="/feedback/:id" element={<SingleFeed />} />

        {/* <Route path="/" element={<AllNotes images={images} term={term} setTerm={setTerm} />} /> */}
        {/* <Route path="/feedback/:id" element={<SingleNote   />} /> */}
      </Routes>
    
  );
}

export default App;
