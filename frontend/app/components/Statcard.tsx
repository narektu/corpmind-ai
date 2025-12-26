import { StatCardProps } from '../interfaces';

export function StatCard({ title, value, change }: StatCardProps) {
   return (
     <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
       <h3 className="text-sm font-medium text-slate-500 mb-1">{title}</h3>
       <p className="text-3xl font-bold text-slate-900 mb-1">{value}</p>
       <p className="text-xs text-green-600 font-medium">{change}</p>
     </div>
   );
 }