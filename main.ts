input.onButtonPressed(Button.A, function () {
    autoheadlight = 1
    while (autoheadlight == 1) {
        if (x < 30) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # . # #
                # # # # #
                # # # # #
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    autoheadlight = 0
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    autoheadlight = 0
    basic.showString("Off")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let x = 0
let autoheadlight = 0
basic.showString("Ki Frankie")
autoheadlight = 0
basic.forever(function () {
    x = input.lightLevel()
})
