import { getEmitter, useEvent } from '../emitter/index.js';
import { ZenkyEvent } from '../types.js';

export const useCustomerAuthenticated = () => useEvent(getEmitter(), ZenkyEvent.CustomerAuthenticated);
export const useCustomerLoaded = () => useEvent(getEmitter(), ZenkyEvent.CustomerLoaded);
export const useCustomerLoggedOut = () => useEvent(getEmitter(), ZenkyEvent.CustomerLoggedOut);
