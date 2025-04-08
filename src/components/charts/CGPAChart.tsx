import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ResponsiveContainer, 
  CartesianGrid,
  Tooltip
} from 'recharts';

interface CGPAChartProps {
  cgpa: number;
  maxScale: number;
}

const CGPAChart = ({ cgpa, maxScale }: CGPAChartProps) => {
  // Create data for the chart
  const data = [{ name: 'CGPA', value: cgpa }];
  
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h3 className="text-center font-medium mb-4">CGPA</h3>
      <div className="h-[300px] w-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data}
            margin={{
              top: 20,
              right: 30,
              bottom: 20,
              left: 20
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              domain={[0, maxScale]}
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              formatter={(value: number) => [value.toFixed(2), "GPA"]}
              labelFormatter={(name) => `${name}`}
            />
            <Bar 
              dataKey="value" 
              fill="#7dd364"
              radius={[4, 4, 4, 4]}
              barSize={50}
              label={{ 
                position: 'top', 
                fill: '#374151',
                fontSize: 16, 
                fontWeight: 'bold',
                value: cgpa.toFixed(2) 
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CGPAChart;
