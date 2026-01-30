import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Flex from "./Flex";
import type { ProfitAnalyticDTO } from "../models/analytic.model";

type Props = {
  chartData: ProfitAnalyticDTO[];
};

const ScatterChartBox = ({ chartData }: Props) => {
  return (
    <Flex className="border border-neutral-200 rounded-lg overflow-y-hidden">
      <Flex className="px-6 pt-6 pb-4">
        <p className="text-md font-semibold text-neutral-900">
          Sales vs Profit
        </p>
      </Flex>

      <Flex className="px-6 py-3">
        <ResponsiveContainer width="100%" height={349}>
          <ScatterChart>
            <CartesianGrid strokeDasharray="6 6" vertical={false} />

            <XAxis
              type="number"
              dataKey="sales"
              name="Sales"
              tickFormatter={(value) => value.toLocaleString()}
              tick={{ className: "text-xs fill-neutral-500" }}
              stroke="#e5e5e5"
            />

            <YAxis
              type="number"
              dataKey="profit"
              name="Profit"
              width="auto"
              tickFormatter={(value) => value.toLocaleString()}
              tick={{ className: "text-xs fill-neutral-500" }}
              stroke="#e5e5e5"
            />

            <Tooltip
              content={({ payload }) => {
                if (!payload || payload.length === 0) return null;
                const item = payload[0].payload;
                return (
                  <div className="bg-white border rounded shadow p-3">
                    <p className="font-semibold">{item.product_name}</p>
                    <p>Sales: {item.sales.toLocaleString()}</p>
                    <p
                      className={`${
                        item.profit < 0 ? "text-red-500" : "text-green-600"
                      }`}
                    >
                      Profit: {item.profit.toLocaleString()}
                    </p>
                  </div>
                );
              }}
            />

            <Scatter data={chartData} fill="#3b82f6" />
          </ScatterChart>
        </ResponsiveContainer>
      </Flex>
    </Flex>
  );
};

export default ScatterChartBox;
