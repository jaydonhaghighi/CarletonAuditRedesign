import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, ChevronDown, Check, AlertCircle, Clock } from 'lucide-react';

interface CourseProps {
  code: string;
  title: string;
  credits: number;
  status: 'completed' | 'in-progress' | 'not-started';
  grade?: string;
}

const Course = ({ code, title, credits, status, grade }: CourseProps) => {
  const statusColors = {
    'completed': 'bg-green-100 text-green-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    'not-started': 'bg-red-100 text-red-800'
  };

  const statusIcons = {
    'completed': <Check className="h-4 w-4 mr-1" />,
    'in-progress': <Clock className="h-4 w-4 mr-1" />,
    'not-started': <AlertCircle className="h-4 w-4 mr-1" />
  };

  const statusText = {
    'completed': 'Completed',
    'in-progress': 'In Progress',
    'not-started': 'Not Started'
  };

  return (
    <div className="bg-blue-50 rounded-lg p-3 mb-2 flex justify-between items-center">
      <div className="flex-1">
        <div className="font-medium">{code} {title}</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm">{credits} credits</div>
        {grade && <div className="font-bold">{grade}</div>}
        <div className={cn(
          "flex items-center px-2 py-1 rounded-full text-xs",
          statusColors[status]
        )}>
          {statusIcons[status]}
          {statusText[status]}
        </div>
      </div>
    </div>
  );
};

interface RequirementGroupProps {
  title: string;
  subtitle: string;
  progress: string;
  percentage: number;
  courses: CourseProps[];
}

const RequirementGroup = ({ title, subtitle, progress, percentage, courses }: RequirementGroupProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-4 shadow-sm">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <div className="flex items-center">
            {percentage === 100 ? (
              <Check className="h-5 w-5 text-green-600 mr-2" />
            ) : title === 'Engineering Electives' ? (
              <div className="h-5 w-5 flex items-center justify-center mr-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
              </div>
            ) : (
              <div className="h-5 w-5 flex items-center justify-center mr-2">
                <div className="h-3 w-3 rounded-full bg-blue-400"></div>
              </div>
            )}
            <h3 className="font-semibold">{title}</h3>
          </div>
          <p className="text-sm text-gray-600 ml-7">{subtitle}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm font-medium">{progress}</div>
          <div className="text-sm font-medium">{percentage}%</div>
          {isExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
        </div>
      </div>
      
      {isExpanded && (
        <div className="mt-4 ml-7">
          <h4 className="font-medium mb-2">Courses</h4>
          {courses.map((course, index) => (
            <Course 
              key={index}
              code={course.code}
              title={course.title}
              credits={course.credits}
              status={course.status}
              grade={course.grade}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface DegreeRequirementsProps {
  requirementGroups: RequirementGroupProps[];
}

const DegreeRequirements = ({ requirementGroups }: DegreeRequirementsProps) => {
  return (
    <div className="card-container">
      <h2 className="section-title">Degree Requirements</h2>
      {requirementGroups.map((group, index) => (
        <RequirementGroup 
          key={index}
          title={group.title}
          subtitle={group.subtitle}
          progress={group.progress}
          percentage={group.percentage}
          courses={group.courses}
        />
      ))}
    </div>
  );
};

export default DegreeRequirements;
