input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("whats your name")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("jax a lovely name")
})
basic.showString("Hello!")
