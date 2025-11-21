import axios from 'axios';
import { useEffect, useState } from 'react';
import './mouse-demo.css';


export function MouseDemo(){

    const [images, setImages] = useState([{img_src:null}]);
    const [preview, setPreview] = useState('m1.png');
    
    useEffect(()=>{
        axios.get('mobiles.json')
        .then(response=>{
            setImages(response.data);
        })
    },[])

    function handleMouseOver(e){
        setPreview(e.target.src);
    }

    return(
        <div className='container-fluid'>
             <div className='row mt-2'>
                <div className='col-1'>
                    {
                        images.map(image=><div className='my-3' key={image.img_src}><img className='box-style' onMouseOver={handleMouseOver} width="100%" src={image.img_src} /></div>)
                    }
                </div>
                <div className='col-11'>
                    <img src={preview} />
                </div>
             </div>
        </div>
    )
}