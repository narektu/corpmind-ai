import React from 'react';
import { Upload, Search, FileText, BarChart3, Settings } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-xl font-bold tracking-tight">CorpMind <span className="text-blue-400">AI</span></h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <NavItem icon={<BarChart3 size={20} />} label="Overview" active />
          <NavItem icon={<Search size={20} />} label="Semantic Search" />
          <NavItem icon={<FileText size={20} />} label="Documents" />
          <NavItem icon={<Settings size={20} />} label="Settings" />
        </nav>
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">JD</div>
            <div className="text-sm">
              <p className="font-medium">Narek Tutundzhian</p>
              <p className="text-slate-400 text-xs">Admin</p>
            </div>
          </div>
        </div>
      </aside>
      
      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <h2 className="text-lg font-semibold text-slate-700">Document Overview</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2">
            <Upload size={18} />
            Upload PDF
          </button>
        </header>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard title="Total Documents" value="1,248" change="+12% this week" />
            <StatCard title="Pages Indexed" value="84,392" change="All systems operational" />
            <StatCard title="API Queries" value="452" change="Last 24 hours" />
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <h3 className="font-semibold text-slate-800">Recent Ingestions</h3>
            </div>
            <div className="p-12 text-center text-slate-400">
              <FileText size={48} className="mx-auto mb-4 opacity-20" />
              <p>No documents connected to backend yet</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${active ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
      {icon}
      {label}
    </button>
  );
}

function StatCard({ title, value, change }: { title: string, value: string, change: string }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <h3 className="text-sm font-medium text-slate-500 mb-1">{title}</h3>
      <p className="text-3xl font-bold text-slate-900 mb-1">{value}</p>
      <p className="text-xs text-green-600 font-medium">{change}</p>
    </div>
  );
}