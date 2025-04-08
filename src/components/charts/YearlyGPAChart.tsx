
import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, LabelList, Tooltip } from 'recharts';
import { gpaChartConfig } from '@/utils/chartConfig';

interface YearlyGPAProps {
  data: {
    name: string;
    value: number;
  }[];
  maxScale: number;
}

const YearlyGPAChart = ({ data, maxScale }: YearlyGPAProps) => {
  const { margins, barStyle, axisConfig, labelConfig } = gpaChartConfig;

  return (
    <div className="h-full w-full">
      <h3 className="text-center font-medium mb-2">Year-by-Year GPA</h3>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={data}
            layout="vertical"
            margin={margins.yearlyGPA}
            barCategoryGap={10} // Add space between bars
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis 
              type="number" 
              domain={[0, maxScale]} 
              tickCount={axisConfig.yearlyGPA.x.tickCount}
            />
            <YAxis 
              type="category" 
              dataKey="name" 
              width={axisConfig.yearlyGPA.y.width}
              tick={{ fontSize: axisConfig.yearlyGPA.y.fontSize }}
            />
            <Tooltip 
              formatter={(value: number) => [value.toFixed(2), "GPA"]}
              labelFormatter={(name) => `${name}`}
            />
            <Bar 
              dataKey="value" 
              fill={barStyle.yearlyGPA.fill} 
              radius={barStyle.yearlyGPA.radius}
              barSize={barStyle.yearlyGPA.barSize}
            >
              <LabelList 
                dataKey="value" 
                position={labelConfig.position}
                formatter={labelConfig.formatter} 
                style={labelConfig.style}
              />
            </Bar>
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default YearlyGPAChart;
