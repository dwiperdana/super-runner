namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false, effects.smiles)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (runner.y > 80) {
        runner.vy = -140
        runner.startEffect(effects.trail, 200)
    }
})
let projectile: Sprite = null
let runner: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303040605060303060601010101010101010101`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.floorDark2,sprites.dungeon.floorDark4,sprites.dungeon.floorDark1,sprites.dungeon.floorDark0,sprites.dungeon.floorDark3],
            TileScale.Sixteen
        ))
effects.blizzard.startScreenEffect()
runner = sprites.create(img`
. f f f . f f f f f . . . . 
f f f f f c c c c f f . . . 
f f f f b c c c c c c f . . 
f f f c 3 c c c c c c f . . 
. f 3 3 c c c c c c c c f . 
. f f f c c c c c 4 c c f . 
. f f f f c c c 4 4 e f f . 
. f f 4 4 f b f 4 4 e f f . 
. . f 4 d 4 1 f d d f f . . 
. . f f f 4 d d d d f . . . 
. . . f e e 4 4 4 e f . . . 
. . . 4 d d e 3 3 3 f . . . 
. . . e d d e 3 3 3 f . . . 
. . . f e e f 6 6 6 f . . . 
. . . . f f f f f f . . . . 
. . . . . f f f . . . . . . 
`, SpriteKind.Player)
animation.runImageAnimation(
runner,
[img`
. . . . . . . . . . . . . . 
. f f f . f f f f f . . . . 
f f f f f c c c c f f . . . 
f f f f b c c c c c c f . . 
f f f c 3 c c c c c c f . . 
. f 3 3 c c c c c c c c f . 
. f f f c c c c c 4 c c f . 
. f f f f c c c 4 4 c f f . 
. f f 4 4 f b f 4 4 f f f . 
. f f 4 d 4 1 f d d c f . . 
. . f f f 4 d d d d f . . . 
. . 4 d d e 4 4 4 e f . . . 
. . e d d e 3 3 3 3 f . . . 
. . f e e f 6 6 6 6 f f . . 
. . f f f f f f f f f f . . 
. . . f f . . . f f f . . . 
`,img`
. . . . . . . . . . . . . . 
. f f f . f f f f f . . . . 
f f f f f c c c c f f . . . 
f f f f b c c c c c c f . . 
f f f c 3 c c c c c c f . . 
. f 3 3 c c c c c c c c f . 
. f f f c c c c c 4 c c f . 
. f f f f c c c 4 4 c f f . 
. f f 4 4 f b f 4 4 f f f . 
. . f 4 d 4 1 f d d f f . . 
. . f f f e e d d d f . . . 
. . . f 4 d d e 4 e f . . . 
. . . f e d d e 3 3 f . . . 
. . f f f e e f 6 6 f f . . 
. . f f f f f f f f f f . . 
. . . f f . . . f f f . . . 
`],
100,
true
)
runner.ay = 320
scene.setBackgroundColor(8)
runner.setPosition(20, 0)
runner.setFlag(SpriteFlag.ShowPhysics, true)
let speed = -100
game.onUpdate(function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(1000, function () {
    speed += Math.randomRange(-1, -5)
    if (Math.percentChance(75)) {
        projectile = sprites.createProjectileFromSide(img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 c 6 6 6 6 c 7 7 7 c . . . 
. f 7 6 f 6 6 f 6 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 6 c 7 7 6 f c . . 
. . . f c c c c 7 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`, speed, 0)
        animation.runImageAnimation(
        projectile,
        [img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 c 6 6 6 6 c 7 7 7 c . . . 
. f 7 6 f 6 6 f 6 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 6 c 7 7 6 f c . . 
. . . f c c c c 7 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`,img`
. . . c c c c c c . . . . . . . 
. . c 6 7 7 7 7 6 c . . . . . . 
. c 7 7 7 7 7 7 7 7 c . . . . . 
c 6 7 7 7 7 7 7 7 7 6 c . . . . 
c 7 c 6 6 6 6 c 7 7 7 c . . . . 
f 7 6 f 6 6 f 6 7 7 7 f . . . . 
f 7 7 7 7 7 7 7 7 7 7 f . . . . 
. f 7 7 7 7 6 c 7 7 6 f . . . . 
. . f c c c c 7 7 6 f c c c . . 
. . c 6 2 7 7 7 f c c 7 7 7 c . 
. c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
. c 1 1 1 1 7 6 6 c 6 6 6 c c c 
. c 1 1 1 1 1 6 6 6 6 6 6 c . . 
. c 6 1 1 1 1 1 6 6 6 6 6 c . . 
. . c 6 1 1 1 1 1 7 6 6 c c . . 
. . . c c c c c c c c c c . . . 
`,img`
. . . . . c c c c c c c . . . . 
. . . . c 6 7 7 7 7 7 6 c . . . 
. . . c 7 c 6 6 6 6 c 7 6 c . . 
. . c 6 7 6 f 6 6 f 6 7 7 c . . 
. . c 7 7 7 7 7 7 7 7 7 7 c . . 
. . f 7 8 1 f f 1 6 7 7 7 f . . 
. . f 6 f 1 f f 1 f 7 7 7 f . . 
. . . f f 2 2 2 2 f 7 7 6 f . . 
. . c c f 2 2 2 2 7 7 6 f c . . 
. c 7 7 7 7 7 7 7 7 c c 7 7 c . 
c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
. f 6 1 1 1 1 1 6 6 6 6 c . . . 
. . f f c c c c c c c c . . . . 
`,img`
. . . . . . c c c c c c c . . . 
. . . . . c f f 6 6 f f 7 c . . 
. . . . c 7 6 6 6 6 6 6 7 6 c . 
. . . c 7 7 7 7 7 7 7 7 7 7 c . 
. . . c 7 8 1 f f 1 6 7 7 7 c . 
. . . f 6 f 1 f f 1 f 7 7 7 f . 
. . . f 6 f 2 2 2 2 f 7 7 7 f . 
. . c c 6 f 2 2 2 2 f 7 7 6 f . 
. c 7 7 7 7 2 2 2 2 7 7 f c . . 
c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
. f 6 1 1 1 1 6 6 6 6 6 c . . . 
. . f f c c c c c c c c . . . . 
`,img`
. . . . . . c c c c c c c . . . 
. . . . . c f f 6 6 f f 7 c . . 
. . . . c 7 6 6 6 6 6 6 7 6 c . 
. . . c 7 7 7 7 7 7 7 7 7 7 c . 
. . . c 7 8 1 f f 1 6 7 7 7 c . 
. . . f 6 f 1 f f 1 f 7 7 7 f . 
. . . f 6 f 2 2 2 2 f 7 7 7 f . 
. . c c 6 f 2 2 2 2 f 7 7 6 f . 
. c 7 7 7 7 2 2 2 2 7 7 f c . . 
c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
. f 6 1 1 1 1 6 6 6 6 6 c . . . 
. . f f c c c c c c c c . . . . 
`],
        200,
        true
        )
        projectile.ax = -5
        projectile.y = 87
    }
})
