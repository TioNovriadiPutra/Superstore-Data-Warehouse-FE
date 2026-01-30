import {
  Area,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { CashflowAnalyticDTO } from "../models/analytic.model";
import { convertNumberToCurrency } from "../utils/helper/converter";
import { useLinearFilter } from "../stores/page.store";
import DropdownButton from "./DropdownButton";
import Flex from "./Flex";
import { queryClient } from "../utils/config/client";

type Props = {
  data: CashflowAnalyticDTO[];
};

const LinearAnalytic = ({ data }: Props) => {
  const linearFilter = useLinearFilter();

  return (
    <Flex className="h-113.25 border border-neutral-200 rounded-lg">
      <Flex className="px-6 pt-6 pb-4 flex-row! items-start justify-between">
        <p className="text-md font-semibold text-neutral-900">Sales Overview</p>

        <Flex className="flex-row! items-center gap-6">
          <Flex className="flex-row! items-center gap-2">
            <Flex className="flex-row! items-center gap-2.5">
              <Flex className="size-2 rounded-full bg-green-500" />

              <p className="text-sm text-neutral-600">Total Sales</p>
            </Flex>

            <Flex className="flex-row! items-center gap-2.5">
              <Flex className="size-2 rounded-full bg-red-500" />

              <p className="text-sm text-neutral-600">Total Profit</p>
            </Flex>
          </Flex>

          <DropdownButton
            data={[
              {
                label: "Bulanan",
                value: "monthly",
              },
              {
                label: "Tahunan",
                value: "yearly",
              },
            ]}
            value={linearFilter.data}
            onPick={(data) => {
              linearFilter.onChange(data);
              queryClient.invalidateQueries({ queryKey: ["getTrend"] });
            }}
          />
        </Flex>
      </Flex>

      <Flex className="px-6 pt-8 pb-2">
        <ResponsiveContainer width="100%" height={349}>
          <ComposedChart data={data}>
            <defs>
              <linearGradient id="areaGradient1" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="rgba(220, 252, 231, 0.2)" />
                <stop offset="100%" stopColor="rgba(74, 222, 128, 0.2)" />
              </linearGradient>

              <linearGradient id="areaGradient2" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="rgba(248, 113, 113, 0.2)" />
                <stop offset="100%" stopColor="rgba(254, 226, 226, 0.2)" />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="6 6" vertical={false} />
            <XAxis
              dataKey="period"
              tick={{ className: "text-xs fill-neutral-500" }}
              stroke="#e5e5e5"
            />
            <YAxis
              tickFormatter={(value) => convertNumberToCurrency(value)}
              tick={{ className: "text-xs fill-neutral-500" }}
              stroke="#e5e5e5"
              width="auto"
            />
            <Tooltip
              formatter={(value) => convertNumberToCurrency(value as number)}
            />
            <Area
              type="monotone"
              dataKey="total_sales"
              stroke="#22C55E"
              fill="url(#areaGradient1)"
              name="Total Sales"
            />
            <Area
              type="monotone"
              dataKey="total_profit"
              stroke="#EF4444"
              fill="url(#areaGradient2)"
              name="Total Profit"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </Flex>
    </Flex>
  );
};

export default LinearAnalytic;
