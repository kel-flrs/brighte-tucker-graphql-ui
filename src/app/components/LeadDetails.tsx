'use client';

import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { GET_LEAD, SERVICE_OPTIONS } from '../lib/graphql';

interface LeadDetailsProps {
  id: number;
}

const LeadDetails = ({ id }: LeadDetailsProps) => {
  const { loading, error, data } = useQuery(GET_LEAD, {
    variables: { id },
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00A87B]"></div>
          <p className="mt-4 text-gray-500">Loading lead details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-6 rounded-lg shadow">
        <h3 className="text-red-800 font-semibold text-lg mb-2">Error Loading Data</h3>
        <p className="text-red-600 mb-4">{error.message}</p>
        <Link
          href="/dashboard"
          className="bg-white text-red-700 border border-red-300 px-4 py-2 rounded-md hover:bg-red-50 transition-colors"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const lead = data?.lead;

  if (!lead) {
    return (
      <div className="text-center py-16 bg-white rounded-lg shadow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 mx-auto text-gray-400 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-lg font-medium text-gray-500">Lead not found</h3>
        <p className="text-gray-400 mt-2 mb-6">The requested lead couldn&apos;t be found</p>
        <Link
          href="/dashboard"
          className="inline-block bg-[#00A87B] text-white px-4 py-2 rounded-md hover:bg-[#00C28C] transition-colors"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 bg-[#00A87B]">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Lead Details</h2>
          <Link
            href="/dashboard"
            className="bg-white text-[#00A87B] px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">ID</h3>
              <p className="mt-1 text-lg text-gray-900">{lead.id}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Name</h3>
              <p className="mt-1 text-lg text-gray-900">{lead.name}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Email</h3>
              <p className="mt-1 text-lg text-gray-900">{lead.email}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Mobile</h3>
              <p className="mt-1 text-lg text-gray-900">{lead.mobile}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Postcode</h3>
              <p className="mt-1 text-lg text-gray-900">{lead.postcode}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Services Interested In</h3>
              <div className="mt-2 flex flex-wrap gap-2">
              {lead.services.map((serviceKey: string) => {
                const serviceOption = SERVICE_OPTIONS.find(opt => opt.key === serviceKey);
                return (
                  <span
                    key={serviceKey}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-[#00C28C] bg-opacity-20 text-[#ffffff]"
                  >
                    {serviceOption ? serviceOption.value : serviceKey.toLowerCase()}
                  </span>
                );
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;