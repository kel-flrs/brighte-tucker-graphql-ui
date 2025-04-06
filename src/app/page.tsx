import RegistrationForm from './components/RegistrationForm';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Brighte Eats</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover a new way to experience food delivery and payment with Brighte Eats. Express your interest in our services below.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="w-full lg:w-1/2">
          <RegistrationForm />
        </div>
        
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <div className="text-[#00C28C] mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Delivery</h3>
            <p className="text-gray-600">
              Get your favorite meals delivered right to your doorstep with our convenient delivery service. Fast, reliable and always on time.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <div className="text-[#00C28C] mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Pick-Up</h3>
            <p className="text-gray-600">
              Skip the line and save time with our easy pick-up option. Order ahead and collect when ready, with no waiting around.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <div className="text-[#00C28C] mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Payment</h3>
            <p className="text-gray-600">
              Experience hassle-free payments with our secure and easy-to-use payment system. Multiple options to suit your preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}