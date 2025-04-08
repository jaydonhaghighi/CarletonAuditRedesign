import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';

interface WelcomeSectionProps {
  studentName: string;
  program: string;
  graduationDate: string;
  onTrack: boolean;
}

const WelcomeSection = ({ studentName, program, graduationDate, onTrack }: WelcomeSectionProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h1 className="text-2xl font-bold">Welcome, {studentName}</h1>
          <p className="text-gray-700">{program}</p>
        </div>
      </div>
      
      {onTrack && (
        <div className="bg-green-100 text-green-800 p-3 rounded-lg flex items-center">
          <CheckCircle className="h-5 w-5 mr-2" />
          <span>You're on track to graduate in {graduationDate}</span>
        </div>
      )}
    </div>
  );
};

export default WelcomeSection;
