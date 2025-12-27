'use client';

import React, { useState, useEffect } from 'react';
import { Upload } from 'lucide-react';
import { StatCard } from '../app/components/Statcard';
import { Sidebar } from '../app/components/Sidebar';
import { RecentActivity } from '../app/components/RecentActivity';
import { UploadModal } from '../app/components/UploadModal';
import { statCardService } from '../app/services/statCard.service';
import { recentActivityService } from '../app/services/recentActivity.service';
import { uploadModalService } from '../app/services/uploadModal.service';
import { StatCardProps, DocumentActivity } from '../app/interfaces';

export default function Dashboard() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [stats, setStats] = useState<StatCardProps[]>([]);
  const [activities, setActivities] = useState<DocumentActivity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [statsData, activityData] = await Promise.all([
          statCardService.getAll(),
          recentActivityService.getAll()
        ]);
        setStats(statsData);
        setActivities(activityData);
      } 
      catch (err) {
        console.error("Dashboard Load Error", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleUpload = async (file: File) => {
    try {
        await uploadModalService.upload(file);
        alert("Upload successful!");
        setIsUploadOpen(false);
        
        const newActivity = await recentActivityService.getAll();
        setActivities(newActivity);
    } catch (error) {
        alert("Upload failed. Is backend running?");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      <Sidebar />
      <main className="flex-1 ml-64 flex flex-col">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40">
          <h2 className="text-lg font-semibold text-slate-700">Document Overview</h2>
          <button 
            onClick={() => setIsUploadOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <Upload size={18} />
            Upload PDF
          </button>
        </header>
        <div className="p-8">
          {loading ? (
              <div className="text-center py-20 text-slate-500 animate-pulse">
                Connecting to CorpMind AI...
              </div>
          ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, i) => (
                  <StatCard 
                    key={i} 
                    title={stat.title} 
                    value={stat.value} 
                    change={stat.change}
                  />
              ))}
            </div>
            <RecentActivity activities={activities} />
            </>
          )}
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