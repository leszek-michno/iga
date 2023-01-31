
import { tatoo } from "../database/TatooBase";
import Gallery from "./Gallery";

const Tatoo = () => {


  return (
    <>
    <h2>Tatuaże</h2>
    <div className="background">    
     {tatoo.map((item) => ( 
         <Gallery key={item.id} {...item} />
      ))}; 
      </div>

    </>
  );
}

export default Tatoo;
