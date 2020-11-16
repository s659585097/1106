let 障礙 = 0
serial.redirectToUSB()
basic.forever(function () {
    basic.showNumber(Math.round(sensors.sensor_ping(
    DigitalPin.P8,
    DigitalPin.P0,
    sensors.PingUnit.Centimeters
    )))
    障礙 = 0
    if (sensors.sensor_ping(
    DigitalPin.P8,
    DigitalPin.P0,
    sensors.PingUnit.Centimeters
    ) > 2 && sensors.sensor_ping(
    DigitalPin.P8,
    DigitalPin.P0,
    sensors.PingUnit.Centimeters
    ) < 10) {
        障礙 = 1
    } else {
    	
    }
})
basic.forever(function () {
    serial.writeLine("" + pins.analogReadPin(AnalogPin.P1) + "---" + pins.analogReadPin(AnalogPin.P2))
    if (障礙 == 0) {
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
        } else if (false) {
        	
        } else {
            robotbit.MotorRunDual(
            robotbit.Motors.M1A,
            80,
            robotbit.Motors.M2B,
            80
            )
        }
    } else {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        255,
        robotbit.Motors.M2B,
        0
        )
        basic.pause(1000)
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        80,
        robotbit.Motors.M2B,
        80
        )
        basic.pause(5000)
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M2B,
        255
        )
        basic.pause(1000)
    }
})
