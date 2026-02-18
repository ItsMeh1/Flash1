import React from 'react';
import { 
  AlertTriangle, 
  Home, 
  RotateCw, 
  WifiOff, 
  Zap 
} from 'lucide-react';

const Error404 = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 font-sans selection:bg-red-500/30 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Ambience (Red/Orange for Error) */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl w-full animate-in fade-in zoom-in duration-500">
        
        {/* Error Icon */}
        <div className="mx-auto w-24 h-24 bg-red-500/10 rounded-3xl flex items-center justify-center border border-red-500/20 mb-8 shadow-[0_0_40px_-10px_rgba(239,68,68,0.3)]">
          <WifiOff className="text-red-500" size={48} strokeWidth={1.5} />
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-medium text-red-400 mb-6 uppercase tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          Connection Lost • Code 404
        </div>

        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-600 mb-4">
          LOST<span className="text-red-500">.</span>
        </h1>

        <p className="text-lg text-slate-500 mb-12 max-w-lg mx-auto leading-relaxed">
          The requested node could not be located in the Flash network. It may have been moved, deleted, or blocked by system protocols.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="/" 
            className="group relative px-8 py-4 bg-slate-200 text-[#0a0a0c] font-bold rounded-xl hover:bg-white transition-all hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Home size={20} />
            <span>Return to Hub</span>
            <div className="absolute inset-0 rounded-xl ring-2 ring-white/50 opacity-0 group-hover:opacity-100 animate-pulse"></div>
          </a>

          <button 
            onClick={() => window.location.reload()}
            className="px-8 py-4 bg-[#16161a] border border-white/10 text-slate-300 font-bold rounded-xl hover:bg-[#1c1c21] hover:text-white transition-all hover:border-white/20 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <RotateCw size={20} />
            <span>Retry Connection</span>
          </button>
        </div>

        {/* Diagnostic Data */}
        <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-3 gap-4 text-center">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-slate-600">Protocol</span>
            <span className="font-mono text-sm text-slate-400">HTTPS/3</span>
          </div>
           <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-slate-600">Node ID</span>
            <span className="font-mono text-sm text-slate-400">ERR_N_7X</span>
          </div>
           <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest text-slate-600">Latency</span>
            <span className="font-mono text-sm text-red-400">TIMEOUT</span>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
        <p className="text-[10px] text-slate-700 uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2">
          <AlertTriangle size={12} />
          System Malfunction Detected
        </p>
      </footer>

    </div>
  );
};

export default Error404;
