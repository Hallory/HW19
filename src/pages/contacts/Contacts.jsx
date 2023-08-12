import React from 'react';
import { useState } from 'react';
import MyContacts from '../../components/contacts/MyContacts';
import module from './Contacts.module.css'
const Contacts = ({toggleModal, contacts}) => {
    
    return (
        <div className={module.contactsContainer}>
            {contacts.map((contact, name)=>
                    <MyContacts toggleModal={toggleModal} contact={contact} key={name}/>
            )}
        </div>
    );
};

export default Contacts;