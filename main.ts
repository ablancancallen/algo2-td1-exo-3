let nb = 0
input.onButtonPressed(Button.A, function () {
    while (nb < 10) {
        nb = 1
        for (let index = 0; index < 10; index++) {
            basic.showNumber(nb)
            nb += 1
            basic.showNumber(nb)
        }
    }
})
