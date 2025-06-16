import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="p-4 md:p-6 bg-white shadow-xl rounded-xl">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-sky-800 border-b-2 border-sky-200 pb-2 text-right">{title}</h2>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
};