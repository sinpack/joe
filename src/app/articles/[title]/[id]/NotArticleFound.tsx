import NavigationButton from '../../../../app/components/Buttons/NavigationButton';
import Image from 'next/image';
import notFound from '/public/404limbo.jpg';

export default function NotFound() {
  return (
    <section className="bg-black flex flex-col justify-center items-center pb-10">
      <Image
        src={notFound}
        alt="404 image"
        className="bg-contain h-[800px]"
        quality={100}
        placeholder="blur"
        priority
        style={{ height: 'auto', width: 'auto' }}
      />
      <div className="flex flex-col items-center justify-center space-y-5">
        <h3 className="text-white text-center font-bold leading-tight tracking-tight p-2.5 grow">
          Αυτό δεν είναι το άρθρο που ψάχνετε...
        </h3>
        <NavigationButton
          text="ΠΙΣΩ ΣΕ ΟΛΑ ΤΑ ΑΡΘΡΑ"
          width={300}
          link="/articles"
        />
      </div>
    </section>
  );
}
