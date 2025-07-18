// Risk Board Game - Styled like a colorful world map

// Define continents with their colors and territories
const continents = {
  "North America": {
    color: "#D4B08A", // Light brown
    territories: [
      { name: "Alaska", x: 50, y: 120, width: 80, height: 60 },
      { name: "Northwest Territory", x: 140, y: 80, width: 120, height: 70 },
      { name: "Greenland", x: 300, y: 60, width: 100, height: 80 },
      { name: "Alberta", x: 130, y: 150, width: 90, height: 60 },
      { name: "Ontario", x: 220, y: 140, width: 80, height: 70 },
      { name: "Quebec", x: 300, y: 150, width: 70, height: 60 },
      { name: "Western United States", x: 120, y: 220, width: 100, height: 70 },
      { name: "Eastern United States", x: 230, y: 220, width: 100, height: 70 },
      { name: "Central America", x: 150, y: 300, width: 80, height: 50 }
    ]
  },
  "South America": {
    color: "#F4E4A6", // Light yellow
    territories: [
      { name: "Venezuela", x: 200, y: 360, width: 80, height: 60 },
      { name: "Brazil", x: 250, y: 420, width: 120, height: 100 },
      { name: "Peru", x: 180, y: 450, width: 70, height: 80 },
      { name: "Argentina", x: 200, y: 530, width: 90, height: 100 }
    ]
  },
  "Europe": {
    color: "#A8C8EC", // Light blue
    territories: [
      { name: "Iceland", x: 380, y: 100, width: 60, height: 50 },
      { name: "Great Britain", x: 420, y: 150, width: 70, height: 60 },
      { name: "Scandinavia", x: 480, y: 100, width: 80, height: 70 },
      { name: "Northern Europe", x: 470, y: 180, width: 90, height: 60 },
      { name: "Western Europe", x: 400, y: 220, width: 80, height: 70 },
      { name: "Southern Europe", x: 480, y: 250, width: 100, height: 60 },
      { name: "Ukraine", x: 550, y: 150, width: 100, height: 80 }
    ]
  },
  "Asia": {
    color: "#C8E6C9", // Light green
    territories: [
      { name: "Ural", x: 620, y: 120, width: 80, height: 70 },
      { name: "Siberia", x: 680, y: 80, width: 120, height: 90 },
      { name: "Yakutsk", x: 800, y: 90, width: 90, height: 70 },
      { name: "Kamchatka", x: 880, y: 100, width: 80, height: 80 },
      { name: "Irkutsk", x: 750, y: 170, width: 80, height: 60 },
      { name: "Mongolia", x: 780, y: 240, width: 90, height: 60 },
      { name: "Afghanistan", x: 600, y: 220, width: 80, height: 70 },
      { name: "China", x: 780, y: 300, width: 100, height: 80 },
      { name: "Middle East", x: 550, y: 280, width: 90, height: 70 },
      { name: "India", x: 680, y: 340, width: 80, height: 80 },
      { name: "Siam", x: 780, y: 380, width: 70, height: 60 },
      { name: "Japan", x: 900, y: 280, width: 60, height: 70 }
    ]
  },
  "Africa": {
    color: "#DDBF8C", // Sandy brown
    territories: [
      { name: "Egypt", x: 520, y: 320, width: 70, height: 60 },
      { name: "East Africa", x: 580, y: 380, width: 80, height: 90 },
      { name: "North Africa", x: 420, y: 340, width: 100, height: 70 },
      { name: "Congo", x: 500, y: 450, width: 80, height: 80 },
      { name: "South Africa", x: 520, y: 530, width: 90, height: 70 },
      { name: "Madagascar", x: 620, y: 550, width: 50, height: 60 }
    ]
  },
  "Australia": {
    color: "#E1BEE7", // Light purple
    territories: [
      { name: "Indonesia", x: 820, y: 450, width: 80, height: 60 },
      { name: "New Guinea", x: 900, y: 460, width: 70, height: 50 },
      { name: "Western Australia", x: 820, y: 520, width: 90, height: 80 },
      { name: "Eastern Australia", x: 910, y: 530, width: 90, height: 70 }
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
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border: 3px solid #8B4513;
    border-radius: 15px;
    position: relative;
    margin: 20px auto;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    font-family: 'Georgia', serif;
    overflow: hidden;
  `;

  // Add title
  const title = document.createElement('div');
  title.textContent = 'RISK: The Game of Global Domination';
  title.style.cssText = `
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    font-weight: bold;
    color: #8B4513;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  `;
  container.appendChild(title);

  // Create territories for each continent
  Object.entries(continents).forEach(([continentName, continent]) => {
    continent.territories.forEach(territory => {
      const territoryDiv = document.createElement('div');
      territoryDiv.style.cssText = `
        position: absolute;
        left: ${territory.x}px;
        top: ${territory.y}px;
        width: ${territory.width}px;
        height: ${territory.height}px;
        background: ${continent.color};
        border: 2px solid #654321;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        font-weight: bold;
        color: #2c3e50;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
        text-shadow: 1px 1px 2px rgba(255,255,255,0.8);
      `;
      
      territoryDiv.textContent = territory.name;
      territoryDiv.title = `${territory.name} (${continentName})`;
      
      // Add hover effects
      territoryDiv.addEventListener('mouseenter', () => {
        territoryDiv.style.transform = 'scale(1.05)';
        territoryDiv.style.zIndex = '10';
        territoryDiv.style.boxShadow = '4px 4px 12px rgba(0,0,0,0.4)';
      });
      
      territoryDiv.addEventListener('mouseleave', () => {
        territoryDiv.style.transform = 'scale(1)';
        territoryDiv.style.zIndex = '1';
        territoryDiv.style.boxShadow = '2px 2px 6px rgba(0,0,0,0.2)';
      });
      
      container.appendChild(territoryDiv);
    });
  });

  // Add continent legend
  const legend = document.createElement('div');
  legend.style.cssText = `
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(255,255,255,0.9);
    padding: 15px;
    border-radius: 10px;
    border: 2px solid #8B4513;
    font-size: 12px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  `;
  
  const legendTitle = document.createElement('div');
  legendTitle.textContent = 'Continents:';
  legendTitle.style.cssText = `
    font-weight: bold;
    margin-bottom: 8px;
    color: #8B4513;
  `;
  legend.appendChild(legendTitle);
  
  Object.entries(continents).forEach(([name, continent]) => {
    const legendItem = document.createElement('div');
    legendItem.style.cssText = `
      display: flex;
      align-items: center;
      margin: 4px 0;
    `;
    
    const colorBox = document.createElement('div');
    colorBox.style.cssText = `
      width: 20px;
      height: 15px;
      background: ${continent.color};
      border: 1px solid #654321;
      margin-right: 8px;
      border-radius: 3px;
    `;
    
    const nameSpan = document.createElement('span');
    nameSpan.textContent = name;
    nameSpan.style.color = '#2c3e50';
    
    legendItem.appendChild(colorBox);
    legendItem.appendChild(nameSpan);
    legend.appendChild(legendItem);
  });
  
  container.appendChild(legend);

  // Add army counter display
  const armyDisplay = document.createElement('div');
  armyDisplay.style.cssText = `
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: rgba(255,255,255,0.9);
    padding: 15px;
    border-radius: 10px;
    border: 2px solid #8B4513;
    font-size: 12px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  `;
  
  armyDisplay.innerHTML = `
    <div style="font-weight: bold; margin-bottom: 8px; color: #8B4513;">Game Info:</div>
    <div style="color: #2c3e50;">Click territories to select</div>
    <div style="color: #2c3e50;">Hover for continent info</div>
    <div style="color: #2c3e50;">Total Territories: ${Object.values(continents).reduce((sum, continent) => sum + continent.territories.length, 0)}</div>
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
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderRiskBoard);
  } else {
    renderRiskBoard();
  }
}

// Export for use in other modules
export { continents, territoryConnections, renderRiskBoard };





