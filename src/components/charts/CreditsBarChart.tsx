
import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

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
      <h3 className="text-center font-medium mb-2">Credits by Category</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 30, bottom: 20, left: 100 }}
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
            <Legend 
              layout="horizontal" 
              verticalAlign="top" 
              align="center"
              wrapperStyle={{ paddingBottom: 10 }}
            />
            <Bar 
              dataKey="completed" 
              stackId="a"
              name="Completed"
              fill="#7dd364" 
              radius={[0, 0, 0, 0]}
              barSize={20}
            />
            <Bar 
              dataKey="inProgress" 
              stackId="a"
              name="In Progress"
              fill="#7c9fdb" 
              radius={[0, 0, 0, 0]}
              barSize={20}
            />
            <Bar 
              dataKey="unfulfilled" 
              stackId="a"
              name="Unfulfilled"
              fill="#ff6b6b" 
              radius={[0, 0, 0, 0]}
              barSize={20}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CreditsBarChart;
