import React from 'react';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-sky-700 text-white p-4 md:p-6 shadow-lg">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-right">{title}</h1>
      </div>
    </header>
  );
};