//microCMSのSDKの初期化
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'suzu-blog',
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});