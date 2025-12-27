import React from 'react';
import { FileText, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { RecentActivityProps } from '../interfaces';

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center">
        <h3 className="font-semibold text-slate-800">Recent Ingestions</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
      </div>
      <div className="divide-y divide-slate-100">
        {activities.length === 0 ? (
           <div className="p-8 text-center text-slate-400 text-sm">
             No recent activity found.
           </div>
        ) : (
          activities.map((item) => (
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
          ))
        )}
      </div>
    </div>
  );
}