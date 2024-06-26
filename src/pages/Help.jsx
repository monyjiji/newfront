import React from 'react';
import '../css/HelpPage.css'
 // Optional: for styling

const Help = () => {
  return (
    <div className="faq-page">
      <h2>Frequently Asked Questions</h2>
      <section className="faq">
       
        <div className="faqdiv">
        <div className="faq-item">
          <h3>How do I schedule an appointment?</h3>
          <p>You can schedule an appointment by logging into your account on our website, selecting your preferred doctor, and choosing an available time slot.</p>
        </div>
        <div className="faq-item">
          <h3>Can I reschedule or cancel an appointment?</h3>
          <p>Yes, you can reschedule or cancel an appointment by logging into your account and selecting the appointment you wish to modify. Please note that cancellations should be made at least 24 hours in advance.</p>
        </div>
        </div>
      </section>
    
      
      <section className="faq">
      
        
        <div className="faqdiv">
        <div className="faq-item">
        <h3>How do I reset my password?</h3>
          <p>You can reset your password by clicking on the "Forgot Password" link on the login page and following the instructions.</p>
        </div>
        <div className="faq-item">
          <h3>How do I contact the support team?</h3>
          <p>You can reach our support team  and report any issues or bugs you encounter via email at:uyiuk,k@gmail.com.</p>
        </div>
        </div>
        
      </section>
    </div>
  );
};
export default Help;