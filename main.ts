
scene.setBackgroundColor(9)

let bird = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . b 5 5 b . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . b b b b b 5 5 5 5 5 5 5 b . .
    . b d 5 b 5 5 5 5 5 5 5 5 b . .
    . . b 5 5 b 5 d 1 f 5 d 4 f . .
    . . b d 5 5 b 1 f f 5 4 4 c . .
    b b d b 5 5 5 d f b 4 4 4 4 b .
    b d d c d 5 5 b 5 4 4 4 4 4 4 b
    c d d d c c b 5 5 5 5 5 5 5 b .
    c b d d d d d 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`)

bird.ay = 200

controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    bird.vy = -100
})

game.onUpdate(function () {
    if (bird.y() < 0) {
        game.over()
    }

    if (bird.y() > scene.screenHeight()) {
        game.over()
    }

})

info.setScore(0)

game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})


function spawnTopTree() {
    let obstacleTop = sprites.create(img`
        . . . . . 6 f c e e e e e e e e e e 6 . . . . .
        . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
        . . . 6 7 7 7 6 6 6 e e e e 6 6 6 6 7 7 6 . . .
        . . 6 7 7 6 8 e 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . e e 7 7 e e e e 7 7 e c e e . . . .
        . . . . . . e e 6 e e e e e e 6 e e f . . . . .
        . . . . . . e e e e e e e e e e e e f . . . . .
        . . . . . . e e e e e e e e e e e e f . . . . .
        . . . . . . e e e e e e e e e e e c f . . . . .
        . . . . . . c e e e e e e e e e e c f . . . . .
        . . . . . . c e e e e e e e e e e f f . . . . .
        . . . . . . f e e e e e e e e e e f e . . . . .
        . . . . . 6 f e e e e e e e e e e f 6 . . . . .
        . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
        . . . 6 7 7 7 6 6 6 e e e e 6 6 6 7 7 7 6 . . .
        . . 6 7 7 6 e e 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . e e 7 7 e e e e 6 7 e e e e . . . .
        . . . . . . e e 6 e e e e e e 6 c e f . . . . .
        . . . . . . e e e e e e e e e e e e f . . . . .
        . . . . . . e e e e e e e e e e e e f . . . . .
        . . . . . . e e e e e e e e e e e c f . . . . .
        . . . . . . e e e e e e e e e e e c f . . . . .
        . . . . . . e e e e e e e e e e e f f . . . . .
        . . . . . . f e e e e e e e e e e f e . . . . .
        . . . . . 6 f e e e e e e e e e e f 6 . . . . .
        . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
        . . . 6 7 7 7 6 6 6 e e e e 6 6 6 7 7 7 6 . . .
        . . 6 7 7 6 e e 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . e e 7 7 e e e e 6 7 e e . . . . . .
        . . . . . . e e 6 e e e e e e 6 c e . . . . . .
        . . . . . . e e f e e e e e e e c e . . . . . .
        . . . . . . e e c e e e e e e e c e . . . . . .
        . . . . . . e e c e e e e e e e f e . . . . . .
        . . . . . . e e c e e e e e e e f e . . . . . .
        . . . . . . e e e e e e e e e e f e . . . . . .
        . . . . . . e e e e e e e e e e c e . . . . . .
        . . . . . 6 e e e e e e e e e e c e 6 . . . . .
        . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . .
        . . . 6 7 7 6 6 6 6 e e e e 6 7 6 6 7 7 6 . . .
        . . 6 7 7 6 e e 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . .
        . . . 6 6 8 c e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . .
        . . . . . . c e 7 7 e e e e 6 7 e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . e e e e e e e e e e e e . . . . . .
        . . . . . . b e e e e e e e e e e b . . . . . .
        . . . . . . . b e e e e e e e e b . . . . . . .
        . . . . . . . . b e e e e e e b . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
    `)

    obstacleTop.setPosition(scene.screenWidth(), 25)
    obstacleTop.vx = -25
}

spawnTopTree()
