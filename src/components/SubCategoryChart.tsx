import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Flex from "./Flex";
import type { DropdownType } from "../types/form.type";
import { convertNumberToCurrency } from "../utils/helper/converter";

type Props = {
  chartData: DropdownType[];
};

const SubCategoryChart = ({ chartData }: Props) => {
  return (
    <Flex className="border border-neutral-200 rounded-lg overflow-y-hidden">
      <Flex className="px-6 pt-6 pb-4">
        <p className="text-md font-semibold text-neutral-900">
          Sub-Category Sales
        </p>
      </Flex>

      <Flex className="px-6 py-3">
        <ResponsiveContainer width="100%" height={349}>
          <BarChart data={chartData} layout="vertical">
            <CartesianGrid strokeDasharray="6 6" vertical={false} />

            <XAxis
              type="number"
              tickFormatter={(v) => v.toLocaleString()}
              tick={{ className: "text-xs fill-neutral-500" }}
              stroke="#e5e5e5"
            />

            <YAxis
              dataKey="label"
              type="category"
              width="auto"
              tick={{ className: "text-xs fill-neutral-500" }}
              stroke="#e5e5e5"
            />

            <Tooltip
              formatter={(value) => convertNumberToCurrency(value as number)}
            />

            <Bar
              dataKey="value"
              name="Total Sales"
              fill="#6366f1"
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Flex>
    </Flex>
  );
};

export default SubCategoryChart;
