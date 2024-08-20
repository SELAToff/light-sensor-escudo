let leirura = 0
basic.showIcon(IconNames.SmallHeart)
basic.pause(2000)
basic.clearScreen()
basic.pause(200)
basic.forever(function () {
    leirura = pins.analogReadPin(AnalogPin.P0)
    if (leirura < 500) {
        basic.showIcon(IconNames.No)
        basic.pause(2000)
        basic.showNumber(leirura)
        basic.pause(2000)
    } else {
        basic.showIcon(IconNames.Yes)
        basic.pause(2000)
        basic.showNumber(leirura)
        basic.pause(2000)
    }
})
