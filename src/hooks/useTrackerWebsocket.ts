import { useEffect, useState } from 'react';
import { PlayerStats } from '../types';

const SIMULATED_DATA: PlayerStats = {
  playerName: 'TenZ',
  playerTag: 'SEN',
  rank: 'Radiant',
  rr: 524,
  sessionWins: 3,
  sessionLosses: 1,
  sessionDraws: 0,
  matches: [
    { id: '1', map: 'Ascent', outcome: 'WIN', kda: '24/12/5', rrChange: 21 },
    { id: '2', map: 'Bind', outcome: 'LOSS', kda: '15/16/3', rrChange: -18 },
    { id: '3', map: 'Split', outcome: 'WIN', kda: '19/14/8', rrChange: 19 },
  ],
};

export function useTrackerWebsocket() {
  const [stats, setStats] = useState<PlayerStats>(SIMULATED_DATA);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    let ws: WebSocket;
    let reconnectTimer: NodeJS.Timeout;

    const connect = () => {
      ws = new WebSocket('ws://localhost:3044');

      ws.onopen = () => {
        setIsConnected(true);
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === 'UPDATE_STATS' && data.payload) {
            setStats((prev) => ({ ...prev, ...data.payload }));
          }
        } catch (e) {
          console.error('Failed to parse WS message', e);
        }
      };

      ws.onclose = () => {
        setIsConnected(false);
        reconnectTimer = setTimeout(connect, 3000);
      };

      ws.onerror = (err) => {
        // Will gracefully fail and retry
        ws.close();
      };
    };

    connect();

    return () => {
      clearTimeout(reconnectTimer);
      if (ws) ws.close();
    };
  }, []);

  return { stats, isConnected };
}
