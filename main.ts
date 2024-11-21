let Luz_x = 0
let Luz_y = 0
basic.forever(function () {
    led.plot(Luz_x, Luz_y)
    if (input.acceleration(Dimension.X) > 700) {
        Luz_x = 4
    } else if (input.acceleration(Dimension.Y) > 700) {
        Luz_y = 4
    } else if (input.acceleration(Dimension.X) > 200 && input.acceleration(Dimension.X) < 700) {
        Luz_x = 3
    } else if (input.acceleration(Dimension.Y) > 200 && input.acceleration(Dimension.Y) < 700) {
        Luz_y = 3
    } else if (input.acceleration(Dimension.X) > 0 && input.acceleration(Dimension.X) < 200) {
        Luz_x = 2
    } else if (input.acceleration(Dimension.Y) > 0 && input.acceleration(Dimension.Y) < 200) {
        Luz_y = 2
    } else if (input.acceleration(Dimension.X) < 0 && input.acceleration(Dimension.X) > -200) {
        Luz_x = 1
    } else if (input.acceleration(Dimension.Y) < 0 && input.acceleration(Dimension.Y) > -200) {
        Luz_x = 1
    } else if (input.acceleration(Dimension.X) > -200 && input.acceleration(Dimension.X) > -700) {
        Luz_x = 1
    } else if (input.acceleration(Dimension.Y) > -200 && input.acceleration(Dimension.Y) > -700) {
        Luz_y = 1
    } else if (input.acceleration(Dimension.X) > -700) {
        Luz_x = 1
    } else if (input.acceleration(Dimension.Y) > -700) {
        Luz_y = 1
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
    if (input.compassHeading() > 45 && input.compassHeading() < 135) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (input.compassHeading() > 316 || input.compassHeading() < 44) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (input.compassHeading() > 226 && input.compassHeading() < 315) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (input.compassHeading() > 135 && input.compassHeading() < 225) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
