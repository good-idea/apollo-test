import { Module } from '../module'
import { KeyupEvent } from '../events'

export class KeystrokeModule extends Module {
	init() {
		window.addEventListener('keyup', this.handleKeyUp)
	}

	handleKeyUp = (e: KeyupEvent['payload']) => {
		const payload = { key: e.key }
		this.pubSub.emit({ type: 'keyup', payload: payload })
	}
}
