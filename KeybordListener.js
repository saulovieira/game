export default function createKeybordListener(document) {
  const state = {
    observers: []
  }

  function subscribe(observerFunction) {
    state.observers.push(observerFunction);
  }
  
  function notifyAll(command) {
    for(const observerFunction of state.observers) {
      observerFunction(command);
    }
  }

  document.addEventListener('keydown', handlerKeyPress);
  
  function handlerKeyPress(event){
  
    const keyPressed = event.key;

    const command = {
      playerId: 'player1',
      keyPressed: keyPressed
    }

    notifyAll(command);

  }

  return {
    subscribe: subscribe
  }
}