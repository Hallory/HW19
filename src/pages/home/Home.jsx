import React from 'react';
import module from './Home.module.css'
import HomeComponent from '../../components/home/HomeComponent';

const Home = () => {
    const imgs = [
        {id:0, value:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"},
        {id:1, value:"https://source.unsplash.com/user/c_v_r/1900x800"},
        {id:2, value:"https://source.unsplash.com/user/c_v_r/1200x800"},
        {id:3, value:"https://source.unsplash.com/user/c_v_r/1280x720"},
        {id:4, value:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"},
        
    ]
    return (
        <div className={module.home_container}>
            {imgs.map((photo)=>
                <HomeComponent photo={photo} key = {photo.id}/>
            )}
        </div>
    );
};

export default Home;