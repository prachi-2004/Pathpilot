import { MessageCircle, TrendingUp, Target, Brain } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6">
      
      {/* Greeting */}
      <h1 className="text-3xl font-bold mb-6">
        Welcome back, learner 👋 
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard icon={<Target />} label="Career Match" value="85%" />
        <StatCard icon={<Brain />} label="Skills Completed" value="6 / 12" />
        <StatCard icon={<TrendingUp />} label="Roadmap Progress" value="45%" />
        <StatCard label="Sentiment" value="Positive" accent />
      </div>

      {/* Roadmap */}
      <div className="bg-slate-800 rounded-2xl shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Career Roadmap</h2>
        <ul className="space-y-2">
          <li className="text-green-400">✅ Fundamentals</li>
          <li className="font-semibold text-blue-400">🔄 Frontend Development</li>
          <li className="text-slate-400">🔒 Backend Development</li>
          <li className="text-slate-400">🔒 Projects</li>
          <li className="text-slate-400">🔒 Job Preparation</li>
        </ul>
      </div>

      {/* Skill Gap */}
      <div className="bg-slate-800 rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Skill Gap Analysis</h2>
        <div className="space-y-4">
          <SkillBar skill="React.js" value={70} />
          <SkillBar skill="Node.js" value={40} />
          <SkillBar skill="DSA" value={30} />
        </div>
      </div>

      {/* Chatbot */}
      <button className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2">
        <MessageCircle size={20} />
        Ask PathPilot
      </button>
    </div>
  );
}

function StatCard({ icon, label, value, accent }) {
  return (
    <div className="bg-slate-800 rounded-2xl shadow p-4">
      {icon && <div className="mb-2 text-blue-400">{icon}</div>}
      <p className="text-sm text-slate-400">{label}</p>
      <h2
        className={`text-xl font-semibold ${accent ? "text-green-400" : ""}`}
      >
        {value}
      </h2>
    </div>
  );
}

function SkillBar({ skill, value }) {
  return (
    <div>
      <p className="mb-1 text-slate-300">{skill}</p>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}