
import React from 'react';
import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ResponsiveContainer, 
  CartesianGrid, 
  Legend, 
  Tooltip,
  TooltipProps
} from 'recharts';
import { 
  Tooltip as ShadcnTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";
import { creditsChartConfig, chartColors } from '@/utils/chartConfig';

interface CreditsBarChartProps {
  data: {
    name: string;
    completed: number;
    inProgress: number;
    unfulfilled: number;
  }[];
  maxScale: number;
}

// Custom tooltip component for the chart
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const completed = payload.find(p => p.dataKey === 'completed')?.value || 0;
    const inProgress = payload.find(p => p.dataKey === 'inProgress')?.value || 0;
    const unfulfilled = payload.find(p => p.dataKey === 'unfulfilled')?.value || 0;
    const total = completed + inProgress + unfulfilled;

    return (
      <div className="bg-white p-3 rounded-md shadow-md border border-gray-200">
        <p className="font-medium text-gray-900">{label}</p>
        <div className="grid gap-1 mt-2">
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#7dd364] mr-2"></span>
              <span className="text-sm">Completed:</span>
            </span>
            <span className="text-sm font-medium">{completed} credits</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#7c9fdb] mr-2"></span>
              <span className="text-sm">In Progress:</span>
            </span>
            <span className="text-sm font-medium">{inProgress} credits</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#ff6b6b] mr-2"></span>
              <span className="text-sm">Unfulfilled:</span>
            </span>
            <span className="text-sm font-medium">{unfulfilled} credits</span>
          </div>
          <div className="border-t border-gray-200 mt-1 pt-1">
            <div className="flex items-center justify-between font-medium">
              <span className="text-sm">Total:</span>
              <span className="text-sm">{total} credits</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

const CreditsBarChart = ({ data, maxScale }: CreditsBarChartProps) => {
  const { margins, barStyle, axisConfig, legendConfig } = creditsChartConfig;
  const { completed, inProgress, unfulfilled } = chartColors;

  return (
    <div className="h-full w-full">
      <h3 className="text-center font-medium mb-2">Credits by Category</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={data}
            layout="vertical"
            margin={margins}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis 
              type="number" 
              domain={[0, maxScale]}
              tickCount={axisConfig.x.tickCount}
            />
            <YAxis 
              type="category" 
              dataKey="name" 
              width={axisConfig.y.width}
              tick={{ fontSize: axisConfig.y.fontSize }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              layout={legendConfig.layout}
              verticalAlign={legendConfig.verticalAlign}
              align={legendConfig.align}
              wrapperStyle={legendConfig.wrapperStyle}
            />
            <Bar 
              dataKey="completed" 
              stackId="a"
              name="Completed"
              fill={completed}
              radius={barStyle.radius}
              barSize={barStyle.barSize}
            />
            <Bar 
              dataKey="inProgress" 
              stackId="a"
              name="In Progress"
              fill={inProgress}
              radius={barStyle.radius}
              barSize={barStyle.barSize}
            />
            <Bar 
              dataKey="unfulfilled" 
              stackId="a"
              name="Unfulfilled"
              fill={unfulfilled}
              radius={barStyle.radius}
              barSize={barStyle.barSize}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CreditsBarChart;
