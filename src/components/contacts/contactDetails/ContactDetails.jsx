import React from 'react';
import module from './ContactDetails.module.css'
const ContactDetails = ({contact, onClose,isModalOpen, setModal}) => {
    const rootClasses = [module.modalOverlay]

    if(isModalOpen){
        rootClasses.push(module.active)
    }
    return (
        <div className={rootClasses.join(' ')} onClick={onClose}>
            <div className={module.modalContent} onClick={(e)=>e.stopPropagation()}>
                <button style={{float:'right',}} onClick={onClose} className={module.closeButton}>
                    Закрити
                </button>
                <h2>{contact.firstName} {contact.lastName}</h2>
                <p>Телефон: {contact.phone}</p>
                <p>Стать: {contact.gender}</p>
            </div>
        </div>
    );
};

export default ContactDetails;