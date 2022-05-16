import React from 'react';
import {FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
    return (
        <div className="contact-info">
          <button type="button" className="email" onclick="alert('hello world!')">
            <FaEnvelope />
              Email ME!
              </button>
          <button type="button" className="linkedin" onclick="alert('hello world!')">
           <FaLinkedin />
            LinkedIn</button>
        </div>
    )
};