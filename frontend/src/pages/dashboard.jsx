// frontend/src/pages/dashboard.jsx
import { useAuth } from "../context/AuthContext.jsx";
import {
  BookOpen,
  Calendar,
  TrendingUp,
  Award,
  ChevronRight,
  PlayCircle,
  Target,
  Clock,
  Star,
  CheckCircle,
} from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();
  const userName = user?.name || "Learner";

  // Updated stats with more meaningful data
  const stats = [
    {
      name: "Active Learning Paths",
      value: "3",
      icon: BookOpen,
      trend: "+1 this week",
      color: "from-indigo-500 to-purple-600",
    },
    {
      name: "Total Learning Hours",
      value: "42",
      icon: Calendar,
      trend: "+5 this week",
      color: "from-blue-500 to-cyan-600",
    },
    {
      name: "Completion Rate",
      value: "75%",
      icon: TrendingUp,
      trend: "↑ 5% from last month",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Certificates Earned",
      value: "3",
      icon: Award,
      trend: "Next in 15 days",
      color: "from-amber-500 to-orange-600",
    },
  ];

  // Enhanced enrolled paths data
  const enrolledPaths = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master modern web technologies from frontend to backend",
      progress: 65,
      lastAccessed: "2 days ago",
      level: "Intermediate",
      skills: ["React", "Node.js", "MongoDB", "TypeScript"],
      nextStep: "Complete JavaScript Algorithms module",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      description:
        "Learn data analysis, visualization, and machine learning basics",
      progress: 30,
      lastAccessed: "1 week ago",
      level: "Beginner",
      skills: ["Python", "Pandas", "Matplotlib", "NumPy"],
      nextStep: "Start Statistics for Data Science course",
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "UX/UI Design Principles",
      description: "Create intuitive user experiences and beautiful interfaces",
      progress: 90,
      lastAccessed: "Yesterday",
      level: "Advanced",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      nextStep: "Complete final project submission",
      image:
        "https://images.unsplash.com/photo-1551650975-87decea25da8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  // New recommendations section
  const recommendations = [
    {
      id: 1,
      title: "Advanced React Patterns",
      type: "Course",
      level: "Advanced",
      duration: "8 hours",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b7727ea9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Python for Data Analysis",
      type: "Learning Path",
      level: "Intermediate",
      duration: "15 hours",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Design Thinking Workshop",
      type: "Workshop",
      level: "All Levels",
      duration: "3 hours",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                Welcome back,{" "}
                <span className="text-indigo-600">{userName}!</span>
              </h1>
              <p className="mt-2 text-lg text-slate-600 max-w-2xl">
                Your learning journey continues. You're on track to complete
                your Full Stack Web Development path in 3 weeks.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-lg">
                <PlayCircle className="w-5 h-5 mr-2" />
                Continue Learning
              </button>
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-indigo-600">
                    {userName.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
            >
              <div className={`h-2 bg-gradient-to-r ${stat.color}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-gradient-to-r rounded-xl shadow-inner w-fit">
                    <stat.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full font-medium">
                    {stat.trend}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-medium text-slate-500">
                  {stat.name}
                </h3>
                <p className="mt-1 text-3xl font-bold text-slate-900">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Learning Paths Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
              <div className="px-6 py-4 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900">
                    Your Learning Paths
                  </h2>
                  <div className="flex items-center text-indigo-600 font-medium">
                    View all <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                {enrolledPaths.map((path) => (
                  <div
                    key={path.id}
                    className="p-6 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-slate-900">
                              {path.title}
                            </h3>
                            <p className="text-slate-600 mt-1">
                              {path.description}
                            </p>
                          </div>
                          <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">
                            {path.level}
                          </span>
                        </div>

                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-500">Progress</span>
                            <span className="font-medium text-slate-900">
                              {path.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2.5">
                            <div
                              className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full"
                              style={{ width: `${path.progress}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {path.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="md:w-64 mt-4 md:mt-0">
                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4">
                          <div className="flex items-center mb-2">
                            <Clock className="w-4 h-4 text-indigo-600 mr-2" />
                            <span className="text-sm text-slate-600">
                              Last accessed {path.lastAccessed}
                            </span>
                          </div>
                          <div className="flex items-center mb-3">
                            <Target className="w-4 h-4 text-indigo-600 mr-2" />
                            <span className="text-sm font-medium text-slate-900">
                              {path.nextStep}
                            </span>
                          </div>
                          <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center">
                            Continue <ChevronRight className="w-4 h-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-900">
                  Recent Activity
                </h2>
              </div>

              <div className="divide-y divide-slate-100">
                <div className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-lg mr-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">
                        Completed "JavaScript Fundamentals" module
                      </p>
                      <p className="text-sm text-slate-500 mt-1">
                        2 days ago • Full Stack Web Development
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <Star className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">
                        Earned "Data Visualization" badge
                      </p>
                      <p className="text-sm text-slate-500 mt-1">
                        3 days ago • Data Science Fundamentals
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-lg mr-3">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">
                        Received Certificate: "HTML & CSS Mastery"
                      </p>
                      <p className="text-sm text-slate-500 mt-1">
                        1 week ago • Web Development Basics
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-slate-100">
                <button className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center">
                  View all activity <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Recommendations */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Recommended for You
                </h2>

                {recommendations.map((rec) => (
                  <div
                    key={rec.id}
                    className="flex mb-5 last:mb-0 hover:bg-slate-50 p-3 rounded-xl transition-colors"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={rec.image}
                        alt={rec.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-slate-900 line-clamp-1">
                        {rec.title}
                      </h3>
                      <div className="flex items-center mt-1 text-sm text-slate-500">
                        <span className="bg-slate-100 px-2 py-0.5 rounded mr-2">
                          {rec.type}
                        </span>
                        <span>{rec.duration}</span>
                      </div>
                      <button className="mt-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center">
                        Start learning <ChevronRight className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                  </div>
                ))}

                <button className="w-full mt-2 py-2 border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                  Browse all recommendations
                </button>
              </div>
            </div>

            {/* Milestone Progress */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold">Learning Milestone</h2>
                  <p className="mt-2 text-indigo-100">
                    You're 15 hours away from completing your Full Stack path!
                  </p>
                </div>
                <div className="bg-white/20 p-3 rounded-xl">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress to milestone</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-white/30 rounded-full h-2.5">
                  <div
                    className="bg-white h-2.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <p className="mt-3 text-sm text-indigo-100">
                  Complete 3 more modules to earn your Full Stack Developer
                  certificate
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Learning Insights
                </h2>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Weekly Learning Time</span>
                      <span className="font-medium">7.2 hrs</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: "72%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Streak</span>
                      <span className="font-medium">5 days</span>
                    </div>
                    <div className="flex items-center">
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full mx-0.5 ${
                            i < 5 ? "bg-indigo-500" : "bg-slate-200"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Focus Area</span>
                      <span className="font-medium">Frontend</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                        React
                      </span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                        CSS
                      </span>
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                        Testing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
