
import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

interface PieChartProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  title: string;
}

const PieChart = ({ data, title }: PieChartProps) => {
  // Modify the colors to ensure unfulfilled is red
  const updatedData = data.map(item => 
    item.name === 'Unfulfilled' 
      ? { ...item, color: '#ff6b6b' } 
      : item
  );

  return (
    <div className="h-full w-full">
      <h3 className="text-center font-medium mb-2">{title}</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie
              data={updatedData}
              cx="50%"
              cy="50%"
              innerRadius={30}  // Reduced inner radius to make graph thicker
              outerRadius={85}  // Increased outer radius to make graph thicker
              paddingAngle={2}
              dataKey="value"
            >
              {updatedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center items-center gap-4 mt-4">
        {updatedData.map((item, index) => (
          <div key={index} className="flex items-center">
            <div 
              className="w-3 h-3 rounded-full mr-1" 
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-xs">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
