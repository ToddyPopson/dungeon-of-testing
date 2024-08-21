controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += -5
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Repeated, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += -5
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x += 3
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Repeated, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += 3
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Repeated, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x += 3
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Repeated, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x += -3
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x += -3
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += 3
})
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    `, SpriteKind.Player))
tiles.setCurrentTilemap(tilemap`level`)
forever(function () {
    scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.UntilDone)
})
