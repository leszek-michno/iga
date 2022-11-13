
import { digital } from "../database/DigitalBase";
import Gallery from "./Gallery";

const Draws = () => {


  return (
    <>
    <h2>Digital</h2>
    <div className="background">    
     {digital.map((item) => ( 
         <Gallery key={item.id} {...item} />
      ))}; 
      </div>

    </>
  );
}

export default Draws;
