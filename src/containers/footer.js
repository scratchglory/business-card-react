import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaLinkedin } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <div className="Footer">
            <a href="www.linkedin.com">
                <FontAwesomeIcon icon="FaLinkedin" />
                </a>
        </div>
    )
}