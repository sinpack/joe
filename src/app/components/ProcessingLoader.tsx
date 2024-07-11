import React from 'react';
import Spinner from './Spinner';

export default function ProcessingLoader({
    text = 'processing request'
}: {
    text?: string;
}) {
    return (
        <div className="flex items-center text-blackWhite-400">
            <Spinner /> <span className="ml-1.5">{text}</span>
        </div>
    );
}
