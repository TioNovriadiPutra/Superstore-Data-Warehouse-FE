import { animate, useMotionValue, useTransform, motion } from "motion/react";
import { useEffect } from "react";
import { convertNumberToCurrency } from "../utils/helper/converter";
import type { DashboardSummaryType } from "../types/page.type";
import Flex from "./Flex";

type Props = {
  data: DashboardSummaryType;
};

const CardAnalytic = ({ data }: Props) => {
  const Icon = data.icon;

  const count = useMotionValue(0);
  const countMean = useMotionValue(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));

  const formatted = useTransform(rounded, (value) => {
    if (data.type === "currency") return convertNumberToCurrency(value);

    return value.toString();
  });

  const formattedMean = useTransform(
    countMean,
    (latest) =>
      `${data.mean >= 0 ? "+" : ""}${latest.toLocaleString("id-ID", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}%`,
  );

  useEffect(() => {
    const controls = animate(count, data.value, {
      duration: 1,
      ease: "easeOut",
    });

    return controls.stop;
  }, [data.value]);

  useEffect(() => {
    const controls = animate(countMean, data.mean, {
      duration: 1,
      ease: "easeOut",
    });

    return controls.stop;
  }, [data.mean]);

  return (
    <Flex className="flex-row! items-center p-6 border border-neutral-200 rounded-lg gap-6">
      <Flex
        className={`size-14 items-center justify-center rounded-lg ${data.color} ${data.text}`}
      >
        <Icon width={32} height={32} />
      </Flex>

      <Flex>
        <p className="text-sm font-medium text-neutral-500 mb-2">
          {data.title}
        </p>

        <motion.p className="text-lg font-semibold text-neutral-900 mb-1.5">
          {formatted}
        </motion.p>

        <p className="text-xs text-neutral-500">
          <motion.span
            className={`font-semibold ${
              data.mean >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {formattedMean}
          </motion.span>{" "}
          from last month
        </p>
      </Flex>
    </Flex>
  );
};

export default CardAnalytic;
