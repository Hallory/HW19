import React, { useState } from 'react';
import module from './Photos.module.css'

const Photos = () => {
    const imgs = [
        {id:0, value:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"},
        {id:1, value:"https://source.unsplash.com/user/c_v_r/1900x800"},
        {id:2, value:"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"},
        {id:3, value:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"},
        
    ]
    
    const [sliderData, setSliderData] = useState(imgs[0])
    const handleClick = (index)=>{
        const slider = imgs[index];
        setSliderData(slider)
    }
    return (
        <div className={module.photos_container}>
            <img alt='main' className={module.main_img} src = {sliderData.value} height="500" width="800"/>
            <div className={module.flex_row}>
            {imgs.map((data, i)=>
            <div className={module.thumbnail}>
               <img alt='any' className={sliderData.id === i ?"clicked":""} onClick={()=>handleClick(i)}  key={data.id} src={data.value} height="70" width = "100"/> 
            </div>)}
            </div>
        </div>
    );
};

export default Photos;