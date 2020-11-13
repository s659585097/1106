serial.redirectToUSB()
basic.forever(function () {
    serial.writeLine("" + pins.analogReadPin(AnalogPin.P0) + "---" + pins.analogReadPin(AnalogPin.P1))
    basic.pause(100)
    if (pins.analogReadPin(AnalogPin.P1) > 550) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        160,
        robotbit.Motors.M2B,
        20
        )
    } else if (pins.analogReadPin(AnalogPin.P2) > 550) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        20,
        robotbit.Motors.M2B,
        160
        )
    } else if (false) {
    	
    } else {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        80,
        robotbit.Motors.M2B,
        80
        )
    }
})
