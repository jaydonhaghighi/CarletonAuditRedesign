import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ResponsiveContainer, 
  CartesianGrid, 
  Tooltip,
  LabelList
} from 'recharts';

interface YearlyGPAProps {
  data: {
    name: string;
    value: number;
  }[];
  maxScale: number;
}

const YearlyGPAChart = ({ data, maxScale }: YearlyGPAProps) => {
  // Log the data to verify it's being passed correctly
  console.log('YearlyGPAChart data:', data);
  
  return (
    <div className="h-full w-full">
      <h3 className="text-center font-medium mb-4">Year-by-Year CGPA</h3>
      <div className="h-[400px] w-full">
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
              interval={0}
              angle={-45}
              textAnchor="end"
              height={60}
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
              barSize={40}
            >
              <LabelList 
                dataKey="value" 
                position="top"
                formatter={(value: number) => value.toFixed(2)}
                style={{ 
                  fontSize: '12px',
                  fill: '#374151'
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default YearlyGPAChart; 