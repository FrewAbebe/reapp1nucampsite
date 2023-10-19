import { PROMOTIONS } from "../../app/shared/PROMOTIONS";

// selector function
export const selectFeaturedPromotion = () => {
  return PROMOTIONS.find((promotion) => promotion.featured);
};
