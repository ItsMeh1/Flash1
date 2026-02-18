import React, { useState } from 'react';
import { 
  Search, 
  Gamepad2, 
  Globe, 
  Zap, 
  Settings, 
  LayoutGrid, 
  ArrowRight,
  Terminal,
  Cpu
} from 'lucide-react';

const Hub = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Define your apps here. You can add as many as you want!
  const apps = [
    { 
      id: 'browser', 
      title: 'Flash Search+', 
      description: 'Browse the web freely. Powered by Ultraviolet proxy technology.', 
      icon: Globe, 
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
      link: 'browser.jsx' 
    },
    { 
      id: 'games', 
      title: 'Games+', 
      description: 'Curated collection of unblocked games. Updated daily.', 
      icon: Gamepad2, 
      color: 'text-purple-400', 
      bg: 'bg-purple-400/10',
      link: 'games.html' 
    },
    { 
      id: 'apps', 
      title: 'App Library', 
      description: 'Access discord, vs code, and other tools directly.', 
      icon: LayoutGrid, 
      color: 'text-emerald-400', 
      bg: 'bg-emerald-400/10',
      link: '#' 
    },
    { 
      id: 'settings', 
      title: 'System Config', 
      description: 'Adjust proxy nodes, themes, and cloaking settings.', 
      icon: Settings, 
      color: 'text-slate-400', 
      bg: 'bg-slate-400/10',
      link: '#' 
    }
  ];

  // Filter logic
  const filteredApps = apps.filter(app => 
    app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 font-sans selection:bg-yellow-500/30">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            System Online v2.4
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 mb-4">
            FLASH<span className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">⚡</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-lg mx-auto">
            Your gateway to the unblocked web. Choose your experience below.
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-xl relative group mb-20 z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-backwards">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
          <div className="relative flex items-center bg-[#16161a] border border-white/10 rounded-xl p-4 shadow-2xl">
            <Search className="text-slate-500 ml-2 mr-4" size={20} />
            <input 
              type="text" 
              placeholder="Search experiences..." 
              className="w-full bg-transparent text-lg placeholder:text-slate-600 focus:outline-none text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="hidden md:flex gap-2">
              <div className="px-2 py-1 rounded bg-[#24242b] border border-white/5 text-xs text-slate-500 font-mono">CMD+K</div>
            </div>
          </div>
        </div>

        {/* App Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-backwards delay-100">
          {filteredApps.map((app) => (
            <a 
              key={app.id}
              href={app.link}
              className="group relative bg-[#16161a] border border-white/5 rounded-2xl p-6 hover:border-white/20 hover:bg-[#1c1c21] transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
            >
              {/* Card Hover Gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${app.color.replace('text-', 'from-')} to-transparent`}></div>

              <div className="relative flex items-start gap-5">
                {/* Icon Box */}
                <div className={`w-16 h-16 rounded-xl ${app.bg} flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                  <app.icon className={`${app.color}`} size={32} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {app.title}
                    </h3>
                    <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-slate-500" size={18} />
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                    {app.description}
                  </p>
                </div>
              </div>

              {/* Bottom Status Bar */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                <span className="flex items-center gap-1.5">
                  <Zap size={10} className="text-yellow-500/50" />
                  Fast
                </span>
                <span>v1.0.4</span>
              </div>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {filteredApps.length === 0 && (
          <div className="text-center py-20 animate-in fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#16161a] border border-white/5 mb-4">
              <Search className="text-slate-600" size={24} />
            </div>
            <h3 className="text-xl text-slate-300 font-bold mb-2">No results found</h3>
            <p className="text-slate-600">Try searching for "browser" or "games"</p>
          </div>
        )}

      </div>

      {/* Footer / Info */}
      <footer className="fixed bottom-6 left-0 right-0 text-center pointer-events-none">
        <p className="text-[10px] text-slate-700 uppercase tracking-[0.2em] font-medium">
          Secure Connection • Encrypted • Flash Systems
        </p>
      </footer>
    </div>
  );
};

export default Hub;
