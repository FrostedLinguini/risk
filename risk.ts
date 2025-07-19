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
        svgPath: "M420,320 L580,320 L590,325 L595,330 L590,335 L580,340 L570,345 L560,350 L550,355 L540,360 L530,365 L520,368 L510,370 L500,372 L490,374 L480,375 L470,376 L460,377 L450,378 L440,379 L430,378 L425,375 L422,370 L420,365 L418,360 L417,355 L416,350 L415,345 L416,340 L418,335 L420,330 Z",
        x: 415, y: 320, width: 180, height: 60
      },
      { 
        name: "Egypt", 
        svgPath: "M580,320 L620,320 L625,322 L630,325 L635,330 L638,335 L640,342 L642,350 L644,358 L645,366 L646,374 L647,382 L648,390 L647,395 L645,398 L642,400 L635,402 L628,403 L620,404 L612,403 L605,402 L598,400 L592,398 L587,395 L583,392 L580,388 L578,384 L577,380 L576,375 L575,370 L576,365 L577,360 L578,355 L579,350 L580,345 L582,340 L585,335 L588,330 L592,325 L580,320 Z",
        x: 575, y: 320, width: 75, height: 85
      },
      { 
        name: "East Africa", 
        svgPath: "M580,400 L650,400 L655,405 L658,412 L660,420 L661,428 L662,436 L663,444 L664,452 L665,460 L666,468 L667,476 L668,484 L669,492 L668,498 L666,504 L663,508 L658,512 L652,515 L645,517 L638,518 L630,519 L622,518 L615,517 L608,515 L602,512 L597,508 L593,504 L590,498 L588,492 L587,486 L586,480 L585,474 L584,468 L583,462 L582,456 L581,450 L580,444 L579,438 L578,432 L577,426 L576,420 L575,414 L576,408 L578,404 L580,400 Z",
        x: 575, y: 400, width: 95, height: 120
      },
      { 
        name: "Congo", 
        svgPath: "M420,375 L575,375 L578,378 L580,382 L582,386 L584,390 L586,395 L588,400 L590,405 L592,410 L594,415 L596,420 L598,425 L600,430 L602,435 L604,440 L606,445 L608,450 L610,455 L612,460 L614,465 L616,470 L618,475 L620,480 L618,485 L615,488 L610,490 L604,492 L597,494 L590,495 L582,496 L574,497 L566,498 L558,499 L550,500 L542,499 L534,498 L526,497 L518,496 L510,495 L502,494 L494,492 L487,490 L481,488 L476,485 L472,480 L469,475 L467,470 L466,465 L465,460 L464,455 L463,450 L462,445 L461,440 L460,435 L459,430 L458,425 L457,420 L456,415 L455,410 L454,405 L453,400 L452,395 L451,390 L450,385 L449,380 L447,377 L444,375 L441,374 L438,373 L435,372 L432,371 L429,370 L426,371 L424,372 L422,373 L420,375 Z",
        x: 420, y: 370, width: 200, height: 130
      },
      { 
        name: "South Africa", 
        svgPath: "M450,500 L620,500 L625,502 L628,505 L630,508 L632,512 L634,516 L636,520 L638,524 L640,528 L642,532 L644,536 L646,540 L648,544 L650,548 L652,552 L654,556 L656,560 L658,564 L660,568 L658,572 L655,575 L650,577 L644,579 L637,580 L630,581 L622,582 L614,581 L606,580 L598,579 L590,577 L582,575 L574,572 L566,568 L558,564 L550,560 L542,556 L534,552 L526,548 L518,544 L510,540 L502,536 L494,532 L486,528 L478,524 L470,520 L462,516 L455,512 L450,508 L447,504 L446,500 L447,496 L450,500 Z",
        x: 445, y: 500, width: 220, height: 85
      },
      { 
        name: "Madagascar", 
        svgPath: "M680,520 L700,520 L702,522 L704,525 L705,528 L706,532 L707,536 L708,540 L709,544 L710,548 L711,552 L712,556 L713,560 L714,564 L715,568 L716,572 L715,576 L714,579 L712,582 L709,584 L705,586 L700,587 L695,586 L691,584 L688,582 L686,579 L685,576 L684,572 L683,568 L682,564 L681,560 L680,556 L679,552 L678,548 L677,544 L676,540 L675,536 L674,532 L675,528 L676,525 L678,522 L680,520 Z",
        x: 674, y: 520, width: 42, height: 68
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
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderRiskBoard);
  } else {
    renderRiskBoard();
  }
}

// Export for use in other modules
export { continents, territoryConnections, renderRiskBoard };





