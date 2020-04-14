import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';
import About from '../About/About';

const Contact = ({ contact }) => {

  return (
    <div className={styles.Contact}>
      <h2>Contact Details</h2>
      <div className="address">
        <p>{contact.name}<br />
          {contact.city}, {contact.state}<br />
          {contact.phone}<br />
          {contact.email}</p>
      </div>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    street: PropTypes.string,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })
};

export default Contact;