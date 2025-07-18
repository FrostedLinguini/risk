// Risk Board Game - Complete Implementation

class RiskGame {
    constructor() {
        this.territories = this.initializeTerritories();
        this.players = [];
        this.currentPlayerIndex = 0;
        this.gamePhase = 'setup'; // setup, reinforcement, attack, fortify
        this.selectedTerritory = null;
        this.attackingTerritory = null;
        this.defendingTerritory = null;
        this.gameLog = [];
        
        this.initializeEventListeners();
        this.showSetupModal();
    }

    initializeTerritories() {
        return [
            // North America
            { id: 'alaska', name: 'Alaska', continent: 'North America', armies: 1, owner: null, 
              neighbors: ['northwest-territory', 'alberta', 'kamchatka'], position: [0, 0] },
            { id: 'northwest-territory', name: 'NW Territory', continent: 'North America', armies: 1, owner: null,
              neighbors: ['alaska', 'alberta', 'ontario', 'greenland'], position: [1, 0] },
            { id: 'greenland', name: 'Greenland', continent: 'North America', armies: 1, owner: null,
              neighbors: ['northwest-territory', 'ontario', 'quebec', 'iceland'], position: [2, 0] },
            { id: 'alberta', name: 'Alberta', continent: 'North America', armies: 1, owner: null,
              neighbors: ['alaska', 'northwest-territory', 'ontario', 'western-us'], position: [0, 1] },
            { id: 'ontario', name: 'Ontario', continent: 'North America', armies: 1, owner: null,
              neighbors: ['northwest-territory', 'alberta', 'western-us', 'eastern-us', 'quebec', 'greenland'], position: [1, 1] },
            { id: 'quebec', name: 'Quebec', continent: 'North America', armies: 1, owner: null,
              neighbors: ['ontario', 'eastern-us', 'greenland'], position: [2, 1] },
            { id: 'western-us', name: 'Western US', continent: 'North America', armies: 1, owner: null,
              neighbors: ['alberta', 'ontario', 'eastern-us', 'central-america'], position: [0, 2] },
            { id: 'eastern-us', name: 'Eastern US', continent: 'North America', armies: 1, owner: null,
              neighbors: ['western-us', 'ontario', 'quebec', 'central-america'], position: [1, 2] },
            { id: 'central-america', name: 'C. America', continent: 'North America', armies: 1, owner: null,
              neighbors: ['western-us', 'eastern-us', 'venezuela'], position: [0, 3] },

            // South America
            { id: 'venezuela', name: 'Venezuela', continent: 'South America', armies: 1, owner: null,
              neighbors: ['central-america', 'guyana', 'brazil'], position: [1, 3] },
            { id: 'guyana', name: 'Guyana', continent: 'South America', armies: 1, owner: null,
              neighbors: ['venezuela', 'brazil'], position: [2, 3] },
            { id: 'brazil', name: 'Brazil', continent: 'South America', armies: 1, owner: null,
              neighbors: ['venezuela', 'guyana', 'peru', 'argentina', 'north-africa'], position: [1, 4] },
            { id: 'peru', name: 'Peru', continent: 'South America', armies: 1, owner: null,
              neighbors: ['brazil', 'argentina'], position: [0, 4] },
            { id: 'argentina', name: 'Argentina', continent: 'South America', armies: 1, owner: null,
              neighbors: ['peru', 'brazil'], position: [0, 5] },

            // Europe
            { id: 'iceland', name: 'Iceland', continent: 'Europe', armies: 1, owner: null,
              neighbors: ['greenland', 'great-britain', 'scandinavia'], position: [3, 0] },
            { id: 'great-britain', name: 'Britain', continent: 'Europe', armies: 1, owner: null,
              neighbors: ['iceland', 'scandinavia', 'northern-europe', 'western-europe'], position: [3, 1] },
            { id: 'scandinavia', name: 'Scandinavia', continent: 'Europe', armies: 1, owner: null,
              neighbors: ['iceland', 'great-britain', 'northern-europe', 'ukraine'], position: [4, 0] },
            { id: 'ukraine', name: 'Ukraine', continent: 'Europe', armies: 1, owner: null,
              neighbors: ['scandinavia', 'northern-europe', 'southern-europe', 'ural', 'afghanistan', 'middle-east'], position: [5, 0] },
            { id: 'northern-europe', name: 'N. Europe', continent: 'Europe', armies: 1, owner: null,
              neighbors: ['great-britain', 'scandinavia', 'ukraine', 'southern-europe', 'western-europe'], position: [4, 1] },
            { id: 'western-europe', name: 'W. Europe', continent: 'Europe', armies: 1, owner: null,
              neighbors: ['great-britain', 'northern-europe', 'southern-europe', 'north-africa'], position: [3, 2] },
            { id: 'southern-europe', name: 'S. Europe', continent: 'Europe', armies: 1, owner: null,
              neighbors: ['western-europe', 'northern-europe', 'ukraine', 'middle-east', 'egypt', 'north-africa'], position: [4, 2] },

            // Africa
            { id: 'north-africa', name: 'N. Africa', continent: 'Africa', armies: 1, owner: null,
              neighbors: ['brazil', 'western-europe', 'southern-europe', 'egypt', 'east-africa', 'congo'], position: [3, 3] },
            { id: 'egypt', name: 'Egypt', continent: 'Africa', armies: 1, owner: null,
              neighbors: ['southern-europe', 'middle-east', 'north-africa', 'east-africa'], position: [4, 3] },
            { id: 'congo', name: 'Congo', continent: 'Africa', armies: 1, owner: null,
              neighbors: ['north-africa', 'east-africa', 'south-africa'], position: [3, 4] },
            { id: 'east-africa', name: 'E. Africa', continent: 'Africa', armies: 1, owner: null,
              neighbors: ['egypt', 'middle-east', 'north-africa', 'congo', 'south-africa', 'madagascar'], position: [4, 4] },
            { id: 'south-africa', name: 'S. Africa', continent: 'Africa', armies: 1, owner: null,
              neighbors: ['congo', 'east-africa', 'madagascar'], position: [3, 5] },
            { id: 'madagascar', name: 'Madagascar', continent: 'Africa', armies: 1, owner: null,
              neighbors: ['east-africa', 'south-africa'], position: [4, 5] },

            // Asia
            { id: 'ural', name: 'Ural', continent: 'Asia', armies: 1, owner: null,
              neighbors: ['ukraine', 'afghanistan', 'china', 'siberia'], position: [5, 1] },
            { id: 'siberia', name: 'Siberia', continent: 'Asia', armies: 1, owner: null,
              neighbors: ['ural', 'yakutsk', 'irkutsk', 'mongolia', 'china'], position: [6, 0] },
            { id: 'yakutsk', name: 'Yakutsk', continent: 'Asia', armies: 1, owner: null,
              neighbors: ['siberia', 'kamchatka', 'irkutsk'], position: [7, 0] },
            { id: 'kamchatka', name: 'Kamchatka', continent: 'Asia', armies: 1, owner: null,
              neighbors: ['yakutsk', 'irkutsk', 'mongolia', 'japan', 'alaska'], position: [7, 1] },
            { id: 'irkutsk', name: 'Irkutsk', continent: 'Asia', armies: 1, owner: null,
              neighbors: ['siberia', 'yakutsk', 'kamchatka', 'mongolia'], position: [6, 1] },
            { id: 'mongolia', name: 'Mongolia', continent: 'Asia', armies: 1, owner: null,
              neighbors: ['siberia', 'irkutsk', 'kamchatka', 'japan', 'china'], position: [6, 2] },
            { id: 'japan', name: 'Japan', continent: 'Asia', armies: 1, owner: null,
              neighbors: ['kamchatka', 'mongolia'], position: [7, 2] },
            { id: 'afghanistan', name: 'Afghanistan', continent: 'Asia', armies: 1, owner: null,
              neighbors: ['ukraine', 'ural', 'china', 'india', 'middle-east'], position: [5, 2] },
            { id: 'china', name: 'China', continent: 'Asia', armies: 1, owner: null,
              neighbors: ['ural', 'siberia', 'mongolia', 'afghanistan', 'india', 'siam'], position: [6, 3] },
            { id: 'middle-east', name: 'Middle East', continent: 'Asia', armies: 1, owner: null,
              neighbors: ['ukraine', 'afghanistan', 'india', 'southern-europe', 'egypt', 'east-africa'], position: [5, 3] },
            { id: 'india', name: 'India', continent: 'Asia', armies: 1, owner: null,
              neighbors: ['middle-east', 'afghanistan', 'china', 'siam'], position: [5, 4] },
            { id: 'siam', name: 'Siam', continent: 'Asia', armies: 1, owner: null,
              neighbors: ['india', 'china', 'indonesia'], position: [6, 4] },

            // Australia
            { id: 'indonesia', name: 'Indonesia', continent: 'Australia', armies: 1, owner: null,
              neighbors: ['siam', 'new-guinea', 'western-australia'], position: [6, 5] },
            { id: 'new-guinea', name: 'New Guinea', continent: 'Australia', armies: 1, owner: null,
              neighbors: ['indonesia', 'western-australia', 'eastern-australia'], position: [7, 4] },
            { id: 'western-australia', name: 'W. Australia', continent: 'Australia', armies: 1, owner: null,
              neighbors: ['indonesia', 'new-guinea', 'eastern-australia'], position: [7, 5] },
            { id: 'eastern-australia', name: 'E. Australia', continent: 'Australia', armies: 1, owner: null,
              neighbors: ['new-guinea', 'western-australia'], position: [7, 3] },
        ];
    }

