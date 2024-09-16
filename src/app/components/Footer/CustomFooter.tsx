'use client';

import { format } from 'date-fns';
import Link from 'next/link';
import Logo from '../Logo';
import linkItems from '../../../utils/LinkItems';
import ActiveLink from '../Header/ActiveLink';

const CustomFooter = () => {
  const currentYear = format(new Date(), 'yyyy');

  return (
    <footer className="w-full bg-sky-50 py-16">
      <div className="md:px-12 lg:px-28">
        <div className="flex flex-col items-center container m-auto space-y-6 text-gray-600 ">
          {' '}
          <Logo />
          <ul
            role="list"
            className="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8"
          >
            {linkItems.map((item) => (
              <li role="listitem" key={item.name} className="flex text-center">
                <ActiveLink name={item.name} href={item.href} />
              </li>
            ))}
          </ul>
          <div className="m-auto flex w-max items-center justify-between space-x-4">
            <Link href="tel:+306976629913" aria-label="call">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="m-auto w-5"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                ></path>
              </svg>
            </Link>
            <Link
              href="mailto:georgios_antonopoulos@hotmail.com"
              aria-label="send mail"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="m-auto w-5"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path>
              </svg>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61562549031639"
              title="facebook"
              target="_blank"
              aria-label="facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="m-auto w-5"
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
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-auto w-5"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.9962 0.0078125C8.73824 0.0078125 8.32971 0.021622 7.05019 0.080003C5.77333 0.138241 4.90129 0.341051 4.13824 0.637622C3.34938 0.944146 2.68038 1.35434 2.01343 2.02124C1.34652 2.68819 0.936333 3.35719 0.629809 4.14605C0.333238 4.9091 0.130429 5.78115 0.0721905 7.058C0.0138095 8.33753 0 8.74605 0 12.0041C0 15.262 0.0138095 15.6705 0.0721905 16.9501C0.130429 18.2269 0.333238 19.099 0.629809 19.862C0.936333 20.6509 1.34652 21.3199 2.01343 21.9868C2.68038 22.6537 3.34938 23.0639 4.13824 23.3705C4.90129 23.667 5.77333 23.8698 7.05019 23.9281C8.32971 23.9864 8.73824 24.0002 11.9962 24.0002C15.2542 24.0002 15.6627 23.9864 16.9422 23.9281C18.2191 23.8698 19.0911 23.667 19.8542 23.3705C20.643 23.0639 21.312 22.6537 21.979 21.9868C22.6459 21.3199 23.0561 20.6509 23.3627 19.862C23.6592 19.099 23.862 18.2269 23.9202 16.9501C23.9786 15.6705 23.9924 15.262 23.9924 12.0041C23.9924 8.74605 23.9786 8.33753 23.9202 7.058C23.862 5.78115 23.6592 4.9091 23.3627 4.14605C23.0561 3.35719 22.6459 2.68819 21.979 2.02124C21.312 1.35434 20.643 0.944146 19.8542 0.637622C19.0911 0.341051 18.2191 0.138241 16.9422 0.080003C15.6627 0.021622 15.2542 0.0078125 11.9962 0.0078125ZM7.99748 12.0041C7.99748 14.2125 9.78776 16.0028 11.9962 16.0028C14.2047 16.0028 15.995 14.2125 15.995 12.0041C15.995 9.79557 14.2047 8.00529 11.9962 8.00529C9.78776 8.00529 7.99748 9.79557 7.99748 12.0041ZM5.836 12.0041C5.836 8.60181 8.594 5.84381 11.9962 5.84381C15.3984 5.84381 18.1564 8.60181 18.1564 12.0041C18.1564 15.4062 15.3984 18.1642 11.9962 18.1642C8.594 18.1642 5.836 15.4062 5.836 12.0041ZM18.3998 7.03996C19.1949 7.03996 19.8394 6.39548 19.8394 5.60043C19.8394 4.80538 19.1949 4.16086 18.3998 4.16086C17.6048 4.16086 16.9603 4.80538 16.9603 5.60043C16.9603 6.39548 17.6048 7.03996 18.3998 7.03996Z"
                  fill="#4B5563"
                />
              </svg>
            </Link>
          </div>
          <div className="text-center">
            <span className="text-sm tracking-wide">
              Copyright © AfterhoursDev <span id="year">{currentYear}</span> |
              All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
