import React from 'react';
import therapyToolsAnalysis from '../../../utils/TherapyToolsAnalysis';
import TherapyToolContent from './TherapyToolContent';

interface TherapyTool {
  nameId: string;
  mainTitle: string;
  startingParagraph?: string;
  imageUrl: string;
  sections: {
    title: string;
    paragraph: string;
  }[];
  linkTitle: string;
}

interface TherapyToolPageProps {
  params: { treatment: string };
}

export async function generateStaticParams() {
  return therapyToolsAnalysis.map((tool: TherapyTool) => ({
    treatment: tool.nameId,
  }));
}

const TherapyToolPage: React.FC<TherapyToolPageProps> = ({ params }) => {
  const therapyTool = therapyToolsAnalysis.find(
    (tool: TherapyTool) => tool.nameId === params.treatment
  );

  if (!therapyTool) {
    return <div>Therapy tool not found.</div>;
  }

  return <TherapyToolContent therapyTool={therapyTool} />;
};

export default TherapyToolPage;
