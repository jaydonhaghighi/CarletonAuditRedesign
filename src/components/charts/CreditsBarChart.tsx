
import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Legend, LabelList } from 'recharts';

interface CreditsBarChartProps {
  data: {
    name: string;
    completed: number;
    inProgress: number;
    unfulfilled: number;
  }[];
  maxScale: number;
}

const CreditsBarChart = ({ data, maxScale }: CreditsBarChartProps) => {
  return (
    <div className="h-full w-full">
      <h3 className="text-center font-medium mb-2">Credits</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, bottom: 5, left: 100 }}
            stackOffset="expand"
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis 
              type="number" 
              domain={[0, maxScale]}
              tickCount={7}
            />
            <YAxis 
              type="category" 
              dataKey="name" 
              width={100}
              tick={{ fontSize: 12 }}
            />
            <Bar 
              dataKey="completed" 
              stackId="a"
              fill="#7dd364" 
              radius={[0, 0, 0, 0]}
              barSize={20}
            >
              <LabelList dataKey="completed" position="center" fill="#000" style={{ fontSize: '11px' }} />
            </Bar>
            <Bar 
              dataKey="inProgress" 
              stackId="a"
              fill="#7c9fdb" 
              radius={[0, 0, 0, 0]}
              barSize={20}
            >
              <LabelList dataKey="inProgress" position="center" fill="#000" style={{ fontSize: '11px' }} />
            </Bar>
            <Bar 
              dataKey="unfulfilled" 
              stackId="a"
              fill="#ff6b6b" 
              radius={[0, 0, 0, 0]}
              barSize={20}
            >
              <LabelList dataKey="unfulfilled" position="center" fill="#000" style={{ fontSize: '11px' }} />
            </Bar>
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CreditsBarChart;
