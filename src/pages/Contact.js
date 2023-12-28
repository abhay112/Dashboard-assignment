import React, { useState } from 'react';
import GreenBtn from '../components/GreenBtn';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agreeTerms: false,
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agreeTerms: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear the error message when the user starts typing in a field
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    // Check each field for validation
    if (formData.firstName.trim() === '') {
      errors.firstName = 'First Name is required';
      valid = false;
    }

    if (formData.lastName.trim() === '') {
      errors.lastName = 'Last Name is required';
      valid = false;
    }

    if (formData.email.trim() === '') {
      errors.email = 'Email is required';
      valid = false;
    }

    if (formData.message.trim() === '') {
      errors.message = 'Message is required';
      valid = false;
    }

    if (!formData.agreeTerms) {
      errors.agreeTerms = 'You must agree to the Terms & Conditions';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSendMessage = () => {
    if (validateForm()) {
      // Add logic here to send the message with the collected data
      console.log('Sending message:', formData);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        agreeTerms: false,
      });
    }
  };

  const handleBookMeeting = () => {
    if (validateForm()) {
      console.log('Booking a meeting:', formData);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        agreeTerms: false,
      });
    }
  };

  return (
    <div className='contact-cmp'>
      <header className='header'>
        <h1>Support</h1>
      </header>
      <main>
        <div className='top-section'>
          <section className='left-section'>
            <h2>Contact Us</h2>
            <p className=''>
              Have a question or just want to know more? Feel free to reach out to us.
            </p>
          </section>
          <section className='right-section'>
            <p>
              You will receive a response within 24 hours of the time of submission.
            </p>
            <div className='two-input-box'>
              <div className='input-boxes'>
                <label className='grey-text'>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder='Enter Your First Name'
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {formErrors.firstName && <div className='error-box'>{formErrors.firstName}</div>}
              </div>
              <div className='input-boxes'>
                <label className='grey-text'>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder='Enter Your Last Name'
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {formErrors.lastName && <div className='error-box'>{formErrors.lastName}</div>}
              </div>
            </div>
            <div className='input-boxes'>
              <label className='grey-text'>Email</label>
              <input
                type="email"
                name="email"
                placeholder='Enter Your Email'
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && <div className='error-box'>{formErrors.email}</div>}
            </div>
            <div className='input-boxes'>
              <label className='grey-text'>Message</label>
              <textarea
                type="text"
                name="message"
                placeholder='Enter Your Message'
                value={formData.message}
                onChange={handleInputChange}
              />
              {formErrors.message && <div className='error-box'>{formErrors.message}</div>}
            </div>
            <div className='input-boxes checkbox-input-box'>
              <input
                type="checkbox"
                id="term"
                name="agreeTerms"
                value="Term"
                className='input-checkbox'
                checked={formData.agreeTerms}
                onChange={handleInputChange}
              />
              <label htmlFor="term">I agree with <span>Terms & Conditions</span>.</label>
            </div>
            {formErrors.agreeTerms && <div className='error-box'>{formErrors.agreeTerms}</div>}

            <div className='input-boxes'>
              <GreenBtn text={'Send a Message'} onClick={handleSendMessage} />
            </div>
            <div className='input-boxes book-meeting-btn'>
              <GreenBtn text={'Book a Meeting'} onClick={handleBookMeeting} />
            </div>
          </section>
        </div>

        <div className='bottom-section'>
          <section className='bs-left-section'>
            <h2>Live Chat</h2>
            <p>
              Don't have time to wait for the answer? Chat with us now.
            </p>
          </section>
          <section className='bs-right-section'>
            <h2 className='grey-btn'>Contact</h2>
            <p>
              Learn more about our real estate, mortgage, and corporate account services.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Contact;
