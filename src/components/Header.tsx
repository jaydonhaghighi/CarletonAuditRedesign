
import React from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-2 flex items-center">
      <div className="flex items-center">
        <img src="/lovable-uploads/44ea138b-0eb2-47ab-8198-6624602b0d6f.png" alt="Carleton University Logo" className="h-10 mr-2" />
        <div>
          <h1 className="text-lg font-bold">Carleton University</h1>
          <p className="text-sm text-gray-600">Auditing System</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
