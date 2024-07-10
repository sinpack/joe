import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Logo() {
  const router = useRouter();

  return (
    <div onClick={() => router.push('/')} className="flex cursor-pointer">
      <Image
        src="/images/logo2.png"
        alt="logo"
        height={80}
        width={80}
        priority
        quality={100}
      />
    </div>
  );
}
