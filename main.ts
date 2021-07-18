input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P0, 500)
})
input.onButtonPressed(Button.AB, function () {
    pins.analogWritePin(AnalogPin.P0, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P0, 50)
})
