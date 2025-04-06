// Function to calculate price and discounted price
export const calculatePrice = (price, discountPercentage) => {
  if (!discountPercentage) return price;
  const discountedPrice = price - (price * discountPercentage) / 100;
  return {
    original: price,
    discounted: discountedPrice.toFixed(2),
  };
};
