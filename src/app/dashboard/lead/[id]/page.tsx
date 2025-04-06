'use client';

import { use } from 'react';
import LeadDetails from '../../../components/LeadDetails';

interface LeadPageProps {
  params: {
    id: string;
  };
}

export default function LeadPage({ params }: LeadPageProps) {
  const resolvedParams = params instanceof Promise ? use(params) : params;
  const id = parseInt(resolvedParams.id, 10);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <LeadDetails id={id} />
    </div>
  );
}