import React, { useState } from 'react';
import "./ContactUs.css";

const ContactForm = () => {
  const [error,seterror]=useState("")
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    try {
      fetch("http://localhost:5000/api/contact/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            // If there is an error in the response
            seterror(data.error)
           
          } else {
            // If the request was successful
            seterror("")
          }
        });
    } catch (error) {
      seterror("unknown problem")
    }
  };

  return (
    <div className="formBox"  id='Contact'>
      <h2>Contact Us</h2>
      <p>You will hear from us at the earliest!</p>
      <form onSubmit={handleFormSubmit}>
        <div className="nameInp">
          <input type="text" placeholder="Full Name"
          value={formData.fullName} onChange={handleChange} name="fullName" id="name" />
        </div>

        <div className="mailInp">
          <input type="email" name="email" value={formData.email} id="email" onChange={handleChange} placeholder="Email" />
          </div>
          <div className="subInp">
          <input type='text'name="subject" value={formData.subject} id="subject" onChange={handleChange} placeholder="subject"/>
          </div>
        <div className="queryInp">
          <textarea
            name="message"
            id="query"
            cols="30"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any comment or your query"
          ></textarea>
        </div>
        <div className="submitBtn">
          <button className='btn-two' type="submit" id="btn">
            Send
          </button>
        </div>
        {error ? <p>error</p> : <></>}


      </form>
    </div>
  );
};

export default ContactForm;