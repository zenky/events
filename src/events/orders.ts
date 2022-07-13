import { getEmitter, useEvent } from '../emitter/index.js';
import { ZenkyEvent } from '../types.js';

export const useOrderCreated = () => useEvent(getEmitter(), ZenkyEvent.OrderCreated);
export const useOrderLoaded = () => useEvent(getEmitter(), ZenkyEvent.OrderLoaded);
export const useOrderSubmitted = () => useEvent(getEmitter(), ZenkyEvent.OrderSubmitted);
export const useOrderPriceRecalculated = () => useEvent(getEmitter(), ZenkyEvent.OrderPriceRecalculated);
export const useOrderShouldBeReloaded = () => useEvent(getEmitter(), ZenkyEvent.OrderShouldBeReloaded);
export const useOrderPromotionRewardsShouldBeReloaded = () => useEvent(getEmitter(), ZenkyEvent.OrderPromotionRewardsShouldBeReloaded);
export const useDisplayOrderPromotionRewardSelection = () => useEvent(getEmitter(), ZenkyEvent.DisplayOrderPromotionRewardSelection);
export const useOrderPromotionsNotFound = () => useEvent(getEmitter(), ZenkyEvent.OrderPromotionsNotFound);
export const usePromotionsCheckerStarted = () => useEvent(getEmitter(), ZenkyEvent.PromotionsCheckerStarted);
export const usePromotionsCheckerCompleted = () => useEvent(getEmitter(), ZenkyEvent.PromotionsCheckerCompleted);
