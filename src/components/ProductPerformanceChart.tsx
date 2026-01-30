import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ProductPerformanceDTO } from "../models/analytic.model";
import Flex from "./Flex";
import { convertNumberToCurrency } from "../utils/helper/converter";

type Props = {
  chartData: ProductPerformanceDTO[];
};

const ProductPerformanceChart = ({ chartData }: Props) => {
  return (
    <Flex className="border border-neutral-200 rounded-lg overflow-y-hidden">
      <Flex className="px-6 pt-6 pb-4">
        <p className="text-md font-semibold text-neutral-900">
          Product Performance
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
              type="category"
              dataKey="product_name"
              width="auto"
              tick={{ className: "text-xs fill-neutral-500" }}
              stroke="#e5e5e5"
            />

            <Tooltip
              formatter={(value) => convertNumberToCurrency(value as number)}
              content={({ payload }) => {
                if (!payload || payload.length === 0) return null;
                const item = payload[0].payload;

                return (
                  <div className="bg-white border p-3 rounded shadow">
                    <p className="font-semibold">{item.product_name}</p>
                    <p>Sales: {item.total_sales.toLocaleString()}</p>
                    <p
                      className={`${
                        item.total_profit < 0
                          ? "text-red-500"
                          : "text-green-600"
                      }`}
                    >
                      Profit: {item.total_profit.toLocaleString()}
                    </p>
                    <p>Quantity: {item.total_quantity.toLocaleString()}</p>
                  </div>
                );
              }}
            />

            <Bar dataKey="total_sales" fill="#2563eb" radius={[4, 4, 4, 4]} />
          </BarChart>
        </ResponsiveContainer>
      </Flex>
    </Flex>
  );
};

export default ProductPerformanceChart;
