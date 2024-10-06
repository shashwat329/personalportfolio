import React from 'react'
import ContactSide from '../components/ContactSide';
import ContactForm from '../components/ContactForm';
import '../style/contact.css';
const Contact = () => {
  return (
    <>
     <div className="container">
      <div className="side">
        <ContactSide />
      </div>
      <div className="form">
        <ContactForm />
      </div>
    </div>
    </>
  )
}

export default Contact