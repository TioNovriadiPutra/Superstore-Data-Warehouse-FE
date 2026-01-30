import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  type PieLabelRenderProps,
} from "recharts";
import Flex from "./Flex";
import type { DropdownType } from "../types/form.type";
import { convertNumberToCurrency } from "../utils/helper/converter";

type Props = {
  chartData: DropdownType[];
};

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: PieLabelRenderProps) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const ncx = Number(cx);
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const ncy = Number(cy);
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > ncx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

const SegmentChart = ({ chartData }: Props) => {
  return (
    <Flex className="border border-neutral-200 rounded-lg overflow-y-hidden">
      <Flex className="relative flex-row! items-center justify-between px-6 pt-6 pb-4">
        <p className="text-md font-semibold text-neutral-900">
          Segment Analytic
        </p>

        <Flex className="absolute gap-2 right-6 top-6">
          {chartData.map((item) => (
            <Flex className="flex-row! items-center gap-2.5">
              <Flex
                className="size-2 rounded-full"
                style={{ backgroundColor: item.extra as string }}
              />

              <p className="text-sm text-neutral-600">{item.label}</p>
            </Flex>
          ))}
        </Flex>
      </Flex>

      <Flex className="px-6 py-3">
        <ResponsiveContainer width="100%" height={349}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="label"
              cx="50%"
              cy="50%"
              outerRadius={120}
              labelLine={false}
              label={renderCustomizedLabel}
            >
              {chartData.map((item, index) => (
                <Cell key={`cell-${index}`} fill={item.extra as string} />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) => convertNumberToCurrency(value as number)}
            />
          </PieChart>
        </ResponsiveContainer>
      </Flex>
    </Flex>
  );
};

export default SegmentChart;
