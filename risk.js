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
      { name: "North Africa", x: 420, y: 320, width: 180, height: 60, borderRadius: "30px 30px 0px 0px", clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)" },
      { name: "Egypt", x: 600, y: 320, width: 50, height: 80, borderRadius: "0px 25px 15px 0px", clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 60% 100%, 0% 85%)" },
      { name: "East Africa", x: 580, y: 400, width: 70, height: 100, borderRadius: "0px 20px 20px 0px", clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 20%)" },
      { name: "Congo", x: 450, y: 380, width: 130, height: 120, borderRadius: "0px 0px 0px 20px", clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 30% 100%, 0% 80%)" },
      { name: "South Africa", x: 470, y: 500, width: 110, height: 80, borderRadius: "0px 0px 35px 35px", clipPath: "polygon(25% 0%, 100% 0%, 80% 100%, 0% 100%)" },
      { name: "Madagascar", x: 680, y: 520, width: 20, height: 60, borderRadius: "10px" }
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