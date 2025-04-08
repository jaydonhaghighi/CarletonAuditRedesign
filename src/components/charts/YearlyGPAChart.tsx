
import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Label, LabelList } from 'recharts';

interface YearlyGPAProps {
  data: {
    name: string;
    value: number;
  }[];
  maxScale: number;
}

const YearlyGPAChart = ({ data, maxScale }: YearlyGPAProps) => {
  return (
    <div className="h-full w-full">
      <h3 className="text-center font-medium mb-2">CGPA</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, bottom: 5, left: 100 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis 
              type="number" 
              domain={[0, maxScale]} 
              tickCount={6}
            />
            <YAxis 
              type="category" 
              dataKey="name" 
              width={100}
              tick={{ fontSize: 12 }}
            />
            <Bar 
              dataKey="value" 
              fill="#7dd364" 
              radius={[0, 4, 4, 0]}
              barSize={20}
            >
              <LabelList dataKey="value" position="right" />
            </Bar>
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default YearlyGPAChart;
