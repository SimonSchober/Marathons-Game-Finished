var player, database, gamestate = 0, form, game
var allPlayers, distance = 0, playerCount
var Girl, GirlIMG
var Boy, BoyIMG
var TrapIMG, CoinIMG, HeartIMG, ResetIMG, backgroundIMG
var loadingSprite, loadingIMG
var TrackIMG
var player1, player2, players
var Water, WaterIMG
var dog, dogIMG, DogCrew

function preload() {
    BoyIMG = loadAnimation("images/B1.png", "images/B2.png", "images/B3.png", "images/B4.png", "images/B5.png")
    GirlIMG = loadAnimation("images/G1.png", "images/G2.png", "images/G3.png", "images/G4.png", "images/G5.png")
    ResetIMG = loadImage("images/Reset.png")
    CoinIMG = loadImage("images/Coin.png")
    HeartIMG = loadImage("images/Heart.png")
    TrapIMG = loadImage("images/Trap.png")
    TrackIMG = loadImage("images/Track.jpg")
    WaterIMG = loadImage("images/Realistic Water.png")
    backgroundIMG = loadImage("images/Background.png")
    dogIMG = loadAnimation("images/Dog1.png", "images/Dog2.png", "images/Dog3.png", "images/Dog4.png", "images/Dog5.png")
}

function setup() {
    createCanvas(displayWidth, displayHeight - 150);
    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()
}

function draw() {
    background(backgroundIMG);
    if (playerCount === 2) {
        game.update(1)
    }
    if (gamestate === 1) {
        form.hide()
        clear()
        game.play()
    }

    if (gamestate === 2) {
        game.end()
    }

}

function windowResized() {
    resizeCanvas(windowWidth - 100, windowHeight - 50)
}
