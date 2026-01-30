import { MONTH } from "../controllers/analytic.controller";
import type {
  AnalyticSummaryDTO,
  CashflowAnalyticDTO,
  ChoiceAnalyticDTO,
  ProductAnalyticDTO,
} from "../models/analytic.model";
import { faker } from "@faker-js/faker";

export const generateAnalyticSummary = (): AnalyticSummaryDTO => {
  return {
    income: {
      value: faker.number.int({ min: 15000000, max: 30000000 }),
      mean: faker.number.float({ min: 1, max: 100, fractionDigits: 2 }),
    },
    outcome: {
      value: faker.number.int({ min: 1000000, max: 20000000 }),
      mean: faker.number.float({ min: 1, max: 100, fractionDigits: 2 }),
    },
    customers: {
      value: faker.number.int({ min: 10, max: 100 }),
      mean: faker.number.float({ min: -100, max: 100, fractionDigits: 2 }),
    },
    margins: {
      value: faker.number.int({ min: 10, max: 100 }),
      mean: faker.number.float({ min: -100, max: 100, fractionDigits: 2 }),
    },
  };
};

export const generateCashflowAnalytic = (): CashflowAnalyticDTO[] => {
  return Array.from({ length: 12 }, (_, index) => ({
    income: faker.number.int({ min: 1000000, max: 20000000 }),
    outcome: faker.number.int({ min: 0, max: 20000000 }),
    month: MONTH[index],
  }));
};

export const generateChoiceAnalytic = (): ChoiceAnalyticDTO => {
  const data = {
    rent: faker.number.int({ min: 0, max: 200 }),
    package: faker.number.int({ min: 0, max: 200 }),
    additional: faker.number.int({ min: 0, max: 200 }),
  };

  return {
    ...data,
    total: data.rent + data.package + data.additional,
  };
};

export const generateProductAnalytic = (): ProductAnalyticDTO[] => {
  return [
    {
      package_name: "West",
      value: faker.number.int({ min: 0, max: 100 }),
    },
    {
      package_name: "East",
      value: faker.number.int({ min: 0, max: 100 }),
    },
    {
      package_name: "Central",
      value: faker.number.int({ min: 0, max: 100 }),
    },
    {
      package_name: "South",
      value: faker.number.int({ min: 0, max: 100 }),
    },
  ];
};
