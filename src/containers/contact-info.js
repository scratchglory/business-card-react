import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <div className="contact-info">
          <button type="button" className="email" onclick="alert('hello world!')">
            <FontAwesomeIcon icon={faEnvelope} />
              Email ME!
              </button>
          <button type="button" className="linkedin" onclick="alert('hello world!')">
            {/* <FontAwesomeIcon icon={faLinkedIn} /> */}
            LinkedIn</button>
        </div>
    )
};