'use client';

import LeadsList from '../components/LeadsList';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">
          View and manage customer expressions of interest for Brighte Eats services.
        </p>
      </div>
      
      <LeadsList />
    </div>
  );
}