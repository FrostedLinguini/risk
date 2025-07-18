# 🎲 Risk Board Game

A fully functional, modern web-based implementation of the classic Risk board game with beautiful UI and complete game mechanics.

## 🌟 Features

- **Complete Risk Game Implementation**: All 42 territories from the classic Risk board
- **2-6 Player Support**: Play with friends or family
- **Full Game Mechanics**: 
  - Territory distribution and initial army placement
  - Reinforcement phase with continent bonuses
  - Attack phase with dice rolling combat
  - Fortification phase for strategic positioning
- **Beautiful Modern UI**: 
  - Responsive design that works on desktop and mobile
  - Smooth animations and hover effects
  - Color-coded territories for each player
  - Real-time game log and status updates
- **Interactive Game Board**: Click-based territory selection and actions
- **Complete Rules**: Built-in rules modal for easy reference

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required!

### Running the Game
1. Open the `index.html` file in your web browser
2. Click "New Game" to start
3. Choose the number of players (2-6)
4. Enter player names
5. Click "Start Game" and begin playing!

## 🎮 How to Play

### Game Setup
1. **Player Setup**: Choose 2-6 players and enter their names
2. **Territory Distribution**: Territories are randomly distributed among players
3. **Initial Armies**: Each player receives initial armies based on player count:
   - 2 players: 40 armies each
   - 3 players: 35 armies each
   - 4 players: 30 armies each
   - 5 players: 25 armies each
   - 6 players: 20 armies each

### Turn Structure
Each player's turn consists of three phases:

#### 1. Reinforcement Phase 🛡️
- Receive new armies based on:
  - Number of territories owned (territories ÷ 3, minimum 3)
  - Continent bonuses:
    - **North America**: 5 armies
    - **South America**: 2 armies
    - **Europe**: 5 armies
    - **Africa**: 3 armies
    - **Asia**: 7 armies
    - **Australia**: 2 armies
- Click on your territories to place reinforcement armies

#### 2. Attack Phase ⚔️
- Click on one of your territories with 2+ armies to select it for attack
- Click on an adjacent enemy territory to attack it
- Combat is resolved automatically with dice rolls:
  - Attacker rolls up to 3 dice (based on armies available)
  - Defender rolls up to 2 dice (based on armies available)
  - Highest dice are compared; loser removes armies
- Conquer territories by eliminating all defending armies
- Move armies into conquered territories

#### 3. Fortify Phase 🚚
- Move armies between connected territories you control
- Click source territory, then destination territory
- Helps strengthen defensive positions and prepare for future attacks

### Winning the Game 🏆
- **Victory Condition**: Eliminate all other players by conquering all their territories
- **Player Elimination**: A player is eliminated when they lose all their territories
- **Game End**: Last player remaining wins the game!

## 🎯 Game Controls

### Main Interface
- **New Game**: Start a fresh game with new players
- **Rules**: View complete game rules
- **Current Turn Display**: Shows whose turn it is

### Action Buttons
- **Reinforce**: Enter reinforcement phase
- **Attack**: Enter attack phase  
- **Fortify**: Enter fortify phase
- **End Turn**: Complete your turn and pass to next player

### Territory Interaction
- **Click territories** to select them for various actions
- **Hover effects** show territory details
- **Color coding** indicates which player owns each territory
- **Army counters** show the number of armies on each territory

## 🎨 Visual Features

### Modern Design
- **Gradient backgrounds** with glass-morphism effects
- **Smooth animations** for territory interactions
- **Responsive layout** that adapts to different screen sizes
- **Beautiful typography** with Google Fonts

### Player Colors
- **Player 1**: Red gradient
- **Player 2**: Blue gradient  
- **Player 3**: Green gradient
- **Player 4**: Orange gradient
- **Player 5**: Purple gradient
- **Player 6**: Teal gradient

### Interactive Elements
- **Hover effects** on territories and buttons
- **Selection indicators** for active territories
- **Battle animations** during combat
- **Real-time updates** of game state

## 📱 Responsive Design

The game is fully responsive and works great on:
- **Desktop computers** (optimal experience)
- **Tablets** (touch-friendly interface)
- **Mobile phones** (compact layout)

## 🔧 Technical Details

### Files Structure
- `index.html` - Main game interface
- `styles.css` - Complete styling and responsive design
- `game.js` - Full game logic and mechanics
- `risk.ts` - Legacy TypeScript reference (not used in main game)

### Technologies Used
- **HTML5** for structure
- **CSS3** for styling with modern features
- **Vanilla JavaScript** for game logic
- **CSS Grid** for responsive board layout
- **Flexbox** for component layouts

### Game Architecture
- **Object-oriented design** with RiskGame class
- **Event-driven interface** for user interactions
- **State management** for game phases and player turns
- **Modular code structure** for easy maintenance

## 🎯 Strategy Tips

### Early Game
- **Secure continents** with fewer territories (Australia, South America)
- **Control chokepoints** to limit enemy expansion
- **Build up border defenses** to protect your territories

### Mid Game
- **Expand strategically** into valuable continents
- **Eliminate weak players** to gain their territories
- **Maintain strong defensive positions**

### Late Game
- **Mass armies** for decisive attacks
- **Control multiple continents** for reinforcement advantage
- **Strategic fortification** to maintain control

## 🐛 Known Features
- Complete combat system with proper dice mechanics
- Continent bonus calculations
- Player elimination and victory detection
- Connected territory pathfinding for fortification
- Comprehensive game logging
- Modal-based setup and rules display

## 📄 License

This is a fan-made implementation of the classic Risk board game for educational and entertainment purposes.

---

**Enjoy conquering the world! 🌍**