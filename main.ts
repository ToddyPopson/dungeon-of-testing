namespace SpriteKind {
    export const wam = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy += -1000
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Repeated, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x += 3
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    assets.animation`player1a`,
    80,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingRight)
    )
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Repeated, function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x += -3
    characterAnimations.loopFrames(
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    assets.animation`player1a0`,
    80,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft)
    )
})
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`player1`, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setVelocity(50, 10000)
tiles.setCurrentTilemap(tilemap`level0`)
let mySprite = sprites.create(assets.image`myImage`, SpriteKind.wam)
forever(function () {
    mySprite.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y)
    mySprite.setBounceOnWall(false)
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).tileKindAt(TileDirection.Bottom, assets.tile`darkness`) || (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).tileKindAt(TileDirection.Bottom, assets.tile`grass`) || (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).tileKindAt(TileDirection.Bottom, assets.tile`wamso`) || (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).tileKindAt(TileDirection.Bottom, assets.tile`myTile`) || (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).tileKindAt(TileDirection.Bottom, assets.tile`wamfist`) || mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).tileKindAt(TileDirection.Bottom, assets.tile`wamfist0`)))))) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy += 50
    }
})
forever(function () {
    scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    music.play(music.createSong(assets.song`songy`), music.PlaybackMode.UntilDone)
})
