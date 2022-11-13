import React, { useState} from 'react';
import '../styles/Gallery.css';

const Gallery = (props) => {

    const [size, setSize] = useState(true); 
    
    const TaggleSize = ()=> {
        setSize(!size)

    }
 
    return (
        <>
        <div className={size ? 'img-gallery' : "big-img"} key={props.id}>
        <img src={props.img} alt="pic" onClick={TaggleSize}
        />
        </div>
        </>
      );
}
 
export default Gallery;