basic.forever(function () {
    serial.writeValue("x", PlanetX_Basic.joystickval(PlanetX_Basic.joyvalEnum.x))
    serial.writeValue("y", PlanetX_Basic.joystickval(PlanetX_Basic.joyvalEnum.y))
    if (PlanetX_Basic.joystickkey(PlanetX_Basic.joykeyEnum.pressed)) {
        basic.showIcon(IconNames.Heart)
    } else if (PlanetX_Basic.joystickkey(PlanetX_Basic.joykeyEnum.unpressed)) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    serial.writeLine("")
})
