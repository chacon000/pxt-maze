let duck: Sprite = null
scene.setTileMap(img`
7 7 7 f f f 7 7 7 7 
f 7 7 7 7 f 7 7 7 f 
f 7 7 7 7 7 7 7 f f 
f f 7 7 7 7 7 f f f 
7 f f 7 7 7 7 7 f f 
7 7 7 7 7 f f 7 f f 
7 f 7 7 7 7 f 7 7 7 
f 7 7 7 7 f 7 7 7 7 
`)
scene.setTile(8, img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 9 9 8 
8 8 8 8 9 8 8 8 8 8 8 8 8 8 9 8 
8 8 8 8 9 8 8 8 9 8 8 8 8 8 9 8 
8 8 8 9 9 8 8 8 8 9 8 8 8 8 9 8 
8 8 8 9 8 8 8 8 8 9 8 8 8 8 9 8 
8 8 9 9 8 8 8 8 9 9 8 8 8 8 9 8 
8 9 9 8 8 8 8 9 9 8 8 8 8 9 8 8 
8 9 8 8 8 8 8 9 8 8 8 8 8 9 8 8 
8 8 8 8 8 8 9 9 8 8 8 8 8 9 8 8 
8 8 8 8 8 8 9 8 8 8 8 8 9 9 8 8 
8 8 8 8 8 8 8 8 8 8 9 9 9 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, true)
scene.setTile(4, img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 2 4 4 4 4 4 2 4 4 2 2 4 
4 4 4 4 2 4 4 4 4 4 2 4 2 2 4 4 
4 4 4 4 2 4 4 4 4 4 2 2 4 4 4 4 
4 4 4 4 2 4 4 4 4 4 2 4 4 4 4 4 
4 4 4 4 2 4 4 4 4 4 2 4 4 4 4 4 
4 4 4 4 4 2 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 2 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 2 2 4 4 4 4 2 4 4 4 4 
4 2 4 4 4 4 2 4 4 4 4 2 2 4 4 4 
4 2 2 4 4 4 2 2 4 4 4 4 2 4 4 4 
4 4 2 2 4 4 4 2 4 4 4 4 2 2 4 4 
4 4 4 4 2 2 4 4 4 4 4 4 4 2 4 4 
4 4 4 4 4 2 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 2 4 4 4 4 4 4 4 4 4 
`, true)
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 5 5 5 7 7 7 7 7 7 7 
7 7 7 7 7 5 5 5 5 5 5 7 7 7 7 7 
7 7 7 7 5 5 5 4 5 5 5 5 7 7 7 7 
7 7 7 7 5 5 4 4 4 5 5 5 7 7 7 7 
7 7 7 7 5 5 5 4 4 4 5 5 7 7 7 7 
7 7 7 7 5 5 5 4 5 5 5 7 7 7 7 7 
7 7 7 7 7 5 5 5 5 5 7 7 7 7 7 7 
7 7 7 7 7 7 7 5 5 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, false)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f 1 1 1 1 f . . . . . 
. . . . f 1 1 1 1 1 1 f . . . . 
. . . . f 1 1 1 1 1 1 f . . . . 
. . . . f 1 f 1 1 f 1 f . . . . 
. . . . f 1 1 1 1 1 1 f . . . . 
. . . . f 1 1 1 1 1 1 f . . . . 
. . . . . f 1 f f 1 f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
f f f f f f f f f f f f f f f f 
f 1 f 1 f f . . . . f f 1 f 1 f 
f f f f f . . . . . . f f f f f 
. f . f . . . . . . . . f . f . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 40; index++) {
    duck = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f 5 5 5 5 5 5 5 5 5 5 f . . 
. f f 5 5 5 5 5 5 5 5 5 5 f f . 
f f . 5 f 5 5 5 5 5 5 f 5 . f f 
f . . 5 f 5 5 f f 5 5 f 5 . . f 
f . . . . . f f f f . . . . . f 
f . . . . . f 4 4 f . . . . . f 
f . . . f f f 4 4 f f f . . . f 
f . f f f 4 4 4 4 4 4 f f f . f 
f . f 4 4 4 f 4 4 f 4 4 4 f . f 
f . f f 4 4 4 4 4 4 4 4 f f . f 
f f . f f 4 4 4 4 4 4 f f . f f 
. f f . f f f f f f f f . f f . 
. . f f . . . . . . . . f f . . 
. . . f f f f f f f f f f . . . 
`, SpriteKind.Food)
}
