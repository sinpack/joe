'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Divider from '../../components/Divider';
import PrimarySolidButton from '../../components/Buttons/PrimarySolidButton';
import { useRouter } from 'next/navigation';
import therapyToolsAnalysis from '../../../utils/TherapyToolsAnalysis';

interface TherapyTool {
  nameId: string;
  mainTitle: string;
  startingParagraph: string;
  imageUrl: string;
  sections: {
    title: string;
    paragraph: string;
  }[];
  linkTitle: string;
}

interface TherapyToolContentProps {
  therapyTool: TherapyTool;
}

const TherapyToolContent: React.FC<TherapyToolContentProps> = ({
  therapyTool,
}) => {
  const router = useRouter();

  return (
    <div className="py-20 bg-sky-50 container mx-auto px-10 sm:px-28 header:px-60 items-center flex flex-col space-y-10">
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="place-self-center shadow-xl drop-shadow-2xl rounded-lg lg:place-self-start">
          <Image
            src={therapyTool.imageUrl}
            alt={therapyTool.mainTitle}
            width={300}
            height={300}
            quality={100}
            priority
          />
        </div>
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
        <div className="md:w-1/6 space-y-5">
          <div className="flex flex-col">
            <h4 className="flex items-center h-10 font-bold justify-center lg:justify-start">
              ΑΛΛΕΣ ΥΠΗΡΕΣΙΕΣ
            </h4>
            {therapyToolsAnalysis.map((tool: TherapyTool) => (
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
        <div className="md:w-5/6 space-y-5">
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
      <div className="flex flex-col w-full space-y-20">
        <div className="flex place-self-start">
          {' '}
          <PrimarySolidButton
            text="ΠΙΣΩ ΣΤΙΣ ΥΠΗΡΕΣΙΕΣ-ΘΕΡΑΠΕΙΕΣ"
            onClick={() => router.push('/treatments')}
            width={300}
          />
        </div>
        <div className="flex place-self-center">
          {' '}
          <PrimarySolidButton
            text="ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ"
            onClick={() => router.push('/contact')}
            width={300}
          />
        </div>
      </div>
    </div>
  );
};

export default TherapyToolContent;
