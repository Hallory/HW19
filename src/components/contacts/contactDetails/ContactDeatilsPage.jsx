import React from 'react';

const ContactDeatilsPage = ({contact}) => {
    return (
        <div className='' >
            <div className={module.modalContent} >
                <button style={{float:'right',}}  className={module.closeButton}>
                    Закрити
                </button>
                <h2>{contact.firstName} {contact.lastName}</h2>
                <p>Телефон: {contact.phone}</p>
                <p>Стать: {contact.gender}</p>
            </div>
        </div>
    );
};

export default ContactDeatilsPage;