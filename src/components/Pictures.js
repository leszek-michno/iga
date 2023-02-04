import { pics } from "../database/PicturesBase";
import Gallery from "./Gallery";

const Pics = () => {

  return (
    <>
    <h2>Malarstwo</h2>
    <div className="background">    
     {pics.map((item) => ( 
         <Gallery key={item.id} {...item} />
      ))}; 
      </div>
    </>
  );
}

export default Pics;
