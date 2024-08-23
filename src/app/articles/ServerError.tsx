import Image from 'next/image';
import notFound from '../../../public/images/500.png';
import NavigationButton from '../components/Buttons/NavigationButton';

export default function NotFound() {
  return (
    <section className="bg-[#D9EFEA] flex flex-col justify-center items-center pb-10">
      <Image
        src={notFound}
        alt="500 image"
        className="bg-contain h-[800px]"
        quality={100}
        placeholder="blur"
        priority
        style={{ height: 'auto', width: 'auto' }}
      />
      <div className="flex flex-col items-center justify-center space-y-5">
        <h1 className="text-gray-500 text-center font-bold leading-tight tracking-tight p-2.5 grow">
          OOPS...{' '}
        </h1>
        <NavigationButton text="ΠΙΣΩ ΣΤΗΝ ΑΡΧΙΚΗ ΣΕΛΙΔΑ" link="/" />
      </div>
    </section>
  );
}
