radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
radio.setGroup(21)
let code = 62015
radio.sendNumber(code)
