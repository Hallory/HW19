import React from 'react';
import module from './MyPhotos.module.css'
const MyPhotos = ({data, height, width}) => {
    return (
         <img className={module.img} alt='' height={height} width={width} src={data}>
        </img>
    );
};

export default MyPhotos;