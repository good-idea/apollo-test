import { EventMap } from '../events'

export interface IEvent<P extends Record<string, any> = Record<string, any>> {
	type: string
	payload: P & { [key: string]: any }
}

export type Event = EventMap[keyof EventMap]

export type Callback<E extends Event> = (payload: E['payload']) => void

export type Unsubscribe = () => void

export interface PubSub {
	subscribe: <K extends keyof EventMap>(
		eventName: K,
		callback: Callback<EventMap[K]>,
	) => Unsubscribe
	emit: (event: Event) => void
}
