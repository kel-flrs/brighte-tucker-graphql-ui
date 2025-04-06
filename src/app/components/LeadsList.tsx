'use client';

import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { GET_LEADS, SERVICE_OPTIONS } from '../lib/graphql';

interface Lead {
  id: number;
  name: string;
  email: string;
  mobile: string;
  postcode: string;
  services: string[];
}

const LeadsList = () => {
  const { loading, error, data, refetch } = useQuery(GET_LEADS);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00A87B]"></div>
          <p className="mt-4 text-gray-500">Loading leads data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-6 rounded-lg shadow">
        <h3 className="text-red-800 font-semibold text-lg mb-2">Error Loading Data</h3>
        <p className="text-red-600 mb-4">{error.message}</p>
        <button
          onClick={() => refetch()}
          className="bg-white text-red-700 border border-red-300 px-4 py-2 rounded-md hover:bg-red-50 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  const leads: Lead[] = data?.leads || [];

  if (leads.length === 0) {
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
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
        <h3 className="text-lg font-medium text-gray-500">No leads found</h3>
        <p className="text-gray-400 mt-2 mb-6">Leads will appear here once customers express interest</p>
        <Link
          href="/"
          className="inline-block bg-[#00A87B] text-white px-4 py-2 rounded-md hover:bg-[#00C28C] transition-colors"
        >
          Go to Registration Form
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Postcode</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Services</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {leads.map((lead) => (
            <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lead.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.mobile}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.postcode}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex flex-wrap gap-1">
                {lead.services.map((serviceKey: string) => {
                  const serviceOption = SERVICE_OPTIONS.find(opt => opt.key === serviceKey);
                  return (
                    <span
                      key={serviceKey}
                      className="service-tag"
                    >
                      {serviceOption ? serviceOption.value : serviceKey.toLowerCase()}
                    </span>
                  );
                })}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <Link
                  href={`/dashboard/lead/${lead.id}`}
                  className="text-[#00A87B] hover:text-[#00C28C] font-medium"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadsList;