import { useQueries } from "@tanstack/react-query";
import {
  getKPI,
  getProductPerformance,
  getProfit,
  getSalesByCategory,
  getSalesByRegion,
  getSalesBySegment,
  getSalesSubCategory,
  getTrend,
} from "../services/analytic.service";
import { useLinearFilter } from "../stores/page.store";

export interface SummaryDetailDTO {
  value: number;
  percent_from_last: number;
}

export interface AnalyticSummaryDTO {
  sales: SummaryDetailDTO;
  profit: SummaryDetailDTO;
  quantity: SummaryDetailDTO;
  profit_margin: SummaryDetailDTO;
}

export interface CashflowAnalyticDTO {
  period: string;
  total_sales: number;
  total_profit: number;
  total_quantity: number;
  profit_margin: number;
}

export interface ChoiceAnalyticDTO {
  category: string;
  total_sales: number;
}

export interface ProductAnalyticDTO {
  region: string;
  total_sales: number;
}

export interface ProfitAnalyticDTO {
  product_name: string;
  sales: number;
  profit: number;
}

export interface SubCategotyAnalyticDTO {
  sub_category: string;
  total_sales: number;
  total_profit: number;
}

export interface SegmentAnalyticDTO {
  segment: string;
  total_sales: number;
  total_profit: number;
}

export interface ProductPerformanceDTO {
  product_name: string;
  total_sales: number;
  total_profit: number;
  total_quantity: number;
}

const useAnalyticModel = () => {
  const filter = useLinearFilter((state) => state.data);

  const useGetAnalytics = () =>
    useQueries({
      queries: [
        {
          queryKey: ["getKPI"],
          queryFn: () => getKPI(),
        },
        {
          queryKey: ["getTrend", filter],
          queryFn: () => getTrend(filter),
        },
        {
          queryKey: ["getSalesByCategory"],
          queryFn: () => getSalesByCategory(),
        },
        {
          queryKey: ["getSalesByRegion"],
          queryFn: () => getSalesByRegion(),
        },
      ],
    });

  const useGetAnalyticDetail = () =>
    useQueries({
      queries: [
        {
          queryKey: ["getProfit"],
          queryFn: () => getProfit(),
        },
        {
          queryKey: ["getSalesBySubCategory"],
          queryFn: () => getSalesSubCategory(),
        },
        {
          queryKey: ["getSalesBySegment"],
          queryFn: () => getSalesBySegment(),
        },
        {
          queryKey: ["getProductPerformance"],
          queryFn: () => getProductPerformance(),
        },
      ],
    });

  return {
    useGetAnalytics,
    useGetAnalyticDetail,
  };
};

export default useAnalyticModel;
