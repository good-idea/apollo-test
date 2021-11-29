import { PubSub as IPubSub, Callback, Event } from './types'
import { EventMap } from './events'

export class PubSub implements IPubSub {
	private topics: { [K in keyof EventMap]?: Callback<EventMap[K]>[] } = {}

	subscribe<K extends keyof EventMap>(
		topic: keyof EventMap,
		callback: Callback<EventMap[K]>,
	) {
		if (!this.topics[topic]) {
			this.topics[topic] = []
		}
		const topicCallbacks = this.topics[topic] || []
		const newValues = [...topicCallbacks, callback]
		this.topics[topic] = newValues

		const unsubscribe = () => {
			const topicCallbacks = this.topics[topic] || []
			const filtered = topicCallbacks.filter((cb) => cb !== callback)
			this.topics[topic] = filtered
		}
		return unsubscribe
	}

	emit(event: Event) {
		const callbacks = this.topics[event.type] || []
		callbacks.forEach((cb) => cb(event.payload))
	}
}
