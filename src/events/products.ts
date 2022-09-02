import { getEmitter, useEvent } from '../emitter/index.js';
import { ZenkyEvent } from '../types.js';

export const useProductQuantityIncreased = () => useEvent(getEmitter(), ZenkyEvent.ProductQuantityIncreased);
export const useProductQuantityIncreaseFailed = () => useEvent(getEmitter(), ZenkyEvent.ProductQuantityIncreaseFailed);
export const useProductQuantityDecreased = () => useEvent(getEmitter(), ZenkyEvent.ProductQuantityDecreased);
export const useProductQuantityDecreaseFailed = () => useEvent(getEmitter(), ZenkyEvent.ProductQuantityDecreaseFailed);
