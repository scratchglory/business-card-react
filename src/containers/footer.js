import React from 'react';
import {FaLinkedin, FaInstagramSquare, FaFacebookSquare, FaGithubSquare } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="Footer">
            <a href="www.linkedin.com">
                <FaLinkedin />
                <FaInstagramSquare />
                <FaFacebookSquare />
                <FaGithubSquare />
                </a>
        </div>
    )
}