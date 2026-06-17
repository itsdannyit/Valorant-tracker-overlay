import React from 'react';
import { motion } from 'motion/react';
import { useTrackerWebsocket } from '../hooks/useTrackerWebsocket';
import { getRankColor, getRankGlow } from '../utils/rankColors';

export default function Overlay() {
  const { stats, isConnected } = useTrackerWebsocket();

  const rankColor = getRankColor(stats.rank);
  const rankGlow = getRankGlow(stats.rank);

  const totalMatches = stats.sessionWins + stats.sessionLosses + stats.sessionDraws;
  const winRate = totalMatches === 0 ? 0 : Math.round((stats.sessionWins / totalMatches) * 100);

  return (
    <div className="min-h-screen w-full flex items-start justify-start p-8 bg-transparent overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-fit flex text-slate-100 font-sans"
      >
        <div className="flex bg-black/90 backdrop-blur-md border border-slate-800 rounded-lg overflow-hidden shadow-2xl relative">
          
          {/* Rank & Name */}
          <div className="flex flex-col justify-center items-center px-6 py-3 border-r border-slate-800 bg-slate-900/50">
             <span 
               className="text-2xl font-display font-bold uppercase tracking-tight" 
               style={{ color: rankColor, textShadow: rankGlow }}
             >
               {stats.rank}
             </span>
             <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-0.5">
               {stats.playerName}
             </span>
          </div>
          
          {/* Rating (RR) */}
          <div className="flex flex-col justify-center items-center px-6 py-3 border-r border-slate-800">
             <span className="flex items-baseline gap-1">
               <span className="text-2xl font-mono font-bold" style={{ color: rankColor }}>{stats.rr}</span>
             </span>
             <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mt-0.5">Rating</span>
          </div>

          {/* Session Record */}
          <div className="flex flex-col justify-center items-center px-6 py-3 border-r border-slate-800">
             <span className="text-xl font-mono font-bold text-slate-100 tracking-tight">
               <span className="text-green-400">{stats.sessionWins}W</span> - <span className="text-red-400">{stats.sessionLosses}L</span>
             </span>
             <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mt-0.5">Session</span>
          </div>
          
          {/* Win Rate */}
          <div className="flex flex-col justify-center items-center px-6 py-3">
             <span className={`text-xl font-mono font-bold tracking-tight ${winRate >= 50 ? 'text-green-400' : 'text-slate-100'}`}>
               {winRate}%
             </span>
             <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mt-0.5">Win Rate</span>
          </div>

          {/* Connection Status Indicator */}
          {!isConnected && (
            <div className="absolute top-1.5 right-1.5 flex items-center gap-1">
               <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
              </span>
            </div>
          )}
          
          {/* Subtle bottom accent line that matches rank color */}
          <div className="absolute bottom-0 left-0 h-[2px] w-full opacity-80" style={{ backgroundColor: rankColor }} />
        </div>
      </motion.div>
    </div>
  );
}
