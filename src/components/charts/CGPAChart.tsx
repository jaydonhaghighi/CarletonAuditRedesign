
import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface CGPAChartProps {
  cgpa: number;
  maxScale: number;
}

const CGPAChart = ({ cgpa, maxScale }: CGPAChartProps) => {
  // Create data for the chart
  const data = [{ name: 'CGPA', value: cgpa }];
  
  return (
    <div className="h-full w-full">
      <h3 className="text-center font-medium mb-2">CGPA</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart 
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, bottom: 5, left: 5 }}
          >
            <XAxis 
              type="number" 
              domain={[0, maxScale]} 
              tick={{ fontSize: 12 }}
              tickCount={6}
            />
            <YAxis type="category" dataKey="name" hide />
            <Bar 
              dataKey="value" 
              fill="#7dd364" 
              radius={[4, 4, 4, 4]}
              barSize={30}
              label={{ 
                position: 'insideRight', 
                fill: '#fff',
                fontSize: 14, 
                fontWeight: 'bold',
                value: cgpa.toFixed(1) 
              }}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CGPAChart;
