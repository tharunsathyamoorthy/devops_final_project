import React from 'react';

function Contact() {
  // Define styles as JavaScript objects
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    textAlign: 'center',
    color: '#333',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'vertical', // Allow vertical resizing of the textarea
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3', // Darker shade on hover
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Contact Us</h1>
      <form style={formStyle}>
        <div style={formGroupStyle}>
          <label htmlFor="name" style={labelStyle}>Name:</label>
          <input type="text" id="name" name="name" required style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input type="email" id="email" name="email" required style={inputStyle} />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="message" style={labelStyle}>Message:</label>
          <textarea id="message" name="message" required style={textareaStyle}></textarea>
        </div>
        <button 
          type="submit" 
          style={buttonStyle}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
