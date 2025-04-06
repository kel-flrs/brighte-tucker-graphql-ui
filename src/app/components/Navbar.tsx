'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-[#00A87B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-xl">Brighte Eats</span>
          </Link>
          <div className="flex space-x-4">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === '/' 
                  ? 'bg-[#00C28C] text-white' 
                  : 'hover:bg-[#00C28C] hover:opacity-80'
              }`}
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname.startsWith('/dashboard') 
                  ? 'bg-[#00C28C] text-white' 
                  : 'hover:bg-[#00C28C] hover:opacity-80'
              }`}
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;