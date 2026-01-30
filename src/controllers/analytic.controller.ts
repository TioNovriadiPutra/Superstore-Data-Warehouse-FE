import {
  IconMapDollar,
  IconReportMoney,
  IconShoppingCart,
  IconWallet,
} from "@tabler/icons-react";
import type { DashboardType, DetailType } from "../types/page.type";
import useAnalyticModel from "../models/analytic.model";

export const MONTH = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

export const DAY = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

export const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

const useAnalyticController = () => {
  const { useGetAnalytics, useGetAnalyticDetail } = useAnalyticModel();

  const useGetAnalyticsService = () => {
    const responses = useGetAnalytics();

    const isLoading = responses.some((response) => response.isLoading);
    const isRefetching = responses.some((response) => response.isRefetching);

    let finalData: DashboardType = {
      summaries: [
        {
          title: "Total Sales",
          value: 0,
          mean: 0,
          type: "currency",
          icon: IconWallet,
          color: "bg-green-100",
          text: "text-green-400",
        },
        {
          title: "Total Profit",
          value: 0,
          mean: 0,
          type: "currency",
          icon: IconReportMoney,
          color: "bg-red-100",
          text: "text-red-400",
        },
        {
          title: "Total Quantity Sold",
          value: 0,
          mean: 0,
          type: "number",
          icon: IconShoppingCart,
          color: "bg-blue-100",
          text: "text-blue-400",
        },
        {
          title: "Profit Margin (%)",
          value: 0,
          mean: 0,
          type: "number",
          icon: IconMapDollar,
          color: "bg-yellow-100",
          text: "text-yellow-400",
        },
      ],
      cashflows: [],
      choices: {
        chart: [
          {
            label: "Office Supp",
            value: 0,
          },
          {
            label: "Technology",
            value: 0,
          },
          {
            label: "Furniture",
            value: 0,
          },
        ],
        total: 0,
      },
      products: [
        {
          region: "West",
          total_sales: 0,
        },
        {
          region: "East",
          total_sales: 0,
        },
        {
          region: "Central",
          total_sales: 0,
        },
        {
          region: "South",
          total_sales: 0,
        },
      ],
    };

    if (!isLoading) {
      finalData = {
        summaries: [
          {
            ...finalData.summaries[0],
            value: responses[0].data?.data.sales.value ?? 0,
            mean: responses[0].data?.data.sales.percent_from_last ?? 0,
          },
          {
            ...finalData.summaries[1],
            value: responses[0].data?.data.profit.value ?? 0,
            mean: responses[0].data?.data.profit.percent_from_last ?? 0,
          },
          {
            ...finalData.summaries[2],
            value: responses[0].data?.data.quantity.value ?? 0,
            mean: responses[0].data?.data.quantity.percent_from_last ?? 0,
          },
          {
            ...finalData.summaries[3],
            value: responses[0].data?.data.profit_margin.value ?? 0,
            mean: responses[0].data?.data.profit_margin.percent_from_last ?? 0,
          },
        ],
        cashflows: responses[1].data?.data ?? [],
        choices: {
          chart: [
            {
              ...finalData.choices.chart[0],
              value: responses[2].data
                ? responses[2].data.data[2].total_sales
                : 0,
            },
            {
              ...finalData.choices.chart[1],
              value: responses[2].data
                ? responses[2].data.data[0].total_sales
                : 0,
            },
            {
              ...finalData.choices.chart[2],
              value: responses[2].data
                ? responses[2].data.data[1].total_sales
                : 0,
            },
          ],
          total: responses[2].data
            ? responses[2].data.data.reduce(
                (acc, curr) => acc + curr.total_sales,
                0,
              )
            : 0,
        },
        products: responses[3].data?.data ?? [],
      };
    }

    return {
      finalData,
      isLoading,
      isRefetching,
    };
  };

  const useGetAnalyticDetailService = () => {
    const responses = useGetAnalyticDetail();

    const isLoading = responses.some((response) => response.isLoading);
    const isRefetching = responses.some((response) => response.isRefetching);

    let finalData: DetailType = {
      profits: [],
      subCategories: [],
      segments: [],
      performances: [],
    };

    if (!isLoading) {
      finalData = {
        profits: responses[0].data?.data ?? [],
        subCategories: responses[1].data
          ? responses[1].data.data.map((item) => ({
              label: item.sub_category,
              value: item.total_sales,
            }))
          : [],
        segments: responses[2].data
          ? responses[2].data.data.map((item, index) => ({
              label: item.segment,
              value: item.total_sales,
              extra: COLORS[index],
            }))
          : [],
        performances: responses[3].data?.data ?? [],
      };
    }

    return {
      finalData,
      isLoading,
      isRefetching,
    };
  };

  return {
    useGetAnalyticsService,
    useGetAnalyticDetailService,
  };
};

export default useAnalyticController;
