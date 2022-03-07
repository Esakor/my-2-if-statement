input.onButtonPressed(Button.A, function () {
    random = randint(0, 2)
    if (random == 0) {
        basic.showIcon(IconNames.Giraffe)
    } else if (random == 1) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showIcon(IconNames.No)
    }
})
let random = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
