export default function createGame() {

  const state = {
    players: {},
    fruits: {},
    screen: {
      width: 20,
      height: 20
    }
  }

  function addPlayer(command) {
    const playerId = command.playerId;
    const playerX = command.playerX
    const playerY = command.playerY

    state.players[playerId] = {
      x: playerX,
      y: playerY
    }
  }

  function removeFruit(command) {
    const fruitId = command.fruitId;

    delete state.fruits[fruitId]
  }

  function addFruit(command) {
    const fruitId = command.fruitId;
    const fruitX = command.fruitX
    const fruitY = command.fruitY

    state.fruits[fruitId] = {
      x: fruitX,
      y: fruitY
    }
  }

  function removePlayer(command) {
    const playerId = command.playerId;

    delete state.players[playerId]
  }

  function movePlayer(command) {

    function acceptedMove() {
      return {
        ArrowUp: (player) => player.y = Math.max(player.y - 1, 0),
        ArrowDown: (player) => player.y = Math.min(player.y + 1, state.screen.height -1),
        ArrowLeft: (player) => player.x = Math.max(player.x -1, 0),
        ArrowRight: (player) => player.x = Math.min(player.x + 1, state.screen.width -1)
      }
    } 

    const playerCurrent = state.players[command.playerId]
    const moveFunction = acceptedMove()[command.keyPressed];

    if(moveFunction){
      moveFunction(playerCurrent)
      const player = state.players[command.playerId]; 
      checkColision(player);
    }
  }

  function checkColision(player) {

    for (const fruitId in state.fruits){
      const fruit = state.fruits[fruitId]
      if(fruit.x == player.x && fruit.y == player.y){
        removeFruit({fruitId});
      }
    }
  }
  
  return {
    movePlayer,
    state,
    addPlayer,
    removePlayer,
    addFruit,
    removeFruit
  }
}