// frontend/src/pages/Dashboard.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { BookOpen, Calendar, TrendingUp, Award } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { name: 'Paths Enrolled', value: '5', icon: BookOpen },
    { name: 'Hours Learned', value: '42', icon: Calendar },
    { name: 'Completion Rate', value: '75%', icon: TrendingUp },
    { name: 'Certificates', value: '3', icon: Award }
  ];

  const enrolledPaths = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      progress: 65,
      lastAccessed: '2 days ago'
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      progress: 30,
      lastAccessed: '1 week ago'
    },
    {
      id: 3,
      title: 'UX/UI Design Principles',
      progress: 90,
      lastAccessed: 'Yesterday'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
          <p className="text-gray-600">Continue your learning journey</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enrolled Paths */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Your Learning Paths</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {enrolledPaths.map((path) => (
              <div key={path.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{path.title}</h3>
                    <p className="text-sm text-gray-500">Last accessed {path.lastAccessed}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{path.progress}% complete</p>
                    <div className="mt-1 w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${path.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;