import '../styles/header.css'
import React from 'react';
import Link from 'next/link';


function sendRequestTmp(){
   window.open("mailto:kbaraniak.dev@gmail.com?subject=New Request for create page")
}

const Header = () => {
   return (
      <header>
         <div className="action1 contents">
            <div className="logo transition-all duration-300 hover:text-red-700 cursor-pointer">
               <h1>
                  <Link href="/">
                     kbaraniak
                  </Link>
               </h1>
            </div>
            <button className="px-4 py-2 font-semibold text-base bg-neutral-600 text-white rounded-md shadow-sm md:hover:scale-125 ease-in-out duration-150" onClick={sendRequestTmp}>[+] New Request</button>
         </div>
      <nav>
         <ul>
            <li>
            <Link href="/" className='transition ease-in-out duration-150 bg-neutral-700:hover' passHref>
               <span className="option-selected text-white text-[23.54px] font-normal">Projects</span>
            </Link>
            </li>
            <li>
            <Link href="/collaboration" passHref>
               <span className="text-white text-[23.54px] font-normal">Collaboration</span>
            </Link>
            </li>
            <li>
            <Link href="/github" passHref>
               <span className="text-white text-[23.54px] font-normal">GitHub</span>
            </Link>
            </li>
         </ul>
      </nav>
      </header>
   );
};

export default Header;
