import Link from 'next/link';
import Image from 'next/image';
import notFound from '../../public/cat404.jpg';
import PhotoCard from './components/PhotoCard';
import NavigationButton from './components/Buttons/NavigateButton';

export default function NotFound() {
  return (
    <section className="bg-sky-50 flex flex-col justify-center items-center space-y-5 py-10">
      <div className="w-[500px] h-[500px] relative mt-10">
        <Image
          src={notFound}
          alt="not-found"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={100}
          priority
          className="rounded-2xl shadow-2xl"
        />
      </div>
      <div
        className="flex items-center justify-center"
        style={{ height: '4rem' }}
      >
        <h3 className="text-center font-bold leading-tight tracking-tight p-2.5 grow">
          Δεν βρέθηκε το συγκεκριμένο περιεχόμενο
        </h3>
      </div>
      <NavigationButton text="ΠΙΣΩ ΣΤΗΝ ΑΡΧΙΚΗ ΣΕΛΙΔΑ" width={300} link="/" />
    </section>
  );
}
