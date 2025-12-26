import { BarChart3, Search, FileText, Settings, HelpCircle } from 'lucide-react';
import { NavItemProps } from '../interfaces';

export function Sidebar() {
   return (
      <aside className="w-64 bg-slate-900 text-white flex flex-col h-screen fixed left-0 top-0 border-r border-slate-800 z-50">
         <div className="p-6 border-b border-slate-800">
            <h1 className="text-xl font-bold tracking-tight">CorpMind <span className="text-blue-400">AI</span></h1>
         </div>
         <nav className="flex-1 p-4 space-y-2">
            <NavItem icon={<BarChart3 size={20} />} label="Overview" active />
            <NavItem icon={<Search size={20} />} label="Semantic Search" />
            <NavItem icon={<FileText size={20} />} label="Documents" />
            <NavItem icon={<Settings size={20} />} label="Settings" />
         </nav>
         <div className="p-4 border-t border-slate-800 space-y-4">
            <button className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors w-full px-4 py-2">
                  <HelpCircle size={20} />
                  <span className="text-sm font-medium">Support</span>
            </button>
            
            <div className="flex items-center gap-3 px-2">
               <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold text-sm">
                  NT
               </div>
               <div className="text-sm">
                  <p className="font-medium">Narek Tutundzhian</p>
                  <p className="text-slate-400 text-xs">Admin</p>
               </div>
            </div>
         </div>
      </aside>
   );
}

function NavItem({ icon, label, active = false }: NavItemProps) {
   return (
     <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${active ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
       {icon}
       {label}
     </button>
   );
}