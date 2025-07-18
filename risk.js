// Simple Risk board representation using ASCII art and JavaScript objects
// Define the territories and their connections
const territories = [
    { name: "Alaska", neighbors: ["Northwest Territory", "Alberta", "Kamchatka"] },
    { name: "Northwest Territory", neighbors: ["Alaska", "Alberta", "Ontario", "Greenland"] },
    { name: "Alberta", neighbors: ["Alaska", "Northwest Territory", "Ontario", "Western United States"] },
    { name: "Ontario", neighbors: ["Northwest Territory", "Greenland", "Quebec", "Eastern United States", "Western United States", "Alberta"] },
    { name: "Greenland", neighbors: ["Northwest Territory", "Ontario", "Quebec", "Iceland"] },
    { name: "Quebec", neighbors: ["Ontario", "Greenland", "Eastern United States"] },
    { name: "Western United States", neighbors: ["Alberta", "Ontario", "Eastern United States", "Central America"] },
    { name: "Eastern United States", neighbors: ["Western United States", "Ontario", "Quebec", "Central America"] },
    { name: "Central America", neighbors: ["Western United States", "Eastern United States", "Venezuela"] },
    // ... (add all other territories as needed)
];
// Simple ASCII map (partial, for demonstration)
const riskBoardAscii = `
         .-------------------.
         |   Greenland       |
         '--------.----------'
                  |
   .--------------+-------------------.
   |  Northwest   |      Ontario      |
   |  Territory   +--------+---------'
   '----+----.----'        |
        |    |             |
   .----'    |        .----+----.
   | Alaska  |        |  Quebec |
   '----+----'        '----+----'
        |                  |
   .----'----.        .----'----.
   | Alberta |        | Eastern |
   '----+----'        |  US     |
        |             '----+----'
   .----'----.             |
   | Western  |       .----'----.
   |   US     |       | Central |
   '----+-----'       | America |
        |             '---------'
`;
// 2D representation of the Risk board
const riskBoard2D = [
    ['', '', '', 'GL', '', '', '', '', ''],
    ['', 'NT', 'ON', 'QU', '', '', '', '', ''],
    ['AK', 'AB', 'WU', 'EU', '', '', '', '', ''],
    ['', '', 'CA', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
];
// Territory legend for abbreviations
const territoryLegend = {
    'AK': 'Alaska',
    'NT': 'Northwest Territory',
    'AB': 'Alberta',
    'ON': 'Ontario',
    'GL': 'Greenland',
    'QU': 'Quebec',
    'WU': 'Western United States',
    'EU': 'Eastern United States',
    'CA': 'Central America',
    '': ''
};
// Function to print the board
function printRiskBoard() {
    console.log(riskBoardAscii);
}
// Example usage
printRiskBoard();
// Rules of Risk (as a string for display)
const riskRules = `
RISK: The Game of Global Domination - Basic Rules

1. Objective:
   - Conquer every territory on the board and eliminate all other players.

2. Setup:
   - Each player selects a color and receives a set of armies.
   - Players take turns claiming territories and placing armies.
   - Shuffle and deal Risk cards if using them.

3. Game Play:
   - Players take turns in clockwise order.
   - On your turn:
     a) Reinforcement: Place new armies based on the number of territories you own, continent bonuses, and Risk card sets.
     b) Attack: You may attack adjacent territories to try to conquer them. Use dice to resolve battles.
     c) Fortify: Move armies between connected territories you control.

4. Attacking:
   - Declare which territory you are attacking from and which you are attacking.
   - Roll dice (up to 3 for attacker, up to 2 for defender).
   - Compare highest dice; loser removes one army per lost die.
   - If attacker eliminates all defenders, they must move at least as many armies as dice rolled into the conquered territory.

5. Risk Cards:
   - If you conquer at least one territory on your turn, draw a Risk card.
   - Trade in sets of cards for extra armies.

6. Winning:
   - The last player remaining after all others are eliminated wins the game.

For full details, consult the official RISK rulebook.
`;
function printRiskRules() {
    console.log(riskRules);
}
// Example usage:
printRiskRules();
// The previous code is for a Node.js/console environment, not a front-end editor.
// If you want a visual board in a front-end (browser) editor, you can use HTML and CSS.
// Here is a simple example using JavaScript to generate a 2D Risk board in the browser:
// Add this function to render the board visually in the browser
function renderRiskBoard2D() {
    // Create a container div
    let container = document.createElement('div');
    container.style.display = 'inline-block';
    container.style.background = 'linear-gradient(135deg, #3a6ea5 0%, #b3cde0 100%)';
    container.style.padding = '24px';
    container.style.borderRadius = '16px';
    container.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)';
    container.style.fontFamily = 'monospace';
    // Create the board as a table
    let table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.background = 'rgba(255,255,255,0.85)';
    table.style.marginBottom = '16px';
    for (let row of riskBoard2D) {
        let tr = document.createElement('tr');
        for (let cell of row) {
            let td = document.createElement('td');
            td.style.width = '60px';
            td.style.height = '36px';
            td.style.textAlign = 'center';
            td.style.verticalAlign = 'middle';
            td.style.border = cell.trim() ? '2px solid #444' : 'none';
            td.style.background = cell.trim() ? '#e0eafc' : 'transparent';
            td.style.color = cell.trim() ? '#222' : 'transparent';
            td.style.fontWeight = 'bold';
            td.style.borderRadius = '6px';
            td.textContent = cell.trim() ? cell : '';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    container.appendChild(table);
    // Add a legend
    let legendTitle = document.createElement('div');
    legendTitle.textContent = 'Legend:';
    legendTitle.style.fontWeight = 'bold';
    legendTitle.style.marginBottom = '4px';
    container.appendChild(legendTitle);
    let legend = document.createElement('div');
    legend.style.fontSize = '13px';
    legend.style.maxWidth = '600px';
    legend.style.display = 'flex';
    legend.style.flexWrap = 'wrap';
    Object.entries(territoryLegend)
        .filter(([abbr]) => abbr.trim())
        .forEach(([abbr, name]) => {
        let entry = document.createElement('div');
        entry.textContent = `${abbr}: ${name}`;
        entry.style.marginRight = '18px';
        entry.style.marginBottom = '2px';
        legend.appendChild(entry);
    });
    container.appendChild(legend);
    // Append to body or a specific element
    document.body.appendChild(container);
}
// To use in a front-end editor, call renderRiskBoard2D() after the DOM is loaded.
// Example usage (uncomment the next line if running in a browser):
// renderRiskBoard2D();
renderRiskBoard2D();
