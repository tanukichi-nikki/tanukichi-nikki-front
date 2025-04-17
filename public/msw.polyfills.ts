// msw.polyfills.ts

// fetchポリフィルが必要な場合に使用します
import 'whatwg-fetch';
import 'fast-text-encoding'
import 'react-native-url-polyfill/auto'

if (typeof global.MessageEvent === "undefined") {
    class MessageEventPolyfill {
      type: string;
      constructor(type: string, eventInitDict?: any) {
        this.type = type;
        Object.assign(this, eventInitDict);
      }
    }
    global.MessageEvent = MessageEventPolyfill as any;
  }
  
  // グローバルに `Event` を定義
  if (typeof global.Event === "undefined") {
    class EventPolyfill {
      type: string;
      constructor(type: string, eventInitDict?: any) {
        this.type = type;
        Object.assign(this, eventInitDict);
      }
    }
    global.Event = EventPolyfill as any;
  }

  // グローバルに `EventTarget` を定義
if (typeof global.EventTarget === "undefined") {
    class EventTargetPolyfill {
      private listeners: Record<string, Set<(...args: any[]) => void>> = {};
  
      addEventListener(type: string, callback: (...args: any[]) => void) {
        if (!this.listeners[type]) {
          this.listeners[type] = new Set();
        }
        this.listeners[type].add(callback);
      }
  
      removeEventListener(type: string, callback: (...args: any[]) => void) {
        this.listeners[type]?.delete(callback);
      }
  
      dispatchEvent(event: { type: string }) {
        const listeners = this.listeners[event.type];
        if (listeners) {
          for (const listener of listeners) {
            listener(event);
          }
        }
      }
    }
    global.EventTarget = EventTargetPolyfill as any;
  }

  // BroadcastChannelのポリフィル
if (typeof global.BroadcastChannel === "undefined") {
    class BroadcastChannelPolyfill {
      private listeners: Record<string, Set<Function>> = {};
  
      constructor(channelName: string) {}
  
      postMessage(message: any) {
        // メッセージを全リスナーに送信
        for (const listener of this.listeners["message"] || []) {
          listener({ data: message });
        }
      }
  
      addEventListener(type: string, callback: Function) {
        if (!this.listeners[type]) {
          this.listeners[type] = new Set();
        }
        this.listeners[type].add(callback);
      }
  
      removeEventListener(type: string, callback: Function) {
        this.listeners[type]?.delete(callback);
      }
  
      close() {
        this.listeners = {};
      }
    }
  
    global.BroadcastChannel = BroadcastChannelPolyfill as any;
  }