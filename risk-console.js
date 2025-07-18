// Console-only Risk board representation
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
];
// Simple ASCII map
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
};
// Game rules
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
// Function to print the ASCII board
function printRiskBoard() {
    console.log("🎲 RISK BOARD GAME 🎲");
    console.log("=====================");
    console.log(riskBoardAscii);
}
// Function to print the 2D board representation
function print2DBoard() {
    console.log("\n📍 2D BOARD REPRESENTATION:");
    console.log("============================");
    // Print column headers
    console.log("   " + Array.from({ length: 9 }, (_, i) => i.toString()).join(" "));
    // Print rows with row numbers
    riskBoard2D.forEach((row, rowIndex) => {
        const rowStr = row.map(cell => cell.trim() ? cell.padEnd(2) : '  ').join(' ');
        console.log(`${rowIndex}: ${rowStr}`);
    });
}
// Function to print the territory legend
function printLegend() {
    console.log("\n🗺️  TERRITORY LEGEND:");
    console.log("====================");
    Object.entries(territoryLegend).forEach(([abbr, name]) => {
        console.log(`${abbr}: ${name}`);
    });
}
// Function to print game rules
function printRiskRules() {
    console.log("\n📋 GAME RULES:");
    console.log("===============");
    console.log(riskRules);
}
// Function to display territory connections
function printTerritoryConnections() {
    console.log("\n🔗 TERRITORY CONNECTIONS:");
    console.log("=========================");
    territories.forEach(territory => {
        console.log(`${territory.name}:`);
        territory.neighbors.forEach(neighbor => {
            console.log(`  → ${neighbor}`);
        });
        console.log("");
    });
}
// Main demo function
function showRiskGameDemo() {
    console.clear();
    printRiskBoard();
    print2DBoard();
    printLegend();
    printTerritoryConnections();
    printRiskRules();
    console.log("\n🎯 Demo completed! This shows what your Risk board game looks like.");
    console.log("💡 Open 'risk-demo.html' in a browser to see the interactive visual version!");
}
// Run the demo
showRiskGameDemo();
