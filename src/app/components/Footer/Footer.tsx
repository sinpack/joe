// components/Footer.tsx
'use client';

import { Footer } from 'flowbite-react';
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from 'react-icons/bs';
import { format } from 'date-fns';
import Footer2 from './Footer2';

const CustomFooter = () => {
  const currentYear = format(new Date(), 'yyyy');

  return (
    // <Footer container className="bg-[#181818]">
    //   <div className="w-full">
    //     <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
    //       <div>
    //         <Footer.Brand
    //           href="https://flowbite.com"
    //           src="https://flowbite.com/docs/images/logo.svg"
    //           alt="Flowbite Logo"
    //           name="Flowbite"
    //         />
    //       </div>
    //       <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
    //         <div>
    //           <Footer.Title title="about" />
    //           <Footer.LinkGroup col>
    //             <Footer.Link href="#">Flowbite</Footer.Link>
    //             <Footer.Link href="#">Tailwind CSS</Footer.Link>
    //           </Footer.LinkGroup>
    //         </div>
    //         <div>
    //           <Footer.Title title="Follow us" />
    //           <Footer.LinkGroup col>
    //             <Footer.Link href="#">Github</Footer.Link>
    //             <Footer.Link href="#">Discord</Footer.Link>
    //           </Footer.LinkGroup>
    //         </div>
    //         <div>
    //           <Footer.Title title="Legal" />
    //           <Footer.LinkGroup col>
    //             <Footer.Link href="#">Privacy Policy</Footer.Link>
    //             <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
    //           </Footer.LinkGroup>
    //         </div>
    //       </div>
    //     </div>
    //     <Footer.Divider />
    //     <div className="w-full sm:flex sm:items-center sm:justify-between">
    //       <Footer.Copyright href="#" by="AfterhoursDev" year={+currentYear} />
    //       <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
    //         <Footer.Icon href="#" icon={BsFacebook} />
    //         <Footer.Icon href="#" icon={BsInstagram} />
    //         <Footer.Icon href="#" icon={BsTwitter} />
    //         <Footer.Icon href="#" icon={BsGithub} />
    //         <Footer.Icon href="#" icon={BsDribbble} />
    //       </div>
    //     </div>
    //   </div>
    // </Footer>
    <Footer2 />
  );
};

export default CustomFooter;
