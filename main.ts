let pap = 0
input.onButtonPressed(Button.A, function () {
    if (pap) {
        pap = 0
    } else {
        pap += 1
    }
})
basic.forever(function () {
    while (pap) {
        pins.digitalWritePin(DigitalPin.P3, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P3, 0)
        basic.pause(100)
    }
})
