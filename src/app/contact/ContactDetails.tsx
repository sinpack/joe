import React from 'react';
import Icon from '../components/Icon';
import Link from 'next/link';
import addressIcon from '../../../public/icons/address.png';
import emailIcon from '../../../public/icons/email.png';
import phoneIcon from '../../../public/icons/phone.png';
import thumbIcon from '../../../public/icons/thumb.png';
import skypeIcon from '../../../public/icons/skype.png';

interface ContactDetail {
  icon: React.ReactNode;
  title: string;
  description?: string;
  icons?: React.ReactNode;
}

const contactDetails: ContactDetail[] = [
  {
    icon: <Icon src={addressIcon} alt="Address Icon" className="filter-grey" />,
    title: 'Διεύθυνση',
    description: 'Λευκωσίας 41, Πάτρα, Ελλάδα',
  },
  {
    icon: <Icon src={emailIcon} alt="Email Icon" className="filter-grey" />,
    title: 'E-mail',
    description: 'georgios_antonopoulos@hotmail.com',
  },
  {
    icon: <Icon src={phoneIcon} alt="Phone Icon" className="filter-grey" />,
    title: 'Τηλέφωνο',
    description: '+30 6976629913',
  },
  // {
  //   icon: <Icon src={skypeIcon} alt="Skype Icon" className="filter-grey" />,
  //   title: 'Skype',
  //   icons: (
  //     <Link
  //       href="https://join.skype.com/invite/FdWE9FzCm23Q"
  //       title="skype"
  //       target="_blank"
  //       aria-label="skype"
  //     >
  //       <svg
  //         fill="currentColor"
  //         className="m-auto w-5 filter-grey"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path d="M 14.28125 0 C 6.410156 0 0 6.324219 0 14.09375 C 0 16.476563 0.621094 18.800781 1.78125 20.875 C 1.507813 22.3125 1.375 23.792969 1.375 25.25 C 1.375 38.25 12.074219 48.8125 25.25 48.8125 C 26.601563 48.8125 27.953125 48.722656 29.28125 48.5 C 31.257813 49.488281 33.480469 50 35.71875 50 C 43.589844 50 50 43.675781 50 35.90625 C 50 33.820313 49.539063 31.828125 48.65625 29.96875 C 48.976563 28.433594 49.15625 26.847656 49.15625 25.25 C 49.15625 12.253906 38.425781 1.6875 25.25 1.6875 C 24.011719 1.6875 22.761719 1.78125 21.53125 1.96875 C 19.335938 0.683594 16.847656 0 14.28125 0 Z M 25.09375 9.375 C 27.140625 9.375 28.933594 9.597656 30.4375 10.0625 C 31.945313 10.523438 33.222656 11.136719 34.21875 11.90625 C 35.226563 12.683594 35.996094 13.511719 36.46875 14.375 C 36.945313 15.246094 37.1875 16.132813 37.1875 16.96875 C 37.1875 17.777344 36.84375 18.484375 36.21875 19.125 C 35.59375 19.765625 34.808594 20.09375 33.875 20.09375 C 33.027344 20.09375 32.367188 19.898438 31.90625 19.5 C 31.476563 19.125 31.023438 18.554688 30.53125 17.71875 C 29.960938 16.648438 29.292969 15.777344 28.5 15.1875 C 27.730469 14.613281 26.421875 14.34375 24.65625 14.34375 C 23.015625 14.34375 21.675781 14.640625 20.6875 15.28125 C 19.730469 15.898438 19.28125 16.628906 19.28125 17.46875 C 19.28125 17.984375 19.441406 18.410156 19.75 18.78125 C 20.078125 19.171875 20.511719 19.496094 21.09375 19.78125 C 21.695313 20.078125 22.316406 20.332031 22.9375 20.5 C 23.574219 20.671875 24.660156 20.945313 26.125 21.28125 C 27.976563 21.675781 29.679688 22.089844 31.1875 22.5625 C 32.710938 23.046875 34.019531 23.652344 35.09375 24.34375 C 36.1875 25.046875 37.070313 25.949219 37.6875 27.03125 C 38.304688 28.113281 38.59375 29.441406 38.59375 31 C 38.589844 32.859375 38.066406 34.546875 37 36.03125 C 35.9375 37.511719 34.371094 38.703125 32.34375 39.53125 C 30.335938 40.351563 27.925781 40.75 25.1875 40.75 C 21.898438 40.75 19.148438 40.191406 17 39.0625 C 15.460938 38.246094 14.175781 37.117188 13.21875 35.75 C 12.242188 34.367188 11.75 33.011719 11.75 31.6875 C 11.75 30.863281 12.085938 30.152344 12.71875 29.5625 C 13.347656 28.984375 14.136719 28.6875 15.09375 28.6875 C 15.878906 28.6875 16.574219 28.914063 17.125 29.375 C 17.65625 29.816406 18.105469 30.472656 18.46875 31.3125 C 18.875 32.230469 19.308594 32.980469 19.78125 33.59375 C 20.226563 34.175781 20.863281 34.679688 21.6875 35.0625 C 22.515625 35.453125 23.652344 35.65625 25.03125 35.65625 C 26.925781 35.65625 28.460938 35.253906 29.625 34.46875 C 30.765625 33.703125 31.34375 32.785156 31.34375 31.65625 C 31.34375 30.765625 31.03125 30.046875 30.4375 29.5 C 29.8125 28.925781 28.992188 28.492188 28 28.1875 C 26.957031 27.871094 25.558594 27.519531 23.8125 27.15625 C 21.4375 26.652344 19.417969 26.046875 17.8125 25.375 C 16.167969 24.683594 14.84375 23.722656 13.875 22.53125 C 12.890625 21.316406 12.375 19.820313 12.375 18.03125 C 12.375 16.324219 12.902344 14.761719 13.9375 13.4375 C 14.957031 12.125 16.449219 11.105469 18.375 10.40625 C 20.273438 9.710938 22.539063 9.375 25.09375 9.375 Z"></path>
  //       </svg>
  //     </Link>
  //   ),
  // },
  {
    icon: (
      <Icon
        src={thumbIcon}
        alt="Facebook Thumbs up Icon"
        className="filter-grey"
      />
    ),
    title: 'Social Media',
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
