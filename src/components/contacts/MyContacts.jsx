import React, { useState } from 'react';
import module from './MyContacts.module.css'
import ContactDetails from './contactDetails/ContactDetails';
const MyContacts = ({contact}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = ()=>{
        setIsModalOpen(!isModalOpen);
        console.log(isModalOpen)
    }
    
    return (
        <div className={module.container}>
        <div className={module.user__container}>
            
            <div>{contact.firstName} {contact.lastName}</div>
            <div>{contact.phone}</div>
            <div>{contact.gender}</div>
            <button
            
            onClick={toggleModal} 
            style={{background:'inherit', border:'none', cursor:'pointer', color:'white', paddingTop:'10px'}}>
                Details...
            </button>
        </div>
        {isModalOpen && (
                <ContactDetails
                isModalOpen={isModalOpen}
                setModal = {setIsModalOpen}
                    contact={contact}
                    onClose={toggleModal}
                />
            )}
        </div>
    );
};

export default MyContacts;