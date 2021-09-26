export default function renderScreen(screen, game, requestAnimationFrame){
  const context = screen.getContext('2d');
  context.fillStyle = 'white'
  context.clearRect(0, 0, screen.width, screen.height)

  for(const playerId in game.state.players) {
    const playerCurrent = game.state.players[playerId]
    context.fillStyle = 'black';
    context.fillRect(playerCurrent.x, playerCurrent.y, 1, 1)
  }

  for(const fruitId in game.state.fruits) {
    const fruitCurrent = game.state.fruits[fruitId]
    context.fillStyle = 'green';
    context.fillRect(fruitCurrent.x, fruitCurrent.y, 1, 1);
  }
  requestAnimationFrame(() => renderScreen(screen, game, requestAnimationFrame)) 
}