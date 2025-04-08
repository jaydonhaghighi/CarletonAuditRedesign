import React from 'react';
import Header from '@/components/Header';
import WelcomeSection from '@/components/WelcomeSection';
import DashboardSection from '@/components/DashboardSection';
import DegreeProgress from '@/components/DegreeProgress';
import RequirementCategories from '@/components/RequirementCategories';
import DegreeRequirements from '@/components/DegreeRequirements';

const Index = () => {
  // Mock data for the pie chart
  const pieChartData = [
    { name: 'Complete', value: 75, color: '#7dd364' },
    { name: 'In Progress', value: 15, color: '#7c9fdb' },
    { name: 'Unfulfilled', value: 10, color: '#a883f1' }
  ];

  // Mock data for yearly GPA
  const yearlyGpaData = [
    { name: 'Complementary', value: 10.5 },
    { name: 'Year 1', value: 9.45 },
    { name: 'Year 2', value: 7.80 },
    { name: 'Year 3', value: 9.22 },
    { name: 'Year 4', value: 8.64 }
  ];

  // Mock data for credits by category
  const creditsByCategoryData = [
    { 
      name: 'Complementary', 
      completed: 1.0, 
      inProgress: 0.5, 
      unfulfilled: 0.0
    },
    { 
      name: 'Year 1', 
      completed: 4.5, 
      inProgress: 0.0, 
      unfulfilled: 0.0
    },
    { 
      name: 'Year 2', 
      completed: 4.0, 
      inProgress: 0.5, 
      unfulfilled: 1.0
    },
    { 
      name: 'Year 3', 
      completed: 4.0, 
      inProgress: 1.0, 
      unfulfilled: 0.5
    },
    { 
      name: 'Year 4', 
      completed: 3.5, 
      inProgress: 0.5, 
      unfulfilled: 1.5
    }
  ];

  // Mock data for requirement categories
  const requirementCategories = [
    {
      title: 'Mandatory Courses',
      progress: 80,
      status: 'in-progress' as const
    },
    {
      title: 'Engineering Electives',
      progress: 50,
      status: 'attention-needed' as const
    },
    {
      title: 'Complementary Studies',
      progress: 100,
      status: 'on-track' as const
    }
  ];

  // Mock data for degree requirements
  const degreeRequirementGroups = [
    {
      title: 'Engineering Core Courses',
      subtitle: 'Fundamental Engineering Courses',
      progress: '12.0/15.0 credits',
      percentage: 80,
      courses: [
        {
          code: 'MATH 1004',
          title: 'Calculus for Engineering',
          credits: 1.0,
          status: 'completed' as const,
          grade: 'A'
        },
        {
          code: 'PHYS 1004',
          title: 'Physics for Engineering',
          credits: 1.0,
          status: 'completed' as const,
          grade: 'A-'
        },
        {
          code: 'COMP 1005',
          title: 'Introduction to Computer Science',
          credits: 1.0,
          status: 'completed' as const,
          grade: 'A'
        },
        {
          code: 'SYSC 2004',
          title: 'Object-Oriented Programming',
          credits: 1.0,
          status: 'completed' as const,
          grade: 'A'
        },
        {
          code: 'SYSC 2006',
          title: 'Software Design',
          credits: 1.0,
          status: 'completed' as const,
          grade: 'B+'
        },
        {
          code: 'SYSC 2008',
          title: 'Data Structures and Algorithms',
          credits: 1.0,
          status: 'completed' as const,
          grade: 'A-'
        },
        {
          code: 'SYSC 2100',
          title: 'Operating Systems',
          credits: 1.0,
          status: 'in-progress' as const
        },
        {
          code: 'SYSC 3101',
          title: 'Software Engineering',
          credits: 1.0,
          status: 'in-progress' as const
        },
        {
          code: 'SYSC 3600',
          title: 'Computer Networks',
          credits: 1.0,
          status: 'in-progress' as const
        }
      ]
    },
    {
      title: 'Engineering Electives',
      subtitle: 'Specialized Courses for Engineering',
      progress: '10.5/15 credits',
      percentage: 70,
      courses: [
        {
          code: 'COMP 3008',
          title: 'Human Computer Interactions',
          credits: 0.5,
          status: 'in-progress' as const
        },
        {
          code: 'SYSC 4906',
          title: 'Advanced C++ Programming',
          credits: 0.5,
          status: 'not-started' as const
        },
        {
          code: 'SYSC 4504',
          title: 'Introduction to Web Development',
          credits: 0.5,
          status: 'completed' as const,
          grade: 'A'
        },
        {
          code: 'COMP 2108',
          title: 'Applied Cryptography',
          credits: 0.5,
          status: 'completed' as const,
          grade: 'A'
        }
      ]
    },
    {
      title: 'Complementary Studies',
      subtitle: 'Non-Engineering Courses',
      progress: '1.0/1.0 credits',
      percentage: 100,
      courses: [
        {
          code: 'BUSI 1001',
          title: 'Principles of Financial Accounting',
          credits: 0.5,
          status: 'completed' as const,
          grade: 'A-'
        },
        {
          code: 'PSYC 1001',
          title: 'Introduction to Psychology I',
          credits: 0.5,
          status: 'completed' as const,
          grade: 'B+'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#ebf2ff]">
      <Header />
      <div className="container py-6 max-w-5xl">
        <WelcomeSection 
          studentName="Jaydon"
          program="Bachelor of Engineering - Software Engineering"
          graduationDate="Spring 2025"
          onTrack={true}
        />
        
        <DashboardSection 
          pieChartData={pieChartData}
          cgpa={9.3}
          yearlyGpaData={yearlyGpaData}
          creditsByCategoryData={creditsByCategoryData}
        />
        
        <DegreeProgress 
          progressPercentage={76}
          expectedGraduation="Spring 2025"
        />
        
        <RequirementCategories 
          categories={requirementCategories}
        />
        
        <DegreeRequirements 
          requirementGroups={degreeRequirementGroups}
        />
      </div>
    </div>
  );
};

export default Index;
