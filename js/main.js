window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    //vars used throughout the game
    var blocks; //overarching block group
    var goalBlock; //this is the block that we need to get through the "exit"
    var bounds; //add bounds to the outside of the map, but then make sure there is a gap for the goal block to pass through
    
    var movesLeft = 25; //determine a set number of moves that the player has before the game terminates
    
    var fader; //make a way to darken the screen as time goes on - using an opacity based tween
    
    var movesText; //text that displays how many moves the player has left before the game ends
    var timeText; //text that displays how much time has elapsed in the game (or possibly how much time is left)
    
    var goodSound, badSound; //good = completed the puzzle in the time given, bad = time ran out
    var music; //background music that plays as the game progresses.
    
    function preload() {
        game.load.image("assets/images/block1.png"); //horizontal
        game.load.image("assets/images/block2.png"); //vertical
        game.load.image("assets/images/background.png"); //background image 
    }
        
    function create() {
        
    }
    
    function update() {
       
    }
};
