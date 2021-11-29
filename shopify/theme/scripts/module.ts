import { PubSub } from './types'

export class Module {
	constructor(public pubSub: PubSub) {}

	init() {
		/**
		 * Nothing to do here, but your extensions of this class should have their
		 * own init method for things like:
		 *
		 * - locating existing DOM nodes
		 * - attaching event handlers
		 * */
	}
}
