const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export const formatCurrency = (number: number) =>
  CURRENCY_FORMATTER.format(number);
