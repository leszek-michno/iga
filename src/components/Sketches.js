import { sketches } from "../database/SketchesBase";
import Gallery from "./Gallery";

const Sketches = () => {

  return (
    <>
    <h2>Digital</h2>
    <div className="background">    
     {sketches.map((item) => ( 
         <Gallery key={item.id} {...item} />
      ))}; 
      </div>

    </>
  );
}

export default Sketches;
