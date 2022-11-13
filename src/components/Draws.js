
import { draws } from "../database/DrawsBase";
import Gallery from "./Gallery";

const Draws = () => {


  return (
    <>
    <h2>Rysunki</h2>
    <div className="background">    
     {draws.map((item) => ( 
         <Gallery key={item.id} {...item} />
      ))}; 
      </div>

    </>
  );
}

export default Draws;
