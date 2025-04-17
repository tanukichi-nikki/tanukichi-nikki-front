import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// ワーカーのセットアップ
export const worker = setupWorker(...handlers);
worker.start();
