export type MatchData = {
  id: number;                  
  fighter_name: string;         
  weight_class: string;         
  team: string;                
  match_id: number;            
  opponent: string;             
  result: 'W' | 'L' | 'D';      
  method: string;               
  competition: string;          
  weight: string;               
  stage: string;                
  year: number;                 
  opponent_id: number;          
};

export type HistoricalData = {
  match_id: number;                  
  winner_id: number;         
  winner_name: string;         
  loser_id: number;     
  loser_name: string;      
  win_type: string;
  submission: string;       
  winner_points: number;
  loser_points: number;
  adv_pen: string;     
  weight_class: string;
  sex: string;            
  stage: string;                
  year: number;                 
};

export type FighterData = {
  id: number;
  first_name: string;             
  last_name: string;       
  nickname: string;
  team: string
};


