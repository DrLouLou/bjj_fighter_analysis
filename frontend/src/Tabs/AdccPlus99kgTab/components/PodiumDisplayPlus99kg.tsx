import React from 'react';

interface Winner {
    name: string;
    position: '1st' | '2nd' | '3rd';
}


const winnersData: Winner[] = [
  { name: "Felipe Pena", position: "1st" },
  { name: "Luke Griffith", position: "2nd" },
  { name: "Dan Manasoiu", position: "3rd" }
];

const PodiumDisplay99kg: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>+99kg Category Winners</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {winnersData.map((winner, index) => (
          <div key={index}>
            <h3 style={{ color: getColor(winner.position) }}>{winner.position}</h3>
            <p>{winner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

function getColor(position: '1st' | '2nd' | '3rd'): string {
  switch (position) {
    case '1st': return '#FFD700'; 
    case '2nd': return '#C0C0C0'; 
    case '3rd': return '#CD7F32'; 
    default: return '#000';        
  }
}

export default PodiumDisplay99kg;
