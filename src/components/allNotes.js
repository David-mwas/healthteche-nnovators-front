 
import { useState, useEffect } from "react";
import ListItem from "./item";
function AllNotes() {
  const [images, setImages] = useState([]);
  

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
    <div className="App">
      {images.map((image) => (
        <ListItem key={image.id} note={image} />
        
      ))}
    </div>
  );
}

export default AllNotes;
