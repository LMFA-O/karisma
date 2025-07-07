// src/layouts/MentorLayout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MentorLayout({ children }) {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard_mentor' },
    { label: 'Profil', path: '/edit_profile_mentor' },
  ];

  return (
    <div className="flex h-screen w-screen font-sans relative">
      {/* Sidebar */}
      <aside className="w-64 bg-[#000045] text-white flex flex-col">
        <div className="flex items-center justify-center py-6 border-b border-gray-700">
          <img src="/Logo Karisma 2.png" alt="Logo" className="h-14" />
        </div>
        <nav className="flex-grow p-6 space-y-4 text-lg">
          {menuItems.map((item) => (
            <div
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`cursor-pointer px-4 py-2 rounded ${
                window.location.pathname === item.path
                  ? 'bg-white text-[#000045] font-semibold'
                  : 'hover:bg-white/20'
              }`}
            >
              {item.label}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 overflow-auto p-6">{children}</main>
    </div>
  );
}
