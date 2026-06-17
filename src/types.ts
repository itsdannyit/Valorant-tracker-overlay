export interface Match {
  id: string;
  map: string;
  outcome: 'WIN' | 'LOSS' | 'DRAW';
  kda: string;
  rrChange: number;
}

export interface PlayerStats {
  playerName: string;
  playerTag: string;
  rank: string;
  rr: number;
  sessionWins: number;
  sessionLosses: number;
  sessionDraws: number;
  matches: Match[];
}

export interface WsMessage {
  type: 'UPDATE_STATS' | 'CONNECTION_SUCCESS';
  payload: Partial<PlayerStats>;
}
