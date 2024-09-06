import Link from 'next/link';

type LinkProps = {
  text: string;
  url: string;
};

export const CustomLink = ({ text, url }: LinkProps) => {
  return (
    <Link
      href={url}
      className="flex text-white bg-gray-700 hover:bg-gray-600 active:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 transition-300"
    >
      {text}{' '}
    </Link>
  );
};
