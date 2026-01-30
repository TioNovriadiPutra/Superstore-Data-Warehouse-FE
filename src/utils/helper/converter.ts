export const convertNumberToCurrency = (value: number): string => {
  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return formatter.format(value);
};
