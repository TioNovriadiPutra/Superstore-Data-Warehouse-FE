import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ProductAnalyticDTO } from "../models/analytic.model";
import Flex from "./Flex";
import { convertNumberToCurrency } from "../utils/helper/converter";

type Props = {
  data: ProductAnalyticDTO[];
};

const ProductAnalytic = ({ data }: Props) => {
  return (
    <Flex className="border border-neutral-200 rounded-lg overflow-hidden h-114.5">
      <Flex className="px-6 pt-6 pb-4">
        <p className="text-md font-semibold text-neutral-900">Region Sales</p>
      </Flex>

      <Flex className="flex-1 px-6 pt-6 pb-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="6 6" vertical={false} />
            <XAxis
              dataKey="region"
              tick={{ className: "text-xs fill-neutral-500" }}
              stroke="#e5e5e5"
            />
            <YAxis
              tick={{ className: "text-xs fill-neutral-500" }}
              stroke="#e5e5e5"
              tickFormatter={(value) => convertNumberToCurrency(value)}
              width="auto"
            />
            <Tooltip cursor={false} />
            <Bar
              dataKey="total_sales"
              name="Total Sales"
              fill="#4ADE80"
              background={{ radius: 8 }}
              barSize={22}
              radius={[8, 8, 8, 8]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Flex>
    </Flex>
  );
};

export default ProductAnalytic;
