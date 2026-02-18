import React, { useState } from 'react';
import { 
  Search, 
  Gamepad2, 
  Zap, 
  Trophy, 
  Clock, 
  Flame, 
  Star,
  Play,
  ArrowLeft
} from 'lucide-react';

const Games = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Add your games here! 
  // You can easily update this list as you find more unblocked games.
  const gameLibrary = [
    { 
      id: 1, 
      title: 'Slope', 
      desc: 'Speed down the neon slopes in this endless runner.', 
      category: 'Action',
      rating: 4.8,
      players: '2.4k',
      img: 'https://images.unsplash.com/photo-1614850523296-e8c041de4398?auto=format&fit=crop&w=300&q=80'
    },
    { 
      id: 2, 
      title: 'Retro Bowl', 
      desc: 'Be the manager of your own football team.', 
      category: 'Sports',
      rating: 4.9,
      players: '1.8k',
      img: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=300&q=80'
    },
    { 
      id: 3, 
      title: '1v1.LOL', 
      desc: 'Build and fight in this competitive simulator.', 
      category: 'Action',
      rating: 4.7,
      players: '5.1k',
      img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=300&q=80'
    },
    { 
      id: 4, 
      title: 'Cookie Clicker', 
      desc: 'The classic idle game of baking cookies.', 
      category: 'Idle',
      rating: 4.5,
      players: '900',
      img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=300&q=80'
    }
  ];

  const categories = ['All', 'Action', 'Sports', 'Idle', 'Puzzle'];

  const filteredGames = gameLibrary.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 font-sans selection:bg-purple-500/30">
      
      {/* Dynamic Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        
        {/* Top Navigation */}
        <div className="flex items-center justify-between mb-12">
          <a href="/" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors group">
            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
              <ArrowLeft size={18} />
            </div>
            <span className="text-sm font-medium">Back to Hub</span>
          </a>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-[10px] text-slate-600 uppercase tracking-widest font-bold">Latency</span>
              <span className="text-xs text-emerald-400 font-mono">???ms</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Zap size={20} />
            </div>
          </div>
        </div>

        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter text-white mb-4">
            GAMES<span className="text-purple-500 italic">+</span><span className="text-yellow-400">⚡</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            Choose a game to play, ad-free. All games are proxied through the Flash network for high performance.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Search */}
          <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-purple-400 transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Search library..."
              className="w-full bg-[#16161a] border border-white/5 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-purple-500/40 focus:ring-4 focus:ring-purple-500/5 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-4 rounded-2xl text-sm font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat 
                  ? 'bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]' 
                  : 'bg-[#16161a] text-slate-400 border border-white/5 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <div 
              key={game.id} 
              className="group relative bg-[#16161a] border border-white/5 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
            >
              {/* Image Container */}
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={game.img} 
                  alt={game.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 blur-[2px] group-hover:blur-0 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16161a] via-transparent to-transparent opacity-90"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.6)] animate-pulse">
                    <Play fill="white" className="text-white ml-1" size={24} />
                  </div>
                </div>

                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2 py-1 bg-black/50 backdrop-blur-md rounded-lg text-[10px] font-bold text-white uppercase tracking-tighter border border-white/10">
                    {game.category}
                  </span>
                </div>
              </div>

              {/* Game Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {game.title}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
                    <Star size={14} fill="currentColor" />
                    {game.rating}
                  </div>
                </div>
                <p className="text-sm text-slate-500 line-clamp-2 mb-6">
                  {game.desc}
                </p>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <Clock size={12} />
                    <span>Added Today</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-mono">
                    <Flame size={12} />
                    <span>{game.players} Active</span>
                  </div>
                </div>
              </div>

              {/* Click Shield (The Link) */}
              <a href="#" className="absolute inset-0 z-20"></a>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredGames.length === 0 && (
          <div className="text-center py-32">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-6">
              <Gamepad2 className="text-slate-700" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No games found</h3>
            <p className="text-slate-600">Try a different category or search term.</p>
          </div>
        )}

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default Games;