    initializeEventListeners() {
        // Modal controls
        document.getElementById('new-game-btn').addEventListener('click', () => this.showSetupModal());
        document.getElementById('rules-btn').addEventListener('click', () => this.showRulesModal());
        document.querySelector('#rules-modal .close').addEventListener('click', () => this.hideRulesModal());
        document.getElementById('start-game-btn').addEventListener('click', () => this.startGame());
        document.getElementById('cancel-setup-btn').addEventListener('click', () => this.hideSetupModal());
        document.getElementById('player-count').addEventListener('change', () => this.updatePlayerNameInputs());

        // Game controls
        document.getElementById('reinforce-btn').addEventListener('click', () => this.setGamePhase('reinforcement'));
        document.getElementById('attack-btn').addEventListener('click', () => this.setGamePhase('attack'));
        document.getElementById('fortify-btn').addEventListener('click', () => this.setGamePhase('fortify'));
        document.getElementById('end-turn-btn').addEventListener('click', () => this.endTurn());

        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.hideRulesModal();
                this.hideSetupModal();
            }
        });
    }

    showSetupModal() {
        document.getElementById('setup-modal').style.display = 'block';
        this.updatePlayerNameInputs();
    }

    hideSetupModal() {
        document.getElementById('setup-modal').style.display = 'none';
    }

    showRulesModal() {
        document.getElementById('rules-modal').style.display = 'block';
    }

    hideRulesModal() {
        document.getElementById('rules-modal').style.display = 'none';
    }

    updatePlayerNameInputs() {
        const playerCount = parseInt(document.getElementById('player-count').value);
        const playerNamesDiv = document.getElementById('player-names');
        playerNamesDiv.innerHTML = '';

        for (let i = 1; i <= playerCount; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'player-name-input';
            input.placeholder = `Player ${i} Name`;
            input.value = `Player ${i}`;
            playerNamesDiv.appendChild(input);
        }
    }

    startGame() {
        const playerInputs = document.querySelectorAll('.player-name-input');
        this.players = Array.from(playerInputs).map((input, index) => ({
            id: index + 1,
            name: input.value || `Player ${index + 1}`,
            color: `player-${index + 1}`,
            territories: [],
            armies: 0,
            reinforcements: 0
        }));

        this.hideSetupModal();
        this.distributeInitialTerritories();
        this.placeInitialArmies();
        this.renderBoard();
        this.updateUI();
        this.setGamePhase('reinforcement');
        this.addToLog('Game started! Territory distribution complete.');
    }

    distributeInitialTerritories() {
        const shuffledTerritories = [...this.territories].sort(() => Math.random() - 0.5);
        const territoriesPerPlayer = Math.floor(shuffledTerritories.length / this.players.length);
        
        let territoryIndex = 0;
        this.players.forEach((player, playerIndex) => {
            for (let i = 0; i < territoriesPerPlayer; i++) {
                if (territoryIndex < shuffledTerritories.length) {
                    const territory = shuffledTerritories[territoryIndex];
                    territory.owner = player.id;
                    player.territories.push(territory.id);
                    territoryIndex++;
                }
            }
        });

        // Distribute remaining territories
        while (territoryIndex < shuffledTerritories.length) {
            const player = this.players[territoryIndex % this.players.length];
            const territory = shuffledTerritories[territoryIndex];
            territory.owner = player.id;
            player.territories.push(territory.id);
            territoryIndex++;
        }
    }

    placeInitialArmies() {
        const initialArmies = this.getInitialArmies(this.players.length);
        this.players.forEach(player => {
            player.armies = initialArmies;
            // Place one army on each territory
            player.territories.forEach(territoryId => {
                const territory = this.territories.find(t => t.id === territoryId);
                territory.armies = 1;
                player.armies--;
            });
        });
    }

    getInitialArmies(playerCount) {
        const armiesMap = {
            2: 40,
            3: 35,
            4: 30,
            5: 25,
            6: 20
        };
        return armiesMap[playerCount] || 20;
    }

    renderBoard() {
        const board = document.getElementById('game-board');
        board.innerHTML = '';

        // Create grid of territories
        this.territories.forEach(territory => {
            const territoryDiv = document.createElement('div');
            territoryDiv.className = 'territory';
            territoryDiv.dataset.territoryId = territory.id;
            territoryDiv.style.gridColumn = territory.position[0] + 1;
            territoryDiv.style.gridRow = territory.position[1] + 1;

            if (territory.owner) {
                const player = this.players.find(p => p.id === territory.owner);
                territoryDiv.classList.add(player.color);
            }

            territoryDiv.innerHTML = `
                <div class="territory-name">${territory.name}</div>
                <div class="territory-armies">${territory.armies}</div>
            `;

            territoryDiv.addEventListener('click', () => this.handleTerritoryClick(territory));
            board.appendChild(territoryDiv);
        });
    }

    handleTerritoryClick(territory) {
        const currentPlayer = this.players[this.currentPlayerIndex];

        switch (this.gamePhase) {
            case 'reinforcement':
                if (territory.owner === currentPlayer.id && currentPlayer.reinforcements > 0) {
                    territory.armies++;
                    currentPlayer.reinforcements--;
                    this.addToLog(`${currentPlayer.name} reinforced ${territory.name}`);
                    this.renderBoard();
                    this.updateUI();
                }
                break;

            case 'attack':
                if (territory.owner === currentPlayer.id && territory.armies > 1) {
                    this.selectAttackingTerritory(territory);
                } else if (this.attackingTerritory && territory.owner !== currentPlayer.id && 
                          this.areNeighbors(this.attackingTerritory.id, territory.id)) {
                    this.selectDefendingTerritory(territory);
                    this.performBattle();
                }
                break;

            case 'fortify':
                if (territory.owner === currentPlayer.id) {
                    if (!this.selectedTerritory) {
                        this.selectedTerritory = territory;
                    } else if (this.selectedTerritory !== territory && 
                              this.areConnected(this.selectedTerritory.id, territory.id, currentPlayer.id)) {
                        this.performFortification(this.selectedTerritory, territory);
                        this.selectedTerritory = null;
                    } else {
                        this.selectedTerritory = territory;
                    }
                }
                break;
        }

        this.updateTerritorySelection();
    }

    selectAttackingTerritory(territory) {
        this.attackingTerritory = territory;
        this.defendingTerritory = null;
        this.addToLog(`Selected ${territory.name} for attack`);
    }

    selectDefendingTerritory(territory) {
        this.defendingTerritory = territory;
    }

    performBattle() {
        if (!this.attackingTerritory || !this.defendingTerritory) return;

        const attacker = this.players.find(p => p.id === this.attackingTerritory.owner);
        const defender = this.players.find(p => p.id === this.defendingTerritory.owner);

        const attackDice = Math.min(3, this.attackingTerritory.armies - 1);
        const defendDice = Math.min(2, this.defendingTerritory.armies);

        const attackRolls = this.rollDice(attackDice).sort((a, b) => b - a);
        const defendRolls = this.rollDice(defendDice).sort((a, b) => b - a);

        let attackerLosses = 0;
        let defenderLosses = 0;

        // Compare dice
        for (let i = 0; i < Math.min(attackRolls.length, defendRolls.length); i++) {
            if (attackRolls[i] > defendRolls[i]) {
                defenderLosses++;
            } else {
                attackerLosses++;
            }
        }

        this.attackingTerritory.armies -= attackerLosses;
        this.defendingTerritory.armies -= defenderLosses;

        this.addToLog(`Battle: ${attacker.name} vs ${defender.name} - Attacker lost ${attackerLosses}, Defender lost ${defenderLosses}`);

        // Check if territory is conquered
        if (this.defendingTerritory.armies === 0) {
            this.conquerTerritory();
        }

        this.renderBoard();
        this.updateUI();
        this.resetBattleSelection();
    }

    conquerTerritory() {
        const attacker = this.players.find(p => p.id === this.attackingTerritory.owner);
        const defender = this.players.find(p => p.id === this.defendingTerritory.owner);

        // Remove territory from defender
        defender.territories = defender.territories.filter(t => t !== this.defendingTerritory.id);

        // Add territory to attacker
        this.defendingTerritory.owner = attacker.id;
        attacker.territories.push(this.defendingTerritory.id);

        // Move armies
        const armiesToMove = Math.min(3, this.attackingTerritory.armies - 1);
        this.defendingTerritory.armies = armiesToMove;
        this.attackingTerritory.armies -= armiesToMove;

        this.addToLog(`${attacker.name} conquered ${this.defendingTerritory.name}!`);

        // Check for player elimination
        if (defender.territories.length === 0) {
            this.eliminatePlayer(defender);
        }

        // Check for game victory
        if (attacker.territories.length === this.territories.length) {
            this.endGame(attacker);
        }
    }

    rollDice(count) {
        return Array.from({ length: count }, () => Math.floor(Math.random() * 6) + 1);
    }

    areNeighbors(territory1Id, territory2Id) {
        const territory1 = this.territories.find(t => t.id === territory1Id);
        return territory1.neighbors.includes(territory2Id);
    }

    areConnected(territory1Id, territory2Id, playerId) {
        // Simple path finding - check if territories are connected through player's territories
        const visited = new Set();
        const queue = [territory1Id];

        while (queue.length > 0) {
            const currentId = queue.shift();
            if (currentId === territory2Id) return true;
            if (visited.has(currentId)) continue;

            visited.add(currentId);
            const territory = this.territories.find(t => t.id === currentId);
            
            territory.neighbors.forEach(neighborId => {
                const neighbor = this.territories.find(t => t.id === neighborId);
                if (neighbor.owner === playerId && !visited.has(neighborId)) {
                    queue.push(neighborId);
                }
            });
        }

        return false;
    }

    performFortification(from, to) {
        if (from.armies <= 1) return;

        const armiesToMove = Math.floor(from.armies / 2);
        from.armies -= armiesToMove;
        to.armies += armiesToMove;

        this.addToLog(`${this.players[this.currentPlayerIndex].name} moved ${armiesToMove} armies from ${from.name} to ${to.name}`);
        this.renderBoard();
        this.updateUI();
    }

    setGamePhase(phase) {
        this.gamePhase = phase;
        this.resetSelections();

        if (phase === 'reinforcement') {
            this.calculateReinforcements();
        }

        this.updateUI();
        this.addToLog(`${this.players[this.currentPlayerIndex].name} entered ${phase} phase`);
    }

    calculateReinforcements() {
        const currentPlayer = this.players[this.currentPlayerIndex];
        let reinforcements = Math.floor(currentPlayer.territories.length / 3);
        reinforcements = Math.max(reinforcements, 3); // Minimum 3 reinforcements

        // Add continent bonuses
        const continentBonuses = {
            'North America': 5,
            'South America': 2,
            'Europe': 5,
            'Africa': 3,
            'Asia': 7,
            'Australia': 2
        };

        Object.entries(continentBonuses).forEach(([continent, bonus]) => {
            const continentTerritories = this.territories.filter(t => t.continent === continent);
            const playerContinentTerritories = continentTerritories.filter(t => t.owner === currentPlayer.id);
            
            if (continentTerritories.length === playerContinentTerritories.length) {
                reinforcements += bonus;
                this.addToLog(`${currentPlayer.name} receives ${bonus} bonus armies for controlling ${continent}`);
            }
        });

        currentPlayer.reinforcements = reinforcements;
        this.addToLog(`${currentPlayer.name} receives ${reinforcements} reinforcement armies`);
    }

    endTurn() {
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
        this.setGamePhase('reinforcement');
        this.resetSelections();
        this.updateUI();
    }

    resetSelections() {
        this.selectedTerritory = null;
        this.resetBattleSelection();
        this.updateTerritorySelection();
    }

    resetBattleSelection() {
        this.attackingTerritory = null;
        this.defendingTerritory = null;
    }

    updateTerritorySelection() {
        document.querySelectorAll('.territory').forEach(div => {
            div.classList.remove('selected', 'attacking', 'defending');
        });

        if (this.selectedTerritory) {
            const selectedDiv = document.querySelector(`[data-territory-id="${this.selectedTerritory.id}"]`);
            if (selectedDiv) selectedDiv.classList.add('selected');
        }

        if (this.attackingTerritory) {
            const attackingDiv = document.querySelector(`[data-territory-id="${this.attackingTerritory.id}"]`);
            if (attackingDiv) attackingDiv.classList.add('attacking');
        }

        if (this.defendingTerritory) {
            const defendingDiv = document.querySelector(`[data-territory-id="${this.defendingTerritory.id}"]`);
            if (defendingDiv) defendingDiv.classList.add('defending');
        }
    }

    updateUI() {
        // Update current player display
        document.getElementById('current-player').textContent = this.players[this.currentPlayerIndex].name;

        // Update players list
        const playersList = document.getElementById('players-list');
        playersList.innerHTML = '';
        
        this.players.forEach((player, index) => {
            const playerDiv = document.createElement('div');
            playerDiv.className = `player-item ${index === this.currentPlayerIndex ? 'active' : ''}`;
            playerDiv.innerHTML = `
                <span>${player.name}</span>
                <span>${player.territories.length} territories</span>
            `;
            playersList.appendChild(playerDiv);
        });

        // Update territory info
        const territoryInfo = document.getElementById('selected-territory');
        if (this.selectedTerritory || this.attackingTerritory) {
            const territory = this.selectedTerritory || this.attackingTerritory;
            const owner = this.players.find(p => p.id === territory.owner);
            territoryInfo.innerHTML = `
                <h4>${territory.name}</h4>
                <p>Owner: ${owner ? owner.name : 'None'}</p>
                <p>Armies: ${territory.armies}</p>
                <p>Continent: ${territory.continent}</p>
            `;
        }

        // Update action buttons
        const currentPlayer = this.players[this.currentPlayerIndex];
        document.getElementById('reinforce-btn').disabled = this.gamePhase !== 'reinforcement' || currentPlayer.reinforcements === 0;
        
        // Update phase indicators
        document.querySelectorAll('.btn-action').forEach(btn => {
            btn.classList.remove('active');
        });
        
        if (this.gamePhase === 'reinforcement') {
            document.getElementById('reinforce-btn').classList.add('active');
        } else if (this.gamePhase === 'attack') {
            document.getElementById('attack-btn').classList.add('active');
        } else if (this.gamePhase === 'fortify') {
            document.getElementById('fortify-btn').classList.add('active');
        }
    }

    addToLog(message) {
        this.gameLog.push(message);
        const logContent = document.getElementById('log-content');
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';
        logEntry.textContent = message;
        logContent.appendChild(logEntry);
        logContent.scrollTop = logContent.scrollHeight;
    }

    eliminatePlayer(player) {
        this.addToLog(`${player.name} has been eliminated!`);
        this.players = this.players.filter(p => p.id !== player.id);
        
        // Adjust current player index if necessary
        if (this.currentPlayerIndex >= this.players.length) {
            this.currentPlayerIndex = 0;
        }
    }

    endGame(winner) {
        this.addToLog(`🎉 ${winner.name} wins the game! 🎉`);
        alert(`Congratulations ${winner.name}! You have conquered the world!`);
        this.gamePhase = 'ended';
        this.updateUI();
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.riskGame = new RiskGame();
});