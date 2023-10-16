import '../styles/footer.css'
import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer>
          <h1>&copy; 2023 Kamil Baraniak - All Rights Reserved</h1>
          <p>Powered by:</p>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/394px-Nextjs-logo.svg.png" alt="Next.js logo" width={394} height={128} />
        </footer>
    );
};

export default Footer;
