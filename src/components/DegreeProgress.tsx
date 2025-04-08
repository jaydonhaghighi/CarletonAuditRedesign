
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface DegreeProgressProps {
  progressPercentage: number;
  expectedGraduation: string;
}

const DegreeProgress = ({ progressPercentage, expectedGraduation }: DegreeProgressProps) => {
  return (
    <div className="card-container">
      <div className="flex justify-between items-center mb-2">
        <h2 className="section-title">Overall Degree Progress</h2>
        <span className="font-bold text-xl">{progressPercentage}%</span>
      </div>
      
      <Progress value={progressPercentage} className="h-4 mb-4" />
      
      <div className="text-sm font-medium text-gray-600">
        <p>Expected Graduation: <span className="font-bold">{expectedGraduation}</span></p>
      </div>
    </div>
  );
};

export default DegreeProgress;
