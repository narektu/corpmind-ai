'use client';

import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { StatCard } from '../app/components/Statcard';
import { Sidebar } from '../app/components/Sidebar';
import { RecentActivity } from '../app/components/RecentActivity';
import { UploadModal } from '../app/components/UploadModal';

export default function Dashboard() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const handleUpload = (file: File) => {
    alert(`File "${file.name}" ready for upload!`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      <Sidebar />
      <main className="flex-1 ml-64 flex flex-col">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40">
          <h2 className="text-lg font-semibold text-slate-700">Document Overview</h2>
          <button onClick={() => setIsUploadOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 cursor-pointer shadow-sm">
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
          <RecentActivity />
        </div>
        <UploadModal 
          isOpen={isUploadOpen} 
          onClose={() => setIsUploadOpen(false)} 
          onUpload={handleUpload}
        />
      </main>
    </div>
  );
}