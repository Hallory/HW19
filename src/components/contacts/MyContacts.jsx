import React from 'react';
import module from './MyContacts.module.css'
const MyContacts = ({contact}) => {
    
    return (
        <div className={module.container}>
        <div className={module.user__container}>
            
            <div>{contact.firstName} {contact.lastName}</div>
            <div>{contact.phone}</div>
            <div>{contact.gender}</div>
            
        </div>
        </div>
    );
};

export default MyContacts;