import React from 'react'

const Contact = () => {
  return (
    <div className='contact-cmp'>
      <header className='header'>
        <h1>Support</h1>
      </header>
      <main>
        <div className='top-section'>
          <section className='left-section'>
            <h2>
              Contact Us
            </h2>
            <p className=''>
              Have a question or just want to know more? Feel free to reach out to us.
            </p>
          </section>
          <section className='right-section'>
            <p>
            You will receive response within 24 hours of time of submit.
            </p>
            <div className='two-input-box'>
              <div className='input-boxes'>
                <label className='grey-text'>First Name</label>
                <input type="text" placeholder='Enter Your First Name'/>
              </div>
              <div  className='input-boxes'>
                <label className='grey-text'>Last Name</label>
                <input type="text" placeholder='Enter Your Last Name'/>
              </div>
              
            </div>
            <div className='input-boxes'>
                <label className='grey-text'>Email</label>
                <input type="email" placeholder='Enter Your Email'/>
              </div>
              <div className='input-boxes'>
                <label className='grey-text'>Message</label>
                <textarea type="text" placeholder='Enter Your Message'/>
              </div>
          </section>
        </div>

        <div className='bottom-section'>
          <section className='bs-left-section'>
            <h2>
            Live Chat
            </h2>
            <p>
            Don’t have time to wait for the answer? Chat with us now.
            </p>
          </section>
          <section  className='bs-right-section'>
            <h2 className='grey-btn'>
              Contact
            </h2>
            <p >
            Learn more about our real estate, mortgage, and corporate account services
            </p>
          </section>
        </div>

      </main>
    </div >
  )
}

export default Contact