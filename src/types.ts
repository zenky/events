export enum ZenkyEvent {
  CustomerAuthenticated = 'customer.authenticated',
  CustomerLoaded = 'customer.loaded',
  CustomerLoggedOut = 'customer.logout',
  OrderCreated = 'order.created',
  OrderLoaded = 'order.loaded',
  OrderSubmitted = 'order.submitted',
  OrderPriceRecalculated = 'order.price.recalculated',
  OrderShouldBeReloaded = 'order.should_be_reloaded',
  OrderPromotionRewardsShouldBeReloaded = 'order.promotions.rewards.should_be_reloaded',
  DisplayOrderPromotionRewardSelection = 'order.promotions.rewards.selection.display',
  OrderPromotionsNotFound = 'order.promotions.not_found',
  ProductQuantityIncreased = 'product.quantity.increased',
  ProductQuantityDecreased = 'product.quantity.decreased',
  PromotionsCheckerStarted = 'order.promotions.checker.started',
  PromotionsCheckerCompleted = 'order.promotions.checker.completed',
}
