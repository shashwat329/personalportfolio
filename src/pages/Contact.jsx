import React from 'react'
import ContactSide from '../components/ContactSide';
import ContactForm from '../components/ContactForm';
import '../style/contact.css';
import Dock from '../components/Dock';
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
      <Dock collapsible={false} position="bottom" responsive="bottom" />
    </>
  )
}

export default Contact