import type { FunctionComponent } from "react";
import type {
  CashflowAnalyticDTO,
  ProductAnalyticDTO,
  ProductPerformanceDTO,
  ProfitAnalyticDTO,
} from "../models/analytic.model";
import type { DropdownType } from "./form.type";

export type ResType<T> = {
  data: T;
};

export type DashboardSummaryType = {
  title: string;
  value: number;
  mean: number;
  type: "currency" | "number";
  icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  color: string;
  text: string;
};

export type ChoiceChartType = {
  chart: DropdownType[];
  total: number;
};

export type DashboardType = {
  summaries: DashboardSummaryType[];
  cashflows: CashflowAnalyticDTO[];
  choices: ChoiceChartType;
  products: ProductAnalyticDTO[];
};

export type DetailType = {
  profits: ProfitAnalyticDTO[];
  subCategories: DropdownType[];
  segments: DropdownType[];
  performances: ProductPerformanceDTO[];
};
