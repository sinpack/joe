'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Divider from '../../components/Divider';
import PrimarySolidButton from '../../components/Buttons/PrimarySolidButton';
import { useRouter, usePathname } from 'next/navigation';
import therapyToolsAnalysis from '../../../utils/TherapyToolsAnalysis';
import NavigationButton from '../../components/Buttons/NavigationButton';

interface TherapyTool {
  nameId: string;
  mainTitle: string;
  startingParagraph?: string;
  imageUrl: StaticImageData;
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
  const pathname = usePathname();

  return (
    <div className="py-20 bg-sky-50 container mx-auto px-10 sm:px-28 header:px-60 items-center flex flex-col space-y-10">
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex place-self-center lg:place-self-start">
          <Image
            src={therapyTool.imageUrl}
            alt={therapyTool.mainTitle}
            sizes="100vw"
            width={500}
            height={500}
            quality={100}
            priority
            className="shadow-2xl drop-shadow-2xl rounded-lg"
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
            {therapyTool.startingParagraph && (
              <p className="text-center lg:text-start">
                {therapyTool.startingParagraph}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-20 gap-10 flex flex-col-reverse md:flex-row md:gap-2.5">
        <div className="md:w-3/12 space-y-5">
          <div className="flex flex-col">
            <h4 className="flex items-center h-5 font-bold justify-center lg:justify-start">
              ΑΛΛΕΣ ΥΠΗΡΕΣΙΕΣ
            </h4>
            {therapyToolsAnalysis.map((tool: TherapyTool) => {
              const isActive = pathname === `/treatments/${tool.nameId}`;
              return (
                <div
                  key={tool.nameId}
                  className="mt-2.5 flex flex-col items-center md:items-start"
                >
                  <Link
                    href={`/treatments/${tool.nameId}`}
                    className={`flex flex-col text-gray-500 whitespace-break-spaces items-center w-fit py-2.5 text-sm font-bold  text-center md:text-start sm:text-center rounded-lg ${
                      isActive
                        ? '!text-blue-500 cursor-default'
                        : 'hover:bg-primary-800 hover:underline'
                    }`}
                  >
                    {tool.linkTitle}
                  </Link>
                  <Divider className="filter-grey-bold" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:w-9/12 space-y-10">
          {therapyTool.sections?.map((section, index) => (
            <div key={index} className="flex flex-col space-y-5">
              <h2 className="font-semibold text-center lg:text-start">
                {section.title}
              </h2>
              <p className="text-center md:text-start text-pretty">
                {section.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full space-y-20">
        <div className="flex place-self-center md:place-self-start">
          <NavigationButton
            text="ΠΙΣΩ ΣΤΙΣ ΥΠΗΡΕΣΙΕΣ - ΘΕΡΑΠΕΙΕΣ"
            link="/treatments"
          />
        </div>
        <div className="flex place-self-center">
          <NavigationButton text="ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ" link="/contact" />
        </div>
      </div>
    </div>
  );
};

export default TherapyToolContent;
