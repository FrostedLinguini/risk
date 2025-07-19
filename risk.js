// Risk Board Game - Styled like a colorful world map

// Define continents with their colors and territories
const continents = {
  "North America": {
    color: "#FFEB3B", // Bright yellow like classic Risk
    territories: [
      { name: "Alaska", x: 50, y: 120, width: 80, height: 60, borderRadius: "25px 15px 15px 25px" },
      { name: "Northwest Territory", x: 140, y: 80, width: 120, height: 70, borderRadius: "20px 30px 15px 20px" },
      { name: "Greenland", x: 300, y: 60, width: 100, height: 80, borderRadius: "30px 35px 25px 15px" },
      { name: "Alberta", x: 130, y: 150, width: 90, height: 60, borderRadius: "15px 20px 20px 15px" },
      { name: "Ontario", x: 220, y: 140, width: 80, height: 70, borderRadius: "20px 15px 15px 20px" },
      { name: "Quebec", x: 300, y: 150, width: 70, height: 60, borderRadius: "15px 25px 25px 15px" },
      { name: "Western United States", x: 120, y: 220, width: 100, height: 70, borderRadius: "20px 25px 25px 20px" },
      { name: "Eastern United States", x: 230, y: 220, width: 100, height: 70, borderRadius: "25px 20px 20px 25px" },
      { name: "Central America", x: 150, y: 300, width: 80, height: 50, borderRadius: "15px 15px 30px 30px" }
    ]
  },
  "South America": {
    color: "#FF5722", // Red-orange like classic Risk
    territories: [
      { name: "Venezuela", x: 200, y: 360, width: 80, height: 60, borderRadius: "25px 25px 15px 15px" },
      { name: "Brazil", x: 250, y: 420, width: 120, height: 100, borderRadius: "15px 30px 30px 15px" },
      { name: "Peru", x: 180, y: 450, width: 70, height: 80, borderRadius: "25px 15px 15px 25px" },
      { name: "Argentina", x: 200, y: 530, width: 90, height: 100, borderRadius: "15px 15px 35px 25px" }
    ]
  },
  "Europe": {
    color: "#2196F3", // Blue like classic Risk
    territories: [
      { name: "Iceland", x: 380, y: 100, width: 60, height: 50, borderRadius: "30px" },
      { name: "Great Britain", x: 420, y: 150, width: 70, height: 60, borderRadius: "25px 15px 15px 25px" },
      { name: "Scandinavia", x: 480, y: 100, width: 80, height: 70, borderRadius: "20px 35px 15px 20px" },
      { name: "Northern Europe", x: 470, y: 180, width: 90, height: 60, borderRadius: "20px 25px 25px 20px" },
      { name: "Western Europe", x: 400, y: 220, width: 80, height: 70, borderRadius: "25px 15px 15px 25px" },
      { name: "Southern Europe", x: 480, y: 250, width: 100, height: 60, borderRadius: "15px 30px 30px 15px" },
      { name: "Ukraine", x: 550, y: 150, width: 100, height: 80, borderRadius: "25px 25px 25px 25px" }
    ]
  },
  "Asia": {
    color: "#4CAF50", // Green like classic Risk
    territories: [
      { name: "Ural", x: 620, y: 120, width: 80, height: 70, borderRadius: "25px 20px 20px 25px" },
      { name: "Siberia", x: 680, y: 80, width: 120, height: 90, borderRadius: "30px 35px 25px 20px" },
      { name: "Yakutsk", x: 800, y: 90, width: 90, height: 70, borderRadius: "35px 30px 20px 25px" },
      { name: "Kamchatka", x: 880, y: 100, width: 80, height: 80, borderRadius: "30px 40px 40px 20px" },
      { name: "Irkutsk", x: 750, y: 170, width: 80, height: 60, borderRadius: "20px 25px 25px 20px" },
      { name: "Mongolia", x: 780, y: 240, width: 90, height: 60, borderRadius: "25px 25px 25px 25px" },
      { name: "Afghanistan", x: 600, y: 220, width: 80, height: 70, borderRadius: "20px 25px 25px 20px" },
      { name: "China", x: 780, y: 300, width: 100, height: 80, borderRadius: "25px 30px 30px 25px" },
      { name: "Middle East", x: 550, y: 280, width: 90, height: 70, borderRadius: "20px 25px 25px 20px" },
      { name: "India", x: 680, y: 340, width: 80, height: 80, borderRadius: "25px 15px 30px 25px" },
      { name: "Siam", x: 780, y: 380, width: 70, height: 60, borderRadius: "15px 25px 25px 15px" },
      { name: "Japan", x: 900, y: 280, width: 60, height: 70, borderRadius: "30px 35px 35px 30px" }
    ]
  },
  "Africa": {
    color: "#FF9800", // Orange like classic Risk
    territories: [
      { 
        name: "North Africa", 
        svgPath: "M0,0 L160,0 L170,5 L175,10 L170,15 L160,20 L150,25 L140,30 L130,35 L120,40 L110,45 L100,48 L90,50 L80,52 L70,54 L60,55 L50,56 L40,57 L30,58 L20,59 L10,58 L5,55 L2,50 L0,45 L0,40 L0,35 L0,30 L0,25 L0,20 L0,15 L0,10 L0,5 Z",
        x: 420, y: 320, width: 180, height: 60
      },
      { 
        name: "Egypt", 
        svgPath: "M0,0 L40,0 L45,2 L50,5 L55,10 L58,15 L60,22 L62,30 L64,38 L65,46 L66,54 L67,62 L68,70 L67,75 L65,78 L62,80 L55,82 L48,83 L40,84 L32,83 L25,82 L18,80 L12,78 L7,75 L3,72 L0,68 L0,64 L0,60 L0,55 L0,50 L0,45 L0,40 L0,35 L0,30 L0,25 L0,20 L0,15 L0,10 L0,5 Z",
        x: 580, y: 320, width: 75, height: 85
      },
      { 
        name: "East Africa", 
        svgPath: "M0,20 L70,20 L75,25 L78,32 L80,40 L81,48 L82,56 L83,64 L84,72 L85,80 L86,88 L87,96 L88,104 L89,112 L88,118 L86,124 L83,128 L78,132 L72,135 L65,137 L58,138 L50,139 L42,138 L35,137 L28,135 L22,132 L17,128 L13,124 L10,118 L8,112 L7,106 L6,100 L5,94 L4,88 L3,82 L2,76 L1,70 L0,64 L0,58 L0,52 L0,46 L0,40 L0,34 L0,28 L0,22 Z",
        x: 580, y: 400, width: 95, height: 120
      },
      { 
        name: "Congo", 
        svgPath: "M0,5 L155,5 L158,8 L160,12 L162,16 L164,20 L166,25 L168,30 L170,35 L172,40 L174,45 L176,50 L178,55 L180,60 L182,65 L184,70 L186,75 L188,80 L190,85 L192,90 L194,95 L196,100 L198,105 L200,110 L198,115 L195,118 L190,120 L184,122 L177,124 L170,125 L162,126 L154,127 L146,128 L138,129 L130,130 L122,129 L114,128 L106,127 L98,126 L90,125 L82,124 L75,122 L69,120 L64,118 L61,115 L59,110 L58,105 L57,100 L56,95 L55,90 L54,85 L53,80 L52,75 L51,70 L50,65 L49,60 L48,55 L47,50 L46,45 L45,40 L44,35 L43,30 L42,25 L41,20 L40,15 L39,10 L37,7 L34,5 L31,4 L28,3 L25,2 L22,1 L19,0 L16,1 L14,2 L12,3 L10,4 L8,5 L6,6 L4,7 L2,8 L0,10 Z",
        x: 420, y: 375, width: 200, height: 130
      },
      { 
        name: "South Africa", 
        svgPath: "M0,0 L170,0 L175,2 L178,5 L180,8 L182,12 L184,16 L186,20 L188,24 L190,28 L192,32 L194,36 L196,40 L198,44 L200,48 L202,52 L204,56 L206,60 L208,64 L210,68 L208,72 L205,75 L200,77 L194,79 L187,80 L180,81 L172,82 L164,81 L156,80 L148,79 L140,77 L132,75 L124,72 L116,68 L108,64 L100,60 L92,56 L84,52 L76,48 L68,44 L60,40 L52,36 L44,32 L36,28 L28,24 L20,20 L12,16 L5,12 L0,8 L0,4 L0,0 Z",
        x: 450, y: 500, width: 220, height: 85
      },
      { 
        name: "Madagascar", 
        svgPath: "M0,0 L20,0 L22,2 L24,5 L25,8 L26,12 L27,16 L28,20 L29,24 L30,28 L31,32 L32,36 L33,40 L34,44 L35,48 L36,52 L35,56 L34,59 L32,62 L29,64 L25,66 L20,67 L15,66 L11,64 L8,62 L6,59 L5,56 L4,52 L3,48 L2,44 L1,40 L0,36 L0,32 L0,28 L0,24 L0,20 L0,16 L0,12 L0,8 L0,4 L0,0 Z",
        x: 680, y: 520, width: 42, height: 68
      }
    ]
  },
  "Australia": {
    color: "#9C27B0", // Purple like classic Risk
    territories: [
      { name: "Indonesia", x: 820, y: 450, width: 80, height: 60, borderRadius: "25px 25px 15px 15px" },
      { name: "New Guinea", x: 900, y: 460, width: 70, height: 50, borderRadius: "30px 30px 25px 25px" },
      { name: "Western Australia", x: 820, y: 520, width: 90, height: 80, borderRadius: "20px 15px 30px 35px" },
      { name: "Eastern Australia", x: 910, y: 530, width: 90, height: 70, borderRadius: "15px 35px 35px 15px" }
    ]
  }
};

