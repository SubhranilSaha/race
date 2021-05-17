class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
     f('playerCount').once("value");
      if(playerCountRef.exists()){ player = new Player();
      var playerCountRef = await database.re
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }
  }

  play(){
    form.hide()
    text("Game Start", 120, 100);
    textSize(30)
    Player.getPlayerInfo();
  }
}
