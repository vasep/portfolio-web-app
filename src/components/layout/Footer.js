import React from 'react';

import GithubIcon from '../../svg/github';
import FacebookIcon from '../../svg/facebook';
import LinkedInIcon from '../../svg/linkedin';
import EmailIcon from '../../svg/email';
import InstagramIcon from '../../svg/instagram';

const Footer = () => (
  <footer id="contact" className="container mx-auto px-3 mb-8 text-gray-800">
    <div className="flex justify-center pt-1 md:pt-6">
      <div className="socials flex justify-center">
        <ul className="flex justify-between">
          <li>
            <a
              className="icon-anchor-link"
              href="https://www.linkedin.com/in/vasil-panov-251b5b203/"
              alt="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon classes="social-button w-8 lg:w-10 mx-4 md:mx-6" />
            </a>
          </li>
          <li>
            <a
              className="icon-anchor-link"
              href="https://github.com/vasep"
              alt="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon classes="social-button w-8 lg:w-10 mx-4 md:mx-6" />
            </a>
          </li>
          <li>
            <a
              className="icon-anchor-link"
              href="mailto:mrvasep@gmail.com"
              alt="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon classes="social-button w-8 lg:w-10 mx-4 md:mx-6" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="flex justify-center">
      <p className="text-sm md:text-base">Copyright © 2021 Vasil Panov.</p>
    </div>
  </footer>
);

export default Footer;
