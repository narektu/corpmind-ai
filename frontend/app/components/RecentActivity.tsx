import React from 'react';
import { FileText, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { DocumentActivity } from '../interfaces';

const MOCK_ACTIVITIES: DocumentActivity[] = [
  { id: 1, name: 'Q3_Financial_Report.pdf', status: 'indexed', date: '2 mins ago', size: '2.4 MB' },
  { id: 2, name: 'Vendor_Contract_Acme.pdf', status: 'processing', date: '15 mins ago', size: '1.1 MB' },
  { id: 3, name: 'Employee_Handbook_2024.pdf', status: 'failed', date: '1 hour ago', size: '5.8 MB' },
];

export function RecentActivity() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center">
        <h3 className="font-semibold text-slate-800">Recent Ingestions</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
      </div>
      
      <div className="divide-y divide-slate-100">
        {MOCK_ACTIVITIES.map((item) => (
          <div key={item.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                <FileText size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">{item.name}</p>
                <p className="text-xs text-slate-500">{item.size} • {item.date}</p>
              </div>
            </div>
            {item.status === 'indexed' && (
               <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100"><CheckCircle size={12}/> Indexed</span>
            )}
            {item.status === 'processing' && (
               <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100"><Clock size={12}/> Processing</span>
            )}
            {item.status === 'failed' && (
               <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-100"><AlertCircle size={12}/> Failed</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}