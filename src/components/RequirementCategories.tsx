import React from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface RequirementCategoryProps {
  title: string;
  progress: number;
  status: 'on-track' | 'attention-needed' | 'in-progress';
}

const RequirementCategory = ({ title, progress, status }: RequirementCategoryProps) => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'on-track':
        return 'bg-green-100 text-green-800';
      case 'attention-needed':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'on-track':
        return 'On Track';
      case 'attention-needed':
        return 'Attention Needed';
      case 'in-progress':
        return 'In Progress';
      default:
        return 'Unknown';
    }
  };

  const getProgressStyle = (status: string) => {
    switch (status) {
      case 'on-track':
        return 'bg-green-100';
      case 'attention-needed':
        return 'bg-yellow-100';
      case 'in-progress':
        return 'bg-blue-100';
      default:
        return 'bg-gray-100';
    }
  };

  const getIndicatorStyle = (status: string) => {
    switch (status) {
      case 'on-track':
        return 'bg-green-500';
      case 'attention-needed':
        return 'bg-yellow-500';
      case 'in-progress':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
      <h3 className="font-medium mb-1">{title}</h3>
      <div className="flex justify-between text-sm mb-1">
        <span className="font-bold">{progress}%</span>
        <span className={cn(
          "font-medium px-2 py-0.5 rounded-full text-xs",
          getStatusStyle(status)
        )}>
          {getStatusText(status)}
        </span>
      </div>
      <Progress 
        value={progress} 
        className={cn(
          "h-2",
          getProgressStyle(status)
        )}
        indicatorClassName={cn(
          getIndicatorStyle(status)
        )}
      />
    </div>
  );
};

interface RequirementCategoriesProps {
  categories: {
    title: string;
    progress: number;
    status: 'on-track' | 'attention-needed' | 'in-progress';
  }[];
}

const RequirementCategories = ({ categories }: RequirementCategoriesProps) => {
  return (
    <div className="card-container">
      <h2 className="section-title">Requirement Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <RequirementCategory 
            key={index}
            title={category.title}
            progress={category.progress}
            status={category.status}
          />
        ))}
      </div>
    </div>
  );
};

export default RequirementCategories;
