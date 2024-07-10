import Link from 'next/link';

// components/Card.tsx
interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function Card({ title, description, image, link }: CardProps) {
  return (
    <div className="card bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <Link href={link} className="text-blue-500 mt-4 block">
          Read More{' '}
        </Link>
      </div>
    </div>
  );
}
