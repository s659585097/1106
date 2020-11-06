serial.redirectToUSB()
basic.forever(function () {
    serial.writeLine("" + pins.analogReadPin(AnalogPin.P1) + "---" + pins.analogReadPin(AnalogPin.P2))
    basic.pause(200)
    if (pins.analogReadPin(AnalogPin.P1) > 300) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M2B,
        100
        )
    } else if (pins.analogReadPin(AnalogPin.P2) > 300) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        100,
        robotbit.Motors.M2B,
        0
        )
    } else if (pins.analogReadPin(AnalogPin.P1) > 300 && pins.analogReadPin(AnalogPin.P2) > 300) {
        robotbit.MotorStopAll()
    } else {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        100,
        robotbit.Motors.M2B,
        100
        )
    }
})
