import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import type { ChoiceChartType } from "../types/page.type";
import Flex from "./Flex";
import { convertNumberToCurrency } from "../utils/helper/converter";

type Props = {
  data: ChoiceChartType;
};

const ChoiceAnalytic = ({ data }: Props) => {
  return (
    <Flex className="border border-neutral-200 rounded-lg overflow-y-hidden">
      <Flex className="px-6 pt-6 pb-4">
        <p className="text-md font-semibold text-neutral-900">Category Sales</p>
      </Flex>

      <Flex className="flex-1 items-center pt-[85.25px]">
        <Flex className="relative size-90">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.chart}
                dataKey="value"
                startAngle={180}
                endAngle={0}
                innerRadius="80%"
                outerRadius="100%"
                cornerRadius={8}
                paddingAngle={1}
              >
                <Cell className="fill-red-400" />
                <Cell className="fill-blue-400" />
                <Cell className="fill-green-400" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <Flex className="absolute items-center gap-1 top-[125.25px] left-1/2 -translate-x-1/2">
            <h2 className="text-neutral-800">
              {convertNumberToCurrency(data.total)}
            </h2>

            <p className="text-sm text-neutral-500">Total Sales</p>
          </Flex>

          <Flex className="absolute top-54.25 -left-4 -right-4 flex-row! justify-between">
            <Flex className="items-center gap-2.5">
              <p className="text-sm font-bold text-red-400">
                {convertNumberToCurrency(data.chart[0].value as number)}
              </p>

              <p className="text-sm text-neutral-500">{data.chart[0].label}</p>
            </Flex>

            <Flex className="items-center gap-2.5">
              <p className="text-sm font-bold text-blue-400">
                {convertNumberToCurrency(data.chart[1].value as number)}
              </p>

              <p className="text-sm text-neutral-500">{data.chart[1].label}</p>
            </Flex>

            <Flex className="items-center gap-2.5">
              <p className="text-sm font-bold text-green-400">
                {convertNumberToCurrency(data.chart[2].value as number)}
              </p>

              <p className="text-sm text-neutral-500">{data.chart[2].label}</p>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ChoiceAnalytic;
