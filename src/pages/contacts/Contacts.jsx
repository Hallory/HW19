import React from 'react';
import { useState } from 'react';
import MyContacts from '../../components/contacts/MyContacts';
import module from './Contacts.module.css'
const Contacts = () => {
    const [contacts, setContacts] = useState([{
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male"
        }, {
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female"
        }, {
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666"
        }, {
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female"
        }, {
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male"
        }, {
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956419521",
        gender: "male"
        }])
    return (
        <div className={module.contactsContainer}>
            {contacts.map((contact, name)=>
                <MyContacts contact={contact} key={name}/>
            )}
        </div>
    );
};

export default Contacts;