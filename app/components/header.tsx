import '../styles/header.css'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
   isActiveElm: string;
 }

function sendRequestTmp(){
   window.open("mailto:kbaraniak.dev@gmail.com?subject=New Request for create page")
}

const Header: React.FC<HeaderProps> = ({ isActiveElm }) => {
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
            <button className="flex justify-center items-center px-4 py-2 font-semibold text-base bg-neutral-600 text-white rounded-md shadow-sm md:hover:scale-125 ease-in-out duration-150" onClick={sendRequestTmp}>
               <Image src="\img\icons\plus-square.svg" className="mr-1" width="30" height="30" alt="plus-square"></Image> 
               New Request
            </button>
         </div>
      <nav>
         <ul>
            <li className={isActiveElm == 'projects' ? 'active' : ''}>
               <Link href="/" className='transition ease-in-out duration-150 bg-neutral-700:hover' passHref>
                  <span className="option-selected text-white text-[23.54px] font-normal">Projects</span>
               </Link>
            </li>
            <li className={isActiveElm == 'collab' ? 'active' : ''}>
               <Link href="/collaboration" passHref>
                  <span className="text-white text-[23.54px] font-normal">Collaboration</span>
               </Link>
            </li>
            <li className={isActiveElm == 'git' ? 'active' : ''}>
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
