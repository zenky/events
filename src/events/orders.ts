import { getEmitter, useEvent } from '../emitter/index.js';
import { ZenkyEvent } from '../types.js';

export const useOrderCreated = () => useEvent(getEmitter(), ZenkyEvent.OrderCreated);
export const useOrderLoaded = () => useEvent(getEmitter(), ZenkyEvent.OrderLoaded);
export const useOrderSubmitted = () => useEvent(getEmitter(), ZenkyEvent.OrderSubmitted);
