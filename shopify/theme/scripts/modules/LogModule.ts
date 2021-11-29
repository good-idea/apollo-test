import { Module } from '../module'
import { KeyupEvent } from '../events'
import { Unsubscribe } from '../types'

export class LogModule extends Module {
	keysPressed: string[] = []
	unsubscribe: Unsubscribe = () => {}

	init() {
		this.unsubscribe = this.pubSub.subscribe('keyup', this.logKeyUp)
	}

	logKeyUp = (payload: KeyupEvent['payload']) => {
		this.keysPressed = [...this.keysPressed, payload.key]
		console.log(this.keysPressed)
		if (this.keysPressed.length > 10) {
			this.unsubscribe()
		}
	}
}
