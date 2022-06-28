import { getEmitter, useEvent } from '../emitter/index.js';
import { ZenkyEvent } from '../types.js';

export const useProductQuantityIncreased = () => useEvent(getEmitter(), ZenkyEvent.ProductQuantityIncreased);
export const useProductQuantityDecreased = () => useEvent(getEmitter(), ZenkyEvent.ProductQuantityDecreased);
