import mitt, { Handler } from 'mitt';
import { ZenkyEvent } from '../types.js';

export interface ZenkyEventEmitter {
  on(event: string, handlerId: string, handler: Function): void;
  off(event: string, handlerId: string, handler: Function): void;
  once(event: string, handlerId: string, realHandler: Function): void;
  emit(event: string, data: any): void;
}

export interface ZenkyEventDispatcher {
  subscribe: (id: string, handler: Function) => void;
  publish: (data?: any) => void;
}

const getWrapper = (handlersProvider: Function): ZenkyEventEmitter => {
  const emitter = mitt<Record<ZenkyEvent, any>>();
  const handlers = handlersProvider();

  return {
    on(event: ZenkyEvent, handlerId: string, handler: Handler<any>) {
      handlers[event] = handlers[event] || [];

      if (handlers[event].indexOf(handlerId) === -1) {
        handlers[event].push(handlerId);
        emitter.on(event, handler);
      }
    },

    off(event: ZenkyEvent, handlerId: string, handler: Handler<any>) {
      handlers[event] = handlers[event] || [];
      const index = handlers[event].indexOf(handlerId);

      if (index !== -1) {
        delete handlers[event][index];
      }

      emitter.off(event, handler);
    },

    once(event: ZenkyEvent, handlerId: string, realHandler: Function) {
      const handler = (...args: any[]) => {
        this.off(event, handlerId, handler);
        realHandler(...args);
      };

      this.on(event, handlerId, handler);
    },

    emit(event: ZenkyEvent, data: any = undefined) {
      emitter.emit(event, data);
    },
  };
};

export const getEmitter = (): ZenkyEventEmitter => {
  if (typeof (<any> window).__zenkyEvents === 'object') {
    return (<any> window).__zenkyEvents.wrapper;
  }

  (<any> window).__zenkyEvents = {
    id: `zenky.events.${Math.random().toString().replace('.', '')}`,
    handlers: {},
  };

  (<any> window).__zenkyEvents.wrapper = getWrapper(() => (<any> window).__zenkyEvents.handlers);

  return (<any> window).__zenkyEvents.wrapper;
};

export const useEvent = (emitter: ZenkyEventEmitter, event: ZenkyEvent): ZenkyEventDispatcher => ({
  subscribe: (id: string, handler: Function) => emitter.on(event, id, handler),
  publish: (data?: any) => emitter.emit(event, data),
});
