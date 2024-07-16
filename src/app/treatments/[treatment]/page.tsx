// pages/treatments/[treatment].tsx

import Link from 'next/link';
import Image from 'next/image';
import Divider from '@/app/components/Divider';
import therapyToolsAnalysis from '@/utils/TherapyToolsAnalysis';
import { GetStaticPaths, GetStaticProps } from 'next';

interface TherapyToolPageProps {
  therapyTool: {
    nameId: string;
    mainTitle: string;
    startingParagraph: string;
    image: string;
    sections: {
      title: string;
      paragraph: string;
    }[];
  };
}

const TherapyToolPage: React.FC<TherapyToolPageProps> = ({ therapyTool }) => {
  if (!therapyTool) {
    return <div>Therapy tool not found.</div>;
  }

  return (
    <div className="py-20 bg-sky-50 container mx-auto px-10 sm:px-28 header:px-60">
      <div className="flex flex-col gap-5 lg:flex-row">
        <Image
          src={therapyTool.image}
          alt={therapyTool.mainTitle}
          className="place-self-center shadow-xl drop-shadow-2xl rounded-lg lg:place-self-start"
          priority
          height={400}
          width={400}
          quality={100}
        />
        <div className="flex flex-col justify-end space-y-5">
          <div className="flex flex-row space-x-2.5 items-center justify-center">
            <h5 className="flex items-center w-fit">ΥΠΗΡΕΣΙΕΣ</h5>
            <Divider className="hidden lg:flex filter-grey-bold" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold whitespace-normal tracking-normal leading-normal text-center lg:text-start">
              {therapyTool.mainTitle}
            </h3>
            <p className="text-center lg:text-start">
              {therapyTool.startingParagraph}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col-reverse md:flex-row gap-5">
        <div className="md:w-1/4 space-y-5">
          <div className="flex flex-col">
            <h4 className="flex items-center h-10 font-bold justify-center lg:justify-start">
              ΑΛΛΕΣ ΥΠΗΡΕΣΙΕΣ
            </h4>
            {therapyToolsAnalysis.map((tool) => (
              <div
                key={tool.nameId}
                className="mt-2.5 flex flex-col items-center md:items-start"
              >
                <Link
                  href={`/treatments/${tool.nameId}`}
                  className="flex flex-col text-gray-500 whitespace-break-spaces items-center w-fit py-2.5 text-sm font-bold text-start rounded-lg hover:bg-primary-800 hover:underline"
                >
                  {tool.linkTitle}
                </Link>
                <Divider className="filter-grey-bold" />
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-3/4 space-y-5">
          {therapyTool.sections?.map((section, index) => (
            <div key={index} className="flex flex-col space-y-2.5">
              <h2 className="font-semibold text-center lg:text-start">
                {section.title}
              </h2>
              <p className="text-center lg:text-start">{section.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = therapyToolsAnalysis.map((tool) => ({
    params: { treatment: tool.nameId },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const therapyTool = therapyToolsAnalysis.find(
    (tool) => tool.nameId === params?.treatment
  );

  if (!therapyTool) {
    return { notFound: true };
  }

  return {
    props: { therapyTool },
  };
};

export default TherapyToolPage;