// Territory connections for game logic
const territoryConnections = {
  "Alaska": ["Northwest Territory", "Alberta", "Kamchatka"],
  "Northwest Territory": ["Alaska", "Alberta", "Ontario", "Greenland"],
  "Alberta": ["Alaska", "Northwest Territory", "Ontario", "Western United States"],
  "Ontario": ["Northwest Territory", "Alberta", "Quebec", "Eastern United States", "Western United States", "Greenland"],
  "Greenland": ["Northwest Territory", "Ontario", "Quebec", "Iceland"],
  "Quebec": ["Ontario", "Greenland", "Eastern United States"],
  "Western United States": ["Alberta", "Ontario", "Eastern United States", "Central America"],
  "Eastern United States": ["Western United States", "Ontario", "Quebec", "Central America"],
  "Central America": ["Western United States", "Eastern United States", "Venezuela"]
  // Add more connections as needed...
};

function createRiskBoard() {
  // Create main container
  const container = document.createElement('div');
  container.style.cssText = `
    width: 1000px;
    height: 700px;
    background: 
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 219, 226, 0.3) 0%, transparent 50%),
      linear-gradient(45deg, #F4E4BC 0%, #E8D5B7 25%, #F4E4BC 50%, #E8D5B7 75%, #F4E4BC 100%);
    border: 5px solid #8B4513;
    border-radius: 20px;
    position: relative;
    margin: 20px auto;
    box-shadow: 
      0 0 0 3px #D2691E,
      0 15px 35px rgba(0,0,0,0.4),
      inset 0 0 20px rgba(139, 69, 19, 0.1);
    font-family: 'Georgia', serif;
    overflow: hidden;
  `;

  // Add vintage paper texture overlay
  const textureOverlay = document.createElement('div');
  textureOverlay.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.1) 0%, transparent 2%),
      radial-gradient(circle at 75% 75%, rgba(139, 69, 19, 0.1) 0%, transparent 2%),
      radial-gradient(circle at 45% 80%, rgba(101, 67, 33, 0.05) 0%, transparent 3%);
    pointer-events: none;
  `;
  container.appendChild(textureOverlay);

  // Add title
  const title = document.createElement('div');
  title.textContent = 'RISK: The Game of Global Domination';
  title.style.cssText = `
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 26px;
    font-weight: bold;
    color: #8B4513;
    text-shadow: 
      2px 2px 0px #D2691E,
      4px 4px 8px rgba(0,0,0,0.3);
    letter-spacing: 2px;
  `;
  container.appendChild(title);

  // Add compass rose decoration
  const compass = document.createElement('div');
  compass.innerHTML = '⚜️';
  compass.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 60px;
    opacity: 0.1;
    pointer-events: none;
    z-index: 0;
  `;
  container.appendChild(compass);

  // Create territories for each continent
  Object.entries(continents).forEach(([continentName, continent]) => {
    continent.territories.forEach(territory => {
      if (territory.svgPath) {
        // Create SVG territory with accurate borders
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.style.cssText = `
          position: absolute;
          left: ${territory.x}px;
          top: ${territory.y}px;
          width: ${territory.width}px;
          height: ${territory.height}px;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 2;
        `;
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', territory.svgPath);
        path.style.cssText = `
          fill: ${continent.color};
          stroke: #2C1810;
          stroke-width: 2;
          filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
        `;
        
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', territory.width / 2);
        text.setAttribute('y', territory.height / 2);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'central');
        text.style.cssText = `
          font-size: 10px;
          font-weight: bold;
          fill: #1a1a1a;
          text-shadow: 1px 1px 2px rgba(255,255,255,0.8);
          pointer-events: none;
          font-family: Georgia, serif;
        `;
        text.textContent = territory.name;
        
        svg.appendChild(path);
        svg.appendChild(text);
        
        // Add hover effects
        svg.addEventListener('mouseenter', () => {
          svg.style.transform = 'scale(1.05)';
          svg.style.zIndex = '10';
          path.style.strokeWidth = '3';
          path.style.stroke = '#1a1a1a';
          path.style.filter = 'drop-shadow(3px 3px 8px rgba(0,0,0,0.4))';
        });
        
        svg.addEventListener('mouseleave', () => {
          svg.style.transform = 'scale(1)';
          svg.style.zIndex = '2';
          path.style.strokeWidth = '2';
          path.style.stroke = '#2C1810';
          path.style.filter = 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))';
        });
        
        svg.title = `${territory.name} (${continentName})`;
        container.appendChild(svg);
      } else {
        // Fallback to regular div territories
        const territoryDiv = document.createElement('div');
        const borderRadius = territory.borderRadius || '15px';
        const clipPath = territory.clipPath || '';
        territoryDiv.style.cssText = `
          position: absolute;
          left: ${territory.x}px;
          top: ${territory.y}px;
          width: ${territory.width}px;
          height: ${territory.height}px;
          background: ${continent.color};
          border: 3px solid #2C1810;
          border-radius: ${borderRadius};
          ${clipPath ? `clip-path: ${clipPath};` : ''}
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
          color: #1a1a1a;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.3),
            inset 0 2px 4px rgba(255,255,255,0.4),
            inset 0 -2px 4px rgba(0,0,0,0.2),
            3px 3px 8px rgba(0,0,0,0.3);
          text-shadow: 
            1px 1px 2px rgba(255,255,255,0.8),
            -1px -1px 1px rgba(0,0,0,0.3);
          z-index: 2;
          border-style: solid;
        `;
       
         territoryDiv.textContent = territory.name;
         territoryDiv.title = `${territory.name} (${continentName})`;
         
         // Add hover effects
         territoryDiv.addEventListener('mouseenter', () => {
           territoryDiv.style.transform = 'scale(1.05)';
           territoryDiv.style.zIndex = '10';
           territoryDiv.style.boxShadow = `
             0 0 0 2px rgba(255,255,255,0.8),
             inset 0 2px 4px rgba(255,255,255,0.6),
             inset 0 -2px 4px rgba(0,0,0,0.3),
             4px 4px 12px rgba(0,0,0,0.4)`;
           territoryDiv.style.borderColor = '#1a1a1a';
           territoryDiv.style.borderWidth = '4px';
         });
         
         territoryDiv.addEventListener('mouseleave', () => {
           territoryDiv.style.transform = 'scale(1)';
           territoryDiv.style.zIndex = '2';
           territoryDiv.style.boxShadow = `
             0 0 0 1px rgba(255,255,255,0.3),
             inset 0 2px 4px rgba(255,255,255,0.4),
             inset 0 -2px 4px rgba(0,0,0,0.2),
             3px 3px 8px rgba(0,0,0,0.3)`;
           territoryDiv.style.borderColor = '#2C1810';
           territoryDiv.style.borderWidth = '3px';
         });
         
         container.appendChild(territoryDiv);
       }
    });
  });

  // Add continent legend
  const legend = document.createElement('div');
  legend.style.cssText = `
    position: absolute;
    bottom: 15px;
    left: 15px;
    background: rgba(244, 228, 188, 0.95);
    padding: 18px;
    border-radius: 15px;
    border: 4px double #8B4513;
    font-size: 12px;
    box-shadow: 
      0 6px 12px rgba(0,0,0,0.3),
      inset 0 1px 3px rgba(255,255,255,0.3);
    z-index: 5;
  `;
  
  const legendTitle = document.createElement('div');
  legendTitle.textContent = 'Continents:';
  legendTitle.style.cssText = `
    font-weight: bold;
    margin-bottom: 10px;
    color: #8B4513;
    text-shadow: 1px 1px 2px rgba(255,255,255,0.8);
    border-bottom: 2px solid #8B4513;
    padding-bottom: 5px;
  `;
  legend.appendChild(legendTitle);
  
  Object.entries(continents).forEach(([name, continent]) => {
    const legendItem = document.createElement('div');
    legendItem.style.cssText = `
      display: flex;
      align-items: center;
      margin: 6px 0;
    `;
    
    const colorBox = document.createElement('div');
    colorBox.style.cssText = `
      width: 24px;
      height: 18px;
      background: ${continent.color};
      border: 3px double #2C1810;
      margin-right: 10px;
      border-radius: 5px;
      box-shadow: 
        inset 0 1px 2px rgba(255,255,255,0.4),
        inset 0 -1px 2px rgba(0,0,0,0.2);
    `;
    
    const nameSpan = document.createElement('span');
    nameSpan.textContent = name;
    nameSpan.style.cssText = `
      color: #2c3e50;
      text-shadow: 1px 1px 1px rgba(255,255,255,0.8);
      font-weight: 600;
    `;
    
    legendItem.appendChild(colorBox);
    legendItem.appendChild(nameSpan);
    legend.appendChild(legendItem);
  });
  
  container.appendChild(legend);

  // Add army counter display
  const armyDisplay = document.createElement('div');
  armyDisplay.style.cssText = `
    position: absolute;
    bottom: 15px;
    right: 15px;
    background: rgba(244, 228, 188, 0.95);
    padding: 18px;
    border-radius: 15px;
    border: 4px double #8B4513;
    font-size: 12px;
    box-shadow: 
      0 6px 12px rgba(0,0,0,0.3),
      inset 0 1px 3px rgba(255,255,255,0.3);
    z-index: 5;
  `;
  
  armyDisplay.innerHTML = `
    <div style="font-weight: bold; margin-bottom: 8px; color: #8B4513; text-shadow: 1px 1px 2px rgba(255,255,255,0.8); border-bottom: 2px solid #8B4513; padding-bottom: 5px;">Game Info:</div>
    <div style="color: #2c3e50; margin: 4px 0; text-shadow: 1px 1px 1px rgba(255,255,255,0.8);">Click territories to select</div>
    <div style="color: #2c3e50; margin: 4px 0; text-shadow: 1px 1px 1px rgba(255,255,255,0.8);">Hover for continent info</div>
    <div style="color: #2c3e50; margin: 4px 0; text-shadow: 1px 1px 1px rgba(255,255,255,0.8);">Total Territories: ${Object.values(continents).reduce((sum, continent) => sum + continent.territories.length, 0)}</div>
  `;
  
  container.appendChild(armyDisplay);

  return container;
}

// Function to render the board
function renderRiskBoard() {
  // Clear existing board if any
  const existingBoard = document.getElementById('risk-board');
  if (existingBoard) {
    existingBoard.remove();
  }
  
  const board = createRiskBoard();
  board.id = 'risk-board';
  document.body.appendChild(board);
}

// Auto-render when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderRiskBoard);
} else {
  renderRiskBoard();
}