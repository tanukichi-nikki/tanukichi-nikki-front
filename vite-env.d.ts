interface ImportMetaEnv {
    BASE_URL: any;
    readonly VITE_API_BASE_URL: string; // 必要な環境変数を定義
    readonly VITE_API_KEY: string; // 必要に応じて追加
    // 他の環境変数も定義
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  