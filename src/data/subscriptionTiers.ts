export const subscriptionTiers = {
  Free: {
    name: "Free",
    priceInCents: 0,
    maxNumberOfDailyInsights: 3,
    canCustomizeBanner: false,
  },
  Pro: {
    name: "Pro",
    priceInCents: 100,
    maxNumberOfDailyInsights: 10,
    canCustomizeBanner: true,
  },
} as const;

export const subscriptionTiersInOrder = [
  subscriptionTiers.Free,
  subscriptionTiers.Pro,
] as const;
