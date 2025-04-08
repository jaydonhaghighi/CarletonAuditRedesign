
import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { gpaChartConfig } from '@/utils/chartConfig';

interface CGPAChartProps {
  cgpa: number;
  maxScale: number;
}

const CGPAChart = ({ cgpa, maxScale }: CGPAChartProps) => {
  const { margins, barStyle, axisConfig } = gpaChartConfig;
  
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
            margin={margins.cgpa}
          >
            <XAxis 
              type="number" 
              domain={[0, maxScale]} 
              tick={{ fontSize: axisConfig.cgpa.x.fontSize }}
              tickCount={axisConfig.cgpa.x.tickCount}
            />
            <YAxis type="category" dataKey="name" hide />
            <Bar 
              dataKey="value" 
              fill={barStyle.cgpa.fill} 
              radius={barStyle.cgpa.radius}
              barSize={barStyle.cgpa.barSize}
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
