import React from 'react';
import module from './HomeComponent.module.css'
const HomeComponent = ({photo}) => {
    
    return (
        <div className={module.home_container}>
            <div className={module.image}>
                <img src={photo.value} alt="" height="250" width="250" />
            </div>
            <div className={module.text}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Assumenda dicta ipsam maiores a illo veniam 
                    delectus quasi iusto quod nulla et reprehenderit 
                    error cupiditate unde ratione, aliquid, quisquam rerum quis!
                    </p>
            </div>
        </div>
    );
};

export default HomeComponent;