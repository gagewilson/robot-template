function Left () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 89) {
        Right()
    }
    if (receivedNumber == 69) {
        Left()
    }
    if (receivedNumber == 59) {
        forward()
    }
    if (receivedNumber == 39) {
        backward()
    }
    if (receivedNumber == 19) {
        stop()
    }
})
function stop () {
    pins.servoSetPulse(AnalogPin.P8, 0)
    pins.servoSetPulse(AnalogPin.P13, 0)
    control.waitMicros(20000)
}
input.onButtonPressed(Button.A, function () {
    sensor()
})
function backward () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
input.onButtonPressed(Button.B, function () {
	
})
function forward () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
function Right () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
function sensor () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) + 58
}
let distance = 0
basic.showIcon(IconNames.Target)
distance = 2
basic.forever(function () {
	
})
