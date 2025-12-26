import React, { useState, useRef } from 'react';
import { X, UploadCloud, FileType } from 'lucide-react';
import { UploadModalProps } from '../interfaces';

export function UploadModal({ isOpen, onClose, onUpload }: UploadModalProps) {
   const [isDragging, setIsDragging] = useState(false);
   const fileInputRef = useRef<HTMLInputElement>(null);
   
   if (!isOpen)
   {
      return null;
   }

   const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(true);
   };

   const handleDragLeave = () => {
      setIsDragging(false);
   };

   const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      
      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        validateAndUpload(files[0]);
      }
   };

   const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
         validateAndUpload(e.target.files[0]);
      }
   };
  
   const validateAndUpload = (file: File) => {
      if (file.type !== 'application/pdf') {
         alert('Only PDF files are supported for now!');
         return;
      }
      onUpload(file);
      onClose();
   };

   return (
      <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800">Upload Document</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition">
            <X size={20} />
          </button>
        </div>
        <div className="p-8">
          <div 
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`
              border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200
              ${isDragging 
                ? 'border-blue-500 bg-blue-50 scale-[1.02]' 
                : 'border-slate-200 hover:border-blue-400 hover:bg-slate-50'
              }
            `}>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept=".pdf" 
              onChange={handleFileSelect}
            />
            <div className={`w-16 h-16 mb-4 rounded-full flex items-center justify-center ${isDragging ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
              <UploadCloud size={32} />
            </div>
            <p className="text-sm font-medium text-slate-700 mb-1">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-slate-500">
              PDF, DOCX up to 10MB
            </p>
          </div>
          <div className="mt-6 flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
            <FileType className="text-blue-500 mt-0.5" size={16} />
            <div className="text-xs text-slate-600">
              <span className="font-semibold text-slate-800">Note:</span> Files are automatically processed for semantic search. Sensitive data is encrypted
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}