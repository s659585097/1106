serial.redirectToUSB()
basic.forever(function () {
    serial.writeLine("" + pins.analogReadPin(AnalogPin.P1) + "---" + pins.analogReadPin(AnalogPin.P2))
    basic.showNumber(Math.round(sensors.sensor_ping(
    DigitalPin.P8,
    DigitalPin.P0,
    sensors.PingUnit.Centimeters
    )))
    if (sensors.sensor_ping(
    DigitalPin.P8,
    DigitalPin.P0,
    sensors.PingUnit.Centimeters
    ) > 5 && sensors.sensor_ping(
    DigitalPin.P8,
    DigitalPin.P0,
    sensors.PingUnit.Centimeters
    ) < 15) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        255,
        robotbit.Motors.M2B,
        0
        )
        basic.pause(200)
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        80,
        robotbit.Motors.M2B,
        80
        )
        basic.pause(500)
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M2B,
        255
        )
        basic.pause(200)
    } else {
        if (pins.analogReadPin(AnalogPin.P1) > 300) {
            robotbit.MotorRunDual(
            robotbit.Motors.M1A,
            255,
            robotbit.Motors.M2B,
            0
            )
        } else if (pins.analogReadPin(AnalogPin.P2) > 300) {
            robotbit.MotorRunDual(
            robotbit.Motors.M1A,
            0,
            robotbit.Motors.M2B,
            255
            )
        } else {
            robotbit.MotorRunDual(
            robotbit.Motors.M1A,
            80,
            robotbit.Motors.M2B,
            80
            )
        }
    }
})
