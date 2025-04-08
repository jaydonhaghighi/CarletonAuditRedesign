
import React from 'react';
import PieChart from './charts/PieChart';
import CGPAChart from './charts/CGPAChart';
import YearlyGPAChart from './charts/YearlyGPAChart';
import CreditsBarChart from './charts/CreditsBarChart';

interface DashboardSectionProps {
  pieChartData: {
    name: string;
    value: number;
    color: string;
  }[];
  cgpa: number;
  yearlyGpaData: {
    name: string;
    value: number;
  }[];
  creditsByCategoryData: {
    name: string;
    completed: number;
    inProgress: number;
    unfulfilled: number;
  }[];
}

const DashboardSection = ({ 
  pieChartData, 
  cgpa, 
  yearlyGpaData, 
  creditsByCategoryData 
}: DashboardSectionProps) => {
  return (
    <div className="card-container">
      <h2 className="section-title">Degree Audit Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
          <PieChart data={pieChartData} title="Credits" />
        </div>
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
          <CGPAChart cgpa={cgpa} maxScale={12} />
        </div>
        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
          <YearlyGPAChart data={yearlyGpaData} maxScale={12} />
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
        <CreditsBarChart data={creditsByCategoryData} maxScale={6} />
      </div>
    </div>
  );
};

export default DashboardSection;
