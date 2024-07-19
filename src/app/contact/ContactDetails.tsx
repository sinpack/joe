import React from 'react';
import Icon from '../components/Icon';
import Link from 'next/link';

interface ContactDetail {
  icon: React.ReactNode;
  title: string;
  description?: string;
  icons?: React.ReactNode;
}

const contactDetails: ContactDetail[] = [
  {
    icon: (
      <Icon
        src="/icons/address.png"
        alt="Address Icon"
        className="filter-grey"
      />
    ),
    title: 'Διεύθυνση',
    description: 'Λευκωσίας 41, Πάτρα, Ελλάδα',
  },
  {
    icon: (
      <Icon src="/icons/email.png" alt="Email Icon" className="filter-grey" />
    ),
    title: 'E-mail',
    description: 'georgios_antonopoulos@hotmail.com',
  },
  {
    icon: (
      <Icon src="/icons/phone.png" alt="Phone Icon" className="filter-grey" />
    ),
    title: 'Τηλέφωνο',
    description: '+30 6976629913',
  },
  {
    icon: (
      <Icon
        src="/icons/thumb.png"
        alt="Facebook Thumbs up Icon"
        className="filter-grey"
      />
    ),
    title: 'Μέσα Κοινωνικής Δικτύωσης',
    icons: (
      <div className="m-auto flex w-max items-center justify-between space-x-4">
        <Link href="#" title="facebook" target="_blank" aria-label="facebook">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="m-auto w-5 filter-grey"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
          </svg>
        </Link>
        <Link
          href="https://www.instagram.com/georgios_antonopoulos_holistic/"
          title="instagram"
          target="_blank"
          aria-label="instagram"
          className="filter-grey"
        >
          <svg
            version="1.1"
            id="Icons"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
            className="m-auto w-5"
          >
            <style type="text/css">
              {`
            .st0 {
              fill: none;
              stroke: #000000;
              stroke-width: 2;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            }
            .st1 {
              fill: none;
              stroke: #000000;
              stroke-width: 2;
            }
            .st2 {
              fill: none;
              stroke: #000000;
              stroke-width: 2;
              stroke-miterlimit: 10;
            }
          `}
            </style>
            <path
              className="st0"
              d="M23,31H9c-4.4,0-8-3.6-8-8V9c0-4.4,3.6-8,8-8h14c4.4,0,8,3.6,8,8v14C31,27.4,27.4,31,23,31z"
            />
            <circle className="st0" cx="16" cy="16" r="7" />
            <circle className="st0" cx="24" cy="7" r="1" />
          </svg>
        </Link>
      </div>
    ),
  },
];

export default contactDetails;
