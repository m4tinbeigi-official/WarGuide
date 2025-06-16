import React from 'react';

interface SubSectionProps {
  title: string;
  children: React.ReactNode; // Changed from content: string
}

export const SubSection: React.FC<SubSectionProps> = ({ title, children }) => {
  return (
    <div className="p-4 bg-sky-50 border border-sky-300 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-sky-700 mb-2">{title}</h3>
      <div className="text-slate-600 space-y-2">{children}</div>
    </div>
  );
};