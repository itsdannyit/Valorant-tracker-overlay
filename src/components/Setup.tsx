import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Settings, Gamepad2, Monitor, Trophy } from 'lucide-react';
import { useTrackerWebsocket } from '../hooks/useTrackerWebsocket';

export default function Setup() {
  const { stats, isConnected } = useTrackerWebsocket();
  const [activeTab, setActiveTab] = useState('status');

  return (
    <div className="min-h-screen bg-black text-slate-100 p-8 flex flex-col font-sans selection:bg-red-500/30 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-8 flex-grow">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-800 pb-6">
          <div className="flex items-center gap-6">
             <div className="w-16 h-16 bg-gradient-to-tr from-red-600 to-red-400 rounded-lg flex items-center justify-center shadow-lg shadow-red-900/20">
               <Gamepad2 className="text-white" size={32} />
             </div>
             <div>
               <h1 className="text-4xl font-display font-bold tracking-tight uppercase">Valorant <span className="text-slate-500">Tracker</span></h1>
               <div className="flex items-center gap-2 mt-1">
                 <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
                 <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">
                    {isConnected ? 'Port 3044 • Connected' : 'Port 3044 • Disconnected'}
                 </span>
               </div>
             </div>
          </div>

          <div className="flex items-center gap-4">
             <a 
               href="?mode=overlay" 
               target="_blank"
               className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 transition-colors rounded-lg text-sm font-bold uppercase tracking-widest text-slate-300 border border-slate-800"
             >
               <Monitor size={18} className="text-slate-500" />
               View Overlay
             </a>
          </div>
        </header>

        <div className="flex gap-8 flex-grow overflow-hidden">
           
           {/* Sidebar */}
           <div className="w-64 flex flex-col gap-2">
             <button 
               onClick={() => setActiveTab('status')}
               className={`flex items-center gap-4 px-4 py-4 rounded-lg transition-all border ${activeTab === 'status' ? 'bg-slate-900 border-red-500/50 text-red-400' : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-900/50'}`}
             >
               <Trophy size={20} />
               <span className="font-bold text-xs uppercase tracking-widest">Session Stats</span>
             </button>
             <button 
               onClick={() => setActiveTab('settings')}
               className={`flex items-center gap-4 px-4 py-4 rounded-lg transition-all border ${activeTab === 'settings' ? 'bg-slate-900 border-red-500/50 text-red-400' : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-900/50'}`}
             >
               <Settings size={20} />
               <span className="font-bold text-xs uppercase tracking-widest">Configuration</span>
             </button>
           </div>

           {/* Main Content Pane */}
           <div className="flex-grow flex flex-col h-full">
              
              {activeTab === 'status' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-slate-900/50 rounded-xl p-8 border border-slate-800 h-full flex flex-col gap-8"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Session Overview</h2>
                    {/* Manual Overrides */}
                    <div className="flex gap-3">
                       <button className="px-6 py-2 bg-slate-950 hover:bg-slate-900 text-green-400 border border-slate-800 rounded text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                         <span className="text-lg leading-none">+</span> Win
                       </button>
                       <button className="px-6 py-2 bg-slate-950 hover:bg-slate-900 text-red-400 border border-slate-800 rounded text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                         <span className="text-lg leading-none">+</span> Loss
                       </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                     <div className="bg-slate-950 p-6 rounded-lg border border-slate-800 flex flex-col justify-between">
                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-4 block">Current Rank</span>
                        <div className="flex items-baseline gap-3">
                           <span className="text-4xl font-display font-bold text-white uppercase">{stats.rank}</span> 
                           <span className="text-xl font-mono text-slate-400 uppercase">{stats.rr} RR</span>
                        </div>
                     </div>
                     <div className="bg-slate-950 p-6 rounded-lg border border-slate-800 flex flex-col justify-between">
                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-4 block">Session Record</span>
                        <div className="text-4xl font-mono font-bold text-white tracking-widest">{stats.sessionWins}W - {stats.sessionLosses}L</div>
                     </div>
                     <div className="bg-slate-950 p-6 rounded-lg border border-slate-800 flex flex-col justify-between">
                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-4 block">Recent Trend</span>
                        <div className="flex gap-2 h-10 items-end">
                          {stats.matches.map(m => (
                            <div key={m.id} className="flex-1 bg-slate-900 rounded-sm overflow-hidden h-full">
                               <div className={`w-full h-full ${m.outcome === 'WIN' ? 'bg-green-500' : 'bg-red-500'}`} title={m.map} />
                            </div>
                          ))}
                        </div>
                     </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'settings' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-slate-900/50 rounded-xl p-8 border border-slate-800 flex flex-col gap-8 h-full"
                >
                  <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest">API Configuration</h2>
                  
                  <div className="flex flex-col gap-8 max-w-xl">
                    <div className="flex flex-col gap-3">
                       <label className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Riot ID</label>
                       <div className="flex gap-3">
                         <input 
                           type="text" 
                           defaultValue={stats.playerName}
                           className="flex-1 bg-slate-950 border border-slate-800 rounded p-4 text-white font-mono text-sm focus:outline-none focus:border-red-500 transition-colors" 
                           placeholder="PlayerName"
                         />
                         <input 
                           type="text" 
                           defaultValue={stats.playerTag}
                           className="w-32 bg-slate-950 border border-slate-800 rounded p-4 text-white font-mono text-sm focus:outline-none focus:border-red-500 transition-colors" 
                           placeholder="TAG"
                         />
                       </div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">HenrikDev API Key <span className="opacity-50">(Optional)</span></label>
                      <input 
                         type="password" 
                         className="w-full bg-slate-950 border border-slate-800 rounded p-4 text-white font-mono text-sm tracking-[0.3em] focus:outline-none focus:border-red-500 transition-colors" 
                         placeholder="••••••••••••••"
                      />
                    </div>
                  </div>

                  <div className="pt-8 mt-auto border-t border-slate-800 flex justify-end">
                     <button className="bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded text-xs font-bold uppercase tracking-widest transition-colors shadow-lg shadow-red-900/20">
                       Save Configuration
                     </button>
                  </div>
                </motion.div>
              )}

           </div>
        </div>

      </div>
    </div>
  );
}
