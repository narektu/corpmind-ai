export interface DocumentActivity {
   id: number;
   name: string;
   status: 'indexed' | 'processing' | 'failed';
   date: string;
   size: string;
 }