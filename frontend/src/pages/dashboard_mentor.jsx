import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TugasUser() {
  const navigate = useNavigate();
  const [mentorName, setMentorName] = useState('');

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData && userData.username) {
      setMentorName(userData.username);
    }
  }, []);

  const menuItems = [
    { label: 'dashboard', path: '/dashboard_mentor' },
    { label: 'profile', path: '/profile_mentor' },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

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
        <div className="p-4 border-t border-gray-600 text-sm">
            <p className="mb-2">
            Login sebagai: <span className="font-bold">{mentorName}</span>
            </p>
            <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
            >
            Logout
            </button>
        </div>
        
      </aside>

      <div className="flex-1 bg-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#0A0A57]">Tugas User</h1>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100 text-[#0A0A57] font-semibold">
              <tr>
                <th className="border px-2 py-2 text-left w-[50px] text-sm">No</th>
                <th className="border px-3 py-1 text-left w-[120px]">Nama</th>
                <th className="border px-3 py-1 text-left w-[100px]">Kelas</th>
                <th className="border px-3 py-1 text-left w-[80px]">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-gray-700">
                <td className="border px-2 py-1 text-left">1</td>
                <td className="border px-3 py-1">Coba</td>
                <td className="border px-3 py-1">DG1001</td>
                <td className="border px-3 py-1">
                  <button
                    onClick={() => navigate('/DetailSesi')}
                    className="bg-[#1c2ea0] text-white px-4 py-1 text-sm rounded"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TugasUser;
