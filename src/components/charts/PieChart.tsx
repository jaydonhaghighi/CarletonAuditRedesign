import React, { useState } from 'react';
import { 
  PieChart as RechartsPieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { cn } from '@/lib/utils';

interface PieChartProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  title: string;
}

const PieChart = ({ data, title }: PieChartProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Modify the colors to ensure unfulfilled is red
  const updatedData = data.map(item => 
    item.name === 'Unfulfilled' 
      ? { ...item, color: '#ff6b6b' } 
      : item
  );

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-sm text-gray-600">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h3 className="text-center font-medium mb-4">{title}</h3>
      <div className="h-[250px] w-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie
              data={updatedData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
              activeIndex={activeIndex !== null ? [activeIndex] : []}
            >
              {updatedData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  className={cn(
                    "transition-all duration-200",
                    activeIndex === index ? "opacity-100" : "opacity-80 hover:opacity-100"
                  )}
                  stroke={activeIndex === index ? "#fff" : "none"}
                  strokeWidth={activeIndex === index ? 2 : 0}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center items-center gap-4 mt-4">
        {updatedData.map((item, index) => (
          <div 
            key={index} 
            className={cn(
              "flex items-center cursor-pointer transition-all duration-200",
              activeIndex === index ? "scale-110" : "hover:scale-105"
            )}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
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
