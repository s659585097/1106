serial.redirectToUSB()
basic.forever(function () {
    serial.writeLine("" + pins.analogReadPin(AnalogPin.P1) + "---" + pins.analogReadPin(AnalogPin.P2))
    if (pins.analogReadPin(AnalogPin.P1) > 300) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        180,
        robotbit.Motors.M2B,
        20
        )
    } else if (pins.analogReadPin(AnalogPin.P2) > 300) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        20,
        robotbit.Motors.M2B,
        180
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
