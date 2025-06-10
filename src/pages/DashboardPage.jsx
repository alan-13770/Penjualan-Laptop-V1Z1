import React from 'react';
import { FaFolder, FaTasks, FaUsers, FaChartLine, FaPlus } from 'react-icons/fa';

const StatCard = ({ title, value, detail, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4">
    <div className="p-3 bg-gray-100 rounded-lg">{icon}</div>
    <div>
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      <p className="text-gray-500">{title}</p>
      <p className="text-xs text-gray-400 mt-1">{detail}</p>
    </div>
  </div>
);

const DashboardPage = () => {
  const activeProjects = [
    { name: 'Dropbox Design System', hours: 34, priority: 'Medium', members: 5, progress: 15 },
    { name: 'Slack Team UI Design', hours: 47, priority: 'High', members: 4, progress: 35 },
    { name: 'GitHub Satellite', hours: 120, priority: 'Low', members: 8, progress: 75 },
  ];

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'Low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-8">
      <header className="bg-indigo-600 -m-10 mb-0 p-10 pb-20 text-white rounded-b-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Projects</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-100">
            <FaPlus />
            Create New Project
          </button>
        </div>
      </header>

      <div className="-mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Projects" value="18" detail="2 Completed" icon={<FaFolder className="text-indigo-500" />} />
        <StatCard title="Active Task" value="132" detail="28 Completed" icon={<FaTasks className="text-indigo-500" />} />
        <StatCard title="Teams" value="12" detail="1 Completed" icon={<FaUsers className="text-indigo-500" />} />
        <StatCard title="Productivity" value="76%" detail="5% Completed" icon={<FaChartLine className="text-indigo-500" />} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Active Projects</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-sm text-gray-500">
                <th className="p-3 font-medium">Project Name</th>
                <th className="p-3 font-medium">Hours</th>
                <th className="p-3 font-medium">Priority</th>
                <th className="p-3 font-medium">Progress</th>
              </tr>
            </thead>
            <tbody>
              {activeProjects.map((project, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-semibold">{project.name}</td>
                  <td className="p-3 text-gray-600">{project.hours}</td>
                  <td className="p-3"><span className={`px-2 py-1 text-xs font-semibold rounded-md ${getPriorityClass(project.priority)}`}>{project.priority}</span></td>
                  <td className="p-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;