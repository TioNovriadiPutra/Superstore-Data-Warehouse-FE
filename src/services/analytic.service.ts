import { getMonth, getYear } from "date-fns";
import type {
  AnalyticSummaryDTO,
  CashflowAnalyticDTO,
  ChoiceAnalyticDTO,
  ProductAnalyticDTO,
  ProductPerformanceDTO,
  ProfitAnalyticDTO,
  SegmentAnalyticDTO,
  SubCategotyAnalyticDTO,
} from "../models/analytic.model";
import type { DropdownType } from "../types/form.type";
import type { ResType } from "../types/page.type";
import { API_ENDPOINT } from "../utils/config/api";
import { axiosInstance } from "../utils/config/axios";

export const getKPI = async (
  filter: DropdownType,
): Promise<ResType<AnalyticSummaryDTO>> => {
  try {
    const now = new Date();

    const response = await axiosInstance.get(
      `${API_ENDPOINT.getKPI}?mode=${filter.value}&year=${getYear(now)}&month=${getMonth(now) + 1}`,
    );

    return response.data as ResType<AnalyticSummaryDTO>;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getTrend = async (
  filter: DropdownType,
): Promise<ResType<CashflowAnalyticDTO[]>> => {
  try {
    const response = await axiosInstance.get(
      `${API_ENDPOINT.getTrend}?mode=${filter.value}&year=2025`,
    );

    return response.data as ResType<CashflowAnalyticDTO[]>;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getSalesByCategory = async (): Promise<
  ResType<ChoiceAnalyticDTO[]>
> => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT.getSalesByCategory);

    return response.data as ResType<ChoiceAnalyticDTO[]>;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getSalesByRegion = async (): Promise<
  ResType<ProductAnalyticDTO[]>
> => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT.getSalesByRegion);

    return response.data as ResType<ProductAnalyticDTO[]>;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getProfit = async (): Promise<ResType<ProfitAnalyticDTO[]>> => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT.getProfit);

    return response.data as ResType<ProfitAnalyticDTO[]>;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getSalesSubCategory = async (): Promise<
  ResType<SubCategotyAnalyticDTO[]>
> => {
  try {
    const response = await axiosInstance.get(
      API_ENDPOINT.getSalesBySubCategory,
    );

    return response.data as ResType<SubCategotyAnalyticDTO[]>;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getSalesBySegment = async (): Promise<
  ResType<SegmentAnalyticDTO[]>
> => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT.getSalesBySegment);

    return response.data as ResType<SegmentAnalyticDTO[]>;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getProductPerformance = async (): Promise<
  ResType<ProductPerformanceDTO[]>
> => {
  try {
    const response = await axiosInstance.get(
      API_ENDPOINT.getProductPerformance,
    );

    return response.data as ResType<ProductPerformanceDTO[]>;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
