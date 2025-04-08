
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface RequirementCategoryProps {
  title: string;
  progress: number;
  status: 'on-track' | 'attention-needed';
}

const RequirementCategory = ({ title, progress, status }: RequirementCategoryProps) => {
  return (
    <div className="card-container">
      <h3 className="font-medium mb-1">{title}</h3>
      <div className="flex justify-between text-sm mb-1">
        <span className="font-bold">{progress}%</span>
        <span className={cn(
          "font-medium px-2 py-0.5 rounded-full text-xs",
          status === 'on-track' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        )}>
          {status === 'on-track' ? 'On Track' : 'Attention Needed'}
        </span>
      </div>
      <Progress 
        value={progress} 
        className={cn(
          "h-2",
          status === 'on-track' ? 'bg-green-100' : 'bg-yellow-100'
        )}
        indicatorClassName={cn(
          status === 'on-track' ? 'bg-green-500' : 'bg-yellow-500'
        )}
      />
    </div>
  );
};

interface RequirementCategoriesProps {
  categories: {
    title: string;
    progress: number;
    status: 'on-track' | 'attention-needed';
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
