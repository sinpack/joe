import clsx from 'clsx';
import React from 'react';

interface IconSearchProps {
    boldColor: boolean;
    hasColor: boolean;
}

export default function IconSearch({ boldColor, hasColor }: IconSearchProps) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={clsx({
                'default-transition': true,
                'fill-blackWhite-400': !hasColor && !boldColor,
                'fill-primary-400': hasColor && !boldColor,
                'fill-primary-500': boldColor && hasColor,
                'fill-dark': boldColor && !hasColor
            })}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.4506 9.90191C14.4506 12.2516 12.6299 14.0337 10.5325 14.0337C8.43515 14.0337 6.61437 12.2516 6.61437 9.90191C6.61437 7.55222 8.43515 5.77013 10.5325 5.77013C12.6299 5.77013 14.4506 7.55222 14.4506 9.90191ZM13.7278 15.0812C12.8055 15.6931 11.709 16.048 10.5325 16.048C7.25613 16.048 4.6001 13.2963 4.6001 9.90191C4.6001 6.50754 7.25613 3.75586 10.5325 3.75586C13.8089 3.75586 16.4649 6.50754 16.4649 9.90191C16.4649 11.3355 15.9911 12.6544 15.197 13.6999L19.1587 18.3389C19.52 18.7619 19.4699 19.3976 19.0469 19.7588C18.624 20.12 17.9882 20.07 17.627 19.647L13.7278 15.0812Z"
            />
        </svg>
    );
}
