controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += -5
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Repeated, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += -5
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Repeated, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += 3
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Repeated, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x += 3
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    assets.animation`player1walkLeft`,
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingRight)
    )
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Repeated, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x += -3
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    assets.animation`player1walkRight`,
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft)
    )
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y += 3
})
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Player1`, SpriteKind.Player))
tiles.setCurrentTilemap(tilemap`level`)
forever(function () {
    scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.UntilDone)
})
